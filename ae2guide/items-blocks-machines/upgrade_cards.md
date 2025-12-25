---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 升级卡
  icon: speed_card
  position: 410
categories:
- tools
item_ids:
- ae2:basic_card
- ae2:advanced_card
- ae2:redstone_card
- ae2:capacity_card
- ae2:void_card
- ae2:fuzzy_card
- ae2:speed_card
- ae2:inverter_card
- ae2:crafting_card
- ae2:equal_distribution_card
- ae2:energy_card
---

# 升级卡 (Upgrade Cards)

<Row>
  <ItemImage id="redstone_card" scale="2" />

  <ItemImage id="capacity_card" scale="2" />

  <ItemImage id="void_card" scale="2" />

  <ItemImage id="fuzzy_card" scale="2" />

  <ItemImage id="speed_card" scale="2" />

  <ItemImage id="inverter_card" scale="2" />

  <ItemImage id="crafting_card" scale="2" />

  <ItemImage id="equal_distribution_card" scale="2" />

  <ItemImage id="energy_card" scale="2" />
</Row>

升级卡改变 AE2 [设备](../ae2-mechanics/devices.md) 和机器的行为，增加它们的速度，提高它们的
过滤容量，启用红石控制等。

## 卡组件 (Card Components)

<Row>
  <ItemImage id="basic_card" scale="2" />

  <ItemImage id="advanced_card" scale="2" />
</Row>

卡是用基础卡或高级卡底座制作的

<Row>
  <RecipeFor id="basic_card" />

  <RecipeFor id="advanced_card" />
</Row>

## 红石卡 (Redstone Card)

<ItemImage id="redstone_card" scale="2" />

红石卡添加红石控制，在设备的 GUI 中添加一个切换按钮，以在各种红石条件之间切换。

<RecipeFor id="redstone_card" />

## 容量卡 (Capacity Card)

<ItemImage id="capacity_card" scale="2" />

容量卡增加输入、输出和存储总线以及成型面板中的过滤器插槽数量。

<RecipeFor id="capacity_card" />

## 溢出销毁卡 (Overflow Destruction Card)

<ItemImage id="void_card" scale="2" />

溢出销毁卡可以在 <ItemLink id="cell_workbench" /> 中应用于 [存储元件](storage_cells.md)，
如果元件已满，它将删除传入的物品。（确保 [分区](cell_workbench.md) 你的元件！）结合均分卡，
如果该特定物品的元件部分已满，即使其他物品的部分是空的，物品也会被销毁。

<RecipeFor id="void_card" />

## 模糊卡 (Fuzzy Card)

<ItemImage id="fuzzy_card" scale="2" />

模糊卡让带有过滤器的设备和工具按损坏等级过滤和/或忽略物品 NBT，允许你导出
所有铁斧，无论损坏等级和附魔如何，或者只导出损坏的钻石剑，而不是完全修复的。

下面是模糊损坏比较模式如何工作的示例，左侧是
总线配置，顶部是比较的物品。

| 25%                    | 10% 损坏的镐子 | 30% 损坏的镐子 | 80% 损坏的镐子 | 完全修复的镐子 |
| ---------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| 即将破碎的镐子  | ✅                   | \*\*\*\*            | \*\*\*\*            | \*\*\*\*            |
| 完全修复的镐子 | \*\*\*\*            | ✅                   | ✅                   | ✅                   |

| 50%                    | 10% 损坏的镐子 | 30% 损坏的镐子 | 80% 损坏的镐子 | 完全修复的镐子 |
| ---------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| 即将破碎的镐子  | ✅                   | ✅                   | \*\*\*\*            | \*\*\*\*            |
| 完全修复的镐子 | \*\*\*\*            | \*\*\*\*            | ✅                   | ✅                   |

| 75%                    | 10% 损坏的镐子 | 30% 损坏的镐子 | 80% 损坏的镐子 | 完全修复的镐子 |
| ---------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| 即将破碎的镐子  | ✅                   | ✅                   | \*\*\*\*            | \*\*\*\*            |
| 完全修复的镐子 | \*\*\*\*            |                     | ✅                   | ✅                   |

| 99%                    | 10% 损坏的镐子 | 30% 损坏的镐子 | 80% 损坏的镐子 | 完全修复的镐子 |
| ---------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| 即将破碎的镐子  | ✅                   | ✅                   | ✅                   | \*\*\*\*            |
| 完全修复的镐子 | \*\*\*\*            | \*\*\*\*            | \*\*\*\*            | ✅                   |

| 忽略 (Ignore)                 | 10% 损坏的镐子 | 30% 损坏的镐子 | 80% 损坏的镐子 | 完全修复的镐子 |
| ---------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| 即将破碎的镐子  | ✅                   | ✅                   | ✅                   | **✅**               |
| 完全修复的镐子 | **✅**               | **✅**               | **✅**               | ✅                   |

<RecipeFor id="fuzzy_card" />

## 加速卡 (Acceleration Card)

<ItemImage id="speed_card" scale="2" />

加速卡使东西运行得更快，使输入和输出总线每次操作移动更多物品，并使压印器
和装配室工作得更快。

<RecipeFor id="speed_card" />

## 反相卡 (Inverter Card)

<ItemImage id="inverter_card" scale="2" />

反相卡将设备和工具中的过滤器从白名单切换为黑名单。

<RecipeFor id="inverter_card" />

## 合成卡 (Crafting Card)

<ItemImage id="crafting_card" scale="2" />

合成卡让设备向你的 [自动合成](../ae2-mechanics/autocrafting.md)
系统发送合成请求以获取它想要的物品。

<RecipeFor id="crafting_card" />

## 均分卡 (Equal Distribution Card)

<ItemImage id="equal_distribution_card" scale="2" />

均分卡可以在 <ItemLink id="cell_workbench" /> 中应用于 [存储元件](storage_cells.md)，并
根据卡被 [分区](cell_workbench.md) 的内容将元件分成大小相等的部分。这可以防止一种物品类型完全
填满元件。

<RecipeFor id="equal_distribution_card" />

## 能量卡 (Energy Card)

<ItemImage id="energy_card" scale="2" />

能量卡为某些工具（如便携式终端）增加更多能量存储，并使 <ItemLink id="vibration_chamber" />
更有效率。

<RecipeFor id="energy_card" />
