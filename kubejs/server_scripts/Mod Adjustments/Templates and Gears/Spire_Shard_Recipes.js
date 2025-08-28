ServerEvents.recipes(event => 
    {
        // Pearlescent Upgrade Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:spire_sheet" },
                loops: 1,
                results: [{ item: "unusualend:pearlescent_upgrade_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:spire_sheet" },
                            { item: "unusualend:prismalite_gem" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_pearlescent_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_pearlescent_upgrade" }],
                        results: [{ item: "forge_frontier:incomplete_pearlescent_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_pearlescent_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "unusualend:pearlescent_upgrade_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_pearlescent_upgrade" }
            }).id('forge_frontier:sequenced_assembly/pearlescent_upgrade_recipe');        

        // Ethium Upgrade Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:spire_sheet" },
                loops: 1,
                results: [{ item: "create_ethium:ethium_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:spire_sheet" },
                            { item: "create_ethium:polished_stellarite" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_ethium_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_ethium_upgrade" }],
                        results: [{ item: "forge_frontier:incomplete_ethium_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_ethium_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "create_ethium:ethium_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_ethium_upgrade" }
            }).id('forge_frontier:sequenced_assembly/ethium_upgrade_recipe');         

        // Polarity Armor Trim Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:spire_sheet" },
                loops: 1,
                results: [{ item: "alexscaves:polarity_armor_trim_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:spire_sheet" },
                            { item: "alexscaves:energized_galena_neutral" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_polarity_armor_trim" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_polarity_armor_trim" }],
                        results: [{ item: "forge_frontier:incomplete_polarity_armor_trim" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_polarity_armor_trim" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "alexscaves:polarity_armor_trim_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_polarity_armor_trim" }
            }).id('forge_frontier:sequenced_assembly/polarity_armor_trim_recipe');  

    }
)