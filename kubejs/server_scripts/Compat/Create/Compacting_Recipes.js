ServerEvents.recipes(event => 
	{
		// Farmland recipe
			event.custom({
				type: 'create:compacting',
				ingredients: [
					{
						item: 'minecraft:dirt',
					}
				],
				results: [
					{
						item: 'minecraft:farmland',
					},
				],
			}).id('forge_frontier:compacting/farmland')

		// Rich Soil Farmland
			event.custom({
				type: 'create:compacting',
				ingredients: [
					{
						item: 'farmersdelight:rich_soil',
					}
				],
				results: [
					{
						item: 'farmersdelight:rich_soil_farmland',
					},
				],
			}).id('forge_frontier:compacting/rich_soil_farmland')

		// Peat Farmland
			event.custom({
				type: 'create:compacting',
				ingredients: [
					{
						item: 'regions_unexplored:peat_dirt',
					}
				],
				results: [
					{
						item: 'regions_unexplored:peat_farmland',
					},
				],
			}).id('forge_frontier:compacting/peat_farmland')

		// Silt Farmland
			event.custom({
				type: 'create:compacting',
				ingredients: [
					{
						item: 'regions_unexplored:silt_dirt',
					}
				],
				results: [
					{
						item: 'regions_unexplored:silt_farmland',
					},
				],
			}).id('forge_frontier:compacting/silt_farmland')
	}
)