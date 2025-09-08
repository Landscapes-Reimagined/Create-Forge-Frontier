ServerEvents.recipes(event => 
    {
        // Chorus Nectar Bucket Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'create_ethium:chorus_nectar_fluid_bucket'
                }
                ],
                results: [
                {
                    amount: 1000,
                    fluid: 'create_ethium:chorus_nectar_fluid',
                },
                {
                    item: 'minecraft:bucket'
                }
                ]
            }).id( 'forge_frontier:emptying/chorus_nectar_from_bucket' )

        // Chorus Flower Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'minecraft:chorus_flower'
                }
                ],
                results: [
                {
                    amount: 250,
                    fluid: 'create_ethium:chorus_nectar_fluid'
                }
                ]
            }).id( 'forge_frontier:emptying/chorus_nectar_from_flower' )
    }
)