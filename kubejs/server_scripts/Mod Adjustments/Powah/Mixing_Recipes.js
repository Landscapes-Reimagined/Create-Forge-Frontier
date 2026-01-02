ServerEvents.recipes(event => 
    {
        // Raw Uraninite Dupe Recipe
        event.custom(
            {
                type: "create:mixing",
                ingredients: [
                    {
                        item: "powah:uraninite_raw"
                    },
                    {
                        tag: "excavated_variants:stone_stones"
                    },
                    {
                        item: "minecraft:clay"
                    },
                    {
                        amount: 1000,
                        fluid: "minecraft:water"
                    }
                ],
                results: [
                    {
                        count: 2,
                        item: "powah:uraninite_raw"
                    }
                ]
            }
        ).id('forge_frontier:mixing/raw_uraninite')
            
    }
)