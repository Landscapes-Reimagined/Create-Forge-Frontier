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

        // Etrium Plate from Block Recipe
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