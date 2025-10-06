ServerEvents.recipes(event => 
    {
        // Rose Quartz to Block Recipe
            event.remove({ id: 'create:rose_quartz_block_from_rose_quartz_stonecutting'})
            event.shaped(
                Item.of('create:rose_quartz_block'),
                [
                    'RRR',
                    'RRR',
                    'RRR'
                ],
                {
                    R: 'create:rose_quartz'
                }
            ).id( 'forge_frontier:shaped/rose_quartz' )
    }
)