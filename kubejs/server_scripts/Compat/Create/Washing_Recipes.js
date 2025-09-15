ServerEvents.recipes(event => 
    {
            // Dirt Washing Recipe
                event.custom({
                    type: 'create:splashing',
                    ingredients: [
                    {
                        item: 'minecraft:dirt'
                    }
                    ],
                    results: [
                    {
                        chance: 0.10,
                        count: 3,
                        item: 'minecraft:kelp'
                    },
                    {
                        chance: 0.08,
                        count: 2,
                        item: 'minecraft:seagrass'
                    },
                    {
                        chance: 0.02,
                        count: 1,
                        item: 'minecraft:tube_coral'
                    },
                    {
                        chance: 0.02,
                        count: 1,
                        item: 'minecraft:brain_coral'
                    },
                    {
                        chance: 0.02,
                        count: 1,
                        item: 'minecraft:bubble_coral'
                    },
                    {
                        chance: 0.02,
                        count: 1,
                        item: 'minecraft:fire_coral'
                    },
                    {
                        chance: 0.02,
                        count: 1,
                        item: 'minecraft:horn_coral'
                    },
                    {
                        chance: 0.02,
                        count: 2,
                        item: 'minecraft:sea_pickle'
                    }
                    ]
                }).id('forge_frontier:washing/dirt')
    }
)