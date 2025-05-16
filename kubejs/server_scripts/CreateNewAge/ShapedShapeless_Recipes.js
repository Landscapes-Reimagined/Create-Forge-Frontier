ServerEvents.recipes(event => {
    // Shaped Recipes for Overcharged Blocks
    const overchargedBlocks = {
        overcharged_iron_block: "create_new_age:overcharged_iron",
        overcharged_gold_block: "create_new_age:overcharged_gold",
        overcharged_diamond_block: "create_new_age:overcharged_diamond",
        overcharged_netherite_block: "forge_frontier:overcharged_netherite_ingot"
    };

    Object.entries(overchargedBlocks).forEach(([block, material]) => {
        event.shaped(Item.of(`forge_frontier:${block}`), ["AAA", "AAA", "AAA"], { A: material })
            .id(`forge_frontier:shaped/${block}`);
    });

    // Shapeless Recipes for Overcharged Materials
    Object.entries(overchargedBlocks).forEach(([block, material]) => {
        event.custom({
            type: "minecraft:crafting_shapeless",
            ingredients: [{ item: `forge_frontier:${block}` }],
            result: { item: material, count: 9 }
        }).id(`forge_frontier:shapeless/${block}`);
    });

    // Basic Motor Recipe
    event.remove ({ id: 'create_new_age:shaped/basic_motor'})
    	event.shaped(
		Item.of('create_new_age:basic_motor'),
		[
			'III',
			'MCS',
			'III'
		],
		{
			I: 'create_new_age:overcharged_iron',
            M: 'create_new_age:magnetite_block',
            C: 'create:andesite_casing',
            S: 'create:shaft'
		}
	).id( 'forge_frontier:shaped/basic_motor' )

    // Strong Motor Recipe
    event.remove ({ id: 'create_new_age:shaped/advanced_motor'})
    	event.shaped(
		Item.of('create_new_age:advanced_motor'),
		[
			'GGG',
			'IMS',
			'GGG'
		],
		{
			G: 'create_new_age:overcharged_gold',
            I: 'create_new_age:overcharged_iron',
            M: 'create_new_age:basic_motor',
            S: 'create:shaft'
		}
	).id( 'forge_frontier:shaped/advanced_motor' )
    
    // Basic Solar Heating Plate Recipe
    event.remove ({ id: 'create_new_age:shaped/basic_solar_plate'})
    	event.shaped(
		Item.of('create_new_age:basic_solar_heating_plate'),
		[
			'GGG',
			'ISI',
			'III'
		],
		{
			G: '#forge:glass',
            I: 'create_new_age:overcharged_iron',
            S: 'create_new_age:stirling_engine'
		}
	).id( 'forge_frontier:shaped/basic_solar_heating_plate' )
    
    // Advanced Solar Heating Plate Recipe
    event.remove ({ id: 'create_new_age:shaped/advanced_solar_plate'})
    	event.shaped(
		Item.of('create_new_age:advanced_solar_heating_plate'),
		[
			'GGG',
			'DSD',
			'DDD'
		],
		{
			G: '#forge:glass',
            D: 'create_new_age:overcharged_diamond',
            S: 'create_new_age:basic_solar_heating_plate'
		}
	).id( 'forge_frontier:shaped/advanced_solar_heating_plate' )   

    // Reinforced Motor Recipe
    event.remove ({ id: 'create_new_age:reinforced_motor'})
        event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'DDSSD',
            'DMRss',
            'DDSSD'
        ],
        key: {
            D: Ingredient.of('create_new_age:overcharged_diamond').toJson(),
            S: Ingredient.of('create_new_age:overcharged_iron_sheet').toJson(),
            M: Ingredient.of('create_new_age:advanced_motor').toJson(),
            R: Ingredient.of('create_new_age:redstone_magnet').toJson(),
            s: Ingredient.of('create:shaft').toJson()
        },
        result: {
            item: 'create_new_age:reinforced_motor',
            count: 2
        },
        acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/reinforced_motor');

    // Strong Motor Extension
        event.remove ({ id: 'create_new_age:advanced_motor_extension'})
        event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'SSSSS',
            'DCMCD',
            'SSSSS'
        ],
        key: {
            S: Ingredient.of('create_new_age:overcharged_golden_sheet').toJson(),
            D: Ingredient.of('create_new_age:overcharged_diamond').toJson(),
            C: Ingredient.of('create_new_age:copper_circuit').toJson(),
            M: Ingredient.of('create_new_age:advanced_motor').toJson()
        },
        result: {
            item: 'create_new_age:advanced_motor_extension',
            count: 2
        },
        acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/advanced_motor_extension');


});