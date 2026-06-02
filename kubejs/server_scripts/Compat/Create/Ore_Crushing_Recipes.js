ServerEvents.recipes(event => {

  const ORES = [
    {
      type: 'emerald',
      output: { item: 'minecraft:emerald', count: 1 },
      bonus: { item: 'minecraft:emerald', chance: 0.75 },
      variants: [
        ['minecraft:emerald_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_emerald_ore', 'minecraft:cobbled_deepslate'],
        ["deeperdarker:sculk_stone_emerald_ore","deeperdarker:cobbled_sculk_stone"],
        ["deeperdarker:gloomslate_emerald_ore","deeperdarker:cobbled_gloomslate"],
        ["enhanced_ore_variety:granite_emerald_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_emerald_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_emerald_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_emerald_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_emerald_ore", "minecraft:blackstone"]
      ]
    },
    {
      type: 'coal',
      output: { item: 'minecraft:coal', count: 1 },
      bonus: { item: 'minecraft:coal', chance: 0.75 },
      variants: [
        ['minecraft:coal_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_coal_ore', 'minecraft:cobbled_deepslate'],
        ['deeperdarker:gloomslate_coal_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_coal_ore', 'deeperdarker:cobbled_sculk_stone'],
        ["phantasm:raw_purpur_coal_ore", "endelurgy:raw_purpur_block"],
        ['ad_astra:glacio_coal_ore', 'ad_astra:glacio_cobblestone'],
        ['ad_astra:venus_coal_ore', 'ad_astra:venus_cobblestone'],
        ["enhanced_ore_variety:granite_coal_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_coal_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_coal_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_coal_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_coal_ore", "minecraft:blackstone"]
      ]
    },
    {
      type: 'iron',
      output: { item: 'create:crushed_raw_iron', count: 1 },
      bonus: { item: 'create:crushed_raw_iron', chance: 0.75 },
      variants: [
        ['minecraft:iron_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_iron_ore', 'minecraft:cobbled_deepslate'],
        ['deeperdarker:gloomslate_iron_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_iron_ore', 'deeperdarker:cobbled_sculk_stone'],
        ['ad_astra:glacio_iron_ore', 'ad_astra:glacio_cobblestone'],
        ['ad_astra:mercury_iron_ore', 'ad_astra:mercury_cobblestone'],
        ['ad_astra:mars_iron_ore', 'ad_astra:mars_cobblestone'],
        ["enhanced_ore_variety:granite_iron_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_iron_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_iron_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_iron_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_iron_ore", "minecraft:blackstone"],
        ["phantasm:cirite_iron_ore", "phantasm:cirite"],
        ["ad_astra:moon_iron_ore", "ad_astra:moon_cobblestone"],
        ["alexscaves:galena_iron_ore", "alexscaves:galena"],
      ]
    },
    {
      type: 'lapis',
      output: { item: "minecraft:lapis_lazuli", count: 10 },
      bonus: { item: "minecraft:lapis_lazuli", chance: 0.75 },
      variants: [
        ['minecraft:lapis_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_lapis_ore', 'minecraft:cobbled_deepslate'],
        ['deeperdarker:gloomslate_lapis_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_lapis_ore', 'deeperdarker:cobbled_sculk_stone'],
        ['ad_astra:glacio_lapis_ore', 'ad_astra:glacio_cobblestone'],
        ["enhanced_ore_variety:granite_lapis_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_lapis_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_lapis_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_lapis_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_lapis_ore", "minecraft:blackstone"]
      ]
    },
    {
      type: 'copper',
      output: { item: 'create:crushed_raw_copper', count: 5 },
      bonus: { item: 'create:crushed_raw_copper', chance: 0.75 },
      variants: [
        ['minecraft:copper_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_copper_ore', 'minecraft:cobbled_deepslate'],
        ['deeperdarker:gloomslate_copper_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_copper_ore', 'deeperdarker:cobbled_sculk_stone'],
        ['ad_astra:glacio_copper_ore', 'ad_astra:glacio_cobblestone'],
        ["enhanced_ore_variety:granite_copper_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_copper_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_copper_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_copper_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_copper_ore", "minecraft:blackstone"],
      ]
    },
    {
      type: 'gold',
      output: { item: 'create:crushed_raw_gold', count: 1 },
      bonus: { item: 'create:crushed_raw_gold', chance: 0.75 },
      variants: [
        ['minecraft:gold_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_gold_ore', 'minecraft:cobbled_deepslate'],
        ['minecraft:nether_gold_ore', 'minecraft:netherrack'],
        ['deeperdarker:gloomslate_gold_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_gold_ore', 'deeperdarker:cobbled_sculk_stone'],
        ['ad_astra:venus_gold_ore', 'ad_astra:venus_cobblestone'],
        ["enhanced_ore_variety:granite_gold_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_gold_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_gold_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_gold_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_gold_ore", "minecraft:blackstone"],
      ]
    },
    {
      type: 'diamond',
      output: { item: 'minecraft:diamond', count: 1 },
      bonus: { item: 'minecraft:diamond', chance: 0.75 },
      variants: [
        ['minecraft:diamond_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_diamond_ore', 'minecraft:cobbled_deepslate'],
        ['deeperdarker:gloomslate_diamond_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_diamond_ore', 'deeperdarker:cobbled_sculk_stone'],
        ['ad_astra:venus_diamond_ore', 'ad_astra:venus_cobblestone'],
        ["ad_astra:mars_diamond_ore", 'ad_astra:mars_cobblestone'],
        ["enhanced_ore_variety:granite_diamond_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_diamond_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_diamond_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_diamond_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_diamond_ore", "minecraft:blackstone"],
      ]
    },
    {
      type: 'redstone',
      output: { item: 'minecraft:redstone', count: 6 },
      bonus: { item: 'minecraft:redstone', chance: 0.75 },
      variants: [
        ['minecraft:redstone_ore', 'minecraft:cobblestone'],
        ['minecraft:deepslate_redstone_ore', 'minecraft:cobbled_deepslate'],
        ['deeperdarker:gloomslate_redstone_ore', 'deeperdarker:cobbled_gloomslate'],
        ['deeperdarker:sculk_stone_redstone_ore', 'deeperdarker:cobbled_sculk_stone'],,
        ["enhanced_ore_variety:granite_redstone_ore", 'minecraft:granite'],
        ["enhanced_ore_variety:diorite_redstone_ore", 'minecraft:diorite'],
        ["enhanced_ore_variety:andesite_redstone_ore", 'minecraft:andesite'],
        ["enhanced_ore_variety:tuff_redstone_ore", "minecraft:tuff"],
        ["enhanced_ore_variety:blackstone_redstone_ore", "minecraft:blackstone"],
        ["alexscaves:guanostone_redstone_ore", "alexscaves:guanostone"]
      ]
    },
    {
      type: 'zinc',
      output: { item: 'create:crushed_raw_zinc', count: 1 },
      bonus: { item: 'create:crushed_raw_zinc', chance: 0.75 },
      variants: [
        ['create:zinc_ore', 'minecraft:cobblestone'],
        ['create:deepslate_zinc_ore', 'minecraft:cobbled_deepslate']
      ]
    },
    {
      type: 'tin',
      output: { item: 'create:crushed_raw_tin', count: 1 },
      bonus: { item: 'create:crushed_raw_tin', chance: 0.75 },
      variants: [
        ['create_dd:tin_ore', 'minecraft:cobblestone'],
        ['create_dd:deepslate_tin_ore', 'minecraft:cobbled_deepslate']
      ]
    },
    {
      type: 'reggarfonite',
      output: { item: 'create_better_motors:crushed_raw_reggarfonite', count: 1 },
      bonus: { item: 'create_better_motors:crushed_raw_reggarfonite', chance: 0.75 },
      variants: [
        ['create_better_motors:deepslate_reggarfonite_ore', 'minecraft:cobbled_deepslate']
      ]
    },
    {
      type: 'tungsten',
      output: { item: 'createmetallurgy:crushed_raw_tungsten', count: 1 },
      bonus: { item: 'createmetallurgy:crushed_raw_tungsten', chance: 0.75 },
      variants: [
        ["createmetallurgy:wolframite_ore", 'minecraft:netherrack'],
        ["endreborn:tungsten_ore", "minecraft:end_stone"]
      ]
    },
    {
      type: 'quartz',
      output: { item: "minecraft:quartz", count: 2 },
      bonus: { item: "minecraft:quartz", chance: 0.75 },
      variants: [
        ["minecraft:nether_quartz_ore", 'minecraft:netherrack'],
        ["enhanced_ore_variety:blackstone_quartz_ore", "minecraft:blackstone"]
      ]
    },
    {
      type: 'uranium',
      output: { item: "create:crushed_raw_uranium", count: 1 },
      bonus: { item: "create:crushed_raw_uranium", chance: 0.75 },
      variants: [
        ["alexscaves:radrock_uranium_ore", "alexscaves:radrock"]
      ]
    },
  ];

  function resultOf(result) {
    let output = {
      item: result.item,
      count: result.count || 1
    };

    if (result.chance !== undefined) {
      output.chance = result.chance;
    }

    return output;
  }

  ORES.forEach(ore => {
    ore.variants.forEach(variant => {
      const oreId = variant[0];
      const byproduct = variant[1];
      const recipeName = oreId.split(':')[1];

      event.remove({ id: `create:crushing/${recipeName}` });

      event.custom({
        type: 'create:crushing',
        ingredients: [
          { item: oreId }
        ],
        processingTime: 400,
        results: [
          resultOf(ore.output),
          resultOf(ore.bonus),
          { item: 'create:experience_nugget', chance: 0.75 },
          { item: byproduct, chance: 0.12 }
        ]
      }).id(`forge_frontier:crushing/${recipeName}`);
    });
  });

  event.custom({
    type: 'create:crushing',
    ingredients: [
      { item: 'regions_unexplored:raw_redstone_block' }
    ],
    processingTime: 400,
    results: [
      { item: 'minecraft:redstone', count: 4 }
    ]
  }).id('forge_frontier:crushing/raw_redstone_block');

});