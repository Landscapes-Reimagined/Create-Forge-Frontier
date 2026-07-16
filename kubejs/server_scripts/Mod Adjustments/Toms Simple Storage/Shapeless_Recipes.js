ServerEvents.recipes(event =>
    {
        // Tom's Simple Storage Shapeless Recipes

            // Inventory Cable
            event.shapeless(
                Item.of("toms_storage:ts.inventory_cable", 8),
                [
                    "create:industrial_iron_block",
                    "minecraft:dried_kelp"
                ]
            ).id("forge_frontier:shapeless/inventory_cable")

            // Inventory Cable Connector
            event.shapeless(
                "toms_storage:ts.inventory_cable_connector",
                [
                    "toms_storage:ts.inventory_cable",
                    "create:chute"
                ]
            ).id("forge_frontier:shapeless/inventory_cable_connector")

            // Inventory Proxy
            event.shapeless(
                "toms_storage:ts.inventory_proxy",
                [
                    "toms_storage:ts.inventory_connector",
                    "create:smart_chute"
                ]
            ).id("forge_frontier:shapeless/inventory_proxy")

            // Level Emitter
            event.shapeless(
                "toms_storage:ts.level_emitter",
                [
                    "create:transmitter",
                    "toms_storage:ts.inventory_hopper_basic"
                ]
            ).id("forge_frontier:shapeless/level_emitter")

            // Clean Trim
            event.shapeless(
                "toms_storage:ts.trim",
                [
                    "toms_storage:ts.painted_trim",
                    "minecraft:water_bucket"
                ]
            ).id("forge_frontier:shapeless/trim_clean")
    }
)
