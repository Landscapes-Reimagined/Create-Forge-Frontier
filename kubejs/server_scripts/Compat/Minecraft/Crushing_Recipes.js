ServerEvents.recipes(event => 
    {
        // Netherite Crushing Recipe
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    { item: 'minecraft:netherite_ingot' },
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:netherite_scrap', count: 4 }
                ],
            }).id('forge_frontier:crushing/netherite');

        // New Nether Wart Block Crushing Recipe
            event.remove({ id: 'create:crushing/nether_wart_block' })
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    { item: 'minecraft:nether_wart_block' }
                ],
                processingTime: 400,
                results: [
                    { item: 'minecraft:nether_wart', count: 2 },
                    { item: 'minecraft:nether_wart', chance: 0.10 }]
            }).id('forge_frontier:crushing/nether_wart_block');
    }
)