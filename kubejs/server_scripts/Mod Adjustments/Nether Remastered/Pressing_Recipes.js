ServerEvents.recipes(event => 
    {
        // Seal Core Recipe
            event.custom({
                type: 'create:pressing',
                ingredients: [
                    {
                        item: "nether_remastered:seal_crystal"
                    }
                ],
                results: [ 
                    {
                        item: 'forge_frontier:seal_core'
                    }
                ]
            }).id( 'forge_frontier:pressing/seal_core')
    }
)