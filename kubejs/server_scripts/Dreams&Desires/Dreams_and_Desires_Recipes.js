ServerEvents.recipes(event => {

/*
	// New Infernal Mechanism Recipe
	event.remove({ id: 'create_dd:sequenced_assembly/infernal_mechanism'})
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            tag: "forge:plates/industrial_iron"
        },
        transitionalItem: {
            item: "create_dd:incomplete_infernal_mechanism"
        },
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create_dd:incomplete_infernal_mechanism" },
                    { item: "create:cogwheel" }
                ],
                results: [{ item: "create_dd:incomplete_infernal_mechanism" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create_dd:incomplete_infernal_mechanism" },
                    { item: "create_dd:rubber" }
                ],
                results: [{ item: "create_dd:incomplete_infernal_mechanism" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create_dd:incomplete_infernal_mechanism" },
                    { tag: "forge:ember_alloy" }
                ],
                results: [{ item: "create_dd:incomplete_infernal_mechanism" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create_dd:incomplete_infernal_mechanism" },
                    { tag: "forge:nuggets/zinc" }
                ],
                results: [{ item: "create_dd:incomplete_infernal_mechanism" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "create_dd:incomplete_infernal_mechanism" },
                    { fluid: "minecraft:lava", amount: 500 }
                ],
                results: [{ item: "create_dd:incomplete_infernal_mechanism" }]
            }
        ],
        results: [
            { item: "create_dd:infernal_mechanism", chance: 160.0 },
            { item: "create_dd:industrial_iron_sheet", chance: 8.0 },
            { item: "create:zinc_nugget", chance: 7.5 },
			{ item: "create_dd:rubber", chance: 6.0},
            { item: "create:cogwheel", chance: 5.0 },
            { item: "create_dd:industrial_iron_nugget", chance: 2.5 },
            { item: "create_dd:steel_ingot", chance: 2.5 },
            { item: "create:shaft", chance: 2.5 }
        ],
        loops: 4
    }).id("forge_frontier:sequenced_assembly/infernal_mechanism");

	// New Netherite Casing Recipe
	event.remove({ id: 'create_dd:item_application/netherite_casing'})
	event.remove({ id: 'create_dd:item_application/netherite_casing_using_deployer'})
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			tag: 'forge_frontier:netherite_casing_application'
		  },
		  {
			item: 'minecraft:netherite_ingot'
		  }
		],
		results: [
		  {
			item: 'create_dd:netherite_casing'
		  }
		]
	  }).id('forge_frontier:item_application/netherite_casing');

	// New Vanilla Milk Recipe
	event.remove({ id: 'create_dd:mixing/vanilla' })
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: 'minecraft:sugar',
			},
			{
				item: 'neapolitan:dried_vanilla_pods',
			},
			{
				fluidTag: 'forge:milk',
				amount: 250
			}
		],
		results: [
			{
				fluid: 'create_dd:vanilla',
				amount: 250
			}
		],
		heatRequirement: "heated"
	}).id('forge_frontier:mixing/vanilla_milk');

	// New Strawberry Milk Recipe
	event.remove({ id: 'create_dd:mixing/strawberry' })
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				item: 'minecraft:sugar',
			},
			{
				item: 'neapolitan:strawberries'
			},
			{
				item: 'neapolitan:strawberries'
			},
			{
				fluidTag: 'forge:milk',
				amount: 250
			}
		],
		results: [
			{
				fluid: 'create_dd:strawberry',
				amount: 250
			}
		],
		heatRequirement: "heated"
	}).id('forge_frontier:mixing/strawberry_milk');	

    // Created Shadow Drill Recipe
    event.shaped(
		Item.of('create_dd:shadow_drill'),
		[
			' S ',
			'SMS',
			' C '
		],
		{
			S: 'create_dd:shadow_steel',
			M: 'create_dd:mithril_ingot',
			C: 'create_dd:shadow_steel_casing'
		}
	).id( 'forge_frontier:shaped/shadow_drill' )

    // Create Radiant Drill Recipe
    event.shaped(
		Item.of('create_dd:radiant_drill'),
		[
			' R ',
			'RMR',
			' C '
		],
		{
			R: 'create_dd:refined_radiance',
			M: 'create_dd:mithril_ingot',
			C: 'create_dd:refined_radiance_casing'
		}
	).id( 'forge_frontier:shaped/radiant_drill' )

*/

})