// BotanyPots/BotanyPot_RecipeRemovals.js
ServerEvents.recipes(function (event) {
  // --- helpers ---
  function removeMany(prefix, list, suffix) {
    for (var i = 0; i < list.length; i++) {
      var t = list[i];
      event.remove({ id: prefix + t + suffix });
    }
  }

  // The type suffixes we need to support
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

  // --- Standard BotanyPots (vanilla mod) ---
  // remove base + compact hopper variants so we can replace with compacting
  removeMany('botanypots:botanypots/crafting/', TYPES, '_botany_pot');
  removeMany('botanypots:botanypots/crafting/', TYPES, '_compact_hopper_botany_pot');
  removeMany('botanypots:botanypots/crafting/', TYPES, '_hopper_botany_pot');

  // --- Tiers (botanypotstiers) ---
  var TIERS = ['elite', 'ultra', 'creative'];
  var SUFFIXES = [
    '_botany_pot',
    '_hopper_botany_pot',
    '_compact_hopper_botany_pot',
    '_botany_pot_2',                    // some packs use extra id variants
    '_compact_hopper_botany_pot_2',
    '_compact_hopper_botany_pot_3'
  ];

  for (var ti = 0; ti < TIERS.length; ti++) {
    var tier = TIERS[ti];
    for (var si = 0; si < SUFFIXES.length; si++) {
      var suf = SUFFIXES[si];
      for (var i = 0; i < TYPES.length; i++) {
        var t = TYPES[i];
        event.remove({ id: 'botanypotstiers:crafting/' + tier + '_' + t + suf });
      }
    }
  }
});
