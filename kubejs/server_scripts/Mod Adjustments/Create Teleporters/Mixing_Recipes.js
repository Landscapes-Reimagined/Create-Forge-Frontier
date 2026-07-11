ServerEvents.recipes(event => 
    {
        // Strophar Mushroom to Quantum Fluid Mixing Recipe
            event.remove({id: 'createteleporters:quantum_fluid_recipe' })
            event.custom({
                type: 'create:mixing',
                heatRequirement: 'heated',
                ingredients: [
                {
                    item: "minecraft:chorus_fruit"
                },
                {
                    amount: 1000,
                    fluid: 'minecraft:water',
                    nbt: {}
                }
                ],
                results: [
                {
                    amount: 1000,
                    fluid: 'createteleporters:quantum_fluid'
                }
                ]
            }).id( 'forge_frontier:mixing/quantum_fluid' )
    }
)