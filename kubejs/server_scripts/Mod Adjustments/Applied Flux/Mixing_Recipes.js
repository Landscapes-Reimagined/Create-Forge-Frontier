ServerEvents.recipes(event => 
    {
        // Redstone Crystal Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                {
                    item: 'minecraft:redstone_block',
                },
                {
                    item: 'ae2:fluix_dust'
                },
                {
                    item: 'ae2:sky_dust'
                },
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                }
                ],
                results: [
                {
                    item: 'appflux:redstone_crystal',
                }
                ],
                processingTime: 100, 
            }).id('forge_frontier:mixing/redstone_crystal')  
    }
)