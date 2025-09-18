ServerEvents.recipes(event => 
    {
        // Bolt Armor Trim
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "forge_frontier:copper_shard" },
                loops: 1,
                results: [{ item: "trials:bolt_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "forge_frontier:copper_shard" },
                            { item: "create_templates_gears:diamond_sheet" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_bolt_template" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_bolt_template" }],
                        results: [{ item: "trials:bolt_template" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_bolt_template" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "forge_frontier:incomplete_bolt_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_bolt_template" }
            }).id('forge_frontier:sequenced_assembly/bolt_template_recipe');  
    }
)