ServerEvents.recipes(event => {

    event.custom({
        type: 'create:sandpaper_polishing',
        ingredients: [
            { item: 'forge_frontier:unfinished_old_eye' }
        ],
        results: [
            { item: 'endrem:old_eye' }
        ]
    }).id('forge_frontier:polishing/old_eye')

})
