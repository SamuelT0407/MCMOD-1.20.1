---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 线缆
  icon: fluix_glass_cable
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:white_glass_cable
- ae2:orange_glass_cable
- ae2:magenta_glass_cable
- ae2:light_blue_glass_cable
- ae2:yellow_glass_cable
- ae2:lime_glass_cable
- ae2:pink_glass_cable
- ae2:gray_glass_cable
- ae2:light_gray_glass_cable
- ae2:cyan_glass_cable
- ae2:purple_glass_cable
- ae2:blue_glass_cable
- ae2:brown_glass_cable
- ae2:green_glass_cable
- ae2:red_glass_cable
- ae2:black_glass_cable
- ae2:fluix_glass_cable
- ae2:white_covered_cable
- ae2:orange_covered_cable
- ae2:magenta_covered_cable
- ae2:light_blue_covered_cable
- ae2:yellow_covered_cable
- ae2:lime_covered_cable
- ae2:pink_covered_cable
- ae2:gray_covered_cable
- ae2:light_gray_covered_cable
- ae2:cyan_covered_cable
- ae2:purple_covered_cable
- ae2:blue_covered_cable
- ae2:brown_covered_cable
- ae2:green_covered_cable
- ae2:red_covered_cable
- ae2:black_covered_cable
- ae2:fluix_covered_cable
- ae2:white_covered_dense_cable
- ae2:orange_covered_dense_cable
- ae2:magenta_covered_dense_cable
- ae2:light_blue_covered_dense_cable
- ae2:yellow_covered_dense_cable
- ae2:lime_covered_dense_cable
- ae2:pink_covered_dense_cable
- ae2:gray_covered_dense_cable
- ae2:light_gray_covered_dense_cable
- ae2:cyan_covered_dense_cable
- ae2:purple_covered_dense_cable
- ae2:blue_covered_dense_cable
- ae2:brown_covered_dense_cable
- ae2:green_covered_dense_cable
- ae2:red_covered_dense_cable
- ae2:black_covered_dense_cable
- ae2:fluix_covered_dense_cable
- ae2:white_smart_cable
- ae2:orange_smart_cable
- ae2:magenta_smart_cable
- ae2:light_blue_smart_cable
- ae2:yellow_smart_cable
- ae2:lime_smart_cable
- ae2:pink_smart_cable
- ae2:gray_smart_cable
- ae2:light_gray_smart_cable
- ae2:cyan_smart_cable
- ae2:purple_smart_cable
- ae2:blue_smart_cable
- ae2:brown_smart_cable
- ae2:green_smart_cable
- ae2:red_smart_cable
- ae2:black_smart_cable
- ae2:fluix_smart_cable
- ae2:white_smart_dense_cable
- ae2:orange_smart_dense_cable
- ae2:magenta_smart_dense_cable
- ae2:light_blue_smart_dense_cable
- ae2:yellow_smart_dense_cable
- ae2:lime_smart_dense_cable
- ae2:pink_smart_dense_cable
- ae2:gray_smart_dense_cable
- ae2:light_gray_smart_dense_cable
- ae2:cyan_smart_dense_cable
- ae2:purple_smart_dense_cable
- ae2:blue_smart_dense_cable
- ae2:brown_smart_dense_cable
- ae2:green_smart_dense_cable
- ae2:red_smart_dense_cable
- ae2:black_smart_dense_cable
- ae2:fluix_smart_dense_cable
---

# 线缆 (Cables)

<GameScene zoom="3" background="transparent">
  <ImportStructure src="../assets/assemblies/cables.snbt" />
  <IsometricCamera yaw="180" pitch="30" />
</GameScene>

虽然 ME 网络也可以通过相邻的具有 ME 功能的机器创建，但线缆是
将 ME 网络扩展到更大区域的主要方式。

使用不同颜色的线缆可以确保相邻的线缆不会相互连接，
允许更有效地分配 [频道](../ae2-mechanics/channels.md)。它们也会影响连接到它们的终端的颜色，
所以你不必把你所有的终端都变成紫色。福鲁伊克斯线缆连接到每一种其他颜色。

值得注意的是，**频道与线缆颜色无关**

## 重要提示 (An Important Note)

**如果你是 AE2 的新手并且不熟悉频道，请尽可能使用智能线缆和致密智能线缆。
它将显示频道如何在你的网络中路由，使其行为更容易理解。**

## 另一个提示 (Another Note)

**这些不是物品或流体或能量等管道。** 它们没有内部库存，样板供应器和机器不会“推”
入它们，它们所做的只是将 AE2 [设备](../ae2-mechanics/devices.md) 连接在一起形成一个网络。

## 玻璃线缆 (Glass Cable)

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/fluix_glass_cable.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

<ItemLink id="fluix_glass_cable" /> 是最简单的线缆，可以传输电力
和最多 8 个 [频道](../ae2-mechanics/channels.md)。它有 17 种不同的颜色，默认
是福鲁伊克斯，并且可以使用 16 种染料中的任何一种染成任何颜色。

要制作有色线缆，用 8 个相同类型的线缆包围任何类型的染料
（线缆的颜色不重要，但它们必须是相同类型的，
玻璃，智能等）。你也可以在世界中使用任何 Forge 兼容的油漆刷
给线缆上色。

你可以用水桶和任何颜色的线缆合成来去除染料。

你可以用羊毛包裹线缆以创建 <ItemLink id="fluix_covered_cable" />，并制作 <ItemLink id="fluix_smart_cable" /> 以更好地了解
你的 [频道](../ae2-mechanics/channels.md) 发生了什么。

<RecipeFor id="fluix_glass_cable" />

<RecipeFor id="blue_glass_cable" />

## 包层线缆 (Covered Cable)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_covered_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

与 <ItemLink id="fluix_glass_cable" /> 相比，包层线缆变体没有提供任何游戏优势。但是，如果你更喜欢覆盖的外观，
它可以作为一种替代的美学选择。

可以以与 <ItemLink id="fluix_glass_cable" /> 相同的方式着色。四个 <ItemLink id="fluix_covered_cable" /> 可以用
红石和萤石制作成 <ItemLink id="fluix_covered_dense_cable" />。

<Recipe id="network/cables/covered_fluix" />

<RecipeFor id="blue_covered_cable" />

## 致密线缆 (Dense Cable)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_covered_dense_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

更高容量的线缆，可以携带 32 个频道，不像标准线缆只能携带 8 个，
但是它不支持总线，所以在使用总线或面板之前，你必须先从致密线缆降级到
较小的线缆（如 <ItemLink id="fluix_glass_cable" /> 或 <ItemLink id="fluix_smart_cable" />）。

致密线缆稍微覆盖了频道的“最短路径”行为，频道将采取最短路径到达
致密线缆，然后通过该致密线缆采取最短路径到达控制器。

<Recipe id="network/cables/dense_covered_fluix" />

<RecipeFor id="blue_covered_dense_cable" />

## 智能线缆 (Smart Cable)

<Row>
<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_smart_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/fluix_smart_dense_cable.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
</Row>

虽然在外观上与 <ItemLink id="fluix_covered_cable" /> 有些相似，但它们
通过可视化线缆上的频道使用情况提供诊断功能，
频道显示为沿着线缆上的黑色条纹运行的发光彩色线条，
让你了解你的频道如何在
你的网络上使用。对于常规智能线缆，前四个频道显示为与线缆颜色匹配的线条，
接下来的四个显示为白色线条。对于致密智能线缆，每条条纹代表 4 个频道。

在带有 <ItemLink id="controller" /> 的网络上，线缆上的线条显示频道所走的也是确切路径。

Ad-Hoc 网络上的智能线缆将显示网络范围内使用的频道数量，而不是流经该特定线缆的频道数量。

这些也可以以与 <ItemLink id="fluix_glass_cable" /> 相同的方式着色。

<Recipe id="network/cables/smart_fluix" />

<Recipe id="network/cables/dense_smart_fluix" />

<RecipeFor id="blue_smart_cable" />
