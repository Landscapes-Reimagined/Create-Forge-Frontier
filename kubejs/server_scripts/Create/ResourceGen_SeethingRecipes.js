ServerEvents.recipes(event => {
/*
// Crushed Ore Stone Recipes      
    // Seething Recipes
    const seethingRecipes = [
        {
            name: 'crushed_verdantine',
            input: 'forge_frontier:crushed_verdantine',
            results: [
                { item: 'minecraft:emerald' },
                { chance: 0.5, item: 'minecraft:emerald' }
            ]
        },
        {
            name: 'crushed_glacium',
            input: 'forge_frontier:crushed_glacium',
            results: [
                { item: 'minecraft:diamond' },
                { chance: 0.5, item: 'minecraft:diamond' }
            ]
        },
        {
            name: 'crushed_debris',
            input: 'forge_frontier:crushed_debris',
            results: [
                { item: 'minecraft:netherite_scrap' },
                { chance: 0.45, item: 'minecraft:netherite_scrap' },
                { chance: 0.15, item: 'minecraft:netherite_scrap' }
            ]
        },
        {
            name: 'crushed_resonite',
            input: 'forge_frontier:crushed_resonite',
            results: [
                { item: 'minecraft:echo_shard'},
                { chance: 0.20, item: 'minecraft:echo_shard' },
                { chance: 0.10, item: 'minecraft:echo_shard' }
            ]
        },
        {
            name: 'crushed_aubrum',
            input: 'forge_frontier:crushed_aubrum',
            results: [
                { item: 'ad_astra:desh_ingot' },
                { chance: 0.50, item: 'ad_astra:desh_ingot' }
            ]
        },
        {
            name: 'crushed_pyroclast',
            input: 'forge_frontier:crushed_pyroclast',
            results: [
                { item: 'ad_astra:calorite_ingot' },
                { chance: 0.50, item: 'ad_astra:calorite_ingot' }
            ]
        },
        {
            name: 'crushed_frostite',
            input: 'forge_frontier:crushed_frostite',
            results: [
                { item: 'ad_astra:ice_shard' },
                { chance: 0.50, item: 'ad_astra:ice_shard' }
            ]
        },
        {
            name: 'crushed_stellaris',
            input: 'forge_frontier:crushed_stellaris',
            results: [
                { item: 'ad_astra:ostrum_ingot' },
                { chance: 0.50, item: 'ad_astra:ostrum_ingot' }
            ]
        },
        {
            name: 'crushed_radiantite',
            input: 'forge_frontier:crushed_radiantite',
            results: [
                { item: 'enlightened_end:irradium_bar' },
                { chance: 0.50, item: 'enlightened_end:irradium_bar' }
            ]
        },
        {
            name: 'crushed_shale',
            input: 'forge_frontier:crushed_shale',
            results: [
                { item: 'enlightened_end:malachite' },
                { chance: 0.50, item: 'enlightened_end:malachite' }
            ]
        },
        {
            name: 'crushed_palerock',
            input: 'forge_frontier:crushed_palerock',
            results: [
                { item: 'enlightened_end:bismuth_ingot' },
                { chance: 0.50, item: 'enlightened_end:bismuth_ingot' }
            ]
        },
        {
            name: 'crushed_guanite',
            input: 'forge_frontier:crushed_guanite',
            results: [
                { item: 'alexscaves:guano' },
                { chance: 0.50, item: 'alexscaves:guano' }
            ]
        },
        {
            name: 'crushed_pearlyte',
            input: 'forge_frontier:crushed_pearlyte',
            results: [
                { item: 'alexscaves:pearl' },
                { chance: 0.50, item: 'alexscaves:pearl' }
            ]
        },
        {
            name: 'crushed_amberlite',
            input: 'forge_frontier:crushed_amberlite',
            results: [
                { item: 'alexscaves:amber' },
                { chance: 0.50, item: 'alexscaves:amber' }
            ]
        },
        {
            name: 'crushed_azurnium',
            input: 'forge_frontier:crushed_azurnium',
            results: [
                { item: 'alexscaves:azure_neodymium_ingot' },
                { chance: 0.50, item: 'alexscaves:azure_neodymium_ingot' }
            ]
        },
        {
            name: 'crushed_neodymrium',
            input: 'forge_frontier:crushed_neodymrium',
            results: [
                { item: 'alexscaves:scarlet_neodymium_ingot' },
                { chance: 0.50, item: 'alexscaves:scarlet_neodymium_ingot' }
            ]
        },
        {
            name: 'crushed_uraniumnite',
            input: 'forge_frontier:crushed_uraniumnite',
            results: [
                { item: 'alexscaves:uranium' },
                { chance: 0.50, item: 'alexscaves:uranium' }
            ]
        },
        {
            name: 'crushed_sulphite',
            input: 'forge_frontier:crushed_sulphite',
            results: [
                { chance: 0.25, item: 'alexscaves:sulfur_dust' },
                { chance: 0.15, item: 'alexscaves:sulfur_dust' }
            ]
        }
    ];

    // Loop through the recipes and dynamically generate the custom events
    seethingRecipes.forEach(recipe => {
        event.custom({
            type: "create_dd:superheating",
            ingredients: [
                { item: recipe.input }
            ],
            results: recipe.results
        }).id(`forge_frontier:seething/${recipe.name}`);
    });

// Crushed Ore Pile Recipes
    // Seething Recipes
    const seethingPileRecipes = [
        {
            name: 'crushed_resonite',
            input: 'forge_frontier:crushed_resonite_pile',
            results: [
                {item: 'minecraft:echo_shard', count: 9},
                { chance: 0.5, item: 'minecraft:echo_shard', count: 9 }
            ]
        },
        {
            name: 'crushed_debris',
            input: 'forge_frontier:crushed_debris_pile',
            results: [
                {item: 'minecraft:netherite_scrap', count: 9},
                { chance: 0.5, item: 'minecraft:netherite_scrap', count: 9 }
            ]
        },
        {
            name: 'crushed_verdantine',
            input: 'forge_frontier:crushed_verdantine_pile',
            results: [
                { item: 'minecraft:emerald_block', count: 1 },
                { chance: 0.5, item: 'minecraft:emerald_block', count: 1 }
            ]
        },
        {
            name: 'crushed_glacium',
            input: 'forge_frontier:crushed_glacium_pile',
            results: [
                { item: 'minecraft:diamond_block', count: 1 },
                { chance: 0.5, item: 'minecraft:diamond_block', count: 1 }
            ]
        },
        {
            name: 'crushed_aubrum',
            input: 'forge_frontier:crushed_aubrum_pile',
            results: [
                { item: 'ad_astra:desh_block', count: 1 },
                { chance: 0.50, item: 'ad_astra:desh_block', count: 1 }
            ]
        },
        {
            name: 'crushed_pyroclast',
            input: 'forge_frontier:crushed_pyroclast_pile',
            results: [
                { item: 'ad_astra:calorite_block', count: 1 },
                { chance: 0.50, item: 'ad_astra:calorite_block', count: 1 }
            ]
        },
        {
            name: 'crushed_frostite',
            input: 'forge_frontier:crushed_frostite_pile',
            results: [
                { item: 'ad_astra:ice_shard', count: 9 },
                { chance: 0.50, item: 'ad_astra:ice_shard', count: 9 }
            ]
        },
        {
            name: 'crushed_stellaris',
            input: 'forge_frontier:crushed_stellaris_pile',
            results: [
                { item: 'ad_astra:ostrum_block', count: 1 },
                { chance: 0.50, item: 'ad_astra:ostrum_block', count: 1 }
            ]
        },
        {
            name: 'crushed_radiantite',
            input: 'forge_frontier:crushed_radiantite_pile',
            results: [
                { item: 'enlightened_end:irradium_block', count: 1 },
                { chance: 0.50, item: 'enlightened_end:irradium_block', count: 1 }
            ]
        },
        {
            name: 'crushed_shale',
            input: 'forge_frontier:crushed_shale_pile',
            results: [
                { item: 'enlightened_end:malachite_block', count: 1 },
                { chance: 0.50, item: 'enlightened_end:malachite_block', count: 1 }
            ]
        },
        {
            name: 'crushed_palerock',
            input: 'forge_frontier:crushed_palerock_pile',
            results: [
                { item: 'enlightened_end:bismuth_block', count: 1 },
                { chance: 0.50, item: 'enlightened_end:bismuth_block', count: 1 }
            ]
        },
        {
            name: 'crushed_guanite',
            input: 'forge_frontier:crushed_guanite_pile',
            results: [
                { item: 'alexscaves:guano_block', count: 1 },
                { chance: 0.50, item: 'alexscaves:guano_block', count: 1 }
            ]
        },
        {
            name: 'crushed_pearlyte',
            input: 'forge_frontier:crushed_pearlyte_pile',
            results: [
                { item: 'alexscaves:pearl_block', count: 1 },
                { chance: 0.50, item: 'alexscaves:pearl_block', count: 1 }
            ]
        },
        {
            name: 'crushed_amberlite',
            input: 'forge_frontier:crushed_amberlite_pile',
            results: [
                { item: 'alexscaves:amber', count: 9 },
                { chance: 0.50, item: 'alexscaves:amber', count: 9 }
            ]
        },
        {
            name: 'crushed_azurnium',
            input: 'forge_frontier:crushed_azurnium_pile',
            results: [
                { item: 'alexscaves:block_of_azure_neodymium', count: 1 },
                { chance: 0.50, item: 'alexscaves:block_of_azure_neodymium', count: 1 }
            ]
        },
        {
            name: 'crushed_neodymrium',
            input: 'forge_frontier:crushed_neodymrium_pile',
            results: [
                { item: 'alexscaves:block_of_scarlet_neodymium', count: 1 },
                { chance: 0.50, item: 'alexscaves:block_of_scarlet_neodymium', count: 1 }
            ]
        },
        {
            name: 'crushed_uraniumnite',
            input: 'forge_frontier:crushed_uraniumnite_pile',
            results: [
                { item: 'alexscaves:block_of_uranium', count: 1 },
                { chance: 0.50, item: 'alexscaves:block_of_uranium', count: 1 }
            ]
        },
        {
            name: 'crushed_sulphite',
            input: 'forge_frontier:crushed_sulphite_pile',
            results: [
                { chance: 1.0, item: 'alexscaves:sulfur', count: 1 },
                { chance: 1.0, item: 'alexscaves:sulfur', count: 1 }
            ]
        }
    ];

    seethingPileRecipes.forEach(recipe => {
        event.custom({
            type: "create_dd:superheating",
            ingredients: [
                { item: recipe.input }
            ],
            results: recipe.results
        }).id(`forge_frontier:seething/${recipe.name}_pile`);
    });
*/        
})