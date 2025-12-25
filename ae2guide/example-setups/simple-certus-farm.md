---
navigation:
  parent: example-setups/example-setups-index.md
  title: 简单赛特斯农场
  icon: certus_quartz_crystal
  position: 110
---

# 简单赛特斯农场 (Simple Certus Farm)

正如在 [赛特斯生长](../ae2-mechanics/certus-growth.md) 中提到的，<ItemLink id="certus_quartz_crystal" /> 收获的自动化
涉及 <ItemLink id="annihilation_plane" /> 和 <ItemLink id="storage_bus" />。
<ItemLink id="growth_accelerator" /> 用于大幅加速赛特斯石英母岩的生长，然后面板
破坏完全长成的 <ItemLink id="quartz_cluster" />。由于未成熟的
赛特斯母岩掉落 <ItemLink id="certus_quartz_dust" /> 而不是什么都不掉落这一可疑的幸运特性，它们被过滤掉了。

这个农场使用 <ItemLink id="flawless_budding_quartz" /> 完全自动工作，但对于有瑕、裂痕和损坏的
赛特斯石英母岩，你将不得不手动更换母岩方块。或者，如 [半自动赛特斯农场](semiauto-certus-farm.md)
和 [进阶赛特斯农场](advanced-certus-farm.md) 中所述，自动更换。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/simple_certus_farm.snbt" />

  <BoxAnnotation color="#dddddd" min="3.7 1 1" max="4 2 2">
        (1) 破坏面板：没有 GUI 可配置，但可以附魔时运。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 1 1" max="3.3 2 2">
        (2) 存储总线 #1：过滤为赛特斯石英水晶。
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 1 .7" max="2 2 1">
        (3) 存储总线 #2：过滤为赛特斯石英水晶。优先级设置高于主存储。
        <ItemImage id="certus_quartz_crystal" scale="2" />
  </BoxAnnotation>

<DiamondAnnotation pos="1 0.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* 第一个 <ItemLink id="annihilation_plane" /> (1) 没有 GUI 且无法配置，但可以附魔时运。
* 第一个 <ItemLink id="storage_bus" /> (2) 过滤为 <ItemLink id="certus_quartz_crystal" />。
* 第二个 <ItemLink id="storage_bus" /> (3) 过滤为 <ItemLink id="certus_quartz_crystal" />，并且其
  [优先级](../ae2-mechanics/import-export-storage.md#storage-priority) 设置高于主存储。

## 运作原理 (How It Works)

1. <ItemLink id="annihilation_plane" /> 尝试破坏它面前的东西，但只能破坏 <ItemLink id="quartz_cluster" />
   因为子网络上唯一的存储是过滤为 <ItemLink id="certus_quartz_crystal" /> 的 <ItemLink id="storage_bus" />。
2. 第一个 <ItemLink id="storage_bus" /> 将赛特斯石英水晶存储在桶中。
3. 第二个 <ItemLink id="storage_bus" /> 让主网络可以访问桶中的所有赛特斯石英水晶。它被设置为
   高 [优先级](../ae2-mechanics/import-export-storage.md#storage-priority)，以便赛特斯石英水晶优先
   放回桶中而不是你的主存储中。
