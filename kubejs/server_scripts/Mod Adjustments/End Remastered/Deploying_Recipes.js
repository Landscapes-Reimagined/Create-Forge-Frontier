ServerEvents.recipes(event => {

    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'forge_frontier:unfinished_cryptic_eye' },
            { item: 'endrem:undead_soul' }
        ],
        results: [
            { item: 'endrem:cryptic_eye' }
        ]
    }).id('forge_frontier:deploying/cryptic_eye_finish')

    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'forge_frontier:unfinished_guardian_eye' },
            { item: 'minecraft:conduit' }
        ],
        results: [
            { item: 'forge_frontier:channeled_guardian_eye' }
        ]
    }).id('forge_frontier:deploying/guardian_eye_conduit')

})
