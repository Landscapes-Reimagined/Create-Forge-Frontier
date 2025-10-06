ServerEvents.recipes(event => 
    {
        // Etrium Plate Recipe
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
    }
)