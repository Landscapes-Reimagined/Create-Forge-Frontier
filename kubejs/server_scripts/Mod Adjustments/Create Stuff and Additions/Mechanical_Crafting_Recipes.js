ServerEvents.recipes(event => 
	{
		// Copper Jetpack Recipe
			event.remove({ id: 'create_sa:copper_propeler_recipe'})
			event.custom({
				type: 'create:mechanical_crafting',
				pattern: [
					' ABA ',
					'CADAC',
					'CEFEC'
				],
				key: {
					A: Ingredient.of('minecraft:copper_ingot').toJson(),
					B: Ingredient.of('create:cogwheel').toJson(),
					C: Ingredient.of('create:encased_fan').toJson(),
					D: Ingredient.of('create_sa:hydraulic_engine').toJson(),
					E: Ingredient.of('create_sa:large_filling_tank').toJson(),
					F: Ingredient.of('create:copper_backtank').toJson()
				},
				result: Ingredient.of('create_sa:copper_jetpack_chestplate').toJson(),
				acceptMirrored: false
			}).id('forge_frontier:mechanical_crafting/copper_jetpack');

		// Andesite Jetpack Recipe
			event.remove({ id: 'create_sa:andesite_jetpack_recipe'})
			event.custom({
				type: 'create:mechanical_crafting',
				pattern: [
					' ABA ',
					'CADAC',
					'CEFEC'
				],
				key: {
					A: Ingredient.of('create:andesite_alloy').toJson(),
					B: Ingredient.of('create:cogwheel').toJson(),
					C: Ingredient.of('create:encased_fan').toJson(),
					D: Ingredient.of('create_sa:heat_engine').toJson(),
					E: Ingredient.of('create_sa:large_fueling_tank').toJson(),
					F: Ingredient.of('create_sa:copper_jetpack_chestplate').toJson()
				},
				result: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson(),
				acceptMirrored: false
			}).id('forge_frontier:mechanical_crafting/andesite_jetpack');

		// Brass Jetpack Recipe
			event.remove({ id: 'create_sa:brass_jetpack_recipe'})
			event.custom({
				type: 'create:mechanical_crafting',
				pattern: [
					' ABA ',
					'CADAC',
					'CEFEC'
				],
				key: {
					A: Ingredient.of('create:brass_ingot').toJson(),
					B: Ingredient.of('create:cogwheel').toJson(),
					C: Ingredient.of('create:encased_fan').toJson(),
					D: Ingredient.of('create_sa:steam_engine').toJson(),
					E: Ingredient.of('create_sa:large_fueling_tank').toJson(),
					F: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson()
				},
				result: Ingredient.of('create_sa:brass_jetpack_chestplate').toJson(),
				acceptMirrored: false
			}).id('forge_frontier:mechanical_crafting/brass_jetpack');

		// Mithril Jetpack Recipe
			event.remove({ id: 'create_sa:netherite_jetpack_recipe'})
			event.custom({
				type: 'create:mechanical_crafting',
				pattern: [
					' ABA ',
					'CADAC',
					'CEFEC'
				],
				key: {
					A: Ingredient.of('create_dd:mithril_ingot').toJson(),
					B: Ingredient.of('create:cogwheel').toJson(),
					C: Ingredient.of('create:encased_fan').toJson(),
					D: Ingredient.of('create_sa:steam_engine').toJson(),
					E: Ingredient.of('create_sa:large_fueling_tank').toJson(),
					F: Ingredient.of('create_sa:brass_jetpack_chestplate').toJson()
				},
				result: Ingredient.of('create_sa:netherite_jetpack_chestplate').toJson(),
				acceptMirrored: false
			}).id('forge_frontier:mechanical_crafting/mithril_jetpack');		
	}
)