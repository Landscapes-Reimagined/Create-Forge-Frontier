ServerEvents.recipes(event => {

    event.custom({
        type: 'create_dd:freezing',
        ingredients: [
            { item: 'forge_frontier:unfinished_cold_eye' }
        ],
        results: [
            { item: 'endrem:cold_eye' }
        ]
    }).id('forge_frontier:freezing/cold_eye')

})
