ServerEvents.recipes(event => 
    {
        // Time Pouch Recipe
            event.remove({ id: 'gag:time_sand_pouch'})
            event.shaped(
                Item.of('gag:time_sand_pouch'),
                [
                    'GSG',
                    'LCL',
                    'LLL'
                ],
                {
                    G: 'minecraft:raw_gold_block',
                    S: 'minecraft:nautilus_shell',
                    L: 'minecraft:leather',
                    C: 'create_dd:refined_radiance'
                }
            ).id( 'forge_frontier:shaped/time_sand_pouch' )
    }
)