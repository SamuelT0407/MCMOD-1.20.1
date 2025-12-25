# 📖 jei-server.toml
## JEI物品管理器 - 服务器配置翻译

---

```toml
["cheat mode"]  # 作弊模式设置

    # 为OP玩家启用作弊模式
    # 作弊模式允许直接点击物品获得
    # true = OP可以使用作弊模式
    enableCheatModeForOp = true

    # 为创造模式玩家启用作弊模式
    # true = 创造模式玩家可以使用作弊模式
    enableCheatModeForCreative = true

    # 为可以使用/give命令的玩家启用作弊模式
    # 这是基于权限的设置
    # false = 不根据/give权限来判断
    enableCheatModeForGive = false
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| enableCheatModeForOp | true | ✅ OP可作弊 |
| enableCheatModeForCreative | true | ✅ 创造可作弊 |
| enableCheatModeForGive | false | ❌ /give权限不给作弊 |

**JEI作弊模式功能**:
- 左键物品 = 获得一组
- 右键物品 = 获得一个
- Shift+点击 = 获得最大堆叠

**注意**: 这只影响服务器端的作弊权限检查。客户端玩家需要按R键切换到作弊模式。
