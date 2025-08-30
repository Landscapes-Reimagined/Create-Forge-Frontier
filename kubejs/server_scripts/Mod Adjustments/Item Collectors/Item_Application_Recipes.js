ServerEvents.recipes(event => 
    {
        // Basic Item Collector Recipe
            event.remove({ id: 'itemcollectors:basic_collector' })
            event.custom({
                type: 'create:item_application',
                ingredients: [
                {
                    item: 'minecraft:obsidian'
                },
                {
                    tag: 'forge:ender_pearls'
                }
                ],
                results: [
                {
                    item: 'itemcollectors:basic_collector'
                }
                ]
            }).id('forge_frontier:item_application/basic_collector');

            // Advanced Item Collector Recipe
                event.remove({ id: 'itemcollectors:advanced_collector' })
                event.custom({
                    type: 'create:item_application',
                    ingredients: [
                    {
                        item: 'itemcollectors:basic_collector'
                    },
                    {
                        item: 'minecraft:ender_eye'
                    }
                    ],
                    results: [
                    {
                        item: 'itemcollectors:advanced_collector'
                    }
                    ]
                }).id('forge_frontier:item_application/advanced_collector');
    }
)