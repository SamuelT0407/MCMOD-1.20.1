---
navigation:
  parent: example-setups/example-setups-index.md
  title: 熔炉自动化
  icon: minecraft:furnace
---

# 熔炉自动化 (Furnace Automation)

请注意，由于这使用了 <ItemLink id="pattern_provider" />，它是为了集成到你的 [自动合成](../ae2-mechanics/autocrafting.md) 设置中。
如果你只想独立自动化一个熔炉，请使用漏斗和箱子之类的东西。

<ItemLink id="minecraft:furnace" /> 的自动化比 [充能器](../example-setups/charger-automation.md) 等简单机器的自动化要复杂一些。
熔炉需要从两个不同的面输入，并从第三个面提取。待冶炼的物品必须从顶部推入，
燃料必须从侧面推入，结果必须从底部拉出。

这可以通过顶部的 <ItemLink id="pattern_provider" />，侧面不断推入燃料的 <ItemLink id="export_bus" />，以及底部将结果导入网络的 <ItemLink id="import_bus" /> 来完成。
然而，这使用了 3 个 [频道](../ae2-mechanics/channels.md)。

以下是如何只用 1 个频道做到这一点：

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/furnace_automation.snbt" />

<BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (1) 样板供应器：定向变体，通过使用赛特斯石英扳手，带有相关的处理样板。

        ![铁锭样板](../assets/diagrams/furnace_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (2) 接口：默认配置。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="1.3 2 1">
        (3) 存储总线 #1：过滤为煤炭。
        <ItemImage id="minecraft:coal" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 2 0" max="1 2.3 1">
        (4) 存储总线 #2：使用反相卡过滤为黑名单煤炭。
        <Row><ItemImage id="minecraft:coal" scale="2" /><ItemImage id="inverter_card" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="pattern_provider" /> (1) 处于默认配置，带有相关的 <ItemLink id="processing_pattern" /> (处理样板)。
    通过对它使用 <ItemLink id="certus_quartz_wrench" /> 使其具有方向性。

  ![铁锭样板](../assets/diagrams/furnace_pattern.png)

* <ItemLink id="interface" /> (2) 处于默认配置。
* 第一个 <ItemLink id="storage_bus" /> (3) 过滤为煤炭，或者你想使用的任何燃料。
* 第二个 <ItemLink id="storage_bus" /> (4) 使用 <ItemLink id="inverter_card" /> 过滤为黑名单煤炭。

## 运作原理 (How It Works)

1. <ItemLink id="pattern_provider" /> 将原料推入 <ItemLink id="interface" />。
   （实际上，作为一个优化，它直接通过存储总线推送，就好像它们是供应器面的延伸一样。物品实际上从未进入接口。）
2. 接口被设置为不存储任何东西，所以它试图将原料推入 [网络存储](../ae2-mechanics/import-export-storage.md)。
3. 绿色子网络上唯一的存储是 <ItemLink id="storage_bus" /> (存储总线)。过滤为煤炭的总线通过侧面将煤炭放入熔炉的燃料槽。
    过滤为非煤炭的总线将待冶炼的物品通过顶面放入顶部槽位。
4. 熔炉做它的熔炉工作。
5. 漏斗将结果从熔炉底部拉出，并将其放入供应器的返回槽中，将其返回到主网络。
