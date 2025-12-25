---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: ME IO 端口
  icon: io_port
  position: 210
categories:
- devices
item_ids:
- ae2:io_port
---

# ME IO 端口 (The ME I/O Port)

<BlockImage id="io_port" p:powered="true" scale="8" />

IO 端口允许你快速地将 [存储元件](../items-blocks-machines/storage_cells.md) 填充到或清空
[网络存储](../ae2-mechanics/import-export-storage.md) 中。

它可以用 <ItemLink id="certus_quartz_wrench" /> 旋转。

## 设置 (Settings)

*   IO 端口可以设置为当元件为空、已满或工作完成时将元件移动到输出插槽。
*   如果插入了 <ItemLink id="redstone_card" />，将会有各种红石条件的选项
*   在 GUI 的中心，有一个箭头用于设置传输物品的方向，从元件到 [网络存储](../ae2-mechanics/import-export-storage.md)，
    或从存储到元件。

## 升级 (Upgrades)

IO 端口支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="speed_card" /> 增加每次操作移动的物品数量
*   <ItemLink id="redstone_card" /> 添加红石控制，允许高信号激活、低信号激活或每个脉冲一次

## 配方 (Recipe)

<RecipeFor id="io_port" />
