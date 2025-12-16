ServerEvents.recipes(event => 
    {
        // Raw Uraninite Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'forge_frontier:raw_uraninite_block'
                    }
                ],
                result: {
                    item: 'powah:uraninite_raw',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/uraninite_raw' ) 
                    
        // Hyper Experience Block Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'create_enchantment_industry:hyper_experience_block'
                    }
                ],
                result: {
                    item: 'create_enchantment_industry:hyper_experience_nugget',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/hyper_experience_nugget' ) 

        // Dielectric Paste Block Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'forge_frontier:dielectric_paste_block'
                    }
                ],
                result: {
                    item: 'powah:dielectric_paste',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/dielectric_paste' ) 

        // Echo Shard Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'forge_frontier:echo_shard_block'
                    }
                ],
                result: {
                    item: 'minecraft:echo_shard',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/echo_shard' ) 
                   
        // Blaze Rod Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'forge_frontier:blaze_block'
                    }
                ],
                result: {
                    item: 'minecraft:blaze_rod',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/blaze_rod' )
    }   
)