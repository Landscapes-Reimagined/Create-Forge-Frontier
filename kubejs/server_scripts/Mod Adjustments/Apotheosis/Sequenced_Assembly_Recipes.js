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
            blocks: ['alexscaves:galena']
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
                results: [{ item: mat.base, count: 2 },],
                sequence: [
                    {
                        type: 'create:filling',
                        ingredients: [
                            { item: mat.base },
                            { fluid: 'create_enchantment_industry:experience', amount: 250 }
                        ],
                        results: [{ item: mat.incomplete }]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: mat.incomplete },
                            { item: block }
                        ],
                        results: [{ item: mat.incomplete }]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: mat.incomplete },
                            { item: 'create_dd:chromatic_compound' }
                        ],
                        results: [{ item: mat.incomplete }]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [{ item: mat.incomplete }],
                        results: [{ item: mat.incomplete }]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [{ item: mat.incomplete }],
                        results: [{ item: mat.base, count: 2 }]
                    }
                ]
            }).id(`forge_frontier:sequenced_assembly/${name}_duplication_${blockName}_${index}`)
        })
    })

})