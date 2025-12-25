#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Minecraft 模组翻译分析工具
功能：扫描模组，分析翻译情况，生成缺失翻译报告
"""

import os
import json
import zipfile
from pathlib import Path
from datetime import datetime

class ModTranslator:
    def __init__(self, base_dir=None):
        self.base_dir = Path(base_dir) if base_dir else Path(__file__).parent
        self.mods_dir = self.base_dir / "mods"
        self.work_dir = self.base_dir / "translation_work"
        self.extracted_dir = self.work_dir / "extracted"
        self.patches_dir = self.work_dir / "patches"
        self.reports_dir = self.work_dir / "reports"

        # 翻译源（按优先级排序）
        self.translation_sources = [
            self.base_dir / "resourcepacks" / "CN" / "assets",
            self.base_dir / "resourcepacks" / "Minecraft-Mod-Language-Modpack-Converted-1.20.1" / "assets",
        ]

        self.stats = {
            'total_mods': 0,
            'mods_with_missing': 0,
            'total_missing_keys': 0,
            'by_mod': {}
        }

    def setup(self):
        """创建工作目录"""
        for d in [self.work_dir, self.extracted_dir, self.patches_dir, self.reports_dir]:
            d.mkdir(parents=True, exist_ok=True)

    def load_json(self, filepath):
        """安全加载JSON文件"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {}

    def save_json(self, filepath, data):
        """保存JSON文件"""
        filepath.parent.mkdir(parents=True, exist_ok=True)
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

    def extract_mod(self, jar_path):
        """从JAR文件中提取语言文件"""
        mod_id = jar_path.stem.split('-')[0].lower().replace(' ', '_').replace('.', '_')
        result = {'mod_id': mod_id, 'en_us': {}, 'zh_cn': {}}

        try:
            with zipfile.ZipFile(jar_path, 'r') as jar:
                for name in jar.namelist():
                    if '/lang/' in name:
                        if name.endswith('en_us.json'):
                            mod_id_from_path = name.split('assets/')[-1].split('/')[0]
                            if mod_id_from_path:
                                result['mod_id'] = mod_id_from_path
                            try:
                                content = jar.read(name).decode('utf-8')
                                result['en_us'] = json.loads(content)
                            except:
                                pass
                        elif name.endswith('zh_cn.json'):
                            try:
                                content = jar.read(name).decode('utf-8')
                                result['zh_cn'] = json.loads(content)
                            except:
                                pass
        except:
            pass

        return result

    def find_external_translations(self, mod_id):
        """从外部资源包查找翻译"""
        translations = {}
        for source in self.translation_sources:
            lang_file = source / mod_id / "lang" / "zh_cn.json"
            if lang_file.exists():
                external = self.load_json(lang_file)
                # 合并，但不覆盖已有的（保持优先级）
                for k, v in external.items():
                    if k not in translations:
                        translations[k] = v
        return translations

    def analyze_mod(self, jar_path):
        """分析单个模组的翻译情况"""
        extracted = self.extract_mod(jar_path)
        mod_id = extracted['mod_id']

        if not extracted['en_us']:
            return None

        # 收集所有可用的中文翻译
        all_zh = {}

        # 1. 模组内置翻译
        all_zh.update(extracted['zh_cn'])

        # 2. 外部资源包翻译
        external = self.find_external_translations(mod_id)
        for k, v in external.items():
            if k not in all_zh:
                all_zh[k] = v

        # 找出缺失的翻译
        missing = {}
        for key, value in extracted['en_us'].items():
            if key not in all_zh:
                missing[key] = value

        return {
            'mod_id': mod_id,
            'jar_name': jar_path.name,
            'total_keys': len(extracted['en_us']),
            'translated_keys': len(all_zh),
            'missing_keys': len(missing),
            'missing': missing,
            'existing_zh': all_zh
        }

    def generate_patch(self, analysis):
        """生成翻译补丁文件"""
        mod_id = analysis['mod_id']
        patch_dir = self.patches_dir / mod_id
        patch_dir.mkdir(parents=True, exist_ok=True)

        # 保存缺失的英文key
        if analysis['missing']:
            self.save_json(patch_dir / "missing_en.json", analysis['missing'])

        # 保存已有的中文翻译（供参考）
        if analysis['existing_zh']:
            self.save_json(patch_dir / "existing_zh.json", analysis['existing_zh'])

        # 保存模组信息
        info = {
            'mod_id': mod_id,
            'jar_name': analysis['jar_name'],
            'total_keys': analysis['total_keys'],
            'missing_keys': analysis['missing_keys'],
            'analyzed_at': datetime.now().isoformat()
        }
        self.save_json(patch_dir / "info.json", info)

    def run(self):
        """运行分析"""
        print("=" * 60)
        print("Minecraft 模组翻译分析工具 v2")
        print("=" * 60)

        self.setup()

        if not self.mods_dir.exists():
            print(f"❌ 模组目录不存在: {self.mods_dir}")
            return

        jar_files = list(self.mods_dir.glob("*.jar"))
        print(f"\n找到 {len(jar_files)} 个模组文件")

        for i, jar_path in enumerate(jar_files, 1):
            print(f"\r分析中... [{i}/{len(jar_files)}] {jar_path.name[:40]}", end="", flush=True)

            analysis = self.analyze_mod(jar_path)
            if analysis:
                self.stats['total_mods'] += 1
                if analysis['missing_keys'] > 0:
                    self.stats['mods_with_missing'] += 1
                    self.stats['total_missing_keys'] += analysis['missing_keys']
                    self.generate_patch(analysis)

                    self.stats['by_mod'][analysis['mod_id']] = {
                        'missing': analysis['missing_keys'],
                        'total': analysis['total_keys']
                    }

        print("\n")

        # 保存统计报告
        self.save_json(
            self.reports_dir / f"analysis_statistics.json",
            self.stats
        )

        # 打印统计
        print("=" * 60)
        print("分析完成！统计信息：")
        print("=" * 60)
        print(f"  总模组数：{self.stats['total_mods']}")
        print(f"  需要翻译的模组：{self.stats['mods_with_missing']}")
        print(f"  总缺失key数：{self.stats['total_missing_keys']}")
        print(f"\n补丁已生成到：{self.patches_dir}")

        # 显示缺失最多的模组
        if self.stats['by_mod']:
            print("\n缺失最多的模组（前10）：")
            sorted_mods = sorted(
                self.stats['by_mod'].items(),
                key=lambda x: x[1]['missing'],
                reverse=True
            )[:10]
            for mod_id, info in sorted_mods:
                print(f"  - {mod_id}: {info['missing']} keys")

if __name__ == "__main__":
    translator = ModTranslator()
    translator.run()
    input("\n按回车键退出...")
