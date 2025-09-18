ServerEvents.recipes(event => 
    {
        // Lime Juice Recipe
            event.custom({
            type: 'create:compacting',
                ingredients: [
                    {
                        item: 'collectorsreap:lime_slice',
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:lime_juice',
                        amount: 125
                    },
                ],
            }).id('forge_frontier:compacting/lime_juice')
    }
)