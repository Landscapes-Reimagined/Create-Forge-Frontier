ServerEvents.recipes(event => 
    {
        // Dragon Head Catalyst
            event.custom({
                type: 'create:item_application',
                ingredients: [
                {
                    item: 'create_connected:empty_fan_catalyst'
                },
                {
                    item: 'minecraft:dragon_head'
                }
                ],
                results: [
                {
                    item: 'create_connected:fan_ending_catalyst_dragon_head'
                }
                ]
            }).id('forge_frontier:item_application/dragon_head_catalyst');
    }
)