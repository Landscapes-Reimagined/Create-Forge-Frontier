ServerEvents.recipes(event => 
    {

        // Warden Upgrade
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:silence_echo_sheet" },
                loops: 1,
                results: [{ item: "deeperdarker:warden_upgrade_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:silence_echo_sheet" },
                            { item: "deeperdarker:resonarium" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_warden_upgrade" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_warden_upgrade" }],
                        results: [{ item: "forge_frontier:incomplete_warden_upgrade" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_warden_upgrade" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "deeperdarker:warden_upgrade_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_warden_upgrade" }
            }).id('forge_frontier:sequenced_assembly/warden_upgrade_recipe');          

    }
)