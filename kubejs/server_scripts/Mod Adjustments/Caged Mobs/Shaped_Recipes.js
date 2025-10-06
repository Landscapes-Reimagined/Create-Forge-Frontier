ServerEvents.recipes(event => 
    {
        // Creates New Mob Cage Recipe
            event.remove({ id: 'cagedmobs:crafting/mob_cage'})
            event.shaped(
                Item.of('cagedmobs:mob_cage'),
                [
                    ' A ',
                    'B B',
                    'CCC'
                ],
                {
                    A: 'minecraft:chain',
                    B: 'createaddition:iron_rod',
                    C: 'minecraft:iron_block'
                }
            ).id( 'forge_frontier:shaped/mob_cage' )

        // Creates New Hopping Mob Cage Recipe
            event.remove({ id: 'cagedmobs:crafting/hopping_mob_cage'})
            event.shaped(
                Item.of('cagedmobs:hopping_mob_cage'),
                [
                    '   ',
                    'ABA',
                    ' C '
                ],
                {
                    A: 'minecraft:redstone',
                    B: 'cagedmobs:mob_cage',
                    C: 'create:chute'
                }
            ).id( 'forge_frontier:shaped/hopping_mob_cage' )
    }
)