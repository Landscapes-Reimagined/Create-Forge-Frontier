ServerEvents.recipes(event => 
    {
            // Stress Circuit Board Recipe
                event.remove({ id: 'appliedcreate:inscriber/stress_circuit_board' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'create:andesite_alloy'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_stress_circuit_board'
                    },
                    sequence: [
                        {
                            keepHeldItem: true,
                            type: 'create:deploying',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_stress_circuit_board' },
                                { item: "ae2:engineering_processor_press"}
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_stress_circuit_board' }
                            ]
                        },
                        {
                            type: 'create:pressing',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_stress_circuit_board' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_stress_circuit_board' }
                            ]
                        }
                    ],
                    results: [
                        { item: "appliedcreate:stress_circuit_board" }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/stress_circuit_board');

            // Stress Processor Recipe
                event.remove({ id: 'appliedcreate:inscriber/stress_processor' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'ae2:printed_silicon'
                    },
                    transitionalItem: {
                        item: "forge_frontier:incomplete_stress_processor"
                    },
                    sequence: [
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: "forge_frontier:incomplete_stress_processor"
                            },
                            {
                            item: "appliedcreate:stress_circuit_board"
                            }
                        ],
                        results: [
                            {
                            item: "forge_frontier:incomplete_stress_processor"
                            }
                        ]
                        },
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: "forge_frontier:incomplete_stress_processor"
                            },
                            {
                            item: 'minecraft:redstone'
                            }
                        ],
                        results: [
                            {
                            item: "forge_frontier:incomplete_stress_processor"
                            }
                        ]
                        },
                        {
                        type: 'create:pressing',
                        ingredients: [
                            {
                            item: "forge_frontier:incomplete_stress_processor"
                            }
                        ],
                        results: [
                            {
                            item: "forge_frontier:incomplete_stress_processor"
                            }
                        ]
                        }
                    ],
                    results: [
                        {
                        item: "appliedcreate:stress_processor"
                        }
                    ],
                    loops: 1        

                }).id('forge_frontier:sequenced_assembly/stress_processor')


            // Advanced Stress Circuit Board Recipe
                event.remove({ id: 'appliedcreate:inscriber/advanced_stress_circuit_board' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: "create:brass_ingot"
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_advanced_stress_circuit_board'
                    },
                    sequence: [
                        {
                            keepHeldItem: true,
                            type: 'create:deploying',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_advanced_stress_circuit_board' },
                                { item: "ae2:engineering_processor_press"}
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_advanced_stress_circuit_board' }
                            ]
                        },
                        {
                            type: 'create:pressing',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_advanced_stress_circuit_board' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_advanced_stress_circuit_board' }
                            ]
                        }
                    ],
                    results: [
                        { item: "appliedcreate:advanced_stress_circuit_board" }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/advanced_stress_circuit_board');

            // Advanced_stress Processor Recipe
                event.remove({ id: 'appliedcreate:inscriber/advanced_stress_processor' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'ae2:printed_silicon'
                    },
                    transitionalItem: {
                        item: "forge_frontier:incomplete_advanced_stress_processor"
                    },
                    sequence: [
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: "forge_frontier:incomplete_advanced_stress_processor"
                            },
                            {
                            item: "appliedcreate:advanced_stress_circuit_board"
                            }
                        ],
                        results: [
                            {
                            item: "forge_frontier:incomplete_advanced_stress_processor"
                            }
                        ]
                        },
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: "forge_frontier:incomplete_advanced_stress_processor"
                            },
                            {
                            item: 'minecraft:redstone'
                            }
                        ],
                        results: [
                            {
                            item: "forge_frontier:incomplete_advanced_stress_processor"
                            }
                        ]
                        },
                        {
                        type: 'create:pressing',
                        ingredients: [
                            {
                            item: "forge_frontier:incomplete_advanced_stress_processor"
                            }
                        ],
                        results: [
                            {
                            item: "forge_frontier:incomplete_advanced_stress_processor"
                            }
                        ]
                        }
                    ],
                    results: [
                        {
                        item: "appliedcreate:advanced_stress_processor"
                        }
                    ],
                    loops: 1        

                }).id('forge_frontier:sequenced_assembly/advanced_stress_processor')                
    }
)