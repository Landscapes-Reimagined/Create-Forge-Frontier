ServerEvents.recipes(event=>
    {
        // Luxite Recipe
        event.shaped(
            Item.of('endelurgy:luxite'),
            [
                'LLL',
                'LLL',
                'LLL'
            ],
            {
                L: "endelurgy:luxite_shard"
            }
        ).id('forge_frontier:shaped/luxite')
    }
)