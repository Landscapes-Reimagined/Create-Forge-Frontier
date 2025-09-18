ServerEvents.recipes(event => 
    {
        // Rose Quartz Block to Non Block Shapeless
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'create:rose_quartz_block'
                    }
                ],
                result: {
                    item: 'create:rose_quartz',
                    count: 9
                }
            }).id( 'forge_frontier:shapeless/rose_quartz' )
    }
)