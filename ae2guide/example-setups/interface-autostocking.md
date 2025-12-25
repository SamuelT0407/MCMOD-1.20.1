---
navigation:
  parent: example-setups/example-setups-index.md
  title: 接口自动补货
  icon: interface
---

# 接口自动补货 (Interface Autostocking)

有人可能会问“我如何保持一定数量的各种物品库存，并根据需要制作更多？”

一种解决方案是使用 <ItemLink id="interface" /> 和 <ItemLink id="crafting_card" /> 自动从你的网络的 [自动合成](../ae2-mechanics/autocrafting.md) 中请求新物品。
这种设置更适合维持少量且种类繁多的物品。

此演示设置被缩短了以免太宽，最理想的情况可能是使用 4 个 <ItemLink id="interface" /> 和 4 个 <ItemLink id="storage_bus" />，
以使用常规 [线缆](../items-blocks-machines/cables.md) 中的所有 8 个 [频道](../ae2-mechanics/channels.md)。

<GameScene zoom="6" interactive={true}>
  <ImportStructure src="../assets/assemblies/interface_autostocking.snbt" />

<BoxAnnotation color="#dddddd" min="0 0 0" max="2 1 1">
        (1) 接口：设置为在自身中保留所需的物品。装有合成卡。
        <ItemImage id="crafting_card" scale="2" />
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 0" max="2 1.3 1">
        (2) 存储总线：“输入/输出模式”设置为“仅提取”。
  </BoxAnnotation>

<DiamondAnnotation pos="4 0.5 0.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="interface" /> (1) 设置为在自身中保留所需物品，方法是将所需物品点击放入其
   顶部插槽，或从 JEI 拖入顶部插槽，然后点击插槽上方的扳手图标以设置数量。它们装有 <ItemLink id="crafting_card" />。
* <ItemLink id="storage_bus" /> (2) 设置为“输入/输出模式”为“仅提取”。

## 运作原理 (How It Works)

1. 如果 <ItemLink id="interface" /> 无法从 [网络存储](../ae2-mechanics/import-export-storage.md) 中检索到足够的配置物品，
   （并且它有一张 <ItemLink id="crafting_card" />），它将请求网络的 [自动合成](../ae2-mechanics/autocrafting.md) 制作更多该物品。
2. <ItemLink id="storage_bus" /> 允许网络访问接口的内容。
