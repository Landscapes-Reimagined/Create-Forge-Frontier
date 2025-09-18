ServerEvents.recipes(event => 
    {
        // Liquid to Bottle Recipe
            event.custom({
                type: 'create:filling',
                ingredients: [
                    {
                        fluid: 'create_central_kitchen:dragon_breath',
                        amount: 100
                    },
                    {
                        item: 'minecraft:glass_bottle',
                        count: 1
                    }
                ],
                results: [
                    {
                        item: 'minecraft:dragon_breath',
                        count: 1
                    }
                ]
            }).id('forge_frontier:filling/dragons_breath')
    }
)