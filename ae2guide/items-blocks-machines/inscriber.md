---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 压印器
  icon: inscriber
  position: 310
categories:
- machines
item_ids:
- ae2:inscriber
---

# 压印器 (The Inscriber)

<BlockImage id="inscriber" scale="8" />

压印器用于使用 [压印模板](presses.md) 压印电路和 [处理器](processors.md)，并将各种物品粉碎成粉末。
它可以接受 AE2 的电源 (AE) 或 Fabric/Forge Energy (E/FE)。它是有侧面区分的，从不同侧面插入物品
会将它们插入其库存中的不同插槽。为了方便起见，它可以用 <ItemLink id="certus_quartz_wrench" /> 旋转。
它还可以设置为将合成结果推送到相邻的库存中。

输入缓冲区的大小可以调整。例如，如果你想从一个库存供料给一大群压印器，
你会想要一个小的缓冲区，以便材料在压印器之间更优化地分配（而不是第一个
压印器填满 64 个，其余的都是空的）。

4 个电路压印模板用于制作 [处理器](processors.md)

<Row>
  <ItemImage id="silicon_press" scale="4" />

  <ItemImage id="logic_processor_press" scale="4" />

  <ItemImage id="calculation_processor_press" scale="4" />

  <ItemImage id="engineering_processor_press" scale="4" />
</Row>

虽然名称压印模板可以用来像铁砧一样命名方块，这对于在 <ItemLink id="pattern_access_terminal" /> 中标记事物很有用。

<ItemImage id="name_press" scale="4" />

## 设置 (Settings)

* 压印器可以设置为有侧面区分（如下所述）或允许输入到任何侧面的任何插槽，由内部过滤器决定
    什么去哪里。在非侧面模式下，物品无法从顶部和底部插槽中提取。
* 压印器可以设置为将物品推送到相邻的库存中。
* 输入缓冲区的大小可以调整，大选项适用于你手动供料的独立压印器，
小选项是为了使大型并行化设置更可行。

## GUI 和侧面性 (The GUI And Sidedness)

在侧面模式下，压印器根据你插入或提取的侧面来过滤什么去哪里。

![压印器 GUI](../assets/diagrams/inscriber_gui.png) ![压印器侧面](../assets/diagrams/inscriber_sides.png)

A. **顶部输入** 通过压印器的顶部访问（既可以推送到此插槽，也可以从中拉取）

B. **中心输入** 通过压印器的左、右、前和后侧插入（只能推送到此插槽，不能从中拉取）

C. **底部输入** 通过压印器的底部访问（既可以推送到此插槽，也可以从中拉取）

D. **输出** 通过压印器的左、右、前和后侧拉取（只能从中拉取，不能推送到此插槽）

## 简单自动化 (Simple Automation)

作为一个例子，侧面性和可旋转性意味着你可以像这样半自动化压印器：

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/inscriber_hopper_automation.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

或者在非侧面模式下只需用管道输入和输出压印器。

## 升级 (Upgrades)

压印器支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="speed_card" />

## 配方 (Recipe)

<RecipeFor id="inscriber" />
