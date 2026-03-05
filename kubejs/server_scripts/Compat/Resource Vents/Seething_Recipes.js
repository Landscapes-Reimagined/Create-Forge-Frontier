ServerEvents.recipes(event => 
    {
    // Crushed Ore Stone Recipes      
        // Seething Recipes
        const seethingRecipes = [
            {
                name: 'crushed_verdantine',
                input: 'forge_frontier:crushed_verdantine',
                results: [
                    { item: 'minecraft:emerald' },
                    { chance: 0.25, item: 'minecraft:emerald' }
                ]
            },
            {
                name: 'crushed_glacium',
                input: 'forge_frontier:crushed_glacium',
                results: [
                    { item: 'minecraft:diamond' },
                    { chance: 0.25, item: 'minecraft:diamond' }
                ]
            },
            {
                name: 'crushed_debris',
                input: 'forge_frontier:crushed_debris',
                results: [
                    { item: 'minecraft:netherite_scrap' },
                    { chance: 0.25, item: 'minecraft:netherite_scrap' }
                ]
            },
            {
                name: 'crushed_resonite',
                input: 'forge_frontier:crushed_resonite',
                results: [
                    { item: 'minecraft:echo_shard'},
                    { chance: 0.25, item: 'minecraft:echo_shard' }
                ]
            },
            {
                name: 'crushed_aubrum',
                input: 'forge_frontier:crushed_aubrum',
                results: [
                    { item: 'ad_astra:desh_ingot' },
                    { chance: 0.25, item: 'ad_astra:desh_ingot' }
                ]
            },
            {
                name: 'crushed_pyroclast',
                input: 'forge_frontier:crushed_pyroclast',
                results: [
                    { item: 'ad_astra:calorite_ingot' },
                    { chance: 0.25, item: 'ad_astra:calorite_ingot' }
                ]
            },
            {
                name: 'crushed_frostite',
                input: 'forge_frontier:crushed_frostite',
                results: [
                    { item: 'ad_astra:etrium_ingot' },
                    { chance: 0.25, item: 'ad_astra:etrium_ingot' }
                ]
            },
            {
                name: 'crushed_stellaris',
                input: 'forge_frontier:crushed_stellaris',
                results: [
                    { item: 'ad_astra:ostrum_ingot' },
                    { chance: 0.25, item: 'ad_astra:ostrum_ingot' }
                ]
            },
            {
                name: 'crushed_guanite',
                input: 'forge_frontier:crushed_guanite',
                results: [
                    { item: 'alexscaves:guano' },
                    { chance: 0.25, item: 'alexscaves:guano' }
                ]
            },
            {
                name: 'crushed_pearlyte',
                input: 'forge_frontier:crushed_pearlyte',
                results: [
                    { item: 'alexscaves:pearl' },
                    { chance: 0.25, item: 'alexscaves:pearl' }
                ]
            },
            {
                name: 'crushed_amberlite',
                input: 'forge_frontier:crushed_amberlite',
                results: [
                    { item: 'alexscaves:amber' },
                    { chance: 0.25, item: 'alexscaves:amber' }
                ]
            },
            {
                name: 'crushed_azurnium',
                input: 'forge_frontier:crushed_azurnium',
                results: [
                    { item: 'alexscaves:azure_neodymium_ingot' },
                    { chance: 0.25, item: 'alexscaves:azure_neodymium_ingot' }
                ]
            },
            {
                name: 'crushed_neodymrium',
                input: 'forge_frontier:crushed_neodymrium',
                results: [
                    { item: 'alexscaves:scarlet_neodymium_ingot' },
                    { chance: 0.25, item: 'alexscaves:scarlet_neodymium_ingot' }
                ]
            },
            {
                name: 'crushed_uraniumnite',
                input: 'forge_frontier:crushed_uraniumnite',
                results: [
                    { item: 'alexscaves:uranium' },
                    { chance: 0.25, item: 'alexscaves:uranium' }
                ]
            },
            {
                name: 'crushed_sulphite',
                input: 'forge_frontier:crushed_sulphite',
                results: [
                    { item: 'alexscaves:sulfur_dust' },
                    { chance: 0.25, item: 'alexscaves:sulfur_dust' }
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
    }
)