---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 破坏面板
  icon: annihilation_plane
  position: 210
categories:
- devices
item_ids:
- ae2:annihilation_plane
---

# 破坏面板 (The Annihilation Plane)

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/blocks/annihilation_plane.snbt" />
</GameScene>

破坏面板可以破坏方块并收集物品。它的工作原理类似于 <ItemLink id="import_bus" />，将物品推入
[网络存储](../ae2-mechanics/import-export-storage.md)。为了收集物品，物品必须与
面板的表面碰撞，它不会收集一个区域内的物品。

破坏面板可以附魔任何镐子附魔，所以是的，如果在你的整合包允许的情况下，你可以给几个面板附上极高等级的时运
并 [自动化矿石处理](../example-setups/ore-fortuner.md)。此外，精准采集的作用和你
期望的一样，效率可以降低破坏方块的能量消耗，而耐久则有机会不消耗任何能量。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

**记得在你的区块声明中启用假玩家**

## 过滤 (Filtering)

只有当破坏面板能够将其产生的掉落物/物品存储在网络中时，它才会破坏方块或收集物品。
这意味着要过滤一个面板，*你必须限制其网络上可以存储的内容*，最可能的方法是将其放置在
[子网络](../ae2-mechanics/subnetworks.md) 上。可以使用 <ItemLink id="storage_bus" /> 或 [元件](../items-blocks-machines/storage_cells.md)
进行 [分区](cell_workbench.md) 来实现这一点。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/annihilation_filtering.snbt" />

  <DiamondAnnotation pos="1 0.5 0.5" color="#00ff00">
        过滤为你想破坏的东西的掉落物。
  </DiamondAnnotation>

  <DiamondAnnotation pos=".5 0.5 2.5" color="#00ff00">
        分区为你想破坏的东西的掉落物。
  </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

再次强调，它是 *按掉落物* 过滤的，所以，例如，如果你想过滤破坏 <ItemLink id="minecraft:amethyst_cluster" />，
你需要一个附魔了精准采集的面板，否则每一个之前的生长阶段都不会掉落任何东西，因此无论如何面板都会破坏它们，
因为网络总是可以存储“无”。

## 配方 (Recipe)

<RecipeFor id="annihilation_plane" />
