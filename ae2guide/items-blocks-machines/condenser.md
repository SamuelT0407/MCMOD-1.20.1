---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 物质聚合器
  icon: condenser
  position: 310
categories:
- machines
item_ids:
- ae2:condenser
---

# 物质聚合器 (The Matter Condenser)

<BlockImage id="condenser" scale="8" />

物质聚合器既可以用作垃圾桶，也可以用来制造 <ItemLink id="matter_ball" /> 和
[奇点](singularities.md)。它可以接受存储元件可以存储的任何物品或流体等。

## 设置/配方 (Settings/Recipes)

*   在垃圾桶模式下，物质聚合器只是销毁进入它的所有东西
*   在物质球模式下，聚合器用你放入其中的任何东西制作 <ItemLink id="matter_ball" />。
    此模式要求你在聚合器的顶部插槽中放置一个存储组件。物质球每个需要 256 个物品或桶，
    所以一个 <ItemLink id="cell_component_1k" />（提供 8192 位容量）就足够了。
*   在物质奇点模式下，聚合器用你放入其中的任何东西制作 [奇点](singularities.md)。
    此模式要求你在聚合器的顶部插槽中放置一个存储组件。奇点每个需要 256,000 个物品或桶，
    所以一个 <ItemLink id="cell_component_64k" />（提供 524,288 位容量）就足够了。

请注意，在后两种产生某些资源的模式下，物质聚合器 *会* 堵塞，如果能量和输出物品缓冲区都已完全填满，
将不再接受任何输入。

## 配方 (Recipe)

<RecipeFor id="condenser" />
