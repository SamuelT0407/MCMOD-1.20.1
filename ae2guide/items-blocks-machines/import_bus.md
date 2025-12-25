---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: ME 输入总线
  icon: import_bus
  position: 220
categories:
- devices
item_ids:
- ae2:import_bus
---

# 输入总线 (The Import Bus)

<GameScene zoom="8" background="transparent">
<ImportStructure src="../assets/blocks/import_bus.snbt" />
</GameScene>

输入总线从它接触的库存中拉取物品和流体（以及其他任何东西，如果有插件）并将其推入
[网络存储](../ae2-mechanics/import-export-storage.md)。

为了减少滞后，如果输入总线最近没有导入任何东西，它就会进入一种
“睡眠模式”，在此模式下它运行缓慢，并在成功导入某些东西时唤醒并加速到全速（每秒 4 次操作）。

它们是 [线缆子部件](../ae2-mechanics/cable-subparts.md)。

## 过滤 (Filtering)

默认情况下，总线将导入它能访问的任何东西。插入其过滤器插槽的物品将充当白名单，仅
允许导入那些特定物品。

即使你实际上没有任何该物品，也可以从 JEI/REI 将物品和流体拖入插槽中。

用流体容器（如桶或流体储罐）右键单击以将该流体设置为过滤器，而不是桶或储罐物品。

## 升级 (Upgrades)

输入总线支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="capacity_card" /> 增加过滤器插槽的数量
*   <ItemLink id="speed_card" /> 增加每次操作移动的物品数量
*   <ItemLink id="fuzzy_card" /> 让总线按损坏等级过滤和/或忽略物品 NBT
*   <ItemLink id="inverter_card" /> 将过滤器从白名单切换为黑名单
*   <ItemLink id="redstone_card" /> 添加红石控制，允许高信号激活、低信号激活或每个脉冲一次

## 速度 (Speeds)

| 加速卡 | 每次操作移动的物品 |
|:-------------------|:--------------------------|
| 0                  | 1                         |
| 1                  | 8                         |
| 2                  | 32                        |
| 3                  | 64                        |
| 4                  | 96                        |

## 配方 (Recipe)

<RecipeFor id="import_bus" />
