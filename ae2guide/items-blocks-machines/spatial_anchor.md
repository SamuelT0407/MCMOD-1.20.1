---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 空间锚
  icon: spatial_anchor
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:spatial_anchor
---

# 空间锚 (The Spatial Anchor)

<BlockImage id="spatial_anchor" p:powered="true" scale="8"/>

AE2 网络需要被区块加载才能让其任何 [设备](../ae2-mechanics/devices.md) 能够运行，如果只加载了一部分，
它可能无法正常运行。空间锚解决了这个问题。它强制加载其网络占据的区块。
一根穿过区块边界的线缆足以加载该新区块。

它将通过 [量子桥](quantum_bridge.md) 传播其“加载”，但不会跨维度，所以如果你
有一个通往地狱的量子桥，你需要得在基地网络上和地狱网络上都有一个空间锚。

默认情况下，它还将在其加载的区块中启用随机刻，这可以在 ae2 配置中关闭。

如果由于某种原因你想这样做的话，可以用 <ItemLink id="certus_quartz_wrench" /> 旋转它。

## 设置 (Settings)

*   空间锚提供对查看 AE 或 E/FE 中能量的全局设置的访问。
*   可以显示一个世界内全息图，显示正在加载的区块。

## 能量 (Energy)

空间锚将根据此方程使用 [能量](../ae2-mechanics/energy.md)：

e = 80 + (x\*(x+1))/2

其中 x 是正在加载的区块数量

## 配方 (Recipe)

<RecipeFor id="spatial_anchor" />
