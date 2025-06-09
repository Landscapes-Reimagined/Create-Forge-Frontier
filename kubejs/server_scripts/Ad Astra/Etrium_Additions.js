ServerEvents.recipes(event => 
    {
        // Etrium Factory Block
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
    
        // Encased Etrium Block
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

        // Etrium Plateblock
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

        // Etrium Panel
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

        // Etrium Block
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
        
        // Etrium Rod
        event.shaped
        (
            Item.of('ad_astra:etrium_rod', 4),
            [
                ' P ',
                ' P '
            ],
            {
                P: 'ad_astra:etrium_plate'                
            }
        ).id( 'forge_frontier:shaped/etrium_rod')

        // Etrium Ingot
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
        
        // Etrium Ingot
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'ad_astra:etrium_block'
                }
            ],
            result: {
                item: 'ad_astra:etrium_ingot',
                count: 9
            }
		}).id( 'forge_frontier:shapeless/etrium_ingot' )

        // Etrium Nugget
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'ad_astra:etrium_ingot'
                }
            ],
            result: {
                item: 'ad_astra:etrium_nugget',
                count: 9
            }
		}).id( 'forge_frontier:shapeless/etrium_nugget' )

        // Etrium Plate 
        event.custom({
            type: 'create:pressing',
            ingredients: [
                {
                    item: 'ad_astra:etrium_ingot'
                }
            ],
            results: [ 
                {
                    item: 'ad_astra:etrium_plate'
                }
            ]
        }).id( 'forge_frontier:pressing/etrium_plate')

        // Etrium Plate from Block
        event.custom({
            type: 'ad_astra:compressing',
            cookingtime: 800,
            energy: 20,
            ingredient: 
                {
                    item: 'ad_astra:etrium_block'
                },
            result: 
                {
                    id: 'ad_astra:etrium_plate',
                    count: 9
                }
        }).id( 'forge_frontier:compressing/etrium_plate')

    }   
)