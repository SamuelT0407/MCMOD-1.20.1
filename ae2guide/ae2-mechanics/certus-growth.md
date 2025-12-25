---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 赛特斯石英生长
  icon: quartz_cluster
---

# 赛特斯石英生长 (Certus Growth)

## 基本上就是从入门指南复制粘贴过来的

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/budding_certus_1.snbt" />
</GameScene>

赛特斯石英母岩 (certus quartz buds) 会从 [赛特斯石英母岩方块](../items-blocks-machines/budding_certus.md) 上长出，类似于紫水晶。如果你破坏一个未完全长成的母岩，它会掉落一个 <ItemLink id="certus_quartz_dust" /> (赛特斯石英粉)，不受时运影响。如果你破坏一个完全长成的石英簇，它会掉落四个 <ItemLink id="certus_quartz_crystal" /> (赛特斯石英水晶)，时运附魔会增加此数量。

赛特斯石英母岩方块有 4 个等级：无暇 (Flawless)、有瑕 (Flawed)、裂痕 (Chipped) 和 损坏 (Damaged)。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/budding_blocks.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

每当母岩生长一个阶段，母岩方块就有机会降低一个等级，最终变成普通的赛特斯石英方块。可以通过将母岩方块（或赛特斯石英方块）与一个或多个 <ItemLink id="charged_certus_quartz_crystal" /> (充能赛特斯石英水晶) 一起扔入水中来修复它们（并制作新的母岩方块）。

<RecipeFor id="damaged_budding_quartz" />

**无暇的赛特斯石英母岩方块** 不会退化，并且会无限生成赛特斯石英。但是，它们**无法**被合成，也无法用镐移动，即使有精准采集也不行。（不过它们*可以*用 [空间存储](../ae2-mechanics/spatial-io.md) 移动）。

就其本身而言，赛特斯石英母岩生长得非常缓慢。幸运的是，当 <ItemLink id="growth_accelerator" /> (晶体催生器) 放置在母岩方块旁边时，可以大幅加速这一过程。你应该优先制作几个这样的设备。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/budding_certus_2.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

如果你没有足够的石英来制作 <ItemLink id="energy_acceptor" /> (能源接收器) 或 <ItemLink id="vibration_chamber" /> (振动台)，
你可以制作一个 <ItemLink id="crank" /> (手摇曲柄) 并将其安装在催生器的末端。

自动采集赛特斯石英的方法在 [这里进行了描述](../example-setups/simple-certus-farm.md)。
