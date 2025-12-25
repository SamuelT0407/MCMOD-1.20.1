---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 能源接收器
  icon: energy_acceptor
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:energy_acceptor
---

# 能源接收器 (The Energy Acceptor)

<Row gap="20">
<BlockImage id="energy_acceptor" scale="8" />

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../assets/blocks/cable_energy_acceptor.snbt" />
</GameScene>
</Row>

能源接收器将来自其他科技模组的常见能量形式转换为 AE2 的内部 [能量](../ae2-mechanics/energy.md) 形式，
AE。虽然 <ItemLink id="controller" /> 也可以这样做，但控制器面很有价值，所以通常最好使用
能源接收器。

Forge Energy 和 Techreborn Energy 的转换比例为

*   2 FE = 1 AE (Forge)
*   1 E  = 2 AE (Fabric)

转换速度完全取决于你的网络可以存储多少 AE，原因在
[此页面](../ae2-mechanics/energy.md) 上进行了解释。

## 变体 (Variants)

能源接收器有 2 种不同的变体：普通和面板/[子部件](../ae2-mechanics/cable-subparts.md)。这使你可以使某些设置更紧凑。

能源接收器可以在工作台中在普通和面板之间切换。

## 配方 (Recipe)

<RecipeFor id="energy_acceptor" />

<RecipeFor id="cable_energy_acceptor" />
