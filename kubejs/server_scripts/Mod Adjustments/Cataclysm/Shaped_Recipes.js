ServerEvents.recipes(event => 
    {
        // Eye of Storm Recipe
            event.remove({ id: 'cataclysm:storm_eye'})
            event.shaped(
                Item.of('cataclysm:storm_eye'),
                [
                    'PRP',
                    'DCD',
                    'cWc'
                ],
                {
                    P: 'minecraft:prismarine_shard',
                    R: 'minecraft:lightning_rod',
                    D: 'minecraft:diamond',
                    C: 'minecraft:conduit',
                    c: 'minecraft:prismarine_crystals',
                    W: 'minecraft:water_bucket'
                }
            ).id( 'forge_frontier:shaped/storm_eye' )
    }
)