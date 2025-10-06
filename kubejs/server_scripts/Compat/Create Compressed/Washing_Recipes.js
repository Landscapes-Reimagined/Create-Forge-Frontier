ServerEvents.recipes(event => {
    // Washing recipes
        // Compressed sand -> Compressed clay
        for (let i = 1; i <= 9; i++) {
            event.custom({
                type: "create:splashing",
                ingredients: [{ item: `createcompression:compressed_sand_${i}x` }],
                results: [{ item: `createcompression:compressed_clay_${i}x`, count: 1 }]
            }).id(`forge_frontier:splashing/compressed_sand_${i}x`);
        }

        // Compressed wheat_flour_pile -> Compressed Soul Soil
        for (let i = 1; i <= 9; i++) {
            event.custom({
                type: "create:splashing",
                ingredients: [{ item: `forge_frontier:compressed_wheat_flour_pile_${i}x` }],
                results: [{ item: `forge_frontier:compressed_dough_block_${i}x`, count: 1 }]
            }).id(`forge_frontier:splashing/compressed_wheat_flour_pile_${i}x`);
        }

});