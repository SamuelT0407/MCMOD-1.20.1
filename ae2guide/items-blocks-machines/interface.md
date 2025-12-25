---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: M E接口
  icon: interface
  position: 210
categories:
- devices
item_ids:
- ae2:interface
- ae2:cable_interface
---

# ME 接口 (The Interface)

<Row gap="20">
<BlockImage id="interface" scale="8" />
<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/cable_interface.snbt" />
</GameScene>
</Row>

接口的作用就像一个小箱子和流体储罐，根据你设置它在其插槽中保持的库存，
从 [网络存储](../ae2-mechanics/import-export-storage.md) 填充自己并清空到网络存储。它试图在单个游戏刻中完成此操作，因此它可以在每个游戏刻
填充或清空最多 9 组，如果你有快速物品管道，这是一中快速的导入或导出方法。

另一个有用的特性是，虽然大多数流体储罐只能存储 1 种类型的流体，但接口可以存储多达 9 种，以及物品。
它们本质上只是具有一些额外功能的箱子/多流体储罐，你可以通过保持
它们不连接到任何网络来防止这种额外功能。
因此，在你想存储少量各种不同东西的一些利基情况下，它们很有用。

## 接口内部如何工作 (How An Interface Works Internally)

如前所述，接口本质上是一个箱子/储罐，带有一些超级 <ItemLink id="import_bus" /> 和
<ItemLink id="export_bus" />，以及一堆 <ItemLink id="level_emitter" />。

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_internals.snbt" />

  <BoxAnnotation color="#dddddd" min="1.3 0.3 1.3" max="9.7 1 1.7">
        一堆发信器控制请求的库存数量
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/level_emitter.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 4 1.3" max="9.7 4.7 1.7">
        一堆发信器控制请求的库存数量
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/level_emitter.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 1.3 1.3" max="9.7 2 1.7">
        一堆每个游戏刻可以传输 1 组的超级输入总线
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/import_bus.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 3 1.3" max="9.7 3.7 1.7">
        一堆每个游戏刻可以传输 1 组的超级输出总线
        <GameScene zoom="4" background="transparent">
        <ImportStructure src="../assets/blocks/export_bus.snbt" />
        </GameScene>
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 1" max="10 3 2">
        9 个独立的内部插槽
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="15" />
</GameScene>

## 特殊交互 (Special Interactions)

接口与其他 AE2 [设备](../ae2-mechanics/devices.md) 也有一些特殊功能：

未配置接口上的 <ItemLink id="storage_bus" /> 将把其网络的整个 [网络存储](../ae2-mechanics/import-export-storage.md)
呈现给存储总线的网络，就好像接口的网络是存储总线放置在其上的一个大箱子一样。
设置要在接口过滤器插槽中存储的物品会禁用此功能。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_storage.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

样板供应器与 [子网络](../ae2-mechanics/subnetworks.md) 上的接口有特殊的交互：如果接口未配置
供应器将完全跳过接口并直接推送到该子网络的 [存储](../ae2-mechanics/import-export-storage.md)，
跳过接口并不用配方批次填充它，更重要的是，直到存储中有空间才插入下一批次。

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/provider_interface_storage.snbt" />

<BoxAnnotation color="#dddddd" min="2.7 0 1" max="3 1 2">
        接口（必须是面板，不是完整方块）
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 4">
        存储总线
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 0 0" max="1 1 4">
        你想要样板供应到的地方（多个机器，或 1 个机器的多个面）
  </BoxAnnotation>

<IsometricCamera yaw="185" pitch="30" />
</GameScene>

## 变体 (Variants)

接口有 2 种不同的变体：普通和面板/[子部件](../ae2-mechanics/cable-subparts.md)。这会影响可以从哪些特定侧面访问其库存
以及它们提供网络连接。

*   普通接口允许从所有侧面推送到、拉取和访问其库存，并且像大多数 AE2 机器一样，充当
    向所有侧面提供网络连接的线缆。

*   面板接口是 [线缆子部件](../ae2-mechanics/cable-subparts.md)，因此多个可以放置在同一根线缆上，允许紧凑的设置。
    它们允许从其面推送到、拉取和访问其库存，但不从其面提供网络连接。

接口可以在工作台中在普通和面板之间切换。

## 设置 (Settings)

接口中的上部插槽决定了接口设置为在自身内部存储什么。当东西被放入
其中或从 JEI/REI 拖动时，会出现一个扳手，让你设置数量。

用流体容器（如桶或流体储罐）右键单击以将该流体设置为过滤器，而不是桶或储罐物品。

## 升级 (Upgrades)

接口支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="fuzzy_card" /> 让总线按损坏等级过滤和/或忽略物品 NBT
*   <ItemLink id="crafting_card" /> 让接口向你的 [自动合成](../ae2-mechanics/autocrafting.md)
    系统发送合成请求以获取它想要的物品。如果可能，它将在发出
    制作新物品的请求之前从存储中拉取物品。

## 优先级 (Priority)

可以通过单击 GUI 右上角的扳手来设置优先级。具有较高优先级的接口将
比优先级较低的接口先获得物品。

## 配方 (Recipes)

<Recipe id="network/blocks/interfaces_interface" />

<RecipeFor id="cable_interface" />
