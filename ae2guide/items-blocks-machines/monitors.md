---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 监控器
  icon: storage_monitor
  position: 210
categories:
- devices
item_ids:
- ae2:storage_monitor
- ae2:conversion_monitor
---

# 监控器 (Monitors)

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/assemblies/monitors.snbt" />
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

监控器允许在不打开 GUI 的情况下可视化单一物品或流体类型并与其交互。

监控器将继承它们安装在其上的 [线缆](cables.md) 的颜色。

如果监控器在地板或天花板上，你可以用 <ItemLink id="certus_quartz_wrench" /> 旋转它。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

# 存储监控器 (Storage Monitor)

将显示一个物品或流体及其数量。把它们放在你的农场旁边什么的...

*不* 需要 [频道](../ae2-mechanics/channels.md)。

按键绑定：

*   用物品右键单击或用流体容器双击右键以将监控器设置为该物品/流体。
*   空手右键单击以清除监控器。
*   空手 Shift 右键单击以锁定监控器。

## 配方 (Recipe)

<RecipeFor id="storage_monitor" />

# 转换监控器 (Conversion Monitor)

转换监控器类似于存储监控器，但允许你插入或提取其配置的物品。

如果配置的物品是 [可自动合成的](../ae2-mechanics/autocrafting.md) 且存储中没有，尝试拿取一个
物品将打开一个 UI 来指定要合成的数量。

*需要* [频道](../ae2-mechanics/channels.md)。

额外的按键绑定：

*   左键单击以提取一组配置的物品，或者如果存储中没有，则请求合成该物品。
*   用任何物品右键单击以插入该物品。
*   空手右键单击以从你的库存中插入所有配置的物品。

## 配方 (Recipe)

<RecipeFor id="conversion_monitor" />
