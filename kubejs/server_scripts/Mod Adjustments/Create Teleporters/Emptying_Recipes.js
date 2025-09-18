ServerEvents.recipes(event => 
    {
        // Strophar Mushroom to Quantum Fluid Emptying Recipe
            event.remove({ id: 'createteleporters:telefluid_drain'})
            event.remove({ id: 'createteleporters:tele_fluid_chorus'})
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'ad_astra:strophar_mushroom'
                }
                ],
                results: [
                {
                    amount: 100,
                    fluid: 'createteleporters:quantum_fluid'
                }
                ]
            }).id( 'forge_frontier:emptying/strophar_mushroom' )

        // Quantum Fluid Bucket to Fluid Emptying Recipe
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'createteleporters:quantum_fluid_bucket'
                }
                ],
                results: [
                {
                    item: 'minecraft:bucket'
                },
                {
                    amount: 1000,
                    fluid: 'createteleporters:quantum_fluid'
                }
                ]
            }).id( 'forge_frontier:emptying/quantum_fluid_bucket' )
    }
)