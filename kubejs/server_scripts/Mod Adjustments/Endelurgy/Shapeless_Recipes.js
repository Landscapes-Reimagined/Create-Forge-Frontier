ServerEvents.recipes(event=>
    {
        // Luxite to Shard Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "endelurgy:luxite"
                    }
                ],
                result: {
                    item: "endelurgy:luxite_shard",
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/luxite' )
    }
)