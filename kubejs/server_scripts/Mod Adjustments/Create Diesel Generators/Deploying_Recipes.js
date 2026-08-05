ServerEvents.recipes(event => {
    const molds = [
        {
            name: 'bowl',
            patternItem: 'minecraft:bowl'
        },
        {
            name: 'bar',
            patternItem: "ratatouille:chocolate_mold"
        },
        {
            name: 'lines',
            patternItem: "minecraft:stick"
        },
        {
            name: 'chain',
            patternItem: 'minecraft:chain'
        }
    ];

    molds.forEach(mold => {
        event.custom({
            type: 'create:deploying',

            ingredients: [
                {
                    item: 'create:iron_sheet'
                },
                {
                    item: mold.patternItem
                }
            ],

            results: [
                {
                    item: 'createdieselgenerators:mold',
                    count: 1,
                    nbt: {
                        Mold: `createdieselgenerators:${mold.name}`
                    }
                }
            ],

            keepHeldItem: true
        }).id(`forge_frontier:deploying/${mold.name}_mold`);
    });
});