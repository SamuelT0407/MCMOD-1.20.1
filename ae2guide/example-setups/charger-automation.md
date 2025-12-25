---
navigation:
  parent: example-setups/example-setups-index.md
  title: 充能器自动化
  icon: charger
---

# 充能器自动化 (Charger Automation)

请注意，由于这使用了 <ItemLink id="pattern_provider" />，它是为了集成到你的 [自动合成](../ae2-mechanics/autocrafting.md) 设置中。
如果你只想独立自动化一个 <ItemLink id="charger" />，请使用漏斗和箱子之类的东西。

<ItemLink id="charger" /> 的自动化相当简单。一个 <ItemLink id="pattern_provider" /> 将原料推入充能器，然后 [管道子网络](pipe-subnet.md)
或其他物品管道将结果推回供应器。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/charger_automation.snbt" />

<BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (1) 样板供应器：默认配置，带有相关的处理样板。同时也为充能器供电。

        ![充能器样板](../assets/diagrams/charger_pattern_small.png)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 0" max="1 1.3 1">
        (2) 输入总线：默认配置。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (3) 存储总线：默认配置。
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="pattern_provider" /> (1) 处于默认配置，带有相关的 <ItemLink id="processing_pattern" /> (处理样板)。
  它也为 <ItemLink id="charger" /> 提供 [能量](../ae2-mechanics/energy.md)，因为它的作用就像 [线缆](../items-blocks-machines/cables.md)。

    ![充能器样板](../assets/diagrams/charger_pattern.png)

* <ItemLink id="import_bus" /> (2) 处于默认配置。
* <ItemLink id="storage_bus" /> (3) 处于默认配置。

## 运作原理 (How It Works)

1. <ItemLink id="pattern_provider" /> 将原料推入 <ItemLink id="charger" />。
2. 充能器执行它的充能工作。
3. 绿色子网络上的 <ItemLink id="import_bus" /> 将结果从充能器中拉出，并尝试将其存储在
   [网络存储](../ae2-mechanics/import-export-storage.md) 中。
4. 绿色子网络上唯一的存储是 <ItemLink id="storage_bus" />，它将结果物品存储在样板供应器中，将其返回到主网络。
