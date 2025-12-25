---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 终端
  icon: crafting_terminal
  position: 210
categories:
- devices
item_ids:
- ae2:terminal
- ae2:crafting_terminal
- ae2:pattern_encoding_terminal
- ae2:pattern_access_terminal
---

# 终端 (Terminals)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/terminals.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

虽然 <ItemLink id="pattern_provider" />、<ItemLink id="import_bus" />、<ItemLink id="storage_bus" /> 等
是 AE2 网络与世界交互的主要方式，但终端是 AE2
网络与 *你* 交互的主要方式。有几种具有不同功能的变体。

终端将继承它们安装在其上的 [线缆](cables.md) 的颜色。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

## 终端放置 (Terminal Placement)

由于终端通常是某人可能放置的第一个 [子部件](../ae2-mechanics/cable-subparts.md)，
人们经常弄错并将终端放反。以下是关于做什么和不做什么的示例：

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/terminal_placement.snbt" />
  <IsometricCamera yaw="195" pitch="30" />

  <LineAnnotation color="#ff3333" from="2.5 .5 .5" to="4.5 2.5 .5" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#ff3333" from="2.5 2.5 .5" to="4.5 .5 .5" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#33ff33" from="-.5 2.5 .5" to="1 .5 .5" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1 .5 .5" to="1.5 1 .5" alwaysOnTop={true} thickness="0.05"/>
</GameScene>

你仍然有一个终端和一个能源接收器，只是现在终端方向正确，并且实际上
连接到了网络，而且这也适应了更小的空间。

<a name="terminal-ui"></a>

# 终端 (Terminal)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/blocks/terminal.snbt" />
  <IsometricCamera yaw="180" />
</GameScene>

你的基本终端，允许你查看和访问 [网络存储](../ae2-mechanics/import-export-storage.md) 的内容
并从你的 [自动合成](../ae2-mechanics/autocrafting.md) 设置中请求东西。

## UI (The UI)

基本终端的 UI 有几个部分

中心部分允许访问你网络的存储。你可以把东西放进去和拿出来。有几个
鼠标/键快捷方式：

*   左键单击抓取一组，右键单击抓取半组。
*   如果物品或流体等能够被 [自动合成](../ae2-mechanics/autocrafting.md)，
    你绑定到“选取方块”的任何键（通常是中键）都会弹出一个 UI 来指定要合成的数量。你也可以输入像 `3*64/2` 这样的公式，
    或输入 `=32` 以仅合成达到存储中 32 所需的物品数量。
*   按住 Shift 将冻结显示的物品位置，阻止它们在数量变化或新物品进入系统时重新组织自己。
*   用桶或其他流体容器右键单击将存入流体，在终端中用空流体容器左键单击流体
    将取出流体。

左侧部分有设置按钮：

*   按不同属性排序，如名称、模组和数量
*   查看已存储、可合成或两者
*   查看物品、流体或两者
*   更改排序顺序
*   打开详细的终端设置窗口
*   更改终端 UI 的高度

右侧有 <ItemLink id="view_cell" /> 的插槽

中心部分的右上角（锤子按钮）弹出 [自动合成](../ae2-mechanics/autocrafting.md) 状态
UI，允许你查看自动合成的进度以及每个 [合成 CPU](crafting_cpu_multiblock.md) 在做什么。

## 配方 (Recipe)

<RecipeFor id="terminal" />

<a name="crafting-terminal-ui"></a>

# 合成终端 (Crafting Terminal)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/blocks/crafting_terminal.snbt" />
  <IsometricCamera yaw="180" />
</GameScene>

合成终端类似于普通终端，具有所有相同的设置和部分，但增加了一个合成网格，该网格将自动
从 [网络存储](../ae2-mechanics/import-export-storage.md) 中重新填充。Shift 单击输出时要小心！

你应该尽快将你的终端升级为合成终端。

## UI (The UI)

合成终端具有与普通终端相同的 UI，但在中间增加了一个合成网格。

有 2 个额外的按钮，用于将合成网格清空到网络存储或你的库存中。

## 配方 (Recipe)

<RecipeFor id="crafting_terminal" />

<a name="pattern-encoding-terminal-ui"></a>

# 样板编码终端 (Pattern Encoding Terminal)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/blocks/pattern_encoding_terminal.snbt" />
  <IsometricCamera yaw="180" />
</GameScene>

样板编码终端类似于普通终端，具有所有相同的设置和部分，但增加了一个
[样板](patterns.md) 编码接口。它看起来类似于合成终端的 UI，但此合成网格实际上并不
执行合成。

除了合成终端之外，你还应该有一个这个。

## UI (The UI)

合成终端具有与普通终端相同的 UI，增加了 [样板](patterns.md) 编码接口。

样板编码接口有几个部分：

一个插入 <ItemLink id="blank_pattern" /> 的插槽。

一个编码样板的大箭头。

一个已编码样板的插槽。将已经编码的样板放入此插槽以进行编辑，然后单击“编码”箭头。

右侧有 4 个选项卡，用于在以下类型之间切换要编码的样板类型

*   合成
*   处理
*   锻造
*   切石

中央 UI 根据要编码的样板类型而变化：

*   在合成模式下：
    *   在 JEI/REI 中左键单击或从中拖动原料以形成配方。右键单击以移除原料。
    *   启用替换允许诸如用任何木板类型制作木棍之类的操作。这应该仅在
        绝对必要时使用。
    *   流体替换允许使用存储的流体代替桶装流体。
    *   你也可以直接从 JEI/REI 配方屏幕编码样板。

*   在处理模式下：
    * 在 JEI/REI 中左键单击或右键单击或从中拖动原料以指定配方的输入和输出。
    * 用流体容器（如桶或流体储罐）右键单击以将该流体设置为原料，而不是桶或储罐物品。
    * 拿着一组物品时，左键单击放置整组，右键单击放置一个物品。在现有的原料组上左键单击以
        移除整组，右键单击以将组减少 1。你绑定到“选取方块”的任何键（通常是中键）
        允许你指定物品或流体的精确数量。
    * 输出插槽有一个主要输出和空间用于你可能希望自动合成算法知道的任何次要输出。
    * 输入和输出插槽都滚动，所以你可以有 81 种不同的原料和 26 种次要输出
    * 你也可以直接从 JEI/REI 配方屏幕编码样板。

*   锻造和切石模式 UI 分别类似于锻造台和切石机。

## 配方 (Recipe)

<RecipeFor id="pattern_encoding_terminal" />

<a name="pattern-access-terminal-ui"></a>

# 样板访问终端 (Pattern Access Terminal)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/blocks/pattern_access_terminal.snbt" />
  <IsometricCamera yaw="180" />
</GameScene>

样板访问终端用于解决一个特定问题：在密集的 <ItemLink id="pattern_provider" />
和 <ItemLink id="molecular_assembler" /> 塔中，你无法物理访问供应器以插入新样板。此外，
也许你很懒，不想穿过基地去插入 [样板](patterns.md)。样板访问终端
允许访问网络上的所有样板供应器。

## UI (The UI)

此终端具有与所有其他终端不同的 UI。

它有终端高度和显示哪些样板供应器的设置。

终端中的每一行对应一个特定的样板供应器。

终端中的样板供应器按它们连接的方块或你给它们的名称（在铁砧中或
使用 <ItemLink id="name_press" />）排序。

## 配方 (Recipe)

<RecipeFor id="pattern_access_terminal" />
