# 🔗 create_connected-server.toml
## Create Connected（机械动力联动）- 服务器配置翻译

---

```toml
# 蓝图嵌套目录的最大层数
# 允许在蓝图文件夹中创建子文件夹的深度
# 范围: 0 ~ 20
schematicsNestingDepth = 5

# 启用手动应用物品时返回剩余物品的修复
# 某些物品手动使用时可能不会正确返回剩余物品，此选项修复该问题
applicationRemainingItemFix = true

# 流体容器作为锅炉时的应力输出倍率
# 流体容器（Fluid Vessel）可以作为蒸汽锅炉的一部分
# 倍率越高，产出的应力越多
vesselBoilerStressMultiplier = 0.8125

# 流体容器作为锅炉时的热量等级倍率
# 影响锅炉产生蒸汽的效率
vesselHeatMultiplier = 0.5

# 流体容器作为锅炉时可达到的最大锅炉等级
# 普通蒸汽锅炉最高18级
# 范围: 0 ~ 18
vesselMaxLevel = 18

# ⭐ 动力电池放电时的转速（RPM）
# 动力电池可以储存旋转能量，这是释放时的转速
# 范围: 0 ~ 256
batteryDischargeRPM = 64

# ⭐ 动力电池的最大容量（SU-小时）
# SU = Stress Unit（应力单位）
# 512 SU-小时意味着可以以512 SU的速率运行1小时
# 范围: 0.0 ~ 8192.0
batteryCapacity = 512.0

# 是否允许红石链接在两个槽位都使用通配符
# 通配符(*)可以匹配任何频率
# 需要重启游戏才能生效
allowDualWildcardLink = false

[stressValues.v1]  # 应力值设置

    # 启用状态刹车的应力消耗（应力单位）
    # 刹车激活时会消耗大量应力
    brakeActiveStress = 16384.0

[stressValues.v1.impact]  # 各方块的应力消耗

    # 黄铜变速箱 - 不消耗应力
    brass_gearbox = 0.0

    # 离心离合器 - 不消耗应力
    centrifugal_clutch = 0.0

    # 刹车（未激活时）- 不消耗应力
    brake = 0.0

    # 链式齿轮 - 不消耗应力
    encased_chain_cogwheel = 0.0

    # 动力电池（充电时）- 消耗64应力
    kinetic_battery = 64.0

    # 六向变速箱 - 不消耗应力
    six_way_gearbox = 0.0

    # 剪切销 - 不消耗应力
    shear_pin = 0.0

    # 并联变速箱 - 不消耗应力
    parallel_gearbox = 0.0

    # 反向变速器 - 不消耗应力
    inverted_gearshift = 0.0

    # 单向离合器 - 不消耗应力
    freewheel_clutch = 0.0

    # 过载离合器 - 不消耗应力
    overstress_clutch = 0.0

    # 反向离合器 - 不消耗应力
    inverted_clutch = 0.0

[stressValues.v1.capacity]  # 应力输出

    # 曲柄轮 - 输出8应力
    crank_wheel = 8.0

    # 动力电池（放电时）- 输出32应力
    kinetic_battery = 32.0

    # 大曲柄轮 - 输出8应力
    large_crank_wheel = 8.0
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| batteryDischargeRPM | 64 | 动力电池放电转速 |
| batteryCapacity | 512.0 | 动力电池容量（SU-小时）|
| brakeActiveStress | 16384.0 | ⚠️ 刹车很耗能！ |

**动力电池使用提示**:
- 充电时消耗64应力
- 放电时输出32应力，转速64RPM
- 容量512 SU-小时
