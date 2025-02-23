// Mod Recipe Fixes
ServerEvents.recipes(event => {
    // Adjusts Heated Mixing Recipe for Nut Milk Recipe
    event.remove({ id: 'delightful:food/cooking/nut_milk' })
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'delightful:nut_butter_bottle'
            },
            {
                item: 'delightful:nut_butter_bottle'
            },
            {
                item: 'delightful:nut_butter_bottle'
            },
            {
                item: 'delightful:nut_butter_bottle'
            },
            {
                fluid: 'minecraft:water',
                amount: 1000
            }
        ],
        results: [
            {
                fluid: 'minecraft:milk',
                amount: 1000
            }
        ],
        heatRequirement: "heated"
    }).id('forge_frontier:mixing/nut_milk');

    // Adjusts Shapeless return recipe for sturdy stone
    event.remove({ id: 'quark:building/crafting/sturdy_stone_decompress'})
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'quark:sturdy_stone'
            }
        ],
        result: {
            item: 'minecraft:cobblestone',
            count: 4
        }
    }).id( 'forge_frontier:shapeless/sturdy_stone' )

    // Fixes Compat issue with Compacting Cobblestone
    event.remove({ id: 'quark:building/crafting/cobblestone_bricks'}),
    event.remove({ id: 'quark:building/crafting/sturdy_stone'})
    event.shaped(
        Item.of('quark:sturdy_stone'),
        [
            'CC',
            'CC'
        ],
        {
            C: 'minecraft:cobblestone'
        }
    ).id( 'forge_frontier:shaped/sturdy_stone')
    
    // Removes Excess Coke Oven Recipe
    event.remove({ id: 'tfmg:crafting/coke_oven'})
    
    // Removes Not Need Cinder Flour Block Recipe
    event.remove({ id: 'tfmg:compacting/cinderflourblock'})

    // Adds Missing Black Steel Block Recipe
    event.shaped(
		Item.of('cataclysm:black_steel_block'),
		[
			'BBB',
			'BBB',
			'BBB'
		],
		{
			B: 'cataclysm:black_steel_ingot'
		}
	).id( 'forge_frontier:shaped/black_steel_block' )

    // Compatibility Issues Recipe Removals
    event.remove({ id: 'tfmg:sequenced_assembly/heavy_plate'});
    event.remove({ id: 'forge_frontier:compacting/iron_plate'});
    event.remove({ id: 'create:pressing/steel_ingot'})
    event.remove({ id: 'create_things_and_misc:new_trapdoor_andesite'});
    event.remove({ id: 'create_things_and_misc:new_trapdoor_copper'});
    event.remove({ id: 'create_things_and_misc:new_trap_door_brass'});

    // Compressed Ore Block Shapeless Recipe Fixes
        // Raw Copper
        event.remove({ id: 'createcompression:block/minecraft/raw_copper/decompress/1x'})
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createcompression:compressed_raw_copper_1x'
                }
            ],
            result: {
                item: 'minecraft:raw_copper_block',
                count: 9
            }
        }).id( 'createcompression:block/minecraft/raw_copper/decompress/1x' )

        // Raw Gold
        event.remove({ id: 'createcompression:block/minecraft/raw_gold/decompress/1x'})
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createcompression:compressed_raw_gold_1x'
                }
            ],
            result: {
                item: 'minecraft:raw_gold_block',
                count: 9
            }
        }).id( 'createcompression:block/minecraft/raw_gold/decompress/1x' )

        // Raw Iron
        event.remove({ id: 'createcompression:block/minecraft/raw_iron/decompress/1x'})
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createcompression:compressed_raw_iron_1x'
                }
            ],
            result: {
                item: 'minecraft:raw_iron_block',
                count: 9
            }
        }).id( 'createcompression:block/minecraft/raw_iron/decompress/1x' )
    
    // Removed Pocket Dimension Remote Recipe
    event.remove({ id: 'createteleporters:pocket_dimension_recipe'})

    // Botany Pots
    event.remove({ id: "botanypots:enlightend/soil/chorloam" })
    event.custom({
        type:"botanypots:soil",
        input:
        {
            item: "enlightened_end:chorloam"
        },
        display:
        {
            block: "enlightened_end:chorloam"
        },
        categories:
        [
            "chorloam"
        ],
        growthModifier:1
    }).id('botanypots:enlightend/soil/chorloam')

    // Fixes Aluminum Boiler Recipe
    event.remove({ id: 'design_decor:stonecutting/cyllinder/aluminum_cyllinder' })
    event.custom({
        type:'minecraft:stonecutting',
        ingredient: 
        {
            tag: 'forge:storage_blocks/aluminum'
        },
        result: 'design_decor:aluminium_boiler',
        count: 4
    }).id( 'forge_frontier:stonecutting/aluminium_boiler' )

    // Fixes Large Aluminium Boiler
    event.remove({ id: 'design_decor:stonecutting/cyllinder/aluminium_boiler_large' })
    event.custom({
        type:'minecraft:stonecutting',
        ingredient: 
        {
            tag: 'forge:storage_blocks/aluminum'
        },
        result: 'design_decor:aluminium_boiler_large',
        count: 1
    }).id( 'forge_frontier:stonecutting/aluminium_boiler_large' )

    // Fixes Large Aluminium Chain
    event.remove({ id: 'design_decor:stonecutting/chain/aluminium_large_chain' })
    event.custom({
        type: 'minecraft:stonecutting',
        ingredient: {
          tag: 'forge:ingots/aluminum'
        },
        result: 'design_decor:aluminium_large_chain',
        count: 4
      }).id( 'forge_frontier:stonecutting/aluminium_large_chain' )

    // Removes Conflicting Recipes
    event.remove({ id: 'quark:building/crafting/compressed/cocoa_beans_sack'})
    event.remove({ id: 'quark:building/crafting/compressed/gunpowder_sack'})
    event.remove({ id: 'quark:building/crafting/compressed/berry_sack'})
    event.remove({ id: 'quark:building/crafting/compressed/glowberry_sack'})
    event.remove({ id: 'cratedelight:minecraft/crafting/wheat_flour_bag'})
    event.remove({ id: 'cratedelight:minecraft/crafting/cinder_flour_bag'})
    event.remove({ id: 'cratedelight:minecraft/crafting/powdered_obsidian_bag'})

    // Removes Broken Recipes
    event.remove({ id: 'create_confectionery:ruby_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:white_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:black_chocolate_recipe_6' });

    // Removes Missing Item Related Recipes
    event.remove({ id: 'tfmg:mechanical_crafting/cast_iron_distillation_controller'})
    event.remove({ id: 'tfmg:crafting/glass_cable_connector'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/fluix_seed/normal'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/certus_seed/catalyzed'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/certus_seed/normal'})
    event.remove({ id: 'alexsdelight:barbecue_on_a_stick'})
    event.remove({ id: 'collectorsreap:food/lime_green_tea'})
    event.remove({ id: 'collectorsreap:food/pomegranate_black_tea'})
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/yellow_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/red_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/lime_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/pink_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/black_concrete_q' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_narrow' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/light_gray_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/cyan_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/purple_concrete_q' });
    event.remove({ id: 'design_decor:item_application/crushing_wheels/special_aluminum_cylinder' }); 
    event.remove({ id: 'tfmg:colored_concrete/full_block/light_blue_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/green_concrete_q' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/magenta_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/blue_concrete_q' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/white_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/gray_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/brown_concrete_q' });
    event.remove({ id: 'tfmg:colored_concrete/full_block/pink_concrete' });
    event.remove({ id: 'create:filling/chocolate_bagutte' }); 
    event.remove({ id: 'tfmg:colored_concrete/full_block/orange_concrete_q' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' });
    event.remove({ id: 'design_decor:item_application/millstones/special_aluminum_cylinder' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_wide' });

    // Broken Recipe Removals
    event.remove({ id:'create:crushing/sandstone/2x_to_2x_sand' });
    event.remove({ id:'cp_tweaks:rockets/tier_6_rocket' });
    event.remove({ id:'create:milling/sandstone/7x_to_7x_sand' });
    event.remove({ id:'tfmg:mechanical_crafting/pumpjack_hammer_holder' });
    event.remove({ id:'create:milling/sandstone/2x_to_2x_sand' });
    event.remove({ id:'create:milling/sandstone/8x_to_8x_sand' });
    event.remove({ id:'create:crushing/sandstone/6x_to_6x_sand' });
    event.remove({ id:'create:crushing/sandstone/8x_to_8x_sand' });
    event.remove({ id:'create:crushing/dripstone/1x_to_9x_clay_ball' });
    event.remove({ id:'create:crushing/sandstone/4x_to_4x_sand' });
    event.remove({ id:'create:milling/sandstone/4x_to_4x_sand' });
    event.remove({ id:'create:milling/sandstone/6x_to_6x_sand' });
    event.remove({ id:'create:crushing/sandstone/5x_to_5x_sand' });
    event.remove({ id:'quark:entities/frog' });
    event.remove({ id:'create:crushing/sandstone/3x_to_3x_sand' });
    event.remove({ id:'create:crushing/sandstone/1x_to_1x_sand' });
    event.remove({ id:'quark:entities/pig_tallow' });
    event.remove({ id:'create:milling/dripstone/1x_to_9x_clay_ball' });
    event.remove({ id:'create:milling/sandstone/5x_to_5x_sand' });
    event.remove({ id:'create:crushing/sandstone/9x_to_9x_sand' });
    event.remove({ id:'quark:entities/wrapped' });
    event.remove({ id:'create:milling/sandstone/1x_to_1x_sand' });
    event.remove({ id:'create:milling/sandstone/3x_to_3x_sand' });
    event.remove({ id:'create:crushing/sandstone/7x_to_7x_sand' });
    event.remove({ id:'create:milling/sandstone/9x_to_9x_sand'});
    

    // Removes Failed Compatibility Related Recipes
    event.remove({ id: 'railways:sequenced_assembly/track_tieless_narrow'});

    // Replaces Recipe for Narrow Tieless Tracks
        event.custom({
            type:'create:sequenced_assembly',
            ingredient: {
                item: 'railways:track_tieless'
            },
            loops: 1,
            results: [
                {
                    item: 'railways:track_tieless_narrow'
                }
            ],
            sequence: [
                {
                    type:'create:cutting',
                    ingredients: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        },
                    ],
                    results: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        },
                        [                
                            {
                            tag: 'railways:internal/nuggets/iron_nuggets'
                            },
                            {
                            tag: 'railways:internal/nuggets/zinc_nuggets'
                            }
                        ]
                    ],
                    results: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ]
                },
                {
                    type: 'create:pressing',
                    ingredients: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ],
                    results: [
                        {
                            item: 'railways:track_incomplete_tieless_narrow'
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: 'railways:track_incomplete_tieless_narrow'
            }
        }).id( 'forge_frontier:sequenced_assembly/tieless_narrow_track' );
  

    })
