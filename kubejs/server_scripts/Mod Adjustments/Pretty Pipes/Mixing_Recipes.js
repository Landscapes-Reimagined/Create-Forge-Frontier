ServerEvents.recipes(event => {
    // Pipe Recipes
    event.remove({ id: 'prettypipes:pipe' })
    event.remove({ id: 'ppfluids:fluid_pipe_to_pipe' })
    event.remove({ id: 'ppfluids:fluid_pipe' })

    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'create:brass_sheet' },
            { item: 'create:brass_sheet' },
            { item: 'create:andesite_alloy' },
            { tag: 'forge:glass' },
            { item: 'create:chute' }
        ],
        heatRequirement: 'heated',
        results: [
            { item: 'prettypipes:pipe', count: 4 }
        ]
    }).id('forge_frontier:mixing/pipe')

    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'create:copper_sheet' },
            { item: 'create:copper_sheet' },
            { item: 'create:fluid_pipe' },
            { tag: 'forge:glass' }
        ],
        heatRequirement: 'heated',
        results: [
            { item: 'ppfluids:fluid_pipe', count: 2 }
        ]
    }).id('forge_frontier:mixing/fluid_pipe')

    event.custom({
        type: 'create:pressing',
        ingredients: [
            { item: 'create:iron_sheet' },
            { item: 'create:andesite_alloy' }
        ],
        results: [
            { item: 'prettypipes:pipe_frame' }
        ]
    }).id('forge_frontier:pressing/pipe_frame')
})
