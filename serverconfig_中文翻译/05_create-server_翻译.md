# ⚙️ create-server.toml
## 机械动力（Create）- 服务器配置翻译 ⭐重要

---

## 🏗️ 基础设施

```toml
[infrastructure]  # 基础设施

    # 服务器发送滴答率同步数据包的间隔（游戏刻）
    # 这些数据包帮助在TPS低于20时使动画更准确
    # 范围: ≥ 5
    tickrateSyncTimer = 20
```

---

## 🧪 配方设置

```toml
[recipes]  # 配方设置

    # 允许机械压印器一次处理整堆物品
    # true = 64个物品可以一次压成64个板
    bulkPressing = false

    # 允许机械锯一次处理整堆物品
    bulkCutting = false

    # 允许在搅拌机+工作盆中酿造药水
    allowBrewingInMixer = true

    # 允许在搅拌机+工作盆中处理所有无序合成配方
    allowShapelessInMixer = true

    # 允许在压印器+工作盆中处理2x2或3x3的单材料合成配方
    allowShapedSquareInPress = true

    # 允许在机械合成器中处理所有标准合成配方
    allowRegularCraftingInCrafter = true

    # 机械合成器制作烟花时允许的最大材料数量
    maxFireworkIngredientsInCrafter = 9

    # 允许机械锯处理所有切石机配方
    allowStonecuttingOnSaw = true

    # 允许液体喷嘴与匠魂的铸造台交互
    allowCastingBySpout = true

    # 在JEI中显示原木去皮配方
    displayLogStrippingRecipes = true

    # 将彩色化合物转化为精炼镭所需破坏的光源数量
    lightSourceCountForRefinedRadiance = 10

    # 允许精炼镭的世界合成配方
    enableRefinedRadianceRecipe = true

    # 允许暗影之钢的世界合成配方
    enableShadowSteelRecipe = true
```

---

## ⚡ 动力学设置（重点！）

```toml
[kinetics]  # 动力学设置

    # ⭐ 完全禁用应力系统
    # true = 所有机器不消耗应力，随便用
    # false = 需要计算应力平衡
    disableStress = false

    # 传送带最大长度（方块）
    maxBeltLength = 20

    # 链条输送机连接的最大长度（方块）
    maxChainConveyorLength = 32

    # 每个链条输送机可以拥有的最大连接数
    maxChainConveyorConnections = 4

    # 粉碎轮造成的伤害（半颗心为单位）
    crushingDamage = 4

    # ⭐ 任何动力方块允许的最大转速（转/分钟）
    # 建议范围: 64 ~ 256，太高可能卡服
    maxRotationSpeed = 256

    # 选择哪些生物在被部署器攻击时应该忽略攻击
    # ALL = 所有生物忽略, CREEPERS = 只有苦力怕忽略, NONE = 都不忽略
    ignoreDeployerAttacks = "CREEPERS"

    # 动力方块检查动力源是否有效的间隔（游戏刻）
    kineticValidationFrequency = 60

    # 转动手摇曲柄时消耗饥饿值的速度倍率
    crankHungerMultiplier = 0.01

    # 风车成功组装所需的最小帆方块数量
    minimumWindmillSails = 8

    # 每增加1RPM所需的帆方块数量
    windmillSailsPerRPM = 8

    # 加重弹射器的最大投掷距离（方块）
    maxEjectorDistance = 32

    # 弹射器物品扫描碰撞的间隔（游戏刻）
    ejectorScanInterval = 120
```

---

## 🌀 鼓风机设置

```toml
[kinetics.encasedFan]  # 鼓风机设置

    # 鼓风机推动实体的最大距离（方块）
    fanPushDistance = 20

    # 鼓风机拉动实体的最大距离（方块）
    fanPullDistance = 20

    # 鼓风机检查气流阻挡的间隔（游戏刻）
    fanBlockCheckRate = 30

    # 鼓风机达到最大效率时的转速（转/分钟）
    fanRotationArgmax = 256

    # 鼓风机处理配方所需的时间（游戏刻）
    # 150刻 = 7.5秒
    fanProcessingTime = 150
```

---

## 🏗️ 移动结构设置（重点！）

```toml
[kinetics.contraptions]  # 移动结构设置

    # ⭐ 活塞、轴承等可以移动的最大方块数量
    # 服务器可以适当调低防止卡顿
    maxBlocksMoved = 2048

    # 底盘附着范围的最大值
    maxChassisRange = 16

    # 机械活塞后面可以连接的最大伸缩杆数量
    maxPistonPoles = 64

    # 绳索滑轮可用的最大绳索长度
    maxRopeLength = 384

    # 两个连接矿车之间的最大允许距离
    maxCartCouplingLength = 32

    # 机械压路机可以填充的最大深度（方块）
    rollerFillDepth = 12

    # 是否允许在生存模式下拾取矿车结构
    survivalContraptionPickup = true

    # 刷怪笼可以被结构移动的方式
    # MOVABLE = 可移动可拾取
    # NO_PICKUP = 可移动但不可拾取
    # UNMOVABLE = 完全不能移动
    movableSpawners = "NO_PICKUP"

    # 紫水晶母岩可以被结构移动的方式
    amethystMovement = "NO_PICKUP"

    # 黑曜石可以被结构移动的方式
    movableObsidian = "UNMOVABLE"

    # 强化深板岩可以被结构移动的方式
    movableReinforcedDeepslate = "UNMOVABLE"

    # 结构采集的物品是否自动放入挂载的存储空间
    moveItemsToStorage = true

    # 收割机是否收割未完全成熟的作物
    harvestPartiallyGrown = false

    # 收割机是否在收获后自动补种
    harvesterReplants = true

    # 是否允许将矿车结构放入容器物品中（如背包）
    minecartContraptionInContainers = false
```

---

## 💧 流体设置

```toml
[fluids]  # 流体设置

    # 流体储罐每格可容纳的流体（桶）
    fluidTankCapacity = 8

    # 流体储罐的最大高度（方块）
    fluidTankMaxHeight = 32

    # 机械泵可以推拉液体的最大距离（方块）
    mechanicalPumpRange = 16

    # 软管滑轮可以抽取流体方块的最大距离（方块）
    hosePulleyRange = 128

    # ⭐ 软管滑轮判定无限流体源所需的最小流体方块数量
    # -1 表示禁用此功能
    hosePulleyBlockThreshold = 10000

    # 是否向已超过阈值的无限水源继续注水
    fillInfinite = false

    # 是否允许软管滑轮放置流体源
    fluidFillPlaceFluidSourceBlocks = true

    # 是否允许开放式管道放置流体源
    pipesPlaceFluidSourceBlocks = true
```

---

## 📦 物流设置

```toml
[logistics]  # 物流设置

    # 漏斗在没有红石激活时的物品传输间隔（游戏刻）
    defaultExtractionTimer = 8

    # 便携存储接口等待传输完成的时间（游戏刻）
    psiTimeout = 60

    # 机械臂的最大触及范围（方块）
    mechanicalArmRange = 5

    # 红石链接的最大连接距离（方块）
    linkRange = 256

    # 显示链接与目标之间的最大距离（方块）
    displayLinkRange = 64

    # 保险库每方块大小可容纳的堆叠总数
    vaultCapacity = 20

    # 敌对生物是否会坐到座位上
    seatHostileMobs = true
```

---

## 🚂 火车设置

```toml
[trains]  # 火车设置

    # 移动的火车是否会伤害碰撞的生物和玩家
    trainsCauseDamage = true

    # 一次可放置的轨道最大长度/转弯角度
    maxTrackPlacementLength = 32

    # 火车站装配轨道的最大长度
    maxAssemblyLength = 128

    # 单列火车可组装的最大转向架数量
    maxBogeyCount = 20

    # 手动控制火车相对于计划运行的速度倍率
    manualTrainSpeedModifier = 0.75

[trains.trainStats]  # 标准火车属性

    # 火车最高速度（方块/秒）
    trainTopSpeed = 28.0

    # 火车转弯时最高速度（方块/秒）
    trainTurningTopSpeed = 14.0

    # 火车加速度（方块/秒²）
    trainAcceleration = 3.0

[trains.poweredTrainStats]  # 动力火车属性

    # 动力火车最高速度（方块/秒）
    poweredTrainTopSpeed = 40.0

    # 动力火车转弯时最高速度（方块/秒）
    poweredTrainTurningTopSpeed = 20.0

    # 动力火车加速度（方块/秒²）
    poweredTrainAcceleration = 3.0
```

---

## 📊 应力值参考表

### 应力消耗（每个方块消耗的应力）

| 机器 | 应力消耗 |
|-----|---------|
| 机械压印器 | 8.0 |
| 粉碎轮 | 8.0 |
| 搅拌器 | 4.0 |
| 机械锯 | 4.0 |
| 机械钻头 | 4.0 |
| 机械泵 | 4.0 |
| 绳索滑轮 | 4.0 |
| 部署器 | 4.0 |
| 石磨 | 4.0 |
| 鼓风机 | 2.0 |
| 机械合成器 | 2.0 |
| 机械臂 | 2.0 |

### 应力输出（动力源提供的应力）

| 动力源 | 应力输出 |
|-------|---------|
| 创造马达 | 16384.0 |
| 蒸汽机 | 1024.0 |
| 风车轴承 | 512.0 |
| 大水车 | 128.0 |
| 水车 | 32.0 |
| 手摇曲柄 | 8.0 |
