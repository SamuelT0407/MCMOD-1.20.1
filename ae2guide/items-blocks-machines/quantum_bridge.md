---
navigation:
  parent: items-blocks-machines/items-blocks-machines-index.md
  title: 量子桥
  icon: quantum_ring
  position: 110
categories:
- network infrastructure
item_ids:
- ae2:quantum_link
- ae2:quantum_ring
---

# 量子网络桥 (The Quantum Network Bridge)

![成型的量子网络桥](../assets/diagrams/quantum_bridge_demonstration.png)

量子网络桥可以将 [网络](../ae2-mechanics/me-network-connections.md) 扩展到无限距离，甚至跨越维度。
它们总共可以携带 32 个频道（无论线缆如何连接到每个面），本质上
就像一根无线 [致密线缆](cables.md#dense-cable)。

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/quantum_bridge_internal_structure_1.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

<GameScene zoom="4" background="transparent">
  <ImportStructure src="../assets/assemblies/quantum_bridge_internal_structure_2.snbt" />

  <BoxAnnotation color="#33dd33" min="1 1 1" max="6 2 3">
        两个端点之间的虚构线缆
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

值得注意的是，**双方都必须加载区块**，如果 2 侧相距很远，必须使用 <ItemLink id="spatial_anchor" /> 或其他区块加载器。

# 量子环 (Quantum Ring)

<BlockImage id="quantum_ring" scale="8" />

八个这样的方块放置在 <ItemLink id="quantum_link" /> 周围将创建一个
量子网络桥。只有与 <ItemLink id="quantum_link" /> 相邻的 4 个 <ItemLink id="quantum_ring" /> 方块
接受网络连接，
4 个角方块不能连接到线缆。

## 配方 (Recipe)

<RecipeFor id="quantum_ring" />

# 量子链接室 (Quantum Link Chamber)

<BlockImage id="quantum_link" scale="8" />

其中一个方块被 <ItemLink id="quantum_ring" /> 包围
将创建一个量子网络桥。此方块不连接到任何线缆，仅在
完整桥形成时注册为网络的一部分。

此方块的库存只能容纳单个 <ItemLink id="quantum_entangled_singularity" /> 并且是
可自动化的。

## 配方 (Recipe)

<RecipeFor id="quantum_link" />
