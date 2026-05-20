ServerEvents.recipes(event => 
    {
        // Strophar Mushroom to Quantum Fluid Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: "minecraft:chorus_fruit"
                }
                ],
                results: [
                {
                    amount: 250,
                    fluid: 'createteleporters:quantum_fluid'
                }
                ]
            }).id( 'forge_frontier:emptying/strophar_mushroom' )

    }
)