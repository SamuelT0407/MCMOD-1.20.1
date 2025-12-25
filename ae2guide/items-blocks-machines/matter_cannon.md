---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 物质炮
  icon: matter_cannon
  position: 410
categories:
- tools
item_ids:
- ae2:matter_cannon
---

# 物质炮 (The Matter Cannon)

<ItemImage id="matter_cannon" scale="4" />

物质炮是一种便携式电磁炮，可以发射小物品作为弹丸，如 <ItemLink id="matter_ball" /> 和金属粒。伤害
取决于发射的物品，像金粒这样的“较重”物品（10 伤害）比像物质球这样的轻物品（2 伤害）造成的伤害更大。
它每发消耗 1600 AE 的基础能量。

当配置选项“matterCannonBlockDamage”为 true 时，大炮将根据方块的硬度和
弹药的伤害破坏方块。

它的能量可以在 <ItemLink id="charger" /> 中充电。

物质炮的作用就像 [存储元件](storage_cells.md)，它们的弹药库可以通过将
大炮插入 <ItemLink id="chest" /> 中的存储元件插槽中最容易地填充。

## 升级 (Upgrades)

物质炮支持以下 [升级](upgrade_cards.md)，通过 <ItemLink id="cell_workbench" /> 插入：

*   <ItemLink id="fuzzy_card" /> 让元件通过损坏等级分区和/或忽略物品 NBT
*   <ItemLink id="inverter_card" /> 将过滤器从白名单切换为黑名单
*   <ItemLink id="speed_card" /> 增加每次射击使用的能量，使其以更大的力量发射。
*   <ItemLink id="void_card" /> 如果元件已满，则销毁插入的物品。小心分区！
*   <ItemLink id="energy_card" /> 以增加电池容量

## 配方 (Recipe)

<RecipeFor id="matter_cannon" />
