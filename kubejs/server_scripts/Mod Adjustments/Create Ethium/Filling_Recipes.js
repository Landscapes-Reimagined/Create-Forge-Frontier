ServerEvents.recipes(event => 
    {
        // Amethyst Mix Filling Recipe
            event.custom({
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:glass_bottle'
                    },
                    {
                        amount: 250,
                        fluid: 'forge_frontier:molten_amethyst_mix',
                        nbt: {}
                    }
                ],
                results: [
                    {
                        item: 'create_ethium:amethyst_mix'
                    }
                ]
            })

        // Chorus Nectar Filling Recipe
            event.custom({
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:glass_bottle'
                    },
                    {
                        amount: 250,
                        fluid: 'create_ethium:chorus_nectar_fluid',
                        nbt: {}
                    }
                ],
                results: [
                    {
                        item: 'create_ethium:chorus_nectar'
                    }
                ]
            })            

        // Echo Compound Filling Recipe
            event.custom({
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:glass_bottle'
                    },
                    {
                        amount: 250,
                        fluid: 'create_ethium:echo_compound_fluid',
                        nbt: {}
                    }
                ],
                results: [
                    {
                        item: 'create_ethium:echo_compound'
                    }
                ]
            })        
    }
)