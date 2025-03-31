ServerEvents.recipes(event => { 
    // Recipe Removals
    const recipesToRemove = [
        'create:crushing/asurine', 
        'create:crushing/crimsite', 
        'create:crushing/ochrum', 
        'create_dd:crushing/scorchia', 
        'create:crushing/veridium', 
        'create_dd:crushing/potassic',
        'create:crushing/asurine_recycling', 
        'create:crushing/crimsite_recycling', 
        'create:crushing/ochrum_recycling', 
        'create_dd:crushing/scorchia_recycling', 
        'create:crushing/veridium_recycling', 
        'create_dd:crushing/potassic_recycling'
    ];
    
    recipesToRemove.forEach(id => {
        event.remove({ id: id });
    });

   // Resource Stone Recipes
    const stones = [
        { name: 'asurine', input: 'create:asurine', output: 'create:crushed_raw_zinc', additional: 'create:zinc_nugget' },
        { name: 'crimsite', input: 'create:crimsite', output: 'create:crushed_raw_iron', additional: 'minecraft:iron_nugget' },
        { name: 'ochrum', input: 'create:ochrum', output: 'create:crushed_raw_gold', additional: 'minecraft:gold_nugget' },
        { name: 'scoria', input: 'create:scoria', output: 'minecraft:lapis_lazuli' },
        { name: 'scorchia', input: 'create:scorchia', output: 'minecraft:coal', additional: 'create:cinder_flour' },
        { name: 'veridium', input: 'create:veridium', output: 'create:crushed_raw_copper', additional: 'create:copper_nugget' },
        { name: 'potassic', input: 'create_dd:potassic', output: 'create:crushed_raw_tin', additional: 'create_dd:tin_nugget' },
        { name: 'verdantine', input: 'forge_frontier:verdantine', output: 'forge_frontier:crushed_verdantine' },
        { name: 'glacium', input: 'forge_frontier:glacium', output: 'forge_frontier:crushed_glacium', additional: 'create_dd:diamond_shard' },
        { name: 'aubrum', input: 'forge_frontier:aubrum', output: 'forge_frontier:crushed_aubrum', rare: true },
        { name: 'pyroclast', input: 'forge_frontier:pyroclast', output: 'forge_frontier:crushed_pyroclast', rare: true },
        { name: 'stellaris', input: 'forge_frontier:stellaris', output: 'forge_frontier:crushed_stellaris', rare: true },
        { name: 'radiantite', input: 'forge_frontier:radiantite', output: 'forge_frontier:crushed_radiantite', rare: true  },
        { name: 'pearlyte', input: 'forge_frontier:pearlyte', output: 'forge_frontier:crushed_pearlyte', rare: true  },
        { name: 'frostite', input: 'forge_frontier:frostite', output: 'forge_frontier:crushed_frostite', rare: true  },
        { name: 'guanite', input: 'forge_frontier:guanite', output: 'forge_frontier:crushed_guanite', rare: true  },
        { name: 'amberlite', input: 'forge_frontier:amberlite', output: 'forge_frontier:crushed_amberlite', rare: true  },
        { name: 'sulphite', input: 'forge_frontier:sulphite', output: 'forge_frontier:crushed_sulphite', additional: 'tfmg:sulfur_dust', rare: true  },
        { name: 'neodymrium', input: 'forge_frontier:neodymrium', output: 'forge_frontier:crushed_neodymrium', additional: 'alexscaves:raw_scarlet_neodymium', rare: true  },
        { name: 'azurnium', input: 'forge_frontier:azurnium', output: 'forge_frontier:crushed_azurnium', additional: 'alexscaves:raw_azure_neodymium', rare: true  },
        { name: 'uraniumnite', input: 'forge_frontier:uraniumnite', output: 'forge_frontier:crushed_uraniumnite', additional: 'alexscaves:uranium_shard', rare: true  },
        { name: 'palerock', input: 'enlightened_end:palerock', output: 'forge_frontier:crushed_palerock', additional: 'enlightened_end:bismuth_nugget' },
        { name: 'resonite', input: 'forge_frontier:resonite', output: 'forge_frontier:crushed_resonite', rare: true  },
        { name: 'void_shale', input: 'enlightened_end:void_shale', output: 'forge_frontier:crushed_shale' }
    ];

    // Loop through materials and create the crushing recipes
    stones.forEach(stone => {
        let results;

        if (stone.rare) {
            // Special handling for aubrum, pyroclast, stellaris
            results = [
                { item: stone.output, count: 1}
            ];
        } else {
            results = [
                { item: stone.output, count: 1 },
                { item: stone.output, count: 1, chance: 0.50 }
            ];
            if (stone.additional) {
                results.push({ item: stone.additional, count: 1 });
            }
        }

        // Crushing Recipes
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: stone.input }],
            processingTime: 250,
            results: results
        }).id(`forge_frontier:crushing/${stone.name}`);

        // Recycling Recipe
        event.custom({
            type: "create:crushing",
            ingredients: [{ tag: `create:stone_types/${stone.name}` }],
            processingTime: 250,
            results: results
        }).id(`forge_frontier:recycling/${stone.name}`);
    });
})