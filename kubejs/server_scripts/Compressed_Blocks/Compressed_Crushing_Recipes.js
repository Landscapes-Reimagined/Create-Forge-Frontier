ServerEvents.recipes(event => {
    // Crushing recipes
    // Compressed Gravel -> Compressed Sand
    for (let i = 1; i <= 9; i++) {
        event.custom({
            type: "create:crushing",
            processingTime: 400,
            ingredients: [{ item: `createcompression:compressed_gravel_${i}x` }],
            results: [
                { item: `createcompression:compressed_sand_${i}x`, count: 1 }
            ]
        }).id(`forge_frontier:crushing/compressed_gravel_${i}x`);
    }

    // Compressed Obsidian 1x -> Obsidian Pile
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'createcompression:compressed_obsidian_1x' }
		],
		processingTime: 400,
		results: [
			{ item: 'create_compressed:powdered_obsidian_pile', count: 1 },
            { item: 'createcompression:compressed_obsidian_1x', chance: 0.75 }
		]
	}).id('forge_frontier:crushing/compressed_obsidian_1x');

    // Compressed Obsidian 2x + -> Compressed Powdered Obsidian Pile 2x +
    for (let i = 2; i <= 9; i++) {
        event.custom({
            type: "create:crushing",
            processingTime: 400,
            ingredients: [{ item: `createcompression:compressed_obsidian_${i}x` }],
            results: [
                { item: `forge_frontier:compressed_powdered_obsidian_pile_${i-1}x`, count: 1 },
                { item: `createcompression:compressed_obsidian_${i}x`, count: 1, chance: 0.75 }
            ]
        }).id(`forge_frontier:crushing/compressed_obsidian_${i}x`);
    }

    // Compressed Netherrack 1x -> Cinder Flour Pile
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'createcompression:compressed_netherrack_1x' }
		],
		processingTime: 400,
		results: [
			{ item: 'create_compressed:cinder_flour_pile', count: 1 },
            { item: 'create_compressed:cinder_flour_pile', chance: 0.50 }
		]
	}).id('forge_frontier:crushing/compressed_netherrack_1x');

    // Compressed Netherrack 2x + -> Compressed Cinder Flour Pile 2x +
    for (let i = 2; i <= 9; i++) {
        event.custom({
            type: "create:crushing",
            processingTime: 400,
            ingredients: [{ item: `createcompression:compressed_netherrack_${i}x` }],
            results: [
                { item: `forge_frontier:compressed_cinder_flour_pile_${i-1}x`, count: 1 },
                { item: `forge_frontier:compressed_cinder_flour_pile_${i-1}x`, count: 1, chance: 0.50 }
            ]
        }).id(`forge_frontier:crushing/compressed_netherrack_${i}x`);
    }
});
