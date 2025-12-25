# 📦 inventorysorter-server.toml
## 物品整理器 - 服务器配置翻译

---

```toml
[blacklists]  # 黑名单设置

    # 容器黑名单
    # 在这个列表中的容器不会被整理
    # 格式: ["modid:container_name"]
    # 例如: ["minecraft:crafting_table"]
    containerBlacklist = []

    # 槽位类型黑名单
    # 在这个列表中的槽位类型不会被整理
    # 例如: 装备槽、饰品槽等
    slotBlacklist = []
```

---

## 📝 配置说明

这个配置文件非常简单，主要用于设置哪些容器或槽位不应该被自动整理。

**使用场景**:
- 如果某个模组的容器在整理时出bug，可以加入黑名单
- 如果不想让某些特殊槽位被整理，可以加入槽位黑名单
