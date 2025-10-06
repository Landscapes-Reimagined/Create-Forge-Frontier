ServerEvents.recipes(event => 
    {
        // Ferrous Slime to Slime Recipe
            event.custom({
                type:'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'alexscaves:ferrouslime_ball'
                    }
                ],
                result: {
                    item: 'minecraft:slime_ball'
                }
            }).id( 'forge_frontier:shapeless/ferrous_slime')
    }
)