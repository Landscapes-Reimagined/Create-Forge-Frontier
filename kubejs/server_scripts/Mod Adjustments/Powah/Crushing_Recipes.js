ServerEvents.recipes(event => {
    const ores = [
        { name: "uraninite_ore_poor", count: 1 },
        { name: "uraninite_ore", count: 2 },
        { name: "uraninite_ore_dense", count: 4 }
    ];

    ores.forEach(ore => {
        // Stone variant
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: `powah:${ore.name}` }],
            processingTime: 250,
            results: [
                { item: "powah:uraninite_raw", count: ore.count },
                { item: "powah:uraninite_raw", chance: 0.25 },
                { item: "minecraft:cobblestone", count: 1 },
                { item: "create:experience_nugget", chance: 0.75 }
            ]
        }).id(`forge_frontier:crushing/${ore.name}_to_raw_uraninite`);

        // Deepslate variant
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: `powah:deepslate_${ore.name}` }],
            processingTime: 250,
            results: [
                { item: "powah:uraninite_raw", count: ore.count },
                { item: "powah:uraninite_raw", chance: 0.25 },
                { item: "minecraft:cobbled_deepslate", count: 1 },
                { item: "create:experience_nugget", chance: 0.75 }
            ]
        }).id(`forge_frontier:crushing/deepslate_${ore.name}_to_raw_uraninite`);
    });
});
