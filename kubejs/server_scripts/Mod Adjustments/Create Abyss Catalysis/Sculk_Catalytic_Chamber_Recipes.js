ServerEvents.recipes(event => 
    {
        event.custom({
            type: "sculkcatalyticchamber:chamber",
            heatRequirement: "superheated",
            topIngredients: [
                {
                    item: "minecraft:glass_bottle"
                }
        ],
            bottomIngredients: [
            {
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        catalysts: [
            {
                item: "minecraft:dragon_head"
            }
        ],
            chances: 0,
            results: [
            {
                item: "minecraft:dragon_breath"
            }
            ]
        }).id('forge_frontier:sculk_catalytic_chamber/dragon_breath')
    }
)