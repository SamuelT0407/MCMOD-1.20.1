# 🗺️ ftbchunks-world.snbt
## FTB Chunks（区块领取）- 世界配置翻译 ⭐重要

---

## 🏠 基础设置

```snbt
{
    # 联盟模式
    # "default" = 默认，玩家可以自由更改联盟设置
    # "forced_all" = 强制所有人互为联盟
    # "forced_none" = 强制所有人都不是联盟
    ally_mode: "default"

    # 禁止领取区块的维度ID黑名单
    # 示例: 添加 "minecraft:the_end" 禁止在末地领取区块
    # 添加 "modname:*" 禁止某模组的所有维度
    claim_dimension_blacklist: []

    # 允许领取区块的维度ID白名单
    # 如果非空，只能在这些维度领取区块
    claim_dimension_whitelist: []

    # ⭐ 禁用所有土地保护
    # 设为true后，领取的区块不会受保护
    # 适用于私人服务器，所有人都可信任
    disable_protection: false
```

---

## 🤖 假玩家和区块加载

```snbt
    # 假玩家（如采矿机、自动点击器）的全局覆盖设置
    # "check" = 检查每个团队的设置
    # "deny" = 全部禁止假玩家
    # "allow" = 全部允许假玩家
    fake_players: "check"

    # 控制强制加载区块的工作方式
    # "never" = 只有当拥有团队至少有一名在线玩家时才允许强制加载
    # "always" = 始终允许强制加载，即使没有玩家在线
    # "default" = 如果团队中有玩家拥有权限，则允许强制加载
    force_load_mode: "default"
```

---

## 📊 区块限制

```snbt
    # ⭐ 最大可领取区块数
    # 可以用FTB Ranks的'ftbchunks.max_claimed'权限覆盖
    max_claimed_chunks: 500

    # ⭐ 最大强制加载区块数
    # 强制加载的区块即使玩家不在附近也会保持活跃
    # 可以用FTB Ranks的'ftbchunks.max_force_loaded'权限覆盖
    max_force_loaded_chunks: 25

    # 团队可以领取的最大区块数硬限制
    # 无论有多少成员都不能超过这个数
    # 0 = 无硬限制
    hard_team_claim_limit: 0

    # 团队可以强制加载的最大区块数硬限制
    hard_team_force_limit: 0
```

---

## ⏰ 闲置管理

```snbt
    # 如果团队中没有玩家登录的最大时间（现实天数）
    # 超过后团队将自动失去领地
    # 防止不再玩的团队无限期占用区块
    # 0 = 不自动失去领地
    max_idle_days_before_unclaim: 0.0

    # 如果团队中没有玩家登录的最大时间（现实天数）
    # 超过后团队的强制加载区块将被取消
    # 0 = 不自动取消强制加载
    max_idle_days_before_unforce: 0.0
```

---

## ⚔️ PvP和保护设置

```snbt
    # 是否需要领取区块才能在荒野建造
    # true = 必须先领取区块才能放置/破坏方块
    # false = 荒野可以自由建造
    no_wilderness: false

    # 活塞保护
    # 防止活塞跨不同团队的领地推拉方块
    piston_protection: true

    # 当爆炸来源无法确定时，是否应用爆炸保护
    # 恶魂火球是常见情况
    protect_unknown_explosions: true

    # PvP模式
    # "always" = 始终允许PvP，即使在领地内
    # "never" = 在所有已领取区块中禁止PvP
    # "per_team" = 允许团队决定是否允许PvP
    pvp_mode: "always"
```

---

## 👥 团队属性默认值

```snbt
    team_prop_defaults: {
        # 已领取区块的默认爆炸保护
        # false = 爆炸会破坏领地内的方块
        def_allow_explosions: false

        # 方块编辑权限（破坏和放置）
        # "allies" = 只有联盟可以
        # "private" = 只有团队成员可以
        # "public" = 任何人都可以
        def_block_edit: "allies"

        # 方块交互权限（右键点击方块）
        def_block_interact: "allies"

        # 领地可见性（在地图上是否可见）
        def_claim_visibility: "public"

        # 攻击非生物实体权限（盔甲架、物品展示框等）
        def_entity_attack: "allies"

        # 实体交互权限
        def_entity_interact: "allies"

        # 默认允许假玩家
        def_fake_players: false

        # 默认生物破坏保护
        def_mob_griefing: false

        # 地图上远程玩家可见性
        def_player_visibility: "allies"

        # 默认PvP设置
        def_pvp: true
    }
```

---

## 📝 配置说明

### 区块限制

| 配置项 | 当前值 | 说明 |
|-------|-------|------|
| max_claimed_chunks | 500 | 每人最多领取500个区块 |
| max_force_loaded_chunks | 25 | 每人最多强制加载25个区块 |

### 团队计算模式

| 模式 | 说明 |
|-----|------|
| largest | 使用团队中限制最高的成员 |
| sum | 将所有成员的限制相加 |
| owner | 只使用队长的限制 |
| average | 取所有成员的平均值 |

**服务器管理提示**:
- 如果服务器已经运行很久，设置 `max_idle_days_before_unclaim` 可以清理不活跃玩家的领地
- 设置 `pvp_mode: "never"` 可以创建和平服务器
