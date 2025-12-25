---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 处理器
  icon: logic_processor
  position: 010
categories:
- misc ingredients blocks
item_ids:
- ae2:logic_processor
- ae2:calculation_processor
- ae2:engineering_processor
- ae2:printed_silicon
- ae2:printed_logic_processor
- ae2:printed_calculation_processor
- ae2:printed_engineering_processor
- ae2:silicon
---

# 处理器 (Processors)

<Row>
  <ItemImage id="logic_processor" scale="4" />

  <ItemImage id="calculation_processor" scale="4" />

  <ItemImage id="engineering_processor" scale="4" />
</Row>

处理器是 AE2 [设备](../ae2-mechanics/devices.md) 和机器的主要成分之一。它们也是你的第一个
大的自动化挑战。有三种类型的处理器，分别用金、<ItemLink id="certus_quartz_crystal" />
和钻石制成。它们是在 <ItemLink id="inscriber" /> 中使用 [压印模板](presses.md) 制作的，这是一个多步骤
过程（通常通过一系列压印器和过滤管道实现）。

## 生产步骤 (Production Steps)

<Column gap="5">
  1.  收集/制作所需的成分：硅、红石、金、<ItemLink id="certus_quartz_crystal" />、钻石。

  <RecipeFor id="silicon" />

  <br />

  2.  压印先决条件的印刷电路组件

  <Row>
    <RecipeFor id="printed_silicon" />

    <RecipeFor id="printed_logic_processor" />
  </Row>

  <Row>
    <RecipeFor id="printed_calculation_processor" />

    <RecipeFor id="printed_engineering_processor" />
  </Row>

  <br />

  3.  最终组装

  <Row>
    <RecipeFor id="logic_processor" />

    <RecipeFor id="calculation_processor" />
  </Row>

  <RecipeFor id="engineering_processor" />
</Column>
