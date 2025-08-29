ServerEvents.recipes(event => 
    {
        // List of modded and vanilla logs
            const moddedLogs = [
                // Vanilla Logs
                    'minecraft:cherry_log', 
                    'minecraft:cherry_wood', 
                    'minecraft:bamboo_block', 

                // Deeper and Darker Logs
                    'deeperdarker:echo_wood',
                    'deeperdarker:echo_log',

                // Dreams and Desires
                    'create_dd:smoked_wood',
                    'create_dd:rubber_wood',
                    'create_dd:rose_wood',
                    'create_dd:spirit_wood',

                // Regions Unexplored Logs
                    'regions_unexplored:bamboo_log',
                    'regions_unexplored:baobab_log',
                    'regions_unexplored:baobab_wood',
                    'regions_unexplored:blackwood_log',
                    'regions_unexplored:blackwood_wood',
                    'regions_unexplored:blue_bioshroom_hyphae',
                    'regions_unexplored:blue_bioshroom_stem',
                    'regions_unexplored:brimwood_log',
                    'regions_unexplored:brimwood_wood',
                    'regions_unexplored:cobalt_log',
                    'regions_unexplored:cobalt_wood',
                    'regions_unexplored:cypress_log',
                    'regions_unexplored:cypress_wood',
                    'regions_unexplored:dead_log',
                    'regions_unexplored:dead_wood',
                    'regions_unexplored:eucalyptus_log',
                    'regions_unexplored:eucalyptus_wood',
                    'regions_unexplored:green_bioshroom_hyphae',
                    'regions_unexplored:green_bioshroom_stem',
                    'regions_unexplored:joshua_log',
                    'regions_unexplored:joshua_wood',
                    'regions_unexplored:kapok_log',
                    'regions_unexplored:kapok_wood',
                    'regions_unexplored:larch_log',
                    'regions_unexplored:larch_wood',
                    'regions_unexplored:magnolia_log',
                    'regions_unexplored:magnolia_wood',
                    'regions_unexplored:maple_log',
                    'regions_unexplored:maple_wood',
                    'regions_unexplored:mauve_log',
                    'regions_unexplored:mauve_wood',
                    'regions_unexplored:palm_log',
                    'regions_unexplored:palm_wood',
                    'regions_unexplored:pine_log',
                    'regions_unexplored:pine_wood',
                    'regions_unexplored:pink_bioshroom_hyphae',
                    'regions_unexplored:pink_bioshroom_stem',
                    'regions_unexplored:redwood_log',
                    'regions_unexplored:redwood_wood',
                    'regions_unexplored:small_oak_log',
                    'regions_unexplored:socotra_log',
                    'regions_unexplored:socotra_wood',
                    'regions_unexplored:willow_log',
                    'regions_unexplored:willow_wood',
                    'regions_unexplored:yellow_bioshroom_hyphae',
                    'regions_unexplored:yellow_bioshroom_stem',
                ];

            const bark = 'farmersdelight:tree_bark';

        // Generate cutting recipes for modded logs
            moddedLogs.forEach(log => {
                const strippedLog = log.replace(":", ":stripped_");
                const customRecipe = {
                    type: "farmersdelight:cutting",
                    ingredients: [{ item: log }],
                    result: [
                        { item: strippedLog },
                        { item: bark }
                    ],
                    sound: "minecraft:item.axe.strip",
                    tool: {
                        type: "farmersdelight:tool_action",
                        action: "axe_strip"
                    }
                };

                event.custom(customRecipe).id('forge_frontier:cutting/' + log.replace(":", "_bark"));
            });

        // Add specific recipes for silver birch logs and wood
            const silverBirchRecipes = [
                {
                    log: "regions_unexplored:silver_birch_log",
                    strippedLog: "minecraft:stripped_birch_log"
                },
                {
                    log: "regions_unexplored:silver_birch_wood",
                    strippedLog: "minecraft:stripped_birch_wood"
                },
                {
                    log: "regions_unexplored:ashen_log",
                    strippedLog: "regions_unexplored:stripped_dead_log"
                },
                {
                    log: "regions_unexplored:ashen_wood",
                    strippedLog: "regions_unexplored:stripped_dead_wood"
                },
                {
                    log: "regions_unexplored:brimwood_log_magma",
                    strippedLog: "regions_unexplored:stripped_brimwood_log"
                }
            ];

            silverBirchRecipes.forEach(recipe => {
                event.custom({
                    type: "farmersdelight:cutting",
                    ingredients: [{ item: recipe.log }],
                    result: [
                        { item: recipe.strippedLog },
                        { item: bark }
                    ],
                    sound: "minecraft:item.axe.strip",
                    tool: {
                        type: "farmersdelight:tool_action",
                        action: "axe_strip"
                    }
                }).id('forge_frontier:cutting/' + recipe.log.replace(":", "_bark"));
            });
    }
);