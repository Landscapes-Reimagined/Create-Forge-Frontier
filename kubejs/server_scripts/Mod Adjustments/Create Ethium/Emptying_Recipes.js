ServerEvents.recipes(event => 
    {
        // Amethyst Mix Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'create_ethium:amethyst_mix'
                }
                ],
                results: [
                {
                    amount: 250,
                    fluid: 'forge_frontier:molten_amethyst_mix',
                },
                {
                    item: 'minecraft:glass_bottle'
                }
                ]
            }).id( 'forge_frontier:emptying/amethyst_mix_from_bottle' )

        // Molten Stellarite Bucket Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'create_ethium:molten_stellarite_bucket'
                }
                ],
                results: [
                {
                    amount: 1000,
                    fluid: 'create_ethium:molten_stellarite',
                },
                {
                    item: 'minecraft:bucket'
                }
                ]
            }).id( 'forge_frontier:emptying/molten_stellarite_from_bucket' )

        // Echo Compound Bucket Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'create_ethium:echo_compound_fluid_bucket'
                }
                ],
                results: [
                {
                    amount: 1000,
                    fluid: 'create_ethium:echo_compound_fluid',
                },
                {
                    item: 'minecraft:bucket'
                }
                ]
            }).id( 'forge_frontier:emptying/echo_compound_from_bucket' )
                    
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
                    item: "minecraft:popped_chorus_fruit"
                }
                ],
                results: [
                {
                    amount: 250,
                    fluid: 'create_ethium:chorus_nectar_fluid'
                }
                ]
            }).id( 'forge_frontier:emptying/chorus_nectar_from_fruit' )
    }
)