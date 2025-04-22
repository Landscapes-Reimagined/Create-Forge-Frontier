ServerEvents.recipes(event => {
      // New Blank Sand Cast Recipes
      // Sand Cast
      event.remove({ id: 'tconstruct:smeltery/sand_cast'})
      event.custom({
        type:"create:compacting",
        ingredients: [
            {
                item: 'minecraft:sand',
                amount: 1
            },
        ],
        results: [
            {
                item: 'tconstruct:blank_sand_cast',
                amount: 1
            },
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:compacting/blank_sand_cast')

    // Sand Cast
    event.remove({ id: 'tconstruct:smeltery/red_sand_cast'})
    event.custom({
      type:"create:compacting",
      ingredients: [
          {
              item: 'minecraft:red_sand',
              amount: 1
          },
      ],
      results: [
          {
              item: 'tconstruct:blank_red_sand_cast',
              amount: 1
          },
      ],
      heatRequirement: "superheated"
  }).id('forge_frontier:compacting/blank_red_sand_cast')

      // Remove conflicting or redundant recipes for sand and red sand casts
        const sandTypes = ['sand', 'red_sand'];

        const castRemovalGroups = {
            ingots: ['molding', 'builder_block', 'builder_cast'],
            nuggets: ['molding', 'builder_block', 'builder_cast'],
            gems: ['molding', 'builder_block', 'builder_cast'],
            rods: ['molding', 'builder_block', 'builder_cast'],
            plates: ['molding', 'builder_block', 'builder_cast'],
            wires: ['molding', 'builder_block', 'builder_cast'],
            repair_kit: ['molding', 'builder_block', 'builder_cast'],
            pick_head: ['molding', 'builder_block', 'builder_cast'],
            small_axe_head: ['molding', 'builder_block', 'builder_cast'],
            small_blade: ['molding', 'builder_block', 'builder_cast'],
            adze_head: ['molding', 'builder_block', 'builder_cast'],
            hammer_head: ['molding', 'builder_block', 'builder_cast'],
            broad_axe_head: ['molding', 'builder_block', 'builder_cast'],
            broad_blade: ['molding', 'builder_block', 'builder_cast'],
            large_plate: ['molding', 'builder_block', 'builder_cast'],
            tool_handle: ['molding', 'builder_block', 'builder_cast'],
            tool_binding: ['molding', 'builder_block', 'builder_cast'],
            tough_handle: ['molding', 'builder_block', 'builder_cast'],
            tough_binding: ['molding', 'builder_block', 'builder_cast'],
            bow_limb: ['molding', 'builder_block', 'builder_cast'],
            bow_grip: ['molding', 'builder_block', 'builder_cast'],
            helmet_plating: ['molding', 'builder_block', 'builder_cast'],
            chestplate_plating: ['molding', 'builder_block', 'builder_cast'],
            leggings_plating: ['molding', 'builder_block', 'builder_cast'],
            boots_plating: ['molding', 'builder_block', 'builder_cast'],
            maille: ['molding', 'builder_block', 'builder_cast']
          };

        for (let sandType of sandTypes) {
            for (let [type, paths] of Object.entries(castRemovalGroups)) {
            for (let path of paths) {
                // Fix: directly pass the string instead of declaring `const id`
                event.remove({ id: `tconstruct:smeltery/casts/${sandType}/${path}/${type}` });
            }
            }
        }
  
        // Sequenced assembly recipes for sand cast creation
        const sandCastingRecipes = [
            // Format: [ deployed tag, ingredient (blank cast), transitional item, result item, ID suffix ]
        
            // Sand Casts
            ['forge:ingots', 'tconstruct:blank_sand_cast', 'tconstruct:ingot_sand_cast', 'tconstruct:ingot_sand_cast', 'ingot_sand_cast'],
            ['forge:nuggets', 'tconstruct:blank_sand_cast', 'tconstruct:nugget_sand_cast', 'tconstruct:nugget_sand_cast', 'nugget_sand_cast'],
            ['forge:gems', 'tconstruct:blank_sand_cast', 'tconstruct:gem_sand_cast', 'tconstruct:gem_sand_cast', 'gem_sand_cast'],
            ['forge:rods', 'tconstruct:blank_sand_cast', 'tconstruct:rod_sand_cast', 'tconstruct:rod_sand_cast', 'rod_sand_cast'],
            ['forge:plates', 'tconstruct:blank_sand_cast', 'tconstruct:plate_sand_cast', 'tconstruct:plate_sand_cast', 'plate_sand_cast'],
            ['forge:wires', 'tconstruct:blank_sand_cast', 'tconstruct:wire_sand_cast', 'tconstruct:wire_sand_cast', 'wire_sand_cast'],
            ['forge:repair_kits', 'tconstruct:blank_sand_cast', 'tconstruct:repair_kit_sand_cast', 'tconstruct:repair_kit_sand_cast', 'repair_kit_sand_cast'],
            ['forge:pick_heads', 'tconstruct:blank_sand_cast', 'tconstruct:pick_head_sand_cast', 'tconstruct:pick_head_sand_cast', 'pick_head_sand_cast'],
            ['forge:axe_heads/small', 'tconstruct:blank_sand_cast', 'tconstruct:small_axe_head_sand_cast', 'tconstruct:small_axe_head_sand_cast', 'small_axe_head_sand_cast'],
            ['forge:blades/small', 'tconstruct:blank_sand_cast', 'tconstruct:small_blade_sand_cast', 'tconstruct:small_blade_sand_cast', 'small_blade_sand_cast'],
            ['forge:adze_heads', 'tconstruct:blank_sand_cast', 'tconstruct:adze_head_sand_cast', 'tconstruct:adze_head_sand_cast', 'adze_head_sand_cast'],
            ['forge:hammer_heads', 'tconstruct:blank_sand_cast', 'tconstruct:hammer_head_sand_cast', 'tconstruct:hammer_head_sand_cast', 'hammer_head_sand_cast'],
            ['forge:axe_heads/broad', 'tconstruct:blank_sand_cast', 'tconstruct:broad_axe_head_sand_cast', 'tconstruct:broad_axe_head_sand_cast', 'broad_axe_head_sand_cast'],
            ['forge:blades/broad', 'tconstruct:blank_sand_cast', 'tconstruct:broad_blade_sand_cast', 'tconstruct:broad_blade_sand_cast', 'broad_blade_sand_cast'],
            ['forge:plates/large', 'tconstruct:blank_sand_cast', 'tconstruct:large_plate_sand_cast', 'tconstruct:large_plate_sand_cast', 'large_plate_sand_cast'],
            ['forge:tool_handles', 'tconstruct:blank_sand_cast', 'tconstruct:tool_handle_sand_cast', 'tconstruct:tool_handle_sand_cast', 'tool_handle_sand_cast'],
            ['forge:tool_bindings', 'tconstruct:blank_sand_cast', 'tconstruct:tool_binding_sand_cast', 'tconstruct:tool_binding_sand_cast', 'tool_binding_sand_cast'],
            ['forge:tough_handles', 'tconstruct:blank_sand_cast', 'tconstruct:tough_handle_sand_cast', 'tconstruct:tough_handle_sand_cast', 'tough_handle_sand_cast'],
            ['forge:tough_bindings', 'tconstruct:blank_sand_cast', 'tconstruct:tough_binding_sand_cast', 'tconstruct:tough_binding_sand_cast', 'tough_binding_sand_cast'],
            ['forge:bow_limbs', 'tconstruct:blank_sand_cast', 'tconstruct:bow_limb_sand_cast', 'tconstruct:bow_limb_sand_cast', 'bow_limb_sand_cast'],
            ['forge:bow_grips', 'tconstruct:blank_sand_cast', 'tconstruct:bow_grip_sand_cast', 'tconstruct:bow_grip_sand_cast', 'bow_grip_sand_cast'],
            ['forge:armor/helmet_plating', 'tconstruct:blank_sand_cast', 'tconstruct:helmet_plating_sand_cast', 'tconstruct:helmet_plating_sand_cast', 'helmet_plating_sand_cast'],
            ['forge:armor/chestplate_plating', 'tconstruct:blank_sand_cast', 'tconstruct:chestplate_plating_sand_cast', 'tconstruct:chestplate_plating_sand_cast', 'chestplate_plating_sand_cast'],
            ['forge:armor/leggings_plating', 'tconstruct:blank_sand_cast', 'tconstruct:leggings_plating_sand_cast', 'tconstruct:leggings_plating_sand_cast', 'leggings_plating_sand_cast'],
            ['forge:armor/boots_plating', 'tconstruct:blank_sand_cast', 'tconstruct:boots_plating_sand_cast', 'tconstruct:boots_plating_sand_cast', 'boots_plating_sand_cast'],
            ['forge:armor/maille', 'tconstruct:blank_sand_cast', 'tconstruct:maille_sand_cast', 'tconstruct:maille_sand_cast', 'maille_sand_cast'],
        
            // Red Sand Casts (same as above, replace _sand_cast with _red_sand_cast)
            ['forge:ingots', 'tconstruct:blank_red_sand_cast', 'tconstruct:ingot_red_sand_cast', 'tconstruct:ingot_red_sand_cast', 'ingot_red_sand_cast'],
            ['forge:nuggets', 'tconstruct:blank_red_sand_cast', 'tconstruct:nugget_red_sand_cast', 'tconstruct:nugget_red_sand_cast', 'nugget_red_sand_cast'],
            ['forge:gems', 'tconstruct:blank_red_sand_cast', 'tconstruct:gem_red_sand_cast', 'tconstruct:gem_red_sand_cast', 'gem_red_sand_cast'],
            ['forge:rods', 'tconstruct:blank_red_sand_cast', 'tconstruct:rod_red_sand_cast', 'tconstruct:rod_red_sand_cast', 'rod_red_sand_cast'],
            ['forge:plates', 'tconstruct:blank_red_sand_cast', 'tconstruct:plate_red_sand_cast', 'tconstruct:plate_red_sand_cast', 'plate_red_sand_cast'],
            ['forge:wires', 'tconstruct:blank_red_sand_cast', 'tconstruct:wire_red_sand_cast', 'tconstruct:wire_red_sand_cast', 'wire_red_sand_cast'],
            ['forge:repair_kits', 'tconstruct:blank_red_sand_cast', 'tconstruct:repair_kit_red_sand_cast', 'tconstruct:repair_kit_red_sand_cast', 'repair_kit_red_sand_cast'],
            ['forge:pick_heads', 'tconstruct:blank_red_sand_cast', 'tconstruct:pick_head_red_sand_cast', 'tconstruct:pick_head_red_sand_cast', 'pick_head_red_sand_cast'],
            ['forge:axe_heads/small', 'tconstruct:blank_red_sand_cast', 'tconstruct:small_axe_head_red_sand_cast', 'tconstruct:small_axe_head_red_sand_cast', 'small_axe_head_red_sand_cast'],
            ['forge:blades/small', 'tconstruct:blank_red_sand_cast', 'tconstruct:small_blade_red_sand_cast', 'tconstruct:small_blade_red_sand_cast', 'small_blade_red_sand_cast'],
            ['forge:adze_heads', 'tconstruct:blank_red_sand_cast', 'tconstruct:adze_head_red_sand_cast', 'tconstruct:adze_head_red_sand_cast', 'adze_head_red_sand_cast'],
            ['forge:hammer_heads', 'tconstruct:blank_red_sand_cast', 'tconstruct:hammer_head_red_sand_cast', 'tconstruct:hammer_head_red_sand_cast', 'hammer_head_red_sand_cast'],
            ['forge:axe_heads/broad', 'tconstruct:blank_red_sand_cast', 'tconstruct:broad_axe_head_red_sand_cast', 'tconstruct:broad_axe_head_red_sand_cast', 'broad_axe_head_red_sand_cast'],
            ['forge:blades/broad', 'tconstruct:blank_red_sand_cast', 'tconstruct:broad_blade_red_sand_cast', 'tconstruct:broad_blade_red_sand_cast', 'broad_blade_red_sand_cast'],
            ['forge:plates/large', 'tconstruct:blank_red_sand_cast', 'tconstruct:large_plate_red_sand_cast', 'tconstruct:large_plate_red_sand_cast', 'large_plate_red_sand_cast'],
            ['forge:tool_handles', 'tconstruct:blank_red_sand_cast', 'tconstruct:tool_handle_red_sand_cast', 'tconstruct:tool_handle_red_sand_cast', 'tool_handle_red_sand_cast'],
            ['forge:tool_bindings', 'tconstruct:blank_red_sand_cast', 'tconstruct:tool_binding_red_sand_cast', 'tconstruct:tool_binding_red_sand_cast', 'tool_binding_red_sand_cast'],
            ['forge:tough_handles', 'tconstruct:blank_red_sand_cast', 'tconstruct:tough_handle_red_sand_cast', 'tconstruct:tough_handle_red_sand_cast', 'tough_handle_red_sand_cast'],
            ['forge:tough_bindings', 'tconstruct:blank_red_sand_cast', 'tconstruct:tough_binding_red_sand_cast', 'tconstruct:tough_binding_red_sand_cast', 'tough_binding_red_sand_cast'],
            ['forge:bow_limbs', 'tconstruct:blank_red_sand_cast', 'tconstruct:bow_limb_red_sand_cast', 'tconstruct:bow_limb_red_sand_cast', 'bow_limb_red_sand_cast'],
            ['forge:bow_grips', 'tconstruct:blank_red_sand_cast', 'tconstruct:bow_grip_red_sand_cast', 'tconstruct:bow_grip_red_sand_cast', 'bow_grip_red_sand_cast'],
            ['forge:armor/helmet_plating', 'tconstruct:blank_red_sand_cast', 'tconstruct:helmet_plating_red_sand_cast', 'tconstruct:helmet_plating_red_sand_cast', 'helmet_plating_red_sand_cast'],
            ['forge:armor/chestplate_plating', 'tconstruct:blank_red_sand_cast', 'tconstruct:chestplate_plating_red_sand_cast', 'tconstruct:chestplate_plating_red_sand_cast', 'chestplate_plating_red_sand_cast'],
            ['forge:armor/leggings_plating', 'tconstruct:blank_red_sand_cast', 'tconstruct:leggings_plating_red_sand_cast', 'tconstruct:leggings_plating_red_sand_cast', 'leggings_plating_red_sand_cast'],
            ['forge:armor/boots_plating', 'tconstruct:blank_red_sand_cast', 'tconstruct:boots_plating_red_sand_cast', 'tconstruct:boots_plating_red_sand_cast', 'boots_plating_red_sand_cast'],
            ['forge:armor/maille', 'tconstruct:blank_red_sand_cast', 'tconstruct:maille_red_sand_cast', 'tconstruct:maille_red_sand_cast', 'maille_red_sand_cast']
        ];
        
    sandCastingRecipes.forEach(([inputTag, ingredientItem, transitionalItem, resultItem, idSuffix]) => {
      event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: ingredientItem },
        transitionalItem: { item: transitionalItem },
        sequence: [
          {
            type: "create:deploying",
            keepHeldItem: true,
            ingredients: [
              { item: transitionalItem },
              { tag: inputTag }
            ],
            results: [
              { item: transitionalItem }
            ]
          },
          {
            type: "create:pressing",
            ingredients: [
              { item: transitionalItem }
            ],
            results: [
              { item: transitionalItem }
            ]
          }
        ],
        results: [
          { item: resultItem }
        ],
        loops: 1
      }).id(`forge_frontier:sequenced_assembly/${idSuffix}`);
    });
  });
  