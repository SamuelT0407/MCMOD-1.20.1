# ⚡ cofh_core-server.toml
## CoFH核心（热力系列基础）- 服务器配置翻译

---

```toml
[Commands]  # 命令设置

    # "/cofh crafting" 命令需要的权限等级
    # 此命令打开虚拟工作台界面
    # 0 = 所有玩家, 2 = OP, 4 = 服务器控制台
    # 范围: 0 ~ 4
    "Crafting Permission Level" = 2

    # "/cofh enderchest" 命令需要的权限等级
    # 此命令打开末影箱界面
    # 范围: 0 ~ 4
    "EnderChest Permission Level" = 2

    # "/cofh heal" 命令需要的权限等级
    # 此命令可以治疗玩家
    # 范围: 0 ~ 4
    "Heal Permission Level" = 2

    # "/cofh ignite" 命令需要的权限等级
    # 此命令可以点燃目标
    # 范围: 0 ~ 4
    "Ignite Permission Level" = 2

    # "/cofh repair" 命令需要的权限等级
    # 此命令可以修复物品
    # 范围: 0 ~ 4
    "Repair Permission Level" = 2

[Enchantments]  # 附魔设置

    # 如果设为true，羽落附魔将防止农田被踩坏
    # 穿着有羽落附魔的鞋子时跳到农田上不会把农田变成泥土
    "Improved Feather Falling" = true

    # 如果设为true，修补附魔的行为将被改进：
    # - 经验球将始终优先用于修复物品
    # - 优先修复损坏程度最严重的物品
    # 原版中经验球可能直接加到经验条而不修复物品
    "Improved Mending" = true

    [Enchantments.Holding]  # 容量附魔设置

        # 是否启用容量附魔
        # 容量附魔可以增加存储物品和方块的容量
        Enable = true

        # 是否将此附魔视为"宝藏"附魔
        # 宝藏附魔只能通过战利品、交易等获得，不能从附魔台获得
        Treasure = false

        # 容量附魔的最大等级
        # 范围: 1 ~ 10
        "Max Level" = 4
```

---

## 📝 配置说明

| 配置项 | 推荐值 | 说明 |
|-------|-------|------|
| 命令权限等级 | 2 | 默认需要OP权限，服务器管理员可用 |
| Improved Mending | true | 强烈建议开启，让修补更实用 |
| Holding Max Level | 4 | 容量附魔最高4级，每级增加一定容量 |
