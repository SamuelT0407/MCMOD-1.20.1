---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: ME 箱子
  icon: chest
  position: 210
categories:
- devices
item_ids:
- ae2:chest
---

# ME 箱子 (The ME Chest)

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/blocks/chest.snbt" />
</GameScene>

ME 箱子的作用就像一个微型网络，带有一个 <ItemLink id="terminal" />、<ItemLink id="drive" /> 和 <ItemLink id="energy_acceptor" />。
虽然它可以用作一个微型存储网络，但它只能容纳一个 [存储元件](../items-blocks-machines/storage_cells.md) 的容量
意味着它的实用性有限。

相反，它对于与安装在其中的特定存储元件进行交互非常有用。其集成的终端只能看到和访问
安装的驱动器中的物品，而一般网络上的 [设备](../ae2-mechanics/devices.md) 可以访问任何 [网络存储](../ae2-mechanics/import-export-storage.md) 中的物品，
包括 ME 箱子。

它有 2 个不同的 GUI，并且有侧面用于物品传输。与顶部终端交互会打开集成终端。物品可以通过这个面插入到
安装的存储元件中，但不能提取。与任何其他面交互会打开带有存储元件插槽
和优先级设置的 GUI。元件只能通过带有元件插槽的面通过物品物流插入和移除。

它可以用 <ItemLink id="certus_quartz_wrench" /> 旋转。

它有一个小的 AE 能量存储缓冲区，所以如果不在带有 [能量元件](../items-blocks-machines/energy_cells.md) 的网络上，
一次插入或提取太多物品可能会导致其断电。

终端可以用 <ItemLink id="color_applicator" /> 着色。

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/chest_color.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 设置 (Settings)

ME 箱子拥有与 <ItemLink id="terminal" /> 或 <ItemLink id="crafting_terminal" /> 相同的所有设置。
但是，它不支持 <ItemLink id="view_cell" />。

## 元件状态 LED (Cell Status LEDs)

箱子里的元件上有一个 LED，显示了它们的状态：

| 颜色   | 状态                                                                           |
| :----- | :------------------------------------------------------------------------------- |
| 绿色   | 空                                                                            |
| 蓝色   | 有一些内容                                                                |
| 橙色   | [类型](../ae2-mechanics/bytes-and-types.md) 已满，无法添加新类型     |
| 红色   | [字节](../ae2-mechanics/bytes-and-types.md) 已满，无法插入更多物品 |
| 黑色   | 无电源或驱动器没有 [频道](../ae2-mechanics/channels.md)                 |

## 优先级 (Priority)

可以通过单击元件插槽 GUI 右上角的扳手来设置优先级。
进入网络的物品将从最高优先级的存储开始作为
它们的第一个目的地。在两个存储或元件具有相同优先级的情况下，
如果其中一个已经包含该物品，它们将优先选择该存储而不是任何
其他存储。任何 [分区](cell_workbench.md) 的元件在与其他存储处于同一优先级组时将被视为
已经包含该物品。从存储中移除物品将
从具有最低优先级的存储中移除。这个优先级系统意味着随着物品被插入和移除
从网络存储中，优先级较高的存储将被填充，优先级较低的存储将被清空。

## 配方 (Recipe)

<RecipeFor id="chest" />
