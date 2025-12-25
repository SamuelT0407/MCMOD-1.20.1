---
navigation:
  parent: example-setups/example-setups-index.md
  title: 物品/流体“管道”子网络
  icon: storage_bus
---

# 物品/流体“管道”子网络 (Item/Fluid "Pipe" Subnet)

一种使用 AE2 [设备](../ae2-mechanics/devices.md) 模拟物品和/或流体管道的简单方法，这对于你会使用物品或流体管道做的任何事情都很有用。
这包括将合成结果返回到 <ItemLink id="pattern_provider" />。

通常有两种不同的方法来实现这一点：

## 输入总线 -> 存储总线 (Import Bus -> Storage Bus)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/import_storage_pipe.snbt" />

<BoxAnnotation color="#dddddd" min="3.7 0 0" max="4 1 1">
        (1) 输入总线：可以被过滤。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 1">
        (2) 存储总线：可以被过滤。这（以及其他你想作为终点的存储总线）
        必须是网络上唯一的存储。
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 0.5" color="#00ff00">
        源
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0.5" color="#00ff00">
        目的地
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

源库存上的 <ItemLink id="import_bus" /> (1) 导入物品或流体，并尝试将它们存储在 [网络存储](../ae2-mechanics/import-export-storage.md) 中。
由于网络上唯一的存储是 <ItemLink id="storage_bus" /> (2)（这就是为什么这是一个子网络而不是在你的主网络上），物品或流体
被放置在目标库存中，从而被传输。能量通过 <ItemLink id="quartz_fiber" /> 提供。
输入总线和存储总线都可以被过滤，但如果没有应用过滤器，该设置将传输它能访问的所有东西。
此设置也适用于多个输入总线和多个存储总线。

## 存储总线 -> 输出总线 (Storage Bus -> Export Bus)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/storage_export_pipe.snbt" />

<BoxAnnotation color="#dddddd" min="3.7 0 0" max="4 1 1">
        (1) 存储总线：可以被过滤。这（以及其他你想作为源的存储总线）
        必须是网络为一的存储。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 1">
        (2) 输出总线：必须被过滤。
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 0.5" color="#00ff00">
        源
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0.5" color="#00ff00">
        目的地
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

目标库存上的 <ItemLink id="export_bus" /> 试图从 [网络存储](../ae2-mechanics/import-export-storage.md) 中拉取其过滤器中的物品。
由于网络上唯一的存储是 <ItemLink id="storage_bus" />（这就是为什么这是一个子网络而不是在你的主网络上），物品或流体
从来源库存中被拉取，从而被传输。能量通过 <ItemLink id="quartz_fiber" /> 提供。
因为输出总线必须被过滤才能运作，只有当你过滤输出总线时，此设置才有效。
此设置也适用于多个存储总线和多个输出总线。

## 一个无效的设置 (输入总线 -> 输出总线)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/import_export_pipe.snbt" />

<BoxAnnotation color="#dd3333" min="3.7 0 0" max="4 1 1">
        输入总线：由于网络没有存储，它无处导入。
  </BoxAnnotation>

<BoxAnnotation color="#dd3333" min="1 0 0" max="1.3 1 1">
        (2) 输出总线：由于网络没有存储，它无物可导出。
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 0.5" color="#ff0000">
        源
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 0.5" color="#ff0000">
        目的地
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

仅有输入和输出总线的设置将无法工作。输入总线将尝试从源库存拉取
并将物品或流体存储在网络存储中。输出总线将尝试从网络存储中拉取并将
物品或流体放入目标库存。然而，由于此网络 **没有存储**，输入总线无法导入
且输出总线无法导出，所以什么也不会发生。

## 通过 1 个面输入和输出

假设你有一些可以接收输入并通过 1 个面拉取其输出的机器。（就像 <ItemLink id="charger" />）
你可以通过组合 2 种管道子网络方法来推入原料和拉出结果：

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/import_storage_export_pipe.snbt" />

<BoxAnnotation color="#dddddd" min="4 1 1" max="5 1.3 2">
        (1) 输入总线：可以被过滤。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 1 1" max="3 1.3 2">
        (2) 存储总线：可以被过滤。这（以及其他你想推拉物品的存储总线）
        必须是网络上唯一的存储。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="2 0 1" max="3 1 2">
        (3) 你想推入和拉出的东西：在本例中是一个充能器。
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 1" max="1 1.3 2">
        (4) 输出总线：必须被过滤。
  </BoxAnnotation>

<DiamondAnnotation pos="4.5 0.5 1.5" color="#00ff00">
        源
    </DiamondAnnotation>

<DiamondAnnotation pos="0.5 0.5 1.5" color="#00ff00">
        目的地
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 接口 (Interfaces)

事实证明，除了输入总线和输出总线之外，还有其他 [设备](../ae2-mechanics/devices.md) 可以将物品推入
和从 [网络存储](../ae2-mechanics/import-export-storage.md) 中拉出物品！
这里相关的是 <ItemLink id="interface" />。如果插入了一个接口未设置为存储的物品，接口将
把它推送到网络存储，我们可以像利用输入总线 -> 存储总线管道一样利用这一点。将接口设置为
存储某些物品将从网络存储中拉取它，类似于存储总线 -> 输出总线管道。接口可以设置为
存储某些东西而不存储其他东西，允许你通过存储总线远程推拉，如果你由于某种原因想这样做的话。

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/interface_pipes.snbt" />

<BoxAnnotation color="#dddddd" min="3.7 0 0" max="4 1 1">
        接口
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 1">
        存储总线
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="3.7 0 2" max="4 1 3">
        存储总线
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 1 2" max="1 1.3 3">
        存储总线
  </BoxAnnotation>

<IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 一对多和多对一（以及多对多）

当然，你不必只使用一个 <ItemLink id="import_bus" /> 或 <ItemLink id="export_bus" /> 或 <ItemLink id="storage_bus" />

<GameScene zoom="3" background="transparent">
<ImportStructure src="../assets/assemblies/many_to_many_pipe.snbt" />

<IsometricCamera yaw="185" pitch="30" />
</GameScene>

## 提供给多个地方

从所有这些中，我们可以得出一个方法，将原料从一个 <ItemLink id="pattern_provider" /> 面发送到许多不同
的位置，比如一组机器，或者一台机器的几个不同的面。

我们不想要输入 -> 存储管道或存储 -> 输出管道，因为 <ItemLink id="pattern_provider" /> 实际上从不
包含原料。相反，供应器将原料 *推* 送到相邻的库存，所以我们需要一些
也可以导入物品的相邻库存。

这听起来像...一个 <ItemLink id="interface" />！
确保供应器处于定向或面板模式和/或接口处于面板模式，以便两者不会形成网络连接。

<GameScene zoom="6" background="transparent">
<ImportStructure src="../assets/assemblies/provider_interface_storage.snbt" />

<BoxAnnotation color="#dddddd" min="2.7 0 1" max="3 1 2">
        接口 (必须是面板，不是全方块)
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="1 0 0" max="1.3 1 4">
        存储总线
  </BoxAnnotation>

<BoxAnnotation color="#dddddd" min="0 0 0" max="1 1 4">
        你想用样板提供的地方（多台机器，或 1 台机器的多个面）
  </BoxAnnotation>

<IsometricCamera yaw="185" pitch="30" />
</GameScene>
