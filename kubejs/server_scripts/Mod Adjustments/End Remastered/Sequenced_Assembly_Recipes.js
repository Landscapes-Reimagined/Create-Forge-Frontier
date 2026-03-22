ServerEvents.recipes(event => {

    const unfinishedEyes = [
        {
            id: 'black_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_black_eye',
            unfinished: 'forge_frontier:unfinished_black_eye',
            loops: 1,
            deploys: [
                'forge_frontier:blackbeards_musket',
                'forge_frontier:cursed_cannon_ball',
                'forge_frontier:blackbeards_cutlass'
            ]
        },
        {
            id: 'cold_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_cold_eye',
            unfinished: 'forge_frontier:unfinished_cold_eye',
            loops: 1,
            deploys: [
                'ad_astra:permafrost',
                'cataclysm:black_steel_block',
                'cataclysm:cursium_ingot',
                'cataclysm:cursed_eye'
            ]
        },
        {
            id: 'corrupted_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_corrupted_eye',
            unfinished: 'forge_frontier:unfinished_corrupted_eye',
            loops: 1,
            deploys: [
                'createcompression:compressed_gold_2x',
                'minecraft:diamond_block',
                'minecraft:emerald_block'
            ]
        },
        {
            id: 'nether_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_nether_eye',
            unfinished: 'forge_frontier:unfinished_nether_eye',
            loops: 1,
            deploys: [
                'forge_frontier:hades_bident',
                'forge_frontier:ancient_obol',
                'forge_frontier:cerberus_fang',
                'minecraft:red_nether_bricks'
            ]
        },
        {
            id: 'old_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_old_eye',
            unfinished: 'forge_frontier:unfinished_old_eye',
            loops: 1,
            deploys: [
                'forge_frontier:ancient_winged_sun',
                'forge_frontier:ra_scepter',
                'cataclysm:desert_eye',
                'cataclysm:remnant_skull',
                'minecraft:sandstone'
            ]
        },
        {
            id: 'cursed_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_cursed_eye',
            unfinished: 'forge_frontier:unfinished_cursed_eye',
            loops: 1,
            deploys: [
                'forge_frontier:golden_tusks_crown',
                'forge_frontier:brute_warlord_axe',
                'forge_frontier:crimson_pact_totem',
                'minecraft:netherite_ingot'
            ]
        },
        {
            id: 'evil_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_evil_eye',
            unfinished: 'forge_frontier:unfinished_evil_eye',
            loops: 1,
            deploys: [
                'artifacts:villager_hat',
                'betterarcheology:vase_green',
                'betterarcheology:villager_fossil_head',
                'betterarcheology:vase'
            ]
        },
        {
            id: 'guardian_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_guardian_eye',
            unfinished: 'forge_frontier:unfinished_guardian_eye',
            loops: 1,
            deploys: [
                'oceansdelight:cabbage_wrapped_elder_guardian',
                'oceansdelight:guardian_soup'
            ]
        },
        {
            id: 'wither_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_wither_eye',
            unfinished: 'forge_frontier:unfinished_wither_eye',
            loops: 1,
            deploys: [
                'minecraft:nether_star',
                'minecraft:wither_skeleton_skull',
                'minecraft:soul_sand'
            ]
        },
        {
            id: 'undead_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_undead_eye',
            unfinished: 'forge_frontier:unfinished_undead_eye',
            loops: 1,
            deploys: [
                'deeperdarker:warden_carapace',
                'deeperdarker:heart_of_the_deep',
                'silentsdelight:warden_ear',
                'minecraft:echo_shard',
                'silentsdelight:warden_heart',
                'apotheosis:warden_tendril',
                'minecraft:sculk_catalyst'
            ]
        },
        {
            id: 'aetheric_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_unfinished_aetheric_eye',
            unfinished: 'forge_frontier:unfinished_aetheric_eye',
            loops: 1,
            deploys: [
                'cataclysm:essence_of_the_storm',
                'cataclysm:storm_eye',
                'cataclysm:lacrima'
            ]
        },
        {
            id: 'cryptic_eye_base',
            input: 'minecraft:ender_eye',
            incomplete: 'forge_frontier:incomplete_unfinished_cryptic_eye',
            unfinished: 'forge_frontier:unfinished_cryptic_eye',
            loops: 3,
            deploys: [
                'minecraft:amethyst_shard',
                'minecraft:glowstone_dust'
            ]
        }
    ]

    unfinishedEyes.forEach(eye => {
        const sequence = eye.deploys.map((item, index) => ({
            type: 'create:deploying',
            ingredients: [
                { item: index === 0 ? eye.input : eye.incomplete },
                { item: item }
            ],
            results: [{ item: index === eye.deploys.length - 1 ? eye.unfinished : eye.incomplete }]
        }))

        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: eye.input },
            transitionalItem: { item: eye.incomplete },
            loops: eye.loops,
            results: [{ item: eye.unfinished }],
            sequence: sequence
        }).id(`forge_frontier:sequenced_assembly/${eye.id}`)
    })

    const finishedEyes = [
        {
            id: 'lost_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_lost_eye',
            output: 'endrem:lost_eye',
            loops: 1,
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'endrem:undead_soul' },
                        { item: 'minecraft:ancient_debris' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'forge_frontier:incomplete_lost_eye' },
                        { item: 'forge_frontier:deep_forge_chisel' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'forge_frontier:incomplete_lost_eye' },
                        { item: 'cataclysm:infernal_forge' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'forge_frontier:incomplete_lost_eye' },
                        { item: 'cataclysm:monstrous_horn' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'forge_frontier:incomplete_lost_eye' },
                        { item: 'cataclysm:monstrous_eye' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'forge_frontier:incomplete_lost_eye' }],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'forge_frontier:incomplete_lost_eye' }],
                    results: [{ item: 'forge_frontier:incomplete_lost_eye' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'forge_frontier:incomplete_lost_eye' }],
                    results: [{ item: 'endrem:lost_eye' }]
                }
            ]
        },
        {
            id: 'rogue_eye',
            input: 'endrem:undead_soul',
            incomplete: 'forge_frontier:incomplete_rogue_eye',
            output: 'endrem:rogue_eye',
            loops: 3,
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'endrem:undead_soul' },
                        { item: 'create:brass_block' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_rogue_eye' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'forge_frontier:incomplete_rogue_eye' },
                        { item: 'create:precision_mechanism' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_rogue_eye' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: 'forge_frontier:incomplete_rogue_eye' },
                        { item: 'create_dd:mithril_ingot' }
                    ],
                    results: [{ item: 'forge_frontier:incomplete_rogue_eye' }]
                }
            ]
        }
    ]

    finishedEyes.forEach(recipe => {
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: recipe.input },
            transitionalItem: { item: recipe.incomplete },
            loops: recipe.loops,
            results: [{ item: recipe.output }],
            sequence: recipe.sequence
        }).id(`forge_frontier:sequenced_assembly/${recipe.id}`)
    })

})
