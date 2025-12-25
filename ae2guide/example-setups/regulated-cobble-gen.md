---
navigation:
  parent: example-setups/example-setups-index.md
  title: 自动调节的圆石生成器
  icon: minecraft:cobblestone
---

# 自动调节的圆石生成器 (Auto-Regulated Cobblestone Generator)

圆石生成器的自动化很简单，只需将 <ItemLink id="annihilation_plane" /> 面对一个标准的香草
手动圆石生成器即可。然而，这样做最终会让你的网络塞满圆石，所以需要一些调节。

由于破坏面板的工作方式（它们的行为就像 <ItemLink id="import_bus" />），我们不能简单地放置一个 <ItemLink id="level_emitter" />
面对带有 <ItemLink id="redstone_card" /> 的 <ItemLink id="export_bus" />（因为你不能在中间没有存储的情况下直接从导入到导出）。
我们必须更迂回一点。

<ItemLink id="toggle_bus" /> 允许你用红石信号连接和断开网络的各个部分，但它们会导致
网络在这样做时重新启动。有一个简单的解决方法：将切换总线放在 [子网络](../ae2-mechanics/subnetworks.md) 上
这样它只会重新启动子网络。

我们可以有一个独立的 <ItemLink id="annihilation_plane" /> 和 <ItemLink id="storage_bus" /> [子网络](../ae2-mechanics/subnetworks.md)
推入主网络上的 <ItemLink id="interface" />。切换总线将连接和断开子网络与
<ItemLink id="quartz_fiber" /> 的连接，切断面板的电力。

<GameScene zoom="4" interactive={true}>
  <ImportStructure src="../assets/assemblies/regulated_cobble_gen.snbt" />

<BoxAnnotation color="#dddddd" min="3 2 2" max="7 2.3 3">
        (1) 破坏面板：没有 GUI 可配置，但可以附魔效率和耐久以减少电力消耗。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2 2 2" max="2.3 3 3">
        (2) 存储总线：默认配置。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 2.3 2" max="2.7 2.7 2.3">
        (3) 切换总线：非常重要的是，切换总线是在
        子网络上，而不是主网络上。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="2.3 3 2.3" max="2.7 3.3 2.7">
        (4) 发信器：配置为圆石和所需数量，设置为“当低于限制时发出信号”。
  </BoxAnnotation>

  <BoxAnnotation color="#dddddd" min="1 2 3" max="2 3 2">
        (5) 接口：默认配置。
  </BoxAnnotation>

<DiamondAnnotation pos="0 2.5 1.5" color="#00ff00">
        连接到主网络
    </DiamondAnnotation>

<DiamondAnnotation pos="5 1.5 3.5" color="#00ff00">
        含水楼梯防止水流动并将熔岩变成黑曜石。
    </DiamondAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

## 配置 (Configurations)

* <ItemLink id="annihilation_plane" /> (1) 没有 GUI 可配置，但可以附魔效率和耐久以减少电力消耗。
* <ItemLink id="storage_bus" /> (2) 处于默认配置。
* <ItemLink id="toggle_bus" /> (3) 必须在石英纤维的子网络一侧，而不是主网络，否则主网络
  每次切换都会重新启动。
* <ItemLink id="level_emitter" /> (4) 配置为所需物品和数量，并设置为“当低于限制时发出信号”。
* <ItemLink id="interface" /> (5) 处于默认配置。

## 运作原理 (How It Works)

1. 圆石生成器制造一些圆石。
2. <ItemLink id="annihilation_plane" /> 破坏圆石。
3. <ItemLink id="storage_bus" /> 将圆石存储在 <ItemLink id="interface" /> 中，将其发送到主网络。
4. 当主网络中的圆石数量超过设定数量时，<ItemLink id="level_emitter" /> 停止
   发送信号，关闭 <ItemLink id="toggle_bus" />。
5. 这切断了子网络的电源，停止破坏面板的工作。
