---
navigation:
  parent: example-setups/example-setups-index.md
  title: 发信器自动补货
  icon: level_emitter
---

# 发信器自动补货 (Level Emitter Autostocking)

有人可能会问“我如何保持一定数量的物品库存，并根据需要制作更多？”

一种解决方案是使用 <ItemLink id="export_bus" />、<ItemLink id="level_emitter" /> 和 <ItemLink id="crafting_card" /> 自动从你的网络的 [自动合成](../ae2-mechanics/autocrafting.md) 中请求新物品。
这种设置适合维持大量的一种物品。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/level_emitter_autostocking.snbt" />

  <BoxAnnotation color="#dddddd" min="1 1 0" max="2 1.3 1">
        (1) 输出总线：过滤为所需物品。装有红石卡和合成卡。红石模式设置为
        “有信号时激活”，合成行为设置为“不使用库存物品”。
        <Row><ItemImage id="redstone_card" scale="2" /> <ItemImage id="crafting_card" scale="2" /></Row>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0.7 1 0" max="1 2 1">
        (2) 发信器：配置为所需物品和数量，设置为“当低于限制时发出信号”。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 0 0" max="2 1 1">
        (3) 接口：默认配置。
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="export_bus" /> (1) 过滤为所需物品。它装有一张 <ItemLink id="redstone_card" /> 和 <ItemLink id="crafting_card" />。
  “红石模式”设置为“有信号时激活”，“合成行为”设置为“不使用库存物品”。
* <ItemLink id="level_emitter" /> (2) 配置为所需物品和数量，并设置为“当低于限制时发出信号”。
* <ItemLink id="interface" /> (3) 处于默认配置。

## 运作原理 (How It Works)

1. 如果 [网络存储](../ae2-mechanics/import-export-storage.md) 中所需物品的数量低于 <ItemLink id="level_emitter" /> 中指定的数量，它将发出红石信号。
2. 收到红石信号后（并且由于 <ItemLink id="crafting_card" /> 且设置为不使用库存物品），
   <ItemLink id="export_bus" /> 将请求网络的 [自动合成](../ae2-mechanics/autocrafting.md) 制作
   更多所需物品，然后导出它。
3. 当物品被推入其中（并没有配置为在其内部库存中拥有任何东西）后，<ItemLink id="interface" /> 将把该物品推入网络存储。
