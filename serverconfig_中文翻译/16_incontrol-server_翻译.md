# 👹 incontrol-server.toml
## InControl（生物控制）- 服务器配置翻译

---

```toml
[general]  # 通用设置

    # 计数缓存保持有效的tick数
    # 用于避免每tick都重新计算生物数量
    # 0 = 每tick都重新计算（性能消耗高）
    # 10 = 每10tick更新一次（推荐）
    # 范围: 0 ~ 10000
    cacheRetentionTicks = 10

    # 用于玩家特定条件的半径（方块）
    # 查找最近玩家时使用的搜索范围
    # 范围: 1 ~ 10000
    perPlayerRadius = 100
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| cacheRetentionTicks | 10 | 缓存10tick更新一次 |
| perPlayerRadius | 100 | 100格内搜索玩家 |

**注意**: InControl的主要配置不在这里！

InControl的生物生成规则需要在以下位置配置：
- `config/incontrol/spawn.json` - 生物生成规则
- `config/incontrol/loot.json` - 战利品规则
- `config/incontrol/experience.json` - 经验规则

这个服务器配置文件只包含基础性能设置。
