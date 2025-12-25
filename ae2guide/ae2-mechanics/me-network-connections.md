---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 网络连接
  icon: fluix_glass_cable
---

# 网络连接 (Network Connections)

## “网络”是什么意思？

一个“网络”是一组由可以传递 [频道](../ae2-mechanics/channels.md) 的方块连接起来的 [设备](../ae2-mechanics/devices.md)，
例如 [线缆](../items-blocks-machines/cables.md) 或全方块机器和 [设备](../ae2-mechanics/devices.md)。
(<ItemLink id="charger" /> (充能器), <ItemLink id="interface" /> (ME 接口), <ItemLink id="drive" /> (ME 驱动器), 等等)
实际上，技术上讲，单根线缆也是一个网络。

## 旁注：设备定位

对于具有某些特定网络功能的 [设备](../ae2-mechanics/devices.md)（例如 <ItemLink id="interface" />
向 [网络存储](../ae2-mechanics/import-export-storage.md) 推入和从中拉取，<ItemLink id="level_emitter" />
读取网络存储的内容，<ItemLink id="drive" /> 作为网络存储等等），
设备的物理位置并不重要。

再次强调，**设备的物理位置并不重要**。重要的是设备连接到了网络
（当然也包括它连接到了哪个网络）。

## 网络连接 (Network Connections)

确定网络连接内容的一个简单方法是使用 <ItemLink id="network_tool" /> (网络工具)。它会显示网络上的
每个组件，所以如果你看到不该看到的东西，或者没看到该看到的东西，那就说明有问题了。

例如，这是 2 个独立的网络。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/2_networks_1.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="1 2 2">
        网络 1
  </BoxAnnotation>

<BoxAnnotation color="#915dcd" min="2 0 0" max="3 2 2">
        网络 2
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

这也是 2 个独立的网络，因为 <ItemLink id="quartz_fiber" /> (石英纤维) 共享 [能源](../ae2-mechanics/energy.md)
而不提供网络连接。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/2_networks_2.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="1 2 2">
        网络 1
  </BoxAnnotation>

  <BoxAnnotation color="#915dcd" min="1.3 0 0" max="3 2 2">
        网络 2
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

然而，这只是 1 个网络，不是 2 个独立的。 [量子桥](../items-blocks-machines/quantum_bridge.md) 就像
一根无线的 [致密线缆](../items-blocks-machines/cables.md#dense-cable)，所以两端都在同一个网络上。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/actually_1_network.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="7 3 3">
        全部是 1 个网络
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

这也只是 1 个网络，因为除了不同颜色的线缆之间不
互连之外，[线缆](../items-blocks-machines/cables.md) 颜色与网络连接无关。所有颜色都连接到福鲁伊克斯（或“未染色”）线缆。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/actually_1_network_2.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="4 2 2">
        全部是 1 个网络
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 不太直观的连接

在这种情况下，这只是 1 个网络，因为 <ItemLink id="pattern_provider" /> 作为全方块设备，行为就像
一根线缆，<ItemLink id="inscriber" /> 的行为也类似。因此，网络连接穿过
供应器和压印器。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/pattern_provider_network_connection_1.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="4 2 2">
        全部是 1 个网络
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

为了防止这种情况（这对许多涉及 [子网络](../ae2-mechanics/subnetworks.md) 的自动合成设置很有用），
你可以用 <ItemLink id="certus_quartz_wrench" /> 右键单击供应器使其具有方向性，在这种情况下，它将
不会通过某一侧传递频道。

<Row gap="40">
<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/pattern_provider_network_connection_2.snbt" />

  <BoxAnnotation color="#915dcd" min="0 0 0" max="2 2 2">
        网络 1
  </BoxAnnotation>

  <BoxAnnotation color="#915dcd" min="2 0 0" max="4 2 2">
        网络 2
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/pattern_provider_directional_connection.snbt" />

  <BoxAnnotation color="#ee3333" min="1 .3 .3" max="1.3 .7 .7">
        观察线缆是如何不连接的
  </BoxAnnotation>

  <IsometricCamera yaw="255" pitch="30" />
</GameScene>
</Row>

其他不提供定向网络连接的部件是大多数 [子部件](../ae2-mechanics/cable-subparts.md)
[设备](../ae2-mechanics/devices.md)，如 <ItemLink id="import_bus" />，<ItemLink id="storage_bus" /> 和
<ItemLink id="cable_interface" />。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/subpart_no_connection.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
