---
navigation:
  parent: example-setups/example-setups-index.md
  title: 进阶赛特斯农场
  icon: certus_quartz_crystal
  position: 120
---

# 进阶赛特斯农场 (Advanced Certus Farm)

这基本上就是 [半自动赛特斯农场](semiauto-certus-farm.md)，除了它已经完全集成到你的 ME 系统中。

与其拥有一大堆母岩方块并偶尔手动刷新它们，
此设置使用 [充能器自动化](charger-automation.md) 和 [投入水中自动化](throw-in-water-automation.md)
来自动完成。

**这是一个复杂的构建，有些东西隐藏在其他东西后面，请四处平移以从各个角度查看它**

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/advanced_certus_farm.snbt" />

  <BoxAnnotation color="#ddaaaa" min="3.7 2 1" max="4 3 2">
        (1) 破坏面板 #1：没有 GUI 可配置，但可以附魔时运。
  </BoxAnnotation>

  <BoxAnnotation color="#ddaaaa" min="2 2 1.7" max="3 3 2">
        (2) 存储总线 #1：过滤为赛特斯石英水晶。
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 2.5 1.5" color="#ff0000">
    晶簇破坏子网络
  </DiamondAnnotation>

  <BoxAnnotation color="#aaddaa" min="3.7 1 1" max="4 2 2">
        (3) 破坏面板 #2：没有 GUI 可配置，但附魔了精准采集。
  </BoxAnnotation>

  <BoxAnnotation color="#aaddaa" min="2 1 1.7" max="3 2 2">
        (4) 存储总线 #2：过滤为赛特斯石英方块。
        <BlockImage id="quartz_block" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 1.5 1.5" color="#00ff00">
    赛特斯方块破坏子网络
  </DiamondAnnotation>

  <BoxAnnotation color="#ffddaa" min="4 0.7 1" max="5 1 2">
        (5) 成型面板：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#ffddaa" min="2 0.7 2" max="3 1 3">
        (6) 输入总线：过滤为有瑕的赛特斯石英母岩。
        <BlockImage id="flawed_budding_quartz" scale="2" />
  </BoxAnnotation>

  <DiamondAnnotation pos="3 0.5 1.5" color="#ddcc00">
    母岩方块放置子网络
  </DiamondAnnotation>

  <BoxAnnotation color="#aaaadd" min="1.7 2 2" max="2 3 3">
        (7) 存储总线 #3：过滤为赛特斯石英水晶。优先级设置高于你的主存储。
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#aaaadd" min="2 1 2" max="3 2 3">
        (8) 接口：设置为在自身中保留 1 个有瑕的赛特斯石英母岩，装有合成卡。
        <Row><BlockImage id="flawed_budding_quartz" scale="2" /> <ItemImage id="crafting_card" scale="2" /></Row>
  </BoxAnnotation>

<DiamondAnnotation pos="1.5 0.5 0" color="#00ff00">
        连接到主网络，充能器自动化，以及投入水中自动化
        <Row>
        <GameScene zoom="3" background="transparent">
          <ImportStructure src="../assets/assemblies/charger_automation.snbt" />
          <IsometricCamera yaw="195" pitch="30" />
        </GameScene>
        <GameScene zoom="3" background="transparent">
          <ImportStructure src="../assets/assemblies/throw_in_water.snbt" />
          <IsometricCamera yaw="195" pitch="30" />
        </GameScene>
        </Row>
    </DiamondAnnotation>

  <IsometricCamera yaw="165" pitch="5" />
</GameScene>

## 配置 (Configurations)

### 晶簇破坏 (Cluster Breaker):

* 第一个 <ItemLink id="annihilation_plane" /> (1) 没有 GUI 且无法配置，但可以附魔时运。
* 第一个 <ItemLink id="storage_bus" /> (2) 过滤为 <ItemLink id="certus_quartz_crystal" />。

### 赛特斯方块破坏 (Certus Block Breaker):

* 第二个 <ItemLink id="annihilation_plane" /> (3) 没有 GUI 且无法配置，但必须附魔精准采集。
* 第二个 <ItemLink id="storage_bus" /> (4) 过滤为 <ItemLink id="quartz_block" />。

### 母岩方块放置 (Budding Block Placer):

* <ItemLink id="formation_plane" /> (5) 处于默认配置。
* <ItemLink id="import_bus" /> (6) 过滤为 <ItemLink id="flawed_budding_quartz" />。

### 主网络上 (On Main Network):

* 第三个 <ItemLink id="storage_bus" /> (7) 过滤为 <ItemLink id="certus_quartz_crystal" />，并且其
  [优先级](../ae2-mechanics/import-export-storage.md#storage-priority) 设置高于你的主存储。
* <ItemLink id="interface" /> (8) 设置为在自身保留 1 个有瑕的赛特斯石英母岩，并装有一个 <ItemLink id="crafting_card" />。

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
2. <ItemLink id="storage_bus" /> 将赛特斯石英方块存储在 <ItemLink id="interface" /> 中，允许
   [投入水中自动化](throw-in-water-automation.md) 使用它来制作新的 <ItemLink id="flawed_budding_quartz" />。

### 母岩方块放置

母岩方块放置子网络用于在破坏子网络破坏旧的耗尽方块时放置一个新的 <ItemLink id="flawed_budding_quartz" />。

1. <ItemLink id="import_bus" /> 从 <ItemLink id="interface" /> 导入一个母岩方块到 [网络存储](../ae2-mechanics/import-export-storage.md)
2. 子网络上唯一的存储是 <ItemLink id="formation_plane" />，它放置母岩方块。

### 在主网络上

* <ItemLink id="storage_bus" /> 让主网络（以及 [充能器自动化](charger-automation.md)）可以访问桶中的所有赛特斯石英水晶。它被设置为
  高 [优先级](../ae2-mechanics/import-export-storage.md#storage-priority)，以便赛特斯石英水晶优先
  放回桶中而不是你的主存储中。
* <ItemLink id="interface" /> 让母岩方块放置子网络可以访问 <ItemLink id="flawed_budding_quartz" />，并且
    给赛特斯方块破坏子网络一条将耗尽的方块送回主网络的途径。<ItemLink id="crafting_card" /> 允许接口从主网络的 [自动合成](../ae2-mechanics/autocrafting.md) 请求新的母岩方块。
