ServerEvents.recipes(event => 
    {

        // Mysterious Upgrade Template Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:eye_sheet" },
                loops: 1,
                results: [{ item: "endreborn:mysterious_upgrade_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:eye_sheet" },
                            { item: "endreborn:endorium_nugget" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_mysterious_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_mysterious_upgrade" }],
                        results: [{ item: "forge_frontier:incomplete_mysterious_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_mysterious_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "endreborn:mysterious_upgrade_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_mysterious_upgrade" }
            }).id('forge_frontier:sequenced_assembly/mysterious_upgrade_recipe');

        // Curious Upgrade Template Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:eye_sheet" },
                loops: 1,
                results: [{ item: "endreborn:curious_upgrade_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:eye_sheet" },
                            { item: "endreborn:endorium_ingot" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_curious_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_curious_upgrade" }],
                        results: [{ item: "forge_frontier:incomplete_curious_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_curious_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "endreborn:curious_upgrade_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_curious_upgrade" }
            }).id('forge_frontier:sequenced_assembly/curious_upgrade_recipe');        

        // Ancient Armor Trim Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:eye_sheet" },
                loops: 1,
                results: [{ item: "unusualend:ancient_armor_trim_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:eye_sheet" },
                            { item: "unusualend:ancient_shard" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_ancient_armor_trim" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_ancient_armor_trim" }],
                        results: [{ item: "forge_frontier:incomplete_ancient_armor_trim" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_ancient_armor_trim" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "unusualend:ancient_armor_trim_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_ancient_armor_trim" }
            }).id('forge_frontier:sequenced_assembly/ancient_armor_trim_recipe');        

    }
)