ServerEvents.recipes(event => 
    {
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