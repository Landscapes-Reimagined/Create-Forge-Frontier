ServerEvents.recipes(event => 
    {
        // DD Refined Radiance to Create Refined Radiance Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'create_dd:refined_radiance'
                    }
                ],
                result: {
                    item: 'create:refined_radiance',
                }

            }).id( 'forge_frontier:shapeless/dd_create_refined_radiance' )

		// DD Shadow Steel to Create Shadow Steel Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'create_dd:shadow_steel'
                    }
                ],
                result: {
                    item: 'create:shadow_steel',
                }

            }).id( 'forge_frontier:shapeless/dd_create_shadow_steel' )
		
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

		// DD Compound to Create Compound Recipe
            event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'create_dd:chromatic_compound'
                }
            ],
            result: {
                item: 'create:chromatic_compound',
            }
            }).id( 'forge_frontier:shapeless/dd_create_compound' )

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
    }
)