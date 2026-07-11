ServerEvents.recipes(event => {
    // Compact Machine Tiny Recipe
    event.remove({ id: 'compactmachines:machine_tiny' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'compactmachines:wall' },
        transitionalItem: { item: 'forge_frontier:incomplete_machine_tiny' },
        loops: 1,
        results: [{ item: 'compactmachines:machine_tiny' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'compactmachines:wall' },
                    { item: 'create_bs:copper_item_vault' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_tiny' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_machine_tiny' },
                    { item: 'create_dd:chromatic_compound' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_tiny' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_tiny' }],
                results: [{ item: 'forge_frontier:incomplete_machine_tiny' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_tiny' }],
                results: [{ item: 'compactmachines:machine_tiny' }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/machine_tiny')

    // Compact Machine Small Recipe
    event.remove({ id: 'compactmachines:machine_small' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'compactmachines:wall' },
        transitionalItem: { item: 'forge_frontier:incomplete_machine_small' },
        loops: 1,
        results: [{ item: 'compactmachines:machine_small' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'compactmachines:wall' },
                    { item: 'create_bs:iron_item_vault' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_small' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_machine_small' },
                    { item: 'create_dd:chromatic_compound' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_small' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_small' }],
                results: [{ item: 'forge_frontier:incomplete_machine_small' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_small' }],
                results: [{ item: 'compactmachines:machine_small' }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/machine_small')

    // Compact Machine Normal Recipe
    event.remove({ id: 'compactmachines:machine_normal' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'compactmachines:wall' },
        transitionalItem: { item: 'forge_frontier:incomplete_machine_normal' },
        loops: 1,
        results: [{ item: 'compactmachines:machine_normal' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'compactmachines:wall' },
                    { item: 'create_bs:gold_item_vault' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_normal' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_machine_normal' },
                    { item: 'create_dd:chromatic_compound' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_normal' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_normal' }],
                results: [{ item: 'forge_frontier:incomplete_machine_normal' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_normal' }],
                results: [{ item: 'compactmachines:machine_normal' }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/machine_normal')

    // Compact Machine Large Recipe
    event.remove({ id: 'compactmachines:machine_large' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'compactmachines:wall' },
        transitionalItem: { item: 'forge_frontier:incomplete_machine_large' },
        loops: 1,
        results: [{ item: 'compactmachines:machine_large' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'compactmachines:wall' },
                    { item: 'create_bs:crystal_item_vault' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_large' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_machine_large' },
                    { item: 'create_dd:chromatic_compound' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_large' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_large' }],
                results: [{ item: 'forge_frontier:incomplete_machine_large' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_large' }],
                results: [{ item: 'compactmachines:machine_large' }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/machine_large')

    // Compact Machine Giant Recipe
    event.remove({ id: 'compactmachines:machine_giant' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'compactmachines:wall' },
        transitionalItem: { item: 'forge_frontier:incomplete_machine_giant' },
        loops: 1,
        results: [{ item: 'compactmachines:machine_giant' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'compactmachines:wall' },
                    { item: 'create_bs:diamond_item_vault' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_giant' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_machine_giant' },
                    { item: 'create_dd:chromatic_compound' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_giant' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_giant' }],
                results: [{ item: 'forge_frontier:incomplete_machine_giant' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_giant' }],
                results: [{ item: 'compactmachines:machine_giant' }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/machine_giant')

    // Compact Machine Maximum Recipe
    event.remove({ id: 'compactmachines:machine_maximum' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'compactmachines:wall' },
        transitionalItem: { item: 'forge_frontier:incomplete_machine_maximum' },
        loops: 1,
        results: [{ item: 'compactmachines:machine_maximum' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'compactmachines:wall' },
                    { item: 'create_bs:netherite_item_vault' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_maximum' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_machine_maximum' },
                    { item: 'create_dd:chromatic_compound' }
                ],
                results: [{ item: 'forge_frontier:incomplete_machine_maximum' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_maximum' }],
                results: [{ item: 'forge_frontier:incomplete_machine_maximum' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_machine_maximum' }],
                results: [{ item: 'compactmachines:machine_maximum' }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/machine_maximum')
})