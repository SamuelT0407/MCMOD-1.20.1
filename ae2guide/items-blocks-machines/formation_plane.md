---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 成型面板
  icon: formation_plane
  position: 210
categories:
- devices
item_ids:
- ae2:formation_plane
---

# 成型面板 (The Formation Plane)

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/formation_plane.snbt" />
</GameScene>

成型面板放置方块和掉落物品。它的工作原理类似于只入 <ItemLink id="storage_bus" />，
当 [设备](../ae2-mechanics/devices.md) 插入到 [网络存储](../ae2-mechanics/import-export-storage.md) 中，
如<ItemLink id="import_bus" /> 和 <ItemLink id="interface" />，导致物品被“存储”在其中时，进行放置/掉落。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/formation_plane_demonstration.snbt" />
  <IsometricCamera yaw="255" pitch="30" />
</GameScene>

此 [设备](../ae2-mechanics/devices.md) 利用了存储总线在 [管道子网络](../example-setups/pipe-subnet.md) 等事物中使用的机制，
如果你想掉落物品/放置方块而不是运输物品，可以在那些设置中替换存储总线。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

**记得在你的区块声明中启用假玩家**

## 过滤 (Filtering)

默认情况下，面板将放置/掉落任何东西。插入其过滤器插槽的物品将充当白名单，仅
允许放置那些特定物品。

即使你实际上没有任何该物品，也可以从 JEI/REI 将物品和流体拖入插槽中。

用流体容器（如桶或流体储罐）右键单击以将该流体设置为过滤器，而不是桶或储罐物品。

## 优先级 (Priority)

可以通过单击 GUI 右上角的扳手来设置优先级。
进入网络的物品将从最高优先级的存储开始。

## 设置 (Settings)

*   面板可以设置为在世界中放置方块或掉落物品

## 升级 (Upgrades)

成型面板支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="capacity_card" /> 增加过滤器插槽的数量
*   <ItemLink id="fuzzy_card" /> 让面板按损坏等级过滤和/或忽略物品 NBT
*   <ItemLink id="inverter_card" /> 将过滤器从白名单切换为黑名单

## 配方 (Recipe)

<RecipeFor id="formation_plane" />
