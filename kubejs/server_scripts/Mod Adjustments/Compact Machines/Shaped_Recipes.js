ServerEvents.recipes(event => 
    {
        // Compact Machine Tiny Recipe
            event.remove({ id: 'compactmachines:machine_tiny' })
            event.shaped(
                Item.of('compactmachines:machine_tiny'),
                [
                    'WCW',
                    'WVW',
                    'WWW'
                ],
                {
                    W: 'compactmachines:wall',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:copper_item_vault'
                }
            ).id( 'forge_frontier:shaped/machine_tiny' )

        // Compact Machine Small Recipe
            event.remove({ id: 'compactmachines:machine_small' })
            event.shaped(
                Item.of('compactmachines:machine_small'),
                [
                    'WCW',
                    'WVW',
                    'WWW'
                ],
                {
                    W: 'compactmachines:wall',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:iron_item_vault'
                }
            ).id( 'forge_frontier:shaped/machine_small' )

        // Compact Machine Normal Recipe
            event.remove({ id: 'compactmachines:machine_normal' })
            event.shaped(
                Item.of('compactmachines:machine_normal'),
                [
                    'WCW',
                    'WVW',
                    'WWW'
                ],
                {
                    W: 'compactmachines:wall',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:gold_item_vault'
                }
            ).id( 'forge_frontier:shaped/machine_normal' )

        // Compact Machine Large Recipe
            event.remove({ id: 'compactmachines:machine_large' })
            event.shaped(
                Item.of('compactmachines:machine_large'),
                [
                    'WCW',
                    'WVW',
                    'WWW'
                ],
                {
                    W: 'compactmachines:wall',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:crystal_item_vault'
                }
            ).id( 'forge_frontier:shaped/machine_large' )

        // Compact Machine Giant Recipe
            event.remove({ id: 'compactmachines:machine_giant' })
            event.shaped(
                Item.of('compactmachines:machine_giant'),
                [
                    'WCW',
                    'WVW',
                    'WWW'
                ],
                {
                    W: 'compactmachines:wall',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:diamond_item_vault'
                }
            ).id( 'forge_frontier:shaped/machine_giant' )

        // Compact Machine Maximum Recipe
            event.remove({ id: 'compactmachines:machine_maximum' })
            event.shaped(
                Item.of('compactmachines:machine_maximum'),
                [
                    'WCW',
                    'WVW',
                    'WWW'
                ],
                {
                    W: 'compactmachines:wall',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:netherite_item_vault'
                }
            ).id( 'forge_frontier:shaped/machine_maximum' )
    }
)