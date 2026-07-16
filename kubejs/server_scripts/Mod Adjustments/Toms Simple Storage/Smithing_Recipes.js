ServerEvents.recipes(event =>
    {
        // Tom's Simple Storage Smithing Recipes

            // Advanced Wireless Terminal
            event.custom({
                type: "minecraft:smithing_transform",
                base: {
                    item: "toms_storage:ts.wireless_terminal"
                },
                addition: {
                    item: "minecraft:netherite_ingot"
                },
                template: {
                    item: "create:mechanical_crafter"
                },
                result: {
                    item: "toms_storage:ts.adv_wireless_terminal"
                }
            }).id("forge_frontier:smithing/adv_wireless_terminal")

            // Wireless Terminal
            event.custom({
                type: "minecraft:smithing_transform",
                base: {
                    item: "create:transmitter"
                },
                addition: {
                    item: "create:linked_controller"
                },
                template: {
                    item: "toms_storage:ts.storage_terminal"
                },
                result: {
                    item: "toms_storage:ts.wireless_terminal"
                }
            }).id("forge_frontier:smithing/wireless_terminal")
    }
)
