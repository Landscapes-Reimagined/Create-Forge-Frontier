ServerEvents.recipes(event => 
    {
        // Shaped Debris Recipe
        event.shaped(
            Item.of('minecraft:netherite_scrap'),
            [
                'NNN',
                'NNN',
                'NN '
            ],
            {
                N: 'tconstruct:debris_nugget'
            }
        ).id( 'forge_frontier:shaped/netherite_scrap' )

        // Shapeless Debris Scrap Recipes
        event.custom({
            type:'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'minecraft:netherite_scrap'
                }
            ],
            result: {
                item: 'tconstruct:debris_nugget',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/debris_nugget')
    }
)