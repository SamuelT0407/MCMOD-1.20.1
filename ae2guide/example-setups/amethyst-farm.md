---
navigation:
  parent: example-setups/example-setups-index.md
  title: 紫水晶农场
  icon: minecraft:amethyst_shard
---

# 紫水晶的种植 (Farming of Amethyst)

虽然 <ItemLink id="growth_accelerator" /> 对紫水晶有效，但通常用 <ItemLink id="annihilation_plane" /> 过滤 [赛特斯母岩](../items-blocks-machines/budding_certus.md) 的方法
对紫水晶母岩无效。与掉落 <ItemLink id="certus_quartz_dust" /> 的未成熟赛特斯母岩不同，未成熟的紫水晶母岩什么也不掉落，所以破坏面板总是会破坏它们，
因为网络总是能存储“无”。

解决这个问题的方法是给破坏面板附魔精准采集。这样未成熟的紫水晶母岩 *确实* 会掉落一些东西
（各种阶段的物理母岩方块），因此可以被过滤。

然后必须通过 <ItemLink id="formation_plane" /> 再次放置 <ItemLink id="minecraft:amethyst_cluster" />，然后再
被没有精准采集的 <ItemLink id="annihilation_plane" /> 破坏，以此获得 <ItemLink id="minecraft:amethyst_shard" />。

请注意，由于晶簇的方向性，成型面板正对面必须有一个实体方块面。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/amethyst_farm.snbt" />

  <BoxAnnotation color="#dddddd" min="2.7 1 1" max="3 2 2">
        (1) 破坏面板 #1：没有 GUI 可配置，但附魔了精准采集。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 1 1" max="2.3 2 2">
        (2) 成型面板：过滤为紫水晶簇。
        <ItemImage id="minecraft:amethyst_cluster" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1.3 0.7 1" max="2 1 2">
        (3) 破坏面板 #2：没有 GUI 可配置，但可以附魔时运。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 0 1" max="1.3 1 2">
        (4) 存储总线 #1：过滤为紫水晶碎片。
        <ItemImage id="minecraft:amethyst_shard" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 0 .7" max="1 1 1">
        (5) 存储总线 #2：过滤为紫水晶碎片。优先级设置高于你的主存储。
        <ItemImage id="minecraft:amethyst_shard" scale="2" />
  </BoxAnnotation>

<DiamondAnnotation pos="0 0.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* 第一个 <ItemLink id="annihilation_plane" /> (1) 没有 GUI 且无法配置，但必须附魔精准采集。
* <ItemLink id="formation_plane" /> (2) 过滤为 <ItemLink id="minecraft:amethyst_cluster" />。
* 第二个 <ItemLink id="annihilation_plane" /> (3) 没有 GUI 且无法配置，但可以附魔时运。
* 第一个 <ItemLink id="storage_bus" /> (4) 过滤为 <ItemLink id="minecraft:amethyst_shard" />。
* 第二个 <ItemLink id="storage_bus" /> (5) 过滤为 <ItemLink id="minecraft:amethyst_shard" />，并且其
  [优先级](../ae2-mechanics/import-export-storage.md#storage-priority) 设置高于你的主存储。

## 运作原理 (How It Works)

1. 第一个 <ItemLink id="annihilation_plane" /> 尝试破坏它面前的东西，但只能破坏 <ItemLink id="minecraft:amethyst_cluster" />
    因为子网络上唯一的存储是 <ItemLink id="formation_plane" />，过滤为紫水晶簇。这之所以有效，是因为
面板附魔了精准采集，否则它就能破坏未从熟的母岩，因为它们什么也不掉落。
2. <ItemLink id="formation_plane" /> 将晶簇放置在其对面的方块上。
3. 第二个 <ItemLink id="annihilation_plane" /> 破坏晶簇，产生 <ItemLink id="minecraft:amethyst_shard" />。
4. 第一个 <ItemLink id="storage_bus" /> 将碎片存储在桶中。这技术上不需要过滤，因为第二个破坏面板应该只遇到完全长成的晶簇。
5. 第二个 <ItemLink id="storage_bus" /> 让主网络可以访问桶中的所有紫水晶碎片。它被设置为
高 [优先级](../ae2-mechanics/import-export-storage.md#storage-priority)，以便紫水晶碎片优先
放回桶中而不是你的主存储中。
