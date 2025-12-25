# KubeJS 语法参考 - 1.20.1 整合包

本文档整理了 KubeJS 核心语法以及你的整合包中所有 KubeJS 扩展的语法参考。

---

## 目录

1. [基础语法](#1-基础语法)
2. [配方修改事件](#2-配方修改事件)
3. [原版配方类型](#3-原版配方类型)
4. [配方移除与替换](#4-配方移除与替换)
5. [Create 机械动力](#5-create-机械动力)
6. [Thermal 热力膨胀](#6-thermal-热力膨胀)
7. [Mekanism 通用机械](#7-mekanism-通用机械)
8. [Immersive Engineering 沉浸工程](#8-immersive-engineering-沉浸工程)
9. [TConstruct JS 匠魂](#9-tconstruct-js-匠魂)
10. [More World Crafting 更多世界合成](#10-more-world-crafting-更多世界合成)
11. [KubeJS Curios 饰品](#11-kubejs-curios-饰品)
12. [高级技巧](#12-高级技巧)
13. [常用事件列表](#13-常用事件列表)

---

## 1. 基础语法

### 脚本文件位置

| 文件夹 | 用途 | 加载时机 |
|--------|------|----------|
| `kubejs/server_scripts/` | 服务器脚本 (配方、标签) | `/reload` |
| `kubejs/client_scripts/` | 客户端脚本 (语言、JEI) | 游戏加载 |
| `kubejs/startup_scripts/` | 启动脚本 (注册物品/方块) | 游戏启动 |

### 基本结构

```javascript
ServerEvents.recipes(event => {
    // 配方修改代码
})
```

### 物品表示方法

```javascript
// 基本物品
'minecraft:iron_ingot'
'modid:item_name'

// 带数量
'3x minecraft:iron_ingot'
Item.of('minecraft:iron_ingot', 3)

// 带NBT
Item.of('minecraft:diamond_sword', '{Damage:0}')

// 标签
'#forge:ingots/iron'
'#minecraft:planks'

// 流体
Fluid.of('minecraft:water', 1000)  // 1000mB = 1桶
```

---

## 2. 配方修改事件

```javascript
ServerEvents.recipes(event => {
    // 所有配方修改都在这里进行

    // 添加配方
    event.shaped(...)
    event.shapeless(...)
    event.smelting(...)

    // 移除配方
    event.remove({...})

    // 替换配方材料
    event.replaceInput(...)
    event.replaceOutput(...)
})
```

---

## 3. 原版配方类型

### 有序合成 (Shaped)

```javascript
event.shaped(
    Item.of('minecraft:stone', 3),  // 输出
    [
        'A B',  // 配方形状 (最多3行)
        ' C ',
        'B A'
    ],
    {
        A: 'minecraft:andesite',     // 字母映射
        B: 'minecraft:diorite',
        C: 'minecraft:granite'
    }
)
```

### 无序合成 (Shapeless)

```javascript
event.shapeless(
    Item.of('minecraft:dandelion', 3),  // 输出
    [
        'minecraft:bone_meal',
        'minecraft:yellow_dye',
        '3x minecraft:ender_pearl'      // 可以用 nx 表示数量
    ]
)
```

### 锻造台合成 (Smithing)

```javascript
event.smithing(
    'minecraft:netherite_ingot',                     // 输出
    'minecraft:netherite_upgrade_smithing_template', // 模板
    'minecraft:iron_ingot',                          // 被升级物品
    'minecraft:black_dye'                            // 升级材料
)
```

### 熔炉系列

```javascript
// 熔炉
event.smelting('3x minecraft:gravel', 'minecraft:stone')

// 高炉
event.blasting('10x minecraft:iron_nugget', 'minecraft:iron_ingot')

// 烟熏炉
event.smoking('minecraft:tinted_glass', 'minecraft:glass').xp(0.35)

// 营火
event.campfireCooking('minecraft:torch', 'minecraft:stick', 0.35, 600)
// 参数: 输出, 输入, 经验值, 时间(tick)
```

### 切石机

```javascript
event.stonecutting('3x minecraft:stick', '#minecraft:planks')
```

### 自定义JSON配方

```javascript
// 用于模组机器配方
event.custom({
    type: 'modid:recipe_type',
    ingredients: [
        { item: 'minecraft:cake' }
    ],
    result: [
        { item: 'modid:item', count: 7 }
    ]
})
```

---

## 4. 配方移除与替换

### 移除配方

```javascript
// 按输出移除
event.remove({ output: 'minecraft:stone_pickaxe' })

// 按输出标签移除
event.remove({ output: '#minecraft:wool' })

// 按输入移除
event.remove({ input: '#forge:dusts/redstone' })

// 按模组移除
event.remove({ mod: 'farmersdelight' })

// 按配方类型移除
event.remove({ type: 'minecraft:campfire_cooking' })

// 按配方ID移除
event.remove({ id: 'minecraft:glowstone' })

// 组合条件 (AND)
event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

// 多条件 (OR)
event.remove([
    { type: 'minecraft:smelting', output: 'minecraft:iron_ingot' },
    { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }
])

// 排除条件
event.remove({ not: { type: 'minecraft:smelting' }, output: 'stone' })
```

### 替换材料

```javascript
// 替换输入
event.replaceInput(
    { input: 'minecraft:stick' },  // 过滤条件
    'minecraft:stick',              // 被替换的物品
    '#minecraft:saplings'           // 替换为
)

// 替换输出
event.replaceOutput(
    { output: 'minecraft:diamond' },
    'minecraft:diamond',
    'minecraft:emerald'
)
```

---

## 5. Create 机械动力

> **前置模组**: KubeJS Create

### 基础语法

```javascript
ServerEvents.recipes(event => {
    // 创建 Create 配方
    event.recipes.create.配方类型(输出, 输入)
})
```

### 压缩 (Compacting) - 动力冲压机+工作盆

```javascript
// 基础压缩: 9个煤炭块 → 钻石
event.recipes.create.compacting('minecraft:diamond', '9x minecraft:coal_block')

// 加热压缩: 金块 + 远古残骸 → 下界合金碎片
event.recipes.create.compacting(
    'minecraft:netherite_scrap',
    ['minecraft:gold_block', 'minecraft:ancient_debris']
).heated()

// 超级加热压缩: 3个凋灵骷髅头 + 灵魂沙 → 下界之星
event.recipes.create.compacting(
    'minecraft:nether_star',
    ['3x minecraft:wither_skeleton_skull', 'minecraft:soul_sand']
).superheated()

// 流体输入输出: 岩浆 → 水
event.recipes.create.compacting(
    Fluid.of('minecraft:water', 1000),
    Fluid.of('minecraft:lava', 1000)
)

// 概率输出: 砂砾 → 燧石 + 10%几率钻石
event.recipes.create.compacting(
    ['minecraft:flint', Item.of('minecraft:diamond').withChance(0.1)],
    'minecraft:gravel'
)
```

### 粉碎 (Crushing) - 粉碎轮

```javascript
// 铁矿石 → 粗铁 + 50%几率额外1个
event.recipes.create.crushing(
    ['minecraft:raw_iron', Item.of('minecraft:raw_iron').withChance(0.5)],
    'minecraft:iron_ore'
).processingTime(200)  // 处理时间200tick
```

### 切割 (Cutting) - 动力锯

```javascript
// 橡木原木 → 橡木木板 x6
event.recipes.create.cutting('6x minecraft:oak_planks', 'minecraft:oak_log').processingTime(100)
```

### 部署 (Deploying) - 机械手

```javascript
// 基础: 小麦 + 牛奶桶 → 蛋糕 (第二个输入是机械手持有的物品)
event.recipes.create.deploying('minecraft:cake', ['minecraft:wheat', 'minecraft:milk_bucket'])

// 保留手持物品: 机械齿轮 + 橡木木板 → 大齿轮 (木板不消耗)
event.recipes.create.deploying('create:large_cogwheel', ['create:cogwheel', 'minecraft:oak_planks']).keepHeldItem()
```

### 排空 (Emptying) - 分液池

```javascript
// 水桶 → 水(1000mB) + 空桶
event.recipes.create.emptying(
    [Fluid.of('minecraft:water', 1000), 'minecraft:bucket'],
    'minecraft:water_bucket'
)
```

### 填充 (Filling) - 注液器

```javascript
// 海绵 + 水(1000mB) → 湿海绵
event.recipes.create.filling(
    'minecraft:wet_sponge',
    ['minecraft:sponge', Fluid.of('minecraft:water', 1000)]
)
```

### 清洗 (Splashing) - 鼓风机洗涤

```javascript
// 沙砾 → 铁粒 + 10%几率金粒
event.recipes.create.splashing(
    ['minecraft:iron_nugget', Item.of('minecraft:gold_nugget').withChance(0.1)],
    'minecraft:gravel'
)
```

### 缠魂 (Haunting) - 鼓风机缠魂 (灵魂火上方)

```javascript
// 罂粟 → 凋灵玫瑰
event.recipes.create.haunting('minecraft:wither_rose', 'minecraft:poppy')
```

### 研磨 (Milling) - 石磨

```javascript
// 骨头 → 骨粉x2 + 25%几率额外1个
event.recipes.create.milling(
    ['2x minecraft:bone_meal', Item.of('minecraft:bone_meal').withChance(0.25)],
    'minecraft:bone'
)
```

### 搅拌 (Mixing) - 动力搅拌器

```javascript
// 基础: 烈焰棒 → 烈焰粉x2
event.recipes.create.mixing('2x minecraft:blaze_powder', 'minecraft:blaze_rod')

// 加热: 圆石 + 煤炭 → 岩浆(1000mB)
event.recipes.create.mixing(
    Fluid.of('minecraft:lava', 1000),
    ['minecraft:cobblestone', 'minecraft:coal']
).heated()

// 流体酿造 (加热): 水(250mB) + 下界疣 → 粗制药水(250mB)
event.recipes.create.mixing(
    Fluid.of('create:potion', 250, { Potion: 'minecraft:awkward' }),
    [Fluid.of('minecraft:water', 250), 'minecraft:nether_wart']
).heated()

// 流体混合: 岩浆(500mB) + 水(500mB) → 黑曜石
event.recipes.create.mixing(
    'minecraft:obsidian',
    [Fluid.of('minecraft:lava', 500), Fluid.of('minecraft:water', 500)]
)

// 多输出: 蜂蜜块 → 蜂蜜(1000mB) + 蜜脾
event.recipes.create.mixing(
    [Fluid.of('create:honey', 1000), 'minecraft:honeycomb'],
    'minecraft:honey_block'
)
```

### 压制 (Pressing) - 动力冲压机+置物台

```javascript
// 铁锭 → 铁板
event.recipes.create.pressing('create:iron_sheet', 'minecraft:iron_ingot')
```

### 砂纸打磨 (Sandpaper Polishing) - 手持砂纸右键

```javascript
// 煤炭 → 钻石
event.recipes.create.sandpaper_polishing('minecraft:diamond', 'minecraft:coal')
```

### 动力合成 (Mechanical Crafting) - 动力合成器

```javascript
// 幻翼膜x12 → 鞘翅 (5x4网格)
event.recipes.create.mechanical_crafting(
    'minecraft:elytra',
    [
        ' P P ',
        'PPPPP',
        'P   P',
        'P   P'
    ],
    { P: 'minecraft:phantom_membrane' }
)

// 铁锭x9 + 铁栏杆x9 → 生成器 (9x9网格，最大支持9x9)
event.recipes.create.mechanical_crafting(
    'minecraft:spawner',
    [
        'IBIBIBIBI',
        'B       B',
        'I       I',
        'B       B',
        'I       I',
        'B       B',
        'I       I',
        'B       B',
        'IBIBIBIBI'
    ],
    {
        I: 'minecraft:iron_ingot',
        B: 'minecraft:iron_bars'
    }
)
```

### 序列装配 (Sequenced Assembly) - Create 核心配方类型

多个机器按顺序处理同一物品，最终产出成品。

```javascript
// 定义半成品 (推荐使用 create:incomplete_precision_mechanism)
const incomplete = 'create:incomplete_precision_mechanism'

// 示例1: 橡木原木 → 泥土(10%) 或 橡木木板(90%)
// 经过: 机械手放草方块 → 动力锯切割 → 注液水 → 辊压
event.recipes.create.sequenced_assembly(
    [
        Item.of('minecraft:dirt').withChance(0.1),       // 10% 产出泥土
        Item.of('minecraft:oak_planks').withChance(0.9)  // 90% 产出橡木木板
    ],
    'minecraft:oak_log',  // 输入物品
    [
        // 步骤1: 机械手放置草方块 (不消耗)
        event.recipes.create.deploying(incomplete, [incomplete, 'minecraft:grass_block']).keepHeldItem(),
        // 步骤2: 动力锯切割
        event.recipes.create.cutting(incomplete, incomplete),
        // 步骤3: 注液1000mB水
        event.recipes.create.filling(incomplete, [incomplete, Fluid.of('minecraft:water', 1000)]),
        // 步骤4: 辊压
        event.recipes.create.pressing(incomplete, incomplete)
    ]
)
.transitionalItem(incomplete)  // 指定半成品
.loops(1)                      // 循环次数

// 示例2: 金锭 → 精密构件 (经过3次循环)
event.recipes.create.sequenced_assembly(
    'create:precision_mechanism',
    'minecraft:gold_ingot',
    [
        event.recipes.create.deploying(incomplete, [incomplete, 'minecraft:clock']),
        event.recipes.create.deploying(incomplete, [incomplete, 'minecraft:compass']),
        event.recipes.create.pressing(incomplete, incomplete)
    ]
)
.transitionalItem(incomplete)
.loops(3)
```

### 序列装配可用的步骤类型

| 步骤类型 | 说明 |
|----------|------|
| `deploying(transitional, [transitional, item])` | 机械手放置物品 |
| `cutting(transitional, transitional)` | 动力锯切割 |
| `filling(transitional, [transitional, Fluid.of(...)])` | 注液器填充流体 |
| `pressing(transitional, transitional)` | 动力冲压机压制 |

### Create 修饰器速查

| 修饰器 | 说明 | 适用机器 |
|--------|------|----------|
| `.heated()` | 需要加热 | compacting, mixing |
| `.superheated()` | 需要超级加热 | compacting, mixing |
| `.processingTime(ticks)` | 处理时间 | crushing, cutting |
| `.keepHeldItem()` | 保留手持物品 | deploying |
| `.loops(count)` | 循环次数 | sequenced_assembly |
| `.transitionalItem(item)` | 过渡物品 | sequenced_assembly |

---

## 6. Thermal 热力膨胀

> **前置模组**: KubeJS Thermal

### 基础加工机器

```javascript
ServerEvents.recipes(event => {
    // 红石熔炉: 生牛肉 → 熟牛排
    event.recipes.thermal.furnace('minecraft:cooked_beef', 'minecraft:beef')

    // 锯木机: 橡木原木 → 橡木木板x6 + 25%几率木棍
    event.recipes.thermal.sawmill(
        ['6x minecraft:oak_planks', Item.of('minecraft:stick').withChance(0.25)],
        'minecraft:oak_log'
    )

    // 磨粉机: 烈焰棒 → 烈焰粉x2 + 50%几率额外1个
    event.recipes.thermal.pulverizer(
        ['2x minecraft:blaze_powder', Item.of('minecraft:blaze_powder').withChance(0.5)],
        'minecraft:blaze_rod'
    )

    // 感应炉: 粗铁 → 铁锭x2
    event.recipes.thermal.smelter('2x minecraft:iron_ingot', 'minecraft:raw_iron')

    // 离心分离机: 蜂蜜块 → 蜂蜜瓶 + 蜜脾
    event.recipes.thermal.centrifuge(
        ['minecraft:honey_bottle', 'minecraft:honeycomb'],
        'minecraft:honey_block'
    )
})
```

### 多驱冲压机 (Press) - 使用不同模具

```javascript
// 板模具 (无模具时默认): 铁锭 → 铁板
event.recipes.thermal.press('thermal:iron_plate', 'minecraft:iron_ingot')

// 齿轮模具: 4个铁锭 → 铁齿轮
event.recipes.thermal.press('thermal:iron_gear', ['4x minecraft:iron_ingot', 'thermal:press_gear_die'])

// 硬币模具: 铁粒 → 铁硬币
event.recipes.thermal.press('thermal:iron_coin', ['minecraft:iron_nugget', 'thermal:press_coin_die'])

// 打包模具 2x2: 4个铁锭 → 铁活板门
event.recipes.thermal.press('minecraft:iron_trapdoor', ['4x minecraft:iron_ingot', 'thermal:press_packing_2x2_die'])

// 打包模具 3x3: 9个铁锭 → 铁块
event.recipes.thermal.press('minecraft:iron_block', ['9x minecraft:iron_ingot', 'thermal:press_packing_3x3_die'])

// 拆包模具: 铁块 → 9个铁锭
event.recipes.thermal.press('9x minecraft:iron_ingot', ['minecraft:iron_block', 'thermal:press_unpacking_die'])
```

**可用模具:**
| 模具 | 说明 |
|------|------|
| 无模具 | 压板 |
| `thermal:press_gear_die` | 齿轮 |
| `thermal:press_coin_die` | 硬币 |
| `thermal:press_packing_2x2_die` | 2x2打包 |
| `thermal:press_packing_3x3_die` | 3x3打包 |
| `thermal:press_unpacking_die` | 拆包 |

### 流体处理机器

```javascript
// 熔岩炉 (Crucible): 雪球 → 水(250mB)
event.recipes.thermal.crucible(Fluid.of('minecraft:water', 250), 'minecraft:snowball')

// 极速冷冻机 (Chiller): 水(1000mB) → 冰块
event.recipes.thermal.chiller('minecraft:ice', Fluid.of('minecraft:water', 1000))

// 流体罐装机 (Bottler): 玻璃瓶 + 蜂蜜(250mB) → 蜂蜜瓶
event.recipes.thermal.bottler(
    'minecraft:honey_bottle',
    ['minecraft:glass_bottle', Fluid.of('create:honey', 250)]
)
```

### 有机灌注机 (Insolator) - 需要水

```javascript
// 小麦种子 → 小麦x2 + 10%几率额外种子，消耗水200mB
event.recipes.thermal.insolator(
    ['2x minecraft:wheat', Item.of('minecraft:wheat_seeds').withChance(0.1)],
    'minecraft:wheat_seeds'
).water(200)  // 必须指定水消耗量
```

### 流体精炼机 (Refinery) - 流体分馏

```javascript
// 原油(1000mB) → 重油(400mB) + 轻油(300mB) + 沥青(50%几率)
event.recipes.thermal.refinery(
    [
        Fluid.of('thermal:heavy_oil', 400),
        Fluid.of('thermal:light_oil', 300),
        Item.of('thermal:tar').withChance(0.5)  // 固体副产物
    ],
    Fluid.of('thermal:crude_oil', 1000)
).energy(8000)  // 指定能耗
```

### 药水酿造机 (Brewer) - 流体药水

```javascript
// 粗制药水(1000mB) + 蜘蛛眼 → 剧毒药水(1000mB)
event.recipes.thermal.brewer(
    Fluid.of('minecraft:potion', 1000, { Potion: 'minecraft:poison' }),
    [
        Fluid.of('minecraft:potion', 1000, { Potion: 'minecraft:awkward' }),
        'minecraft:spider_eye'
    ]
)
```

### 结晶器 (Crystallizer) - 物品+流体 → 物品

```javascript
// 木板 + 水(200mB) → 金晶体 (110%几率=必出+10%额外)
event.recipes.thermal.crystallizer(
    Item.of('mekanism:crystal_gold').withChance(1.1),
    ['minecraft:oak_planks', Fluid.of('minecraft:water', 200)]
)
```

### 热解炉 (Pyrolyzer) - 物品 → 流体

```javascript
// 锯末x8 → 氢气(25mB)
event.recipes.thermal.pyrolyzer(
    Fluid.of('mekanism:hydrogen', 25),
    Item.of('#forge:sawdust', 8)  // 支持标签
).energy(1000)
```

### 催化剂 (Catalyst) - 提升机器效率

```javascript
// [磨粉机催化剂] 红石粉: 产物x1.5, 能耗x0.8, 30%消耗率
event.recipes.thermal.pulverizer_catalyst('minecraft:redstone')
    .primaryMod(1.5)     // 主产物倍率
    .secondaryMod(1.5)   // 副产物倍率
    .energyMod(0.8)      // 能耗倍率 (小于1表示省电)
    .minChance(0.10)     // 最低消耗率
    .useChance(0.3)      // 消耗几率

// [感应炉催化剂] 钻石: 产物x2, 能耗x0.8
event.recipes.thermal.smelter_catalyst('minecraft:diamond')
    .primaryMod(2.0)
    .secondaryMod(2.0)
    .energyMod(0.8)
    .minChance(0.1)
    .useChance(0.3)

// [有机灌注机催化剂] 骨粉: 产物x1.5
event.recipes.thermal.insolator_catalyst('minecraft:bone_meal')
    .primaryMod(1.5)
    .secondaryMod(1.5)
    .energyMod(1.0)
    .minChance(0.1)
    .useChance(0.5)
```

### 燃料注册 (Fuel) - 各种能源炉

```javascript
// [斯特林能源炉] 固体燃料 → 电力
event.recipes.thermal.stirling_fuel('minecraft:coal_block').energy(160000)
event.recipes.thermal.stirling_fuel('minecraft:blaze_rod').energy(24000)

// [压缩能源炉] 流体燃料 → 电力
event.recipes.thermal.compression_fuel(Fluid.of('mekanism:ethene', 100)).energy(100000)

// [热力能源炉] 热流体 → 电力
event.recipes.thermal.magmatic_fuel(Fluid.of('minecraft:lava', 100)).energy(50000)

// [通货能源炉] 货币/金属 → 电力
event.recipes.thermal.numismatic_fuel('minecraft:gold_ingot').energy(40000)

// [珠宝能源炉] 宝石 → 电力
event.recipes.thermal.lapidary_fuel('minecraft:emerald').energy(50000)
event.recipes.thermal.lapidary_fuel('minecraft:diamond').energy(80000)

// [饕餮能源炉] 食物 → 电力
event.recipes.thermal.gourmand_fuel('minecraft:golden_apple').energy(64000)
```

### 树汁提取器 (Tree Extractor)

```javascript
// 基础配方: 只匹配自然生长的树叶 (persistent: false)
event.recipes.thermal.tree_extractor(
    Fluid.of('thermal:resin', 15),      // 输出流体
    'minecraft:oak_log',                 // 原木类型
    'minecraft:oak_leaves'               // 树叶类型
)
.sapling('minecraft:oak_sapling')        // 环境检查（树苗能否在原木位置生存）
.min_height(4)                           // 最小高度
.max_height(10)                          // 最大高度
.min_leaves(16)                          // 最小叶子数
.max_leaves(24)                          // 最大叶子数

// 跳过环境检查: .sapling('') 或不设置
event.recipes.thermal.tree_extractor(
    Fluid.of('thermal:resin', 30),
    'twilightforest:twilight_oak_log',
    'twilightforest:twilight_oak_leaves'
)
// 不设置 .sapling() = 跳过环境检查
.min_height(3).max_height(100)
.min_leaves(5).max_leaves(500)
```

### 树汁提取器加速 (Tree Extractor Boost)

```javascript
// 有机堆肥: 1.5倍输出, 持续8个循环
event.recipes.thermal.tree_extractor_boost(
    'farmersdelight:organic_compost',  // 加速物品
    1.5,                                // 输出倍率
    8                                   // 持续循环数
)
```

### 岩石生成器 (Rock Gen) - 使用 event.custom

```javascript
// 岩浆 + 女巫水 + 荧石 → 末地石
event.custom({
    type: 'thermal:rock_gen',
    adjacent: 'exnihilosequentia:witch_water',  // 右槽流体
    below: 'minecraft:glowstone',                // 底部方块
    result: Item.of('minecraft:end_stone')       // 输出
}).id('kubejs:rockgen_endstone')

// 岩浆 + 女巫水 + 红石块 → 下界岩
event.custom({
    type: 'thermal:rock_gen',
    adjacent: 'exnihilosequentia:witch_water',
    below: 'minecraft:redstone_block',
    result: Item.of('minecraft:netherrack')
}).id('kubejs:rockgen_netherrack')

// 岩浆 + 水 → 圆石 (无底部方块)
event.custom({
    type: 'thermal:rock_gen',
    adjacent: 'minecraft:water',
    result: Item.of('minecraft:cobblestone')
}).id('kubejs:rockgen_cobblestone')
```

### Thermal 修饰器速查

| 修饰器 | 说明 | 适用机器 |
|--------|------|----------|
| `.energy(RF)` | 指定能耗 | refinery, pyrolyzer, 大多数机器 |
| `.water(mB)` | 消耗水量 | insolator |
| `.primaryMod(倍率)` | 主产物倍率 | catalyst |
| `.secondaryMod(倍率)` | 副产物倍率 | catalyst |
| `.energyMod(倍率)` | 能耗倍率 | catalyst |
| `.minChance(概率)` | 最低消耗率 | catalyst |
| `.useChance(概率)` | 消耗几率 | catalyst |
| `.sapling('id')` | 环境检查 | tree_extractor |
| `.min_height(n)` | 最小高度 | tree_extractor |
| `.max_height(n)` | 最大高度 | tree_extractor |
| `.min_leaves(n)` | 最小叶子数 | tree_extractor |
| `.max_leaves(n)` | 最大叶子数 | tree_extractor |

---

## 7. Mekanism 通用机械

> **前置模组**: KubeJS Mekanism (kjs-mekanism-1.20.1)

### 化学物质格式

Mekanism 有四种化学物质类型，在配方中使用对象格式：

```javascript
// 气体 (Gas)
{gas: 'mekanism:hydrogen', amount: 100}

// 灌注类型 (InfuseType)
{infuse_type: 'mekanism:redstone', amount: 10}
// 或使用标签
{tag: 'mekanism:redstone', amount: 10}

// 颜料 (Pigment)
{pigment: 'mekanism:red', amount: 1024}

// 污泥 (Slurry)
{slurry: 'mekanism:dirty_iron', amount: 1000}
```

### 基础物品加工 (物品 → 物品)

```javascript
// [粉碎机] 圆石 → 沙砾x2
event.recipes.mekanism.crushing('2x minecraft:gravel', 'minecraft:cobblestone')

// [富集仓] 荧石块 → 荧石粉x4
event.recipes.mekanism.enriching('4x minecraft:glowstone_dust', 'minecraft:glowstone')

// [电力熔炼炉] 粗铁 → 铁锭
event.recipes.mekanism.smelting('minecraft:iron_ingot', 'minecraft:raw_iron')

// [融合机] 圆石 + 藤蔓 → 苔石
event.recipes.mekanism.combining('minecraft:mossy_cobblestone', 'minecraft:cobblestone', 'minecraft:vine')
```

### 精密锯木机 (Sawing)

```javascript
// 基础: sawing(输入, 主输出)
event.recipes.mekanism.sawing('minecraft:oak_log', '6x minecraft:oak_planks')

// 带副产物: sawing(输入, 主输出, 副产物)
event.recipes.mekanism.sawing(
    'minecraft:birch_log',                        // 输入
    '6x minecraft:birch_planks',                  // 主输出
    Item.of('mekanism:sawdust').withChance(0.25)  // 副产物 (25%几率)
)
```


### 物品+气体 → 物品 类机器

```javascript
// [锇压缩机] 粗铁 + 氢气(200mB) → 铁碎片
event.recipes.mekanism.compressing(
    'mekanism:shard_iron',
    'minecraft:raw_iron',
    {gas: 'mekanism:hydrogen', amount: 1}
)

// [提纯仓] 粗铁 + 氧气(200mB) → 铁块
event.recipes.mekanism.purifying(
    'mekanism:clump_iron',
    'minecraft:raw_iron',
    {gas: 'mekanism:oxygen', amount: 1}
)

// [化学压射仓] 粗铁 + 氯化氢(200mB) → 铁碎片
event.recipes.mekanism.injecting(
    'mekanism:shard_iron',
    'minecraft:raw_iron',
    {gas: 'mekanism:hydrogen_chloride', amount: 1}
)
```

### 冶金灌注机 (Metallurgic Infusing)

```javascript
// 铁锭 + 红石灌注(10) → 富集铁
event.recipes.mekanism.metallurgic_infusing(
    'mekanism:enriched_iron',
    'minecraft:iron_ingot',
    {tag: 'mekanism:redstone', amount: 10}  // 使用标签
)

// 煤炭 + 碳灌注(10) → 富集碳
event.recipes.mekanism.metallurgic_infusing(
    'mekanism:enriched_carbon',
    'minecraft:coal',
    {infuse_type: 'mekanism:carbon', amount: 10}  // 使用 infuse_type
)
```

**可用灌注类型**: `redstone`, `carbon`, `diamond`, `refined_obsidian`, `gold`, `tin`, `bio`, `fungi`

### 气体处理类

```javascript
// [化学氧化机] 硫粉 → 二氧化硫 (物品 → 气体)
event.recipes.mekanism.oxidizing(
    'mekanism:dust_sulfur',
    {gas: 'mekanism:sulfur_dioxide', amount: 100}
)

// [太阳能中子活化器] 核废料 → 钚 (气体 → 气体, 需阳光)
event.recipes.mekanism.activating(
    {gas: 'mekanism:nuclear_waste', amount: 1},
    {gas: 'mekanism:plutonium', amount: 1}
)

// [同位素离心机] 核废料 → 钚 (气体 → 气体)
event.recipes.mekanism.centrifuging(
    {gas: 'mekanism:nuclear_waste', amount: 1},
    {gas: 'mekanism:plutonium', amount: 1}
)

// [化学灌注室] 氢气 + 氯气 → 氯化氢 (气体 + 气体 → 气体)
event.recipes.mekanism.chemical_infusing(
    {gas: 'mekanism:hydrogen_chloride', amount: 1},  // 输出
    {gas: 'mekanism:hydrogen', amount: 1},           // 左输入
    {gas: 'mekanism:chlorine', amount: 1}            // 右输入
)
```

### 流体处理类

```javascript
// [电解分离器] 水 → 氢气(左) + 氧气(右) (流体 → 两种气体)
event.recipes.mekanism.separating(
    Fluid.of('minecraft:water', 2),
    {gas: 'mekanism:hydrogen', amount: 2},
    {gas: 'mekanism:oxygen', amount: 1}
)

// [热力蒸发塔] 水 → 盐水 (流体 → 流体, 需太阳)
event.recipes.mekanism.evaporating(
    Fluid.of('minecraft:water', 10),
    Fluid.of('mekanism:brine', 1)
)

// [旋转式气液转换机] 水 ⇌ 蒸汽
// TODO
// event.custom({
//     type: 'mekanism:rotary',
//     fluidInput: { amount: 1, tag: 'minecraft:water' },
//     gasOutput: { gas: 'mekanism:steam', amount: 1 }
//     // 可选: gasInput 和 fluidOutput 用于双向转换
// })
```

### 矿石处理 - 污泥系统

```javascript
// [化学溶解室] 粗铁 + 硫酸 → 脏铁污泥
event.recipes.mekanism.dissolution(
    {slurry: 'mekanism:dirty_iron', amount: 1000},
    {gas: 'mekanism:sulfuric_acid', amount: 1},
    'minecraft:raw_iron'
)

// [化学清洗机] 脏污泥 + 水 → 洁净污泥
event.recipes.mekanism.washing(
    Fluid.of('minecraft:water', 5),
    {slurry: 'mekanism:dirty_iron', amount: 1},
    {slurry: 'mekanism:clean_iron', amount: 1}
)

// [化学结晶器] 洁净污泥 → 晶体 (chemical_type: gas/infusion/pigment/slurry)
event.recipes.mekanism.crystallizing(
    'slurry',                                       // 化学类型
    'mekanism:crystal_iron',                        // 物品输出
    {slurry: 'mekanism:clean_iron', amount: 200}   // 污泥输入
)
```

### 能量与转换

```javascript
// [能量转换] 红石粉 → 10000J (用于能量方块)
event.recipes.mekanism.energy_conversion('minecraft:redstone', 10000)

// [气体转换] 红石粉 → 液态红石
event.recipes.mekanism.gas_conversion(
    'minecraft:redstone',
    {gas: 'mekanism:liquid_redstone', amount: 100}
)

// [灌注类型转换] 红石粉 → 红石灌注 (用于冶金灌注机)
event.recipes.mekanism.infusion_conversion(
    'minecraft:redstone',
    {infuse_type: 'mekanism:redstone', amount: 10}
)
```

### 核合成机 (Nucleosynthesizing)

```javascript
// 煤炭 + 反物质 → 钻石 (需要大量能量)
event.recipes.mekanism.nucleosynthesizing(
    'minecraft:coal',
    {gas: 'mekanism:antimatter', amount: 4},
    'minecraft:diamond'
).duration(1000)  // 持续时间 (tick), 默认500
```

### 加压反应室 (Pressurized Reaction Chamber)

最复杂的多输入多输出机器：

```javascript
// 生物燃料 + 氢气 + 水 → 底物 + 乙烯
// reaction(物品输入, 气体输入, 流体输入, 物品输出, 气体输出, 持续时间, 能耗)
event.recipes.mekanism.reaction(
    'mekanism:bio_fuel',                        // 物品输入
    {gas: 'mekanism:hydrogen', amount: 100},    // 气体输入
    Fluid.of('minecraft:water', 10),            // 流体输入
    'mekanism:substrate',                       // 物品输出
    {gas: 'mekanism:ethene', amount: 100},      // 气体输出
    100,                                        // 持续时间 (tick)
    1000                                        // 能耗 (J)
)
```

### 颜料系统 (Pigment System)

```javascript
// [颜料提取机] 红色染料 → 红色颜料 (物品 → 颜料)
event.recipes.mekanism.pigment_extracting(
    'minecraft:red_dye',
    {pigment: 'mekanism:red', amount: 1024}
)

// [颜料混合机] 红 + 蓝 → 紫 (颜料 + 颜料 → 颜料)
event.recipes.mekanism.pigment_mixing(
    {pigment: 'mekanism:red', amount: 1},
    {pigment: 'mekanism:blue', amount: 1},
    {pigment: 'mekanism:purple', amount: 2}
)

// [喷涂机] 白羊毛 + 红颜料 → 红羊毛 (物品 + 颜料 → 物品)
event.recipes.mekanism.painting(
    'minecraft:white_wool',
    {pigment: 'mekanism:red', amount: 256},
    'minecraft:red_wool'
)
```

### 注册自定义化学物质

```javascript
// 在 startup_scripts 中
StartupEvents.registry('mekanism:gas', event => {
    event.create('kubejs:custom_gas')
})

StartupEvents.registry('mekanism:infuse_type', event => {
    event.create('kubejs:custom_infuse')
})

StartupEvents.registry('mekanism:pigment', event => {
    event.create('kubejs:custom_pigment')
})

StartupEvents.registry('mekanism:slurry', event => {
    event.create('kubejs:custom_slurry', 'dirty')  // 或 'clean', 'basic'
})
```

### Mekanism 修饰器速查

| 修饰器 | 说明 | 适用配方 |
|--------|------|----------|
| `.secondary_output(item)` | 副产物 | sawing |
| `.duration(ticks)` | 持续时间 | nucleosynthesizing, reaction |
| `.reqEnergy(J)` | 能耗 | reaction |
| `.item_output(item)` | 物品输出 | reaction |
| `.gas_output({...})` | 气体输出 | reaction |

---

## 8. Immersive Engineering 沉浸工程

> **前置模组**: KubeJS Immersive Engineering

### 基础语法

```javascript
ServerEvents.recipes(event => {
    // 使用 event.custom 创建 IE 配方
    event.custom({
        type: 'immersiveengineering:配方类型',
        // 配方参数
    })

    // 或使用 event.recipes.immersiveengineering (如果支持)
})
```

### 常用配方类型

```javascript
// 粉碎机
event.custom({
    type: 'immersiveengineering:crusher',
    input: { item: 'minecraft:coal_block' },
    result: { item: 'minecraft:diamond' },
    secondaries: [
        { output: { item: 'minecraft:coal' }, chance: 0.1 }
    ],
    energy: 2400
})

// 金属压缩机
event.custom({
    type: 'immersiveengineering:metal_press',
    input: { item: 'minecraft:iron_ingot' },
    mold: { tag: 'forge:molds/plate' },
    result: { item: 'immersiveengineering:plate_iron' },
    energy: 2400
})

// 合金窑
event.custom({
    type: 'immersiveengineering:alloy',
    input0: { item: 'minecraft:iron_ingot' },
    input1: { item: 'minecraft:gold_ingot' },
    result: { item: 'immersiveengineering:alloy_ingot' },
    time: 200
})

// 高炉
event.custom({
    type: 'immersiveengineering:blast_furnace',
    input: { item: 'minecraft:iron_ingot' },
    result: { item: 'immersiveengineering:ingot_steel' },
    slag: { item: 'immersiveengineering:slag' },
    time: 1200
})

// 焦炉
event.custom({
    type: 'immersiveengineering:coke_oven',
    input: { item: 'minecraft:coal' },
    result: { item: 'immersiveengineering:coal_cite' },
    creosote: 500,
    time: 1800
})

// 精炼厂
event.custom({
    type: 'immersiveengineering:refinery',
    input0: { fluid: 'minecraft:water', amount: 1000 },
    input1: { fluid: 'immersiveengineering:creosote', amount: 500 },
    result: { fluid: 'immersiveengineering:processed_oil', amount: 1000 },
    energy: 80
})

// 混合器
event.custom({
    type: 'immersiveengineering:mixer',
    inputs: [
        { item: 'minecraft:sand' }
    ],
    fluid: { fluid: 'minecraft:water', amount: 500 },
    result: { fluid: 'immersiveengineering:concrete', amount: 500 },
    energy: 3200
})

// 装瓶机
event.custom({
    type: 'immersiveengineering:bottling_machine',
    input: { item: 'minecraft:glass_bottle' },
    fluid: { fluid: 'minecraft:water', amount: 250 },
    result: { item: 'minecraft:potion' },
    energy: 1600
})

// 发酵罐
event.custom({
    type: 'immersiveengineering:fermenter',
    input: { item: 'minecraft:sugar_cane' },
    result: { fluid: 'immersiveengineering:ethanol', amount: 80 },
    energy: 6400
})

// 蒸馏塔
event.custom({
    type: 'immersiveengineering:squeezer',
    input: { item: 'minecraft:beetroot' },
    result: { item: 'immersiveengineering:plant_oil_bucket' },
    fluid: { fluid: 'immersiveengineering:plant_oil', amount: 80 },
    energy: 6400
})
```

---

## 9. TConstruct JS 匠魂

> **前置模组**: TConstructJs

### 基础语法

```javascript
ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes

    // 使用 tconstruct.配方类型()
})
```

### 合金 (Alloy)

```javascript
// 基础合金配方
tconstruct.alloy(
    Fluid.of('tconstruct:molten_electrum', 180),  // 输出流体
    [
        Fluid.of('tconstruct:molten_gold', 90),    // 输入流体1
        Fluid.of('tconstruct:molten_silver', 90)   // 输入流体2
    ]
)

// 带温度参数 (默认100)
tconstruct.alloy(
    Fluid.of('output_fluid', amount),
    [Fluid.of('input1', amount), Fluid.of('input2', amount)],
    760  // 温度
)
```

### 浇铸台配方 (Casting Table)

```javascript
tconstruct.casting_table(
    'output_item',              // 输出物品
    Fluid.of('fluid', amount),  // 流体输入
    'cast_item'                 // 模具
)

// 带选项
tconstruct.casting_table('output', Fluid.of('fluid', 90), 'cast')
    .cast_consumed(true)   // 消耗模具
    .cooling_time(1.5)     // 冷却时间倍率
    .switch_slots(false)   // 交换槽位
```

### 浇铸盆配方 (Casting Basin)

```javascript
tconstruct.casting_basin(
    'output_item',
    Fluid.of('fluid', amount)
)

// 带模具
tconstruct.casting_basin('output', Fluid.of('fluid', 1296), 'cast')
    .cast_consumed(false)
    .cooling_time(1.0)
```

### 熔化燃料 (Melting Fuel)

```javascript
tconstruct.melting_fuel(
    100,                        // 持续时间
    Fluid.of('minecraft:lava', 50)  // 流体
)

// 带温度
tconstruct.melting_fuel(100, Fluid.of('fluid', amount), 1000)
```

### 物品熔化 (Melting)

```javascript
// 使用 event.custom
event.custom({
    type: 'tconstruct:melting',
    ingredient: { item: 'minecraft:iron_ingot' },
    result: { fluid: 'tconstruct:molten_iron', amount: 90 },
    temperature: 800,
    time: 60
})
```

### 工具类

```javascript
// SimpleTCon - 简化的匠魂操作
SimpleTCon.doSomething()

// TinkerToolStats - 工具属性
TinkerToolStats.getStats(itemStack)

// TinkerDamageHelper - 伤害辅助
TinkerDamageHelper.calculateDamage(...)
```

### 事件

```javascript
// 装备更换事件
TConJSEvents.equipmentChange(event => {
    // 当玩家装备匠魂物品时触发
})

// 修饰器注册事件
TConJSEvents.modifierRegistry(event => {
    // 注册自定义修饰器
})
```

---

## 10. More World Crafting 更多世界合成

> **前置模组**: more_world_crafting

### 基础语法

该模组允许在世界中进行物品融合/转换。

```javascript
// 使用 event.custom 创建配方
event.custom({
    type: 'more_world_crafting:配方类型',
    // 配方参数
})
```

### 参考 GitHub Wiki

- [GitHub Wiki](https://github.com/Xiaoyu-2009/more_world_crafting/wiki)

---

## 11. KubeJS Curios 饰品

> **前置模组**: kubejs_curios_forge

### 饰品槽位注册

```javascript
// 在 startup_scripts 中注册饰品槽
StartupEvents.init(event => {
    // 注册饰品槽相关配置
})
```

### 物品作为饰品

```javascript
// 创建可作为饰品穿戴的物品
StartupEvents.registry('item', event => {
    event.create('my_ring')
        .curio('ring')  // 指定饰品槽位
})
```

### 饰品属性

```javascript
// 为饰品添加属性
StartupEvents.registry('item', event => {
    event.create('my_charm')
        .curio('charm')
        .modifyAttributeModifiers(modifiers => {
            modifiers.add('generic.max_health', 4, 'addition')
        })
})
```

---

## 12. 高级技巧

### 辅助函数

```javascript
ServerEvents.recipes(event => {
    // 创建辅助函数减少重复代码
    const potting = (output, pottedInput) => {
        event.shaped(output, [
            'BIB',
            ' B '
        ], {
            B: 'minecraft:brick',
            I: pottedInput
        })
    }

    // 使用辅助函数
    potting('kubejs:potted_snowball', 'minecraft:snowball')
    potting('kubejs:potted_lava', 'minecraft:lava_bucket')
})
```

### 循环处理

```javascript
ServerEvents.recipes(event => {
    // 使用内置颜色数组
    Color.DYE.forEach(color => {
        event.shapeless(`kubejs:${color}_clay`, ['minecraft:clay', `minecraft:${color}_dye`])
    })

    // 自定义数组循环
    const metals = ['iron', 'copper', 'gold', 'netherite']
    metals.forEach(metal => {
        event.shapeless(`kubejs:${metal}_plate`, [`minecraft:${metal}_ingot`, 'kubejs:hammer'])
            .damageIngredient('kubejs:hammer')  // 损耗工具
    })
})
```

### 条件配料

```javascript
// 可损耗的工具
event.shapeless('output', ['input', 'kubejs:hammer']).damageIngredient('kubejs:hammer')

// 保留容器
event.shapeless('output', ['input', 'minecraft:water_bucket']).keepIngredient('minecraft:water_bucket')
```

### 设置配方ID

```javascript
event.shaped('output', ['AAA'], { A: 'input' }).id('kubejs:my_custom_recipe')

// 阻止 Create 自动生成配方
event.shapeless('output', ['inputs']).id('kubejs:my_recipe_manual_only')
```

---

## 13. 常用事件列表

### 服务器事件 (ServerEvents)

| 事件 | 说明 |
|------|------|
| `recipes` | 配方修改 |
| `tags` | 标签修改 |
| `loaded` | 服务器加载完成 |
| `tick` | 服务器每tick执行 |
| `command` | 命令执行 |
| `commandRegistry` | 注册自定义命令 |

### 启动事件 (StartupEvents)

| 事件 | 说明 |
|------|------|
| `registry` | 注册物品/方块/流体 |
| `init` | 初始化 |
| `postInit` | 后初始化 |

### 客户端事件 (ClientEvents)

| 事件 | 说明 |
|------|------|
| `lang` | 语言/翻译 |
| `init` | 客户端初始化 |
| `tick` | 客户端每tick执行 |

### 物品事件 (ItemEvents)

| 事件 | 说明 |
|------|------|
| `modifyTooltips` | 修改物品提示 |
| `rightClicked` | 物品右键 |
| `crafted` | 物品合成 |
| `foodEaten` | 食物食用 |

### 方块事件 (BlockEvents)

| 事件 | 说明 |
|------|------|
| `rightClicked` | 方块右键 |
| `leftClicked` | 方块左键 |
| `placed` | 方块放置 |
| `broken` | 方块破坏 |

### 玩家事件 (PlayerEvents)

| 事件 | 说明 |
|------|------|
| `loggedIn` | 玩家登录 |
| `loggedOut` | 玩家登出 |
| `tick` | 玩家每tick |
| `chat` | 玩家聊天 |
| `inventoryChanged` | 背包变化 |

### 实体事件 (EntityEvents)

| 事件 | 说明 |
|------|------|
| `spawned` | 实体生成 |
| `death` | 实体死亡 |
| `hurt` | 实体受伤 |

---

## 参考链接

- [KubeJS 官方 Wiki](https://kubejs.com/wiki)
- [KubeJS Create 文档](https://kubejs.com/wiki/addons/create)
- [KubeJS Thermal 文档](https://kubejs.com/wiki/addons/thermal)
- [KubeJS Mekanism 文档](https://kubejs.com/wiki/addons/mekanism)
- [TConstruct JS Wiki](https://wiki.mango-kubejs.pages.dev/zh-tw/addons/TConstruct_JS/)
- [MC百科 KubeJS 综合教程](https://www.mcmod.cn/post/2294.html)

---

> 💡 **提示**: 使用 `/reload` 命令可以快速重载服务器脚本而无需重启游戏。
>
> 📝 **注意**: 你的模组包中 `probe.code-snippets` 包含了所有可用的物品/方块 ID，可以在 VS Code 中获得代码补全。
