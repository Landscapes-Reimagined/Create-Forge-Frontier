ServerEvents.recipes(event => 
    {
        // Vanilla, Deeper and Darker, and Regions Unexplored Compatibility
            var modded_logs = [
                // Vanilla Logs
                'minecraft:cherry_log',
                'minecraft:cherry_wood',
                'minecraft:bamboo_block',
                // Deeper and Darker Wood and Log
                'deeperdarker:echo_wood',
                'deeperdarker:echo_log',
                // Regions Unexplored Wood and Logs
                'regions_unexplored:bamboo_log',
                'regions_unexplored:blue_bioshroom_hyphae',
                'regions_unexplored:blue_bioshroom_stem',
                'regions_unexplored:brimwood_log',
                'regions_unexplored:brimwood_wood',
                'regions_unexplored:cobalt_log',
                'regions_unexplored:cobalt_wood',
                'regions_unexplored:green_bioshroom_hyphae',
                'regions_unexplored:green_bioshroom_stem',
                'regions_unexplored:kapok_log',
                'regions_unexplored:kapok_wood',
                'regions_unexplored:magnolia_log',
                'regions_unexplored:magnolia_wood',
                'regions_unexplored:pink_bioshroom_hyphae',
                'regions_unexplored:pink_bioshroom_stem',
                'regions_unexplored:small_oak_log',
                'regions_unexplored:socotra_log',
                'regions_unexplored:socotra_wood',
                'regions_unexplored:yellow_bioshroom_hyphae',
                'regions_unexplored:yellow_bioshroom_stem'
            ]

            modded_logs.forEach(log => {
                event.custom({
                    type: "create:cutting",
                    ingredients: [
                        {
                            item: log
                        }
                    ],
                    processingTime: 50,
                    results: [
                        {
                            item: log.replace(":", ":stripped_")
                        }
                    ],
                    sound: "minecraft:item.axe.strip"
                }).id("forge_frontier:sawing/" + log.replace(":", "_bark"));
            });
    }
)