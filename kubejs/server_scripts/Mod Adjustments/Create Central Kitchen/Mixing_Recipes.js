ServerEvents.recipes(event => 
    {
        // Creates Dragon Egg Recipe
            event.custom({
                type: 'create:mixing',
                ingredients: [
                    {
                        item: 'minecraft:nether_star',
                        amount: 1
                    },
                    {
                        item: 'ends_delight:non_hatchable_dragon_egg',
                        amount: 1
                    },
                    {
                        fluid: 'create_central_kitchen:dragon_breath',
                        amount: 1000
                    }
                ],
                results: [
                    {
                        item: 'minecraft:dragon_egg',
                        amount: 1
                    }
                ],
                heatRequirement: 'superheated'
            }).id('forge_frontier:mixing/dragon_egg');
    }
)