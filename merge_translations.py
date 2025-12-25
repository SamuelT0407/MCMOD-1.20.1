#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
翻译整合脚本
将 translation_work/patches/{mod_id}/zh_cn_translated.json
整合到 resourcepacks/CN/assets/{mod_id}/lang/zh_cn.json
"""

import os
import json
from pathlib import Path

# 路径配置
BASE_DIR = Path(__file__).parent
PATCHES_DIR = BASE_DIR / "translation_work" / "patches"
CN_PACK_DIR = BASE_DIR / "resourcepacks" / "CN" / "assets"

def load_json(filepath):
    """安全加载JSON文件"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"  ⚠️ 无法读取 {filepath}: {e}")
        return None

def save_json(filepath, data):
    """保存JSON文件"""
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def merge_translations():
    """主函数：整合所有翻译"""
    print("=" * 60)
    print("翻译整合脚本")
    print("=" * 60)

    stats = {
        'merged': 0,      # 合并到现有文件
        'created': 0,     # 创建新文件
        'skipped': 0,     # 跳过（无翻译文件）
        'errors': 0,      # 错误
        'total_keys': 0   # 总key数
    }

    # 遍历所有模组的翻译补丁
    if not PATCHES_DIR.exists():
        print(f"❌ 补丁目录不存在: {PATCHES_DIR}")
        return

    mod_dirs = [d for d in PATCHES_DIR.iterdir() if d.is_dir()]
    print(f"\n找到 {len(mod_dirs)} 个模组目录\n")

    for mod_dir in sorted(mod_dirs):
        mod_id = mod_dir.name
        translated_file = mod_dir / "zh_cn_translated.json"

        # 检查是否有翻译文件
        if not translated_file.exists():
            stats['skipped'] += 1
            continue

        # 加载翻译
        translations = load_json(translated_file)
        if translations is None:
            stats['errors'] += 1
            continue

        key_count = len(translations)
        stats['total_keys'] += key_count

        # 目标文件路径
        target_dir = CN_PACK_DIR / mod_id / "lang"
        target_file = target_dir / "zh_cn.json"

        # 检查目标文件是否存在
        if target_file.exists():
            # 合并到现有文件
            existing = load_json(target_file)
            if existing is None:
                existing = {}

            # 合并翻译（新翻译覆盖旧的）
            existing.update(translations)
            save_json(target_file, existing)
            print(f"✅ 合并 {mod_id}: +{key_count} keys (共 {len(existing)} keys)")
            stats['merged'] += 1
        else:
            # 创建新文件
            save_json(target_file, translations)
            print(f"🆕 创建 {mod_id}: {key_count} keys")
            stats['created'] += 1

    # 打印统计
    print("\n" + "=" * 60)
    print("整合完成！统计信息：")
    print("=" * 60)
    print(f"  ✅ 合并到现有文件: {stats['merged']} 个模组")
    print(f"  🆕 创建新文件: {stats['created']} 个模组")
    print(f"  ⏭️ 跳过（无翻译）: {stats['skipped']} 个模组")
    print(f"  ❌ 错误: {stats['errors']} 个")
    print(f"  📝 总计翻译key: {stats['total_keys']} 个")
    print("=" * 60)

if __name__ == "__main__":
    merge_translations()
    input("\n按回车键退出...")
