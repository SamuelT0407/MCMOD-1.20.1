---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 发信器
  icon: level_emitter
  position: 220
categories:
- devices
item_ids:
- ae2:level_emitter
- ae2:energy_level_emitter
---

# 发信器 (The Level Emitter)

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/level_emitter.snbt" />
</GameScene>

发信器根据 [网络存储](../ae2-mechanics/import-export-storage.md) 中物品的数量发出红石信号。

还有一个版本根据网络中存储的 [能量](../ae2-mechanics/energy.md) 发出红石信号。

即使你实际上没有任何该物品，也可以从 JEI/REI 将物品和流体拖入插槽中。

用流体容器（如桶或流体储罐）右键单击以将该流体设置为过滤器，而不是桶或储罐物品。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

与其他 [设备](../ae2-mechanics/devices.md) 不同，发信器 *不需要* [频道](../ae2-mechanics/channels.md)。

## 设置 (Settings)

*   发信器可以设置为“大于/等于”或“小于”模式
*   当插入 <ItemLink id="crafting_card" /> 时，可以设置为“当物品正在合成时发出红石信号”或
    “发出红石信号以合成物品”

## 升级 (Upgrades)

发信器支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="fuzzy_card" /> 让发信器按损坏等级过滤和/或忽略物品 NBT
*   <ItemLink id="crafting_card" /> 启用合成功能

## 合成功能 (Crafting Functionality)

如果插入了 <ItemLink id="crafting_card" />，发信器将切换到合成模式。

这将启用两个选项：

第一个选项，“当物品正在合成时发出红石信号”，使发信器在你的 [自动合成](../ae2-mechanics/autocrafting.md)
通过 <ItemLink id="pattern_provider" /> 合成某些特定物品时发出红石信号。这对于仅在实际使用时打开特定的
耗电自动化设置非常有用。

第二个选项，“发出红石信号以合成物品”，对于像无限农场和
只有机会产生输出而不是保证输出的自动化设置等特定用例非常有用。
此设置为发信器过滤器插槽中的任何物品创建了一个供 [自动合成](../ae2-mechanics/autocrafting.md) 使用的虚拟 [样板](patterns.md)。
（为了正确的功能，你的 <ItemLink id="pattern_provider" /> 中 **不应该存在** 同一物品的实际样板）

这个“样板”没有定义，甚至不关心原料。
它所说的只是“如果你从这个发信器发出红石信号，ME 系统将在不久或遥远的未来的某个时候收到这个物品”。这通常用于激活和停用不需要输入原料的无限农场，
或激活处理递归配方（标准自动合成无法理解）的系统，例如，“1 圆石 = 2 圆石”
如果你有一个复制圆石的机器。

## 配方 (Recipe)

<RecipeFor id="level_emitter" />

<RecipeFor id="energy_level_emitter" />
