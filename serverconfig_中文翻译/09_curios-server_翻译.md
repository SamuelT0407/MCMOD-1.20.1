# 💍 curios-server.toml
## Curios 饰品系统 - 服务器配置翻译

---

```toml
# 设置死亡时Curios饰品的保留行为
# ON = 饰品死亡时保留，不会掉落
# DEFAULT = 饰品遵循keepInventory游戏规则
# OFF = 饰品死亡时掉落
keepCurios = "DEFAULT"

[menu]  # 菜单设置

    # 启用旧版Curios菜单
    # 为了更好的向后兼容性，可以使用旧版界面
    enableLegacyMenu = false

    [menu.experimental]  # 实验性设置

        # Curios菜单的最小列数
        # 范围: 1 ~ 8
        minimumColumns = 1

        # Curios菜单每页的最大槽位数
        # 如果饰品槽很多，会分页显示
        # 范围: 1 ~ 48
        maxSlotsPerPage = 48
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| keepCurios | DEFAULT | 遵循游戏规则 |
| maxSlotsPerPage | 48 | 每页最多48个饰品槽 |

**保留行为说明**:
- `ON` - 死亡时饰品不掉落（适合休闲服务器）
- `DEFAULT` - 跟随keepInventory规则
- `OFF` - 死亡时饰品必定掉落（硬核模式）
