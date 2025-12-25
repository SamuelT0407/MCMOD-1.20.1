---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 频道
  icon: controller
---

# 频道 (Channels)

应用能源2 的 [ME 网络](me-network-connections.md) 需要频道来支持使用网络存储或其他网络服务的 [设备](../ae2-mechanics/devices.md)。
将频道想象成连接到你所有设备的 USB 线。一台电脑只有有限的 USB 端口，只能支持有限数量的设备连接到它。
大多数机器、全方块设备和标准线缆只能传递最多 8 个频道。你可以将全方块设备和标准线缆想象成一束 8 根的“频道线”。
然而，[致密线缆](../items-blocks-machines/cables.md#dense-cable) 可以支持最多 32 个频道。唯一其他能够传输 32 个频道的设备是 <ItemLink id="me_p2p_tunnel" /> (P2P 通道)
和 [量子网络桥 (Quantum Network Bridge)](../items-blocks-machines/quantum_bridge.md)。每当一个设备消耗一个频道时，想象从这束线中抽出一条 USB“线”，
这显然意味着那条“线”在更远处就不可用了。

<GameScene zoom="7" interactive={true}>
  <ImportStructure src="../assets/assemblies/channel_demonstration_1.snbt" />

  <LineAnnotation color="#33ff33" from="1 .4 .7" to="2.4 .4 .7" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .6 .7" to="2.4 .6 .7" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .4 .6" to="2.6 .4 .6" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .6 .6" to="2.6 .6 .6" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .6 .6" to="2.6 .6 .6" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="2.4 .6 .7" to="2.4 .6 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.4 .4 .7" to="2.4 .4 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.6 .6 .6" to="2.6 .6 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.6 .4 .6" to="2.6 .4 1.5" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="2.1 .6 1.5" to="2.4 .6 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.6 .4 1.5" to="2.9 .4 1.5" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="2.6 .6 1.5" to="2.6 .9 1.5" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="2.4 .1 1.5" to="2.4 .4 1.5" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="1 .6 .4" to="3.5 .6 .4" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .4 .4" to="3.5 .4 .4" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="3.5 .6 .4" to="3.5 .9 .4" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="3.5 .1 .4" to="3.5 .4 .4" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="1 .6 .3" to="1.5 .6 .3" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1 .4 .3" to="1.5 .4 .3" alwaysOnTop={true}/>

  <LineAnnotation color="#33ff33" from="1.5 .6 .3" to="1.5 .9 .3" alwaysOnTop={true}/>
  <LineAnnotation color="#33ff33" from="1.5 .1 .3" to="1.5 .4 .3" alwaysOnTop={true}/>

  <LineAnnotation color="#ff3333" from="3.5 .5 .5" to="5.5 .5 .5" alwaysOnTop={true}>
  线缆中的所有 8 个频道都已被使用，所以驱动器没有得到频道。
  </LineAnnotation>

  <LineAnnotation color="#993333" from="1 .5 .5" to="1.25 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="1.5 .5 .5" to="1.75 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="2 .5 .5" to="2.25 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="2.5 .5 .5" to="2.75 .5 .5" alwaysOnTop={true}/>
  <LineAnnotation color="#993333" from="3 .5 .5" to="3.25 .5 .5" alwaysOnTop={true}/>

  <DiamondAnnotation pos="3.6 0.5 0.5" color="#ff0000">
        线缆中的所有 8 个频道都已被使用，所以驱动器没有得到频道。
    </DiamondAnnotation>

  <IsometricCamera yaw="15" pitch="30" />
</GameScene>

查看频道如何使用和路由的一个简单方法是使用 [智能线缆 (Smart Cables)](../items-blocks-machines/cables.md)，它会在上面显示频道的路径和使用情况。

每个频道传输每个节点会消耗 1⁄128 ae/t 的能量，这意味着通过为一个拥有 8 个设备和超过 96 个节点的网络添加一个 <ItemLink id="controller" />，
你的电力消耗实际上可能会降低，因为它改变了频道的分配方式。

值得注意的是，**频道与线缆颜色无关**，线缆颜色所做的只是让线缆之间不连接。

## 频道路由 (Channel Routing)

当使用 <ItemLink id="controller" /> 时，频道通过 3 个步骤进行路由。
它们首先通过相邻机器采取最短路径到达最近的 [普通线缆](../items-blocks-machines/cables.md)（玻璃、包层或智能）。
然后它们通过该普通线缆采取最短路径到达最近的 [致密线缆](../items-blocks-machines/cables.md)（致密或致密智能）。
最后它们通过该致密线缆采取最短路径到达 <ItemLink id="controller" />。
如果最短路径已经满了，一些 [设备](devices.md) 可能无法获得它们所需的频道。利用染色线缆、线缆锚和 P2P 通道来确保你的频道按照你期望的路径行走。

例如，在这种情况下，一些驱动器没有获得频道，因为尽管线缆中有足够的容量，但频道试图走最短路径，导致某些线缆过载，而其他线缆为空。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/channel_path_length_issue.snbt" />

  <LineAnnotation color="#33ff33" from="3 .5 1.4" to="0.4 0.5 1.4" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 .5 1.4" to="0.4 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 0.5 3.6" to="1.4 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1.4 0.5 3.6" to="1.4 0.5 5" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#33ff33" from="3 0.5 3.6" to="1.6 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1.6 0.5 3.6" to="1.6 0.5 5" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#ff3333" from="3 .5 1.6" to="0.6 .5 1.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#ff3333" from="0.6 .5 1.6" to="0.6 .5 3.4" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#ff3333" from="0.6 .5 3.4" to="1.4 .5 3.4" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#ff3333" from="3 .5 3.4" to="1.6 .5 3.4" alwaysOnTop={true} thickness="0.05"/>

  <BoxAnnotation color="#dddddd" min="1.2 0.2 3.2" max="1.8 0.8 3.8" alwaysOnTop={true} thickness="0.05">
        超过 8 个频道尝试通过此处路由，因此部分被切断。
  </BoxAnnotation>

  <IsometricCamera yaw="90" pitch="90" />

</GameScene>

这可以通过更仔细地限制频道可以走的路径来解决。网络应该是树状的（或灌木状的）。应该尽量减少环路和模糊的频道路径。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/channel_path_length_issue_fix.snbt" />

  <LineAnnotation color="#33ff33" from="3 .5 1.4" to="0.4 0.5 1.4" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 .5 1.4" to="0.4 0.5 5.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="0.4 0.5 5.6" to="1 0.5 5.6" alwaysOnTop={true} thickness="0.05"/>

  <LineAnnotation color="#33ff33" from="3 0.5 3.6" to="1.6 0.5 3.6" alwaysOnTop={true} thickness="0.05"/>
  <LineAnnotation color="#33ff33" from="1.6 0.5 3.6" to="1.6 0.5 5" alwaysOnTop={true} thickness="0.05"/>

  <IsometricCamera yaw="90" pitch="90" />

</GameScene>

## 自组网络 (Ad-Hoc Networks)

没有 <ItemLink id="controller" /> 的网络被认为是“自组网络 (Ad-Hoc)”，可以支持最多 8 个使用频道的设备。
一旦超过 8 个设备，网络中的所有耗能设备都将关闭，你可以移除设备，或者添加一个 <ItemLink id="controller" />。

与有控制器的网络不同，自组网络上的 [智能线缆](../items-blocks-machines/cables.md) 将显示全网使用的频道数量，而不是流经该特定线缆的频道数量。

在使用自组网络时，每个设备将在全网范围内使用 1 个频道，这通过最短路径分配频道的 <ItemLink id="controller" /> 截然不同。

## 设计 (Design)

如前文 [频道路由](channels.md#channel-routing) 所述，最好将网络设计为树状结构，致密线缆从控制器分支出去，普通线缆从致密线缆分支出去，而 [设备](../ae2-mechanics/devices.md) 则以 8 个或更少为一组连接在普通线缆上。

这是一个反面教材：

沿着频道路径，

1. 刚从控制器向右出来，我们就被瓶颈限制在 8 个频道，因为驱动器就像普通线缆一样。
但是，由于我们这里没有使用智能线缆，我们无法看到有多少频道正在使用中。剩余 8 个频道。
2. 驱动器占用一个频道。
剩余 7 个频道。
3. 2 个频道向上去往终端。
剩余 5 个频道。
4. 继续向右，接口又占用一个频道。
剩余 4 个频道。
5. 1 个频道向上去往样板供应器。
剩余 3 个频道。
6. 继续向右，1 个频道向上去往输入总线。
剩余 2 个频道。
7. 为装配室供料的一组样板供应器只得到 2 个频道，所以其中 2 个供应器无法获得频道。

最终的错误在于造成了频道的瓶颈，并且没有仔细考虑频道将如何分配。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/bad_network_structure.snbt" />

<LineAnnotation color="#33ff33" from="6.5 .5 1.5" to="6 .5 1.5" alwaysOnTop={true} thickness="0.4">
  32 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="6 .5 1.5" to="5.5 .5 1.5" alwaysOnTop={true} thickness="0.2">
  8 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 .5 1.5" to="5.5 1.5 1.5" alwaysOnTop={true} thickness="0.1">
  2 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 .5 1.5" to="5.5 .3 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 1.5 1.5" to="5.5 2.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 2.5 1.5" to="5.5 2.5 1.1" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="5.5 .5 1.5" to="4.5 .5 1.5" alwaysOnTop={true} thickness="0.158">
  5 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="4.5 .5 1.5" to="4.5 .3 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="4.5 .5 1.5" to="4.5 1.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="4.5 .5 1.5" to="3.5 .5 1.5" alwaysOnTop={true} thickness="0.122">
  3 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="3.5 .5 1.5" to="3.5 2.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="3.5 2.5 1.5" to="3.7 2.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="3.5 .5 1.5" to="1.5 .5 1.5" alwaysOnTop={true} thickness="0.1">
  2 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="1.5 0.5 1.5" to="1.5 0.3 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="1.5 0.5 1.5" to="0.5 0.5 1.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#33ff33" from="0.5 0.5 1.5" to="0.5 0.5 0.5" alwaysOnTop={true} thickness="0.071">
  1 频道
</LineAnnotation>

<LineAnnotation color="#ff3333" from="0.5 1.5 1.5" to="0.5 1.3 1.5" alwaysOnTop={true} thickness="0.071">
  无频道
</LineAnnotation>

<LineAnnotation color="#ff3333" from="1.5 1.5 0.5" to="1.5 1.3 0.5" alwaysOnTop={true} thickness="0.071">
  无频道
</LineAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

---

这是一个结构良好的示例：

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/assemblies/treelike_network_structure.snbt" />

    <BoxAnnotation color="#dddddd" min="6.9 0 4.9" max="9.1 4 7.1" thickness="0.05">
        注意样板供应器是如何以 8 个为一组分开的。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="5 4 4" max="8 5 5" thickness="0.05">
        两根满载频道的普通线缆汇合意味着你需要一根致密线缆。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="5 0 13" max="8 1 14" thickness="0.05">
        使用不同颜色的线缆以防止相邻线缆连接。
    </BoxAnnotation>


  <IsometricCamera yaw="315" pitch="30" />
</GameScene>

## 频道模式 (Channel Modes)

适用于 Minecraft 1.18 的 AE2 10.0.0 引入了新选项来改变 AE2 频道在你的世界中的行为方式。
在常规部分有一个新的配置选项 (`channels`) 来控制此选项，还有一个新的游戏内命令
供管理员在游戏内更改模式和配置。命令是 `/ae2 channelmode <mode>`
来更改它，`/ae2 channelmode` 来显示当前模式。当在游戏内更改模式时，所有现有的网络将
重新启动并立即使用新模式。

这恢复并改进了 Minecraft 1.12 中可用的选项，并为
那些只想要稍微轻松一点的游戏体验但不想完全移除该机制的玩家提供了更好的选择。

下表列出了配置文件和命令中可用的模式。

| 设置 | 描述 |
| --- | --- |
| `default` | 标准模式，线缆和自组网络的频道容量如本网站所述 |
| `x2` | 所有频道容量翻倍（普通线缆 16，致密线缆 64，自组网络支持 16 个频道） |
| `x3` | 所有频道容量增加至三倍（普通线缆 24，致密线缆 92，自组网络支持 24 个频道） |
| `x4` | 所有频道容量增加至四倍（普通线缆 32，致密线缆 128，自组网络支持 32 个频道） |
| `infinite` | 移除所有频道限制。控制器仍然会*显著*降低电网的功耗。智能线缆将仅在完全关闭（不携带频道）和完全开启（携带 1 个或多个频道）之间切换。 |
