ServerEvents.recipes(event => 
    {
        // Crushed Irradium Blasting Recipe
            event.custom({
                type: 'minecraft:blasting',
                cookingtime: 100,
                experience: 0.1,
                ingredient: 
                    { item: 'forge_frontier:crushed_irradium' },
                result: 
                    { item: 'enlightened_end:depleted_irradium_bar' }
            }).id('forge_frontier:blasting/crushed_irradium'); 

        // Crushed Malachite Blasting Recipe
            event.custom({
                type: 'minecraft:blasting',
                cookingtime: 100,
                experience: 0.1,
                ingredient: 
                    { item: 'forge_frontier:crushed_malachite' },
                result: 
                    { item: 'enlightened_end:malachite' }
            }).id('forge_frontier:blasting/crushed_malachite');

        // Crushed Bismith Blasting Recipe
            event.custom({
                type: 'minecraft:blasting',
                cookingtime: 100, 
                experience: 0.1, 
                ingredient: {
                    item: 'forge_frontier:crushed_bismuth' 
                },
                result: {
                    item: 'enlightened_end:bismuth_ingot' 
                }
            }).id('forge_frontier:blasting/crushed_bismuth');    
    }
)