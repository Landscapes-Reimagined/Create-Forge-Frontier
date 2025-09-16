ServerEvents.recipes(event => 
    {
        // Guano Block Recipe
            event.remove({ id: 'alexscaves:guano_block'})
            event.shaped(
                Item.of('alexscaves:guano_block'),
                [
                    'GGG',
                    'GGG',
                    'GGG'
                ],
                {
                    G: 'alexscaves:guano'
                }
            ).id( 'forge_frontier:shaped/guano_block' )
    }
)