---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 切换总线
  icon: toggle_bus
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:toggle_bus
- ae2:inverted_toggle_bus
---

# 切换总线 (The Toggle Bus)

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/assemblies/toggle_bus.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

一种功能类似于 <ItemLink id="fluix_glass_cable" /> 或其他线缆的总线，但它
允许通过红石切换其连接状态。这允许你切断
一段 [ME 网络](../ae2-mechanics/me-network-connections.md)。

当提供红石信号时，该部件启用连接，<ItemLink id="inverted_toggle_bus" /> 通过禁用连接提供相反的
行为。

值得注意的是，切换这些可能会导致网络重启并重新计算连接的设备。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

## 配方 (Recipes)

<RecipeFor id="toggle_bus" />

<RecipeFor id="inverted_toggle_bus" />
