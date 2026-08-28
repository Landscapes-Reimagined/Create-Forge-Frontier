ServerEvents.recipes(event => {
    event.remove({ id: "create_unbreakable:mechanical_crafting/eternal_modifier" })
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' BBB ',
            'BBGBB',
            'BGSGB',
            'BBGBB',
            ' BBB '
        ],
        key: {
            B: {
                item: 'create:brass_block'
            },
            G: {
                type: 'apotheosis:gem',
                rarity: 'apotheosis:ancient'
            },
            S: {
                item: 'createqol:shadow_radiance'
            }
        },
        result: {
            item: 'create_unbreakable:irromolding',
            count: 1
        },
        acceptMirrored: false
    }).id('forge_frontier:mechanical_crafting/irromolding');

});