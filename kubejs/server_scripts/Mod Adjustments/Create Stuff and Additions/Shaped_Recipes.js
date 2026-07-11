ServerEvents.recipes(event=>
    {
        // Copper Magnet Recipe
            event.remove({ id: 'create_sa:copper_magnet_recipe' })
            event.shaped(Item.of( 'create_sa:copper_magnet', 1 ), 
                [
                    'L R',
                    'CTC',
                    'CCC'
                ], 
                {
                    L: 'create_dd:lapis_alloy',
                    R: 'create:polished_rose_quartz',
                    C: 'create:copper_sheet',
                    T: 'create:transmitter'
                }
            ).id( 'forge_frontier:shaped/copper_magnet' )
    }
)