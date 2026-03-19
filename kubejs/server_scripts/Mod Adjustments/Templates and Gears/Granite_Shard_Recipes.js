ServerEvents.recipes(event => 
    {
        // Primal Armor Trim
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:granite_sheet" },
                loops: 1,
                results: [{ item: "neapolitan:primal_armor_trim_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:granite_sheet" },
                            { item: "neapolitan:banana_stalk" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_primal_armor_trim" }]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "forge_frontier:incomplete_primal_armor_trim" },
                            { item: "create_templates_gears:diamond_sheet" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_primal_armor_trim" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_primal_armor_trim" }],
                        results: [{ item: "forge_frontier:incomplete_primal_armor_trim" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_primal_armor_trim" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "neapolitan:primal_armor_trim_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_primal_armor_trim" }
            }).id('forge_frontier:sequenced_assembly/primal_armor_trim_recipe');
            
        // Cult Armor Trim Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:granite_sheet" },
                loops: 1,
                results: [{ item: "luminous_nether:cultist_armor_trim" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:granite_sheet" },
                            { item: "luminous_nether:cult_flag_bottom" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_cult_armor_trim" }]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "forge_frontier:incomplete_cult_armor_trim" },
                            { item: "create_templates_gears:diamond_sheet" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_cult_armor_trim" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_cult_armor_trim" }],
                        results: [{ item: "forge_frontier:incomplete_cult_armor_trim" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_cult_armor_trim" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "luminous_nether:cultist_armor_trim" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_cult_armor_trim" }
            }).id('forge_frontier:sequenced_assembly/cult_armor_trim_recipe');        
    }
)