---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 合成 CPU 多方块结构 (存储, 协处理器, 监控器, 单元)
  icon: 1k_crafting_storage
  position: 210
categories:
- devices
item_ids:
- ae2:1k_crafting_storage
- ae2:4k_crafting_storage
- ae2:16k_crafting_storage
- ae2:64k_crafting_storage
- ae2:256k_crafting_storage
- ae2:crafting_accelerator
- ae2:crafting_monitor
- ae2:crafting_unit
---

# 合成 CPU (The Crafting CPU)

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/crafting_cpus.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<Row>
  <BlockImage id="1k_crafting_storage" scale="4" />

  <BlockImage id="crafting_accelerator" scale="4" />

  <BlockImage id="crafting_monitor" scale="4" />

  <BlockImage id="crafting_unit" scale="4" />
</Row>

合成 CPU 管理合成请求/作业。它们在执行多步骤合成作业时存储中间原料，
并影响作业的大小，以及在某种程度上影响它们的完成速度。有关详细信息，请参阅 [自动合成](../ae2-mechanics/autocrafting.md)。

每个合成 CPU 处理 1 个请求或作业，因此如果你想同时请求一个运算处理器和 256 个平滑石，你需要 2 个 CPU 多方块结构。

它们可以设置为处理来自玩家、自动化（<ItemLink id="export_bus" /> 和接口）或两者的请求。

右键单击一个会打开一个合成状态 UI，你可以在其中检查 CPU 正在处理的合成作业的进度。

## 设置 (Settings)

*   CPU 可以设置为仅接受来自玩家、仅自动化（如带有 <ItemLink id="crafting_card" /> 的 <ItemLink id="export_bus" />），或两者的请求。

## 建造 (Construction)

合成 CPU 是多方块结构，必须是没有间隙的实心矩形棱柱。它们由几个组件组成。

每个 CPU 必须包含至少 1 个合成存储方块（事实上，最小的可行 CPU 只是一个 1k 合成存储）。

# 合成单元 (Crafting Unit)

<BlockImage id="crafting_unit" scale="4" />

（可选）如果你没有足够的其他组件，合成单元只是填充 CPU 中的空间，使其成为其实心矩形棱柱。
它们也是其他组件的基础原料。

<RecipeFor id="crafting_unit" />

# 合成存储 (Crafting Storage)

<Row>
  <BlockImage id="1k_crafting_storage" scale="4" />

  <BlockImage id="4k_crafting_storage" scale="4" />

  <BlockImage id="16k_crafting_storage" scale="4" />

  <BlockImage id="64k_crafting_storage" scale="4" />

  <BlockImage id="256k_crafting_storage" scale="4" />
</Row>

（必需）合成存储有所有标准元件大小（1k, 4k, 16k, 64k, 256k）。它们存储合成中涉及的原料和
中间原料，因此 CPU 处理具有更多原料的合成作业
需要更大或更多的存储。

<Column>
  <Row>
    <RecipeFor id="1k_crafting_storage" />

    <RecipeFor id="4k_crafting_storage" />

    <RecipeFor id="16k_crafting_storage" />
  </Row>

  <Row>
    <RecipeFor id="64k_crafting_storage" />

    <RecipeFor id="256k_crafting_storage" />
  </Row>
</Column>

# 并行处理单元 (Crafting Co-Processing Unit)

<BlockImage id="crafting_accelerator" scale="4" />

（可选）并行处理单元使系统更频繁地从 <ItemLink id="pattern_provider" /> 发送原料批次。
这使它们能够跟上处理速度快的机器。这方面的一个例子是被 <ItemLink id="molecular_assembler" /> 包围的样板供应器，
它能够比单个装配室更快地推送原料，从而
在周围的装配室之间分配原料批次。

<RecipeFor id="crafting_accelerator" />

# 合成监控器 (Crafting Monitor)

<BlockImage id="crafting_monitor" scale="4" />

（可选）合成监控器显示 CPU 目前正在处理的作业。
屏幕可以用 <ItemLink id="color_applicator" /> 着色。

<RecipeFor id="crafting_monitor" />
