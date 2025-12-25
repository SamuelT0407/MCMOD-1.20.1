// priority: 10
// 删除所有配方示例 (优先级设为10，确保在其他脚本之前执行)
// ⚠️ 警告: 这会删除几乎所有配方！仅用于测试/演示目的！

ServerEvents.recipes(event => {
    console.info('===== 开始删除所有配方 =====')

    // ============================================
    // 方法1: 删除所有配方 (最激进)
    // ============================================

    // 删除所有配方 - 使用空过滤器
    event.remove({})  // 这会删除所有配方！

    console.info('已删除所有配方!')

    // ============================================
    // 方法2: 按模组删除 (更精确)
    // ============================================

    // 删除特定模组的所有配方
    // event.remove({ mod: 'minecraft' })      // 删除所有原版配方
    // event.remove({ mod: 'create' })         // 删除所有 Create 配方
    // event.remove({ mod: 'mekanism' })       // 删除所有 Mekanism 配方
    // event.remove({ mod: 'thermal' })        // 删除所有 Thermal 配方
    // event.remove({ mod: 'immersiveengineering' })  // 删除所有 IE 配方
    // event.remove({ mod: 'tconstruct' })     // 删除所有匠魂配方

    // ============================================
    // 方法3: 按配方类型删除
    // ============================================

    // 删除所有工作台配方
    // event.remove({ type: 'minecraft:crafting_shaped' })
    // event.remove({ type: 'minecraft:crafting_shapeless' })

    // 删除所有熔炼配方
    // event.remove({ type: 'minecraft:smelting' })
    // event.remove({ type: 'minecraft:blasting' })
    // event.remove({ type: 'minecraft:smoking' })
    // event.remove({ type: 'minecraft:campfire_cooking' })

    // ============================================
    // 方法4: 排除特定配方不删除
    // ============================================

    // 删除所有配方，但保留 kubejs 开头的
    // event.remove({ not: { mod: 'kubejs' } })

    // 删除所有配方，但保留特定ID
    // event.remove({ not: { id: 'kubejs:test_torch' } })

    // 删除所有配方，但保留多个模组
    // event.remove({ not: [{ mod: 'kubejs' }, { mod: 'minecraft' }] })

    // ============================================
    // 方法5: 按输出物品删除
    // ============================================

    // 删除所有钻石相关配方
    // event.remove({ output: 'minecraft:diamond' })

    // 删除所有铁锭输出的配方
    // event.remove({ output: 'minecraft:iron_ingot' })

    // 使用标签删除
    // event.remove({ output: '#forge:ingots' })  // 删除所有产出锭的配方

    // ============================================
    // 方法6: 按输入物品删除
    // ============================================

    // 删除所有使用钻石作为材料的配方
    // event.remove({ input: 'minecraft:diamond' })

    // 删除所有使用木棍的配方
    // event.remove({ input: 'minecraft:stick' })

    // ============================================
    // 方法7: 组合条件删除
    // ============================================

    // 删除 Mekanism 的所有熔炼配方
    // event.remove({ mod: 'mekanism', type: 'mekanism:smelting' })

    // 删除输出钻石且来自 minecraft 模组的配方
    // event.remove({ mod: 'minecraft', output: 'minecraft:diamond' })

    console.info('===== 配方删除完成 =====')
})
