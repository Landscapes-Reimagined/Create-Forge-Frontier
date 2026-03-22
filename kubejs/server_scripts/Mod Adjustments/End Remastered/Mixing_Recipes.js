ServerEvents.recipes(event => 
    {
        // Undead Soul Recipe
            event.remove({ id: 'endrem:undead_eye'})
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                    item: "create_enchantment_industry:hyper_experience_bottle",
                    },
                    {
                    item: "create_enchantment_industry:hyper_experience_bottle",
                    },
                    {
                    item: "create_enchantment_industry:hyper_experience_bottle",
                    },
                    {
                    item: "create_enchantment_industry:hyper_experience_bottle",
                    },
                    {
                    item: "create_enchantment_industry:hyper_experience_bottle",
                    },
                    {
                    item: "minecraft:phantom_membrane"
                    },
                    {
                    item: "minecraft:bone"
                    },
                    {
                    item: "minecraft:rotten_flesh"
                    },
                    {
                    item: "minecraft:ghast_tear"
                    },
                    {
                    item: "wstweaks:fragment"
                    },
                    {
                    item: "minecraft:cobweb"
                    },
                    {
                    item: "quark:soul_bead"
                    }
                ],
                results: [
                    {
                    item: "endrem:undead_soul",
                    count: 1
                    }
                ],  
                heatRequirement: "superheated"
                }).id('forge_frontier:mixing/undead_soul')

        // Witch Eye Recipe
            event.remove({ id: 'endrem:witch_eye'})
            event.custom({
                type: "create:mixing",
                ingredients: [
                {
                    fluid: "create:potion",
                    nbt: {
                    Potion: "alexsmobs:long_lava_vision"
                    },
                    amount: 1000
                },
                {
                    item: "create_dd:blaze_gold_block"
                },
                {
                    fluid: "create:potion",
                    nbt: {
                    Potion: "alexsmobs:strong_soulsteal"
                    },
                    amount: 1000
                },
                {
                    item: "endrem:undead_soul"
                }
                ],
                results: [
                {
                    item: "endrem:witch_eye",
                    count: 1
                }
                ],  
                heatRequirement: "superheated"
            }).id('forge_frontier:mixing/witch_eye')

            event.custom({
                    type: 'create:mixing',
                    ingredients: [
                        { item: 'forge_frontier:unfinished_corrupted_eye' },
                        { 
                            fluid: "create:potion",
                            nbt: {
                            Potion: "minecraft:weakness"
                            },
                            amount: 1000
                        },
                    ],
                    results: [
                        { item: 'endrem:corrupted_eye' }
                    ]
                }).id('forge_frontier:mixing/corrupted_eye')

                event.custom({
                    type: 'create:mixing',
                    ingredients: [
                        Fluid.of('create_enchantment_industry:experience', 250).toJson(),
                        { item: 'minecraft:totem_of_undying' },
                        { item: 'minecraft:blaze_powder' },
                        { item: 'minecraft:glowstone_dust' }
                    ],
                    results: [
                        { item: 'forge_frontier:infused_totem' }
                    ]
                }).id('forge_frontier:mixing/infused_totem')            
    }
)