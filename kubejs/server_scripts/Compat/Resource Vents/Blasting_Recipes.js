ServerEvents.recipes(event => 
    {
        // Crushed Ore Stone Recipes    
        // Blasting Recipes
        const blastingRecipes = [
            { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine', result: 'minecraft:emerald' },
            { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium', result: 'minecraft:diamond' },
            { name: 'crushed_debris', input: 'forge_frontier:crushed_debris', result: 'minecraft:netherite_scrap' },
            { name: 'crushed_resonite', input: 'forge_frontier:crushed_resonite', result: 'minecraft:echo_shard' },
            { name: 'crushed_aubrum', input: 'forge_frontier:crushed_aubrum', result: 'ad_astra:desh_ingot' },
            { name: 'crushed_pyroclast', input: 'forge_frontier:crushed_pyroclast', result: 'ad_astra:calorite_ingot' },
            { name: 'crushed_frostite', input: 'forge_frontier:crushed_frostite', result: 'ad_astra:etrium_ingot' },
            { name: 'crushed_stellaris', input: 'forge_frontier:crushed_stellaris', result: 'ad_astra:ostrum_ingot' },
            { name: 'crushed_guanite', input: 'forge_frontier:crushed_guanite', result: 'alexscaves:guano' },
            { name: 'crushed_pearlyte', input: 'forge_frontier:crushed_pearlyte', result: 'alexscaves:pearl' },
            { name: 'crushed_amberlite', input: 'forge_frontier:crushed_amberlite', result: 'alexscaves:amber' },
            { name: 'crushed_azurnium', input: 'forge_frontier:crushed_azurnium', result: 'alexscaves:azure_neodymium_ingot' },
            { name: 'crushed_neodymrium', input: 'forge_frontier:crushed_neodymrium', result: 'alexscaves:scarlet_neodymium_ingot' },
            { name: 'crushed_uraniumnite', input: 'forge_frontier:crushed_uraniumnite', result: 'alexscaves:uranium' },
            { name: 'crushed_sulphite', input: 'forge_frontier:crushed_sulphite', result: 'alexscaves:sulfur_dust' },
            { name: 'crushed_noxrock', input: "forge_frontier:crushed_noxrock", result: "endelurgy:luxite"},
            { name: 'crushed_endritus', input: "forge_frontier:crushed_endritus", result: "endelurgy:adamantite_ingot"},
            { name: 'crushed_gneiss', input: "forge_frontier:crushed_gneiss", result: "createmetallurgy:tungsten_ingot"},
        ];

        // Loop to create the blasting recipes
        blastingRecipes.forEach(recipe => {
            event.custom({
                type: "minecraft:smelting",
                cookingtime: 200, // Time in ticks
                experience: 0.1,  // Experience amount
                ingredient: { item: recipe.input },
                result: { item: recipe.result }
            }).id(`forge_frontier:blasting/${recipe.name}`);
        });

        // Crushed Ore Pile Recipes
        // Blasting Recipes
        const blastingPileRecipes = [
            { name: 'crushed_verdantine', input: 'forge_frontier:crushed_verdantine_pile', result: 'minecraft:emerald_block' },
            { name: 'crushed_glacium', input: 'forge_frontier:crushed_glacium_pile', result: 'minecraft:diamond_block' },
            { name: 'crushed_aubrum', input: 'forge_frontier:crushed_aubrum_pile', result: 'ad_astra:desh_block' },
            { name: 'crushed_pyroclast', input: 'forge_frontier:crushed_pyroclast_pile', result: 'ad_astra:calorite_block' },
            { name: 'crushed_stellaris', input: 'forge_frontier:crushed_stellaris_pile', result: 'ad_astra:ostrum_block' },
            { name: 'crushed_guanite', input: 'forge_frontier:crushed_guanite_pile', result: 'alexscaves:guano_block' },
            { name: 'crushed_pearlyte', input: 'forge_frontier:crushed_pearlyte_pile', result: 'alexscaves:block_of_pearl' },
            { name: 'crushed_azurnium', input: 'forge_frontier:crushed_azurnium_pile', result: 'alexscaves:block_of_azure_neodymium' },
            { name: 'crushed_neodymrium', input: 'forge_frontier:crushed_neodymrium_pile', result: 'alexscaves:block_of_scarlet_neodymium' },
            { name: 'crushed_uraniumnite', input: 'forge_frontier:crushed_uraniumnite_pile', result: 'alexscaves:block_of_uranium' },
            { name: 'crushed_sulphite', input: 'forge_frontier:crushed_sulphite_pile', result: 'alexscaves:sulfur' },
            { name: 'crushed_debris', input: 'forge_frontier:crushed_debris_pile', result: 'minecraft:netherite_scrap', count: 9 },
            { name: 'crushed_resonite', input: 'forge_frontier:crushed_resonite_pile', result: 'forge_frontier:echo_shard_block', count: 1 },
            { name: 'crushed_frostite', input: 'forge_frontier:crushed_frostite_pile', result: 'ad_astra:etrium_block'}
        ];

        // Loop to create the blasting pile recipes
        blastingPileRecipes.forEach(recipe => {
            event.custom({
                type: "minecraft:smelting",
                cookingtime: 200,
                experience: 0.1,
                ingredient: { item: recipe.input },
                result: { item: recipe.result, count: recipe.count || 1 } 
            }).id(`forge_frontier:blasting/${recipe.name}_pile`);
        });
    }
);
