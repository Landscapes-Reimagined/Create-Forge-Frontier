ServerEvents.recipes(event => 
    {
        // Refractory Mortar
            event.remove({ id: 'createmetallurgy:mixing/refractory_mortar' })
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        tag: 'forge:sand'
                    },
                    {
                        tag: 'forge:sand'
                    },
                    {
                        item: 'minecraft:clay_ball'
                    },
                    {
                        fluid: 'minecraft:water',
                        amount: 1000
                    }
                ],
                results: [
                    {
                        item: "createmetallurgy:refractory_mortar",
                    }
                ],
                processingTime: 100, 
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/refractory_mortar') 
    }
)