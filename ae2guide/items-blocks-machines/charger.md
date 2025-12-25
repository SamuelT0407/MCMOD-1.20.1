---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 充能器
  icon: charger
  position: 310
categories:
- machines
item_ids:
- ae2:charger
---

# 充能器 (The Charger)

<BlockImage id="charger" scale="8" />

充能器提供了一种为支持的工具和 <ItemLink id="certus_quartz_crystal" /> 充电的方法。

可以通过顶部或底部，通过 AE2 的 [线缆](cables.md) 或其他模组的电力线缆提供电力。它可以
接受 AE2 的电力 (AE) 或 Forge Energy (FE)。物品可以从任何侧面插入或移除。只有结果可以
被移除，所以不需要过滤器来防止移除赛特斯水晶而不是充能赛特斯水晶。可以用
<ItemLink id="certus_quartz_wrench" /> 旋转以便于自动化。

可用于从 <ItemLink id="certus_quartz_crystal" /> 创建 <ItemLink id="charged_certus_quartz_crystal" />，
以及从 <ItemLink id="minecraft:compass" /> 创建 <ItemLink id="meteorite_compass" />。

要手动为其供电，请在顶部或底部放置一个 <ItemLink id="crank" /> 并右键单击它，直到物品充满电。

它也充当 AE2 村民的工作站。

## 简单自动化 (Simple Automation)

作为一个例子，可旋转性让你可以像这样半自动化充能器：

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/charger_hopper.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配方 (Recipe)

<RecipeFor id="charger" />
