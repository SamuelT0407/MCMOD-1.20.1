---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 输入、输出与存储
---

# 输入、输出与存储 (Import, Export, and Storage)

**你的 ME 系统与世界**

AE2 中一个重要的概念是网络存储 (Network Storage)。它是网络内容存储的地方，
通常是 [存储元件](../items-blocks-machines/storage_cells.md) 或 <ItemLink id="storage_bus" /> (存储总线)
连接的任何容器。大多数 AE2 [设备](../ae2-mechanics/devices.md) 都以某种方式与其交互。

例如：

*   <ItemLink id="import_bus" /> (输入总线) 将物品推入网络存储
*   <ItemLink id="export_bus" /> (输出总线) 从网络存储中提取物品
*   <ItemLink id="interface" /> (ME 接口) 既从网络存储中提取物品，也向其中推入物品
*   当你在 [终端](../items-blocks-machines/terminals.md) 放入或取出物品，或补充合成槽时，它们既向网络存储推入也从中提取
*   <ItemLink id="storage_bus" /> (存储总线) 实际上并不向存储推入或从中提取，它们是向连接的容器推入或从中提取，
    以便将其用作网络存储（所以实际上是其他设备向*它们*推入或从中提取）

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/import_export_storage.snbt" />

  <BoxAnnotation color="#dddddd" min="8 1 1" max="9 1.3 2">
        输入总线将它们指向的容器中的物品导入网络存储
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="8 2 1" max="9 3 1.3">
        从你的库存向终端插入物品算作网络导入它
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="7 0 1" max="8 1 2">
        如果接口的该槽位未配置为存储任何东西，或者该槽位中的物品
        多于配置的存储量，接口将从其内部库存导入物品，因此可以将物品推入它们以插入网络
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="6 0 1" max="7 1 2">
        样板供应器将从其内部返回槽导入物品，因此可以将物品推入它们以插入网络
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="4 1 1" max="5 2 2">
        驱动器将插入的元件作为网络存储提供
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="3 1 1" max="4 1.3 2">
        存储总线将它们指向的容器用作网络存储
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 1 1" max="2 1.3 2">
        输出总线即从网络存储中导出物品到它们指向的容器中
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 1" max="2 3 1.3">
        从终端中取出物品算作网络导出它
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="0 1 1" max="1 2 2">
        如果接口的该槽位配置为存储某物，接口将导出到其内部库存，
        因此可以从它们中取出物品以从网络中提取
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

在设计自动化和物流设置时，务必牢记推入和拉出网络存储的动作/事件。

## 存储优先级 (Storage Priority)

可以通过点击某些 GUI 右上角的扳手来设置优先级。
进入网络的物品将首先前往最高优先级的存储，
作为它们的首选目的地。如果两个存储具有相同的优先级，
如果其中一个已经包含该物品，它们将优先选择该存储而不是
其他的。任何设有白名单的元件在与其他存储处于同一优先级组时，将被视为已经包含该物品。从存储中移除物品将
从优先级最低的存储中移除。这种优先级系统意味着随着物品被插入和移除，
高优先级的网络存储将被填满，而低优先级的存储将被清空。
