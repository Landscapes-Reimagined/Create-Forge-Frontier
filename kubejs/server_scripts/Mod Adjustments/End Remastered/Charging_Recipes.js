ServerEvents.recipes(event => {

    event.custom({
        type: 'createaddition:charging',
        input: {
            item: 'forge_frontier:unfinished_aetheric_eye'
        },
        result: {
            item: 'endrem:exotic_eye'
        },
        energy: 1000
    }).id('forge_frontier:charging/aetheric_eye')

})
