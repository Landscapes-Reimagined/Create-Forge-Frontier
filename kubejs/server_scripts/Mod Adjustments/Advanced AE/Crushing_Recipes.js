ServerEvents.recipes(event => 
    {
        // Quantum Dust Recipe
            event.remove({ id: 'advanced_ae:quantum_infused_dust'})
            event.custom({
                type: "create:crushing",
                ingredients: [
                    { item: 'advanced_ae:shattered_singularity' }
                ],
                processingTime: 200,
                results: [
                    { item: 'advanced_ae:quantum_infused_dust', count: 1 }
                ]
            }).id('forge_frontier:crushing/quantum_infused_dust');
    }
)