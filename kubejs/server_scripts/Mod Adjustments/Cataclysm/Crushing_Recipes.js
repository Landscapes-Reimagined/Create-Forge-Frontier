ServerEvents.recipes(event => 
    {
       // Cursium Recipes
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: "cataclysm:strange_key" }
            ],
            processingTime: 300,
            results: [
                { item: "cataclysm:cursium_ingot", chance: 0.75 }
            ]
        }).id("forge_frontier:crushing/strange_key_to_cursium_ingot"); 
    }
);