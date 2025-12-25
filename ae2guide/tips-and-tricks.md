---
navigation:
  title: 技巧与提示
  position: 20
---

# 技巧与提示

一些随机的建议汇总

* 移除 Optifine (如果你安装了的话)。
* 你可以旋转并缩放带有缩放和注释隐藏/显示按钮的指南场景。
* 保持你的网络呈树状结构，避免产生环路。
* 除非你深刻理解 [频道](ae2-mechanics/channels.md) 在网络中是如何路由的，否则全方块 [设备](ae2-mechanics/devices.md) 最好保持在 8 个或以下一组。
* 为所有的 [样板](items-blocks-machines/patterns.md) 选择一种木材并坚持使用。是的，启用样板中的“允许替换”有时是有效的，但在所有地方使用相同的木材类型可以大大减少麻烦。
* 在 <ItemLink id="pattern_access_terminal" /> (样板终端) 中垂直排列你的 [样板](items-blocks-machines/patterns.md)，或者在你的 [样板供应器](items-blocks-machines/pattern_provider.md) 之间分配样板，以便配方可以并行处理。
* 添加一个 [能源元件](items-blocks-machines/energy_cells.md) (Energy Cell) 以便你的网络可以处理电力峰值。
* 你可以在 <ItemLink id="condenser" /> (物质聚合器) 中使用水。
* 保持网络整洁的最好方法是不要把随机的怪物掉落物（如剑和盔甲）放进去。每种独特的附魔和耐久度组合都是另一种 [类型](ae2-mechanics/bytes-and-types.md)。
* 当返回 [处理样板](items-blocks-machines/patterns.md) 的结果时，必须发生“物品进入系统”事件，例如通过 <ItemLink id="import_bus" /> (输入总线)、<ItemLink id="interface" /> (ME 接口) 或 <ItemLink id="pattern_provider" /> (样板供应器) 的返回槽。你不能只通过 <ItemLink id="storage_bus" /> (存储总线) 将结果管道传输到箱子中。
* 别忘了你可以旋转并缩放带有缩放和注释隐藏/显示按钮的指南场景。
* <ItemLink id="pattern_provider" /> (样板供应器) 只会推送完整的配方批次，并且仅通过单面推送。这对于确保机器不会收到部分批次很有用，但有时你希望原料去往多个地方。
  你可以通过使用 <ItemLink id="interface" /> (ME 接口) 来实现这一点，无论是作为一个[“管道”子网络](example-setups/pipe-subnet.md)，还是利用其同时容纳多种不同物品堆、流体、化学品等的能力，将其用作一种中间箱/罐。
* 你可以缩放和旋转带有缩放和注释隐藏/显示按钮的指南场景。(原文重复强调，此处保留)
