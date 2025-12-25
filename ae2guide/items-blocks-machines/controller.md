---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 控制器
  icon: controller
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:controller
---

# 控制器 (The Controller)

<BlockImage id="controller" p:state="online" scale="8" />

控制器是 [ME 网络](../ae2-mechanics/me-network-connections.md) 的路由中心。
没有它，网络是“Ad-Hoc”的，总共只能有最多 8 个使用频道的 [设备](../ae2-mechanics/devices.md)。

一个 [ME 网络](../ae2-mechanics/me-network-connections.md) 中不可能有 2 个控制器。

控制器每个面提供 32 个 [频道](../ae2-mechanics/channels.md)。

控制器每个控制器方块需要 6 AE/t 才能
运行。每个控制器方块可以存储 8000 AE，因此较大的网络可能需要额外的
能量存储。有关详细信息，请参阅 [能量](../ae2-mechanics/energy.md)。

多方块控制器可以以相当自由的形式构建。

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../assets/assemblies/controllers.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

但是，必须遵循一些规则：

1.  [ME 网络](../ae2-mechanics/me-network-connections.md) 上的所有控制器方块必须连接；否则方块将变红。
2.  控制器的大小必须在 7x7x7 以内；否则它将变红。
3.  一个控制器最多可以在 1 个轴上有 2 个相邻的方块；如果一个方块违反此规则，它将禁用并变红。

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../assets/assemblies/controller_rules.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

只要遵循所有规则并通电，控制器就应该发光并
循环颜色。

你可以右键单击控制器以获得与 <ItemLink id="network_tool" /> 相同的 GUI

## 配方 (Recipe)

<RecipeFor id="controller" />
