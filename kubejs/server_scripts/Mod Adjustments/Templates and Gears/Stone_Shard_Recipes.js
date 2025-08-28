ServerEvents.recipes(event => 
    {
        // Goggle Armor Trim
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:stone_sheet" },
                loops: 1,
                results: [{ item: "creategoggles:goggle_armor_trim_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:stone_sheet" },
                            { item: "create:goggles" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_goggle_armor_trim" }]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "forge_frontier:incomplete_goggle_armor_trim" },
                            { item: "create_templates_gears:diamond_sheet" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_goggle_armor_trim" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_goggle_armor_trim" }],
                        results: [{ item: "creategoggles:goggle_armor_trim_smithing_template" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_goggle_armor_trim" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "forge_frontier:incomplete_goggle_armor_trim" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_goggle_armor_trim" }
            }).id('forge_frontier:sequenced_assembly/goggle_armor_trim_recipe');  

        // Runic Etching
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:stone_sheet" },
                loops: 1,
                results: [{ item: "quark:smithing_template_rune" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:stone_sheet" },
                            { tag: "quark:corundum" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_runic_etching" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_runic_etching" }],
                        results: [{ item: "forge_frontier:incomplete_runic_etching" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_runic_etching" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "quark:smithing_template_rune" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_runic_etching" }
            }).id('forge_frontier:sequenced_assembly/runic_etching_recipe');  

    }
)