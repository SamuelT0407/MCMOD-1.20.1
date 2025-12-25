# 🎒 sophisticatedbackpacks-server.toml
## 精妙背包 - 服务器配置翻译 ⭐重要（大型配置）

---

## 📦 基础设置

```toml
[server]  # 服务器设置

    # 禁止放入背包的物品列表
    # 格式: ["modid:item_name"]
    disallowedItems = []

    # 是否禁止容器物品放入背包
    # 容器物品 = 潜影盒等可以存物品的物品
    containerItemsDisallowed = false

    # 背包交互升级不能与之交互的方块列表
    noInteractionBlocks = []

    # 不允许连接到背包的方块列表
    # 例如: 禁止精炼存储的外部存储连接背包
    noConnectionBlocks = []

    # 是否禁止所有方块连接到背包
    allBlockConnectionsDisallowed = false

    # ⭐ 每种升级类型在背包中的最大数量
    # 格式: "升级名称|最大数量"
    maxUpgradesPerStorage = [
        "furnace_upgrades|1",   # 熔炉升级最多1个
        "jukebox_upgrades|1",   # 点唱机升级最多1个
        "stack_upgrades|3"      # 堆叠升级最多3个
    ]

    # 是否启用背包物品形态的流体处理
    # 某些刷物品bug与此相关，可以关闭防止刷物品
    itemFluidHandlerEnabled = true

    # ⭐ 是否允许打开其他玩家穿戴的背包
    # true = 可以右键其他玩家背后的背包
    allowOpeningOtherPlayerBackpacks = true

    # 是否禁用物品展示设置（某些自定义背包模型需要）
    itemDisplayDisabled = false

    # 是否禁用背包UUID去重逻辑
    tickDedupeLogicDisabled = false

    # 背包是否可以放入容器物品（如潜影盒）
    canBePlacedInContainerItems = false
```

---

## 🎒 各等级背包设置

```toml
[server.leatherBackpack]  # 皮革背包（最基础）
    inventorySlotCount = 27   # 27格 = 1个箱子大小
    upgradeSlotCount = 1      # 1个升级槽

[server.copperBackpack]  # 铜背包
    inventorySlotCount = 45   # 45格
    upgradeSlotCount = 1

[server.ironBackpack]  # 铁背包
    inventorySlotCount = 54   # 54格 = 1个大箱子大小
    upgradeSlotCount = 2      # 2个升级槽

[server.goldBackpack]  # 金背包
    inventorySlotCount = 81   # 81格
    upgradeSlotCount = 3

[server.diamondBackpack]  # 钻石背包
    inventorySlotCount = 108  # 108格 = 2个大箱子
    upgradeSlotCount = 5      # 5个升级槽

[server.netheriteBackpack]  # 下界合金背包（最高级）
    inventorySlotCount = 120  # 120格！
    upgradeSlotCount = 7      # 7个升级槽
```

---

## 🧲 磁铁升级设置

```toml
[server.magnetUpgrade]  # 普通磁铁升级
    filterSlots = 9      # 9个过滤槽
    slotsInRow = 3       # 每行3个
    magnetRange = 3      # ⭐ 吸取范围：3格

[server.advancedMagnetUpgrade]  # 高级磁铁升级
    filterSlots = 16     # 16个过滤槽
    slotsInRow = 4
    magnetRange = 5      # ⭐ 吸取范围：5格
```

---

## 🔥 熔炼升级设置

```toml
[server.smeltingUpgrade]  # 熔炼升级
    # 熔炼速度倍率（1.0 = 原版熔炉速度）
    smeltingSpeedMultiplier = 1.0
    # 燃料效率倍率
    fuelEfficiencyMultiplier = 1.0

[server.autoSmeltingUpgrade]  # 自动熔炼升级
    smeltingSpeedMultiplier = 1.0
    fuelEfficiencyMultiplier = 1.0
    inputFilterSlots = 8     # 输入过滤槽
    fuelFilterSlots = 4      # 燃料过滤槽
```

---

## 💧 储罐升级设置

```toml
[server.tankUpgrade]  # 储罐升级
    # 每行存储槽增加的容量（mB）
    capacityPerSlotRow = 4000
    # 堆叠倍率对容量的影响
    stackMultiplierRatio = 1.0
    # 自动填充/排空容器的冷却时间（tick）
    autoFillDrainContainerCooldown = 20
    # 每次操作的最大流体传输量
    maxInputOutput = 20
    # 电池升级每行的能量容量
    energyPerSlotRow = 10000
```

---

## 🗑️ 虚空升级设置

```toml
[server.voidUpgrade]  # 虚空升级
    filterSlots = 9
    slotsInRow = 3
    # ⭐ 是否允许虚空任何物品
    # true = 可以销毁任何物品
    # false = 只能销毁溢出的物品
    voidAnythingEnabled = true

[server.advancedVoidUpgrade]  # 高级虚空升级
    filterSlots = 16
    slotsInRow = 4
    voidAnythingEnabled = true
```

---

## 👹 生物背包生成设置

```toml
[server.entityBackpackAdditions]  # 生物背包生成

    # ⭐ 生物生成时携带背包的概率
    # 0.01 = 1%
    chance = 0.01

    # 是否给背包添加战利品
    addLoot = true

    # 是否给携带背包的生物添加药水效果
    buffWithPotionEffects = true

    # 是否给携带背包的生物增加生命值
    buffHealth = true

    # 是否给携带背包的生物穿装甲
    equipWithArmor = true

    # ⭐ 玩家击杀后掉落背包的概率
    # 0.5 = 50%
    backpackDropChance = 0.5

    # 抢夺附魔每级增加的掉落概率
    lootingChanceIncreasePerLevel = 0.15

    # 各等级背包的生成权重（越高越常见）
    leatherWeight = 625    # 皮革：最常见
    copperWeight = 250
    ironWeight = 125
    goldWeight = 25
    diamondWeight = 5
    netheriteWeight = 1    # 下界合金：极其稀有

[server.nerfs]  # 惩罚设置

    # ⭐ 背包太多是否造成缓慢
    tooManyBackpacksSlowness = false

    # 不造成缓慢的最大背包数量
    maxNumberOfBackpacks = 3

    # 每个超出的背包增加的缓慢等级倍率
    slownessLevelsPerAdditionalBackpack = 1.0

    # ⭐ 升级是否只在穿戴的背包中生效
    # true = 放在其他地方的背包升级不工作
    onlyWornBackpackTriggersUpgrades = false

    # 背包过多时的惩罚效果
    nerfEffect = "minecraft:slowness"
```

---

## 📊 背包等级对比表

| 背包类型 | 容量 | 升级槽 | 相当于 |
|---------|------|--------|-------|
| 皮革 | 27格 | 1 | 1个箱子 |
| 铜 | 45格 | 1 | 1.5个箱子 |
| 铁 | 54格 | 2 | 2个箱子 |
| 金 | 81格 | 3 | 3个箱子 |
| 钻石 | 108格 | 5 | 4个箱子 |
| 下界合金 | 120格 | 7 | 4.4个箱子 |

**提示**: 配合堆叠升级，容量可以翻倍！
