# 🔌 pipez-server.toml
## Pipez管道 - 服务器配置翻译

---

## 📦 物品管道

```toml
[item_pipe.speed]  # 物品传输速度
    # 值越小越快，1 = 每tick传输一次

    no_upgrade = 20    # 无升级：每20tick传输一次（1秒一次）
    basic = 15         # 基础升级：每15tick
    improved = 10      # 改进升级：每10tick（0.5秒一次）
    advanced = 5       # 高级升级：每5tick
    ultimate = 1       # 终极升级：每tick（最快）

[item_pipe.amount]  # 每次传输的物品数量
    no_upgrade = 4     # 无升级：每次4个
    basic = 8          # 基础：每次8个
    improved = 16      # 改进：每次16个
    advanced = 32      # 高级：每次32个
    ultimate = 64      # 终极：每次64个（一组）
```

---

## 💧 流体管道

```toml
[fluid_pipe.amount]  # 每tick传输的流体量（mB）
    no_upgrade = 50     # 无升级：50mB/tick
    basic = 100         # 基础：100mB/tick
    improved = 500      # 改进：500mB/tick（每秒10桶）
    advanced = 2000     # 高级：2000mB/tick（每秒40桶）
    ultimate = 10000    # 终极：10000mB/tick（每秒200桶！）
```

---

## ⚡ 能量管道

```toml
[energy_pipe.amount]  # 每tick传输的能量（FE）
    no_upgrade = 256      # 无升级：256 FE/tick
    basic = 1024          # 基础：1024 FE/tick
    improved = 8192       # 改进：8192 FE/tick
    advanced = 32768      # 高级：32768 FE/tick
    ultimate = 131072     # 终极：131072 FE/tick（13万！）
```

---

## 💨 气体管道（需要Mekanism）

```toml
[gas_pipe.amount]  # 每tick传输的气体量（mB）
    # 只有安装了Mekanism才会生效
    no_upgrade = 200
    basic = 400
    improved = 2000
    advanced = 8000
    ultimate = 40000
```

---

## 📊 升级对比表

### 物品管道

| 升级等级 | 传输间隔 | 每次数量 | 理论速率 |
|---------|---------|---------|---------|
| 无升级 | 20 tick | 4个 | 4个/秒 |
| 基础 | 15 tick | 8个 | 10.7个/秒 |
| 改进 | 10 tick | 16个 | 32个/秒 |
| 高级 | 5 tick | 32个 | 128个/秒 |
| 终极 | 1 tick | 64个 | 1280个/秒 |

### 流体管道

| 升级等级 | 每tick | 每秒 |
|---------|-------|------|
| 无升级 | 50 mB | 1000 mB（1桶）|
| 基础 | 100 mB | 2000 mB（2桶）|
| 改进 | 500 mB | 10000 mB（10桶）|
| 高级 | 2000 mB | 40000 mB（40桶）|
| 终极 | 10000 mB | 200000 mB（200桶）|

### 能量管道

| 升级等级 | 每tick | 每秒 |
|---------|-------|------|
| 无升级 | 256 FE | 5,120 FE |
| 基础 | 1,024 FE | 20,480 FE |
| 改进 | 8,192 FE | 163,840 FE |
| 高级 | 32,768 FE | 655,360 FE |
| 终极 | 131,072 FE | 2,621,440 FE |

**提示**: 终极管道非常强大，可以满足几乎所有需求！
