ServerEvents.recipes(event=>
    {
        event.custom({
            type: "create:haunting",
            ingredients: 
            [
                {
                    item: "minecraft:snowball"
                }
            ],
            results: 
            [
                {
                    item: "minecraft:ghast_tear"
                }
            ]
        }).id('forge_frontier:haunting/ghast_tear')   
    }
)