ServerEvents.recipes (event=>
    {
        event.custom({
            type: "createhalitosis:halitosis",
            ingredients: [
                {
                    item: "minecraft:leather"
                }
            ],
            results: [
                {
                    item: "minecraft:phantom_membrane"
                }
            ]
        }).id("forge_frontier:halitosis/phantom_membrane")
    }
)