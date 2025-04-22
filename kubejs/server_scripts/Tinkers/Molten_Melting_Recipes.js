ServerEvents.recipes(event => {
  const meltingData = [
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
    ["forge_frontier:molten_netherite_diamond", 90, ["advancednetherite:netherite_diamond_ingot"]]
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