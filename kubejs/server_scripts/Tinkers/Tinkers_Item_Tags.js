ServerEvents.tags('item', event => {
    // Manually list known Tinkers items mapped to appropriate forge tags
    const tconstructItems = {
      // Basic parts
      'tconstruct:repair_kit': 'forge:repair_kits',
      'tconstruct:pick_head': 'forge:pick_heads',
      'tconstruct:small_axe_head': 'forge:axe_heads/small',
      'tconstruct:small_blade': 'forge:blades/small',
      'tconstruct:adze_head': 'forge:adze_heads',
      'tconstruct:hammer_head': 'forge:hammer_heads',
      'tconstruct:broad_axe_head': 'forge:axe_heads/broad',
      'tconstruct:broad_blade': 'forge:blades/broad',
      'tconstruct:large_plate': 'forge:plates/large',
  
      // Tool components
      'tconstruct:tool_handle': 'forge:tool_handles',
      'tconstruct:tool_binding': 'forge:tool_bindings',
      'tconstruct:tough_handle': 'forge:tough_handles',
      'tconstruct:tough_binding': 'forge:tough_bindings',
  
      // Bow parts
      'tconstruct:bow_limb': 'forge:bow_limbs',
      'tconstruct:bow_grip': 'forge:bow_grips',
  
      // Armor components
      'tconstruct:helmet_plating': 'forge:armor/helmet_plating',
      'tconstruct:chestplate_plating': 'forge:armor/chestplate_plating',
      'tconstruct:leggings_plating': 'forge:armor/leggings_plating',
      'tconstruct:boots_plating': 'forge:armor/boots_plating',
      'tconstruct:maille': 'forge:armor/maille'
    };
  
    for (const [item, tag] of Object.entries(tconstructItems)) {
      event.add(tag, item);
    }

    // Added Proper Cast tags for easier recipe implementation
      // Single Use/Template Tag
      event.add('tconstruct:casts/single_use/template', [
        'tconstruct:template_sand_cast',
        'tconstruct:template_red_sand_cast'
      ]);
      
      // Type of Cast Tag
      event.add('tconstruct:casts/red_sand', 'tconstruct:template_red_sand_cast');
      event.add('tconstruct:casts/sand', 'tconstruct:template_sand_cast');
      event.add('tconstruct:casts/gold', 'tconstruct:template_cast');

      // Single Use Tag
      event.add('tconstruct:casts/single_use', [
        'tconstruct:template_sand_cast',
        'tconstruct:template_red_sand_cast'
      ]);

      // Cast Tag
      event.add('tconstruct:casts', [
        'tconstruct:template_sand_cast',
        'tconstruct:template_red_sand_cast',
        'tconstruct:template_cast'
      ]);

      // Pattern Tag
      event.add('tconstruct:patterns', [
        'tconstruct:template_sand_cast',
        'tconstruct:template_red_sand_cast',
        'tconstruct:template_cast'
      ]);

      // Piglins Love Tag
      event.add('minecraft:piglin_loved', 'tconstruct:template_cast')
  });
  