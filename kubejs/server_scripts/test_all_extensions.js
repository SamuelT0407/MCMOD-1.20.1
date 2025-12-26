// priority: 0
// ===================================================
// KubeJS 扩展测试配方 - 详细注释版
// 每个配方都标注: [机器名称] 输入材料 → 输出材料
// ===================================================

ServerEvents.recipes(event => {
    console.info('===== 开始加载扩展测试配方 =====')

    // ╔════════════════════════════════════════════════╗
    // ║  1. CREATE 机械动力                            ║
    // ╚════════════════════════════════════════════════╝
    console.info('Loading Create recipes...')

    // ─────────────────────────────────────────────────
    // [动力冲压机+工作盆] 9个煤炭块 → 1个钻石
    // ─────────────────────────────────────────────────
    event.recipes.create.compacting(
        'minecraft:diamond',           // 输出: 钻石 x1
        '9x minecraft:coal_block'      // 输入: 煤炭块 x9
    )

    // ─────────────────────────────────────────────────
    // [动力冲压机+工作盆+加热] 金块 + 远古残骸 → 下界合金碎片
    // ─────────────────────────────────────────────────
    event.recipes.create.compacting(
        'minecraft:netherite_scrap',              // 输出: 下界合金碎片 x1
        ['minecraft:gold_block', 'minecraft:ancient_debris']  // 输入: 金块 + 远古残骸
    ).heated()  // 需要加热

    // ─────────────────────────────────────────────────
    // [动力冲压机+工作盆+超级加热] 3个凋灵骷髅头 + 灵魂沙 → 下界之星
    // ─────────────────────────────────────────────────
    event.recipes.create.compacting(
        'minecraft:nether_star',                    // 输出: 下界之星 x1
        ['3x minecraft:wither_skeleton_skull', 'minecraft:soul_sand']  // 输入: 凋灵骷髅头x3 + 灵魂沙
    ).superheated()  // 需要超级加热

    // ─────────────────────────────────────────────────
    // [动力冲压机+工作盆] 岩浆 → 水
    // ─────────────────────────────────────────────────
    event.recipes.create.compacting(
        Fluid.of('minecraft:water', 1000),  // 输出: 水 1000mB
        Fluid.of('minecraft:lava', 1000)    // 输入: 岩浆 1000mB
    )

    // ─────────────────────────────────────────────────
    // [动力冲压机+工作盆] 砂砾  → 燧石 + 10%几率钻石
    // ─────────────────────────────────────────────────
    event.recipes.create.compacting([
      "minecraft:flint",
      Item.of("diamond").withChance(0.1)],
      "minecraft:gravel"
    )

    // ─────────────────────────────────────────────────
    // [粉碎轮] 铁矿石 → 粗铁 (50%几率额外1个)
    // ─────────────────────────────────────────────────
    event.recipes.create.crushing(
        ['minecraft:raw_iron', Item.of('minecraft:raw_iron').withChance(0.5)],  // 输出: 粗铁x1 + 50%几率额外x1
        'minecraft:iron_ore'  // 输入: 铁矿石
    ).processingTime(200)  // 处理时间200tick

    // ─────────────────────────────────────────────────
    // [动力锯] 橡木原木 → 橡木木板 x6
    // ─────────────────────────────────────────────────
    event.recipes.create.cutting(
        '6x minecraft:oak_planks',  // 输出: 橡木木板 x6
        'minecraft:oak_log'         // 输入: 橡木原木
    ).processingTime(100)

    // ─────────────────────────────────────────────────
    // [机械手] 小麦 + 牛奶桶 → 蛋糕
    // ─────────────────────────────────────────────────
    event.recipes.create.deploying(
        'minecraft:cake',                          // 输出: 蛋糕
        ['minecraft:wheat', 'minecraft:milk_bucket']  // 输入: 小麦 + 牛奶桶(机械手持有)
    )

    // ─────────────────────────────────────────────────
    // [机械手] 机械齿轮 + 橡木原木 → 大齿轮（不消耗物品）
    // ─────────────────────────────────────────────────
    event.recipes.create.deploying(
      'create:large_cogwheel',
      ['create:cogwheel','minecraft:oak_planks']
    ).keepHeldItem()

    // ─────────────────────────────────────────────────
    // [分液池] 水桶 → 水(1000mB) + 空桶
    // ─────────────────────────────────────────────────
    event.recipes.create.emptying(
        [Fluid.of('minecraft:water', 1000), 'minecraft:bucket'],  // 输出: 水1000mB + 空桶
        'minecraft:water_bucket'  // 输入: 水桶
    )

    // ─────────────────────────────────────────────────
    // [注液器] 海绵 + 水(1000mB) → 湿海绵
    // ─────────────────────────────────────────────────
    event.recipes.create.filling(
        'minecraft:wet_sponge',  // 输出: 湿海绵
        ['minecraft:sponge', Fluid.of('minecraft:water', 1000)]  // 输入: 海绵 + 水1000mB
    )

    // ─────────────────────────────────────────────────
    // [鼓风机洗涤] 沙砾 → 铁粒 (10%几率金粒)
    // ─────────────────────────────────────────────────
    event.recipes.create.splashing(
        ['minecraft:iron_nugget', Item.of('minecraft:gold_nugget').withChance(0.1)],  // 输出: 铁粒 + 10%金粒
        'minecraft:gravel'  // 输入: 沙砾
    )

    // ─────────────────────────────────────────────────
    // [鼓风机缠魂] 罂粟 → 凋灵玫瑰 (灵魂火上方)
    // ─────────────────────────────────────────────────
    event.recipes.create.haunting(
        'minecraft:wither_rose',  // 输出: 凋灵玫瑰
        'minecraft:poppy'         // 输入: 罂粟
    )

    // ─────────────────────────────────────────────────
    // [石磨] 骨头 → 骨粉x2 (25%几率额外1个)
    // ─────────────────────────────────────────────────
    event.recipes.create.milling(
        ['2x minecraft:bone_meal', Item.of('minecraft:bone_meal').withChance(0.25)],  // 输出: 骨粉x2 + 25%额外x1
        'minecraft:bone'  // 输入: 骨头
    )

    // ─────────────────────────────────────────────────
    // [动力搅拌器] 烈焰棒 → 烈焰粉x2
    // ─────────────────────────────────────────────────
    event.recipes.create.mixing(
        '2x minecraft:blaze_powder',  // 输出: 烈焰粉 x2
        'minecraft:blaze_rod'         // 输入: 烈焰棒
    )

    // ─────────────────────────────────────────────────
    // [动力搅拌器-加热] 圆石 + 煤炭 → 岩浆(1000mB)
    // ─────────────────────────────────────────────────
    event.recipes.create.mixing(
        Fluid.of('minecraft:lava', 1000),  // 输出: 岩浆 1000mB
        ['minecraft:cobblestone', 'minecraft:coal']  // 输入: 圆石 + 煤炭
    ).heated()

    // ─────────────────────────────────────────────────
    // [动力搅拌器-流体酿造] 水(250mB) + 下界疣 → 粗制药水(250mB)
    // 注意：流体和物品可以混合作为输入
    // ─────────────────────────────────────────────────
    event.recipes.create.mixing(
        Fluid.of('create:potion', 250, { Potion: 'minecraft:awkward' }),  // 输出: 粗制药水 250mB
        [
            Fluid.of('minecraft:water', 250),  // 输入: 水 250mB
            'minecraft:nether_wart'             // 输入: 下界疣
        ]
    ).heated()

    // ─────────────────────────────────────────────────
    // [动力搅拌器-流体混合] 岩浆(500mB) + 水(500mB) → 黑曜石
    // ─────────────────────────────────────────────────
    event.recipes.create.mixing(
        'minecraft:obsidian',  // 输出: 黑曜石
        [
            Fluid.of('minecraft:lava', 500),   // 输入: 岩浆 500mB
            Fluid.of('minecraft:water', 500)   // 输入: 水 500mB
        ]
    )

    // ─────────────────────────────────────────────────
    // [动力搅拌器-多流体输出] 蜂蜜块 → 蜂蜜(1000mB) + 蜜脾
    // ─────────────────────────────────────────────────
    event.recipes.create.mixing(
        [Fluid.of('create:honey', 1000), 'minecraft:honeycomb'],  // 输出: 蜂蜜1000mB + 蜜脾
        'minecraft:honey_block'  // 输入: 蜂蜜块
    )

    // ─────────────────────────────────────────────────
    // [动力冲压机+置物台] 铁锭 → 铁板
    // ─────────────────────────────────────────────────
    event.recipes.create.pressing(
        'create:iron_sheet',     // 输出: 铁板
        'minecraft:iron_ingot'   // 输入: 铁锭
    )

    // ─────────────────────────────────────────────────
    // [砂纸] 煤炭 → 钻石 (手持砂纸右键)
    // ─────────────────────────────────────────────────
    event.recipes.create.sandpaper_polishing(
        'minecraft:diamond',  // 输出: 钻石
        'minecraft:coal'      // 输入: 煤炭
    )

    // ─────────────────────────────────────────────────
    // [动力合成器] 幻翼膜x12 → 鞘翅 (5x4网格)
    // ─────────────────────────────────────────────────
    event.recipes.create.mechanical_crafting(
        'minecraft:elytra',  // 输出: 鞘翅
        [
            ' P P ',
            'PPPPP',
            'P   P',
            'P   P'
        ],
        { P: 'minecraft:phantom_membrane' }  // P = 幻翼膜
    )

    // ─────────────────────────────────────────────────
    // [动力合成器] 铁锭x9 + 铁栏杆x9 → 生成器 (9x9网格)
    // ─────────────────────────────────────────────────
    event.recipes.create.mechanical_crafting(
      'minecraft:spawner', //输出
      [
        "IBIBIBIBI",
        "B       B",
        "I       I",
        "B       B",
        "I       I",
        "B       B",
        "I       I",
        "B       B",
        "IBIBIBIBI"],
      {
        I:"minecraft:iron_ingot", //铁锭
        B:"minecraft:iron_bars" //铁栏杆
      }
    )

    // ─────────────────────────────────────────────────
    // [序列组装] Create 的核心配方类型
    // 多个机器按顺序处理同一物品，最终产出成品
    // 半成品 = 中间状态的物品 (推荐使用 create:incomplete_precision_mechanism)
    // ─────────────────────────────────────────────────

    // 定义半成品 (可选但推荐，方便统一管理)
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
    .loops(1)                      // 循环10次

    // 示例2: 自定义精密构件配方
    // 金锭 → 自定义精密构件 (经过3次循环)
    event.recipes.create.sequenced_assembly(
        'create:precision_mechanism',  // 输出: 精密构件
        'minecraft:gold_ingot',        // 输入: 金锭
        [
            // 步骤1: 机械手放置时钟
            event.recipes.create.deploying(incomplete, [incomplete, 'minecraft:clock']),
            // 步骤2: 机械手放置指南针
            event.recipes.create.deploying(incomplete, [incomplete, 'minecraft:compass']),
            // 步骤3: 辊压
            event.recipes.create.pressing(incomplete, incomplete)
        ]
    )
    .transitionalItem(incomplete)
    .loops(3)

    console.info('Create recipes loaded!')

    // ╔════════════════════════════════════════════════╗
    // ║  2. THERMAL 热力膨胀                           ║
    // ╚════════════════════════════════════════════════╝
    console.info('Loading Thermal recipes...')

    // ─────────────────────────────────────────────────
    // [红石熔炉] 生牛肉 → 熟牛排
    // ─────────────────────────────────────────────────
    event.recipes.thermal.furnace(
        'minecraft:cooked_beef',  // 输出: 熟牛排
        'minecraft:beef'          // 输入: 生牛肉
    )

    // ─────────────────────────────────────────────────
    // [锯木机] 橡木原木 → 橡木木板x6 (25%几率获得木棍)
    // ─────────────────────────────────────────────────
    event.recipes.thermal.sawmill(
        ['6x minecraft:oak_planks', Item.of('minecraft:stick').withChance(0.25)],  // 输出: 木板x6 + 25%木棍
        'minecraft:oak_log'  // 输入: 橡木原木
    )

    // ─────────────────────────────────────────────────
    // [磨粉机] 烈焰棒 → 烈焰粉x2 (50%几率额外1个)
    // ─────────────────────────────────────────────────
    event.recipes.thermal.pulverizer(
        ['2x minecraft:blaze_powder', Item.of('minecraft:blaze_powder').withChance(0.5)],
        'minecraft:blaze_rod'  // 输入: 烈焰棒
    )

    // ─────────────────────────────────────────────────
    // [感应炉] 粗铁 → 铁锭x2
    // ─────────────────────────────────────────────────
    event.recipes.thermal.smelter(
        '2x minecraft:iron_ingot',  // 输出: 铁锭x2
        'minecraft:raw_iron'        // 输入: 粗铁
    )

    // ─────────────────────────────────────────────────
    // [离心分离机] 蜂蜜块 → 蜂蜜瓶 + 蜜脾
    // ─────────────────────────────────────────────────
    event.recipes.thermal.centrifuge(
        ['minecraft:honey_bottle', 'minecraft:honeycomb'],  // 输出: 蜂蜜瓶 + 蜜脾
        'minecraft:honey_block'  // 输入: 蜂蜜块
    )

    // ─────────────────────────────────────────────────
    // [多驱冲压机] 使用不同模具的示例
    // 语法: press(输出, [输入物品, 模具])
    // ─────────────────────────────────────────────────

    // 板模具: 铁锭 → 铁板
    event.recipes.thermal.press(
        'thermal:iron_plate',
        'minecraft:iron_ingot'
    )

    // 齿轮模具: 4个铁锭 → 铁齿轮
    event.recipes.thermal.press(
        'thermal:iron_gear',
        ['4x minecraft:iron_ingot', 'thermal:press_gear_die']  // 4个铁锭 + 齿轮模具
    )

    // 硬币模具: 铁粒 → 铁硬币 (如果有)
    event.recipes.thermal.press(
        'thermal:iron_coin',
        ['minecraft:iron_nugget', 'thermal:press_coin_die']
    )

    // 打包模具: 4个铁锭 → 铁活板门
    event.recipes.thermal.press(
        'minecraft:iron_trapdoor',
        ['4x minecraft:iron_ingot', 'thermal:press_packing_2x2_die']  // 4个铁锭 + 打包模具
    )

    // 打包模具: 9个铁锭 → 铁块
    event.recipes.thermal.press(
        'minecraft:iron_block',
        ['9x minecraft:iron_ingot', 'thermal:press_packing_3x3_die']  // 9个铁锭 + 打包模具
    )

    // 拆包模具: 铁块 → 9个铁锭
    event.recipes.thermal.press(
        '9x minecraft:iron_ingot',
        ['minecraft:iron_block', 'thermal:press_unpacking_die']  // 铁块 + 拆包模具
    )

    // ─────────────────────────────────────────────────
    // [熔岩炉] 雪球 → 水(250mB)
    // ─────────────────────────────────────────────────
    event.recipes.thermal.crucible(
        Fluid.of('minecraft:water', 250),  // 输出: 水 250mB
        'minecraft:snowball'               // 输入: 雪球
    )

    // ─────────────────────────────────────────────────
    // [极速冷冻机] 水(1000mB) → 冰块
    // ─────────────────────────────────────────────────
    event.recipes.thermal.chiller(
        'minecraft:ice',                    // 输出: 冰块
        Fluid.of('minecraft:water', 1000)   // 输入: 水 1000mB
    )

    // ─────────────────────────────────────────────────
    // [流体罐装机] 玻璃瓶 + 蜂蜜(250mB) → 蜂蜜瓶
    // ─────────────────────────────────────────────────
    event.recipes.thermal.bottler(
        'minecraft:honey_bottle',  // 输出: 蜂蜜瓶
        ['minecraft:glass_bottle', Fluid.of('create:honey', 250)]  // 输入: 玻璃瓶 + 蜂蜜250mB
    )

    // ─────────────────────────────────────────────────
    // [有机灌注机] 小麦种子 → 小麦x2 (10%几率额外种子) 消耗水200mB
    // ─────────────────────────────────────────────────
    event.recipes.thermal.insolator(
        ['2x minecraft:wheat', Item.of('minecraft:wheat_seeds').withChance(0.1)],
        'minecraft:wheat_seeds'  // 输入: 小麦种子
    ).water(200)  // 消耗水 200mB

    // ─────────────────────────────────────────────────
    // [流体精炼机] 原油(1000mB) → 重油(400mB) + 轻油(300mB) + 沥青(固体副产物)
    // 流体输入 → 多流体输出 + 固体副产物
    // ─────────────────────────────────────────────────
    event.recipes.thermal.refinery(
        [
            Fluid.of('thermal:heavy_oil', 400),    // 输出1: 重油 400mB
            Fluid.of('thermal:light_oil', 300),    // 输出2: 轻油 300mB
            Item.of('thermal:tar').withChance(0.5) // 输出3: 沥青 (50%几率) 固体副产物
        ],
        Fluid.of('thermal:crude_oil', 1000)  // 输入: 原油 1000mB
    ).energy(8000)

    // ─────────────────────────────────────────────────
    // [药水酿造机] 粗制药水(1000mB) + 蜘蛛眼 → 剧毒药水(1000mB)
    // 流体+物品输入 → 流体输出 (主要用于酿造药水)
    // ─────────────────────────────────────────────────
    event.recipes.thermal.brewer(
        Fluid.of('minecraft:potion', 1000, { Potion: 'minecraft:poison' }),  // 输出: 剧毒药水 1000mB
        [
            Fluid.of('minecraft:potion', 1000, { Potion: 'minecraft:awkward' }),  // 输入: 粗制药水 1000mB
            'minecraft:spider_eye'  // 输入: 蜘蛛眼
        ]
    )

    // ─────────────────────────────────────────────────
    // [结晶器] 木板 + 水(200mB) → 金晶体 (110%几率=必出+10%额外)
    // 物品+流体输入 → 物品输出
    // ─────────────────────────────────────────────────
    event.recipes.thermal.crystallizer(
        Item.of('mekanism:crystal_gold').withChance(1.1),  // 输出: 金晶体 (110%几率)
        ['minecraft:oak_planks', Fluid.of('minecraft:water', 200)]  // 输入: 木板 + 水
    )

    // ─────────────────────────────────────────────────
    // [热解炉] 锯末x8 → 氢气(25mB)
    // 物品输入 → 流体输出
    // ─────────────────────────────────────────────────
    event.recipes.thermal.pyrolyzer(
        Fluid.of('mekanism:hydrogen', 25),  // 输出: 氢气 25mB
        Item.of('#forge:sawdust', 8)        // 输入: 锯末 x8
    ).energy(1000)

    // ═══════════════════════════════════════════════════
    // 催化剂 (Catalyst) - 提升机器效率
    // .primaryMod - 主产物倍率
    // .secondaryMod - 副产物倍率
    // .energyMod - 能耗倍率 (小于1表示省电)
    // .minChance - 最小消耗几率
    // .useChance - 消耗几率
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [磨粉机催化剂] 红石粉: 产物x1.5, 能耗x0.8, 30%消耗率
    // ─────────────────────────────────────────────────
    event.recipes.thermal.pulverizer_catalyst('minecraft:redstone')
        .primaryMod(1.5)     // 主产物 x1.5
        .secondaryMod(1.5)   // 副产物 x1.5
        .energyMod(0.8)      // 能耗 x0.8 (省20%电)
        .minChance(0.10)     // 最低消耗率 10%
        .useChance(0.3)      // 消耗几率 30%

    // ─────────────────────────────────────────────────
    // [感应炉催化剂] 钻石: 产物x2, 能耗x0.8
    // ─────────────────────────────────────────────────
    event.recipes.thermal.smelter_catalyst('minecraft:diamond')
        .primaryMod(2.0)
        .secondaryMod(2.0)
        .energyMod(0.8)
        .minChance(0.1)
        .useChance(0.3)

    // ─────────────────────────────────────────────────
    // [有机灌注机催化剂] 骨粉: 产物x1.5
    // ─────────────────────────────────────────────────
    event.recipes.thermal.insolator_catalyst('minecraft:bone_meal')
        .primaryMod(1.5)
        .secondaryMod(1.5)
        .energyMod(1.0)
        .minChance(0.1)
        .useChance(0.5)

    // ═══════════════════════════════════════════════════
    // 燃料注册 (Fuel) - 各种能源炉的燃料
    // .energy(RF) - 产生的能量
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [斯特林能源炉] 固体燃料 → 电力
    // ─────────────────────────────────────────────────
    event.recipes.thermal.stirling_fuel('minecraft:coal_block').energy(160000)
    event.recipes.thermal.stirling_fuel('minecraft:blaze_rod').energy(24000)

    // ─────────────────────────────────────────────────
    // [压缩能源炉] 流体燃料 → 电力
    // ─────────────────────────────────────────────────
    event.recipes.thermal.compression_fuel(Fluid.of('mekanism:ethene', 100)).energy(100000)

    // ─────────────────────────────────────────────────
    // [热力能源炉] 热流体 → 电力
    // ─────────────────────────────────────────────────
    event.recipes.thermal.magmatic_fuel(Fluid.of('minecraft:lava', 100)).energy(50000)

    // ─────────────────────────────────────────────────
    // [通货能源炉] 货币/金属 → 电力
    // ─────────────────────────────────────────────────
    event.recipes.thermal.numismatic_fuel('minecraft:gold_ingot').energy(40000)

    // ─────────────────────────────────────────────────
    // [珠宝能源炉] 宝石 → 电力
    // ─────────────────────────────────────────────────
    event.recipes.thermal.lapidary_fuel('minecraft:emerald').energy(50000)
    event.recipes.thermal.lapidary_fuel('minecraft:diamond').energy(80000)

    // ─────────────────────────────────────────────────
    // [饕餮能源炉] 食物 → 电力
    // ─────────────────────────────────────────────────
    event.recipes.thermal.gourmand_fuel('minecraft:golden_apple').energy(64000)

    // ═══════════════════════════════════════════════════
    // 树汁提取器 (Tree Extractor) - 新 API
    //
    // tree_extractor → 只匹配自然生长的树叶 (persistent: false)
    // tree_extractor_any → 匹配所有树叶（包括手动放置）
    //
    // .sapling('sapling_id') → 环境检查（树苗能否在原木位置生存）
    // .sapling('') → 跳过环境检查
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [树汁提取器] 测试1: 暮色森林彩虹橡树 (检查自然树)
    // 使用 tree_extractor = 只匹配自然生长的树叶
    // ─────────────────────────────────────────────────
    event.recipes.thermal.tree_extractor(
        Fluid.of('thermal:resin', 15),
        'twilightforest:twilight_oak_log',
        'twilightforest:rainbow_oak_leaves'
    )
    .sapling('twilightforest:rainbow_oak_sapling')

    // ─────────────────────────────────────────────────
    // [树汁提取器] 测试2: 暮色森林空心橡树 (匹配所有树叶)
    // 使用 tree_extractor_any = 匹配所有树叶，包括手动放置的
    // ─────────────────────────────────────────────────
    event.recipes.thermal.tree_extractor(
        Fluid.of('thermal:resin', 30),
        'twilightforest:twilight_oak_log',
        'twilightforest:twilight_oak_leaves'
    )
    .min_height(3)
    .max_height(100)
    .min_leaves(5)
    .max_leaves(500)

    // ─────────────────────────────────────────────────
    // [树汁提取器] 测试3: 原版橡树 (完整示例)
    // 对比 Thermal 原版配方效果
    // ─────────────────────────────────────────────────
    event.recipes.thermal.tree_extractor(
        Fluid.of('thermal:resin', 15),
        'minecraft:oak_log',
        'minecraft:oak_leaves'
    )
    .sapling('minecraft:oak_sapling')
    .min_height(4)
    .max_height(10)
    .min_leaves(16)
    .max_leaves(24)

    // ─────────────────────────────────────────────────
    // [树汁提取器加速] 有机堆肥: 1.5倍输出, 持续8个循环
    // ─────────────────────────────────────────────────
    event.recipes.thermal.tree_extractor_boost(
        'farmersdelight:organic_compost',
        1.5,
        8
    )

    // ─────────────════════════════════════════════════════
    // 岩石生成器 (Rock Gen) - 使用 event.custom
    // 左槽固定是岩浆 (minecraft:lava)
    // adjacent = 右槽流体
    // below = 底部方块 (可选)
    // result = 输出物品
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [岩石生成器] 岩浆 + 女巫水 + 荧石 → 末地石
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'thermal:rock_gen',
        adjacent: 'exnihilosequentia:witch_water',  // 右槽: 女巫水
        below: 'minecraft:glowstone',                // 底部: 荧石块
        result: Item.of('minecraft:end_stone')       // 输出: 末地石
    }).id('kubejs:rockgen_endstone')

    // ─────────────────────────────────────────────────
    // [岩石生成器] 岩浆 + 女巫水 + 红石块 → 下界岩
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'thermal:rock_gen',
        adjacent: 'exnihilosequentia:witch_water',  // 右槽: 女巫水
        below: 'minecraft:redstone_block',           // 底部: 红石块
        result: Item.of('minecraft:netherrack')      // 输出: 下界岩
    }).id('kubejs:rockgen_netherrack')

    // ─────────────────────────────────────────────────
    // [岩石生成器] 岩浆 + 水 → 圆石 (基础配方，无底部方块)
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'thermal:rock_gen',
        adjacent: 'minecraft:water',                 // 右槽: 水
        result: Item.of('minecraft:cobblestone')     // 输出: 圆石
    }).id('kubejs:rockgen_cobblestone')

    console.info('Thermal recipes loaded!')

    // ╔════════════════════════════════════════════════╗
    // ║  3. MEKANISM 通用机械                          ║
    // ╚════════════════════════════════════════════════╝
    console.info('Loading Mekanism recipes...')

    // ═══════════════════════════════════════════════════
    // 基础物品加工机器 (物品 → 物品)
    // crushing, enriching, smelting 使用相同的语法
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [粉碎机] 圆石 → 沙砾x2
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.crushing(
        '2x minecraft:gravel',     // 输出: 沙砾x2
        'minecraft:cobblestone'    // 输入: 圆石
    )

    // ─────────────────────────────────────────────────
    // [富集仓] 荧石块 → 荧石粉x4
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.enriching(
        '4x minecraft:glowstone_dust',  // 输出: 荧石粉x4
        'minecraft:glowstone'           // 输入: 荧石块
    )

    // ─────────────────────────────────────────────────
    // [电力熔炼炉] 粗铁 → 铁锭
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.smelting(
        'minecraft:iron_ingot',  // 输出: 铁锭
        'minecraft:raw_iron'     // 输入: 粗铁
    )

    // ─────────────────────────────────────────────────
    // [融合机] 圆石 + 藤蔓 → 苔石
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.combining(
        'minecraft:mossy_cobblestone',  // 输出: 苔石
        'minecraft:cobblestone',        // 输入1: 圆石
        'minecraft:vine'                // 输入2: 藤蔓
    )

    // ═══════════════════════════════════════════════════
    // 精密锯木机 (Sawing)
    // 支持主输出和副产物
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [精密锯木机] 橡木原木 → 橡木木板x6
    // sawing(输入, 主输出, 副产物?)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.sawing(
        'minecraft:oak_log',        // 输入: 橡木原木
        '6x minecraft:oak_planks'   // 主输出: 橡木木板x6
    )

    // ─────────────────────────────────────────────────
    // [精密锯木机+副产物] 白桦原木 → 木板x6 + 锯末(25%几率)
    // sawing(输入, 主输出, 副产物) - 副产物是第三个参数
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.sawing(
        'minecraft:birch_log',                            // 输入
        '6x minecraft:birch_planks',                      // 主输出
        Item.of('mekanism:sawdust').withChance(0.25)      // 副产物 (25%几率)
    )

    // ═══════════════════════════════════════════════════
    // 物品+气体 → 物品 类机器
    // compressing, purifying, injecting 使用相同的语法
    // 气体使用 {gas: 'id', amount: 数量} 格式
    // 注意: amount 有 200 倍乘数! amount: 1 = 200mB
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [锇压缩机] 粗铁 + 氢气(200mB) → 铁碎片
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.compressing(
        'mekanism:shard_iron',            // 输出
        'minecraft:raw_iron',             // 物品输入
        {gas: 'mekanism:hydrogen', amount: 1}
    )

    // ─────────────────────────────────────────────────
    // [提纯仓] 粗铁 + 氧气(200mB) → 铁碎块
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.purifying(
        'mekanism:clump_iron',            // 输出
        'minecraft:raw_iron',             // 物品输入
        {gas: 'mekanism:oxygen', amount: 1}
    )

    // ─────────────────────────────────────────────────
    // [化学压射仓] 粗铁 + 氯化氢(200mB) → 铁碎片
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.injecting(
        'mekanism:shard_iron',            // 输出
        'minecraft:raw_iron',             // 物品输入
        {gas: 'mekanism:hydrogen_chloride', amount: 1}
    )

    // ═══════════════════════════════════════════════════
    // 冶金灌注机 (Metallurgic Infusing)
    // 物品 + 灌注类型 → 物品
    //
    // 灌注类型 ID:
    //   mekanism:redstone - 红石 (红石粉=10, 红石块=90)
    //   mekanism:carbon   - 碳 (煤炭/木炭=10, 煤炭块=90)
    //   mekanism:diamond  - 钻石 (钻石粉=10)
    //   mekanism:refined_obsidian - 强化黑曜石
    //   mekanism:gold     - 金 (金粉=10)
    //   mekanism:tin      - 锡 (锡粉=10)
    //   mekanism:bio      - 生物 (生物燃料=5)
    //   mekanism:fungi    - 真菌 (蘑菇=10)
    //
    // 两种指定方式:
    //   {tag: '...', amount: N}        - 使用标签匹配 (推荐,更灵活)
    //   {infuse_type: '...', amount: N} - 精确指定灌注类型ID
    //
    // amount 是直接单位，无乘数！1 amount = 1 单位灌注
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [冶金灌注机] 方式1: 使用 tag (标签)
    // 铁锭 + 红石灌注(10单位) → 富集铁
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:enriched_iron',         // 输出
        'minecraft:iron_ingot',           // 物品输入
        {tag: 'mekanism:redstone', amount: 10}
    )

    // ─────────────────────────────────────────────────
    // [冶金灌注机] 方式2: 使用 infuse_type (精确ID)
    // 煤炭 + 碳灌注(10单位) → 富集碳
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:enriched_carbon',       // 输出
        'minecraft:coal',                 // 物品输入
        {infuse_type: 'mekanism:carbon', amount: 10}  // 碳灌注类型ID
    )

    // ═══════════════════════════════════════════════════
    // 化学处理 - 气体转换类
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [化学氧化机] 硫粉 → 二氧化硫(100mB)
    // 物品 → 气体
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.oxidizing(
        'mekanism:dust_sulfur',           // 物品输入
        {gas: 'mekanism:sulfur_dioxide', amount: 100}  // 气体输出
    )

    // ─────────────────────────────────────────────────
    // [太阳能中子活化器] 核废料 → 钚
    // 气体 → 气体 (需要阳光)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.activating(
        {gas: 'mekanism:nuclear_waste', amount: 1},  // 气体输入
        {gas: 'mekanism:plutonium', amount: 1}       // 气体输出
    )

    // ─────────────────────────────────────────────────
    // [同位素离心机] 核废料 → 钚
    // 气体 → 气体
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.centrifuging(
        {gas: 'mekanism:nuclear_waste', amount: 1},  // 气体输入
        {gas: 'mekanism:plutonium', amount: 1}       // 气体输出
    )

    // ─────────────────────────────────────────────────
    // [化学灌注室] 氢气 + 氯气 → 氯化氢
    // 气体 + 气体 → 气体
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.chemical_infusing(
        {gas: 'mekanism:hydrogen_chloride', amount: 1},  // 气体输出
        {gas: 'mekanism:hydrogen', amount: 1},           // 左气体输入
        {gas: 'mekanism:chlorine', amount: 1}            // 右气体输入
    )

    // ═══════════════════════════════════════════════════
    // 流体处理类
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [电解分离器] 水 → 氢气 + 氧气
    // 流体 → 两种气体
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.separating(
        Fluid.of('minecraft:water', 2),              // 流体输入
        {gas: 'mekanism:hydrogen', amount: 2},       // 左气体输出
        {gas: 'mekanism:oxygen', amount: 1}          // 右气体输出
    )

    // ─────────────────────────────────────────────────
    // [热力蒸馏控制器] 水 → 盐水
    // 流体 → 流体 (需要太阳热量)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.evaporating(
        Fluid.of('minecraft:water', 10),    // 流体输入
        Fluid.of('mekanism:brine', 1)       // 流体输出
    )

    // ─────────────────────────────────────────────────
    // [旋转式气液转换机] 水 ⇌ 蒸汽
    // 使用链式方法: .decondensentrating(流体输入, 气体输出)
    //              .condensentrating(气体输入, 流体输出)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.rotary()
        .decondensentrating(
            Fluid.of('minecraft:water', 10),      // 流体输入
            {gas: 'mekanism:steam', amount: 100}  // 气体输出 (字符串格式)
        )

    event.recipes.mekanism.rotary()
        .condensentrating(
            {gas: 'mekanism:steam', amount: 100},  // 气体输出 (字符串格式)
            Fluid.of('minecraft:water', 10)        // 流体输入
        )

    // ═══════════════════════════════════════════════════
    // 矿石处理 - 污泥系统
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [化学溶解室] 粗铁 + 硫酸(100mB) → 污浊铁浆液(1000mB)
    // 物品 + 气体 → 污浊浆液
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.dissolution(
        {slurry: 'mekanism:dirty_iron', amount: 1000},   // 污浊浆液输出
        {gas: 'mekanism:sulfuric_acid', amount: 1},      // 气体输入
        'minecraft:raw_iron'                             // 物品输入
    )

    // ─────────────────────────────────────────────────
    // [化学清洗机] 污浊铁浆液 + 水 → 纯净铁浆液
    // 污浊浆液 + 流体 → 纯净浆液
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.washing(
        Fluid.of('minecraft:water', 5),                  // 流体输入
        {slurry: 'mekanism:dirty_iron', amount: 1},      // 污浊浆液输入
        {slurry: 'mekanism:clean_iron', amount: 1}       // 纯净浆液输出
    )

    // ─────────────────────────────────────────────────
    // [化学结晶器] 纯净铁浆液 → 铁晶体
    // 化学物质 → 物品
    // chemical_type: gas, infusion, pigment, slurry
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.crystallizing(
        'slurry',                            // 化学类型
        'mekanism:crystal_iron',             // 物品输出
        {slurry: 'mekanism:clean_iron', amount: 200}  // 纯净浆液输入
    )

    // ─────────────────────────────────────────────────
    // [能量转换] 红石粉 → 2500 焦耳 = 1kFE
    // 物品 → 能量 (用于能量方块)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.energy_conversion(
        'minecraft:redstone',     // 物品输入
        2500                      // 能量输出 (J)
    )

    // ─────────────────────────────────────────────────
    // [气体转换] 煤炭 → 氢气
    // 物品 → 气体 (用于物品直接转气体)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.gas_conversion(
        'minecraft:coal',                    // 物品输入
        {gas: 'mekanism:hydrogen', amount: 1}  // 气体输出
    )

    // ─────────────────────────────────────────────────
    // [灌注类型转换] 红石粉 → 红石灌注
    // 物品 → 灌注类型 (用于冶金灌注机)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.infusion_conversion(
        'minecraft:redstone',     // 物品输入
        {infuse_type: 'mekanism:redstone', amount: 10}  // 灌注类型输出
    )

    // ═══════════════════════════════════════════════════
    // 反质子核合成机 (Nucleosynthesizing)
    // 物品 + 反物质 → 物品, 需要大量能量
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [反质子核合成机] 煤炭 + 反物质 → 钻石
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.nucleosynthesizing(
        'minecraft:coal',                         // 物品输入
        {gas: 'mekanism:antimatter', amount: 4},  // 反物质输入
        'minecraft:diamond'                       // 物品输出
    ).duration(1000)  // 持续时间 (tick)

    // ═══════════════════════════════════════════════════
    // 加压反应室 (Pressurized Reaction Chamber)
    // 物品 + 气体 + 流体 → 物品 + 气体
    // 最复杂的多输入多输出机器
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [加压反应室] 生物燃料 + 氢气 + 水 → 基片 + 乙烯
    // reaction(物品输入, 气体输入, 流体输入, 物品输出, 气体输出, 持续时间, 能耗)
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.reaction(
        'mekanism:bio_fuel',                          // 物品输入
        {gas: 'mekanism:hydrogen', amount: 100},      // 气体输入
        Fluid.of('minecraft:water', 10),              // 流体输入
        'mekanism:substrate',                         // 物品输出
        {gas: 'mekanism:ethene', amount: 100},        // 气体输出
        100,                                          // 持续时间 (tick)
        1000                                          // 能耗 (J)
    )

    // ═══════════════════════════════════════════════════
    // 颜料系统 (Pigment System)
    // ═══════════════════════════════════════════════════

    // ─────────────────────────────────────────────────
    // [颜料提取机] 红色染料 → 红色颜料
    // 物品 → 颜料
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.pigment_extracting(
        'minecraft:red_dye',      // 物品输入
        {pigment: 'mekanism:red', amount: 1024}  // 颜料输出
    )

    // ─────────────────────────────────────────────────
    // [颜料混合机] 红色颜料 + 蓝色颜料 → 紫色颜料
    // 颜料 + 颜料 → 颜料
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.pigment_mixing(
        {pigment: 'mekanism:red', amount: 1},    // 左颜料输入
        {pigment: 'mekanism:blue', amount: 1},   // 右颜料输入
        {pigment: 'mekanism:purple', amount: 2}  // 颜料输出
    )

    // ─────────────────────────────────────────────────
    // [上色机] 白色羊毛 + 红色颜料 → 红色羊毛
    // 物品 + 颜料 → 物品
    // ─────────────────────────────────────────────────
    event.recipes.mekanism.painting(
        'minecraft:white_wool',                   // 物品输入
        {pigment: 'mekanism:red', amount: 256},   // 颜料输入
        'minecraft:red_wool'                      // 物品输出
    )

    console.info('Mekanism recipes loaded!')

    // ╔════════════════════════════════════════════════╗
    // ║  4. IMMERSIVE ENGINEERING 沉浸工程             ║
    // ╚════════════════════════════════════════════════╝
    console.info('Loading Immersive Engineering recipes...')

    // ─────────────────────────────────────────────────
    // [粉碎机] 圆石 → 沙砾 (10%几率额外沙子)
    // 使用 event.custom 确保兼容性
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:crusher',
        input: { item: 'minecraft:coal_block' },
        result: { item: 'minecraft:diamond' },
        secondaries: [],
        energy: 2400
    }).id('kubejs:crusher_diamond')

    event.custom({
        type: 'immersiveengineering:crusher',
        result: { item: 'minecraft:gravel' },
        input: { item: 'minecraft:cobblestone' },
        secondaries: [{ chance: 0.1, output: { item: 'minecraft:sand' } }],
        energy: 6000
    }).id('kubejs:crusher_cobblestone')

    // ─────────────────────────────────────────────────
    // [金属冲压机] 铁锭 + 板模具 → 铁板
    // metal_press(output, input, mold) 或 metal_press(output, input, mold, energy)
    // mold: plate, gear, rod, bullet_casing, wire, packing_4, packing_9, unpacking
    // ─────────────────────────────────────────────────
    event.recipes.immersiveengineering.metal_press(
        'immersiveengineering:plate_iron',                     // 输出: 铁板
        'minecraft:iron_ingot',                                // 输入: 铁锭
        'immersiveengineering:mold_plate'                      // 模具: 板模具
    )

    // ─────────────────────────────────────────────────
    // [合金窑] 铜锭 + 铁锭 → 康铜锭
    // alloy(output, input1, input2) 或 alloy(output, input1, input2, time)
    // ─────────────────────────────────────────────────
    event.recipes.immersiveengineering.alloy(
        'immersiveengineering:ingot_constantan',               // 输出: 康铜锭
        'minecraft:copper_ingot',                              // 输入1: 铜锭
        'minecraft:iron_ingot',                                // 输入2: 铁锭
        200                                                    // 时间: 200tick
    )

    // ─────────────────────────────────────────────────
    // [高炉] 铁锭 → 钢锭 + 矿渣
    // blast_furnace(output, input)
    // blast_furnace(output, input, slag)
    // blast_furnace(output, input, slag, time) - 注: 1.18.2+ time参数可能不生效
    // 1200tick = 60秒
    // ─────────────────────────────────────────────────
    event.recipes.immersiveengineering.blast_furnace(
        'immersiveengineering:ingot_steel',                    // 输出: 钢锭
        'minecraft:iron_ingot',                                // 输入: 铁锭
        'immersiveengineering:slag',                           // 副产物: 矿渣
        1200                                                   // 时间: 1200tick
    )

    // ─────────────────────────────────────────────────
    // [高炉燃料] 焦煤块可作为高炉燃料
    // blast_furnace_fuel(input, time)
    // ─────────────────────────────────────────────────
    event.recipes.immersiveengineering.blast_furnace_fuel(
        'immersiveengineering:coke',                           // 输入: 焦煤
        1200                                                   // 燃烧时间: 1200tick
    )

    // ─────────────────────────────────────────────────
    // [焦炉] 煤炭 → 焦煤 + 杂酚油(500mB)
    // coke_oven(output, input)
    // coke_oven(output, input, creosote)
    // coke_oven(output, input, creosote, time)
    // ─────────────────────────────────────────────────
    event.recipes.immersiveengineering.coke_oven(
        'immersiveengineering:coal_coke',                      // 输出: 焦煤
        'minecraft:coal',                                      // 输入: 煤炭
        500,                                                   // 杂酚油产量: 500mB
        1800                                                   // 时间: 1800tick
    )

    // ─────────────────────────────────────────────────
    // [工业挤压机] 甜菜根 → 植物油(80mB) + 甜菜种子
    // 注意: 使用 event.custom 以确保兼容性
    // 流体输出使用 fluid 对象，物品输出使用 result 对象
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:squeezer',
        input: { item: 'minecraft:beetroot' },
        result: { item: 'minecraft:beetroot_seeds' },
        fluid: { fluid: 'immersiveengineering:plantoil', amount: 80 },
        energy: 6400
    }).id('kubejs:squeezer_beetroot')

    // ─────────────────────────────────────────────────
    // [发酵罐] 甘蔗 → 乙醇(80mB) + 纸
    // 注意: 使用 event.custom 以确保兼容性
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:fermenter',
        input: { item: 'minecraft:sugar_cane' },
        result: { item: 'minecraft:paper' },
        fluid: { fluid: 'immersiveengineering:ethanol', amount: 80 },
        energy: 6400
    }).id('kubejs:fermenter_sugar_cane')

    // ─────────────────────────────────────────────────
    // [电弧炉] 粗铁 + 焦煤 → 钢锭x2 + 矿渣 + 50%额外钢锭
    // secondaries: 副产物数组，包含 output 和 chance
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        results: [{ item: 'immersiveengineering:ingot_steel', count: 2 }],  // 100%掉2个
        input: { item: 'minecraft:raw_iron' },
        additives: [{ item: 'immersiveengineering:coal_coke' }],
        slag: { item: 'immersiveengineering:slag' },
        secondaries: [
            { output: { item: 'immersiveengineering:ingot_steel' }, chance: 0.5 }  // 50%额外1个
        ],
        time: 200,
        energy: 102400
    }).id('kubejs:arc_furnace_steel')

    // ─────────────────────────────────────────────────
    // [电弧炉-无添加剂] 粗铁 → 铁锭x2
    // 注意: 必须有 additives 数组，即使为空
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        results: [{ item: 'minecraft:iron_ingot', count: 2 }],
        input: { item: 'minecraft:raw_iron' },
        additives: [],  // 必须有这个键
        time: 100,
        energy: 51200
    }).id('kubejs:arc_furnace_raw_iron')

    // ─────────────────────────────────────────────────
    // [工程师蓝图] blueprint(output, inputs[], blueprint)
    // Blueprint 类型说明:
    //   - components   : 合成用零件蓝图 (制作各种机械零件)
    //   - molds        : 金属冲压蓝图 (制作金属冲压模具)
    //   - bullet       : 弹药蓝图 (制作左轮手枪弹药)
    //   - specialBullet: 特殊弹药蓝图 (制作特殊效果弹药)
    //   - bannerpatterns: 旗帜图案蓝图 (制作工程师旗帜图案)
    //   - electrode    : 电极蓝图 (制作电弧炉电极)
    // ─────────────────────────────────────────────────

    // 1. 合成用零件蓝图 - 机械零件
    event.recipes.immersiveengineering.blueprint(
        'immersiveengineering:component_iron',                 // 输出: 铁机械零件
        ['2x minecraft:iron_ingot', 'minecraft:copper_ingot'], // 输入: 铁锭x2 + 铜锭
        'components'                                           // 蓝图类型: 制作零件
    )

    // 2. molds 蓝图 - 金属冲压
    event.recipes.immersiveengineering.blueprint(
        'immersiveengineering:mold_plate',                     // 输出: 板模具
        ['3x immersiveengineering:plate_steel'],               // 输入: 钢板x3
        'molds'                                                // 蓝图类型: 制作模具
    )

    // 3. bullet 蓝图 - 弹药
    event.recipes.immersiveengineering.blueprint(
        '2x immersiveengineering:casull',                      // 输出: 卡萨尔弹药x2
        [
            'immersiveengineering:empty_casing',               // 空弹壳
            'minecraft:gunpowder',                              // 火药
            'minecraft:iron_nugget'                             // 铁粒
        ],
        'bullet'                                               // 蓝图类型: 弹药
    )

    // 4. specialBullet 蓝图 - 特殊弹药
    event.recipes.immersiveengineering.blueprint(
        'immersiveengineering:firework',                       // 输出: 烟花弹
        [
            'immersiveengineering:empty_casing',               // 空弹壳
            'minecraft:firework_rocket'                         // 烟花火箭
        ],
        'specialBullet'                                        // 蓝图类型: 特殊弹药
    )

    // 5. bannerpatterns 蓝图 - 旗帜图案
    // 注意: 旗帜图案物品ID可能因版本而异，请在游戏内用 /kubejs hand 确认
    // IE 1.20 中旗帜图案可能叫 hammer_banner_pattern 或类似名称
    event.recipes.immersiveengineering.blueprint(
        'minecraft:paper',                                      // 输出: 临时使用纸张测试
        ['minecraft:paper', 'immersiveengineering:hammer'],     // 输入: 纸 + 工程师锤
        'bannerpatterns'                                        // 蓝图类型: 旗帜图案
    )

    // 6. electrode 蓝图 - 电极
    event.recipes.immersiveengineering.blueprint(
        'immersiveengineering:graphite_electrode',             // 输出: 石墨电极
        ['8x immersiveengineering:coal_coke'],                 // 输入: 焦煤x8
        'electrode'                                            // 蓝图类型: 电极
    )

    // ─────────────────────────────────────────────────
    // [灌装机] 桶 + 水(1000mB) → 水桶
    // 注意: IE 流体输入必须使用标签 (tag) 格式
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:bottling_machine',
        results: [{ item: 'minecraft:water_bucket' }],
        fluid: { tag: 'forge:water/water', amount: 1000 },
        input: { item: 'minecraft:bucket' }
    }).id('kubejs:bottling_water_bucket')

    // ─────────────────────────────────────────────────
    // [园艺玻璃罩] 小麦种子 + 泥土 → 小麦
    // 使用 event.custom 以确保兼容性
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:cloche',
        results: [
            { item: 'minecraft:wheat' },
            { item: 'minecraft:wheat_seeds' }
        ],
        input: { item: 'minecraft:wheat_seeds' },
        soil: { item: 'minecraft:dirt' },
        time: 800,
        render: { type: 'crop', block: 'minecraft:wheat' }
    }).id('kubejs:cloche_wheat')

    // ─────────────────────────────────────────────────
    // [园艺玻璃罩-树苗] 橡木树苗 + 泥土 → 橡木原木
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:cloche',
        results: [
            { item: 'minecraft:oak_log' },
            { item: 'minecraft:oak_sapling' }
        ],
        input: { item: 'minecraft:oak_sapling' },
        soil: { item: 'minecraft:dirt' },
        time: 1200,
        render: { type: 'generic', block: 'minecraft:oak_sapling' }
    }).id('kubejs:cloche_oak')

    // ─────────────────────────────────────────────────
    // [肥料] 骨粉作为园艺玻璃罩的肥料，1.25倍催化效率
    // fertilizer(input) 或 fertilizer(input, growthModifier)
    // ─────────────────────────────────────────────────
    event.recipes.immersiveengineering.fertilizer(
        'minecraft:bone_meal',                                  // 输入: 骨粉
        1.25                                                    // 催化效率: 1.25倍
    )

    // ─────────────────────────────────────────────────
    // [搅拌器] 沙子 + 沙砾 + 水(500mB) → 液态混凝土
    // 注意: IE 流体输入必须使用标签 (tag) 格式
    // IE 物品输入使用 IngredientWithSize 格式
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:mixer',
        result: { fluid: 'immersiveengineering:concrete', amount: 500 },
        fluid: { tag: 'forge:water/water', amount: 500 },
        inputs: [
            { item: 'minecraft:sand' },
            { item: 'minecraft:gravel' }
        ],
        energy: 3200
    }).id('kubejs:mixer_concrete')

    // ─────────────────────────────────────────────────
    // [精炼厂] 植物油 + 乙醇 → 生物柴油
    // 注意: IE 流体输入必须使用标签 (tag) 格式
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:refinery',
        result: { fluid: 'immersiveengineering:biodiesel', amount: 16 },
        input0: { tag: 'forge:food_oil', amount: 8 },  // 使用 tag
        input1: { tag: 'forge:ethanol', amount: 8 },   // 使用 tag
        energy: 80
    }).id('kubejs:refinery_biodiesel')

    // ─────────────────────────────────────────────────
    // [精炼厂-带催化剂] 使用催化剂提高效率
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:refinery',
        result: { fluid: 'immersiveengineering:biodiesel', amount: 20 },
        input0: { tag: 'forge:food_oil', amount: 8 },  // 使用 tag
        input1: { tag: 'forge:ethanol', amount: 8 },   // 使用 tag
        catalyst: { item: 'minecraft:blaze_powder' },
        energy: 80
    }).id('kubejs:refinery_biodiesel_catalyst')

    // ─────────────────────────────────────────────────
    // [锯木机] 橡木原木 → 橡木木板x6 + 锯末
    // 使用 event.custom 以确保正确的 JSON 格式
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:sawmill',
        result: { item: 'minecraft:oak_planks', count: 6 },
        input: { item: 'minecraft:oak_log' },
        stripped: { item: 'minecraft:stripped_oak_log' },
        secondaries: [
            { stripping: true, output: { item: 'immersiveengineering:dust_wood' } },
            { stripping: false, output: { item: 'minecraft:stick' } }
        ],
        energy: 1600
    }).id('kubejs:sawmill_oak_log')

    // ─────────────────────────────────────────────────
    // [锯木机-简单] 木板 → 木棍
    // 注意: 必须有 secondaries 数组，即使为空
    // ─────────────────────────────────────────────────
    event.custom({
        type: 'immersiveengineering:sawmill',
        result: { item: 'minecraft:stick', count: 4 },
        input: { tag: 'minecraft:planks' },
        secondaries: [],  // 必须有这个键
        energy: 800
    }).id('kubejs:sawmill_planks')

    console.info('Immersive Engineering recipes loaded!')

    // ╔════════════════════════════════════════════════╗
    // ║  5. TCONSTRUCT JS 匠魂3 (1.20.1)               ║
    // ╚════════════════════════════════════════════════╝
    // 需要安装: TConstruct JS 插件
    // 文档: https://wiki.mango-kubejs.pages.dev/zh-tw/addons/TConstruct_JS/
    console.info('Loading TConstruct JS recipes...')

    const { tconstruct } = event.recipes

    // ══════════════════════════════════════════════════
    // 1. 合金 (Alloy)
    // ══════════════════════════════════════════════════
    // alloy(result, inputs[], temperature?)
    // 流体量参考: 1粒=10mB, 1锭=90mB, 1宝石=100mB, 1块=810mB
    // ──────────────────────────────────────────────────

    // 青铜合金: 铜3 + 锡1 = 青铜4 (3:1比例)
    // 标准产出: 4锭 = 360mB
    tconstruct.alloy(
        Fluid.of('tconstruct:molten_bronze', 360),       // 输出: 4锭
        [
            Fluid.of('tconstruct:molten_copper', 270),   // 铜: 3锭 = 270mB
            Fluid.of('tconstruct:molten_tin', 90)        // 锡: 1锭 = 90mB
        ]).temperature(500)

    // 琥珀金合金: 金1 + 银1 = 琥珀金2 (1:1比例)
    tconstruct.alloy(
        Fluid.of('tconstruct:molten_electrum', 180),     // 输出: 2锭
        [
            Fluid.of('tconstruct:molten_gold', 90),      // 金: 1锭
            Fluid.of('tconstruct:molten_silver', 90)     // 银: 1锭
        ]).temperature(760)

    // ══════════════════════════════════════════════════
    // 2. 浇铸台 (Casting Table)
    // ══════════════════════════════════════════════════
    // casting_table(result, fluid, cast?, cast_consumed?, cooling_time?, switch_slots?)
    // cast_consumed 默认 false (铸件不消耗)
    // cooling_time 必填
    // switch_slots 默认 false (是否交换槽位)
    // ──────────────────────────────────────────────────

    // 基础浇铸: 熔融铁 + 锭铸件 → 铁锭
    tconstruct.casting_table(
        'minecraft:iron_ingot',                          // 输出
        Fluid.of('tconstruct:molten_iron', 90),         // 流体 (1锭 = 90mB)
        'tconstruct:ingot_cast'                          // 铸件
    ).cooling_time(60)                                   // 冷却时间 (tick)

    // 使用所有可选方法
    tconstruct.casting_table(
        'minecraft:gold_nugget',
        Fluid.of('tconstruct:molten_gold', 10),          // 1粒 = 10mB
        'tconstruct:nugget_cast'
    )
        .cast_consumed(false)                            // 铸件不消耗
        .cooling_time(20)                               // 冷却时间 (tick)
        .switch_slots(false)                             // 不交换槽位

    // 消耗性铸件 (如沙铸件)
    tconstruct.casting_table(
        'minecraft:diamond',
        Fluid.of('tconstruct:molten_diamond', 100),
        'tconstruct:gem_sand_cast'                       // 沙铸件
    ).cast_consumed(true).cooling_time(80)               // 消耗铸件 + 冷却时间

    // ══════════════════════════════════════════════════
    // 3. 浇铸盆 (Casting Basin)
    // ══════════════════════════════════════════════════
    // casting_basin(result, fluid, cast?, cast_consumed?, cooling_time?, switch_slots?)
    // 默认值同 casting_table
    // ──────────────────────────────────────────────────

    // 无铸件浇铸: 熔融铁(810mB) → 铁块
    tconstruct.casting_basin(
        'minecraft:iron_block',
        Fluid.of('tconstruct:molten_iron', 810)         // 1块 = 9锭 = 810mB
    ).cooling_time(200)                                  // 大块物品冷却更慢

    // 带铸件的盆浇铸
    tconstruct.casting_basin(
        'minecraft:obsidian',
        Fluid.of('minecraft:lava', 1000),
        'minecraft:water_bucket'                         // 以水桶作为"铸件"
    ).cast_consumed(true).cooling_time(120)              // 消耗水桶 + 冷却时间

    // ══════════════════════════════════════════════════
    // 4. 铸件复制 (Cast Duplication)
    // ══════════════════════════════════════════════════
    // table_duplication(cast, fluid, cooling_time?)
    // basin_duplication(cast, fluid, cooling_time?)
    // 用金液体复制已有铸件
    // ──────────────────────────────────────────────────

    // 浇铸台铸件复制
    tconstruct.table_duplication(
        'tconstruct:ingot_cast',                         // 要复制的铸件
        Fluid.of('tconstruct:molten_gold', 90)
    ).cooling_time(60)

    // 浇铸盆铸件复制 (大型铸件)
    tconstruct.basin_duplication(
        'tconstruct:plate_cast',
        Fluid.of('tconstruct:molten_gold', 180)
    ).cooling_time(60)

    // ══════════════════════════════════════════════════
    // 5. 燃料 (Melting Fuel)
    // ══════════════════════════════════════════════════
    // ⚠️ 警告: TConstruct JS API 缺少 rate 字段！
    // 使用 event.custom 并添加 rate 字段
    // ──────────────────────────────────────────────────

    // 岩浆作为燃料 (使用 event.custom)
    event.custom({
        type: 'tconstruct:melting_fuel',
        fluid: { fluid: 'minecraft:lava', amount: 50 },
        duration: 100,
        temperature: 1000,
        rate: 10 // 1x
    }).id('kubejs:tconstruct_fuel_lava')

    // ══════════════════════════════════════════════════
    // 6. 物品熔融 (Melting)
    // ══════════════════════════════════════════════════
    // melting(result, ingredient, temperature?, time?)
    // temperature: 需要的最低温度(K)
    // time: 熔融时间(tick)
    // ──────────────────────────────────────────────────

    // 钻石熔融 (参考官方示例)
    tconstruct.melting(
        Fluid.of('tconstruct:molten_diamond', 100),      // 输出: 1宝石 = 100mB
        'minecraft:diamond'                              // 输入: 钻石
    ).temperature(1450).time(80)                         // 1450K, 80tick

    // 铁锭熔融
    tconstruct.melting(
        Fluid.of('tconstruct:molten_iron', 90),          // 输出: 1锭 = 90mB
        'minecraft:iron_ingot'
    ).temperature(800).time(60)

    // 粗矿石熔融 (产出更多)
    tconstruct.melting(
        Fluid.of('tconstruct:molten_iron', 120),         // 1.33倍产出
        'minecraft:raw_iron'
    ).temperature(800).time(90)

    // ══════════════════════════════════════════════════
    // 7. 铸模成形 (Molding)
    // ══════════════════════════════════════════════════
    // molding_table(result, pattern, material)
    // molding_basin(result, pattern, material)
    // 使用模具将物品压制成型
    // ──────────────────────────────────────────────────

    // 铸模成形: 苹果 + 木棍 → 苹果 + 钻石 (参考官方示例)
    tconstruct.molding_table('minecraft:diamond', 'minecraft:apple', 'minecraft:stick')

    // ══════════════════════════════════════════════════
    // 8. 自定义特性 (Modifiers) - 需要 startup_scripts
    // ══════════════════════════════════════════════════
    // ⚠️ 特性必须在 startup_scripts 中定义，不是 server_scripts！
    // 使用 TConJSEvents.modifierRegistry 事件
    //
    // 文件位置: kubejs/startup_scripts/tconstruct_modifiers.js
    // ──────────────────────────────────────────────────
    /*
    TConJSEvents.modifierRegistry((event) => {

        // ─────────────────────────────────────────────
        // 1. 创建空特性 (只注册 ID)
        // ─────────────────────────────────────────────
        event.createEmpty("kubejs:my_modifier");

        // ─────────────────────────────────────────────
        // 2. 冲刺特性 - 右键使用工具触发
        // ─────────────────────────────────────────────
        event.createNew("kubejs:dash", builder => {
            builder.onUseTool((view, lvl, player, hand, source) => {
                // 给工具添加冷却
                player.addItemCooldown(view.getItem(), 200 - lvl * 20);
                // 向玩家视线方向冲刺
                player.setDeltaMovement(player.lookAngle.multiply(lvl * 2, 1, lvl * 2));
                return true; // 返回 true 表示成功使用
            });
        });

        // ─────────────────────────────────────────────
        // 3. 坚韧特性 - 修改工具基础属性
        // ─────────────────────────────────────────────
        event.createNew("kubejs:tough_skin", builder => {
            builder.addToolStats((view, lvl, statsBuilder) => {
                // 每级增加 10% 耐久
                TinkerToolStats.DURABILITY.multiply(statsBuilder, 1 + lvl * 0.1);
                // 每级增加 0.5 攻击伤害
                TinkerToolStats.ATTACK_DAMAGE.add(statsBuilder, lvl * 0.5);
            }).isSingleLevel();  // 标记为单级特性
        });

        // ─────────────────────────────────────────────
        // 4. 毒素特性 - 攻击时触发效果
        // ─────────────────────────────────────────────
        event.createNew("kubejs:poison", builder => {
            // 修改伤害值
            builder.getMeleeDamage((view, lvl, context, baseDamage, finalDamage) => {
                return finalDamage + lvl * 2; // 每级增加 2 点伤害
            });
            // 攻击后施加效果
            builder.onAfterMeleeHit((view, lvl, context, damage) => {
                context.livingTarget.potionEffects.add("minecraft:poison", 100 * lvl, lvl - 1);
            });
        });

        // ─────────────────────────────────────────────
        // 5. 速度特性 - 修改玩家属性
        // ─────────────────────────────────────────────
        event.createNew("kubejs:speedy", builder => {
            builder.addAttributes((view, lvl, slot, attributes) => {
                attributes.put(
                    "minecraft:generic.movement_speed",
                    builder.getAttributeModifier(
                        "b444bae1-abde-41ed-8688-f75a469fdbf4", // UUID
                        "speedy_modifier",                       // 名称
                        lvl * 0.1,                              // 每级 +10% 速度
                        "multiply_base"                          // 操作类型
                    )
                );
                return attributes;
            });
        });

        // ─────────────────────────────────────────────
        // 6. 血怒特性 - 低血量时增加挖掘速度
        // ─────────────────────────────────────────────
        event.createNew("kubejs:blood_rage", builder => {
            builder.getBreakSpeed((view, lvl, event, direction, canDrop, currentSpeed) => {
                let entity = event.entity;
                if (entity.health / entity.maxHealth < 0.5) {
                    event.newSpeed = currentSpeed * (1 + lvl * 0.2); // 每级 +20%
                }
            });
        });

        // ─────────────────────────────────────────────
        // 7. 吸血特性 - 治疗攻击者
        // ─────────────────────────────────────────────
        event.createNew("kubejs:lifesteal", builder => {
            builder.onAfterMeleeHit((view, lvl, context, damage) => {
                let healed = damage * 0.1 * lvl; // 每级恢复 10% 伤害
                context.attacker.heal(healed);
            });
        });

        // ─────────────────────────────────────────────
        // 8. 弓箭特性 - 修改投射物
        // ─────────────────────────────────────────────
        event.createNew("kubejs:power_shot", builder => {
            builder.projectileLaunch((view, lvl, shooter, projectile, arrow, modData, primary) => {
                if (arrow) {
                    arrow.baseDamage += lvl * 2; // 每级增加 2 点箭矢伤害
                }
            });
        });

        // ─────────────────────────────────────────────
        // 9. 盔甲特性 - 反伤效果
        // ─────────────────────────────────────────────
        event.createNew("kubejs:thorns_plus", builder => {
            builder.armorTakeAttacked((view, lvl, context, slot, source, damage) => {
                let attacker = source.actual || source.immediate;
                if (attacker) {
                    attacker.attack(source, damage * 0.2 * lvl); // 反弹 20% 伤害
                }
                return true;
            });
        });

        // ─────────────────────────────────────────────
        // 10. 盾牌特性 - 增强格挡
        // ─────────────────────────────────────────────
        event.createNew("kubejs:iron_wall", builder => {
            builder.addToolStats((view, lvl, statsBuilder) => {
                TinkerToolStats.BLOCK_AMOUNT.add(statsBuilder, lvl * 3);  // 每级 +3 格挡量
                TinkerToolStats.BLOCK_ANGLE.add(statsBuilder, lvl * 10); // 每级 +10° 格挡角度
            });
        });
    });
    */

    // ══════════════════════════════════════════════════
    // 9. 工具类 (Utils) - 用于特性开发
    // ══════════════════════════════════════════════════
    /*
    ┌─────────────────────────────────────────────────────┐
    │ TinkerToolStats - 工具属性常量                       │
    ├──────────────────────┬──────────────────────────────┤
    │ 通用属性             │                              │
    │ DURABILITY           │ 耐久度                       │
    │ USE_ITEM_SPEED       │ 使用物品速度 (蓄力等)        │
    ├──────────────────────┼──────────────────────────────┤
    │ 近战属性             │                              │
    │ ATTACK_DAMAGE        │ 攻击伤害                     │
    │ ATTACK_SPEED         │ 攻击速度                     │
    ├──────────────────────┼──────────────────────────────┤
    │ 挖掘属性             │                              │
    │ MINING_SPEED         │ 挖掘速度                     │
    │ HARVEST_TIER         │ 挖掘等级                     │
    ├──────────────────────┼──────────────────────────────┤
    │ 护甲属性             │                              │
    │ ARMOR                │ 护甲值                       │
    │ ARMOR_TOUGHNESS      │ 护甲韧性                     │
    │ KNOCKBACK_RESISTANCE │ 击退抗性                     │
    ├──────────────────────┼──────────────────────────────┤
    │ 盾牌属性             │                              │
    │ BLOCK_AMOUNT         │ 格挡伤害量                   │
    │ BLOCK_ANGLE          │ 格挡角度 (最大180°)          │
    ├──────────────────────┼──────────────────────────────┤
    │ 远程属性             │                              │
    │ DRAW_SPEED           │ 弓蓄力速度                   │
    │ VELOCITY             │ 投射物初速度                 │
    │ ACCURACY             │ 精准度                       │
    │ PROJECTILE_DAMAGE    │ 投射物伤害                   │
    │ WATER_INERTIA        │ 水下阻力                     │
    ├──────────────────────┼──────────────────────────────┤
    │ 钓鱼属性             │                              │
    │ SEA_LUCK             │ 钓鱼运气                     │
    │ LURE                 │ 钓鱼速度                     │
    └──────────────────────┴──────────────────────────────┘

    修改属性方法:
      TinkerToolStats.STAT.add(statsBuilder, value)      // 加法
      TinkerToolStats.STAT.multiply(statsBuilder, value) // 乘法

    ┌─────────────────────────────────────────────────────┐
    │ SimpleTCon - 匠魂工具类                             │
    ├─────────────────────────────────────────────────────┤
    │ 特性相关:                                           │
    │ SimpleTCon.getModifier(id)         获取特性对象     │
    │ SimpleTCon.hasModifier(stack, id)  检查是否有特性   │
    │ SimpleTCon.getModifierLevel(stack, id) 获取特性等级 │
    │ SimpleTCon.getModifiersFromGame()  获取所有特性     │
    │ SimpleTCon.getModifiersFromTag(tag) 从标签获取特性  │
    ├─────────────────────────────────────────────────────┤
    │ 工具相关:                                           │
    │ SimpleTCon.getToolStack(stack)     获取 ToolStack   │
    │ SimpleTCon.castToolStack(view)     转换为 ToolStack │
    │ SimpleTCon.getToolInSlot(entity, slot) 获取槽位工具 │
    ├─────────────────────────────────────────────────────┤
    │ 材料相关:                                           │
    │ SimpleTCon.getMaterialsInTool(tool, id) 材料数量    │
    │ SimpleTCon.hasMaterialInTool(tool, id)  是否有材料  │
    ├─────────────────────────────────────────────────────┤
    │ 其他:                                               │
    │ SimpleTCon.getTinkerData(entity, consumer) 实体数据 │
    └─────────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────────────┐
    │ TinkerDamageHelper - 伤害辅助                       │
    ├─────────────────────────────────────────────────────┤
    │ TinkerDamageHelper.breakTool(itemStack) 损坏工具    │
    └─────────────────────────────────────────────────────┘
    */

    console.info('TConstruct JS recipes loaded!')

    // ╔════════════════════════════════════════════════╗
    // ║  6. 原版配方                                    ║
    // ╚════════════════════════════════════════════════╝
    console.info('Loading vanilla recipes...')

    // ─────────────────────────────────────────────────
    // [工作台-有序] 煤炭 + 木棍 → 火把x4
    // ─────────────────────────────────────────────────
    event.shaped(
        '4x minecraft:torch',
        ['C', 'S'],
        { C: 'minecraft:coal', S: 'minecraft:stick' }
    ).id('kubejs:test_torch')

    // ─────────────────────────────────────────────────
    // [工作台-无序] 骨头 → 骨粉x4
    // ─────────────────────────────────────────────────
    event.shapeless(
        '4x minecraft:bone_meal',
        ['minecraft:bone']
    ).id('kubejs:test_bonemeal')

    // ─────────────────────────────────────────────────
    // [熔炉] 沙子 → 玻璃 (+0.1经验)
    // ─────────────────────────────────────────────────
    event.smelting('minecraft:glass', 'minecraft:sand').xp(0.1)

    // ─────────────────────────────────────────────────
    // [高炉] 粗铁 → 铁锭 (+0.7经验)
    // ─────────────────────────────────────────────────
    event.blasting('minecraft:iron_ingot', 'minecraft:raw_iron').xp(0.7)

    // ─────────────────────────────────────────────────
    // [烟熏炉] 生牛肉 → 熟牛排 (+0.35经验)
    // ─────────────────────────────────────────────────
    event.smoking('minecraft:cooked_beef', 'minecraft:beef').xp(0.35)

    // ─────────────────────────────────────────────────
    // [营火] 生鲑鱼 → 熟鲑鱼
    // ─────────────────────────────────────────────────
    event.campfireCooking('minecraft:cooked_salmon', 'minecraft:salmon')

    // ─────────────────────────────────────────────────
    // [切石机] 石头 → 石砖x4
    // ─────────────────────────────────────────────────
    event.stonecutting('4x minecraft:stone_bricks', 'minecraft:stone')

    console.info('Vanilla recipes loaded!')
    console.info('===== 所有扩展测试配方加载完成 =====')
})

// ╔════════════════════════════════════════════════╗
// ║  TODO: PONDERJS 教程动画                       ║
// ╚════════════════════════════════════════════════╝
// 文件位置: kubejs/client_scripts/ponder/
// 参考: https://github.com/Lytho/PonderJS/wiki
/*
Ponder.registry((event) => {
    // TODO: 添加 Ponder 教程动画
})
*/

// ╔════════════════════════════════════════════════╗
// ║  TODO: MORE WORLD CRAFTING 世界合成            ║
// ╚════════════════════════════════════════════════╝
// 参考: https://github.com/Xiaoyu-2009/more_world_crafting/wiki
/*
ServerEvents.recipes(event => {
    // TODO: 添加 More World Crafting 配方
    event.custom({
        type: 'more_world_crafting:配方类型',
        // 配方参数
    })
})
*/

// ╔════════════════════════════════════════════════╗
// ║  TODO: KUBEJS CURIOS 饰品                      ║
// ╚════════════════════════════════════════════════╝
// 文件位置: kubejs/startup_scripts/
// 参考: https://github.com/KubeJS-Mods/KubeJS-Curios
/*
StartupEvents.registry('item', event => {
    // TODO: 添加 Curios 饰品物品
    event.create('my_ring')
        .curio('ring')
})
*/
