ServerEvents.recipes(event => 
    {
        // Hyper Experience Block Recipe
            event.shaped(
                Item.of('create_enchantment_industry:hyper_experience_block'),
                [
                    'NNN',
                    'NNN',
                    'NNN'
                ],
                {
                    N: 'create_enchantment_industry:hyper_experience_nugget'
                }
            ).id('forge_frontier:shaped/hyper_experience_block')
                    
        // Echo Shard Block Recipe
            event.shaped(
                Item.of('forge_frontier:echo_shard_block'),
                [
                    'EEE',
                    'EEE',
                    'EEE'
                ],
                {
                    E: 'minecraft:echo_shard'
                }
            ).id('forge_frontier:shaped/echo_shard_block')

        // Blaze Rod Block Recipe
            event.shaped(
                Item.of('forge_frontier:blaze_block'),
                [
                    'BBB',
                    'BBB',
                    'BBB'
                ],
                {
                    B: 'minecraft:blaze_rod'
                }
            ).id('forge_frontier:shaped/blaze_block')

        // Leather Elytra Recipe
            event.shaped(
                Item.of('forge_frontier:leather_elytra'),
                [
                    'LLL',
                    'LLL',
                    'L L'
                ],
                {
                    L: 'minecraft:leather'
                }
            ).id( 'forge_frontier:shaped/leather_elytra' )
    }
)