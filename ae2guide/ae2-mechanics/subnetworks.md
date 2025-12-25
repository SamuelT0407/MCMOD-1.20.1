---
navigation:
  parent: ae2-mechanics/ae2-mechanics-index.md
  title: 子网络
---

# 子网络 (Subnetworks)

<GameScene zoom="4" interactive={true}>
<ImportStructure src="../assets/assemblies/subnet_demonstration.snbt" />

<DiamondAnnotation pos="6.5 2.5 0.5" color="#00ff00">
        物品管道子网络
    </DiamondAnnotation>

<DiamondAnnotation pos="5.5 2.5 0.5" color="#00ff00">
        流体管道子网络
    </DiamondAnnotation>

<DiamondAnnotation pos="4.5 2.5 0.5" color="#00ff00">
        经过过滤的破坏面板
    </DiamondAnnotation>

<DiamondAnnotation pos="3.5 2.5 0.5" color="#00ff00">
        成型面板子网络
    </DiamondAnnotation>

<DiamondAnnotation pos="2.5 2.5 0.5" color="#00ff00">
        使用接口-存储总线交互的子网络，作为一个主网络可以访问的本地子存储
    </DiamondAnnotation>

<DiamondAnnotation pos="1.5 1.5 0.5" color="#00ff00">
        另一个物品管道子网络，用于将充能物品返回到样板供应器
    </DiamondAnnotation>

<IsometricCamera yaw="195" pitch="30" />
</GameScene>

“子网络”是一个定义相当宽松的术语，但可以说子网络是任何支持你的主网络或执行某些小任务的网络。它们通常足够小，不需要控制器。它们主要的 2 个用途往往是：

*   限制哪些 [设备](../ae2-mechanics/devices.md) 可以访问哪些存储（你不会希望“管道”子网络上的输入总线访问你的主网络存储，否则它会将物品放入你的存储元件中，而不是目标容器中）。
*   节省主网络上的频道，比如让一个样板供应器输出到连接了多个机器上的多个存储总线的接口，只使用 1 个频道，而不是在每个机器上放一个样板供应器，使用多个频道。

不同颜色的线缆除了彼此不连接之外，与制作子网络无关。

它们可以是：

*   一组输入总线和存储总线，用于将物品或流体从一个容器转移到另一个容器，就像物品或流体管道一样
*   一个破坏面板和存储总线，这样破坏面板破坏的东西只能放入存储总线，允许你过滤破坏面板
*   一个接口和成型面板，这样任何插入接口的东西都会被推送到成型面板并放置/掉落在世界上
*   一个自动制造赛特斯石英的装置，由主网络上的 <ItemLink id="level_emitter" /> (发信器) 调节和控制
*   一个可以通过特殊的存储总线对接口交互从主网络访问的专用存储系统，以便存储农场的产出而不会无休止地溢出你的主存储
*   等等

对于制作子网络非常有用的是 <ItemLink id="quartz_fiber" /> (石英纤维)。它在网络之间传输能量而不连接它们，允许你为子网络供电，而无需到处放置能源接收器和电源线缆。
