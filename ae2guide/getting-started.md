---
navigation:
  title: 入门指南 (1.20+)
  position: 10
---

<div class="notification is-info">
  以下信息仅适用于 Minecraft 1.20 及更新版本中的应用能源2 (Applied Energistics 2)。
</div>

# 入门指南

## 获取初始材料 (Getting The Initial Materials)

<GameScene zoom="4" background="transparent">
  <ImportStructure src="assets/assemblies/meteor_interior.snbt" />
</GameScene>

要开始使用应用能源2，首先必须找到一个 [陨石 (meteorite)](ae2-mechanics/meteorites.md)。它们相当常见，并且往往会在地形上留下巨大的坑洞，所以你在旅途中可能已经遇到过。
如果你还没找到，可以合成一个 <ItemLink id="meteorite_compass" /> (陨石指南针)，它会指向最近的 <ItemLink id="mysterious_cube" /> (神秘的立方)。

找到陨石后，挖掘进入其中心。你会发现赛特斯石英簇 (certus quartz clusters)、赛特斯石英母岩 (certus quartz buds)、各种类型的 [各种类型的赛特斯石英母岩 (budding certus blocks)](items-blocks-machines/budding_certus.md)，以及中心的一个神秘的立方 (Mysterious Cube)。

挖掘所有的赛特斯石英簇和你发现的任何赛特斯石英方块。你也可以采集赛特斯石英母岩，但如果没有精准采集 (silk touch)，它们会降级 1 个等级。

**不要** 破坏任何 **无暇的赛特斯石英母岩 (flawless budding certus)**，因为即使使用精准采集，它们也会降级为 **有瑕的赛特斯石英母岩 (flawed budding certus)**，并且**无法**将其修复回无暇状态。

还要挖掘陨石中心的神秘的立方 (Mysterious Cube)，以获得所有 4 种压印模板 (inscriber presses)。

## 种植赛特斯石英 (Growing Certus Quartz)

<GameScene zoom="4" background="transparent">
<ImportStructure src="assets/assemblies/budding_certus_1.snbt" />
</GameScene>

赛特斯石英母岩 (certus quartz buds) 会从 [赛特斯石英母岩方块](items-blocks-machines/budding_certus.md) 上长出，类似于紫水晶。如果你破坏一个未完全长成的母岩，它会掉落一个 <ItemLink id="certus_quartz_dust" /> (赛特斯石英粉)，不受时运影响。如果你破坏一个完全长成的石英簇，它会掉落四个 <ItemLink id="certus_quartz_crystal" /> (赛特斯石英水晶)，时运附魔会增加此数量。

赛特斯石英母岩方块有 4 个等级：无暇 (Flawless)、有瑕 (Flawed)、裂痕 (Chipped) 和 损坏 (Damaged)。

<GameScene zoom="4" background="transparent">
<ImportStructure src="assets/assemblies/budding_blocks.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

每当母岩生长一个阶段，母岩方块就有机会降低一个等级，最终变成普通的赛特斯石英方块。可以通过将母岩方块（或赛特斯石英方块）与一个或多个 <ItemLink id="charged_certus_quartz_crystal" /> (充能赛特斯石英水晶) 一起扔入水中来修复它们（并制作新的母岩方块）。

<RecipeFor id="damaged_budding_quartz" />

**无暇的赛特斯石英母岩方块** 不会退化，并且会无限生成赛特斯石英。但是，它们**无法**被合成，也无法用镐移动，即使有精准采集也不行。（不过它们*可以*用 [空间存储 (spatial storage)](ae2-mechanics/spatial-io.md) 移动）。

就其本身而言，赛特斯石英母岩生长得非常缓慢。幸运的是，当 <ItemLink id="growth_accelerator" /> (晶体催生器) 放置在母岩方块旁边时，可以大幅加速这一过程。你应该优先制作几个这样的设备。

<GameScene zoom="4" background="transparent">
<ImportStructure src="assets/assemblies/budding_certus_2.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

如果你没有足够的石英来制作 <ItemLink id="energy_acceptor" /> (能源接收器) 或 <ItemLink id="vibration_chamber" /> (振动台)，
你可以制作一个 <ItemLink id="crank" /> (手摇曲柄) 并将其安装在催生器的末端。

自动采集赛特斯石英的方法在 [这里进行了描述](example-setups/simple-certus-farm.md)。

## 关于福鲁伊克斯 (Fluix) 的简要说明

你需要另一种材料是福鲁伊克斯 (Fluix)，你在制作晶体催生器时已经遇到过它。它是通过将充能赛特斯石英、红石和下界石英一起扔入水中制成的。自动化此过程“留作读者的练习”。

如果你还没有制作，你需要 <ItemLink id="charger" /> (充能器) 来生产 <ItemLink id="charged_certus_quartz_crystal" /> (充能赛特斯石英水晶)。

## 压印一些处理器 (Inscribing Some Processors)

在搜刮陨石时，你打破神秘的立方会找到四个“压印模板”。这些用于在 <ItemLink id="inscriber" /> (压印器) 中制作三种类型的处理器。

<ItemGrid>
  <ItemIcon id="silicon_press" />

  <ItemIcon id="logic_processor_press" />

  <ItemIcon id="calculation_processor_press" />

  <ItemIcon id="engineering_processor_press" />
</ItemGrid>

压印器是一种有面区分的机器，就像原版的熔炉一样。从顶部或底部输入物品会将物品放入顶部或底部的槽位，从侧面或背面输入则会放入中间的槽位。成品可以从侧面或背面抽出。

为了方便使用漏斗进行自动化（并可能减少管道混乱），可以用 <ItemLink id="certus_quartz_wrench" /> (赛特斯石英扳手) 旋转压印器。

为接下来的步骤生产每种处理器各几个，我们将制作一个非常基础的 ME 系统。自动化处理器的生产“留作读者的练习”。

## 物质能量科技：ME 网络与存储 (Matter Energy Tech: ME Networks and Storage)

### 什么是 ME 存储？

它的发音是 Emm-Eee，代表物质能量 (Matter Energy)。

物质能量是应用能源2 的核心组件，它就像是一个疯狂科学家版本的多方块箱子，
它可以彻底改变你的存储状况。ME 与 Minecraft 中的其他存储系统截然不同，
你可能需要一点跳跃性思维来适应它；但一旦你开始使用，极小的空间内海量的存储，
以及多个访问终端仅仅是可能性的冰山一角。

### 开始使用我需要知道什么？

首先，ME 将物品存储在其他物品内部，称为 [存储元件 (Storage cells)](items-blocks-machines/storage_cells.md)；有 5 个等级，存储量递增。为了使用存储元件，必须将其放置在 <ItemLink id="chest" /> (ME 箱子) 或 <ItemLink id="drive" /> (ME 驱动器) 中。

<ItemLink id="chest" /> (ME 箱子) 在放入元件后立即向你展示元件的内容，
你可以像使用 <ItemLink id="minecraft:chest" /> (箱子) 一样添加和移除物品，区别在于物品实际上存储在存储元件中，而不是 <ItemLink id="chest" /> 本身。

虽然 <ItemLink id="chest" /> 是介绍 ME 概念的好方法，但要真正利用它，你需要建立一个 [ME 网络](ae2-mechanics/me-network-connections.md)。

## 你的第一个 ME 系统 (Your Very First ME System)

现在你已经拥有了应用能源2 的所有基本材料和机器，你可以制作你的第一个 ME (物质能量) 系统。这将是一个非常基础的系统，没有自动合成，没有物流，只有美观、简单、可搜索的存储。

<GameScene zoom="6" interactive={true}>
<ImportStructure src="assets/assemblies/tiny_me_system.snbt" />

</GameScene>

*   你的材料清单：
    * 1x <ItemLink id="drive" /> (ME 驱动器)
    * 1x <ItemLink id="terminal" /> (ME 终端) 或 <ItemLink id="crafting_terminal" /> (ME 合成终端)
    * 1x <ItemLink id="energy_acceptor" /> (能源接收器)
    * 一些 [线缆](items-blocks-machines/cables.md)，玻璃线缆 (glass)、包层线缆 (covered) 或智能线缆 (smart) 均可，但不要用致密线缆 (dense)
    * 一些 [存储元件](items-blocks-machines/storage_cells.md)，推荐使用 4k 版本，以便在容量和类型之间取得良好平衡（混合使用 4k 和 1k 并进行 [分区](items-blocks-machines/cell_workbench.md) 会更高效，但这涉及我们现在不打算深入的复杂性）
---
1.  放置驱动器。
2.  能源接收器（以及其他几个 AE2 [设备](ae2-mechanics/devices.md)）有 2 种模式：方块和面板。可以在合成网格中切换。如果你的能源接收器是方块，请将其放在驱动器旁边。如果是扁平的面板，请在驱动器上放置一根线缆，然后将接收器放在线缆上。
3.  使用你喜欢的能源模组的线缆/管道/导管将能量输入能源接收器。
4.  在驱动器顶部（或视线高度）放置一根线缆，并将你的终端或合成终端放在上面。
5.  将你的存储元件放入驱动器中。
6.  <span style="text-decoration: line-through;">盈利</span> (Profit)
7.  调整终端的设置。
8.  沐浴在你终极的力量和能力中。
9.  意识到这个网络在宏伟的计划中其实相当小。

### 扩展你的网络

现在你有了一些基本的存储空间，并且可以访问该存储空间，这是一个好的开始，但你可能会寻求自动化一些处理流程。

一个很好的例子是在熔炉顶部放置一个 <ItemLink id="export_bus" /> (输出总线) 以倒入矿石，并在熔炉底部放置一个 <ItemLink id="import_bus" /> (输入总线) 以抽取烧炼好的矿石。

<ItemLink id="export_bus" /> (输出总线) 允许你将物品从网络导出到连接的容器中，而 <ItemLink id="import_bus" /> (输入总线) 将物品从连接的容器导入到网络中。

### 克服限制

在这一点上，你可能接近拥有 8 个左右的 [设备](ae2-mechanics/devices.md)，一旦达到 9 个设备，你就必须开始管理 [频道 (channels)](ae2-mechanics/channels.md)。许多（但不是全部）设备都需要一个频道才能工作。

默认情况下，一个网络可以支持 8 个频道，一旦突破这个限制，你就必须向网络添加一个 <ItemLink id="controller" /> (ME 控制器)。这允许你极大地扩展你的网络。
[智能线缆](items-blocks-machines/cables.md) 将允许你查看频道如何在网络中路由。刚开始时大量使用它们来学习频道是如何运作的，或者如果你有大量的红石和萤石的话。
