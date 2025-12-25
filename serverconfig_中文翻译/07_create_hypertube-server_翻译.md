# 🚇 create_hypertube-server.toml
## Create Hypertube（超级管道）- 服务器配置翻译

---

```toml
["Travel Settings"]  # 传输设置

    # 允许鱼通过管道传输（实验性功能）
    # true = 鱼可以被管道传送
    # 可用于制作自动钓鱼系统
    allowFishTravel = true

    # 允许村民通过管道传输
    # true = 村民可以被管道传送
    # 可用于制作村民运输系统
    allowVillagerTravel = true

    # ⭐ 管道传输速度倍率
    # 1.0 = 正常速度
    # 2.0 = 两倍速度
    # 0.5 = 半速
    # ⚠️ 高度实验性功能，太快可能出bug
    # 范围: 0.5 ~ 99.0
    speedMultiplier = 1.0

["Stress Settings"]  # 应力设置

    # 超级管道入口的应力消耗
    # 每个入口方块都会消耗这么多应力
    # 范围: 0.0 ~ 100.0
    entranceStressImpact = 4.0

    # 超级管道加速器的应力消耗
    # 加速器可以提升管道内的传输速度
    # 范围: 0.0 ~ 100.0
    acceleratorStressImpact = 4.0
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| speedMultiplier | 1.0 | 传输速度倍率 |
| entranceStressImpact | 4.0 | 入口应力消耗 |
| acceleratorStressImpact | 4.0 | 加速器应力消耗 |

**使用提示**:
- 超级管道可以快速传送玩家和生物
- 可以用于制作地铁系统或快速传送网络
- 如果想加快传输速度，可以增加 speedMultiplier
