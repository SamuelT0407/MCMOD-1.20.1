---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: ME 存储总线
  icon: storage_bus
  position: 220
categories:
- devices
item_ids:
- ae2:storage_bus
---

# 存储总线 (The Storage Bus)

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/blocks/storage_bus.snbt" />
</GameScene>

曾经想 *保留* 你的巨型箱子阵列而不是用明智的东西替换它吗？我们推出存储总线！

存储总线将它接触的库存变成 [网络存储](../ae2-mechanics/import-export-storage.md)。
它通过允许网络看到该库存的内容，并推送到该库存和从中拉取来实现这一点，
以满足 [设备](../ae2-mechanics/devices.md) 推送到网络存储和从网络存储拉取的需求。

由于 AE2 通过 [设备](../ae2-mechanics/devices.md) 功能交互产生涌现机制的理念，你不
一定要使用存储总线进行 *存储*。通过使用 [子网络](../ae2-mechanics/subnetworks.md)
使存储总线（或少数几个存储总线）成为网络上的 *唯一* 存储，你可以将其用作物品传输的源或目的地。
（参见 ["管道子网络"](../example-setups/pipe-subnet.md)）

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

## 过滤 (Filtering)

默认情况下，总线将存储所有内容。插入其过滤器插槽的物品将充当白名单，仅
允许存储那些特定物品。

即使你实际上没有任何该物品，也可以从 JEI/REI 将物品和流体拖入插槽中。

用流体容器（如桶或流体储罐）右键单击以将该流体设置为过滤器，而不是桶或储罐物品。

## 优先级 (Priority)

可以通过单击 GUI 右上角的扳手来设置优先级。
进入网络的物品将从最高优先级的存储开始作为
它们的第一个目的地。如果有两个存储具有相同的优先级，
如果其中一个已经包含该物品，它们将优先于任何其他存储
选择该存储。任何过滤的存储在与其他存储处于同一优先级组时将被视为已经包含该物品。
从存储中移除的物品将从具有最低优先级的存储中移除。这个优先级系统意味着随着物品插入网络存储和从网络存储移除，
较高优先级的存储将被填充，较低优先级的存储将被清空。

## 设置 (Settings)

*   总线可以分区（过滤）为当前相邻库存中的内容
*   可以禁止或允许网络查看相邻库存中总线无法提取的物品
    （例如，存储总线无法从 <ItemLink id="inscriber" /> 的中间输入插槽中提取物品）
*   总线可以在插入和提取时都过滤，或者仅在插入时过滤
*   总线可以是双向的、只入或只出的

## 升级 (Upgrades)

存储总线支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="capacity_card" /> 增加过滤器插槽的数量
*   <ItemLink id="fuzzy_card" /> 让总线按损坏等级过滤和/或忽略物品 NBT
*   <ItemLink id="inverter_card" /> 将过滤器从白名单切换为黑名单
*   <ItemLink id="void_card" /> 如果连接的库存已满，则销毁插入的物品，用于防止农场溢出。小心分区！

## 配方 (Recipe)

<RecipeFor id="storage_bus" />
