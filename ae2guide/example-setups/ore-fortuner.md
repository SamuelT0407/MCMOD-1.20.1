---
navigation:
  parent: example-setups/example-setups-index.md
  title: 自动矿石时运
  icon: minecraft:raw_iron
---

# 自动矿石时运 (Automation of Ore Fortuning)

<ItemLink id="annihilation_plane" /> 可以附魔任何镐子附魔，包括时运，所以一个明显的用例是
给几个面板附魔时运，并让 <ItemLink id="formation_plane" /> (成型面板) 和 <ItemLink id="annihilation_plane" /> (破坏面板) 快速放置和
破坏矿石。

请注意，由于 <ItemLink id="import_bus" /> "加速到全速"需要时间，该设置将开始缓慢，然后在几秒钟内达到全速。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/ore_fortuner.snbt" />

  <BoxAnnotation color="#dddddd" min="2.7 0 2" max="3 1 3">
        (1) 输入总线：里面有几张加速卡。
        <ItemImage id="speed_card" scale="2" />
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 0 2" max="2 1 2.3">
        (2) 成型面板：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 0 0.7" max="2 1 1">
        (3) 破坏面板：没有 GUI 可配置，但附魔了时运。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.7 0 0" max="3 1 1">
        (4) 存储总线：默认配置。
  </BoxAnnotation>

<DiamondAnnotation pos="3.5 0.5 2.5" color="#00ff00">
        输入
    </DiamondAnnotation>

<DiamondAnnotation pos="3.5 0.5 0.5" color="#00ff00">
        输出
    </DiamondAnnotation>

<DiamondAnnotation pos="4 0.5 1.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

*   <ItemLink id="import_bus" /> (1) 里面有几张 <ItemLink id="speed_card" />。阵列中的成型面板越多，
    需要的加速卡就越多，因为它们使输入总线一次拉取更多物品。
*   <ItemLink id="formation_plane" /> (2) 处于默认配置。
*   <ItemLink id="annihilation_plane" /> (3) 没有 GUI 且无法配置，但附魔了时运。
*   <ItemLink id="storage_bus" /> (4) 处于默认配置。

## 运作原理 (How It Works)

1.  绿色子网络上的 <ItemLink id="import_bus" /> 将第一个桶中的方块导入到 [网络存储](../ae2-mechanics/import-export-storage.md) 中。
2.  绿色子网络上唯一的存储是 <ItemLink id="formation_plane" />，它放置方块。
3.  橙色子网络上的 <ItemLink id="annihilation_plane" /> 破坏方块，对它们应用时运。
4.  橙色子网络上的 <ItemLink id="storage_bus" /> 将破坏结果存储在第二个桶中。
