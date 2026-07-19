ServerEvents.recipes(event =>
    {
        // Tom's Simple Storage Shaped Recipes

            // Filtered Inventory Cable Connector
            event.shaped(
                "toms_storage:ts.inventory_cable_connector_filtered",
                [
                    "I",
                    "S",
                    "P"
                ],
                {
                    P: "create:transmitter",
                    S: "toms_storage:ts.inventory_cable_connector",
                    I: "create:sturdy_sheet"
                }
            ).id("forge_frontier:shaped/inventory_cable_connector_filtered")

            // Framed Inventory Cable Connector
            event.shaped(
                "toms_storage:ts.inventory_cable_connector_framed",
                [
                    "SSS",
                    "SCS",
                    "SSS"
                ],
                {
                    C: "toms_storage:ts.inventory_cable_connector",
                    S: "#forge:rods/wooden"
                }
            ).id("forge_frontier:shaped/inventory_cable_connector_framed")

            // Framed Inventory Cable
            event.shaped(
                "toms_storage:ts.inventory_cable_framed",
                [
                    "SSS",
                    "SCS",
                    "SSS"
                ],
                {
                    C: "toms_storage:ts.inventory_cable",
                    S: "#forge:rods/wooden"
                }
            ).id("forge_frontier:shaped/inventory_cable_framed")

            // Inventory Connector
            event.shaped(
                Item.of("toms_storage:ts.inventory_connector", 2),
                [
                    " B ",
                    "BCB",
                    " B "
                ],
                {
                    B: "create:chute",
                    C: "create:item_vault"
                }
            ).id("forge_frontier:shaped/inventory_connector")

            // Basic Inventory Hopper
            event.shaped(
                "toms_storage:ts.inventory_hopper_basic",
                [
                    "I",
                    "S",
                    "P"
                ],
                {
                    P: "minecraft:hopper",
                    S: "create:industrial_iron_block",
                    I: "create:transmitter"
                }
            ).id("forge_frontier:shaped/inventory_hopper_basic")

            // Open Crate
            event.shaped(
                "toms_storage:ts.open_crate",
                [
                    "PSP",
                    "PCP",
                    "PTP"
                ],
                {
                    P: "#minecraft:planks",
                    C: "#forge:chests/wooden",
                    S: "#forge:rods/wooden",
                    T: "#minecraft:trapdoors"
                }
            ).id("forge_frontier:shaped/open_crate")

            // Paint Kit
            event.shaped(
                "toms_storage:ts.paint_kit",
                [
                    "RGB",
                    "iaW",
                    "bS "
                ],
                {
                    b: "minecraft:water_bucket",
                    a: "minecraft:bucket",
                    R: "#forge:dyes/red",
                    G: "#forge:dyes/green",
                    B: "#forge:dyes/blue",
                    W: "#minecraft:wool",
                    S: "#forge:rods/wooden",
                    i: "#forge:dyes/black"
                }
            ).id("forge_frontier:shaped/paint_kit")

            // Storage Terminal
            event.shaped(
                "toms_storage:ts.storage_terminal",
                [
                    " C ",
                    "cGc",
                    "PPP"
                ],
                {
                    C: "create:stock_link",
                    c: "create:item_vault",
                    P: "create:sturdy_sheet",
                    G: "create:stock_ticker"
                }
            ).id("forge_frontier:shaped/storage_terminal")

            // Inventory Trim
            event.shaped(
                Item.of("toms_storage:ts.trim", 2),
                [
                    "www",
                    "wXw",
                    "www"
                ],
                {
                    X: "create:andesite_tunnel",
                    w: "#forge:rods/wooden"
                }
            ).id("forge_frontier:shaped/trim")
    }
)
