ServerEvents.recipes(event => 
    {
        // Ooze Bucket Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'enlightened_end:ooze_fluid_bucket'
                }
                ],
                results: [
                {
                    amount: 1000,
                    fluid: 'enlightened_end:ooze_fluid'
                },
                {
                    item: 'minecraft:bucket'
                }
                ]
            }).id( 'forge_frontier:emptying/ooze_bucket' )

        // Ooze Bottle Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'enlightened_end:ooze_bottle'
                }
                ],
                results: [
                {
                    amount: 250,
                    fluid: 'enlightened_end:ooze_fluid'
                },
                {
                    item: 'minecraft:glass_bottle'
                }
                ]
            }).id( 'forge_frontier:emptying/ooze_bottle' )
    }
)         