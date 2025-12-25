---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: ME 驱动器
  icon: drive
  position: 210
categories:
- devices
item_ids:
- ae2:drive
---

# ME 驱动器 (The ME Drive)

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/drive.snbt" />
</GameScene>

驱动器是你插入 [存储元件](storage_cells.md) 以便将其用于
[网络存储](../ae2-mechanics/import-export-storage.md) 的 [设备](../ae2-mechanics/devices.md)。它有 10 个插槽，每个插槽接受一个元件。

如果由于某种原因你想这样做，你可以使用任何物品物流（如漏斗或 AE2 总线）从其库存中推入和拉出元件。

它可以用 <ItemLink id="certus_quartz_wrench" /> 旋转。

## 元件状态 LED (Cell Status LEDs)

驱动器中的元件上有一个 LED，显示了它们的状态：

| 颜色   | 状态                                                                           |
| :----- | :------------------------------------------------------------------------------- |
| 绿色   | 空                                                                            |
| 蓝色   | 有一些内容                                                                |
| 橙色   | [类型](../ae2-mechanics/bytes-and-types.md) 已满，无法添加新类型     |
| 红色   | [字节](../ae2-mechanics/bytes-and-types.md) 已满，无法插入更多物品 |
| 黑色   | 无电源或驱动器没有 [频道](../ae2-mechanics/channels.md)                 |

## 优先级 (Priority)

可以通过单击 GUI 右上角的扳手来设置优先级。
进入网络的物品将从最高优先级的存储开始作为
它们的第一个目的地。在两个存储或元件具有相同优先级的情况下，
如果其中一个已经包含该物品，它们将优先选择该存储而不是任何
其他存储。任何 [分区](cell_workbench.md) 的元件在与其他存储处于同一优先级组时将被视为
已经包含该物品。从存储中移除物品将
从具有最低优先级的存储中移除。这个优先级系统意味着随着物品被插入和移除
从网络存储中，优先级较高的存储将被填充，优先级较低的存储将被清空。

## 配方 (Recipe)

<RecipeFor id="drive" />
