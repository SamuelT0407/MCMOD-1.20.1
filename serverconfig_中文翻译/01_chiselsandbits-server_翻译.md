# 📦 chiselsandbits-server.toml
## 凿子与碎片 - 服务器配置翻译

---

```toml
[balancing]  # 平衡设置

    # 是否将随机刻动方块加入黑名单（禁止被凿）
    # 随机刻动方块如：草方块、树叶等会自然变化的方块
    blacklist-random-ticking-blocks = false

    # 是否启用兼容模式
    # 如果与其他模组冲突可以尝试开启
    enable-compatibility-mode = false

    # 碎片袋的堆叠上限
    # 默认512，表示每种碎片最多可以在袋子里存512个
    # 范围: ≥ 64
    bit-bag-stack-size = 512

    # 更改追踪器大小（撤销历史记录数量）
    # 数值越大可以撤销的操作越多，但占用内存也更多
    # 范围: 10 ~ 40
    change-tracker-size = 20

    # 是否删除多余的碎片
    # 设为true时，超出容量的碎片会被自动删除
    delete-excess-bits = true

    # 光照因子倍率
    # 影响凿刻方块的光照计算
    # 范围: 0.0 ~ 4096.0
    light-factor-multiplier = 1.0

[style]  # 样式设置

    # 碎片大小
    # ONE_SIXTEENTH = 1/16（最精细，每个方块可分成16x16x16=4096个碎片）
    # ONE_EIGHT = 1/8
    # ONE_QUARTER = 1/4
    # ONE_HALF = 1/2
    # ONE = 完整（不分割）
    bit-size = "ONE_SIXTEENTH"
```

---

## 📝 配置说明

| 配置项 | 推荐值 | 说明 |
|-------|-------|------|
| bit-bag-stack-size | 512 | 碎片袋容量，服务器可以调高方便玩家 |
| change-tracker-size | 20 | 撤销步数，太高会影响性能 |
| bit-size | ONE_SIXTEENTH | 最精细的凿刻模式 |
