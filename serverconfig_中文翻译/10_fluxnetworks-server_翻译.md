# 🔌 fluxnetworks-server.toml
## Flux Networks（通量网络）- 服务器配置翻译

---

```toml
[networks]  # 网络设置

    # ⭐ 每个玩家可以创建的最大网络数量
    # 超级管理员可以绑过此限制
    # -1 = 无限制
    # 0 = 只有超级管理员可以创建网络
    # 范围: ≥ -1
    maximumPerPlayer = 5

    # 是否允许玩家成为网络超级管理员
    # 超级管理员可以访问任何通量设备和删除任何网络
    enableSuperAdmin = true

    # 成为超级管理员所需的权限等级（参见ops.json）
    # 0 = 任何人都可以激活超级管理员
    # 1 = 需要一定权限
    # 玩家权限等级3或4可以用命令将其他人设为超级管理员
    # 单人游戏可以跳过此限制
    # 范围: 0 ~ 3
    superAdminRequiredPermission = 1

[general]  # 通用设置

    # 启用用红石、基�ite和黑曜石压缩获得通量粉的配方
    # 这是获取通量粉的主要方式之一
    enableFluxRecipe = true

    # 允许通量设备启用区块加载
    # 通量设备可以保持区块加载，即使玩家不在附近
    enableChunkLoading = true

[blacklist]  # 黑名单

    # 通量设备不应连接的方块黑名单
    # 格式: "modid:registry_name"
    # 例如: "minecraft:chest" 表示箱子
    blockBlacklistStrings = ["actuallyadditions:block_phantom_energyface"]

    # 无线充电不应充电的物品黑名单
    # 格式: "modid:registry_name"
    itemBlackListStrings = [""]

[energy]  # 能量设置

    # ⭐ 通量插头、点和控制器的默认传输限制（FE/tick）
    # 这是每tick可以传输的最大能量
    defaultLimit = 800000

    # 基础通量存储器的最大能量存储（FE）
    # 200万FE = 2,000,000 FE
    basicCapacity = 2000000

    # 基础通量存储器的默认传输限制（FE/tick）
    basicTransfer = 20000

    # 大力士通量存储器的最大能量存储（FE）
    # 1600万FE = 16,000,000 FE
    herculeanCapacity = 16000000

    # 大力士通量存储器的默认传输限制（FE/tick）
    herculeanTransfer = 120000

    # ⭐ 巨大通量存储器的最大能量存储（FE）
    # 1.28亿FE = 128,000,000 FE
    gargantuanCapacity = 128000000

    # 巨大通量存储器的默认传输限制（FE/tick）
    gargantuanTransfer = 720000
```

---

## 📝 配置说明

### 存储器对比表

| 存储器类型 | 容量 | 传输速率 |
|-----------|------|---------|
| 基础 | 2,000,000 FE | 20,000 FE/t |
| 大力士 | 16,000,000 FE | 120,000 FE/t |
| 巨大 | 128,000,000 FE | 720,000 FE/t |

### 关键配置

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| maximumPerPlayer | 5 | 每人最多5个网络 |
| defaultLimit | 800,000 | 插头/点每tick 80万FE |
| enableChunkLoading | true | ✅ 支持区块加载 |

**使用提示**:
- 通量网络可以无线传输能量
- 每个玩家最多创建5个网络
- 巨大存储器容量高达1.28亿FE！
