ServerEvents.recipes(event => {
        event.custom({
                type: "minecraft:blasting",
                ingredient: 
                { 
                    item: "forge_frontier:unfinished_nether_eye" 
                },
                result: { 
                    item: "endrem:nether_eye", count: 1 
                },
                experience: 0.1,
                cookingtime: 100
            }).id("forge_frontier:blasting/nether_eye");
})
