ServerEvents.recipes(event => {
    // Blasting recipes: Compressed Clay -> Compressed Terracotta
    for (let i = 1; i <= 9; i++) {
        event.custom({
            type: "minecraft:blasting",
            ingredient: { item: `createcompression:compressed_clay_${i}x` },
            result: { item: `createcompression:compressed_terracotta_${i}x`, count: 1 }
        }).id(`forge_frontier:blasting/compressed_clay_${i}x`);
    }
});