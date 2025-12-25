---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 自动合成
  icon: pattern_provider
---

# 自动合成 (Autocrafting)

### 重头戏

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/autocraft_setup_greebles.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

自动合成是 AE2 的主要功能之一。你不必再为了正确数量的子材料而手动计算，也不必像个*平民*一样埋头苦干，你可以让 ME 系统为你代劳。或者自动合成物品并将其导出到某个地方。
或者通过巧妙的涌现行为，自动保持特定数量的物品库存。它也支持流体，如果你有某些模组的附加组件，
它甚至支持额外的模组材料类型，比如 Mekanism 的气体。这真的很棒。

既然这是一个相当复杂的话题，那就系好安全带，我们要开始了。

一个自动合成系统由 3 部分组成：
- 发送合成请求的东西
- 合成 CPU (Crafting CPU)
- <ItemLink id="pattern_provider" /> (样板供应器)

流程如下：

1.  某物创建了一个合成请求。这可能是你在终端中点击某个可自动合成的物品，
    或者是某个带有合成卡的输出总线 (Export Bus) 或接口 (Interface) 正在请求它设置为导出/库存的物品。

*   (**重要提示：** 使用你绑定为“选取方块”的按键（通常是鼠标中键）来请求合成你已经拥有库存的物品，这可能会与库存整理模组冲突)，

2.  ME 系统计算满足请求所需的原料和前置合成步骤，并将它们存储在选定的合成 CPU 中。

3.  带有相关 [样板](../items-blocks-machines/patterns.md) 的 <ItemLink id="pattern_provider" /> 将样板中指定的原料推送到任何相邻的容器中。
    对于工作台配方（“合成样板”），这将是一个 <ItemLink id="molecular_assembler" /> (分子装配室)。
    对于非工作台配方（“处理样板”），这将是其他一些方块、机器或复杂的红石控制装置。

4.  合成结果通过某种方式返回系统，可以通过输入总线、接口，或将结果推回样板供应器。
    **注意，必须发生“物品进入系统”事件，你不能仅仅将结果管道传输到带有 <ItemLink id="storage_bus" /> (存储总线) 的箱子中。**

5.  如果该合成是请求中另一个合成的前置条件，则物品将存储在该合成 CPU 中，然后用于该合成。

# 样板 (Patterns)

<ItemImage id="crafting_pattern" scale="4" />

样板是在 <ItemLink id="pattern_encoding_terminal" /> (样板编码终端) 中用空白样板制作的。

针对不同的用途，有几种不同类型的样板：

*   <ItemLink id="crafting_pattern" /> (合成样板) 编码工作台配方。它们可以直接放入 <ItemLink id="molecular_assembler" /> 中，使其
    只要有原料就合成结果，但它们的主要用途是放在分子装配室旁边的 <ItemLink id="pattern_provider" /> 中。
    在这种情况下，样板供应器具有特殊的行为，会将相关样板连同原料一起发送到相邻的装配室。
    由于装配室会自动将合成结果弹出到相邻的容器中，因此样板供应器上的装配室就是自动化合成样板所需的全部。

***

*   <ItemLink id="smithing_table_pattern" /> (锻造台样板) 与合成样板非常相似，但它们编码的是锻造台配方。它们也通过样板供应器和分子装配室进
    行自动化，并且功能完全相同。事实上，合成、锻造和切石样板可以
    在同一个设置中使用。

***

*   <ItemLink id="stonecutting_pattern" /> (切石机样板) 与合成样板非常相似，但它们编码的是切石机配方。它们也通过样板供应器和分子装配室进
    行自动化，并且功能完全相同。事实上，合成、锻造和切石样板可以
    在同一个设置中使用。

***

*   <ItemLink id="processing_pattern" /> (处理样板) 是自动合成灵活性的主要来源。它们是最通用的类型，简单地说就是
    “如果样板供应器将这些原料推送到相邻的容器，ME 系统将在不久或遥远的将来收到这些物品”。
    这就是你如何自动化几乎所有模组机器、熔炉等的方式。因为它们用途非常
    广泛，并且不关心推送原料之后和接收结果之前发生了什么，你可以做一些非常奇怪的事情，比如将
    原料输入到一个完整的复杂工厂生产链中，该生产链会对物品进行分类，从无限生产的
    农场中获取其他原料，打印整部《蜂电影》的剧本，只要系统最终得到样板指定的结果，它就不在乎。事实上，
    它甚至不关心原料是否与结果有任何关联。你可以告诉它“1 个樱花木板 = 1 个下界之星”，然后让
    你的凋灵农场在收到樱花木板时杀死一只凋灵，它也能工作。

支持多个拥有相同样板的 <ItemLink id="pattern_provider" /> 并行工作。此外，你可以让样板设定
例如 8 圆石 = 8 石头，而不是 1 圆石 = 1 石头，样板供应器每次操作会将 8 个圆石放入
你的烧炼装置中，而不是一次一个。

## 最通用的“样板”形式

实际上，有一种比处理样板更“通用”的“样板”形式。带有合成卡的 <ItemLink id="level_emitter" /> (发信器) 可以设置为
发出红石信号以合成某物。这个“样板”不定义，甚至不关心原料。
它只是说“如果你从这个发信器发出红石信号，ME 系统将在不久或遥远的将来收到这个物品”。
这通常用于激活和停用不需要输入原料的无限农场，
或者激活一个处理递归配方（标准自动合成无法理解）的系统，例如，如果有一个机器可以复制圆石，
配方是“1 圆石 = 2 圆石”。

# 合成 CPU (The Crafting CPU)

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/crafting_cpus.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

合成 CPU 管理合成请求/作业。它们在执行多步骤的合成作业时存储中间原料，并且影响作业的大小，
并在一定程度上影响完成速度。它们是多方块结构，
必须是长方体，并且至少包含 1 个合成存储器。

合成 CPU 由以下部分组成：

*   (必需) [合成存储器](../items-blocks-machines/crafting_cpu_multiblock.md)，提供所有标准存储单元尺寸 (1k, 4k, 16k, 64k, 256k)。它们存储合成中涉及的原料和
    中间原料，因此 CPU 处理包含更多原料的合成作业
    需要更大或更多的存储器。
*   (可选) <ItemLink id="crafting_accelerator" /> (合成并行处理单元)，它们使系统从样板供应器发送更多的原料批次。
    这允许，比如说，一个被 6 个分子装配室包围的样板供应器同时向所有 6 个发送原料（从而利用它们），而不仅仅是一个。
*   (可选) <ItemLink id="crafting_monitor" /> (合成监控器)，它们显示 CPU 当前正在处理的作业。可以通过 <ItemLink id="color_applicator" /> 染色。
*   (可选) <ItemLink id="crafting_unit" /> (合成单元)，它们只是用来填充空间，使 CPU 成为长方体。

每个合成 CPU 处理 1 个请求或作业，所以如果你想同时请求一个运算处理器和 256 个平滑石头，你需要 2 个 CPU 多方块结构。

它们可以设置为处理来自玩家、自动化（输出总线和接口）或两者的请求。

# 样板供应器 (Pattern Providers)

<Row>
<BlockImage id="pattern_provider" scale="4" />

<BlockImage id="pattern_provider" p:push_direction="up" scale="4" />

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/blocks/cable_pattern_provider.snbt" />
</GameScene>
</Row>

<ItemLink id="pattern_provider" /> 是你的自动合成系统与世界交互的主要方式。它们将
[样板](../items-blocks-machines/patterns.md) 中的原料推送到相邻的容器，并且可以将物品插入其中以将它们输入网络。
通常可以通过将机器的输出管道输送回附近的样板供应器（通常是推送原料的那个）来节省一个频道，
而不是使用 <ItemLink id="import_bus" /> 将机器的输出拉入网络。

值得注意的是，因为它们直接从合成 CPU 中的 [合成存储器](../items-blocks-machines/crafting_cpu_multiblock.md#crafting-storage) 推送原料，
所以它们的库存中实际上从未包含原料，因此你无法从它们那里管道输出。你必须让供应器推送
到另一个容器（如木桶），然后再从那里面管道输出。

还需要注意的是，供应器必须一次性推送**所有**原料，它不能推送半批次。这是可以
利用的特性。

样板供应器与 [子网络](../ae2-mechanics/subnetworks.md) 上的接口有特殊的交互：如果接口未修改（请求槽中没有任何东西），
供应器将完全跳过接口，直接推送到该子网络的 [存储](../ae2-mechanics/import-export-storage.md) 中，
跳过接口且不填充配方批次，更重要的是，直到存储空间有空位才会插入下一批次。

支持多个拥有相同样板的样板供应器并行工作。

样板供应器将尝试将其批次轮询分发到其所有面，从而并行使用所有连接的机器。

## 变体

样板供应器有 3 种不同的变体：普通、定向和面板。这影响它们推送原料、接收输入以及提供网络连接的具体侧面。

*   普通样板供应器向所有侧面推送原料，从所有侧面接收输入，并且像大多数 AE2 机器一样，
    像线缆一样向所有侧面提供网络连接。

*   定向样板供应器是通过对普通样板供应器使用 <ItemLink id="certus_quartz_wrench" /> (赛特斯石英扳手) 来改变其
    方向制成的。它们只向选定的侧面推送原料，从所有侧面接收输入，并且**特别不**在选定的侧面提供网络
    连接。这允许它们向 AE2 机器推送而不连接网络，如果你想制作子网络的话。

*   面板样板供应器是一个 [线缆子部件](../ae2-mechanics/cable-subparts.md)，因此可以在同一根线缆上放置多个，从而实现紧凑的设置。
    它们的行为类似于定向样板供应器的选定侧面，提供样板，接收输入，并且**不**在其表面提供网络连接。

样板供应器可以在合成网格中在普通和面板之间切换。

## 设置

样板供应器有多种模式：

*   **阻塞模式 (Blocking Mode)**：如果机器中已有原料，则阻止供应器推送新的一批
    原料。
*   **锁定合成 (Lock Crafting)**：可以在各种红石条件下锁定供应器，或者直到
    上一次合成的结果被插入到该特定样板供应器中。
*   供应器可以在 <ItemLink id="pattern_access_terminal" /> (样板终端) 上显示或隐藏。

## 优先级

可以通过点击 GUI 右上角的扳手来设置优先级。如果同一个物品有几个 [样板](../items-blocks-machines/patterns.md)，
除非网络中没有较高优先级样板所需的原料，否则将优先使用较高优先级供应器中的样板，而非较低优先级的。

# 分子装配室 (Molecular Assemblers)

<BlockImage id="molecular_assembler" scale="4" />

<ItemLink id="molecular_assembler" /> 接收输入的物品并执行相邻 <ItemLink id="pattern_provider" /> 定义的操作，
或者插入的 <ItemLink id="crafting_pattern" />、<ItemLink id="smithing_table_pattern" /> 或 <ItemLink id="stonecutting_pattern" />，
然后将结果通过推送到相邻容器。

它们的主要用途是放在 <ItemLink id="pattern_provider" /> 旁边。在这种情况下，样板供应器具有特殊的行为，
会将相关样板的信息连同原料一起发送到相邻的装配室。由于装配室会自动将合成结果
弹出到相邻的容器中（从而进入样板供应器的返回槽），因此样板供应器上的装配室
就是自动化合成样板所需的全部。

<GameScene zoom="4" background="transparent">
<ImportStructure src="../assets/assemblies/assembler_tower.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>
