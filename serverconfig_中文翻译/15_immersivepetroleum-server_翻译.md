# ⛽ immersivepetroleum-server.toml
## 沉浸石油 - 服务器配置翻译

---

```toml
[Extraction]  # 开采设置

    # 油泵每tick消耗的能量
    # 1024 Flux相当于中等能耗
    pumpjack_consumption = 1024

    # 油泵每tick抽取的石油量（mB）
    # 15mB/tick = 750mB/秒 = 0.75桶/秒
    pumpjack_speed = 15

    # 钻井塔每tick消耗的能量
    derrick_consumption = 512

[Refining]  # 精炼设置

    # 蒸馏塔能量消耗倍率
    # 1.0 = 正常消耗，2.0 = 双倍消耗
    distillationTower_energyModifier = 1.0

    # 蒸馏塔时间倍率
    # 不能低于1.0
    distillationTower_timeModifier = 1.0

    # 焦化塔能量消耗倍率
    cokerUnit_energyModifier = 1.0

    # 焦化塔时间倍率
    cokerUnit_timeModifier = 1.0

    # 高压精炼单元（加氢处理器）能量消耗倍率
    hydrotreater_energyModifier = 1.0

    # 高压精炼单元时间倍率
    hydrotreater_timeModifier = 1.0

[Generation]  # 发电设置

    # 便携发电机燃料列表
    # 格式：流体名称, 每秒消耗(mB), 每tick产生能量(Flux)
    generator_fuels = [
        "immersivepetroleum:naphtha, 9, 256",   # 石脑油：每秒9mB，256Flux/tick
        "immersivepetroleum:gasoline, 6, 256",  # 汽油：每秒6mB，256Flux/tick
        "immersivepetroleum:benzol, 6, 256"     # 苯：每秒6mB，256Flux/tick
    ]

[Miscellaneous]  # 杂项设置

    # 摩托艇燃料列表
    # 格式：流体名称, 每tick消耗(mB)
    boat_fuels = [
        "immersivepetroleum:gasoline, 1",  # 汽油：每tick 1mB
        "immersivepetroleum:naphtha, 2",   # 石脑油：每tick 2mB
        "immersivepetroleum:benzol, 2"     # 苯：每tick 2mB
    ]

    # 新玩家自动解锁IP配方
    # true = 新玩家默认知道所有配方
    autounlock_recipes = true

    # ⭐ 沥青方块是否加速玩家
    # 沥青是铺路用的方块，走在上面更快
    asphalt_speed = true
```

---

## 📝 配置说明

### 油泵效率

| 配置项 | 值 | 说明 |
|-------|---|------|
| 能耗 | 1024 Flux/tick | 需要中压供电 |
| 抽取速度 | 15 mB/tick | 约0.75桶/秒 |

### 燃料效率对比

| 燃料 | 发电机消耗 | 摩托艇消耗 |
|------|-----------|-----------|
| 汽油 | 6mB/秒 | 1mB/tick |
| 石脑油 | 9mB/秒 | 2mB/tick |
| 苯 | 6mB/秒 | 2mB/tick |

**提示**: 汽油是最高效的燃料，消耗最少！
