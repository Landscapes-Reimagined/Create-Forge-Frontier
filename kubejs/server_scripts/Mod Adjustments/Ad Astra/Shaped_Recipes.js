ServerEvents.recipes(event => 
    {
        // Recipe Removal
        event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
        event.remove({ id: 'ad_astra:steel_rod' })
        event.remove({ id: 'ad_astra:iron_rod' })

        // Steel Engine Recipe 
            event.remove({ id: "ad_astra:steel_engine"})
            event.shaped(
                Item.of('ad_astra:steel_engine'),
                [
                    'SSS',
                    'SBS',
                    ' F '
                ],
                {
                    S: '#ad_astra:steel_plates',
                    B: 'create:blaze_burner',
                    F: 'ad_astra:fan'     
                }
            ).id( 'forge_frontier:shaped/steel_engine' )

        // Etrium Factory Block Recipe
            event.shaped
            (
                Item.of('ad_astra:etrium_factory_block', 64),
                [
                    'PPP',
                    'PIP',
                    'PPP'
                ],
                {
                    P: 'ad_astra:etrium_plate',
                    I: 'ad_astra:etrium_ingot'                
                }
            ).id( 'forge_frontier:shaped/etrium_factory_block')
        
            // Encased Etrium Block Recipe
            event.shaped
            (
                Item.of('ad_astra:encased_etrium_block', 64),
                [
                    'III',
                    'PPP',
                    'III'
                ],
                {
                    P: 'ad_astra:etrium_plate',
                    I: '#ad_astra:steel_ingots'                
                }
            ).id( 'forge_frontier:shaped/encased_etrium_block')

            // Etrium Plateblock Recipe
            event.shaped
            (
                Item.of('ad_astra:etrium_plateblock', 64),
                [
                    'PPP',
                    'PRP',
                    'PPP'
                ],
                {
                    P: 'ad_astra:etrium_plate',
                    R: 'ad_astra:etrium_rod'                
                }
            ).id( 'forge_frontier:shaped/etrium_plateblock')

            // Etrium Panel Recipe
            event.shaped
            (
                Item.of('ad_astra:etrium_panel', 64),
                [
                    'PIP',
                    'III',
                    'PIP'
                ],
                {
                    P: 'ad_astra:etrium_plate',
                    I: 'ad_astra:etrium_ingot'                
                }
            ).id( 'forge_frontier:shaped/etrium_panel')

            // Etrium Block Recipe
            event.shaped
            (
                Item.of('ad_astra:etrium_block'),
                [
                    'III',
                    'III',
                    'III'
                ],
                {
                    I: 'ad_astra:etrium_ingot'                
                }
            ).id( 'forge_frontier:shaped/etrium_block')
            
            // Etrium Ingot Recipe
            event.shaped
            (
                Item.of('ad_astra:etrium_ingot'),
                [
                    'NNN',
                    'NNN',
                    'NNN'
                ],
                {
                    N: 'ad_astra:etrium_nugget'                
                }
            ).id( 'forge_frontier:shaped/etrium_ingot')
    }
)