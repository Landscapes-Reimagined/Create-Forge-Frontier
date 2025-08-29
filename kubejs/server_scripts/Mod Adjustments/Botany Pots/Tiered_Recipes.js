// BotanyPots_Tiered.js
// Tiered BotanyPots upgrades via compacting (Elite, Ultra, Creative)

ServerEvents.recipes(function (event) {
  var TYPES = [
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

  function basePot(type)     { return 'botanypots:' + type + '_botany_pot'; }
  function elitePot(type)    { return 'botanypotstiers:elite_' + type + '_botany_pot'; }
  function ultraPot(type)    { return 'botanypotstiers:ultra_' + type + '_botany_pot'; }
  function creativePot(type) { return 'botanypotstiers:creative_' + type + '_botany_pot'; }

  function idTier(scope, type) { return 'forge_frontier:compacting/botanypots/' + scope + '/' + type; }

  for (var i = 0; i < TYPES.length; i++) {
    var t = TYPES[i];

    // Elite: 1x Base + 2x Overcharged Iron + Chromatic Compound
    event.custom({
      type: 'create:compacting',
      ingredients: [
        { item: basePot(t) },
        { item: 'forge_frontier:overcharged_iron_block' },
        { item: 'forge_frontier:overcharged_iron_block' },
        { item: 'create_dd:chromatic_compound' }
      ],
      results: [{ item: elitePot(t) }]
    }).id(idTier('elite', t));

    // Ultra: 1x Elite + 2x Overcharged Diamond + Blaze Gold
    event.custom({
      type: 'create:compacting',
      ingredients: [
        { item: elitePot(t) },
        { item: 'forge_frontier:overcharged_diamond_block' },
        { item: 'forge_frontier:overcharged_diamond_block' },
        { item: 'create_dd:blaze_gold' }
      ],
      results: [{ item: ultraPot(t) }]
    }).id(idTier('ultra', t));

    // Creative: 1x Ultra + 2x Overcharged Netherite + Shadow Radiance
    event.custom({
      type: 'create:compacting',
      ingredients: [
        { item: ultraPot(t) },
        { item: 'forge_frontier:overcharged_netherite_block' },
        { item: 'forge_frontier:overcharged_netherite_block' },
        { item: 'createqol:shadow_radiance' }
      ],
      results: [{ item: creativePot(t) }]
    }).id(idTier('creative', t));
  }
});
