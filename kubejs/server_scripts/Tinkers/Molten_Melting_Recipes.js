ServerEvents.recipes(event => {
  const meltingData = [
    // General Processing
    ["forge_frontier:molten_redstone", 810, ["minecraft:redstone_block"]],
    ["forge_frontier:molten_redstone", 90, ["minecraft:redstone"]],
    ["forge_frontier:molten_redstone", 540, ["#forge:ores/redstone"]],
    
    ["forge_frontier:molten_carbon", 810, ["minecraft:coal_block", "quark:charcoal_block"]],
    ["forge_frontier:molten_carbon", 90, ["minecraft:coal", "minecraft:charcoal"]],
    ["forge_frontier:molten_carbon", 180, ["#forge:ores/coal"]],
    
    ["forge_frontier:molten_lapis", 810, ["minecraft:lapis_block"]],
    ["forge_frontier:molten_lapis", 90, ["minecraft:lapis_lazuli"]],
    ["forge_frontier:molten_lapis", 540, ["#forge:ores/lapis"]],
    
    ["forge_frontier:molten_bone_marrow", 810, ["minecraft:bone_block"]],
    ["forge_frontier:molten_bone_marrow", 90, ["minecraft:bone"]],
    ["forge_frontier:molten_bone_marrow", 10, ["minecraft:bone_meal"]],
    
    ["forge_frontier:molten_ice_shard", 90, ["ad_astra:ice_shard"]],
    ["forge_frontier:molten_ice_shard", 180, ["#c:ice_shard_ores"]],
    
    ["forge_frontier:molten_uranium", 810, ["alexscaves:block_of_uranium"]],
    ["forge_frontier:molten_uranium", 90, ["alexscaves:uranium"]],
    ["forge_frontier:molten_uranium", 180, ["alexscaves:radrock_uranium_ore"]],
    ["forge_frontier:molten_uranium", 10, ["alexscaves:uranium_shard"]],
    
    ["forge_frontier:molten_bismuth", 810, ["enlightened_end:bismuth_block", "enlightened_end:raw_bismuth_block"]],
    ["forge_frontier:molten_bismuth", 90, ["enlightened_end:bismuth_ingot", "enlightened_end:raw_bismuth"]],
    ["forge_frontier:molten_bismuth", 180, ["enlightened_end:bismuth_ore"]],
    ["forge_frontier:molten_bismuth", 10, ["enlightened_end:bismuth_nugget"]],
    
    ["forge_frontier:molten_irradium", 810, ["enlightened_end:irradium_block", "enlightened_end:raw_irradium_block"]],
    ["forge_frontier:molten_irradium", 90, ["enlightened_end:irradium_bar", "enlightened_end:raw_irradium"]],
    ["forge_frontier:molten_irradium", 180, ["enlightened_end:irradium_ore"]],
    
    ["forge_frontier:molten_malachite", 810, ["enlightened_end:malachite_block"]],
    ["forge_frontier:molten_malachite", 90, ["enlightened_end:malachite"]],
    
    ["forge_frontier:molten_guano", 810, ["alexscaves:guano_block"]],
    ["forge_frontier:molten_guano", 90, ["alexscaves:guano"]],
    
    ["forge_frontier:molten_scarlet_neodymium", 810, ["alexscaves:block_of_scarlet_neodymium"]],
    ["forge_frontier:molten_scarlet_neodymium", 90, ["alexscaves:scarlet_neodymium_ingot", "alexscaves:raw_scarlet_neodymium"]],
    ["forge_frontier:molten_scarlet_neodymium", 180, ["alexscaves:scarlet_neodymium_pillar"]],
    ["forge_frontier:molten_scarlet_neodymium", 540, ["alexscaves:scarlet_neodymium_node"]],
    
    ["forge_frontier:molten_azure_neodymium", 810, ["alexscaves:block_of_azure_neodymium"]],
    ["forge_frontier:molten_azure_neodymium", 90, ["alexscaves:azure_neodymium_ingot", "alexscaves:raw_azure_neodymium"]],
    ["forge_frontier:molten_azure_neodymium", 180, ["alexscaves:azure_neodymium_pillar"]],
    ["forge_frontier:molten_azure_neodymium", 540, ["alexscaves:azure_neodymium_node"]],
    
    ["forge_frontier:molten_pearl", 810, ["alexscaves:block_of_pearl"]],
    ["forge_frontier:molten_pearl", 90, ["alexscaves:pearl"]],
    
    ["forge_frontier:molten_amber", 90, ["alexscaves:amber"]],
    
    ["forge_frontier:molten_sulfur", 810, ["alexscaves:sulfur"]],
    ["forge_frontier:molten_sulfur", 90, ["alexscaves:sulfur_dust"]],
    ["forge_frontier:molten_sulfur", 540, ["alexscaves:sulfur_cluster"]],
    ["forge_frontier:molten_sulfur", 180, ["alexscaves:sulfur_bud_small", "alexscaves:sulfur_bud_medium", "alexscaves:sulfur_bud_large"]],
    
    ["forge_frontier:molten_echo_shard", 90, ["minecraft:echo_shard"]],
    
    ["forge_frontier:molten_netherite_iron", 810, ["advancednetherite:netherite_iron_block"]],
    ["forge_frontier:molten_netherite_iron", 90, ["advancednetherite:netherite_iron_ingot"]],
    
    ["forge_frontier:molten_netherite_gold", 810, ["advancednetherite:netherite_gold_block"]],
    ["forge_frontier:molten_netherite_gold", 90, ["advancednetherite:netherite_gold_ingot"]],
    
    ["forge_frontier:molten_netherite_emerald", 810, ["advancednetherite:netherite_emerald_block"]],
    ["forge_frontier:molten_netherite_emerald", 90, ["advancednetherite:netherite_emerald_ingot"]],
    
    ["forge_frontier:molten_netherite_diamond", 810, ["advancednetherite:netherite_diamond_block"]],
    ["forge_frontier:molten_netherite_diamond", 90, ["advancednetherite:netherite_diamond_ingot"]],

    // Crushed Ore
    ["tconstruct:molten_iron", 225, ["create:crushed_raw_iron"]],
    ["tconstruct:molten_gold", 225, ["create:crushed_raw_gold"]],
    ["tconstruct:molten_copper", 225, ["create:crushed_raw_copper"]],
    ["tconstruct:molten_zinc", 225, ["create:crushed_raw_zinc"]],
    ["tconstruct:molten_lead", 225, ["create:crushed_raw_lead"]],
    ["forge_frontier:molten_uranium", 225, ["create:crushed_raw_uranium"]],
    ["forge_frontier:molten_bismuth", 225, ["forge_frontier:crushed_bismuth"]],
    ["tcintegrations:molten_calorite", 225, ["forge_frontier:crushed_calorite"]],
    ["tcintegrations:molten_desh", 225, ["forge_frontier:crushed_desh"]],
    ["forge_frontier:molten_irradium", 225, ["forge_frontier:crushed_irradium"]],
    ["forge_frontier:molten_malachite", 225, ["forge_frontier:crushed_malachite"]],
    ["tcintegrations:molten_ostrum", 225, ["forge_frontier:crushed_ostrum"]],
    ["tconstruct:molten_debris", 225, ["forge_frontier:crushed_debris"]],
    ["forge_frontier:molten_malachite", 225, ["forge_frontier:crushed_shale"]],
    ["forge_frontier:molten_bismuth", 225, ["forge_frontier:crushed_palerock"]],
    ["tconstruct:molten_emerald", 225, ["forge_frontier:crushed_verdantine"]],
    ["tconstruct:molten_diamond", 225, ["forge_frontier:crushed_glacium"]],
    ["forge_frontier:molten_echo_shard", 225, ["forge_frontier:crushed_resonite"]],
    ["tcintegrations:molten_desh", 225, ["forge_frontier:crushed_aubrum"]],
    ["tcintegrations:molten_calorite", 225, ["forge_frontier:crushed_pyroclast"]],
    ["forge_frontier:molten_ice_shard", 225, ["forge_frontier:crushed_frostite"]],
    ["tcintegrations:molten_ostrum", 225, ["forge_frontier:crushed_stellaris"]],
    ["forge_frontier:molten_irradium", 225, ["forge_frontier:crushed_radiantite"]],
    ["forge_frontier:molten_guano", 225, ["forge_frontier:crushed_guanite"]],
    ["forge_frontier:molten_pearl", 225, ["forge_frontier:crushed_pearlyte"]],
    ["forge_frontier:molten_amber", 225, ["forge_frontier:crushed_amberlite"]],
    ["forge_frontier:molten_azure_neodymium", 225, ["forge_frontier:crushed_azurnium"]],
    ["forge_frontier:molten_scarlet_neodymium", 225, ["forge_frontier:crushed_neodymrium"]],
    ["forge_frontier:molten_uranium", 225, ["forge_frontier:crushed_uraniumnite"]],
    ["forge_frontier:molten_sulfur", 225, ["forge_frontier:crushed_sulphite"]],

    // Ore Stones
    ["tconstruct:molten_iron", 180, ["#create:stone_types/crimsite"]],
    ["tconstruct:molten_gold", 180, ["#create:stone_types/ochrum"]],
    ["tconstruct:molten_copper", 180, ["#create:stone_types/veridium"]],
    ["tconstruct:molten_zinc", 180, ["#create:stone_types/asurine"]],
    ["forge_frontier:molten_lapis", 180, ["#create:stone_types/scoria"]],
    ["forge_frontier:molten_carbon", 180, ["#create:stone_types/scorchia"]],
    ["forge_frontier:molten_malachite", 180, ["enlightened_end:void_shale"]],
    ["forge_frontier:molten_bismuth", 180, ["enlightened_end:palerock"]],
    ["tconstruct:molten_emerald", 180, ["forge_frontier:verdantine"]],
    ["tconstruct:molten_diamond", 180, ["forge_frontier:glacium"]],
    ["forge_frontier:molten_echo_shard", 180, ["forge_frontier:resonite"]],
    ["tcintegrations:molten_desh", 180, ["forge_frontier:aubrum"]],
    ["tcintegrations:molten_calorite", 180, ["forge_frontier:pyroclast"]],
    ["forge_frontier:molten_ice_shard", 180, ["forge_frontier:frostite"]],
    ["tcintegrations:molten_ostrum", 180, ["forge_frontier:stellaris"]],
    ["forge_frontier:molten_irradium", 180, ["forge_frontier:radiantite"]],
    ["forge_frontier:molten_guano", 180, ["forge_frontier:guanite"]],
    ["forge_frontier:molten_pearl", 180, ["forge_frontier:pearlyte"]],
    ["forge_frontier:molten_amber", 180, ["forge_frontier:amberlite"]],
    ["forge_frontier:molten_azure_neodymium", 180, ["forge_frontier:azurnium"]],
    ["forge_frontier:molten_scarlet_neodymium", 180, ["forge_frontier:neodymrium"]],
    ["forge_frontier:molten_uranium", 180, ["forge_frontier:uraniumnite"]],
    ["forge_frontier:molten_sulfur", 180, ["forge_frontier:sulphite"]]
  ];

  meltingData.forEach(([fluid, amount, ingredients], i) => {
    ingredients.forEach((ingredient, j) => {
      const isTag = ingredient.startsWith('#');
      event.custom({
        type: 'tconstruct:melting',
        ingredient: isTag ? { tag: ingredient.substring(1) } : { item: ingredient },
        result: { fluid: fluid, amount: amount },
        temperature: 500,
        time: 57
      }).id(`forge_frontier:melting/${fluid.split(':')[1]}_${i}_${j}`);
    });
  });
});