ServerEvents.recipes(event => {

  const CRUSHING_RECIPES = [

    // Sandstone
    {
      input: { item: 'minecraft:chiseled_sandstone' },
      outputs: [
        { item: 'minecraft:sand', count: 3 },
        { item: 'minecraft:sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'chisled_sandstone'
    },

    {
      input: { item: 'minecraft:smooth_sandstone' },
      outputs: [
        { item: 'minecraft:sand', count: 3 },
        { item: 'minecraft:sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'smooth_sandstone'
    },

    {
      input: { item: 'minecraft:cut_sandstone' },
      outputs: [
        { item: 'minecraft:sand', count: 3 },
        { item: 'minecraft:sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'cut_sandstone'
    },

    {
      input: { item: 'quark:sandstone_bricks' },
      outputs: [
        { item: 'minecraft:sand', count: 3 },
        { item: 'minecraft:sand', chance: 0.70 }
      ],
      processingTime: 250,
      id: 'sandstone_bricks'
    },

    {
      input: { tag: 'chipped:sandstone' },
      outputs: [
        { item: 'minecraft:sand', count: 3 },
        { item: 'minecraft:sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'chipped_sandstone'
    },

    // Red Sandstone
    {
      input: { item: 'minecraft:chiseled_red_sandstone' },
      outputs: [
        { item: 'minecraft:red_sand', count: 3 },
        { item: 'minecraft:red_sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'red_chisled_sandstone'
    },

    {
      input: { item: 'minecraft:smooth_red_sandstone' },
      outputs: [
        { item: 'minecraft:red_sand', count: 3 },
        { item: 'minecraft:red_sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'smooth_red_sandstone'
    },

    {
      input: { item: 'minecraft:cut_red_sandstone' },
      outputs: [
        { item: 'minecraft:red_sand', count: 3 },
        { item: 'minecraft:red_sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'cut_red_sandstone'
    },

    {
      input: { item: 'quark:red_sandstone_bricks' },
      outputs: [
        { item: 'minecraft:red_sand', count: 3 },
        { item: 'minecraft:red_sand', chance: 0.70 }
      ],
      processingTime: 250,
      id: 'red_sandstone_bricks'
    },

    {
      input: { tag: 'chipped:red_sandstone' },
      outputs: [
        { item: 'minecraft:red_sand', count: 3 },
        { item: 'minecraft:red_sand', chance: 0.80 }
      ],
      processingTime: 250,
      id: 'chipped_red_sandstone'
    },

    {
        input: { item: "ad_astra:glacio_stone" },
        output: [
            { item: "ad_astra:glacio_cobblestone", count: 1}
        ],
        processingTime: 250,
        id: 'glacio_cobblestone'
    },

    {
        input: { item: "ad_astra:mars_stone" },
        output: [
            { item: "ad_astra:mars_cobblestone", count: 1}
        ],
        processingTime: 250,
        id: 'mars_cobblestone'
    },

    {
        input: { item: "ad_astra:mercury_stone" },
        output: [
            { item: "ad_astra:mercury_cobblestone", count: 1}
        ],
        processingTime: 250,
        id: 'mercury_cobblestone'
    },

    {
        input: { item: "ad_astra:moon_stone" },
        output: [
            { item: "ad_astra:moon_cobblestone", count: 1}
        ],
        processingTime: 250,
        id: 'moon_cobblestone'
    },

    {
        input: { item: "ad_astra:venus_stone" },
        output: [
            { item: "ad_astra:venus_cobblestone", count: 1}
        ],
        processingTime: 250,
        id: 'venus_cobblestone'
    },

    {
        input: { item: "deeperdarker:gloomslate" },
        output: [
            { item: "deeperdarker:cobbled_gloomslate", count: 1}
        ],
        processingTime: 250,
        id: 'cobbled_gloomslate'
    },

    {
        input: { item: "deeperdarker:sculk_stone" },
        output: [
            { item: "deeperdarker:cobbled_sculk_stone", count: 1}
        ],
        processingTime: 250,
        id: 'cobbled_sculk_stone'
    },

    {
        input: { item: "minecraft:deepslate" },
        output: [
            { item: "minecraft:cobbled_deepslate", count: 1}
        ],
        processingTime: 250,
        id: 'cobbled_deepslate'
    },

    {
        input: { item: "minecraft:stone" },
        output: [
            { item: "minecraft:cobblestone", count: 1}
        ],
        processingTime: 250,
        id: 'cobblestone'
    }

  ];

  CRUSHING_RECIPES.forEach(recipe => 
    {
        const outputs = recipe.outputs || recipe.output;

        event.custom({
            type: 'create:crushing',
            ingredients: [
            recipe.input
            ],
            results: outputs.map(output => 
                {
                    let result = {
                        item: output.item,
                        count: output.count || 1
                    };

                    if (output.chance !== undefined) {
                        result.chance = output.chance;
                    }

                    return result;
            }),
            processingTime: recipe.processingTime || 250
        }).id(`forge_frontier:crushing/${recipe.id}`);
    });

});