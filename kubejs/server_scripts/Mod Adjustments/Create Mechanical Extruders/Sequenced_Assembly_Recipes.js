ServerEvents.recipes(event => 
    {
        // Mechanical Extruder Recipe
            event.remove({ id: 'create_mechanical_extruder:crafting/mechanical_extruder'})
            event.custom({
            type: 'create:sequenced_assembly',
            ingredient: {
                item: 'create_dd:stargaze_singularity_casing'
            },
            loops: 1,
            results: [
                {
                    chance: 100,
                    item: 'create_mechanical_extruder:mechanical_extruder'
                }
            ],
            sequence: [
                {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create_dd:stargaze_singularity_casing'
                    },
                    {
                        item: 'create:deployer'
                    }
                ],
                results: [
                    {
                        item: 'create_dd:stargaze_singularity_casing'
                    }
                ]
                },
                {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'create_dd:stargaze_singularity_casing'
                    },
                    {
                        item: 'create_dd:bronze_drill'
                    }
                ],
                results: [
                    {
                        item: 'create_dd:stargaze_singularity_casing'
                    }
                ]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                    {
                        item: 'create_dd:stargaze_singularity_casing'
                    },
                    {
                        item: 'minecraft:glass'
                    }
                    ],
                    results: [
                    {
                        item: 'create_dd:stargaze_singularity_casing'
                    }
                    ]
                }
            ],
            transitionalItem: {
                item: 'create_dd:stargaze_singularity_casing'
            }
            }).id('forge_frontier:sequenced_assembly/mechanical_extruder');
    }
)