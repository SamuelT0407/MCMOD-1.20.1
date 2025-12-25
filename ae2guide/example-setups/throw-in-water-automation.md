---
navigation:
  parent: example-setups/example-setups-index.md
  title: 投入水中自动化
  icon: fluix_crystal
---

# 投入水中配方的自动化 (Automation of Throwing In Water recipes)

请注意，由于这使用了 <ItemLink id="pattern_provider" />，它是为了集成到你的 [自动合成](../ae2-mechanics/autocrafting.md)
设置中。

有些配方需要将物品投入水中（虽然类似的设置可以用来将物品投入其他地方）。
这可以通过 <ItemLink id="formation_plane" />、<ItemLink id="annihilation_plane" /> 和一些支持
基础设施（也就是 2 个修改过的 [管道子网络](pipe-subnet.md)）来自动化。

此设置旨在与 [充能器自动化](charger-automation.md) 结合使用，以提供 <ItemLink id="charged_certus_quartz_crystal" />。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/throw_in_water.snbt" />

<BoxAnnotation color="#dddddd" min="2 0 1" max="3 1 2">
        (1) 样板供应器：默认配置，带有相关的处理样板。

        ![福鲁伊克斯样板](../assets/diagrams/fluix_pattern_small.png) ![有瑕母岩样板](../assets/diagrams/flawed_budding_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1.7 0 1" max="2 1 2">
        (2) 接口：默认配置。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 .7 1" max="2 1 2">
        (3) 成型面板：设置为以物品形式掉落输入。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 2 1" max="2 2.3 2">
        (4) 破坏面板：没有 GUI 可配置。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 1 1" max="3 1.3 2">
        (5) 存储总线：过滤为样板的输出
        <Row><ItemImage id="fluix_crystal" scale="2" /><BlockImage id="flawless_budding_quartz" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="3.9 0.5 1.5" color="#00ff00">
        连接到主网络和充能器自动化
        <GameScene zoom="3" background="transparent">
          <ImportStructure src="../assets/assemblies/charger_automation.snbt" />
          <IsometricCamera yaw="195" pitch="30" />
        </GameScene>
    </DiamondAnnotation>

  <IsometricCamera yaw="180" pitch="0" />
</GameScene>

## 配置和样板 (Configurations and Patterns)

* <ItemLink id="pattern_provider" /> (1) 处于默认配置，带有相关的 <ItemLink id="processing_pattern" />
  * 对于 <ItemLink id="fluix_crystal" />，JEI/REI 的默认配方就可以：

    ![福鲁伊克斯样板](../assets/diagrams/fluix_pattern.png)

  * 对于 <ItemLink id="flawed_budding_quartz" />，最好直接从 <ItemLink id="quartz_block" /> 制作，
    这避免了一个配方的输入是另一个配方的输出的问题，导致存储总线无法过滤：

    ![有瑕母岩样板](../assets/diagrams/flawed_budding_pattern.png)

* <ItemLink id="interface" /> (2) 处于默认配置。
* <ItemLink id="formation_plane" /> (3) 设置为以物品形式掉落输入。
* <ItemLink id="annihilation_plane" /> (4) 没有 GUI 且无法配置。
* <ItemLink id="storage_bus" /> (5) 过滤为样板的输出。

## 运作原理 (How It Works)

1. <ItemLink id="pattern_provider" /> 将原料推入其侧面的 <ItemLink id="interface" />，在绿色子网络上
2. 接口（默认配置为不存储任何东西）尝试将其内容推入 [网络存储](../ae2-mechanics/import-export-storage.md)
3. 绿色子网络上唯一的存储是 <ItemLink id="formation_plane" />，它将接收到的物品掉入水中
4. 橙色子网络上的 <ItemLink id="annihilation_plane" /> 尝试捡起刚刚掉落的物品，但不能，因为
    样板供应器顶部的 <ItemLink id="storage_bus" />（橙色子网络上唯一的存储）过滤为只接受可能的合成结果
5. 物品在世界中进行转换。
6. 破坏面板现在可以捡起它面前的物品，因为存储总线允许存储它们。
7. 存储总线将结果物品存储在样板供应器中，经其返回到网络。
