ServerEvents.recipes(event => 
    {
        // Ignitium Upgrade
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:netherrack_sheet" },
                loops: 1,
                results: [{ item: "cataclysm:ignitium_upgrade_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:netherrack_sheet" },
                            { item: "minecraft:blaze_rod" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_ignitium_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_ignitium_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "forge_frontier:incomplete_ignitium_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_ignitium_upgrade" }],
                        results: [{ item: "cataclysm:ignitium_upgrade_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_ignitium_upgrade" }
            }).id('forge_frontier:sequenced_assembly/ignitium_upgrade_recipe');

        // Cursium Upgrade
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:netherrack_sheet" },
                loops: 1,
                results: [{ item: "cataclysm:cursium_upgrade_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:netherrack_sheet" },
                            { item: "cataclysm:black_steel_ingot" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_cursium_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_ignitium_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "forge_frontier:incomplete_cursium_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_cursium_upgrade" }],
                        results: [{ item: "cataclysm:cursium_upgrade_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_cursium_upgrade" }
            }).id('forge_frontier:sequenced_assembly/cursium_upgrade_recipe');     

    }
)