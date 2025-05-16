ServerEvents.recipes(event => {

  const chargingRecipes = [
    {
      input: 'minecraft:iron_ingot',
      result: 'create_new_age:overcharged_iron',
      energy: 1000,
      rate: 50,
      id: 'overcharged_iron'
    },
    {
        input: 'minecraft:gold_ingot',
        result: 'create_new_age:overcharged_gold',
        energy: 2000,
        rate: 100,
        id: 'overcharged_gold'
    },
    {
        input: 'minecraft:diamond',
        result: 'create_new_age:overcharged_diamond',
        energy: 10000,
        rate: 500,
        id: 'overcharged_diamond'
    },
    {
        input: 'minecraft:netherite_ingot',
        result: 'forge_frontier:overcharged_netherite_ingot',
        energy: 50000,
        rate: 2500,
        id: 'overcharged_netherite'
    },
    {
        input: 'create:iron_sheet',
        result: 'create_new_age:overcharged_iron_sheet',
        energy: 1000,
        rate: 50,
        id: 'overcharged_iron_sheet_1'
    },
    {
        input: 'ad_astra:iron_plate',
        result: 'create_new_age:overcharged_iron_sheet',
        energy: 1000,
        rate: 50,
        id: 'overcharged_iron_sheet_2'
    },
    {
        input: 'create:golden_sheet',
        result: 'create_new_age:overcharged_golden_sheet',
        energy: 2000,
        rate: 100,
        id: 'overcharged_golden_sheet'
    },
    {
        input: 'minecraft:glass_bottle',
        result: 'minecraft:experience_bottle',
        energy: 50000,
        rate: 2500,
        id: 'experience_bottle'
    },
    {
        input: 'createcompression:compressed_stone_2x',
        result: 'create_new_age:magnetite_block',
        energy: 1000,
        rate: 50,
        id: 'magnetite_block'
    },
    {
        input: 'minecraft:iron_block',
        result: 'forge_frontier:overcharged_iron_block',
        energy: 9000,
        rate: 450,
        id: 'overcharged_iron_block'
    },
    {
        input: 'minecraft:gold_block',
        result: 'forge_frontier:overcharged_gold_block',
        energy: 18000,
        rate: 900,
        id: 'overcharged_gold_block'
    },
    {
        input: 'minecraft:diamond_block',
        result: 'forge_frontier:overcharged_diamond_block',
        energy: 90000,
        rate: 4500,
        id: 'overcharged_diamond_block'
    },
    {
        input: 'minecraft:netherite_block',
        result: 'forge_frontier:overcharged_netherite_block',
        energy: 450000,
        rate: 22500,
        id: 'overcharged_netherite_block'
    }
  ];

  chargingRecipes.forEach(recipe => {
    event.custom({
      type: "createaddition:charging",
      input: { item: recipe.input, count: 1 },
      result: { item: recipe.result, count: 1 },
      energy: recipe.energy,
      maxChargeRate: recipe.rate
    }).id(`forge_frontier:charging/${recipe.id}`);
  });

});
