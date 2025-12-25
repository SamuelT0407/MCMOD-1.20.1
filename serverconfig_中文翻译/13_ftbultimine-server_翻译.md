# ⛏️ ftbultimine-server.snbt
## FTB Ultimine（连锁挖掘）- 服务器配置翻译 ⭐重要

---

```snbt
{
    # 高级选项，建议保持默认
    # 设为true将在第一个无法挖掘的方块处停止
    # 设为false会跳过无法挖掘的方块继续挖其他的
    cancel_on_block_break_fail: false

    # ⭐ 每挖掘一个方块增加的饥饿值（消耗饱食度）
    # 越高消耗越多饥饿，0 = 不消耗饥饿
    # 默认20意味着：20x0.005 = 每个方块消耗0.1饱食度
    # 范围: 0.0 ~ 10000.0
    exhaustion_per_block: 20.0

    # 每挖掘一个方块消耗的经验量
    # 0 = 不消耗经验
    # 可以设置小数，如0.5表示每挖两个方块消耗1点经验
    # 范围: 0.0 ~ 20000.0
    experience_per_block: 0.0

    # ⭐ 一次连锁挖掘最多可以挖掉的方块数
    # 这是最重要的限制！太高会导致服务器卡顿
    # 64 是比较合理的值
    # 范围: 0 ~ 32768
    max_blocks: 64

    # 在无形状挖掘模式下，这些标签会被视为相同的方块
    # 例如：所有基础石头类方块（石头、深板岩等）可以一起挖
    # "c:*_ores" 表示所有矿石
    # "forge:ores/*" 表示Forge标签下的所有矿石
    merge_tags: [
        "minecraft:base_stone_overworld"
        "c:*_ores"
        "forge:ores/*"
    ]

    # 在有形状挖掘模式下，这些标签会被视为相同的方块
    # "*" 表示所有方块都视为相同
    merge_tags_shaped: ["*"]

    # 当工具耐久度低于此值时停止挖掘
    # 0 = 不检测耐久度，可能会把工具挖坏
    # 设为1可以防止工具被挖坏
    # 范围: 0 ~ 100
    prevent_tool_break: 0

    # 是否需要使用工具才能连锁挖掘
    # true = 必须手持工具才能连锁
    # false = 空手也能连锁
    require_tool: false

    # ⭐ 按住连锁挖掘键右键使用斧头的功能
    # 可以批量去皮原木、刮除/去蜡铜块
    right_click_axe: true

    # ⭐ 按住连锁挖掘键右键收获作物
    # 可以批量收获成熟的作物
    right_click_harvesting: true

    # 按住连锁挖掘键右键使用锄
    # 可以批量将草地/泥土变成耕地
    right_click_hoe: true

    # 按住连锁挖掘键右键使用铲
    # 可以批量将草地/泥土变成土径
    right_click_shovel: true

    # 连续使用连锁挖掘功能的冷却时间（游戏刻）
    # 0 = 没有冷却，可以一直连锁
    # 设置冷却可以防止滥用
    # 范围: 0 ~ 无限大
    ultimine_cooldown: 0
}
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| max_blocks | 64 | ⭐ 一次最多连锁64个方块 |
| exhaustion_per_block | 20.0 | 消耗少量饥饿值 |
| experience_per_block | 0.0 | 不消耗经验 |
| right_click_harvesting | true | ✅ 支持批量收割 |
| prevent_tool_break | 0 | ⚠️ 工具可能被挖坏 |

### 右键功能汇总

| 工具 | 功能 | 当前状态 |
|-----|------|---------|
| 斧头 | 批量去皮/刮铜/去蜡 | ✅ 启用 |
| 锄头 | 批量开垦耕地 | ✅ 启用 |
| 铲子 | 批量铺土径 | ✅ 启用 |
| 空手 | 批量收割作物 | ✅ 启用 |

**服务器管理提示**:
- 如果服务器卡顿，降低 `max_blocks` 值
- 设置 `prevent_tool_break: 1` 可以防止工具被意外挖坏
- 设置 `ultimine_cooldown` 可以限制滥用
