ServerEvents.recipes(event => 
    {
        // Crushed Ore to Dirty Dust Recipes
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

            event.custom({
                type: "create:crushing",
                ingredients: [{ item: input }],
                processingTime: 250,
                results: [
                    { item: resultItem, count: 1 },
                    { item: resultItem, chance: 0.25 }
                ]
            }).id(`forge_frontier:crushing/crushed_${material}_to_dirty_dust`);
        });

        // Crushed Reggarfonite
            event.custom({
                    type: "create:crushing",
                    ingredients: [{ item: 'create_better_motors:crushed_raw_reggarfonite' }],
                    processingTime: 250,
                    results: [
                        { item: 'forge_frontier:dirty_reggarfonite_dust', count: 1 },
                        { item: 'forge_frontier:dirty_reggarfonite_dust', chance: 0.25 }
                    ]
                }).id(`forge_frontier:crushing/crushed_reggarfonite_to_dirty_dust`)

        // Crushed Tin
            event.custom({
                    type: "create:crushing",
                    ingredients: [{ item: 'create:crushed_raw_tin' }],
                    processingTime: 250,
                    results: [
                        { item: 'forge_frontier:dirty_tin_dust', count: 1 },
                        { item: 'forge_frontier:dirty_tin_dust', chance: 0.25 }
                    ]
                }).id(`forge_frontier:crushing/crushed_tin_to_dirty_dust`)        
    }
)