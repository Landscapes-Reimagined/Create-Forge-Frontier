ServerEvents.recipes(event => 
    {
        // Fixes Chipped Tinkering Table Recipe
            event.remove({ id: 'chipped:benches/mechanist_workbench' })
            event.shaped(
                Item.of('chipped:tinkering_table', 1),
                [
                    'A  ',
                    'BCC',
                    'DED'
                ],
                {
                    A: 'minecraft:redstone_torch',
                    B: 'minecraft:piston',
                    C: '#minecraft:wooden_slabs',
                    D: '#forge:stripped_logs',
                    E: 'minecraft:tnt'
                }
            ).id( 'forge_frontier:shaped/tinkering_table' )
    }
)