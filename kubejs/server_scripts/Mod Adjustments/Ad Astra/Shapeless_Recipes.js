ServerEvents.recipes(event => 
    {
        // Etrium Ingot Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'ad_astra:etrium_block'
                    }
                ],
                result: {
                    item: 'ad_astra:etrium_ingot',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/etrium_ingot' )

        // Etrium Nugget Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'ad_astra:etrium_ingot'
                    }
                ],
                result: {
                    item: 'ad_astra:etrium_nugget',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/etrium_nugget' )
    }   
)