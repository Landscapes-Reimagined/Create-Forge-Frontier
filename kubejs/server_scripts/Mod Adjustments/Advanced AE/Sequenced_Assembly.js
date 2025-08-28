ServerEvents.recipes(event => 
    {
            // Quantum Processor Recipe
                event.remove({ id: 'advanced_ae:quantum_processor' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'ae2:printed_silicon'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_quantum_processor'
                    },
                    sequence: [
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: 'forge_frontier:incomplete_quantum_processor'
                            },
                            {
                            item: 'advanced_ae:printed_quantum_processor'
                            }
                        ],
                        results: [
                            {
                            item: 'forge_frontier:incomplete_quantum_processor'
                            }
                        ]
                        },
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: 'forge_frontier:incomplete_quantum_processor'
                            },
                            {
                            item: 'minecraft:redstone'
                            }
                        ],
                        results: [
                            {
                            item: 'forge_frontier:incomplete_quantum_processor'
                            }
                        ]
                        },
                        {
                        type: 'create:pressing',
                        ingredients: [
                            {
                            item: 'forge_frontier:incomplete_quantum_processor'
                            }
                        ],
                        results: [
                            {
                            item: 'forge_frontier:incomplete_quantum_processor'
                            }
                        ]
                        }
                    ],
                    results: [
                        {
                        item: 'advanced_ae:quantum_processor'
                        }
                    ],
                    loops: 1        

                }).id('forge_frontier:sequenced_assembly/quantum_processor')

            // Printed Quantum Circuit Recipe
                event.remove({ id: 'advanced_ae:quantum_processor_print' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'advanced_ae:quantum_alloy'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_printed_quantum_processor'
                    },
                    sequence: [
                        {
                            keepHeldItem: true,
                            type: 'create:deploying',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_printed_quantum_processor' },
                                { item: 'advanced_ae:quantum_processor_press'}
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_printed_quantum_processor' }
                            ]
                        },
                        {
                            type: 'create:pressing',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_printed_quantum_processor' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_printed_quantum_processor' }
                            ]
                        }
                    ],
                    results: [
                        { item: 'advanced_ae:printed_quantum_processor' }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/printed_quantum_processor');

            // Quantum Processor Press Recipe
                event.remove({ id: 'advanced_ae:quantum_processor_press' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'advanced_ae:quantum_infused_dust'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_quantum_processor_press'
                    },
                    sequence: [
                        {
                            "keepHeldItem": true,
                            type: 'create:deploying',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_quantum_processor_press' },
                                { item: 'ae2:engineering_processor_press' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_quantum_processor_press' }
                            ]
                        },
                        {
                            type: 'create:deploying',
                            "keepHeldItem": true,
                            ingredients: [
                                { item: 'forge_frontier:incomplete_quantum_processor_press' },
                                { item: 'ae2:logic_processor_press' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_quantum_processor_press' }
                            ]
                        },
                        {
                            type: 'create:pressing',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_quantum_processor_press' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_quantum_processor_press' }
                            ]
                        }
                    ],
                    results: [
                        { item: 'advanced_ae:quantum_processor_press' }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/quantum_processor_press');

            // Quantum Processor Press Dupe Recipe
                event.remove({ id: 'advanced_ae:quantum_processor_press_from_iron' })
                event.custom({
                    type: "create:sequenced_assembly",
                    ingredient: {
                    item: "minecraft:iron_block"
                    },
                    transitionalItem: {
                    item: "forge_frontier:incomplete_quantum_processor_press"
                    },
                    sequence: [
                    {
                        keepHeldItem: true,
                        type: "create:deploying",
                        ingredients: [
                        {
                            item: "forge_frontier:incomplete_quantum_processor_press"
                        },
                        {
                            item: 'advanced_ae:quantum_processor_press'
                        }
                        ],
                        results: [
                        {
                            item: "forge_frontier:incomplete_quantum_processor_press"
                        }
                        ]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [
                        {
                            item: "forge_frontier:incomplete_quantum_processor_press"
                        }
                        ],
                        results: [
                        {
                            item: "forge_frontier:incomplete_quantum_processor_press"
                        }
                        ]
                    }
                    ],
                    results: [
                    {
                        item: 'advanced_ae:quantum_processor_press'
                    }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/quantum_processor_press_dupe')
    }
)