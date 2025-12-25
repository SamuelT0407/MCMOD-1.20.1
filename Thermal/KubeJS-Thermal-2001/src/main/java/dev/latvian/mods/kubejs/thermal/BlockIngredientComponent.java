package dev.latvian.mods.kubejs.thermal;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import dev.latvian.mods.kubejs.recipe.RecipeJS;
import dev.latvian.mods.kubejs.recipe.RecipeKey;
import dev.latvian.mods.kubejs.recipe.component.RecipeComponent;

/**
 * Custom RecipeComponent for Thermal's BlockIngredient format.
 *
 * TRUNK: "block_id" -> {"Name": "block_id"}
 * LEAVES: "block_id" -> {"Name": "block_id", "Properties": {"persistent": "false"}}
 * LEAVES_ANY: "block_id" -> {"Name": "block_id"} (no Properties, matches all leaves)
 */
public class BlockIngredientComponent implements RecipeComponent<String> {

	/** For trunk - no Properties */
	public static final BlockIngredientComponent TRUNK = new BlockIngredientComponent(false);

	/** For leaves with persistent check - adds Properties: {persistent: "false"} */
	public static final BlockIngredientComponent LEAVES = new BlockIngredientComponent(true);

	/** For leaves without persistent check - no Properties */
	public static final BlockIngredientComponent LEAVES_ANY = new BlockIngredientComponent(false);

	private final boolean addPersistentFalse;

	public BlockIngredientComponent(boolean addPersistentFalse) {
		this.addPersistentFalse = addPersistentFalse;
	}

	@Override
	public Class<?> componentClass() {
		return String.class;
	}

	@Override
	public String componentType() {
		return "thermal_block_ingredient";
	}

	@Override
	public JsonElement write(RecipeJS recipe, String value) {
		JsonObject obj = new JsonObject();
		obj.addProperty("Name", value);

		if (addPersistentFalse) {
			JsonObject props = new JsonObject();
			props.addProperty("persistent", "false");
			obj.add("Properties", props);
		}

		return obj;
	}

	@Override
	public String read(RecipeJS recipe, Object from) {
		if (from instanceof String s) {
			return s;
		} else if (from instanceof JsonObject j && j.has("Name")) {
			return j.get("Name").getAsString();
		} else if (from instanceof JsonElement j) {
			if (j.isJsonPrimitive() && j.getAsJsonPrimitive().isString()) {
				return j.getAsString();
			}
			if (j.isJsonObject() && j.getAsJsonObject().has("Name")) {
				return j.getAsJsonObject().get("Name").getAsString();
			}
		}
		return "";
	}

	@Override
	public String checkEmpty(RecipeKey<String> key, String value) {
		return "";
	}
}
