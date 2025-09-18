ServerEvents.recipes(event => 
    {
        // Banana Slime to Slime Recipe
            event.custom({
                type:'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'alexsmobs:banana_slug_slime'
                    }
                ],
                result: {
                    item: 'minecraft:slime_ball'
                }
            }).id( 'forge_frontier:shapeless/banana_slime')
    }
)