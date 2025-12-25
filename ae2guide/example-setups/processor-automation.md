---
navigation:
  parent: example-setups/example-setups-index.md
  title: 处理器自动化
  icon: inscriber
---

# 处理器生产的自动化 (Automation of Processor Production)

自动化 [处理器](../items-blocks-machines/processors.md) 的方法有很多，这就是其中之一。

这种通用布局可以使用任何类型的物品物流管道或导管或模组称呼的任何东西来完成，只要你能过滤它。

![流程图](../assets/diagrams/processor_flow_diagram.png)

这里详细介绍了如何仅使用 AE2，使用 ["管道"子网络](pipe-subnet.md) 来完成它。

请注意，由于这使用了 <ItemLink id="pattern_provider" />，它是为了集成到你的 [自动合成](../ae2-mechanics/autocrafting.md)
设置中。如果你只想独立自动化处理器，请将样板供应器替换为另一个桶，并将原料直接放入上面的桶中。

这恰好向后兼容以前的 AE2 版本，因为即使 <ItemLink id="inscriber" /> 是有面的，管道子网络仍然可以插入到正确的面
并从正确的面提取。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/processor_automation.snbt" />

  <BoxAnnotation color="#dddddd" min="5 1 0" max="6 2 1" thickness=".05">
        (1) 样板供应器：默认配置，带有相关的处理样板。

        <Row>
            ![逻辑样板](../assets/diagrams/logic_pattern_small.png)
            ![运算样板](../assets/diagrams/calculation_pattern_small.png)
            ![工程样板](../assets/diagrams/engineering_pattern_small.png)
        </Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4.7 2 0" max="5 3 1" thickness=".05">
        (2) 存储总线 #1：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 1 0" max="4.3 2 1" thickness=".05">
        (3) 输出总线 #1：过滤为硅，有 2 张加速卡
        <Row><ItemImage id="silicon" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 4 0" max="4.3 3 1" thickness=".05">
        (4) 输出总线 #2：过滤为金锭，有 2 张加速卡
        <Row><ItemImage id="minecraft:gold_ingot" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 5 0" max="4.3 4 1" thickness=".05">
        (5) 输出总线 #3：过滤为赛特斯石英水晶，有 2 张加速卡
        <Row><ItemImage id="certus_quartz_crystal" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 6 0" max="4.3 5 1" thickness=".05">
        (6) 输出总线 #4：过滤为钻石，有 2 张加速卡
        <Row><ItemImage id="minecraft:diamond" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 3 0" max="2 2 1" thickness=".05">
        (7) 输出总线 #5：过滤为红石粉，有 2 张加速卡
        <Row><ItemImage id="minecraft:redstone" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 1 0" max="3 2 1" thickness=".05">
        (8) 压印器 #1：默认配置。有一个硅压印模板和 4 张加速卡
        <Row><ItemImage id="silicon_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 3 0" max="3 4 1" thickness=".05">
        (9) 压印器 #2：默认配置。有一个逻辑压印模板和 4 张加速卡
        <Row><ItemImage id="logic_processor_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 4 0" max="3 5 1" thickness=".05">
        (10) 压印器 #3：默认配置。有一个运算压印模板和 4 张加速卡
        <Row><ItemImage id="calculation_processor_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 5 0" max="3 6 1" thickness=".05">
        (11) 压印器 #4：默认配置。有一个工程压印模板和 4 张加速卡
        <Row><ItemImage id="engineering_processor_press" scale="2" /> <ItemImage id="speed_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 2 0" max="1 3 1" thickness=".05">
        (12) 压印器 #5：默认配置。有 4 张加速卡
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 2 0" max="3 1 1" thickness=".05">
        (13) 输入总线 #1：默认配置，有 2 张加速卡
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 4 0" max="3 3 1" thickness=".05">
        (14) 输入总线 #2：默认配置，有 2 张加速卡
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 5 0" max="3 4 1" thickness=".05">
        (15) 输入总线 #3：默认配置，有 2 张加速卡
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 6 0" max="3 5 1" thickness=".05">
        (16) 输入总线 #4：默认配置，有 2 张加速卡
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 3 0" max="1 3.3 1" thickness=".05">
        (17) 存储总线 #2：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 1.7 0" max="1 2 1" thickness=".05">
        (18) 存储总线 #3：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 0" max="0.7 3 1" thickness=".05">
        (19) 输入总线 #5：默认配置，有 2 张加速卡
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="5 0.7 0" max="6 1 1" thickness=".05">
        (20) 存储总线 #4：默认配置。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.3 2.7 0.3" max="3.7 3 0.7" thickness=".05">
        石英纤维为所有 3 个压印器供电，因为压印器的作用就像线缆，因此可以传输能量
  </BoxAnnotation>

<DiamondAnnotation pos="7 1.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="185" pitch="5" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="pattern_provider" /> (1) 处于默认配置，带有相关的 <ItemLink id="processing_pattern" /> 处理样板。

  ![逻辑样板](../assets/diagrams/logic_pattern.png)
  ![运算样板](../assets/diagrams/calculation_pattern.png)
  ![工程样板](../assets/diagrams/engineering_pattern.png)

* <ItemLink id="storage_bus" /> (2, 17, 18, 20) 处于默认配置。
* <ItemLink id="export_bus" /> (3-7) 过滤为相关原料。它们有 2 张 <ItemLink id="speed_card" />。
    <Row>
      <ItemImage id="silicon" scale="2" />
      <ItemImage id="minecraft:gold_ingot" scale="2" />
      <ItemImage id="certus_quartz_crystal" scale="2" />
      <ItemImage id="minecraft:diamond" scale="2" />
      <ItemImage id="minecraft:redstone" scale="2" />
    </Row>
* <ItemLink id="import_bus" /> (13-16, 19) 处于默认配置。它们有 2 张 <ItemLink id="speed_card" />。
* <ItemLink id="inscriber" /> 处于默认配置。它们有相关的 [模板](../items-blocks-machines/presses.md)，
   和 4 张 <ItemLink id="speed_card" />。
   <Row>
     <ItemImage id="silicon_press" scale="2" />
     <ItemImage id="logic_processor_press" scale="2" />
     <ItemImage id="calculation_processor_press" scale="2" />
     <ItemImage id="engineering_processor_press" scale="2" />
   </Row>

## 运作原理 (How It Works)

1. <ItemLink id="pattern_provider" /> 将原料推入桶中。
2. 第一个 [管道子网络](pipe-subnet.md) (橙色) 将硅、红石粉和相关处理器的原料
   (金锭、赛特斯石英水晶或钻石) 从桶中拉出，并放入相关的 <ItemLink id="inscriber" /> 中。
3. 前四个 <ItemLink id="inscriber" /> 制作 <ItemLink id="printed_silicon" />，以及 <ItemLink id="printed_logic_processor" />，
   <ItemLink id="printed_calculation_processor" />，或 <ItemLink id="printed_engineering_processor" />。
4. 第二个和第三个 [管道子网络](pipe-subnet.md) (绿色) 从前四个 <ItemLink id="inscriber" /> 中取出印刷电路，
   并将其放入第五个，最终组装 <ItemLink id="inscriber" />。
5. 第五个 <ItemLink id="inscriber" /> 组装 [处理器](../items-blocks-machines/processors.md)。
6. 第四个 [管道子网络](pipe-subnet.md) (紫色) 将处理器放入样板供应器中，将其返回到主网络。
