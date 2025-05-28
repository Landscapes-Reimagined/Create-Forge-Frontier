ServerEvents.recipes(event => {
  // Remove default gold cast recipes
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
  }

  // Tag-based gold cast recipes
  const tagToCastMap = {
    'forge:ingots': 'ingot_cast',
    'forge:nuggets': 'nugget_cast',
    'forge:gems': 'gem_cast',
    'forge:rods': 'rod_cast',
    'forge:plates': 'plate_cast',
    'forge:wires': 'wire_cast',
    'forge:repair_kits': 'repair_kit_cast',
    'forge:pick_heads': 'pick_head_cast',
    'forge:axe_heads/small': 'small_axe_head_cast',
    'forge:blades/small': 'small_blade_cast',
    'forge:adze_heads': 'adze_head_cast',
    'forge:hammer_heads': 'hammer_head_cast',
    'forge:axe_heads/broad': 'broad_axe_head_cast',
    'forge:blades/broad': 'broad_blade_cast',
    'forge:plates/large': 'large_plate_cast',
    'forge:tool_handles': 'tool_handle_cast',
    'forge:tool_bindings': 'tool_binding_cast',
    'forge:tough_handles': 'tough_handle_cast',
    'forge:tough_bindings': 'tough_binding_cast',
    'forge:bow_limbs': 'bow_limb_cast',
    'forge:bow_grips': 'bow_grip_cast',
    'forge:armor/helmet_plating': 'helmet_plating_cast',
    'forge:armor/chestplate_plating': 'chestplate_plating_cast',
    'forge:armor/leggings_plating': 'leggings_plating_cast',
    'forge:armor/boots_plating': 'boots_plating_cast',
    'forge:armor/maille': 'maille_cast',
    'forge:templates/smithing': 'template_cast'
  };

  for (const [tag, resultId] of Object.entries(tagToCastMap)) {
    event.custom({
      type: 'tconstruct:casting_table',
      cast: { tag: tag },
      cast_consumed: true,
      fluid: {
        tag: 'forge:molten_gold',
        amount: 90
      },
      result: {
        item: `tconstruct:${resultId}`
      },
      switch_slots: true,
      cooling_time: 57
    }).id(`forge_frontier:casting/${resultId}`);
  }
});
