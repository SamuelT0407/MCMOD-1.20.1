---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: P2P 通道
  icon: me_p2p_tunnel
  position: 210
categories:
- devices
item_ids:
- ae2:me_p2p_tunnel
- ae2:redstone_p2p_tunnel
- ae2:item_p2p_tunnel
- ae2:fluid_p2p_tunnel
- ae2:fe_p2p_tunnel
- ae2:light_p2p_tunnel
---

# 点对点通道 (Point To Point Tunnels)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_tunnels.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

P2P 通道是一种在网络周围移动诸如物品、流体、红石信号、电力、光和 [频道](../ae2-mechanics/channels.md)
等事物的方法，而无需它们直接与网络交互。P2P 通道有很多变体，但每种
只传输其特定类型的事物。它们本质上就像直接连接
两个方块面的门户。它们不是双向的，有明确定义的输入和输出。

![门户](../assets/assemblies/p2p_portal.png)

例如，面向物品 P2P 的漏斗将表现得好像它直接连接到木桶，物品将会流动。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_hopper_barrel.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

但是，彼此相邻的两个木桶将不会在其间传输物品。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_barrel_barrel.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

还有其他变体，如红石 P2P。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_redstone.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## P2P 通道的类型和调谐 (Types Of P2P Tunnel And Attunement)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_tunnels.snbt" />
  <IsometricCamera yaw="180" pitch="90" />
</GameScene>

有很多类型的 P2P 通道。只有 ME P2P 通道是直接可合成的，以此通过右键单击
P2P 通道和某些物品制造：
- ME P2P 通道通过右键单击任何 [线缆](../items-blocks-machines/cables.md) 选择。
- 红石 P2P 通道通过右键单击各种红石组件选择。
- 物品 P2P 通道通过右键单击箱子或漏斗选择。
- 流体 P2P 通道通过右键单击桶或瓶子选择。
- 能量 P2P 通道通过右键单击几乎任何包含能量的物品选择。
- 光 P2P 通道通过右键单击火把或萤石选择

有些通道类型有怪癖。例如，ME P2P 通道的频道不能通过其他 ME P2P 通道，并且
能量 P2P 通道通过增加其
[能量](../ae2-mechanics/energy.md) 消耗间接提取流经自身的 FE 的 2.5% 作为税收。

## P2P 最常用的形式 (The Most-Used Form of P2P)

P2P 通道最常见的用例是使用 ME P2P 通道来压缩 [频道](../ae2-mechanics/channels.md) 传输的密度。
不必使用一束致密线缆，可以使用单根致密线缆在周围携带许多频道。

在这个例子中，8 个 ME P2P 输入从主网络的 <ItemLink id="controller" /> 获取 256 个频道 (8*32)，8 个 ME P2P 输出
将它们输出到其他地方。观察每个 P2P 通道输入或输出如何占用 1 个频道。我们因此可以通过
一根细线缆运行许多频道。而且由于我们的 P2P 通道位于专用 [子网络](../ae2-mechanics/subnetworks.md) 上，我们甚至
没有使用主网络的任何频道来做到这一点！还要观察虽然 P2P 通道可以直接放置
在控制器上，但可以在中间放置 [致密智能线缆](../items-blocks-machines/cables.md#smart-cable) 以便更容易地可视化频道。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/p2p_compact_channels.snbt" />

  <BoxAnnotation color="#dddddd" min="1.3 1.3 6.3" max="2 2.7 6.7">
        石英纤维在主网络和 p2p 子网络之间共享能量。
  </BoxAnnotation>

  <IsometricCamera yaw="225" pitch="30" />
</GameScene>

关于另一个例子（包括其与 [量子桥](quantum_bridge.md) 的使用），请参见我懒得
修饰的这张 MS Paint 图：

![P2P 和量子桥](../assets/diagrams/p2p_quantum_network.png)

## 嵌套 (Nesting)

但是，你不能用它通过单根线缆发送无限的频道。ME P2P 通道的频道不会
通过另一个 ME P2P 通道，所以你不能递归地嵌套它们。观察红色线缆上
外层的 ME P2P 通道是如何离线的。请注意，这仅适用于 ME P2P 通道，其他 P2P 通道类型可以通过 ME P2P 通道，
正如红石 P2P 通道工作正常所见。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_nesting.snbt" />
  <IsometricCamera yaw="225" pitch="30" />
</GameScene>

## 链接 (Linking)

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/p2p_linking_frequency.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

P2P 通道连接的末端可以使用 <ItemLink id="memory_card" /> 链接。频率将显示为
通道背面颜色的 2x2 阵列。
- Shift 右键单击以生成新的 P2P 链接频率。
- 右键单击以粘贴设置、升级卡或链接频率。

你 shift 右键单击的通道将是输入，你右键单击的通道将是输出。你可以有多个输出，
但是在 ME P2P 通道中，输入中流动的频道将在输出之间分配，因此你无法复制频道。

## 配方 (Recipe)

<RecipeFor id="me_p2p_tunnel" />
