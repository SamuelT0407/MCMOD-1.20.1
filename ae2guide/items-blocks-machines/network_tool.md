---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 网络工具
  icon: network_tool
  position: 410
categories:
- tools
item_ids:
- ae2:network_tool
---

# 网络工具 (Network Tool)

<ItemImage id="network_tool" scale="4" />

网络工具是一种修改过的 [扳手](wrench.md)，它也显示网络诊断信息并可以存储 [升级卡](upgrade_cards.md)。
虽然它保留了扳手快速拆卸物体和从线缆上拉下 [子部件](../ae2-mechanics/cable-subparts.md) 的能力，
但它不能旋转物体。

它有 9 个插槽用于存储 [升级卡](upgrade_cards.md)，如果工具在你的库存中的任何位置，
这些卡将在任何 AE2 设备 UI 中可用。

右键单击网络的任何部分将显示诊断信息窗口，类似于右键单击 <ItemLink id="controller" />。
此窗口显示

*   网络上使用的频道数量
*   一个切换全局设置以 AE 或 E/FE 查看能量的开关
*   网络中存储的 [能量](../ae2-mechanics/energy.md) 量，以及网络的最大能量容量
*   进入并被网络使用的能量
*   网络上所有 [设备](../ae2-mechanics/devices.md) 和组件的列表

当处理 [子网络](../ae2-mechanics/subnetworks.md) 时，此窗口也有助于确定两个不同的线缆或设备是否属于同一网络。

## 隐藏伪装板 (Hiding Facades)

<a href="facades.md">伪装板</a> 将在任意一只手持有网络工具时隐藏。

你可以与隐藏伪装板后面的方块交互，而无需先移除伪装板。

## 配方 (Recipe)

<RecipeFor id="network_tool" />
