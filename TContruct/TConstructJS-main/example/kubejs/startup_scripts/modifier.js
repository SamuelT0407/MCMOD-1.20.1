// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  TConstruct JS - 特性 (Modifier) 示例文件                                   ║
// ║  此文件展示了所有可用的特性回调函数                                          ║
// ║  特性必须在 startup_scripts 中定义！                                        ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// priority: 0 表示加载优先级，数字越小越先加载

TConJSEvents.modifierRegistry((event) => {
  // ══════════════════════════════════════════════════════════════════════════
  // 创建空特性 - 仅注册 ID，逻辑在其他地方实现
  // ══════════════════════════════════════════════════════════════════════════
  event.createEmpty("id");

  // ══════════════════════════════════════════════════════════════════════════
  // 1. 投射物命中实体 + 近战攻击后
  // ══════════════════════════════════════════════════════════════════════════
  // projectileHitEntity: 投射物（如箭矢）命中实体时触发
  // onAfterMeleeHit: 近战攻击命中后触发
  // 效果: 击飞目标的头盔
  event.createNew("give_me_hat", (builder) => {
    builder
      // 投射物命中实体回调
      // 参数: modifier(特性), modDataNBT(NBT数据), damage(伤害), projectile(投射物),
      //       hitResult(命中结果), sourceEntity(来源实体), targetEntity(目标实体)
      .projectileHitEntity((modifier, modDataNBT, damage, projectile, hitResult, sourceEntity, targetEntity) => {
        // 在目标头顶生成其头盔物品
        targetEntity.block.up.popItem(targetEntity.headArmorItem);
        // 清空目标头盔槽
        targetEntity.headArmorItem = "air";
        return false; // 返回 false 表示不阻止后续处理
      })
      // 近战攻击命中后回调
      // 参数: view(工具视图), damage(伤害), context(上下文)
      .onAfterMeleeHit((view, lvl, context) => {
        context.livingTarget.block.up.popItem(context.livingTarget.headArmorItem);
        context.livingTarget.headArmorItem = "air";
      });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 2. 添加工具属性 - 增加攻击伤害
  // ══════════════════════════════════════════════════════════════════════════
  // addToolStats: 修改工具的基础属性
  // 效果: 每级增加 10% 攻击伤害和投射物伤害
  event.createNew("more_damage", (builder) => {
    // 参数: view(工具视图), lvl(特性等级), statsBuilder(属性构建器)
    builder.addToolStats((view, lvl, statsBuilder) => {
      // TinkerToolStats 包含所有可修改的属性
      TinkerToolStats.ATTACK_DAMAGE.multiply(statsBuilder, 1 + lvl * 0.1);      // 近战伤害
      TinkerToolStats.PROJECTILE_DAMAGE.multiply(statsBuilder, 1 + lvl * 0.1);  // 投射物伤害
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 3. 添加属性修饰符 - 增加移动速度
  // ══════════════════════════════════════════════════════════════════════════
  // addAttributes: 添加原版属性修饰符
  // 效果: 每级增加 10% 移动速度
  event.createNew("speedy", (builder) => {
    // 参数: view(工具视图), lvl(等级), slot(槽位), attributes(属性映射)
    builder.addAttributes((view, lvl, slot, attributes) => {
      // getAttributeModifier 创建属性修饰符
      // 参数: UUID, 名称, 值, 操作类型(add/multiply_base/multiply_total)
      attributes.put(
        "minecraft:generic.movement_speed",
        builder.getAttributeModifier("b444bae1-abde-41ed-8688-f75a469fdbf4", "aabb", lvl * 0.1, "multiply_base")
      );
      return attributes;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 4. 获取挖掘速度 - 低血量时加速
  // ══════════════════════════════════════════════════════════════════════════
  // getBreakSpeed: 修改挖掘速度
  // 效果: 血量低于 50% 时，每级增加 10% 挖掘速度
  event.createNew("blood_speed", (builder) => {
    // 参数: view, lvl, breakSpeedEvent(挖掘事件), direction(方向), canDrop(是否掉落), currentSpeed(当前速度)
    builder.getBreakSpeed((view, lvl, breakSpeedEvent, direction, canDrop, currentSpeed) => {
      if (breakSpeedEvent.entity.health / breakSpeedEvent.entity.maxHealth < 0.5) {
        breakSpeedEvent.newSpeed = currentSpeed * (1 + lvl * 0.1);
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 5. 获取工具伤害 - 减少耐久消耗
  // ══════════════════════════════════════════════════════════════════════════
  // getToolDamage: 修改工具耐久消耗
  // 效果: 50% 概率减少耐久消耗
  event.createNew("not_easy_to_broken", (builder) => {
    // 参数: view, lvl, damage(原始耐久消耗), entity(使用者)
    // 返回值: 实际消耗的耐久
    builder.getToolDamage((view, lvl, damage, entity) =>
      // 对每点伤害进行随机判定，50% 概率计入
      Array(damage)
        .fill()
        .reduce((acc, cur) => acc + entity.random.nextBoolean(), 0)
    );
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 6. 背包 Tick - 持有时给予效果
  // ══════════════════════════════════════════════════════════════════════════
  // onInventoryTick: 物品在背包中时每 tick 触发
  // 效果: 主手持有时给予力量效果
  event.createNew("i_need_more_powerful", (builder) => {
    // 参数: view, lvl, level(世界), entity(实体), slot(槽位),
    //       inMainHand(是否在主手), inAvailableSlot(是否在可用槽位), itemStack(物品堆)
    builder.onInventoryTick((view, lvl, level, entity, slot, inMainHand, inAvailableSlot, itemStack) => {
      if (inMainHand) {
        // 给予力量效果，持续 1 tick，等级为特性等级
        entity.potionEffects.add("minecraft:strength", 1, lvl);
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 7. 获取修复系数 - 增加修复效率
  // ══════════════════════════════════════════════════════════════════════════
  // getRepairFactor: 修改工具修复效率
  // 效果: 每级增加 15% 修复效率
  event.createNew("easy_repair", (builder) => {
    // 参数: view, lvl, repaired(修复量)
    // 返回值: 实际修复量
    builder.getRepairFactor((view, lvl, repaired) => {
      return repaired * (1 + lvl * 0.15);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 8. 工具提示设置 - 添加混乱文本
  // ══════════════════════════════════════════════════════════════════════════
  // tooltipSetting: 修改物品工具提示
  // 效果: 添加乱码文字
  event.createNew("randomly_tooltip", (builder) => {
    // 参数: view, lvl, player(玩家), tooltip(提示列表), key(按键), flag(标志)
    builder.tooltipSetting((view, lvl, player, tooltip, key, flag) => {
      tooltip.add(Text.of("000000000").obfuscated()); // 添加乱码效果
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 9. 添加易变数据 - 使工具闪亮
  // ══════════════════════════════════════════════════════════════════════════
  // addVolatileData: 添加易变 NBT 数据
  // 效果: 使工具具有闪亮效果
  event.createNew("shiny", (builder) => {
    // 参数: context(上下文), lvl(等级), data(NBT数据)
    builder.addVolatileData((context, lvl, data) => {
      data.putBoolean("tconstruct:shiny", true);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 10. 是否可以格挡攻击 - 条件格挡
  // ══════════════════════════════════════════════════════════════════════════
  // canBlockAttacked: 判断是否能格挡攻击
  // 效果: 只有当攻击者与伤害来源相同时才能格挡（防止远程攻击）
  event.createNew("golden_body", (builder) => {
    // 参数: view, lvl, context(上下文), slot(槽位), source(伤害来源), damage(伤害)
    // 返回值: true 可以格挡, false 不能格挡
    builder.canBlockAttacked((view, lvl, context, slot, source, damage) => {
      return !!(source.immediate && source.actual && source.immediate.is(source.actual));
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 11. 盔甲受击 - 反伤效果
  // ══════════════════════════════════════════════════════════════════════════
  // armorTakeAttacked: 穿戴盔甲时受到攻击
  // 效果: 将受到的伤害反弹给攻击者
  event.createNew("reverse_damage", (builder) => {
    // 参数: view, lvl, context(上下文), slot(槽位), source(伤害来源), damage(伤害)
    // 返回值: true 继续处理, false 取消伤害
    builder.armorTakeAttacked((view, lvl, context, slot, source, damage) => {
      const returned = source.actual || source.immediate;
      if (returned != null) {
        returned.attack(source, damage); // 反弹伤害
      }
      return true;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 12. 寻找弓箭弹药 - 自定义弹药
  // ══════════════════════════════════════════════════════════════════════════
  // findBowAmmo: 自定义弓箭使用的弹药
  // 效果: 只使用光灵箭作为弹药
  event.createNew("lighter", (builder) => {
    // 参数: view, lvl, living(生物), stack(当前物品), predicate(匹配条件)
    // 返回值: 弹药物品堆
    builder.findBowAmmo((view, lvl, living, stack, predicate) => {
      return stack.id == "minecraft:spectral_arrow" ? stack.withCount(stack.count - 1) : Item.empty();
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 13. 获取耐久条颜色 - 红色耐久条
  // ══════════════════════════════════════════════════════════════════════════
  // getDurabilityRGB: 自定义耐久条颜色
  // 效果: 耐久条显示为红色
  event.createNew("red_bar", (builder) => {
    // 参数: view, lvl
    // 返回值: RGB 颜色值 (0xRRGGBB)
    builder.getDurabilityRGB((view, lvl) => {
      return 0xff0000; // 红色
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 14. 获取耐久条宽度 - 短耐久条
  // ══════════════════════════════════════════════════════════════════════════
  // getDurabilityWidth: 自定义耐久条宽度
  // 效果: 耐久条更短（6像素）
  event.createNew("tiny_bar", (builder) => {
    // 参数: view, lvl
    // 返回值: 宽度（像素）
    builder.getDurabilityWidth((view, lvl) => {
      return 6;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 15. 获取近战伤害 - 随机伤害
  // ══════════════════════════════════════════════════════════════════════════
  // getMeleeDamage: 修改近战伤害
  // 效果: 伤害随机 x0.1 ~ x2.0
  event.createNew("random_melee", (builder) => {
    // 参数: view, lvl, context(上下文), baseDamage(基础伤害), finalDamage(最终伤害)
    // 返回值: 修改后的伤害
    builder.getMeleeDamage((view, lvl, context, baseDamage, finalDamage) => {
      return finalDamage * (context.attacker.random.nextInt(1, 20) / 10);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 16. 获取使用动画 - 望远镜动画
  // ══════════════════════════════════════════════════════════════════════════
  // getUseAnim: 自定义使用动画
  // 效果: 使用时显示望远镜效果
  event.createNew("spyglassable", (builder) => {
    // 参数: view, lvl
    // 返回值: 动画类型字符串
    builder.getUseAnim((view, lvl) => {
      return "spyglass";
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 17. 获取使用时间 - 快速蓄力
  // ══════════════════════════════════════════════════════════════════════════
  // getUseTime: 修改工具使用时间
  // 效果: 每级减少蓄力时间
  event.createNew("fast_draw", (builder) => {
    // 参数: view, lvl
    // 返回值: 使用时间（tick）
    builder.getUseTime((view, lvl) => {
      return SimpleTCon.castToolStack(view).item.getUseDuration() / (1 + lvl);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 18. 是否显示耐久条 - 隐藏耐久
  // ══════════════════════════════════════════════════════════════════════════
  // isDurabilityShowBar: 是否显示耐久条
  // 效果: 隐藏耐久条
  event.createNew("unknown_durability", (builder) => {
    // 参数: view, lvl
    // 返回值: true 显示, false 隐藏
    builder.isDurabilityShowBar((view, lvl) => {
      return false;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 19. 单级特性
  // ══════════════════════════════════════════════════════════════════════════
  // isSingleLevel: 标记为单级特性（只有1级）
  event.createNew("single", (builder) => {
    builder.isSingleLevel();
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 20. 修改受到的伤害 - 减伤效果
  // ══════════════════════════════════════════════════════════════════════════
  // modifyDamageTaken: 修改受到的伤害
  // 效果: 每级减少 10% 伤害
  event.createNew("silver_body", (builder) => {
    // 参数: view, lvl, context(上下文), slot(槽位), source(伤害来源), damage(伤害)
    // 返回值: 修改后的伤害
    builder.modifyDamageTaken((view, lvl, context, slot, source, damage) => {
      return damage - damage * (0.1 * lvl);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 21. 修改防护值 - 降低防护
  // ══════════════════════════════════════════════════════════════════════════
  // modifyProtection: 修改防护值
  // 效果: 每级降低 10% 防护（负面特性示例）
  event.createNew("lower_protection", (builder) => {
    // 参数: view, lvl, context(上下文), slot(槽位), source(伤害来源), protection(防护值)
    // 返回值: 修改后的防护值
    builder.modifyProtection((view, lvl, context, slot, source, protection) => {
      return protection - protection * (0.1 * lvl);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 22. 条件属性 - 动态属性调整
  // ══════════════════════════════════════════════════════════════════════════
  // conditionalStat: 根据条件动态调整属性
  // 效果: 根据属性类型应用不同倍率
  event.createNew("stat_plus", (builder) => {
    // 参数: view, lvl, entity(实体), stat(属性类型), base(基础值), magnification(倍率)
    // 返回值: 修改后的属性值
    builder.conditionalStat((view, lvl, entity, stat, base, magnification) => {
      switch (stat) {
        case TinkerToolStats.ATTACK_DAMAGE:
          return base * (1 + lvl * magnification);
        case TinkerToolStats.PROJECTILE_DAMAGE:
          return base * (1 + lvl * magnification);
        default:
          return base;
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 23. 破坏后事件 - 点金术
  // ══════════════════════════════════════════════════════════════════════════
  // onAfterBreak: 方块破坏后触发
  // 效果: 将破坏位置变成金块
  event.createNew("midas_tool", (builder) => {
    // 参数: view, lvl, context(上下文，包含 world 和 pos)
    builder.onAfterBreak((view, lvl, context) => {
      context.world.getBlock(context.pos).set("minecraft:gold_block");
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 24. 近战攻击前 - 增加击退
  // ══════════════════════════════════════════════════════════════════════════
  // onBeforeMeleeHit: 近战攻击命中前触发
  // 效果: 每级增加 10% 击退
  event.createNew("slap", (builder) => {
    // 参数: view, lvl, context(上下文), damage(伤害), baseKnockback(基础击退), finalKnockback(最终击退)
    // 返回值: 修改后的击退值
    builder.onBeforeMeleeHit((view, lvl, context, damage, baseKnockback, finalKnockback) => {
      return finalKnockback * (1 + lvl * 0.1);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 25. 伤害造成后 - 交换氧气
  // ══════════════════════════════════════════════════════════════════════════
  // onDamageDealt: 造成伤害后触发
  // 效果: 与目标交换氧气值
  event.createNew("my_air", (builder) => {
    // 参数: view, lvl, context(上下文), slot(槽位), living(目标生物), source(伤害来源), damage(伤害)
    builder.onDamageDealt((view, lvl, context, slot, living, source, damage) => {
      const { airSupply } = living;
      const attacker = source.actual || source.immediate;
      if (attacker != null) {
        living.airSupply = attacker.airSupply;
        attacker.airSupply = airSupply;
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 26. 装备时触发 - 着火
  // ══════════════════════════════════════════════════════════════════════════
  // onEquip: 装备物品时触发
  // 效果: 装备时使玩家着火
  event.createNew("hotter", (builder) => {
    // 参数: view, lvl, context(上下文，包含 entity)
    builder.onEquip((view, lvl, context) => {
      context.entity.secondsOnFire = 1 * lvl;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 27. 使用完成 - 给予饱和
  // ══════════════════════════════════════════════════════════════════════════
  // onFinishUsing: 物品使用完成时触发
  // 效果: 弩发射后给予食物恢复
  event.createNew("saturation_after_use", (builder) => {
    // 参数: view, lvl, living(使用者)
    builder.onFinishUsing((view, lvl, /** @type {Internal.Player_} */ living) => {
      if (view.item.id == "tconstruct:crossbow" && living.player) {
        living.foodData.eat("golden_apple", "golden_apple");
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 28. 停止使用 - 踢出玩家
  // ══════════════════════════════════════════════════════════════════════════
  // onStoppedUsing: 停止使用物品时触发
  // 效果: 踢出玩家（警告：这会断开玩家连接！）
  event.createNew("i_cant_stop", (builder) => {
    // 参数: view, lvl, living(使用者), duration(使用时长)
    builder.onStoppedUsing((view, lvl, living, duration) => {
      if (living.player) {
        living.kick(); // 踢出游戏
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 29. 卸下装备 - 冰冻
  // ══════════════════════════════════════════════════════════════════════════
  // onUnequip: 卸下装备时触发
  // 效果: 卸下时冰冻玩家 25 秒
  event.createNew("why_unequip_me", (builder) => {
    // 参数: view, lvl, context(上下文，包含 entity)
    builder.onUnequip((view, lvl, context) => {
      context.entity.ticksFrozen = 20 * 25; // 25 秒冰冻
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 30. 使用工具 - 显示物品名
  // ══════════════════════════════════════════════════════════════════════════
  // onUseTool: 右键使用工具时触发
  // 效果: 在聊天框显示当前物品名称
  event.createNew("show_item", (builder) => {
    // 参数: view, lvl, player(玩家), hand(手), source(来源)
    // 返回值: true 消耗使用, false 不消耗
    builder.onUseTool((view, lvl, player, hand, source) => {
      player.tell(player.getItemInHand(hand).displayName);
      return true;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 31. 使用中 Tick - 蓄力保护
  // ══════════════════════════════════════════════════════════════════════════
  // onUsingTick: 物品使用过程中每 tick 触发
  // 效果: 蓄力时给予抗性提升
  event.createNew("shooting_golden_cover", (builder) => {
    // 参数: view, lvl, living(使用者), duration(使用时长)
    builder.onUsingTick((view, lvl, living, duration) => {
      living.potionEffects.add("resistance", 1, 4); // 抗性 4
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 32. 处理战利品 - 清空掉落
  // ══════════════════════════════════════════════════════════════════════════
  // processLoot: 处理生物掉落物
  // 效果: 清空所有掉落物
  event.createNew("no_loot", (builder) => {
    // 参数: view, lvl, items(掉落物列表), context(上下文)
    builder.processLoot((view, lvl, items, context) => {
      items.clear();
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 33. 投射物命中方块 - 切换开关
  // ══════════════════════════════════════════════════════════════════════════
  // projectileHitBlock: 投射物命中方块时触发
  // 效果: 切换方块的 lit 属性（如红石灯）
  event.createNew("lit", (builder) => {
    // 参数: modifier, modData(NBT), lvl, projectile(投射物), hitResult(命中结果), living(射手)
    builder.projectileHitBlock((modifier, modData, lvl, projectile, hitResult, living) => {
      const block = projectile.level.getBlock(hitResult.blockPos);
      const { properties } = block;
      if (properties.get("lit")) {
        projectile.lit = projectile.lit == "true" ? "false" : "true";
      }
      block.set(block.id, properties);
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 34. 投射物发射 - 饱食度加成
  // ══════════════════════════════════════════════════════════════════════════
  // projectileLaunch: 投射物发射时触发
  // 效果: 根据饱食度增加箭矢伤害
  event.createNew("fully_charge", (builder) => {
    // 参数: view, lvl, living(射手), projectile(投射物实体), arrow(箭矢), modData(NBT), arg6
    builder.projectileLaunch((view, lvl, living, projectile, arrow, modData, arg6) => {
      if (living.player) {
        arrow.baseDamage += living.foodData.foodLevel; // 加上饱食度作为额外伤害
      }
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 35. 滑翔翼飞行 - 启用滑翔
  // ══════════════════════════════════════════════════════════════════════════
  // setElytraFlight: 是否允许滑翔翼飞行
  // 效果: 允许滑翔
  event.createNew("elytrable", (builder) => {
    // 参数: view, lvl, living(穿戴者), flyDuration(飞行时长)
    // 返回值: true 允许滑翔, false 不允许
    builder.setElytraFlight((view, lvl, living, flyDuration) => {
      return true;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 36. 工具使用行为 - 横扫攻击
  // ══════════════════════════════════════════════════════════════════════════
  // toolUseAction: 定义工具的特殊使用行为
  // 效果: 启用剑的横扫攻击
  event.createNew("sweeping", (builder) => {
    // 参数: view, lvl
    // 返回值: ToolAction 对象
    builder.toolUseAction((view, lvl) => {
      return builder.toolActionOf("sword_sweep");
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 37. 更新盔甲抢夺等级 - 抢夺倍增
  // ══════════════════════════════════════════════════════════════════════════
  // updateArmorLooting: 修改盔甲提供的抢夺等级
  // 效果: 抢夺等级乘以特性等级
  event.createNew("multi_armor_loot", (builder) => {
    // 参数: view, lvl, looting(总抢夺), equipment(装备), slot(槽位), originalLvl(原始等级)
    // 返回值: 修改后的抢夺等级
    builder.updateArmorLooting((view, lvl, looting, equipment, slot, originalLvl) => {
      return originalLvl * lvl;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 38. 更新工具抢夺等级 - 抢夺倍增
  // ══════════════════════════════════════════════════════════════════════════
  // updateToolLooting: 修改工具提供的抢夺等级
  // 效果: 抢夺等级乘以特性等级
  event.createNew("multi_tool_loot", (builder) => {
    // 参数: view, lvl, looting(总抢夺), originalLvl(原始等级)
    // 返回值: 修改后的抢夺等级
    builder.updateToolLooting((view, lvl, looting, originalLvl) => {
      return originalLvl * lvl;
    });
  });

  // ══════════════════════════════════════════════════════════════════════════
  // 39. 验证工具 - 立即损坏
  // ══════════════════════════════════════════════════════════════════════════
  // validateTool: 验证工具是否有效
  // 效果: 立即损坏工具
  event.createNew("immediate_broke", (builder) => {
    // 参数: view, lvl
    // 返回值: Text 错误消息（如果无效）
    builder.validateTool((view, lvl) => {
      let toolStack = SimpleTCon.castToolStack(view);
      console.log(toolStack);
      let itemStack = toolStack.createStack();
      console.log(itemStack);
      TinkerDamageHelper.breakTool(itemStack);
      return Text.gold("immediate");
    });
  });
});
