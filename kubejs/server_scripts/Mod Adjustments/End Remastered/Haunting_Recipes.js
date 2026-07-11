ServerEvents.recipes(event => {

    const hauntingRecipes = [
        { input: 'forge_frontier:unfinished_black_eye', output: 'endrem:black_eye', id: 'black_eye' },
        { input: 'forge_frontier:unfinished_cursed_eye', output: 'endrem:cursed_eye', id: 'cursed_eye' },
        { input: 'forge_frontier:unfinished_evil_eye', output: 'endrem:evil_eye', id: 'evil_eye' },
        { input: 'forge_frontier:unfinished_wither_eye', output: 'endrem:wither_eye', id: 'wither_eye' },
        { input: 'forge_frontier:unfinished_undead_eye', output: 'endrem:undead_eye', id: 'undead_eye' }
    ]

    hauntingRecipes.forEach(recipe => {
        event.custom({
            type: 'create:haunting',
            ingredients: [{ item: recipe.input }],
            results: [{ item: recipe.output }]
        }).id(`forge_frontier:haunting/${recipe.id}`)
    })

})
