---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 空间 IO
  icon: spatial_storage_cell_2
---

# 空间 IO (Spatial IO)

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/spatial_storage_1x1x1.snbt" />

  <BoxAnnotation color="#33dd33" min="1 1 1" max="2 2 2">
        要移动的区域
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />

</GameScene>

空间 IO 是一种剪切并粘贴世界中物理空间体积的方法。它可以用来移动 <ItemLink id="flawless_budding_quartz" />，
在基地中拥有一个房间，你可以通过更换不同的内部结构来将其用于不同的目的，甚至移动末地传送门！

它的工作原理是将定义的体积与空间存储维度中相同大小的体积进行 *交换*，将塔架阵列中的所有内容发送到空间存储维度，
并将维度中的所有内容发送到塔架阵列。

这意味着，如果你有办法在维度之间旅行（空间 IO *可以* 用来制作传送门，
但这样做非常复杂，有点麻烦，并且超出了本指南的范围），你可以像使用自定义大小的紧凑机器或口袋维度一样使用它们。

# 多方块结构搭建 (The Multiblock Setup)

空间 IO 需要对其组件进行特定的排列才能运行，并定义要剪切和粘贴的体积。

所有组件必须在同一个 [网络](me-network-connections.md) 上才能运行，并且一个网络上只能有一套空间 IO 设置。因此，建议使用 [子网络](subnetworks.md)。

## 空间 IO 端口 (The Spatial IO Port)

<BlockImage id="spatial_io_port" p:powered="true" scale="4" />

<ItemLink id="spatial_io_port" /> 控制空间 IO 操作。它显示多方块设置的统计信息，并容纳 [空间存储元件](../items-blocks-machines/spatial_cells.md)。

它显示：
- 网络中已存储和最大 [能量](energy.md)
- 执行操作所需的能量。这可能非常大，并且是瞬间使用的，所以确保你有足够的 [能源元件](../items-blocks-machines/energy_cells.md) 来容纳所有能量。
- 塔架阵列的效率
- 定义体积的大小

要执行空间 IO 操作，请将空间存储元件放入输入槽，并给空间 IO 端口一个红石脉冲。
它将随后把塔架内的体积与空间存储维度中的体积进行 *交换*。这意味着如果你将一组方块发送到空间存储维度，
*然后在塔架中放入另一组方块*，将元件放回输入槽，再次触发 IO 端口，第二组方块将消失，第一组方块将重新出现。

**请小心，定义体积内的任何实体，包括你，都会被带走，如果你没有办法出来，你将被困在空间存储维度的黑暗、毫无特色的盒子中。** 用这招来整你的朋友吧！

## 空间塔架 (Pylons)

<BlockImage id="spatial_pylon" p:powered_on="true" scale="4" />

<ItemLink id="spatial_pylon" /> (空间塔架) 是空间 IO 设置的主要部分，并定义要受影响的体积。

该体积由塔架外部的边界框定义，并在所有方向上向内收缩 1 个方块。

规则如下：
- 最小尺寸为 3x3x3（定义了一个 1x1x1 的体积）
- 所有空间塔架必须在外部边界框内
- 所有空间塔架必须在同一个网络上
- 所有塔架必须至少有 2 个方块长

例如，假设你想定义一个 3x3x3 的体积。遵循规则 2，所有塔架必须在你想要定义的体积周围的 5x5x5 外壳内。
只要它们包含在这个 1 方块厚的 5x5x5 外壳内，它们几乎可以处于任何配置中。

<GameScene zoom="4" interactive={true}>
<ImportStructure src="../assets/assemblies/spatial_storage_3x3x3_pylon_demonstration.snbt" />

<BoxAnnotation color="#33dd33" min="1 1 1" max="4 4 4">
        要移动的区域
  </BoxAnnotation>

<BoxAnnotation color="#3333ff" min="5 5 0" max="0 0 5">
  </BoxAnnotation>

<IsometricCamera yaw="195" pitch="30" />
</GameScene>

一个更合理的设置是这样的：

<GameScene zoom="4" interactive={true}>
<ImportStructure src="../assets/assemblies/better_spatial_storage_3x3x3.snbt" />

<BoxAnnotation color="#33dd33" min="1 1 1" max="4 4 4">
        要移动的区域
  </BoxAnnotation>

<BoxAnnotation color="#3333ff" min="5 5 0" max="0 0 5">
  </BoxAnnotation>

<IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 效率 (Efficiency)

塔架阵列的效率取决于你填充外壳的程度。围绕大体积的最小化设置将非常低效，并且可能需要 *数十亿* 的 AE 能量。

## 元件尺寸 (Cell Dimensions)

一旦 [空间存储元件](../items-blocks-machines/spatial_cells.md) 被使用，它将获得一组永久定义的 XYZ 尺寸（例如，3x4x2），
并链接到空间存储维度中的一个空间体积。**你不能在空间存储元件被使用后重置、重新格式化或调整其大小。** 如果你想使用不同的尺寸，请制作一个新的元件。

这些与元件名称中的尺寸不同，一个 16^3 的元件可以拥有 *最大* 16x16x16 的任何尺寸。

请注意，此体积是有方向的，无法旋转。2x2x3 的体积与 3x2x2 的体积不同，即使它们的大小相同。

如果元件的 XYZ 尺寸与定义的体积（在 IO 端口中查看）不匹配，IO 端口将无法运行。
