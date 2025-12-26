// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  TConstruct JS - 配方示例文件                                              ║
// ║  此文件展示了所有可用的 TConstruct 配方类型                                 ║
// ╚════════════════════════════════════════════════════════════════════════════╝

ServerEvents.recipes((event) => {
  const { tconstruct } = event.recipes;

  // ══════════════════════════════════════════════════════════════════════════
  // 1. 合金 (Alloy) - 冶炼炉中混合多种流体形成新流体
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: alloy(输出流体, 输入流体数组, 温度?)
  // 温度参数可选，默认值取决于输入流体

  // 基础用法: 水 + 岩浆 → 熔融黑曜石
  tconstruct.alloy(Fluid.of("tconstruct:molten_obsidian", 1000), [Fluid.water(500), Fluid.lava(500)]);

  // 带温度参数: 指定所需温度为 200K
  tconstruct.alloy(Fluid.of("tconstruct:molten_obsidian", 1000), [Fluid.water(500), Fluid.lava(500)], 200);

  // 链式调用方式: 使用 .temperature() 方法设置温度
  tconstruct.alloy(Fluid.of("tconstruct:molten_obsidian", 1000), [Fluid.water(500), Fluid.lava(500)]).temperature(400);

  // ══════════════════════════════════════════════════════════════════════════
  // 2. 铸件复制 - 浇铸盆 (Basin Duplication)
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: basin_duplication(铸件, 流体ID, 冷却时间?)
  // 用金液体复制已有铸件

  // 基础用法: 用熔融钻石复制钻石铸件
  tconstruct.basin_duplication("diamond", "tconstruct:molten_diamond");

  // 带冷却时间参数
  tconstruct.basin_duplication("diamond", "tconstruct:molten_diamond", 200);

  // 链式调用方式
  tconstruct.basin_duplication("diamond", "tconstruct:molten_diamond").cooling_time(400);

  // ══════════════════════════════════════════════════════════════════════════
  // 3. 容器填充 - 浇铸盆 (Basin Filling)
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: basin_filling(流体量, 容器物品)
  // 允许用冶炼炉填充特定容器
  // ⚠️ 警告: 此 API 在某些版本中存在 bug，container 会被转为对象格式

  tconstruct.basin_filling(1000, "apple");

  // ══════════════════════════════════════════════════════════════════════════
  // 4. 浇铸盆 (Casting Basin) - 大型物品浇铸
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: casting_basin(输出物品, 输入流体, 铸件?, 消耗铸件?, 冷却时间?, 交换槽位?)
  // 参数说明:
  //   - 输出物品: 最终产物
  //   - 输入流体: Fluid.of(流体ID, 数量)
  //   - 铸件: 可选，用于定义形状的物品
  //   - 消耗铸件: 默认 false，是否消耗铸件
  //   - 冷却时间: 默认 1.0，冷却时间倍率
  //   - 交换槽位: 默认 false，是否交换输入输出槽位

  // 基础用法: 熔融钻石 + 苹果铸件 → 钻石
  tconstruct.casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple");

  // 消耗铸件 (参数方式)
  tconstruct.casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple", true);

  // 消耗铸件 (链式调用方式)
  tconstruct.casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple").cast_consumed(true);

  // 消耗铸件 + 冷却时间 (参数方式)
  tconstruct.casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple", true, 200);

  // 消耗铸件 + 冷却时间 (链式调用方式)
  tconstruct
    .casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple")
    .cast_consumed(true)
    .cooling_time(400);

  // 所有参数 (参数方式)
  tconstruct.casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple", true, 200, true);

  // 所有参数 (链式调用方式)
  tconstruct
    .casting_basin("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple")
    .cast_consumed(true)      // 消耗铸件
    .cooling_time(400)        // 冷却时间
    .switch_slots(true);      // 交换槽位

  // ══════════════════════════════════════════════════════════════════════════
  // 5. 浇铸盆药水 (Casting Basin Potion)
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: casting_basin_potion(输出, 瓶子, 流体, 冷却时间?)
  // ⚠️ 警告: 此 API 在某些版本中存在 bug，result 会被转为对象格式

  tconstruct.casting_basin_potion("diamond", "apple", Fluid.of("tconstruct:molten_diamond", 1000));
  tconstruct.casting_basin_potion("diamond", "apple", Fluid.of("tconstruct:molten_diamond", 1000), 200);
  tconstruct.casting_basin_potion("diamond", "apple", Fluid.of("tconstruct:molten_diamond", 1000)).cooling_time(400);

  // ══════════════════════════════════════════════════════════════════════════
  // 6. 浇铸台 (Casting Table) - 小型物品浇铸
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: casting_table(输出物品, 输入流体, 铸件?, 消耗铸件?, 冷却时间?, 交换槽位?)
  // 参数与 casting_basin 相同

  // 基础用法
  tconstruct.casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple");

  // 消耗铸件 (参数方式)
  tconstruct.casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple", true);

  // 消耗铸件 (链式调用方式)
  tconstruct.casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple").cast_consumed(true);

  // 消耗铸件 + 冷却时间 (参数方式)
  tconstruct.casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple", true, 200);

  // 消耗铸件 + 冷却时间 (链式调用方式)
  tconstruct
    .casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple")
    .cast_consumed(true)
    .cooling_time(400);

  // 所有参数 (参数方式)
  tconstruct.casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple", true, 200, true);

  // 所有参数 (链式调用方式)
  tconstruct
    .casting_table("diamond", Fluid.of("tconstruct:molten_diamond", 1000), "apple")
    .cast_consumed(true)      // 消耗铸件
    .cooling_time(400)        // 冷却时间
    .switch_slots(true);      // 交换槽位

  // ══════════════════════════════════════════════════════════════════════════
  // 7. 浇铸台药水 (Casting Table Potion)
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: casting_table_potion(输出, 瓶子, 流体, 冷却时间?)
  // ⚠️ 警告: 此 API 在某些版本中存在 bug，result 会被转为对象格式

  tconstruct.casting_table_potion("diamond", "apple", Fluid.of("tconstruct:molten_diamond", 1000));
  tconstruct.casting_table_potion("diamond", "apple", Fluid.of("tconstruct:molten_diamond", 1000), 200);
  tconstruct.casting_table_potion("diamond", "apple", Fluid.of("tconstruct:molten_diamond", 1000)).cooling_time(400);

  // ══════════════════════════════════════════════════════════════════════════
  // 8. 物品熔融 (Melting) - 将物品熔化为流体
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: melting(输出流体, 输入物品, 温度?, 时间?)
  // 参数说明:
  //   - 输出流体: Fluid.of(流体ID, 数量)
  //   - 输入物品: 要熔化的物品
  //   - 温度: 可选，需要的最低温度(K)
  //   - 时间: 可选，熔融时间(tick)

  // 基础用法: 钻石 → 熔融钻石
  tconstruct.melting(Fluid.of("tconstruct:molten_diamond", 1000), "diamond");

  // 带温度参数
  tconstruct.melting(Fluid.of("tconstruct:molten_diamond", 1000), "diamond", 200);

  // 链式调用设置温度
  tconstruct.melting(Fluid.of("tconstruct:molten_diamond", 1000), "diamond").temperature(400);

  // 温度 + 时间 (参数方式)
  tconstruct.melting(Fluid.of("tconstruct:molten_diamond", 1000), "diamond", 600, 200);

  // 温度 + 时间 (链式调用方式)
  tconstruct.melting(Fluid.of("tconstruct:molten_diamond", 1000), "diamond").temperature(400).time(200);

  // ══════════════════════════════════════════════════════════════════════════
  // 9. 燃料 (Melting Fuel) - 定义冶炼炉燃料
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: melting_fuel(持续时间, 流体, 温度?)
  // 参数说明:
  //   - 持续时间: 燃料燃烧时间(tick)
  //   - 流体: Fluid.of(流体ID, 消耗量)
  //   - 温度: 可选，提供的温度(K)
  // ⚠️ 警告: 此 API 在某些版本中缺少 rate 字段，使用 event.custom 更可靠

  // 基础用法: 牛奶作为燃料
  tconstruct.melting_fuel(1000, Fluid.of("milk", 1000));

  // 带温度参数
  tconstruct.melting_fuel(1000, Fluid.of("milk", 1000), 2000);

  // 链式调用设置温度
  tconstruct.melting_fuel(1000, Fluid.of("milk", 1000)).temperature(4000);

  // ══════════════════════════════════════════════════════════════════════════
  // 10. 铸模成形 (Molding Table) - 压制铸件
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: molding_table(输出, 模板, 材料)
  // 将材料放在模板上，压制成输出物品
  // ⚠️ 警告: 此 API 在某些版本中存在 bug，pattern 会被解析为空

  tconstruct.molding_table("diamond", "apple", "stick");

  // ══════════════════════════════════════════════════════════════════════════
  // 11. 铸件复制 - 浇铸台 (Table Duplication)
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: table_duplication(铸件, 流体ID, 冷却时间?)
  // 用金液体复制已有铸件

  // 基础用法
  tconstruct.table_duplication("diamond", "tconstruct:molten_diamond");

  // 带冷却时间参数
  tconstruct.table_duplication("diamond", "tconstruct:molten_diamond", 200);

  // 链式调用方式
  tconstruct.table_duplication("diamond", "tconstruct:molten_diamond").cooling_time(400);

  // ══════════════════════════════════════════════════════════════════════════
  // 12. 容器填充 - 浇铸台 (Table Filling)
  // ══════════════════════════════════════════════════════════════════════════
  // 语法: table_filling(流体量, 容器物品)
  // 允许用冶炼炉填充特定容器
  // ⚠️ 警告: 此 API 在某些版本中存在 bug，container 会被转为对象格式

  tconstruct.table_filling(1000, "apple");
});
