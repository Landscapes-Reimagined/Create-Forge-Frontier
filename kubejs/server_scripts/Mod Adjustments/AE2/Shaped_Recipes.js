ServerEvents.recipes(event => 
    {
        // Charger Recipe
            event.remove({ id: "ae2:network/blocks/crystal_processing_charger"})
            event.shaped(
            Item.of("ae2:charger"),
            [
                "IBI",
                "S  ",
                "IBI"
            ],
            {
                I: "create_new_age:overcharged_iron",
                S: "ae2:printed_silicon",
                B: "create_additions_synthetics:dense_brass_sheet"
            }
            ).id( "forge_frontier:shaped/charger")


        // Import Bus Recipe
            event.remove({ id: "ae2:network/parts/import_bus"})
            event.shaped(
            Item.of("ae2:import_bus"),
            [
                " C ",
                " P ",
                "IAI"
            ],
            {
                A: "ae2:annihilation_core",
                I: "minecraft:iron_ingot",
                P: "minecraft:sticky_piston",
                C: "create:smart_chute"
            }
            ).id( "forge_frontier:shaped/import_bus" )

        // Export Bus Recipe
            event.remove({ id: "ae2:network/parts/export_bus"})
            event.shaped(
            Item.of("ae2:export_bus"),
            [
                "IFI",
                " P ",
                " C "
            ],
            {
                I: "minecraft:iron_ingot",
                F: "ae2:formation_core",
                P: "minecraft:piston",
                C: "create:smart_chute"
            }
            ).id( "forge_frontier:shaped/export_bus" )
    }
)