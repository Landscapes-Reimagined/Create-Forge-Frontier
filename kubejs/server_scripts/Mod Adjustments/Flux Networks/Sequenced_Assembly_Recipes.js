ServerEvents.recipes(event => 
    {
        // Flux Dust Recipe
        event.remove({ id: 'fluxnetworks:flux_dust' })
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'create:powdered_obsidian' },
            transitionalItem: { item: 'forge_frontier:incomplete_flux_dust' },
            loops: 1,
            results: [{ item: 'fluxnetworks:flux_dust' }],
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'create:powdered_obsidian' },
                        { item: 'create_additions_synthetics:brass_crystal' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_flux_dust' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'forge_frontier:incomplete_flux_dust' }],
                    results: [{ item: 'forge_frontier:incomplete_flux_dust' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'forge_frontier:incomplete_flux_dust' }],
                    results: [{ item: 'fluxnetworks:flux_dust' }]
                }
            ]
        }).id('forge_frontier:sequenced_assembly/flux_dust')
    }
)