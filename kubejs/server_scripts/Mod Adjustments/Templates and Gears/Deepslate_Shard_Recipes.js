ServerEvents.recipes(event => 
    {
        // Fluix Upgrade
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:deepslate_sheet" },
                loops: 1,
                results: [{ item: "ae2:fluix_upgrade_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:deepslate_sheet" },
                            { item: "ae2:fluix_crystal" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_fluix_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_fluix_upgrade" }],
                        results: [{ item: "forge_frontier:incomplete_fluix_upgrade" }]
                    },
                                        {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_fluix_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "ae2:fluix_upgrade_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_fluix_upgrade" }
            }).id('forge_frontier:sequenced_assembly/fluix_upgrade_recipe');  

    }
)