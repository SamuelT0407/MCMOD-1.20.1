---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 能量元件
  icon: energy_cell
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:energy_cell
- ae2:dense_energy_cell
- ae2:creative_energy_cell
---

# 能量元件 (Energy Cells)

<Row gap="20">
  <BlockImage id="energy_cell" scale="8" p:fullness="4" />

  <BlockImage id="dense_energy_cell" scale="8" p:fullness="4" />

  <BlockImage id="creative_energy_cell" scale="8" />
</Row>

能量元件为网络提供更多 [能量](../ae2-mechanics/energy.md) 存储。一定量的能量缓冲区有助于平滑
在插入或提取大量物品时的能量消耗峰值，并且更大量的能量存储
允许网络在不产生能量时（如太阳能电池板在晚上）运行，或处理
[空间存储](../ae2-mechanics/spatial-io.md) 的巨大瞬时能量消耗。

## 填充条 (Fill Bars)

<Row>
<BlockImage id="energy_cell" scale="4" p:fullness="0" />
<BlockImage id="energy_cell" scale="4" p:fullness="1" />
<BlockImage id="energy_cell" scale="4" p:fullness="2" />
<BlockImage id="energy_cell" scale="4" p:fullness="3" />
<BlockImage id="energy_cell" scale="4" p:fullness="4" />
</Row>

元件侧面的条对应于它有多少能量。

*   0 当电量低于 25% 时
*   1 当电量在 25% 到 50% 之间时
*   2 当电量在 50% 到 75% 之间时
*   3 当电量在 75% 到 99% 之间时
*   4 当电量高于 99% 时

## 元件类型 (Types Of Cell)

*   <ItemLink id="energy_cell" /> 可以存储 200k AE，对于大多数用例来说，仅仅一个就足够了，可以轻松处理
    正常网络使用的电涌。
*   <ItemLink id="dense_energy_cell" /> 可以存储 1.6M AE，适用于你想用存储的电力运行网络，或者
    处理大型 [空间存储](../ae2-mechanics/spatial-io.md) 设置的巨大瞬时能量消耗。
*   <ItemLink id="creative_energy_cell" /> 是用于测试的创造模式物品，提供无限能量之类的。

## 配方 (Recipes)

<Row>
  <RecipeFor id="energy_cell" />

  <RecipeFor id="dense_energy_cell" />
</Row>
