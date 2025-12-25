---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 样板
  icon: crafting_pattern
  position: 410
categories:
- tools
item_ids:
- ae2:blank_pattern
- ae2:crafting_pattern
- ae2:processing_pattern
- ae2:smithing_table_pattern
- ae2:stonecutting_pattern
---

# 样板 (Patterns)

<ItemImage id="crafting_pattern" scale="4" />

样板是在 <ItemLink id="pattern_encoding_terminal" /> 中用空白样板制作的，并插入到 <ItemLink id="pattern_provider" />
或 <ItemLink id="molecular_assembler" /> 中。

有几种不同类型的样板用于不同的事物：

*   <ItemLink id="crafting_pattern" /> 编码由工作台制作的配方。它们可以直接放入 <ItemLink id="molecular_assembler" /> 中，使其
    在给予原料时合成结果，但它们的主要用途是在分子装配室旁边的 <ItemLink id="pattern_provider" /> 中。
    样板供应器在这种情况下具有特殊行为，并将相关样板连同原料一起发送到相邻的装配室。
    由于装配室自动将合成结果弹出到相邻的库存，样板供应器上的装配室就是自动化合成样板所需的全部内容。

***

*   <ItemLink id="smithing_table_pattern" /> 与合成样板非常相似，但它们编码锻造台配方。它们也由样板供应器
    和分子装配室自动化，并以完全相同的方式运行。事实上，合成、锻造和切石样板可以
    在同一设置中使用。

***

*   <ItemLink id="stonecutting_pattern" /> 与合成样板非常相似，但它们编码切石机配方。它们也由样板供应器
    和分子装配室自动化，并以完全相同的方式运行。事实上，合成、锻造和切石样板可以
    在同一设置中使用。

***

*   <ItemLink id="processing_pattern" /> 是自动合成灵活性的来源。它们是最通用的类型，只是简单地
    说“如果样板供应器将这些原料推送到相邻的库存，ME 系统将在不久或遥远的未来的某个时候收到这些物品”。
    它们是你自动化几乎任何模组机器或熔炉等的方式。因为它们在
    使用上如此通用，并且不关心在推送原料和接收结果之间发生了什么，你可以做一些非常奇怪的事情，比如将
    原料输入到整个复杂的工厂生产链中，该链将整理东西，从无限生产农场获取其他原料，
    打印整个蜜蜂电影剧本，ME 系统并不关心，只要它得到了样板指定的结果。事实上，
    它甚至不关心原料是否与结果有任何关联。你可以告诉它“1 樱桃木板 = 1 下界之星”，并让
    你的凋灵农场在收到樱桃木板时杀死凋灵，它就会工作。

支持具有相同样板的多个 <ItemLink id="pattern_provider" /> 并并行工作。此外，你可以有一个样板说，
例如，8 圆石 = 8 石头，而不是 1 圆石 = 1 石头，样板供应器将在每次操作中将 8 圆石插入
你的熔炼设置，而不是一次一个。

## 配方 (Recipe)

<RecipeFor id="blank_pattern" />
