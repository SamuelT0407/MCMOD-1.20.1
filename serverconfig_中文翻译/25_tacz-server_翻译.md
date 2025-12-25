# 🔫 tacz-server.toml
## TACZ枪械模组 - 服务器配置翻译

---

## 🎮 交互键设置

```toml
[interact_key]  # 交互键设置

    # 按交互键时可以交互的方块白名单
    # 添加方块后，即使手持武器也能与这些方块交互
    InteractKeyWhitelistBlocks = []

    # 按交互键时可以交互的实体白名单
    InteractKeyWhitelistEntities = []

    # 交互键黑名单方块（不能交互的方块）
    InteractKeyBlacklistBlocks = []

    # 交互键黑名单实体
    InteractKeyBlacklistEntities = []
```

---

## ⚔️ 伤害倍率设置

```toml
[base_multiplier]  # 基础倍率设置

    # ⭐ 所有基础伤害的倍率
    # 1.0 = 正常伤害
    # 2.0 = 双倍伤害
    # 0.5 = 半伤害
    DamageBaseMultiplier = 1.0

    # ⭐ 无视护甲伤害的倍率
    # 某些弹药可以穿透护甲
    ArmorIgnoreBaseMultiplier = 1.0

    # ⭐ 爆头伤害的倍率
    # 1.0 = 正常爆头伤害
    # 2.0 = 爆头双倍
    HeadShotBaseMultiplier = 1.0

    # ⭐ 每公斤重量减少的移动速度
    # 0.015 = 每公斤减速1.5%
    # -1 = 禁用重量系统
    WeightSpeedMultiplier = 0.015
```

---

## 🎯 杂项设置

```toml
[misc]  # 杂项设置

    # 自定义实体爆头碰撞箱
    # 格式: 模组:实体名 [x1, y1, z1, x2, y2, z2]
    # 示例: "touhou_little_maid:maid [-0.5, 1.0, -0.5, 0.5, 1.5, 0.5]"
    HeadShotAABB = []

    # 弹药盒可容纳的最大弹药堆叠数
    AmmoBoxStackSize = 3

    # 已弃用：客户端枪械包下载URL
    # 现在使用原版服务器资源包
    ClientGunPackDownloadUrls = []

    # ⭐ 是否允许玩家使用匍匐功能
    EnableCrawl = true

    # 是否启用默认枪械台配方限制
    EnableDefaultGunSmithTableFilter = true

    # [调试选项] 射击时是否进行服务器端网络检查
    ServerShootNetworkCheck = true

    # [调试选项] 是否进行服务器端射击冷却检查
    # ⚠️ 警告：关闭此选项会禁用所有射击冷却检查
    # 可能导致作弊！只有在完全无法射击时才考虑关闭
    ServerShootCooldownCheck = true
```

---

## 📝 配置说明

### 伤害倍率

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| DamageBaseMultiplier | 1.0 | 基础伤害正常 |
| ArmorIgnoreBaseMultiplier | 1.0 | 穿甲伤害正常 |
| HeadShotBaseMultiplier | 1.0 | 爆头伤害正常 |

### 负重系统

当前设置：每公斤武器重量减少1.5%移动速度

- 轻型手枪（约1kg）：减速1.5%
- 步枪（约3-4kg）：减速4.5-6%
- 重型武器（约10kg）：减速15%

**服务器平衡建议**:
- 想让PvP更激烈：增加 `DamageBaseMultiplier`
- 想降低枪械威力：降低 `DamageBaseMultiplier`
- 想禁用负重惩罚：设置 `WeightSpeedMultiplier = -1`
- 想加强爆头奖励：增加 `HeadShotBaseMultiplier`
