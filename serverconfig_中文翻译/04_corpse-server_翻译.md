# ☠️ corpse-server.toml
## 尸体模组 - 服务器配置翻译

---

```toml
# 死亡记录保存时间（以现实天数计算）
# -1 = 永久保存死亡记录
# 0 = 完全不保存死亡记录
# 其他正整数 = 保存对应天数
# 范围: ≥ -1
death_storage_duration = -1

[corpse]  # 尸体设置

    # 尸体变成骷髅所需的时间（游戏刻）
    # 20刻 = 1秒，72000刻 = 1小时（游戏内3天）
    # 当尸体变成骷髅后，外观会改变
    # 范围: > 0
    skeleton_time = 72000

    # 尸体是否趴着（面朝下）
    # true = 尸体面朝下躺着
    # false = 尸体面朝上躺着
    lie_on_face = false

    # 尸体是否显示玩家的装备
    # true = 尸体会穿着玩家死亡时的盔甲
    show_equipment = true

    # 尸体是否会掉入虚空
    # true = 尸体会掉入虚空并消失
    # false = 尸体会停在虚空边缘
    fall_into_void = false

    # 尸体是否会被岩浆损坏
    # true = 尸体在岩浆中会被销毁，物品也会丢失
    # false = 尸体在岩浆中不会损坏
    lava_damage = false

    [corpse.access]  # 访问权限设置

        # 是否只有尸体主人可以打开背包
        # true = 只有死亡的玩家本人能拿回物品
        # false = 任何人都可以拿走尸体上的物品
        only_owner = false

        # 当尸体变成骷髅后，是否所有人都可以访问
        # 此设置仅在 only_owner = true 时生效
        # true = 变成骷髅后所有人可以访问
        # false = 即使变成骷髅也只有主人能访问
        skeleton = false

    [corpse.despawn]  # 消失设置

        # 空尸体消失的时间（游戏刻）
        # 当尸体的物品被全部取走后，经过这个时间尸体消失
        # 600刻 = 30秒
        # 范围: ≥ 20
        time = 600

        # 强制消失时间（游戏刻）
        # 即使尸体上还有物品，超过这个时间也会消失
        # -1 = 永不强制消失
        # 范围: ≥ -1
        force_time = -1
```

---

## 📝 配置说明

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| death_storage_duration | -1 | 永久保存死亡记录 |
| skeleton_time | 72000 | 1小时后变成骷髅 |
| only_owner | false | ⚠️ 任何人都能拿走物品 |
| lava_damage | false | ✅ 岩浆不会烧毁尸体 |
| force_time | -1 | ✅ 有物品的尸体永不消失 |

**服务器建议**:
- 如果想保护玩家物品，设置 `only_owner = true`
- 如果想增加游戏难度，设置 `lava_damage = true`
