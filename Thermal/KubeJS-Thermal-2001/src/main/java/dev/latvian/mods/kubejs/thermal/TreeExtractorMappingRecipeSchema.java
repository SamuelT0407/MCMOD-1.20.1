package dev.latvian.mods.kubejs.thermal;

import cofh.lib.util.recipes.RecipeJsonUtils;
import dev.latvian.mods.kubejs.fluid.OutputFluid;
import dev.latvian.mods.kubejs.recipe.RecipeKey;
import dev.latvian.mods.kubejs.recipe.component.FluidComponents;
import dev.latvian.mods.kubejs.recipe.component.NumberComponent;
import dev.latvian.mods.kubejs.recipe.component.StringComponent;
import dev.latvian.mods.kubejs.recipe.schema.RecipeSchema;

/**
 * Tree Extractor Recipe Schema
 *
 * This schema checks for natural trees (leaves with persistent: false).
 * For matching all leaves (including player-placed), use TreeExtractorAnyRecipeSchema.
 *
 * Usage:
 *   event.recipes.thermal.tree_extractor(
 *       Fluid.of('thermal:resin', 15),
 *       'minecraft:oak_log',
 *       'minecraft:oak_leaves'
 *   )
 *   .sapling('minecraft:oak_sapling')  // Environment check (empty = skip)
 *   .min_height(4).max_height(10)
 *   .min_leaves(16).max_leaves(24)
 */
public interface TreeExtractorMappingRecipeSchema {
	// Required fields
	RecipeKey<OutputFluid> RESULT = FluidComponents.OUTPUT.key(RecipeJsonUtils.RESULT).alt(RecipeJsonUtils.FLUID);
	RecipeKey<String> TRUNK = BlockIngredientComponent.TRUNK.key(RecipeJsonUtils.TRUNK);
	RecipeKey<String> LEAVES = BlockIngredientComponent.LEAVES.key(RecipeJsonUtils.LEAVES).alt(RecipeJsonUtils.LEAF);

	// Optional fields
	RecipeKey<String> SAPLING = StringComponent.ANY.key("sapling").optional("").allowEmpty();
	RecipeKey<Integer> MIN_HEIGHT = NumberComponent.INT.key("min_height").optional(3);
	RecipeKey<Integer> MAX_HEIGHT = NumberComponent.INT.key("max_height").optional(3);
	RecipeKey<Integer> MIN_LEAVES = NumberComponent.INT.key("min_leaves").optional(3);
	RecipeKey<Integer> MAX_LEAVES = NumberComponent.INT.key("max_leaves").optional(3);

	RecipeSchema SCHEMA = new RecipeSchema(ThermalRecipeJS.class, ThermalRecipeJS::new,
		RESULT, TRUNK, LEAVES, SAPLING, MIN_HEIGHT, MAX_HEIGHT, MIN_LEAVES, MAX_LEAVES);
}
