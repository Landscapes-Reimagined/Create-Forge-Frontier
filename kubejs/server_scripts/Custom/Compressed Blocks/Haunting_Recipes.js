ServerEvents.recipes(event => {
    // Haunting recipes
        // Compressed Cobblestone -> Compressed Blackstone
        for (let i = 1; i <= 9; i++) {
            event.custom({
                type: "create:haunting",
                ingredients: [{ item: `createcompression:compressed_cobblestone_${i}x` }],
                results: [{ item: `createcompression:compressed_blackstone_${i}x`, count: 1 }]
            }).id(`forge_frontier:haunting/compressed_cobblestone_${i}x`);
        }

        // Compressed Dirt -> Compressed Soul Soil
        for (let i = 1; i <= 9; i++) {
            event.custom({
                type: "create:haunting",
                ingredients: [{ item: `createcompression:compressed_dirt_${i}x` }],
                results: [{ item: `createcompression:compressed_soul_soil_${i}x`, count: 1 }]
            }).id(`forge_frontier:haunting/compressed_dirt_${i}x`);
        }

        // Compressed Sand -> Compressed Soul Sand
        for (let i = 1; i <= 9; i++) {
            event.custom({
                type: "create:haunting",
                ingredients: [{ item: `createcompression:compressed_sand_${i}x` }],
                results: [{ item: `createcompression:compressed_soul_sand_${i}x`, count: 1 }]
            }).id(`forge_frontier:haunting/compressed_sand_${i}x`);
        }        

});