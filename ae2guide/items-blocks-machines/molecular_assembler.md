---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 分子装配室
  icon: molecular_assembler
  position: 310
categories:
- machines
item_ids:
- ae2:molecular_assembler
---

# 分子装配室 (The Molecular Assembler)

<BlockImage id="molecular_assembler" scale="8" />

分子装配室接收输入其中的物品并执行由相邻的 <ItemLink id="pattern_provider" /> 定义的操作，
或插入的 <ItemLink id="crafting_pattern" />、<ItemLink id="smithing_table_pattern" /> 或 <ItemLink id="stonecutting_pattern" />，
然后将结果推送到相邻的库存中。

此装配室有一个指定 1 橡木原木 = 4 橡木木板配方的合成样板。当橡木原木被送入上方漏斗时，
装配室合成并将橡木木板吐入下方漏斗。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../assets/assemblies/standalone_assembler.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 分子装配室的主要用途 (The Main Use Of The Molecular Assembler)

然而，它们的主要用途是在 <ItemLink id="pattern_provider" /> 旁边。样板供应器在这种情况下具有特殊的行为，
并将有关相关样板的信息连同原料一起发送到相邻的装配室。由于装配室自动将合成结果弹出
到相邻的库存（从而进入样板供应器的返回插槽），样板供应器上的装配室
就是自动化合成样板所需的全部内容。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/assembler_tower.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 升级 (Upgrades)

分子装配室支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="speed_card" />

## 配方 (Recipe)

<RecipeFor id="molecular_assembler" />

## 注意 (Note)

Optifine 破坏了“推送到相邻库存”功能，因此大多数带有装配室的合成设置将无法工作。
