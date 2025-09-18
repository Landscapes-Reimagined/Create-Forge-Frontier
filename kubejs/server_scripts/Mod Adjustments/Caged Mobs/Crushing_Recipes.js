ServerEvents.recipes(event => 
    {
        // Nether Star Crushing Recipe
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    { item: 'minecraft:nether_star' },
                ],
                processingTime: 400,
                results: [
                    { item: 'cagedmobs:nether_star_fragment', count: 4 }
                ],
            }).id('forge_frontier:crushing/netherstar');
    }
)