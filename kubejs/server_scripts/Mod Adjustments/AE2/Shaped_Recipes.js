ServerEvents.recipes(event => 
    {
        // Spatial IO Port Recipe
            event.remove({ id: 'ae2:network/blocks/spatial_io_port' })
            event.shaped(
                Item.of('ae2:spatial_io_port'),
                [
                    'GGG',
                    'CmC',
                    'IEI'
                ],
                {
                    G: '#c:glass_blocks',
                    C: 'ae2:fluix_glass_cable',
                    m: '#forge_frontier:mini_dimension',
                    I: 'minecraft:iron_ingot',
                    E: 'ae2:engineering_processor'
                }
            ).id('forge_frontier:shaped/spatial_io_port')

        // Spatial Anchor Recipe
            event.remove({ id: 'ae2:network/blocks/spatial_anchor' })
            event.shaped(
                Item.of('ae2:spatial_anchor'),
                [
                    'PLP',
                    'CcC',
                    'IEI'
                ],
                {   
                    P: 'ae2:spatial_pylon',
                    L: '#forge_frontier:chunk_loader/brass',
                    C: 'ae2:fluix_glass_cable',
                    c: 'ae2:spatial_cell_component_128',
                    I: 'minecraft:iron_ingot',
                    E: 'ae2:engineering_processor'
                }
            ).id('forge_frontier:shaped/spatial_anchor')

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