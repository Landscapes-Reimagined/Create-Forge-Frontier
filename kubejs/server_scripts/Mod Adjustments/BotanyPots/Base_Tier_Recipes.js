// BotanyPots_BaseTier.js
// Base tier BotanyPots compacting recipes (non-tiered)

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

  function basePot(type) { return 'botanypots:' + type + '_botany_pot'; }
  function idBase(type)  { return 'forge_frontier:compacting/botanypots/base/' + type; }

  for (var i = 0; i < TYPES.length; i++) {
    var t   = TYPES[i];
    var mat = 'minecraft:' + t; // e.g., "black_concrete" -> "minecraft:black_concrete"

    // Build ingredient list: existing inputs + 6x color-matched block
    var ings = [
      { item: 'create:andesite_alloy' },
      { item: 'create:andesite_alloy' },
      { item: 'minecraft:flower_pot' },
      { item: 'farmersdelight:rich_soil_farmland' },
      { fluid: 'minecraft:water', amount: 1000 }
    ];
    for (var k = 0; k < 6; k++) {
      ings.push({ item: mat });
    }

    event.custom({
      type: 'create:compacting',
      ingredients: ings,
      results: [{ item: basePot(t) }]
    }).id(idBase(t));
  }
});
