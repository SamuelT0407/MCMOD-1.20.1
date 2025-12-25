---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 存储元件
  icon: item_storage_cell_1k
  position: 410
categories:
- tools
item_ids:
- ae2:item_cell_housing
- ae2:fluid_cell_housing
- ae2:cell_component_1k
- ae2:cell_component_4k
- ae2:cell_component_16k
- ae2:cell_component_64k
- ae2:cell_component_256k
- ae2:item_storage_cell_1k
- ae2:item_storage_cell_4k
- ae2:item_storage_cell_16k
- ae2:item_storage_cell_64k
- ae2:item_storage_cell_256k
- ae2:fluid_storage_cell_1k
- ae2:fluid_storage_cell_4k
- ae2:fluid_storage_cell_16k
- ae2:fluid_storage_cell_64k
- ae2:fluid_storage_cell_256k
---

# 存储元件 (Storage Cells)

<Column>
  <Row>
    <ItemImage id="item_storage_cell_1k" scale="4" />

    <ItemImage id="item_storage_cell_4k" scale="4" />

    <ItemImage id="item_storage_cell_16k" scale="4" />

    <ItemImage id="item_storage_cell_64k" scale="4" />

    <ItemImage id="item_storage_cell_256k" scale="4" />
  </Row>

  <Row>
    <ItemImage id="fluid_storage_cell_1k" scale="4" />

    <ItemImage id="fluid_storage_cell_4k" scale="4" />

    <ItemImage id="fluid_storage_cell_16k" scale="4" />

    <ItemImage id="fluid_storage_cell_64k" scale="4" />

    <ItemImage id="fluid_storage_cell_256k" scale="4" />
  </Row>
</Column>

存储元件是应用能源中的主要存储方法之一。它们放在 <ItemLink id="drive" />
或 <ItemLink id="chest" /> 中。

请参阅 [字节和类型](../ae2-mechanics/bytes-and-types.md) 以获取有关其字节和类型容量的说明。

如果元件为空，可以通过手持元件 shift 右键单击从外壳中移除存储组件。

## 具有不同类型计数的存储容量 (Storage Capacity with Varying Type Count)

[类型的预付成本](../ae2-mechanics/bytes-and-types.md) 使得持有 1 种类型的元件可以容纳的使用量是使用所有 63 种类型的元件的 2 倍。

| 元件                                     | 使用 1 种类型时的次元件总容量 | 使用 63 种类型时的次元件总容量 |
| ---------------------------------------- | ----------------------------------------: | ------------------------------------------: |
| <ItemLink id="item_storage_cell_1k" />   |                                     8,128 |                                       4,160 |
| <ItemLink id="item_storage_cell_4k" />   |                                    32,512 |                                      16,640 |
| <ItemLink id="item_storage_cell_16k" />  |                                   130,048 |                                      66,560 |
| <ItemLink id="item_storage_cell_64k" />  |                                   520,192 |                                     266,240 |
| <ItemLink id="item_storage_cell_256k" /> |                                 2,080,768 |                                   1,064,960 |


## 分区 (Partitioning)

元件可以被过滤以仅接受特定物品，就像 <ItemLink id="storage_bus" /> 可以被过滤一样。这是
在 <ItemLink id="cell_workbench" /> 中完成的。

即使你实际上没有任何该物品，也可以从 JEI/REI 将物品拖入插槽中。

## 升级 (Upgrades)

存储元件支持以下 [升级](upgrade_cards.md)，通过 <ItemLink id="cell_workbench" /> 插入：

*   <ItemLink id="fuzzy_card" />（不适用于流体元件）让元件通过损坏等级分区和/或忽略物品 NBT
*   <ItemLink id="inverter_card" /> 将过滤器从白名单切换为黑名单
*   <ItemLink id="equal_distribution_card" /> 为每种类型分配相同量的元件字节空间，因此一种类型无法填满整个元件
*   <ItemLink id="void_card" /> 如果元件已满（或在均分卡的情况下为该特定类型分配的空间），则销毁插入的物品，用于防止农场溢出。小心分区！
*   便携式元件可以接受 <ItemLink id="energy_card" /> 以增加电池容量

## 着色 (Coloring)

便携式物品和流体元件可以像皮革盔甲一样着色，通过将它们与染料一起合成。

# 外壳 (Housings)

元件可以用存储组件和外壳制作，或者用围绕存储组件的外壳配方制作：

<Row>
  <Recipe id="network/cells/item_storage_cell_1k" />

  <Recipe id="network/cells/item_storage_cell_1k_storage" />
</Row>

外壳本身的制作方法如下：

<Row>
  <RecipeFor id="item_cell_housing" />

  <RecipeFor id="fluid_cell_housing" />
</Row>

# 存储组件 (Storage Components)

存储组件是所有 AE2 元件的核心，决定了元件的容量。每一级都将容量
增加 4 倍，并消耗 3 个上一级组件。

<Column>
  <Row>
    <RecipeFor id="cell_component_1k" />

    <RecipeFor id="cell_component_4k" />

    <RecipeFor id="cell_component_16k" />
  </Row>

  <Row>
    <RecipeFor id="cell_component_64k" />

    <RecipeFor id="cell_component_256k" />
  </Row>
</Column>

# 物品存储元件 (Item Storage Cells)

物品存储元件最多可容纳 63 种不同类型的物品，并提供所有标准容量。

<Column>
  <Row>
    <Recipe id="network/cells/item_storage_cell_1k_storage" />

    <Recipe id="network/cells/item_storage_cell_4k_storage" />

    <Recipe id="network/cells/item_storage_cell_16k_storage" />
  </Row>

  <Row>
    <Recipe id="network/cells/item_storage_cell_64k_storage" />

    <Recipe id="network/cells/item_storage_cell_256k_storage" />
  </Row>
</Column>

## 便携式物品存储 (Portable Item Storage)

这些就像你口袋里的一个小 <ItemLink id="chest" />，或者像一种背包。它们可以在 <ItemLink id="charger" /> 中充电

与标准存储元件不同，随着字节容量的增加，这些元件的类型容量实际上会 *减少*，并且具有一半的
总字节容量。

除了所有元件都能接收的升级卡外，这些元件还接受 <ItemLink id="energy_card" /> 以升级其内部电池。

<Column>
  <Row>
    <RecipeFor id="portable_item_cell_1k" />

    <RecipeFor id="portable_item_cell_4k" />

    <RecipeFor id="portable_item_cell_16k" />
  </Row>

  <Row>
    <RecipeFor id="portable_item_cell_64k" />

    <RecipeFor id="portable_item_cell_256k" />
  </Row>
</Column>

# 流体存储元件 (Fluid Storage Cells)

流体存储元件最多可容纳 5 种不同类型的流体，并提供所有标准容量。

<Column>
  <Row>
    <Recipe id="network/cells/fluid_storage_cell_1k_storage" />

    <Recipe id="network/cells/fluid_storage_cell_4k_storage" />

    <Recipe id="network/cells/fluid_storage_cell_16k_storage" />
  </Row>

  <Row>
    <Recipe id="network/cells/fluid_storage_cell_64k_storage" />

    <Recipe id="network/cells/fluid_storage_cell_256k_storage" />
  </Row>
</Column>

## 便携式流体存储 (Portable Fluid Storage)

这些就像你口袋里的一个小 <ItemLink id="chest" />，或者像一种背包。它们可以在 <ItemLink id="charger" /> 中充电

与标准存储元件不同，随着字节容量的增加，这些元件的类型容量实际上会 *减少*，并且具有一半的
总字节容量。

除了所有元件都能接收的升级卡外，这些元件还接受 <ItemLink id="energy_card" /> 以升级其内部电池。

<Column>
  <Row>
    <RecipeFor id="portable_fluid_cell_1k" />

    <RecipeFor id="portable_fluid_cell_4k" />

    <RecipeFor id="portable_fluid_cell_16k" />
  </Row>

  <Row>
    <RecipeFor id="portable_fluid_cell_64k" />

    <RecipeFor id="portable_fluid_cell_256k" />
  </Row>
</Column>

# 创造物品和流体元件 (Creative Item and Fluid Cells)

<Row>
  <ItemImage id="creative_item_cell" scale="2" />

  <ItemImage id="creative_fluid_cell" scale="2" />
</Row>

创造物品和流体元件 **不提供无限存储**。相反，它们充当无限的源和汇，无论你
将它们 [分区](cell_workbench.md) 为何种物品或流体。
