ServerEvents.recipes(event => 
    {
        // Energetic Blaze Burner Recipe
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                    item: 'create:empty_blaze_burner'
                },
                loops: 1,
                results: [
                    {
                        chance: 100,
                        item: 'forgefrontiercore:energetic_blaze_burner'
                    }
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'create:empty_blaze_burner' },
                            { item: 'create_dd:netherite_casing' }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            { item: 'create:empty_blaze_burner' }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    },
                    {
                        type: 'create:filling',
                        ingredients: [
                            { item: 'create:empty_blaze_burner' },
                            {
                                amount: 1000,
                                fluid: 'minecraft:lava'
                            }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'create:empty_blaze_burner' },
                            { item: 'create_new_age:overcharged_diamond_wire' }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            { item: 'create:empty_blaze_burner' }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    },
                    {
                        type: 'create_new_age:energising',
                        energy_needed: 50000,
                        ingredients: [
                            { item: 'create:empty_blaze_burner' }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'create:empty_blaze_burner' },
                            { item: 'ae2:dense_energy_cell' }
                        ],
                        results: [
                            { item: 'create:empty_blaze_burner' }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'create:empty_blaze_burner'
                }
            }).id('forge_frontier:sequenced_assembly/energetic_blaze_burner');

        // Conveyor Boots Recipe
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                    item: 'create:copper_diving_boots'
                },
                loops: 3,
                results: [
                    {
                        chance: 100,
                        item: 'forgefrontiercore:conveyor_boots'
                    }
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' },
                            { item: 'create:belt_connector' }
                        ],
                        results: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' },
                            { item: 'create:iron_sheet' }
                        ],
                        results: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ],
                        results: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'forge_frontier:incomplete_conveyor_boots'
                }
            }).id('forge_frontier:sequenced_assembly/conveyor_boots');
    }
);  