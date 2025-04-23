ServerEvents.recipes(event => {
    // Removal of Old Gold Cast Recipes
        const goldCastTypes = [
          'ingots', 'nuggets', 'gems', 'rods', 'plates', 'wires',
          'repair_kit', 'pick_head', 'small_axe_head', 'small_blade',
          'adze_head', 'hammer_head', 'broad_axe_head', 'broad_blade',
          'large_plate', 'tool_handle', 'tool_binding', 'tough_handle',
          'tough_binding', 'bow_limb', 'bow_grip', 'helmet_plating',
          'chestplate_plating', 'leggings_plating', 'boots_plating', 'maille'
        ];
      
        for (const type of goldCastTypes) {
          event.remove({ id: `tconstruct:smeltery/casts/gold/${type}` });
        };
      

    // New Gold Cast Recipes
    const castVariants = [
      { cast: 'tconstruct:casts/single_use/adze_head' },
      { cast: 'tconstruct:casts/single_use/boots_plating' },
      { cast: 'tconstruct:casts/single_use/bow_grip' },
      { cast: 'tconstruct:casts/single_use/bow_limb' },
      { cast: 'tconstruct:casts/single_use/broad_axe_head' },
      { cast: 'tconstruct:casts/single_use/broad_blade' },
      { cast: 'tconstruct:casts/single_use/chestplate_plating' },
      { cast: 'tconstruct:casts/single_use/coin' },
      { cast: 'tconstruct:casts/single_use/gear' },
      { cast: 'tconstruct:casts/single_use/gem' },
      { cast: 'tconstruct:casts/single_use/hammer_head' },
      { cast: 'tconstruct:casts/single_use/helmet_plating' },
      { cast: 'tconstruct:casts/single_use/ingot' },
      { cast: 'tconstruct:casts/single_use/large_plate' },
      { cast: 'tconstruct:casts/single_use/leggings_plating' },
      { cast: 'tconstruct:casts/single_use/maille' },
      { cast: 'tconstruct:casts/single_use/nugget' },
      { cast: 'tconstruct:casts/single_use/pick_head' },
      { cast: 'tconstruct:casts/single_use/plate' },
      { cast: 'tconstruct:casts/single_use/repair_kit' },
      { cast: 'tconstruct:casts/single_use/rod' },
      { cast: 'tconstruct:casts/single_use/small_axe_head' },
      { cast: 'tconstruct:casts/single_use/small_blade' },
      { cast: 'tconstruct:casts/single_use/tool_binding' },
      { cast: 'tconstruct:casts/single_use/tool_handle' },
      { cast: 'tconstruct:casts/single_use/tough_binding' },
      { cast: 'tconstruct:casts/single_use/tough_handle' },
      { cast: 'tconstruct:casts/single_use/wire' },
      { cast: 'tconstruct:casts/single_use/template'}
    ];
  
    const castTypes = [
      'adze_head', 'boots_plating', 'bow_grip', 'bow_limb', 'broad_axe_head',
      'broad_blade', 'chestplate_plating', 'coin', 'gear', 'gem',
      'hammer_head', 'helmet_plating', 'ingot', 'large_plate',
      'leggings_plating', 'maille', 'nugget', 'pick_head', 'plate',
      'repair_kit', 'rod', 'small_axe_head', 'small_blade', 'tool_binding',
      'tool_handle', 'tough_binding', 'tough_handle', 'wire', 'template'
    ];
  
    for (const type of castTypes) {
      for (const { cast } of castVariants) {
        if (cast.endsWith(`/${type}`)) {
          event.custom({
            type: 'tconstruct:casting_table',
            cast: { tag: cast },
            cast_consumed: true,
            fluid: {
              tag: 'forge:molten_gold',
              amount: 90
            },
            result: {
              item: `tconstruct:${type}_cast`
            },
            cooling_time: 57
          }).id(`forge_frontier:casting/${type}_cast`);
        }
      }
    }
  });
  