---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 样板供应器
  icon: pattern_provider
  position: 210
categories:
- devices
item_ids:
- ae2:pattern_provider
- ae2:cable_pattern_provider
---

# 样板供应器 (The Pattern Provider)

<Row gap="20">
<BlockImage id="pattern_provider" scale="8" />
<BlockImage id="pattern_provider" p:push_direction="up" scale="8" />
<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/cable_pattern_provider.snbt" />
</GameScene>
</Row>

样板供应器是你的 [自动合成](../ae2-mechanics/autocrafting.md) 系统与世界交互的主要方式。它们将
[样板](patterns.md) 中的原料推送到相邻的库存，并且可以将物品插入其中以将其插入网络。通常
可以通过将机器的输出用管道输送回附近的样板供应器（通常是推送原料的那个）来节省一个频道，
而不是使用 <ItemLink id="import_bus" /> 将机器的输出拉入网络。

值得注意的是，由于它们直接从合成 CPU 中的 [合成存储](crafting_cpu_multiblock.md#crafting-storage) 推送原料，
它们的库存中实际上从未包含原料，因此你无法从它们中用管道抽出。你必须让供应器推送
到另一个库存（如木桶），然后从那里用管道抽出。

另外值得注意的是，供应器必须一次推送所有原料，它不能推送半批次。利用这一点
很有用。

样板供应器与 [子网络](../ae2-mechanics/subnetworks.md) 上的接口有特殊的交互：如果接口未修改（请求插槽中没有东西）
供应器将完全跳过接口并直接推送到该子网络的 [存储](../ae2-mechanics/import-export-storage.md)，
跳过接口并不用配方批次填充它，更重要的是，直到机器中有空间才插入下一批次。
这在阻塞模式下工作正常，供应器将监控机器中的插槽以获取原料，而不是接口中的插槽。

例如，此设置将把要熔炼的东西和燃料都直接推送到熔炉中的相应插槽。
你可以使用它来向机器的多个面或多个机器提供样板。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/furnace_automation.snbt" />

<BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (1) 样板供应器：定向变体，通过使用赛特斯石英扳手，具有相关的处理样板。

        ![铁样板](../assets/diagrams/furnace_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (2) 接口：处于默认配置。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="1.3 2 1">
        (3) 存储总线 #1：过滤为煤炭。
        <ItemImage id="minecraft:coal" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 2 0" max="1 2.3 1">
        (4) 存储总线 #2：过滤为黑名单煤炭，使用反相卡。
        <Row><ItemImage id="minecraft:coal" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

这是向多个机器提供样板的一般说明

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/provider_interface_storage.snbt" />

<BoxAnnotation color="#dddddd" min="2.7 0 1" max="3 1 2">
        接口（必须是面板，不是完整方块）
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 4">
        存储总线
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 0 0" max="1 1 4">
        你想要样板供应到的地方
  </BoxAnnotation>

<IsometricCamera yaw="185" pitch="30" />
</GameScene>

支持具有相同样板的多个样板供应器并并行工作。

样板供应器将尝试将其批次轮询分发到所有面，从而并行使用所有连接的机器。

## 变体 (Variants)

样板供应器有 3 种不同的变体：普通、定向和面板/[子部件](../ae2-mechanics/cable-subparts.md)。这会影响它们将原料推送
到哪个特定侧面、从哪个侧面接收物品以及提供网络连接。

*   普通样板供应器将原料推送到所有侧面，从所有侧面接收输入，并且像大多数 AE2 机器一样，充当
    向所有侧面提供网络连接的线缆。

*   定向样板供应器是通过在普通样板供应器上使用 <ItemLink id="certus_quartz_wrench" /> 来改变其
    方向制成的。它们仅将原料推送到选定的侧面，从所有侧面接收输入，并且明确不在选定的侧面上提供网络
    连接。这允许它们推送到 AE2 机器而不连接网络，如果你想制作子网络的话。

*   面板样板供应器是 [线缆子部件](../ae2-mechanics/cable-subparts.md)，因此多个可以放置在同一根线缆上，允许紧凑的设置。
    它们的行为类似于定向样板供应器上的选定侧面，提供样板，接收输入，并且 **不**
    在其面上提供网络连接。

样板供应器可以在工作台中在普通和面板之间切换。

## 设置 (Settings)

样板供应器有多种模式：

*   **阻塞模式** 如果机器中已经有原料，则阻止供应器推送新的一批
    原料。
*   **锁定合成** 可以在各种红石条件下锁定供应器，或者直到
    上一次合成的结果被插入到该特定样板供应器中。
*   供应器可以在 <ItemLink id="pattern_access_terminal" /> 上显示或隐藏。

## 优先级 (Priority)

可以通过单击 GUI 右上角的扳手来设置优先级。如果有几个相同物品的 [样板](patterns.md)，
优先级较高的供应器中的样板将优先于优先级较低的供应器中的样板使用，
除非网络没有高优先级样板的原料。

## 一个常见的误解 (A Common Misconception)

由于某种原因，人们一直在这样做，我不明白为什么，但我把它放在这里希望能有所帮助。（也许
人们误以为 <ItemLink id="export_bus" /> 是东西离开网络的唯一方式，不知道
样板供应器也可以导出东西）

这将不会做你想做的事。正如在 [线缆](cables.md) 中提到的，线缆不是物品管道，它们没有内部
库存，供应器不会推入它们。

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/assemblies/provider_misconception_1.snbt" />

  <BoxAnnotation color="#dddddd" min="1 0 3" max="2 1 4">
        不是高炉
  </BoxAnnotation>

  <IsometricCamera yaw="95" pitch="5" />
</GameScene>

由于供应器没有任何东西可以推送，它将
无法运行。它在这里所做的只是像线缆一样，将 <ItemLink id="export_bus" /> 连接到
网络。

供应器也不会以某种方式告诉 <ItemLink id="export_bus" /> 要导出什么，输出总线只会导出
你在其过滤器中放入的所有内容。

我们在这里所做的本质上是这样的：

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/assemblies/provider_misconception_2.snbt" />

  <BoxAnnotation color="#dddddd" min="1 0 3" max="2 1 4">
        不是高炉
  </BoxAnnotation>

  <IsometricCamera yaw="95" pitch="5" />
</GameScene>

你实际上想要制作的可能是这个，样板供应器可以将样板的内容导出到
相邻的机器：

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/assemblies/provider_misconception_3.snbt" />

  <BoxAnnotation color="#dddddd" min="1 0 3" max="2 1 4">
        不是高炉
  </BoxAnnotation>

  <IsometricCamera yaw="95" pitch="5" />
</GameScene>

## 配方 (Recipes)

<RecipeFor id="pattern_provider" />

<RecipeFor id="cable_pattern_provider" />
