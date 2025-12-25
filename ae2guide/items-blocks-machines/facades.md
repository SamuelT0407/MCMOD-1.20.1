---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 伪装板
  icon: facade
  icon_nbt: '{item: "minecraft:stone"}'
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:facade
---

# 伪装板 (Facades)

伪装板可以用来使你的基地看起来更干净。它们可以覆盖两种尺寸的线缆，并且可以由许多
种类的方块制成。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/facades_1.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

它们可以覆盖线缆的所有侧面，但会让 [子部件](../ae2-mechanics/cable-subparts.md) 和线缆连接
突出出来。

<GameScene zoom="6"  interactive={true}>
  <ImportStructure src="../assets/assemblies/facades_2.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

巧妙地使用它们来改善你的基地美学，或制作每面具有不同纹理的方块。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/facades_3.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 隐藏伪装板 (Hiding Facades)

当任意一只手持有 <a href="network_tool.md">网络工具</a> 时，伪装板将被隐藏。

你可以与隐藏伪装板后面的方块交互，而无需先移除伪装板。

## 配方 (Recipe)

将你想要纹理的方块放在 4 个 <ItemLink id="cable_anchor" /> 的中间。

![伪装板配方](../assets/diagrams/facade_recipe.png)
