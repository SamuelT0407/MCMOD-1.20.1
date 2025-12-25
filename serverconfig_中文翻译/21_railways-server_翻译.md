# 🚂 railways-server.toml
## Create Railways（铁路扩展）- 服务器配置翻译

---

```toml
[misc]  # 杂项设置

    # 连接器是否需要在同一条轨道上才能工作
    # true = 严格模式，不能跨过道岔连接
    # false = 宽松模式
    strictCoupler = false

    # 允许在接近时远程控制黄铜道岔
    # 坐在火车上接近道岔时可以远程切换
    flipDistantSwitches = true

    # 道岔支架放置时与轨道的最大距离
    # 范围: 16 ~ 128
    switchPlacementRange = 64

    # ⭐ 苦力怕和恶魂火球是否能破坏轨道
    # false = 轨道不会被爆炸破坏（推荐）
    creeperTrackDamage = false

    # 使用手摇车时的饥饿消耗倍率
    # 范围: 0.0 ~ 1.0
    handcarHungerMultiplier = 0.01

[semaphores]  # 信号灯设置

    # 简化的信号灯放置（不允许倒置放置）
    simplifiedPlacement = true

    # 信号灯倒置时是否反转黄色指示灯顺序
    flipYellowOrder = false

[conductors]  # 列车员设置

    # 列车员哨子是否必须由火车主人使用
    # true = 只有火车主人能用哨子控制
    mustOwnBoundTrain = false

    # 列车员通风管道的最大长度
    maxConductorVentLength = 64

    # 列车员哨子更新绑定火车的频率（tick）
    # 范围: 1 ~ 600
    whistleRebindRate = 10

[realism]  # 真实性设置

    # ⭐ 火车是否需要燃料才能运行
    # true = 需要燃料（来自燃料槽或箱子中的固体燃料）
    # false = 不需要燃料，自动运行
    realisticTrains = false

    # 燃料槽是否只接受正确的液体燃料
    # true = 只能装柴油、汽油等燃料
    # false = 可以装任何液体（包括水）
    realisticFuelTanks = true
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| creeperTrackDamage | false | ✅ 轨道防爆 |
| realisticTrains | false | ❌ 不需要燃料 |
| flipDistantSwitches | true | ✅ 远程控制道岔 |

**真实模式说明**:
如果开启 `realisticTrains = true`：
- 火车需要消耗燃料才能移动
- 可以使用燃料槽装液体燃料
- 或者在火车上的箱子/桶里放固体燃料（煤炭等）

**建议**:
- 休闲服务器保持 `realisticTrains = false`
- 硬核/生存服务器可以开启真实燃料模式
