// BotanyPots_TieredHopper.js
// Tiered BotanyPots Hopper upgrades via Create Compacting (Elite, Ultra, Creative)

ServerEvents.recipes(event => {
  const TYPES = [
    'black_concrete','black_glazed_terracotta','black_terracotta',
    'blue_concrete','blue_glazed_terracotta','blue_terracotta',
    'brown_concrete','brown_glazed_terracotta','brown_terracotta',
    'cyan_concrete','cyan_glazed_terracotta','cyan_terracotta',
    'gray_concrete','gray_glazed_terracotta','gray_terracotta',
    'green_concrete','green_glazed_terracotta','green_terracotta',
    'light_blue_concrete','light_blue_glazed_terracotta','light_blue_terracotta',
    'light_gray_concrete','light_gray_glazed_terracotta','light_gray_terracotta',
    'lime_concrete','lime_glazed_terracotta','lime_terracotta',
    'magenta_concrete','magenta_glazed_terracotta','magenta_terracotta',
    'orange_concrete','orange_glazed_terracotta','orange_terracotta',
    'pink_concrete','pink_glazed_terracotta','pink_terracotta',
    'purple_concrete','purple_glazed_terracotta','purple_terracotta',
    'red_concrete','red_glazed_terracotta','red_terracotta',
    'terracotta',
    'white_concrete','white_glazed_terracotta','white_terracotta',
    'yellow_concrete','yellow_glazed_terracotta','yellow_terracotta'
  ];

  // Helpers
  const baseHopper     = t => `botanypots:${t}_hopper_botany_pot`;
  const eliteHopper    = t => `botanypotstiers:elite_${t}_hopper_botany_pot`;
  const ultraHopper    = t => `botanypotstiers:ultra_${t}_hopper_botany_pot`;
  const creativeHopper = t => `botanypotstiers:creative_${t}_hopper_botany_pot`;
  const idTier = (scope, t) => `forge_frontier:compacting/botanypots/${scope}/hopper/${t}`;

  for (const t of TYPES) {
    // Elite Hopper
    event.custom({
      type: 'create:compacting',
      ingredients: [
        { item: baseHopper(t) },
        { item: 'forge_frontier:overcharged_iron_block' },
        { item: 'forge_frontier:overcharged_iron_block' },
        { item: 'create_dd:chromatic_compound' }
      ],
      results: [{ item: eliteHopper(t) }]
    }).id(idTier('elite', t));

    // Ultra Hopper
    event.custom({
      type: 'create:compacting',
      ingredients: [
        { item: eliteHopper(t) },
        { item: 'forge_frontier:overcharged_diamond_block' },
        { item: 'forge_frontier:overcharged_diamond_block' },
        { item: 'create_dd:blaze_gold' }
      ],
      results: [{ item: ultraHopper(t) }]
    }).id(idTier('ultra', t));

    // Creative Hopper
    event.custom({
      type: 'create:compacting',
      ingredients: [
        { item: ultraHopper(t) },
        { item: 'forge_frontier:overcharged_netherite_block' },
        { item: 'forge_frontier:overcharged_netherite_block' },
        { item: 'createqol:shadow_radiance' }
      ],
      results: [{ item: creativeHopper(t) }]
    }).id(idTier('creative', t));
  }
});
