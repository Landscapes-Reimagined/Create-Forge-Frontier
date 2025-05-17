// Mod Recipe Fixes
ServerEvents.recipes(event => {
    
    // Switches Out Ash for Gunpowder in Ash Recipe
    event.remove({ id: 'regions_unexplored:ash'})
    event.shaped(
        Item.of('regions_unexplored:ash'),
        [
            'AA',
            'AA'
        ],
        {
            A: 'supplementaries:ash'
        }
    ).id( 'forge_frontier:shaped/ash')

    // Removes Recipe for Broken Manual
    event.remove({ id: 'iammusicplayer:manual'})

    // Removes Excess Recipes for Seed Oil
    event.remove({ id: 'create_mechanical_chicken:compacting/compacting_seed_oil'})

    // Removes Fan Sanding Catalyst Recipes
    event.remove({ id: 'create_connected:item_application/sanding_catalyst_fan_empty_using_deployer' })
    event.remove({ id: 'create_connected:item_application/sanding_catalyst_fan_empty' })
    
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

    // Removes Conflicting Recipes
    event.remove({ id: 'cratedelight:minecraft/crafting/wheat_flour_bag'})
    event.remove({ id: 'cratedelight:minecraft/crafting/cinder_flour_bag'})
    event.remove({ id: 'cratedelight:minecraft/crafting/powdered_obsidian_bag'})

    // Removes Broken Recipes
    event.remove({ id: 'create_confectionery:ruby_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:white_chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:chocolate_recipe_6' });
    event.remove({ id: 'create_confectionery:black_chocolate_recipe_6' });

    // Removes Missing Item Related Recipes
    event.remove({ id: 'createappliedkinetics:throw_in_water/fluix_seed/normal'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/certus_seed/catalyzed'})
    event.remove({ id: 'createappliedkinetics:throw_in_water/certus_seed/normal'})
    event.remove({ id: 'alexsdelight:barbecue_on_a_stick'})
    event.remove({ id: 'collectorsreap:food/lime_green_tea'})
    event.remove({ id: 'collectorsreap:food/pomegranate_black_tea'})
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_narrow' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' });
    event.remove({ id: 'design_decor:item_application/crushing_wheels/special_aluminum_cylinder' }); 
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry' });
    event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' });
    event.remove({ id: 'create:filling/chocolate_bagutte' }); 
    event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' });
    event.remove({ id: 'design_decor:item_application/millstones/special_aluminum_cylinder' });
    event.remove({ id: 'railways:sequenced_assembly/track_biomesoplenty_cherry_wide' });

    // Broken Recipe Removals
    event.remove({ id:'create:crushing/sandstone/2x_to_2x_sand' });
    event.remove({ id:'cp_tweaks:rockets/tier_6_rocket' });
    event.remove({ id:'create:milling/sandstone/7x_to_7x_sand' });
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
