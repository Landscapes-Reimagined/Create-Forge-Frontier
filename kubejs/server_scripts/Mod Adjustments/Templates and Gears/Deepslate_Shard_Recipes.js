ServerEvents.recipes(event => 
    {
        // Haunt Armor Trim Recipe
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:deepslate_sheet" },
                loops: 1,
                results: [{ item: "luminous_nether:haunt_armor_trim" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:deepslate_sheet" },
                            { item: "luminous_nether:ghostly_essence" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_haunt_armor_trim" }]
                    },
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "forge_frontier:incomplete_haunt_armor_trim" },
                            { item: "create_templates_gears:diamond_sheet" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_haunt_armor_trim" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_haunt_armor_trim" }],
                        results: [{ item: "forge_frontier:incomplete_haunt_armor_trim" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_haunt_armor_trim" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "luminous_nether:haunt_armor_trim" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_haunt_armor_trim" }
            }).id('forge_frontier:sequenced_assembly/haunt_armor_trim_recipe');        
    }
)