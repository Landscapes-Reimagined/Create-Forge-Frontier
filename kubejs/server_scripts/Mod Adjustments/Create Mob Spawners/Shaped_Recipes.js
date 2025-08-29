ServerEvents.recipes(event => 
    {
        // Empty Soul Catcher Recipe
            event.remove({ id: 'create_mob_spawners:empty_soul_catcher'})
            event.shaped(
                Item.of('create_mob_spawners:empty_soul_catcher'),
                [
                    'BcB',
                    'C W',
                    'BcB'
                ],
                {
                    B: 'create:brass_sheet',
                    c: 'create:cardboard',
                    C: 'create:brass_casing',
                    W: 'create:cogwheel'
                }
            ).id( 'forge_frontier:shaped/empty_soul_catcher' )    
    }
)