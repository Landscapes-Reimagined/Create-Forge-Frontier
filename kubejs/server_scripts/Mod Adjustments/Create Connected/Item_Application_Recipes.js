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

        // Freezing Catalyst
            event.custom({
                type: 'create:item_application',
                ingredients: [
                {
                    item: 'create_connected:empty_fan_catalyst'
                },
                {
                    item: "minecraft:powder_snow_bucket"
                }
                ],
                results: [
                {
                    item: "create_connected:fan_freezing_catalyst"
                }
                ]
            }).id('forge_frontier:item_application/freezing_catalyst');        

        // Seething Catalyst
            event.custom({
                type: 'create:item_application',
                ingredients: [
                {
                    item: 'create_connected:empty_fan_catalyst'
                },
                {
                    item: "create:blaze_cake"
                }
                ],
                results: [
                {
                    item: "create_connected:fan_seething_catalyst"
                }
                ]
            }).id('forge_frontier:item_application/seething_catalyst'); 

    }
)