---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 能源
  icon: energy_cell
---

# 能源 (Energy)

你的网络需要能源才能运行。网络有一个能源池，[设备](../ae2-mechanics/devices.md) 直接从中抽取能源，而
<ItemLink id="vibration_chamber" /> (振动台) 和 <ItemLink id="energy_acceptor" /> (能源接收器)（以及 <ItemLink id="controller" /> (ME 控制器)）会向其中添加能源。
通过使用 <ItemLink id="network_tool" /> (网络工具) 右键单击网络上的任何位置，或右键单击网络的控制器（如果有），你可以
查看网络的能源统计信息。这种全网范围的存储和分配意味着
没有能量传输速率限制，因此设备可以抽取任意高量的能量，且
能源接收器可以以功能上无限的速度输入能量，仅受你的能源存储限制。

## 能源接收

<Row>
  <BlockImage id="energy_acceptor" scale="4" />

  <GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/blocks/cable_energy_acceptor.snbt" />
  </GameScene>

  <BlockImage id="controller" p:state="online" scale="4" />

  <BlockImage id="vibration_chamber" p:active="true" scale="4" />
</Row>

AE2 内部不使用 Forge Energy (在 Forge 上) 或 TechReborn Energy (在 Fabric 上)。相反，它将它们转换为
自己的单位：AE。这种转换是单向的。能量可以通过 <ItemLink id="energy_acceptor" /> (能源接收器) 和
<ItemLink id="controller" /> (控制器) 转换，虽然控制器的面最好用于连接更多 [频道](../ae2-mechanics/channels.md)。
它也可以由 <ItemLink id="vibration_chamber" /> (振动台) 生成，但 AE2 的设计初衷
是与其他拥有更好发电能力的科技模组一起使用。

所有这一切意味着，在规划基地的能源分配基础设施时，最好将 AE2 网络视为一个单独的大型多方块机器。

Forge Energy 和 TechReborn Energy 的转换比率为：

*   2 FE = 1 AE (Forge)
*   1 E  = 2 AE (Fabric)

## 能源存储

<Row>
  <BlockImage id="energy_cell" scale="4" p:fullness="4" />

  <BlockImage id="dense_energy_cell" scale="4" p:fullness="4" />

  <BlockImage id="creative_energy_cell" scale="4" />
</Row>

出于相对显而易见的原因，网络在一个游戏刻 (gametick) 内输入或消耗的能量不能超过其存储的能量。如果一个网络
只能存储 800 AE，当其 [设备](../ae2-mechanics/devices.md) 请求能量时，它们最多只能使用 800 AE（假设存储已满），
而能源接收器最多只能向网络输入 800 AE（假设存储为空）。

这是导致奇怪行为的一个常见原因，例如制作一个只有能源接收器、驱动器、终端和
一些设备的小型网络，然后试图将满满一库存的圆石从库存倾倒入网络。在一个游戏刻内一次性插入所有圆石
需要的能量超过了网络的存储量，因此并非所有的圆石都能插入，网络
耗尽能量，从而重启。

**这可以通过添加能源元件来解决。**

网络有一个内置的能源缓冲区，每根线缆、机器或部件为 25 AE。

<ItemLink id="controller" /> (控制器) 拥有少量的内部能源存储，为 8,000 AE。

<ItemLink id="energy_cell" /> (能源元件) 可以存储 200k AE，仅仅一个就足以满足大多数使用情况，轻松应对
正常网络使用的电力峰值。

<ItemLink id="dense_energy_cell" /> (致密能源元件) 可以存储 1.6M AE，适用于当你想要使用存储的电力运行网络，或
处理大型 [空间存储](spatial-io.md) 设置所需的巨大瞬时能量消耗时。

<ItemLink id="creative_energy_cell" /> (创造模式能源元件) 是一个用于测试的创造模式物品，提供无限能量之类的。
