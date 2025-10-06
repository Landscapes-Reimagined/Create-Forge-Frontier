ServerEvents.recipes(event => 
    {
        // Sophisticated Storage Packing Tape Recipe
            event.remove({ id: 'sophisticatedstorage:packing_tape'})
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'minecraft:slime_ball'
                    },
                    {
                        item: 'create:cardboard'
                    }
                ],
                result: {
                    item: 'sophisticatedstorage:packing_tape',
                    count: 1
                }
            }).id( "forge_frontier:shapeless/packing_tape" )
    }
)