---
navigation:
  parent: example-setups/example-setups-index.md
  title: 半自动赛特斯农场
  icon: certus_quartz_crystal
  position: 115
---

# 半自动赛特斯农场 (Semi-Auto Certus Farm)

不幸的是，[简单赛特斯农场](simple-certus-farm.md) 需要 <ItemLink id="flawless_budding_quartz" /> 才能完全
自动工作。这需要 [空间 IO](../ae2-mechanics/spatial-io.md) 或在 [陨石](../ae2-mechanics/meteorites.md) 处建造农场。

然而，AE2 可以放置和破坏方块，所以可能
可以让你的农场 *为你替换赛特斯母岩*。（你必须定期将一些
<ItemLink id="flawed_budding_quartz" /> 放入输入桶中，并从废弃的母岩桶中提取 <ItemLink id="quartz_block" />）

要完全自动执行此操作，请参阅 [进阶赛特斯农场](advanced-certus-farm.md)。

这个农场比 [简单赛特斯农场](simple-certus-farm.md) 稍微复杂一点，因为它实际上是
3 个独立的设置塞在一起。

**这是一个复杂的构建，有些东西隐藏在其他东西后面，请四处平移以从各个角度查看它**

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/semiauto_certus_farm.snbt" />

  <BoxAnnotation color="#ddaaaa" min="3.7 2 1" max="4 3 2">
        (1) 破坏面板 #1：没有 GUI 可配置，但可以附魔时运。
  </BoxAnnotation>

  <BoxAnnotation color="#ddaaaa" min="2 2 1" max="2.3 3 2">
        (2) 存储总线 #1：过滤为赛特斯石英水晶。
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 2.5 1.5" color="#ff0000">
    晶簇破坏子网络
  </DiamondAnnotation>

  <BoxAnnotation color="#aaddaa" min="3.7 1 1" max="4 2 2">
        (3) 破坏面板 #2：没有 GUI 可配置，但附魔了精准采集。
  </BoxAnnotation>

  <BoxAnnotation color="#aaddaa" min="2 1 1" max="2.3 2 2">
        (4) 存储总线 #2：过滤为赛特斯石英方块。
        <BlockImage id="quartz_block" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 1.5 1.5" color="#00ff00">
    赛特斯方块破坏子网络
  </DiamondAnnotation>

  <BoxAnnotation color="#ffddaa" min="4 0.7 1" max="5 1 2">
        (5) 成型面板：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#ffddaa" min="2 0 1" max="2.3 1 2">
        (6) 输入总线：默认配置。
  </BoxAnnotation>

  <DiamondAnnotation pos="3 0.5 1.5" color="#ddcc00">
    母岩方块放置子网络
  </DiamondAnnotation>

  <BoxAnnotation color="#aaaadd" min="0.7 2 1" max="1 3 2">
        (7) 存储总线 #3：过滤为赛特斯石英水晶。优先级设置高于你的主存储。
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

    <DiamondAnnotation pos="1.5 0.5 1.5" color="#00ff00">
        手动插入有瑕的赛特斯石英母岩。
        <BlockImage id="flawed_budding_quartz" scale="2" />
    </DiamondAnnotation>

    <DiamondAnnotation pos="1.5 1.5 1.5" color="#00ff00">
        手动提取赛特斯石英方块。
        <BlockImage id="quartz_block" scale="2" />
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="165" pitch="5" />
</GameScene>

## 配置 (Configurations)

### 晶簇破坏:

* 第一个 <ItemLink id="annihilation_plane" /> (1) 没有 GUI 且无法配置，但可以附魔时运。
* 第一个 <ItemLink id="storage_bus" /> (2) 过滤为 <ItemLink id="certus_quartz_crystal" />。

### 赛特斯方块破坏:

* 第二个 <ItemLink id="annihilation_plane" /> (3) 没有 GUI 且无法配置，但必须附魔精准采集。
* 第二个 <ItemLink id="storage_bus" /> (4) 过滤为 <ItemLink id="quartz_block" />。

### 母岩方块放置:

* <ItemLink id="formation_plane" /> (5) 处于默认配置。
* <ItemLink id="import_bus" /> (6) 处于默认配置。

### 主网络上:

* 第三个 <ItemLink id="storage_bus" /> (7) 过滤为 <ItemLink id="certus_quartz_crystal" />，并且其
  [优先级](../ae2-mechanics/import-export-storage.md#storage-priority) 设置高于你的主存储。

## 运作原理 (How It Works)

### 晶簇破坏:

晶簇破坏子网络的工作原理与 [简单赛特斯农场](simple-certus-farm.md) 中的子网络非常相似。

1. <ItemLink id="annihilation_plane" /> 尝试破坏它面前的东西，但只能破坏 <ItemLink id="quartz_cluster" />
   因为子网络上唯一的存储是过滤为 <ItemLink id="certus_quartz_crystal" /> 的 <ItemLink id="storage_bus" />。
2. <ItemLink id="storage_bus" /> 将赛特斯石英水晶存储在桶中。

### 赛特斯方块破坏

赛特斯方块破坏子网络用于在耗尽的母岩方块变成普通的 <ItemLink id="quartz_block" /> 时将其破坏。
它的工作原理类似于晶簇破坏。

1. <ItemLink id="annihilation_plane" /> 尝试破坏它面前的东西，但只能破坏 <ItemLink id="quartz_block" />
   因为子网络上唯一的存储是过滤为 <ItemLink id="quartz_block" /> 的 <ItemLink id="storage_bus" />。
   面板需要有精准采集，这样母岩方块在被破坏时就不会降级，因此面板不会过早地破坏它。
2. <ItemLink id="storage_bus" /> 将赛特斯石英方块存储在废弃的
   母岩桶中，你必须手动将它与 <ItemLink id="charged_certus_quartz_crystal" /> 一起投入水中来刷新它。

### 母岩方块放置

母岩方块放置子网络用于在破坏子网络破坏旧的耗尽方块时放置一个新的 <ItemLink id="flawed_budding_quartz" />。

1. <ItemLink id="import_bus" /> 从输入桶导入一个母岩方块。
2. 子网络上唯一的存储是 <ItemLink id="formation_plane" />，它放置母岩方块。

### 在主网络上

* <ItemLink id="storage_bus" /> 让主网络（以及 [充能器自动化](charger-automation.md)）可以访问桶中的所有赛特斯石英水晶。它被设置为
  高 [优先级](../ae2-mechanics/import-export-storage.md#storage-priority)，以便赛特斯石英水晶优先
  放回桶中而不是你的主存储中。
