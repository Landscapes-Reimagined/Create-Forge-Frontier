ServerEvents.recipes(event => {

    const materials = [
        {
            base: 'apotheosis:common_material',
            incomplete: 'forge_frontier:incomplete_common_material',
            blocks: ['minecraft:andesite']
        },
        {
            base: 'apotheosis:uncommon_material',
            incomplete: 'forge_frontier:incomplete_uncommon_material',
            blocks: ['minecraft:netherrack']
        },
        {
            base: 'apotheosis:rare_material',
            incomplete: 'forge_frontier:incomplete_rare_material',
            blocks: [
                'ad_astra:glacio_stone',
                'deeperdarker:sculk_stone'
            ]
        },
        {
            base: 'apotheosis:epic_material',
            incomplete: 'forge_frontier:incomplete_epic_material',
            blocks: ['minecraft:end_stone']
        },
        {
            base: 'apotheosis:mythic_material',
            incomplete: 'forge_frontier:incomplete_mythic_material',
            blocks: ['alexscaves:acidic_radrock']
        }
    ]

    materials.forEach(mat => {
        const name = mat.base.split(':')[1]

        mat.blocks.forEach((block, index) => {
            const blockName = block.split(':')[1]

            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: { item: mat.base },
                transitionalItem: { item: mat.incomplete },
                loops: 1,
                results: [
                    { item: mat.base, count: 2 },
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: mat.base },
                            { item: block }
                        ],
                        results: [
                            { item: mat.incomplete }
                        ]
                    },
                    {
                        type: 'create:filling',
                        ingredients: [
                            { item: mat.incomplete },
                            {
                                fluid: 'create_enchantment_industry:experience',
                                amount: 250
                            }
                        ],
                        results: [
                            { item: mat.incomplete }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: mat.incomplete },
                            { item: 'create_dd:chromatic_compound' }
                        ],
                        results: [
                            { item: mat.incomplete }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            { item: mat.incomplete }
                        ],
                        results: [
                            { item: mat.incomplete }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            { item: mat.incomplete }
                        ],
                        results: [
                            { item: mat.base, count: 2 }
                        ]
                    }
                ]
            }).id(`forge_frontier:sequenced_assembly/${name}_duplication_${blockName}_${index}`)
        })
    })


    // Apotheosis Boss Summoner

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'create:precision_mechanism'
        },
        transitionalItem: {
            item: 'forge_frontier:incomplete_boss_summoner'
        },
        loops: 3,
        results: [
            {
                item: 'apotheosis:boss_summoner'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    },
                    {
                        item: 'apotheosis:gem_dust'
                    }
                ],
                results: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    },
                    {
                        item: 'apotheosis:common_material'
                    }
                ],
                results: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    },
                    {
                        item: 'apotheosis:uncommon_material'
                    }
                ],
                results: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    },
                    {
                        item: 'create:brass_sheet'
                    }
                ],
                results: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    }
                ],
                results: [
                    {
                        item: 'forge_frontier:incomplete_boss_summoner'
                    }
                ]
            }
        ]
    }).id('forge_frontier:sequenced_assembly/apotheosis/boss_summoner')

})