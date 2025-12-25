---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 赛特斯石英母岩
  icon: flawless_budding_quartz
  position: 010
categories:
- misc ingredients blocks
item_ids:
- ae2:flawless_budding_quartz
- ae2:flawed_budding_quartz
- ae2:chipped_budding_quartz
- ae2:damaged_budding_quartz
- ae2:small_quartz_bud
- ae2:medium_quartz_bud
- ae2:large_quartz_bud
- ae2:quartz_cluster
---

# 赛特斯石英母岩 (Budding Certus Quartz)

(另见 [赛特斯生长](../ae2-mechanics/certus-growth.md))

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/budding_blocks.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

赛特斯石英晶芽会从赛特斯石英母岩上长出，类似于紫水晶。这些可以在 [陨石](../ae2-mechanics/meteorites.md) 中找到。
赛特斯石英母岩有 4 个等级：无瑕、有瑕、裂痕和损坏。它们可以通过
像 HWYLA, Jade, The One Probe 等模组（或 f3 屏幕）最容易地识别。

对于有瑕、裂痕和损坏的赛特斯石英母岩，每当晶芽生长进入下一阶段时，母岩方块都有机会
降级一个等级，最终变成普通的 <ItemLink id="quartz_block" />。

无瑕赛特斯石英母岩不会因晶芽生长而降级，并作为无限来源。

如果用普通镐破坏，赛特斯石英母岩会降级 1 个等级。如果用附魔了精准采集的镐
破坏，它们不会降级，除非它们是无瑕的。**这意味着无瑕赛特斯石英母岩不能
用镐收集和移动**。相反，可以使用 [空间存储](../ae2-mechanics/spatial-io.md) 来
剪切和粘贴周围的无瑕母岩方块。

## 配方 (Recipes)

有瑕、裂痕和损坏的赛特斯石英母岩可以通过将上一级的母岩方块（或 <ItemLink id="quartz_block" />）
与一个或多个 <ItemLink id="charged_certus_quartz_crystal" /> 一起投入水中来制作。

无瑕赛特斯石英母岩无法制作，只能在世界中找到。

<Row>
  <RecipeFor id="damaged_budding_quartz" />

  <RecipeFor id="chipped_budding_quartz" />

  <RecipeFor id="flawed_budding_quartz" />
</Row>
