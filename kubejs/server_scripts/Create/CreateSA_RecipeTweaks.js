ServerEvents.recipes(event => {

    event.remove({ id: 'create_sa:copper_propeler_recipe'})
    event.remove({ id: 'create_sa:andesite_jetpack_recipe'})
    event.remove({ id: 'create_sa:brass_jetpack_recipe'})
	event.remove({ id: 'create_sa:netherite_jetpack_recipe'})

    // Bronze Jetpack Recipe
    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' ABA ',
            'CADAC',
            'CEFEC'
		],
		key: {
			A: Ingredient.of('create_dd:bronze_ingot').toJson(),
			B: Ingredient.of('create:cogwheel').toJson(),
			C: Ingredient.of('create:encased_fan').toJson(),
			D: Ingredient.of('create_sa:hydraulic_engine').toJson(),
			E: Ingredient.of('create_sa:large_filling_tank').toJson(),
            F: Ingredient.of('create:copper_backtank').toJson()
		},
		result: Ingredient.of('create_sa:copper_jetpack_chestplate').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechanical_crafting/bronze_jetpack');

    // Mithril Jetpack Recipe
    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' ABA ',
            'CADAC',
            'CEFEC'
		],
		key: {
			A: Ingredient.of('create_dd:mithril_ingot').toJson(),
			B: Ingredient.of('create:cogwheel').toJson(),
			C: Ingredient.of('create:encased_fan').toJson(),
			D: Ingredient.of('create_sa:heat_engine').toJson(),
			E: Ingredient.of('create_sa:large_fueling_tank').toJson(),
            F: Ingredient.of('create_sa:copper_jetpack_chestplate').toJson()
		},
		result: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechanical_crafting/mithril_jetpack');

    // Bismuth Jetpack Recipe
    event.custom({
		type: "create:mechanical_crafting",
		pattern: [
			' ABA ',
            'CADAC',
            'CEFEC'
		],
		key: {
			A: Ingredient.of('enlightened_end:bismuth_ingot').toJson(),
			B: Ingredient.of('create:cogwheel').toJson(),
			C: Ingredient.of('create:encased_fan').toJson(),
			D: Ingredient.of('create_sa:steam_engine').toJson(),
			E: Ingredient.of('create_sa:large_fueling_tank').toJson(),
            F: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson()
		},
		result: Ingredient.of('create_sa:brass_jetpack_chestplate').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechanical_crafting/bismuth_jetpack');

	// Netherite Jetpack Recipe
	event.custom({
		type: "minecraft:smithing_transform",
		template: {
		  item: "create_ethium:ethium_smithing_template"
		},
		base: {
		  item: "create_sa:brass_jetpack_chestplate"
		},
		addition: {
		  item: "create_ethium:ethium_ingot"
		},
		result: {
		  item: "create_sa:netherite_jetpack_chestplate"
		}
	  }).id('forge_frontier:smithing_tranform/netherite_jetpack')

})