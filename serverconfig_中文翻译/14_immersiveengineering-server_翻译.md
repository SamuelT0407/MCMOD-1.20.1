# 🏭 immersiveengineering-server.toml
## 沉浸工程 - 服务器配置翻译 ⭐重要（大型配置）

---

## ⚡ 电线设置

```toml
[wires]  # 电线设置

    # 尝试使电线数据与连接器保持一致（用于修复损坏数据）
    # 会减慢世界加载，只在必要时开启
    sanitizeConnections = false

    # ⭐ 电线是否对接触的实体造成伤害
    # 被通电的电线电到会受伤
    enableWireDamage = true

    # ⭐ 在电线位置放置方块是否会破坏电线
    # true = 放方块会把电线弄断（掉落线圈）
    blocksBreakWires = true
```

### 电线类型对比表

```toml
[wires.copper]  # 铜电线
    maxLength = 16           # 最大长度16格
    transferRate = 2048      # 传输速率：2048 IF/tick
    loss = 0.05              # 每16格损耗5%的能量
    wireConnectorInput = 256 # 连接器输入输出：256 IF/tick

[wires.electrum]  # 琥珀金电线（中压）
    maxLength = 16
    transferRate = 8192      # 8192 IF/tick
    loss = 0.025             # 每16格损耗2.5%
    wireConnectorInput = 1024

[wires.hv]  # 高压电线
    maxLength = 32           # 可以拉得更长
    transferRate = 32768     # 32768 IF/tick
    loss = 0.025
    wireConnectorInput = 4096

[wires.rope]  # 绳索（不传输能量）
    maxLength = 32

[wires.cable]  # 电缆
    maxLength = 32

[wires.redstone]  # 红石线
    maxLength = 32

[wires.insulated_copper]  # 绝缘铜线（不造成伤害）
    maxLength = 16

[wires.insulated_electrum]  # 绝缘琥珀金线
    maxLength = 16
```

---

## 🔋 电容器设置

```toml
[machines.capacitors.lv]  # 低压电容器
    storage = 100000     # 存储：10万 FE
    input = 256          # 输入：256 FE/tick
    output = 256         # 输出：256 FE/tick

[machines.capacitors.mv]  # 中压电容器
    storage = 1000000    # 存储：100万 FE
    input = 1024
    output = 1024

[machines.capacitors.hv]  # 高压电容器
    storage = 4000000    # 存储：400万 FE
    input = 4096
    output = 4096
```

---

## ⚙️ 机器设置

```toml
[machines]

    # 发电机基础输出（会被水车/风车转速修正）
    dynamo_output = 3.0

    # 热电发电机输出倍率
    thermoelectric_output = 1.0

    # ⭐ 避雷针被雷击时输出的能量
    # 1600万 FE！非常多
    lightning_output = 16000000

    # ⭐ 柴油发电机输出功率
    # 4096 IF/tick
    dieselGen_output = 4096

    # 高炉预热器每tick消耗
    preheater_consumption = 32

    # 充电站每tick可输入的最大能量
    charger_consumption = 256

    # 锯片每个配方的磨损
    sawmill_bladeDamage = 5

    # 装配机每个配方消耗的能量
    assembler_consumption = 80
```

---

## 🌱 花园温室设置

```toml
[machines.garden_cloche]  # 花园温室

    # 每tick消耗的能量
    consumption = 8

    # 每份肥料持续的时间（游戏刻）
    # 6000刻 = 5分钟
    fertilizer = 6000

    # 每份肥料消耗的流体（mB）
    fluid = 250

    # ⭐ 生长速度倍率
    # 1.0 = 正常速度，2.0 = 两倍速度
    growth_modifier = 1.0
```

---

## ⛏️ 采掘机设置

```toml
[machines.excavator]  # 采掘机

    # ⭐ 每tick消耗的能量
    # 4096非常高！需要强大的电力供应
    consumption = 4096

    # 挖掘速度（每tick旋转角度）
    speed = 1.0

    # 是否生成粒子效果
    particles = true

    # ⭐ 矿脉生成概率阈值
    # 0.9 = 只有10%的概率生成矿脉
    chance = 0.9

    # ⭐ 每个区块的最大产出
    # 38400件矿物，之后矿脉耗尽
    # -1 = 无限
    yield = 38400

    # 矿脉初始耗尽百分比（0~1）
    # 0.2 = 新矿脉可能已经被开采了20%
    initial_depletion = 0.2
```

---

## 💎 矿石生成设置

```toml
[ores.bauxite]  # 铝土矿
    distribution = "TRAPEZOID"  # 梯形分布，中间高度最多
    vein_size = 6               # 矿脉大小
    min_y = 32                  # 最低Y坐标
    max_y = 112                 # 最高Y坐标
    attempts_per_chunk = 16     # 每区块尝试生成次数

[ores.lead]  # 铅矿
    vein_size = 8
    min_y = -32
    max_y = 80
    attempts_per_chunk = 12

[ores.silver]  # 银矿
    air_exposure = 0.25   # 25%概率如果暴露在空气中就不生成
    vein_size = 9
    min_y = -48
    max_y = 32
    attempts_per_chunk = 10

[ores.nickel]  # 镍矿
    vein_size = 5
    min_y = -64
    max_y = 24
    attempts_per_chunk = 7

[ores.uranium]  # 铀矿
    air_exposure = 0.5    # 50%概率如果暴露就不生成
    vein_size = 4
    min_y = -64
    max_y = -16
    attempts_per_chunk = 9
```

---

## 🔫 武器伤害设置

```toml
[tools.bullet_damage]  # 子弹伤害

    casull = 10.0        # 卡苏尔弹：10点伤害（5颗心）
    ap = 10.0            # 穿甲弹：10点
    buck = 2.0           # 霰弹单个弹片：2点
    dragon = 1.0         # 龙息弹：1点
    homing = 10.0        # 追踪弹：10点
    wolfpack = 4.0       # 狼群弹：4点
    wolfpack_part = 8.0  # 狼群弹子弹片：8点
    silver = 10.0        # 银弹：10点
    phial = 1.0          # 药剂弹：1点

[tools.chemthrower]  # 化学喷射器
    consumption = 10     # 每tick消耗10mB流体

[tools.railgun]  # 轨道炮
    consumption = 800    # 每次射击消耗800 FE
    damage_modifier = 1.0  # 伤害倍率
```

---

## 📊 快速参考表

### 电线对比

| 电线类型 | 长度 | 传输率 | 损耗 |
|---------|------|--------|-----|
| 铜线 | 16格 | 2,048 IF/t | 5% |
| 琥珀金线 | 16格 | 8,192 IF/t | 2.5% |
| 高压线 | 32格 | 32,768 IF/t | 2.5% |

### 矿石分布

| 矿石 | Y范围 | 矿脉大小 |
|-----|-------|---------|
| 铝土 | 32~112 | 6 |
| 铅 | -32~80 | 8 |
| 银 | -48~32 | 9 |
| 镍 | -64~24 | 5 |
| 铀 | -64~-16 | 4 |
