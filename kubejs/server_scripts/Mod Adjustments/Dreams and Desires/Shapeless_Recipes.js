ServerEvents.recipes(event => 
    {
        // Adjust Coal Recipe
            event.remove({ id: 'create_dd:crafting/coal_piece_compacting'})
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                },
                {
                    'tag': 'forge:nuggets/coal'
                }
                ],
                result: {
                item: 'minecraft:coal',
                count: 1
                }
            }).id( 'forge_frontier:shapeless/nugget_coal' )

        // Adjust Coal Piece Recipe	
            event.remove({ id: 'create_dd:crafting/coal_piece_from_decompacting'})
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'minecraft:coal'
                    }
                ],
                result: {
                    item: 'create_dd:coal_piece',
                    count: 9
                }

            }).id( 'forge_frontier:shapeless/coal_piece_coal' )
	
		// Create Refined Radiance to DD Refined Radiance Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'create:refined_radiance'
                    }
                ],
                result: {
                    item: 'create_dd:refined_radiance',
                }
            }).id( 'forge_frontier:shapeless/create_dd_refined_radiance' )

		// Create Shadow Steel to DD Shadow Steel Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'create:shadow_steel'
                    }
                ],
                result: {
                    item: 'create_dd:shadow_steel',
                }
            }).id( 'forge_frontier:shapeless/create_dd_shadow_steel' )

		// Create Compound to DD Compound Recipe
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'create:chromatic_compound'
                }
            ],
            result: {
                item: 'create_dd:chromatic_compound',
            }

            }).id( 'forge_frontier:shapeless/create_dd_compound' )

        // Create Compression to DD Refined Radiance Block
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createcompression:refined_radiance_block'
                }
            ],
            result: {
                item: 'create_dd:refined_radiance_block',
            }

            }).id( 'forge_frontier:shapeless/refined_radiance_block_conversion_compression' )        

        // Create QOL to DD Refined Radiance Block
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createqol:refined_radiance_block'
                }
            ],
            result: {
                item: 'create_dd:refined_radiance_block',
            }

            }).id( 'forge_frontier:shapeless/refined_radiance_block_conversion_qol' ) 

        // Create Compression to DD Chromatic Steel Block
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createcompression:shadow_steel_block'
                }
            ],
            result: {
                item: 'create_dd:shadow_steel_block',
            }

            }).id( 'forge_frontier:shapeless/shadow_steel_block_conversion_compression' )        

        // Create QOL to DD Chromatic Steel Block
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createqol:shadow_steel_block'
                }
            ],
            result: {
                item: 'create_dd:shadow_steel_block',
            }

            }).id( 'forge_frontier:shapeless/shadow_steel_block_conversion_qol' ) 
            
        // Create QOL Chromatic Compound to DD Chromatic Compound Block
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'createqol:chromatic_compound_block'
                }
            ],
            result: {
                item: 'create_dd:chromatic_block',
            }

            }).id( 'forge_frontier:shapeless/chromatic_compound_block_conversion_qol' )
            
        // Create to DD Shadow Steel Casing
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'create:shadow_steel_casing'
                }
            ],
            result: {
                item: 'create_dd:shadow_steel_casing',
            }

            }).id( 'forge_frontier:shapeless/shadow_steel_casing_conversion' )        

        // Create to DD Refined Radiance Casing
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'create:refined_radiance_casing'
                }
            ],
            result: {
                item: 'create_dd:refined_radiance_casing',
            }

            }).id( 'forge_frontier:shapeless/refined_radiance_casing_conversion' )

    }
)