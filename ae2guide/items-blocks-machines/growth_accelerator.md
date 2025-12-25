---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 晶体催生器
  icon: growth_accelerator
  position: 310
categories:
- machines
item_ids:
- ae2:growth_accelerator
---

# 晶体催生器 (The Growth Accelerator)

<BlockImage id="growth_accelerator" p:powered="true" scale="8"/>

当放置在母岩方块旁边时，晶体催生器会极大地加速赛特斯或紫水晶 [的生长](../ae2-mechanics/certus-growth.md)。

奇怪的是，它 *也* 可以加速各种植物的生长。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/growth_accelerator.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

要手动为其供电，请在顶部或底部放置一个 <ItemLink id="crank" /> 并右键单击它。

它只在粉色福鲁伊克斯花纹所在的末端连接到线缆。

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/accelerator_connections.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配方 (Recipe)

<RecipeFor id="growth_accelerator" />
