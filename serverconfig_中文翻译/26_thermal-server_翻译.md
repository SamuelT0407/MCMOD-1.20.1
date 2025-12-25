# 🔥 thermal-server.toml
## Thermal热力系列 - 服务器配置翻译

---

## 🌐 全局选项

```toml
["Global Options"]  # 全局选项

    # 独立红石通量模式
    # true = RF成为独立能量系统，不与FE互通
    # ⚠️ 只有非常清楚后果的情况下才开启！
    "Standalone Redstone Flux" = false

    # ⭐ 方块破坏时是否保留能量
    "Blocks Retain Energy" = true

    # 方块破坏时是否保留物品
    "Blocks Retain Inventory" = false

    # 方块破坏时是否保留流体
    "Blocks Retain Tank Contents" = false

    # 方块破坏时是否保留增强
    "Blocks Retain Augments" = true

    # 方块破坏时是否保留红石控制配置
    "Blocks Retain Redstone Control" = true

    # 方块破坏时是否保留面配置
    "Blocks Retain Side Configuration" = true

    # 方块破坏时是否保留传输控制配置
    "Blocks Retain Transfer Control" = true
```

---

## 🔧 工具设置

```toml
[Tools.Satchel]  # 随身袋设置

    # 不允许放入随身袋的物品列表
    # 默认禁止潜影盒和随身袋自身
    Denylist = [
        "thermal:satchel",
        "minecraft:shulker_box",
        "minecraft:white_shulker_box",
        # ... 其他颜色的潜影盒
    ]
```

---

## 👹 生物设置

```toml
[Mobs]  # 生物设置

    # 是否启用玄武岩怪（Basalz）
    Basalz = true

    # 是否启用闪电怪（Blitz）
    Blitz = true

    # 是否启用暴风雪怪（Blizz）
    Blizz = true

    # ⭐ 闪电怪是否偶尔召唤闪电
    "Blitz Lightning" = true
```

---

## ⚡ 增强设置

```toml
[Augments]  # 增强设置

    # 默认启用面配置（不需要增强就能配置面）
    "Default Side Reconfiguration" = true

    # 默认启用红石控制
    "Default Redstone Control" = true

    # 默认启用XP存储
    "Default XP Storage" = false
```

---

## 👨‍🌾 村民交易

```toml
[Villagers]  # 村民设置

    # 是否为各种村民添加交易
    "Enable Villager Trades" = true

    # 是否为流浪商人添加交易
    "Enable Wandering Trader Trades" = true
```

---

## ⏱️ 设备设置

```toml
[Devices.TreeExtractor]  # 树液提取器
    # 基础时间常数（tick）
    "Time Constant" = 500    # 25秒

[Devices.Composter]  # 批量堆肥器
    "Time Constant" = 120    # 6秒
    Particles = true

[Devices.Fisher]  # 水产缠绕器
    "Time Constant" = 4800   # 4分钟
    # 每个附近水源方块减少的时间（tick）
    "Water Source Time Constant Reduction" = 20
    Particles = true
```

---

## 🔋 发电机设置

```toml
[Dynamos]  # 发电机（每tick产生的基础能量）

    [Dynamos.Stirling]      # 斯特林发电机
        "Base Power" = 40       # 40 RF/tick

    [Dynamos.Compression]   # 压缩发电机
        "Base Power" = 40

    [Dynamos.Magmatic]      # 岩浆发电机
        "Base Power" = 40

    [Dynamos.Numismatic]    # 货币发电机
        "Base Power" = 40

    [Dynamos.Lapidary]      # 宝石发电机
        "Base Power" = 40

    [Dynamos.Disenchantment] # 祛魔发电机
        "Base Power" = 40

    [Dynamos.Gourmand]      # 美食发电机
        "Base Power" = 40
```

---

## ⚙️ 机器设置

```toml
[Machines]  # 机器（每tick消耗的基础能量）

    [Machines.Furnace]      # 红石熔炉
        "Base Power" = 20

    [Machines.Sawmill]      # 锯木机
        "Base Power" = 20

    [Machines.Pulverizer]   # 磨粉机
        "Base Power" = 20

    [Machines.Smelter]      # 感应炉
        "Base Power" = 20

    [Machines.Insolator]    # 植物培育箱
        "Base Power" = 20

    [Machines.Centrifuge]   # 离心分离机
        "Base Power" = 20

    [Machines.Press]        # 多功能压机
        "Base Power" = 20

    [Machines.Crucible]     # 岩浆坩埚
        "Base Power" = 80       # ⚠️ 消耗较高

    [Machines.Chiller]      # 急速冷冻机
        "Base Power" = 20

    [Machines.Refinery]     # 分馏蒸馏器
        "Base Power" = 20

    [Machines.Pyrolyzer]    # 热解器
        "Base Power" = 5        # 消耗很低

    [Machines.Bottler]      # 流体封装机
        "Base Power" = 20

    [Machines.Brewer]       # 炼金灌注器
        "Base Power" = 5

    [Machines.Crafter]      # 序列合成器
        "Base Power" = 20
```

---

## 📊 配方能量倍率

```toml
[Recipes]  # 配方能量倍率设置
    # 所有机器都可以调整能量消耗倍率
    # 1.0 = 正常消耗
    # 0.5 = 消耗减半
    # 2.0 = 消耗翻倍

    [Recipes.Furnace]
        "Energy Multiplier" = 1.0

    [Recipes.Pulverizer]
        "Default Furnace-Based Recipes" = true  # 自动创建熔炉相关配方
        "Energy Multiplier" = 1.0

    # ... 其他机器类似
```

---

## 📝 配置说明

### 发电机对比（所有发电机基础功率相同）

| 发电机类型 | 功率 | 燃料类型 |
|-----------|------|---------|
| 斯特林 | 40 RF/t | 固体燃料 |
| 压缩 | 40 RF/t | 液体燃料 |
| 岩浆 | 40 RF/t | 岩浆 |
| 货币 | 40 RF/t | 硬币/金属 |
| 宝石 | 40 RF/t | 宝石 |
| 祛魔 | 40 RF/t | 附魔物品 |
| 美食 | 40 RF/t | 食物 |

### 方块保留设置

| 保留项目 | 状态 | 说明 |
|---------|------|------|
| 能量 | ✅ | 破坏机器保留能量 |
| 物品 | ❌ | 破坏机器掉落物品 |
| 流体 | ❌ | 破坏机器掉落流体 |
| 增强 | ✅ | 破坏机器保留增强 |
| 配置 | ✅ | 破坏机器保留配置 |

**提示**: 如果想破坏机器时保留物品，设置 `"Blocks Retain Inventory" = true`
