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
            
        // Otherside Upgrade
            event.custom({
                type: "create:sequenced_assembly",
                ingredient: { item: "create_templates_gears:silence_echo_sheet" },
                loops: 1,
                results: [{ item: "resonant_synthesis:otherside_upgrade_smithing_template" }],
                sequence: [
                    {
                        type: "create:deploying",
                        ingredients: [
                            { item: "create_templates_gears:silence_echo_sheet" },
                            { item: "resonant_synthesis:sculk_crystal" }
                        ],
                        results: [{ item: "forge_frontier:incomplete_otherside_upgrade_smithing_template" }]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [{ item: "forge_frontier:incomplete_otherside_upgrade_smithing_template" }],
                        results: [{ item: "forge_frontier:incomplete_otherside_upgrade_smithing_template" }]
                    },
                    {
                        type: "create:filling",
                        ingredients: [
                            { item: "forge_frontier:incomplete_otherside_upgrade_smithing_template" },
                            { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                        ],
                        results: [{ item: "resonant_synthesis:otherside_upgrade_smithing_template" }]
                    }
                ],
                transitionalItem: { item: "forge_frontier:incomplete_otherside_upgrade_smithing_template" }
            }).id('forge_frontier:sequenced_assembly/otherside_upgrade_recipe');
    }
)