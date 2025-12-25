---
navigation:
  parent: example-setups/example-setups-index.md
  title: 一个“主网络”示例
  icon: controller
---

# 一个“主网络”示例 (An Example "Main Network")

许多其他设置都引用了“主网络”。你可能还会问所有这些 [设备](../ae2-mechanics/devices.md) 如何
组合成一个功能系统。这里有一个例子：

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/assemblies/treelike_network_structure.snbt" />

    <BoxAnnotation color="#dddddd" min="3.9 0 1.9" max="9.1 5 7.1" thickness="0.05">
        一大群样板供应器和装配室为合成、切石和锻造样板提供了大量空间。
        棋盘格模式允许供应器并行利用多个装配室，同时保持紧凑。
        8 个一组使得频道不可能路由错误。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="3.9 0 9.9" max="5.1 3 12.1" thickness="0.05">
        有些机器带有一个管道子网络，将其产出推入供应器。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="-0.1 0 8.9" max="1.1 3 13.1" thickness="0.05">
      一些终端和各种实用的小玩意。（你可能只想要一个合成终端，而不是一个普通终端 _和_ 合成终端）
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="-0.1 0 -0.1" max="2.1 3 8.1" thickness="0.05">
      一组并行处理单元。少数几个存储量较大，多数存储量较小。
      你可能希望在实际设置中拥有更多协处理器，但这对于这个场景来说有点太大了。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="5.9 0 13.9" max="7.1 1 15.1" thickness="0.05">
      你的控制器应该位于基地的中间，可能比这大一点。棒状结构很不错。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="11.9 0 7.9" max="13.1 4 13.1" thickness="0.05">
        各种存储方法，使用驱动器或存储总线。注意全都是 8 个一组。
    </BoxAnnotation>

    <BoxAnnotation color="#dddddd" min="10.9 0 0.9" max="13.1 2 7.1" thickness="0.05">
        各种存储方法，使用驱动器或存储总线。注意全都是 8 个一组。
    </BoxAnnotation>

  <IsometricCamera yaw="315" pitch="30" />
</GameScene>
