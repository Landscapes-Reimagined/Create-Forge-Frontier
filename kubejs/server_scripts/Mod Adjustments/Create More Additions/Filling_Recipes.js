ServerEvents.recipes(event => 
    {
        // Totem of Undying Recipe
        event.custom({
            type: "create:filling",
            ingredients: [
                {
                    item: "create_more_additions:incomplete_totem"
                },
                {
                    amount: 135,
                    fluid: "create_enchantment_industry:experience",
                    nbt: {}
                }
            ],
            results: [
                {
                    item: "minecraft:totem_of_undying"
                }
            ]
        }).id("forge_frontier:filling/totem_of_undying")
    }
)
