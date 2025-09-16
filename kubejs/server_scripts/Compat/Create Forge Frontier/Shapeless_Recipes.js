ServerEvents.recipes(event => 
    {
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