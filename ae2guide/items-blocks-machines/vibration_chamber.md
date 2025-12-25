---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 振动室
  icon: vibration_chamber
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:vibration_chamber
---

# 振动室 (The Vibration Chamber)

<BlockImage id="vibration_chamber" p:active="true" scale="8" />

虽然向你的网络提供 [能量](../ae2-mechanics/energy.md) 的主要预期方法是
<ItemLink id="energy_acceptor" />，但振动室可以直接通过燃烧产生少量到中等量的 AE 能。

默认情况下（没有 [升级](upgrade_cards.md) 和默认配置），它产生 40 AE/t。

当网络的 [能量](../ae2-mechanics/energy.md) 存储已满时，振动室会减速以节省
燃料，但不能完全关闭。

## 设置 (Settings)

*   振动室提供对查看 AE 或 E/FE 中能量的全局设置的访问。

## 升级 (Upgrades)

振动室支持以下 [升级](upgrade_cards.md)：

*   <ItemLink id="energy_card" /> 将燃烧室的效率提高 +50%，最高 +150%，即基本效率的 250%。
*   <ItemLink id="speed_card" /> 将燃烧室的燃烧速率提高 +50%，最高 +150%，即基本功率输出的 250%。

## 配置 (Config)

振动室的属性可以在 .minecraft\config 文件夹下的 ae2 文件夹中的 common.json 中编辑。

*   baseEnergyPerFuelTick 设置振动室的基本、未升级效率。
*   minEnergyPerGameTick 设置最低可能的能量产生（即使网络
    不需要能量，燃烧室也会始终缓慢消耗一些燃料）。
*   maxEnergyPerGameTick 设置振动室的未升级最大输出（和速度）。

## 配方 (Recipe)

<RecipeFor id="vibration_chamber" />
