ServerEvents.recipes(event => {
    // Standard Crushed Ore → Dirty Dust
    const materials = [
        'bismuth',
        'calorite',
        'desh',
        'irradium',
        'malachite',
        'ostrum',
        'verdantine',
        'glacium',
        'debris',
        'resonite',
        'aubrum',
        'pyroclast',
        'frostite',
        'stellaris',
        'radiantite',
        'shale',
        'palerock',
        'guanite',
        'pearlyte',
        'amberlite',
        'azurnium',
        'neodymrium',
        'uraniumnite',
        'sulphite'
    ];

    materials.forEach(material => {
        const input = `forge_frontier:crushed_${material}`;
        const resultItem = `forge_frontier:dirty_${material}_dust`;

        if (!Ingredient.of(input).stacks.empty && !Ingredient.of(resultItem).stacks.empty) {
            event.custom({
                type: "create:crushing",
                ingredients: [{ item: input }],
                processingTime: 250,
                results: [
                    { item: resultItem, count: 1 },
                    { item: resultItem, chance: 0.25 }
                ]
            }).id(`forge_frontier:crushing/crushed_${material}_to_dirty_dust`);
        }
    });

    // Special Piles → 9 Dirty Dust
    const piles = [
        { name: 'verdantine', input: 'forge_frontier:crushed_verdantine_pile' },
        { name: 'glacium', input: 'forge_frontier:crushed_glacium_pile' },
        { name: 'aubrum', input: 'forge_frontier:crushed_aubrum_pile' },
        { name: 'pyroclast', input: 'forge_frontier:crushed_pyroclast_pile' },
        { name: 'stellaris', input: 'forge_frontier:crushed_stellaris_pile' },
        { name: 'guanite', input: 'forge_frontier:crushed_guanite_pile' },
        { name: 'pearlyte', input: 'forge_frontier:crushed_pearlyte_pile' },
        { name: 'azurnium', input: 'forge_frontier:crushed_azurnium_pile' },
        { name: 'neodymrium', input: 'forge_frontier:crushed_neodymrium_pile' },
        { name: 'uraniumnite', input: 'forge_frontier:crushed_uraniumnite_pile' },
        { name: 'sulphite', input: 'forge_frontier:crushed_sulphite_pile' },
        { name: 'debris', input: 'forge_frontier:crushed_debris_pile' },
        { name: 'resonite', input: 'forge_frontier:crushed_resonite_pile' },
        { name: 'frostite', input: 'forge_frontier:crushed_frostite_pile' },

        // Expanded compressed piles
        { name: 'calorite', input: 'forge_frontier:crushed_calorite_pile' },
        { name: 'desh', input: 'forge_frontier:crushed_desh_pile' },
        { name: 'ostrum', input: 'forge_frontier:crushed_ostrum_pile' },
        { name: 'amberlite', input: 'forge_frontier:crushed_amberlite_pile' },
        { name: 'tin', input: 'create_compressed:crushed_tin_pile' },
        { name: 'gold', input: 'create_compressed:crushed_gold_pile', resultItem: 'createmetallurgy:dirty_gold_dust' },
        { name: 'iron', input: 'create_compressed:crushed_iron_pile', resultItem: 'createmetallurgy:dirty_iron_dust' },
        { name: 'copper', input: 'create_compressed:crushed_copper_pile', resultItem: 'createmetallurgy:dirty_copper_dust' },
        { name: 'zinc', input: 'create_compressed:crushed_zinc_pile', resultItem: 'createmetallurgy:dirty_zinc_dust' }
    ];

    piles.forEach(entry => {
        // Default result unless overridden
        const resultItem = entry.resultItem || `forge_frontier:dirty_${entry.name}_dust`;

        if (!Ingredient.of(entry.input).stacks.empty && !Ingredient.of(resultItem).stacks.empty) {
            event.custom({
                type: "create:crushing",
                ingredients: [{ item: entry.input }],
                processingTime: 250,
                results: [
                    { item: resultItem, count: 9 }
                ]
            }).id(`forge_frontier:crushing/${entry.name}_pile_to_dirty_dust`);
        }
    });

    // Crushed Reggarfonite
    if (!Ingredient.of('create_better_motors:crushed_raw_reggarfonite').stacks.empty) {
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: 'create_better_motors:crushed_raw_reggarfonite' }],
            processingTime: 250,
            results: [
                { item: 'forge_frontier:dirty_reggarfonite_dust', count: 1 },
                { item: 'forge_frontier:dirty_reggarfonite_dust', chance: 0.25 }
            ]
        }).id(`forge_frontier:crushing/crushed_reggarfonite_to_dirty_dust`);
    }

    // Crushed Tin
    if (!Ingredient.of('create:crushed_raw_tin').stacks.empty) {
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: 'create:crushed_raw_tin' }],
            processingTime: 250,
            results: [
                { item: 'forge_frontier:dirty_tin_dust', count: 1 },
                { item: 'forge_frontier:dirty_tin_dust', chance: 0.25 }
            ]
        }).id(`forge_frontier:crushing/crushed_tin_to_dirty_dust`);
    }
});
