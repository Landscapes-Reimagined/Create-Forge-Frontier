ServerEvents.recipes(event => {

    event.custom({
        type: 'create_aquatic_ambitions:channeling',
        ingredients: [
            { item: 'forge_frontier:channeled_guardian_eye' }
        ],
        results: [
            { item: 'endrem:guardian_eye' }
        ]
    }).id('forge_frontier:channeling/guardian_eye')

})
