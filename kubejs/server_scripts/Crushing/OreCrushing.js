ServerEvents.recipes(event => {

    // Removes Old Recipes
    event.remove({ id: 'create:crushing/coal_ore'})
    event.remove({ id: 'create:crushing/deepslate_coal_ore'})
    event.remove({ id: 'create:crushing/gloomslate_coal_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_coal_ore'})
    event.remove({ id: 'create:crushing/glacio_coal_ore'})
    event.remove({ id: 'create:crushing/venus_coal_ore'})
    event.remove({ id: 'create_oppenheimered:crushing/guanostone_redstone_ore' })
    event.remove({ id: 'create_oppenheimered:crushing/uranium_ore' })
    event.remove({ id: 'tfmg:milling/charcoal_dust'})

    // Creates Raw Redstone Block Crushing Recipe
	event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'regions_unexplored:raw_redstone_block' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:redstone', count: 4 }
		]
	}).id('forge_frontier:crushing/raw_redstone_block');

    // Enlightened End Ores
    // Bismuth Ore

        // Crushing Recipe
        event.custom({
            type: 'create:crushing',
            ingredients: [
                { item: 'enlightened_end:bismuth_ore' },
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_bismuth' },
                { item: 'forge_frontier:crushed_bismuth', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:end_stone', chance: 0.12 },
            ],
        }).id('forge_frontier:crushing/bismuth_ore');

    // Malachite Ore
        // Crushing Recipe
        event.custom({
            type: 'create:crushing',
            ingredients: [
                { item: 'enlightened_end:malachite_ore' },
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_malachite' },
                { item: 'forge_frontier:crushed_malachite', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:end_stone', chance: 0.12 },
            ],
        }).id('forge_frontier:crushing/malachite_ore');

    // Irradium Ore
        // Crushing Recipe
        event.custom({
            type: 'create:crushing',
            ingredients: [
                { item: 'enlightened_end:irradium_ore' },
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_irradium' },
                { item: 'forge_frontier:crushed_irradium', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:end_stone', chance: 0.12 },
            ],
        }).id('forge_frontier:crushing/irradium_ore');

    // Coal Ore
    // Forge:Ores/Coal 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/coal' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:coal' },
            { item: 'minecraft:coal', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/coal_ore');

    // Removes Old Iron Ore Recipes
    event.remove({ id: 'create:crushing/iron_ore'})
    event.remove({ id: 'create:crushing/deepslate_iron_ore'})
    event.remove({ id: 'create:crushing/gloomslate_iron_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_iron_ore'})
    event.remove({ id: 'create:crushing/glacio_iron_ore'})
    event.remove({ id: 'create:crushing/mercury_iron_ore'})
    event.remove({ id: 'create:crushing/mars_iron_ore'})

    // Iron Ore
    // Forge:Ores/Iron 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/iron' },
        ],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_iron' },
            { item: 'create:crushed_raw_iron', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/iron_ore');


    // Removes Old Copper Ore Recipes
    event.remove({ id: 'create:crushing/copper_ore'})
    event.remove({ id: 'create:crushing/deepslate_copper_ore'})
    event.remove({ id: 'create:crushing/gloomslate_copper_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_copper_ore'})
    event.remove({ id: 'create:crushing/glacio_copper_ore'})
    event.remove({ id: 'create:crushing/venus_copper_ore'})

    // Copper Ore
    // Forge:Ores/Copper 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/copper' },
        ],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_copper', count: 5 },
            { item: 'create:crushed_raw_copper', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/copper_ore');

    // Removes Old Gold Ore Recipes
    event.remove({ id: 'create:crushing/gold_ore'})
    event.remove({ id: 'create:crushing/deepslate_gold_ore'})
    event.remove({ id: 'create:crushing/gloomslate_gold_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_gold_ore'})
    event.remove({ id: 'create:crushing/glacio_gold_ore'})
    event.remove({ id: 'create:crushing/venus_gold_ore'})
    event.remove({ id: 'create:crushing/nether_gold_ore'})

    // Gold Ore
    // Forge:Ores/Gold 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/gold' },
        ],
        processingTime: 400,
        results: [
            { item: 'create:crushed_raw_gold' },
            { item: 'create:crushed_raw_gold', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/gold_ore');

    // Removes Old Redstone Ore Recipes
    event.remove({ id: 'create:crushing/redstone_ore'})
    event.remove({ id: 'create:crushing/deepslate_redstone_ore'})
    event.remove({ id: 'create:crushing/gloomslate_redstone_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_redstone_ore'})
    event.remove({ id: 'create:crushing/glacio_redstone_ore'})
    event.remove({ id: 'create:crushing/venus_redstone_ore'})

    // Redstone Ore
    // Forge:Ores/Redstone 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/redstone' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:redstone', count: 6 },
            { item: 'minecraft:redstone', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/redstone_ore');

    // Removes Old Emerald Ore Recipes
    event.remove({ id: 'create:crushing/emerald_ore'})
    event.remove({ id: 'create:crushing/deepslate_emerald_ore'})
    event.remove({ id: 'create:crushing/gloomslate_emerald_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_emerald_ore'})
    event.remove({ id: 'create:crushing/glacio_emerald_ore'})
    event.remove({ id: 'create:crushing/venus_emerald_ore'})

    // Emerald Ore
    // Forge:Ores/Emerald 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/emerald' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:emerald'},
            { item: 'minecraft:emerald', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/emerald_ore');

    // Removes Old Lapis Ore Recipes
    event.remove({ id: 'create:crushing/lapis_ore'})
    event.remove({ id: 'create:crushing/deepslate_lapis_ore'})
    event.remove({ id: 'create:crushing/gloomslate_lapis_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_lapis_ore'})
    event.remove({ id: 'create:crushing/glacio_lapis_ore'})
    event.remove({ id: 'create:crushing/venus_lapis_ore'})


    // Lapis Ore
    // Forge:Ores/Lapis 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/lapis' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:lapis_lazuli', count: 10},
            { item: 'minecraft:lapis_lazuli', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/lapis_ore');

    // Removes Old Diamond Ore Recipes
    event.remove({ id: 'create:crushing/diamond_ore'})
    event.remove({ id: 'create:crushing/deepslate_diamond_ore'})
    event.remove({ id: 'create:crushing/gloomslate_diamond_ore'})
    event.remove({ id: 'create:crushing/sculk_stone_diamond_ore'})
    event.remove({ id: 'create:crushing/venus_diamond_ore'})
    event.remove({ id: 'create:crushing/mars_diamond_ore'})

    // Diamond Ore
    // Forge:Ores/Diamond 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/diamond' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:diamond'},
            { item: 'minecraft:diamond', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/diamond_ore');

    // Removes Old Quartz Ore Recipes
    event.remove({ id: 'create:crushing/nether_quartz_ore'})

    // Quartz Ore
    // Forge:Ores/Quartz 
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'forge:ores/quartz' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:quartz', count: 2},
            { item: 'minecraft:quartz', chance: 0.75 },
            { item: 'create:experience_nugget', chance: 0.75 },
            { item: 'minecraft:cobblestone', chance: 0.12 },
        ],
    }).id('forge_frontier:crushing/quartz_ore');
    
})