// BotanyPots_HopperUpgrades.js
// Shapeless upgrades: pot + Create chute = hopper pot (all tiers)

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

  function basePot(t)       { return 'botanypots:' + t + '_botany_pot'; }
  function elitePot(t)      { return 'botanypotstiers:elite_' + t + '_botany_pot'; }
  function ultraPot(t)      { return 'botanypotstiers:ultra_' + t + '_botany_pot'; }
  function creativePot(t)   { return 'botanypotstiers:creative_' + t + '_botany_pot'; }

  function baseHopper(t)    { return 'botanypots:' + t + '_hopper_botany_pot'; }
  function eliteHopper(t)   { return 'botanypotstiers:elite_' + t + '_hopper_botany_pot'; }
  function ultraHopper(t)   { return 'botanypotstiers:ultra_' + t + '_hopper_botany_pot'; }
  function creativeHopper(t){ return 'botanypotstiers:creative_' + t + '_hopper_botany_pot'; }

  function idHopper(scope, t) { return 'forge_frontier:shapeless/botanypots/' + scope + '/hopper/' + t; }

  for (var i = 0; i < TYPES.length; i++) {
    var t = TYPES[i];

    event.shapeless(baseHopper(t), [ basePot(t), 'create:chute' ])
      .id(idHopper('base', t));

    event.shapeless(eliteHopper(t), [ elitePot(t), 'create:chute' ])
      .id(idHopper('elite', t));

    event.shapeless(ultraHopper(t), [ ultraPot(t), 'create:chute' ])
      .id(idHopper('ultra', t));

    event.shapeless(creativeHopper(t), [ creativePot(t), 'create:chute' ])
      .id(idHopper('creative', t));
  }
});
