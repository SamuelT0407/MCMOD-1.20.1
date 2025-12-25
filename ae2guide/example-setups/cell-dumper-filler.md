---
navigation:
  parent: example-setups/example-setups-index.md
  title: 元件清空器与填充器
  icon: io_port
---

# 元件清空器或填充器 (Cell Dumper Or Filler)

有人可能会问“我如何快速将一个元件清空到箱子、抽屉阵列或背包中，或者反过来，从这些地方填充一个元件？”

答案是使用 <ItemLink id="io_port" /> (IO 端口)，并利用一些子网络来限制它放置物品或提取物品的位置。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/cell_dumper_filler.snbt" />

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 2 1">
        (1) IO 端口：可以使用 GUI 中间的箭头按钮设置为“将数据传输到网络”或“将数据传输到存储元件”。装有 3 张加速卡。
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 0.7 0" max="1 1 1">
        (2) 存储总线：默认配置。
  </BoxAnnotation>

<BoxAnnotation color="#33dd33" min="0 1 0" max="1 2 1">
        将你想填充或清空的东西放在这里。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 0.35 0.35" max="2.3 0.65 0.65">
        石英纤维：只有当能源来自另一个网络时才需要。
  </BoxAnnotation>

<DiamondAnnotation pos="3 0.5 0.5" color="#00ff00">
        连接到某种能源，比如另一个网络或能源接收器。
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="io_port" /> (1) 可以使用 GUI 中间的箭头按钮设置为“将数据传输到网络”或“将数据传输到存储元件”。它有 3 张加速卡以获得最大速度。
* <ItemLink id="storage_bus" /> (2) 处于默认配置。

## 运作原理 (How It Works)

### 在“传输到网络”模式下

1. <ItemLink id="io_port" /> 尝试将插入的 [存储元件](../items-blocks-machines/storage_cells.md) 的内容
    转存到 [网络存储](../ae2-mechanics/import-export-storage.md) 中。
2. 子网络上唯一的存储是 <ItemLink id="storage_bus" />，它将物品或流体等存储在
    你放在它面前的任何东西里。
* <ItemLink id="energy_cell" /> 提供足够大的 [能量](../ae2-mechanics/energy.md) 缓冲，以确保网络不会
    因为每游戏刻传输如此多物品的功耗而耗尽能量。

### 在“传输到存储元件”模式下

1. <ItemLink id="io_port" /> 尝试将 [网络存储](../ae2-mechanics/import-export-storage.md) 的内容
   转存到插入的 [存储元件](../items-blocks-machines/storage_cells.md) 中。
2. 子网络上唯一的存储是 <ItemLink id="storage_bus" />，它从你放在它面前的任何东西中
   提取物品或流体等。
* <ItemLink id="energy_cell" /> 提供足够大的 [能量](../ae2-mechanics/energy.md) 缓冲，以确保网络不会
  因为每游戏刻传输如此多物品的功耗而耗尽能量。
