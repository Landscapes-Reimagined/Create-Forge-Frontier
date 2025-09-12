ServerEvents.recipes(event => 
    {
        // Flow Armor Trim
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "forge_frontier:breeze_shard" },
                loops: 1,
                results: [{ item: "trials:flow_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "forge_frontier:breeze_shard" },
                            { item: "create_templates_gears:diamond_sheet" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_flow_template" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_flow_template" }],
                        results: [{ item: "trials:flow_template" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_flow_template" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "forge_frontier:incomplete_flow_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_flow_template" }
            }).id('forge_frontier:sequenced_assembly/flow_template_recipe');  
    }
)