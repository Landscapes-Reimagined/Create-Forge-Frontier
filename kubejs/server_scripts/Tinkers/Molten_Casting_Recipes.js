ServerEvents.recipes(event => {
  const moltenCastingData = [
    {
      molten: 'forge_frontier:molten_redstone',
      block: 'minecraft:redstone_block',
      ingot: 'minecraft:redstone'
    },
    {
      molten: 'forge_frontier:molten_carbon',
      block: 'minecraft:coal_block',
      ingot: 'minecraft:coal'
    },
    {
      molten: 'forge_frontier:molten_lapis',
      block: 'minecraft:lapis_block',
      ingot: 'minecraft:lapis_lazuli'
    },
    {
      molten: 'forge_frontier:molten_bone_marrow',
      block: 'minecraft:bone_block',
      ingot: 'minecraft:bone'
    },
    {
      molten: 'forge_frontier:molten_ice_shard',
      ingot: 'ad_astra:ice_shard'
    },
    {
      molten: 'forge_frontier:molten_uranium',
      block: 'alexscaves:block_of_uranium',
      ingot: 'alexscaves:uranium',
      nugget: 'alexscaves:uranium_shard'
    },
    {
      molten: 'forge_frontier:molten_bismuth',
      block: 'enlightened_end:bismuth_block',
      ingot: 'enlightened_end:bismuth_ingot',
      nugget: 'enlightened_end:bismuth_nugget'
    },
    {
      molten: 'forge_frontier:molten_irradium',
      block: 'enlightened_end:irradium_block',
      ingot: 'enlightened_end:irradium_bar'
    },
    {
      molten: 'forge_frontier:molten_malachite',
      block: 'enlightened_end:malachite_block',
      ingot: 'enlightened_end:malachite'
    },
    {
      molten: 'forge_frontier:molten_guano',
      block: 'alexscaves:guano_block',
      ingot: 'alexscaves:guano'
    },
    {
      molten: 'forge_frontier:molten_scarlet_neodymium',
      block: 'alexscaves:block_of_scarlet_neodymium',
      ingot: 'alexscaves:scarlet_neodymium_ingot'
    },
    {
      molten: 'forge_frontier:molten_azure_neodymium',
      block: 'alexscaves:block_of_azure_neodymium',
      ingot: 'alexscaves:azure_neodymium_ingot'
    },
    {
      molten: 'forge_frontier:molten_pearl',
      block: 'alexscaves:block_of_pearl',
      ingot: 'alexscaves:pearl'
    },
    {
      molten: 'forge_frontier:molten_amber',
      ingot: 'alexscaves:amber'
    },
    {
      molten: 'forge_frontier:molten_sulfur',
      block: 'alexscaves:sulfur',
      ingot: 'alexscaves:sulfur_dust'
    },
    {
      molten: 'forge_frontier:molten_echo_shard',
      ingot: 'minecraft:echo_shard'
    },
    {
      molten: 'forge_frontier:molten_netherite_iron',
      block: 'advancednetherite:netherite_iron_block',
      ingot: 'advancednetherite:netherite_iron_ingot'
    },
    {
      molten: 'forge_frontier:molten_netherite_gold',
      block: 'advancednetherite:netherite_gold_block',
      ingot: 'advancednetherite:netherite_gold_ingot'
    },
    {
      molten: 'forge_frontier:molten_netherite_emerald',
      block: 'advancednetherite:netherite_emerald_block',
      ingot: 'advancednetherite:netherite_emerald_ingot'
    },
    {
      molten: 'forge_frontier:molten_netherite_diamond',
      block: 'advancednetherite:netherite_diamond_block',
      ingot: 'advancednetherite:netherite_diamond_ingot'
    }
  ];

  moltenCastingData.forEach(entry => {
    if (entry.block) {
      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: { name: entry.molten, amount: 1296 },
        result: { item: entry.block },
        cooling_time: 180
      }).id(`forge_frontier:casting/${entry.block.replace(':', '_')}_from_molten`);
    }

    if (entry.ingot) {
      // Sand Cast
      event.custom({
        type: 'tconstruct:casting_table',
        fluid: { name: entry.molten, amount: 144 },
        cast: { tag: 'tconstruct:casts/single_use/ingot' },
        cast_consumed: true,
        result: { item: entry.ingot },
        cooling_time: 57
      }).id(`forge_frontier:casting/${entry.ingot.replace(':', '_')}_from_molten_sand`);

      // Gold Cast
      event.custom({
        type: 'tconstruct:casting_table',
        fluid: { name: entry.molten, amount: 144 },
        cast: { item: 'tconstruct:ingot_cast' },
        result: { item: entry.ingot },
        cooling_time: 57
      }).id(`forge_frontier:casting/${entry.ingot.replace(':', '_')}_from_molten_gold`);
    }

    if (entry.nugget) {
      // Sand Cast
      event.custom({
        type: 'tconstruct:casting_table',
        fluid: { name: entry.molten, amount: 16 },
        cast: { tag: 'tconstruct:casts/single_use/nugget' },
        cast_consumed: true,
        result: { item: entry.nugget },
        cooling_time: 24
      }).id(`forge_frontier:casting/${entry.nugget.replace(':', '_')}_from_molten_sand`);

      // Gold Cast
      event.custom({
        type: 'tconstruct:casting_table',
        fluid: { name: entry.molten, amount: 16 },
        cast: { item: 'tconstruct:nugget_cast' },
        result: { item: entry.nugget },
        cooling_time: 24
      }).id(`forge_frontier:casting/${entry.nugget.replace(':', '_')}_from_molten_gold`);
    }
  });
});
