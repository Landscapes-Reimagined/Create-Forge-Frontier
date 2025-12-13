ServerEvents.recipes(event => {

    // --------------------
    // Eye of Storm
    // --------------------
    event.remove({ id: 'cataclysm:storm_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_storm_eye" },
        loops: 1,
        results: [{ item: "cataclysm:storm_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "minecraft:conduit" }],
                results: [{ item: "cataclysm:incomplete_storm_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_storm_eye" }, { item: "minecraft:sea_lantern" }],
                results: [{ item: "cataclysm:incomplete_storm_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_storm_eye" },
                    { fluid: "minecraft:water", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_storm_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_storm_eye" }],
                results: [{ item: "cataclysm:storm_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_storm')


    // --------------------
    // Eye of Flame
    // --------------------
    event.remove({ id: 'cataclysm:flame_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_flame_eye" },
        loops: 1,
        results: [{ item: "cataclysm:flame_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "create:blaze_cake" }],
                results: [{ item: "cataclysm:incomplete_flame_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_flame_eye" }, { item: "ad_astra:ostrum_block" }],
                results: [{ item: "cataclysm:incomplete_flame_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_flame_eye" },
                    { fluid: "minecraft:lava", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_flame_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_flame_eye" }],
                results: [{ item: "cataclysm:flame_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_flame')


    // --------------------
    // Eye of Void
    // --------------------
    event.remove({ id: 'cataclysm:void_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_void_eye" },
        loops: 1,
        results: [{ item: "cataclysm:void_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "minecraft:dragon_head" }],
                results: [{ item: "cataclysm:incomplete_void_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_void_eye" }, { item: "minecraft:purpur_block" }],
                results: [{ item: "cataclysm:incomplete_void_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_void_eye" },
                    { fluid: "enlightened_end:ooze_fluid", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_void_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_void_eye" }],
                results: [{ item: "cataclysm:void_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_void')


    // --------------------
    // Eye of Monstrous
    // --------------------
    event.remove({ id: 'cataclysm:monstrous_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_monstrous_eye" },
        loops: 1,
        results: [{ item: "cataclysm:monstrous_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "create:sturdy_sheet" }],
                results: [{ item: "cataclysm:incomplete_monstrous_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_monstrous_eye" }, { item: "ad_astra:desh_block" }],
                results: [{ item: "cataclysm:incomplete_monstrous_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_monstrous_eye" },
                    { fluid: "minecraft:lava", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_monstrous_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_monstrous_eye" }],
                results: [{ item: "cataclysm:monstrous_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_monstrous')


    // --------------------
    // Eye of Abyss
    // --------------------
    event.remove({ id: 'cataclysm:abyss_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_abyss_eye" },
        loops: 1,
        results: [{ item: "cataclysm:abyss_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "create_dd:shadow_steel" }],
                results: [{ item: "cataclysm:incomplete_abyss_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_abyss_eye" }, { item: "minecraft:sea_lantern" }],
                results: [{ item: "cataclysm:incomplete_abyss_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_abyss_eye" },
                    { fluid: "create_dd:chromatic_waste", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_abyss_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_abyss_eye" }],
                results: [{ item: "cataclysm:abyss_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_abyss')


    // --------------------
    // Eye of Desert
    // --------------------
    event.remove({ id: 'cataclysm:desert_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_desert_eye" },
        loops: 1,
        results: [{ item: "cataclysm:desert_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "minecraft:skeleton_skull" }],
                results: [{ item: "cataclysm:incomplete_desert_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_desert_eye" }, { item: "minecraft:chiseled_sandstone" }],
                results: [{ item: "cataclysm:incomplete_desert_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_desert_eye" },
                    { fluid: "createmetallurgy:molten_brass", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_desert_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_desert_eye" }],
                results: [{ item: "cataclysm:desert_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_desert')


    // --------------------
    // Eye of Curse
    // --------------------
    event.remove({ id: 'cataclysm:cursed_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_cursed_eye" },
        loops: 1,
        results: [{ item: "cataclysm:cursed_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "minecraft:dead_bush" }],
                results: [{ item: "cataclysm:incomplete_cursed_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_cursed_eye" }, { item: "minecraft:blue_ice" }],
                results: [{ item: "cataclysm:incomplete_cursed_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_cursed_eye" },
                    { fluid: "create:potion", amount: 1000, nbt: { Potion: "minecraft:slow_falling" } }
                ],
                results: [{ item: "cataclysm:incomplete_cursed_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_cursed_eye" }],
                results: [{ item: "cataclysm:cursed_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_curse')


    // --------------------
    // Eye of Mech
    // --------------------
    event.remove({ id: 'cataclysm:mech_eye' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:ender_eye" },
        transitionalItem: { item: "cataclysm:incomplete_mech_eye" },
        loops: 1,
        results: [{ item: "cataclysm:mech_eye" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [{ item: "minecraft:ender_eye" }, { item: "minecraft:redstone" }],
                results: [{ item: "cataclysm:incomplete_mech_eye" }]
            },
            {
                type: "create:deploying",
                ingredients: [{ item: "cataclysm:incomplete_mech_eye" }, { tag: "ad_astra:steel_blocks" }],
                results: [{ item: "cataclysm:incomplete_mech_eye" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "cataclysm:incomplete_mech_eye" },
                    { fluid: "minecraft:lava", amount: 1000 }
                ],
                results: [{ item: "cataclysm:incomplete_mech_eye" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "cataclysm:incomplete_mech_eye" }],
                results: [{ item: "cataclysm:mech_eye" }]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/eye_of_mech')

});
