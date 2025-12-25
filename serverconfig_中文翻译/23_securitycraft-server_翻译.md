# 🔒 securitycraft-server.toml
## SecurityCraft安全工艺 - 服务器配置翻译

---

## 🔑 基础设置

```toml
# 密码破译器成功破解的概率
# 0.33 = 33%的成功率
# 设为负数可禁用密码破译器
# 范围: -1.0 ~ 1.0
codebreaker_chance = 0.33

# 是否允许使用管理员工具
# 管理员工具可以绕过所有保护
allowAdminTool = true

# 地雷爆炸后是否生成火焰
shouldSpawnFire = true

# 地雷爆炸威力是否比正常小
smallerMineExplosion = false

# 创造模式下破坏地雷是否会爆炸
mineExplodesWhenInCreative = true

# 地雷爆炸是否破坏方块
# false = 只伤害实体，不破坏地形
mineExplosionsBreakBlocks = true
```

---

## 📏 范围设置

```toml
# 激光方块可以连接的最大距离（方块）
laserBlockRange = 5

# 物品扫描器可以连接的最大距离（方块）
inventoryScannerRange = 3

# 警报器范围选项的最大值
# 范围: ≥ 1
maxAlarmRange = 100
```

---

## 🏠 所有权设置

```toml
# 允许使用通用所有权更改器领取无主方块
allowBlockClaim = false

# 强化方块的纹理是否比原版略深
# 可以视觉上区分强化方块和普通方块
reinforced_block_tint = true

# 是否强制所有客户端使用服务器的纹理设置
force_reinforced_block_tint = false

# 视网膜扫描器是否显示主人的脸
retinalScannerFace = true

# ⭐ 是否启用团队所有权
# true = 同一队伍的玩家共享方块所有权
# 允许队友破坏强化方块、更改设置等
enable_team_ownership = false

# 团队检查顺序（先检查FTB Teams，再检查原版计分板）
team_ownership_precedence = ["FTB_TEAMS", "VANILLA"]

# 是否禁用欢迎消息
disable_thanks_message = false

# 戴着其他玩家头颅是否能骗过扫描器
trick_scanners_with_player_heads = false

# 防止玩家使用船穿过强化地板
prevent_reinforced_floor_glitching = false
```

---

## ⚔️ 伤害设置

```toml
# 电击枪伤害（默认半颗心）
taser_damage = 1.0

# 强化电击枪伤害（默认一颗心）
powered_taser_damage = 2.0

# 电击枪附加效果
# 格式: "效果ID|持续时间(tick)|等级"
taser_effects = [
    "minecraft:weakness|200|2",     # 虚弱2，持续10秒
    "minecraft:nausea|200|2",       # 反胃2，持续10秒
    "minecraft:slowness|200|2"      # 缓慢2，持续10秒
]

# 强化电击枪附加效果（更强）
powered_taser_effects = [
    "minecraft:weakness|400|5",     # 虚弱5，持续20秒
    "minecraft:nausea|400|5",       # 反胃5，持续20秒
    "minecraft:slowness|400|5"      # 缓慢5，持续20秒
]

# ⭐ 激光伤害（安装伤害模块后）
# 10点 = 5颗心
laser_damage = 10.0

# 密码错误时的伤害（需要安装伤害模块）
# 4点 = 2颗心
incorrectPasscodeDamage = 4

# 哨兵默认子弹伤害
# 2点 = 1颗心
sentry_bullet_damage = 2

# 在强化方块中窒息的伤害
# 5点 = 2.5颗心
reinforced_suffocation_damage = 5
```

---

## 📷 摄像头设置

```toml
# 是否允许通过摄像头使用夜视效果
allow_camera_night_vision = true

# 是否启用画框查看摄像头功能
frame_feed_viewing_enabled = true

# 画框摄像头的视距（区块）
# 范围: 2 ~ 32
frame_feed_view_distance = 16

# 画框摄像头可以强制加载的区块数限制
# -1 = 无限制
frame_feed_forceloading_limit = -1
```

---

## 🔨 方块破坏设置

```toml
# ⭐ 是否使用原版工具破坏SecurityCraft方块
# true = 用斧头、镐等破坏
# false = 必须用通用方块移除器
vanilla_tool_block_breaking = true

# 是否无论使用什么工具都掉落方块
always_drop = true

# ⭐ 是否允许非主人破坏方块
allow_breaking_non_owned_blocks = false

# 非主人破坏方块的速度惩罚倍率
# 2.0 = 破坏速度减半
non_owned_breaking_slowdown = 1.0
```

---

## 📝 配置说明

| 配置项 | 当前值 | 影响 |
|-------|-------|------|
| codebreaker_chance | 0.33 | 密码破译33%成功率 |
| laser_damage | 10.0 | 激光造成5颗心伤害 |
| enable_team_ownership | false | ⚠️ 队友不能共享方块 |
| vanilla_tool_block_breaking | true | ✅ 可用正常工具破坏 |
| allow_breaking_non_owned_blocks | false | ⚠️ 不能破坏别人的方块 |

**服务器建议**:
- 如果想让团队共享方块，设置 `enable_team_ownership = true`
- 如果想增加安全性，设置 `codebreaker_chance = 0.1` 或更低
