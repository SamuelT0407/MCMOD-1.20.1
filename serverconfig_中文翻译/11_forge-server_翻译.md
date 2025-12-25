# 🔧 forge-server.toml
## Forge（游戏加载器）- 服务器配置翻译

---

```toml
[server]  # 服务器设置

    # ⚠️ 是否移除报错的方块实体
    # 设为true将移除任何在更新方法中抛出错误的方块实体
    # 而不是关闭服务器并报告崩溃日志
    # 警告：这可能会导致数据丢失！谨慎使用，建议保持false
    removeErroringBlockEntities = false

    # ⚠️ 是否移除报错的实体
    # 设为true将移除任何在tick方法中抛出错误的实体（不包括方块实体）
    # 警告：这可能会删除重要的生物或物品实体！
    removeErroringEntities = false

    # 使用完整碰撞箱检测梯子
    # 设为true将检查实体的整个碰撞箱是否在梯子上
    # 而不仅仅是实体所在的方块
    # 会导致明显的机制差异，默认是原版行为
    fullBoundingBoxLadders = false

    # 僵尸基础召唤生成概率
    # 僵尸受到攻击时有概率召唤其他僵尸
    # 0.1 = 10%的概率
    # 范围: 0.0 ~ 1.0
    zombieBaseSummonChance = 0.1

    # 僵尸是小僵尸的概率
    # 0.05 = 5%的僵尸会是小僵尸
    # 范围: 0.0 ~ 1.0
    zombieBabyChance = 0.05

    # 服务器使用的权限处理器
    # 默认为Forge的默认处理器
    permissionHandler = "forge:default_handler"

    # 是否向局域网客户端广告专用服务器
    # 设为true后，局域网内的玩家可以在多人游戏界面自动看到服务器
    advertiseDedicatedServerToLan = true

    # 允许生物使用持续时间为0的物品
    # 这修复了通过按住使用按钮可以重复使用末影之眼的bug
    # 默认禁用，因为可能会改变与其他模组物品的交互
    useItemWithDurationZero = false
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| removeErroringBlockEntities | false | ❌ 不自动移除错误方块 |
| removeErroringEntities | false | ❌ 不自动移除错误实体 |
| zombieBaseSummonChance | 0.1 | 僵尸10%概率召唤援军 |
| zombieBabyChance | 0.05 | 5%僵尸是小僵尸 |
| advertiseDedicatedServerToLan | true | ✅ 局域网可见 |

**⚠️ 重要警告**:
- `removeErroringBlockEntities` 和 `removeErroringEntities` 这两个选项非常危险
- 除非服务器频繁因为某个错误实体崩溃，否则不要开启
- 开启后可能会丢失玩家的物品或机器！
