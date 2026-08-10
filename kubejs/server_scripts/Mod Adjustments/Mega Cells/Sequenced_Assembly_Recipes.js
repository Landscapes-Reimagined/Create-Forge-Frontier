ServerEvents.recipes(event => 
    {
            // Accumulation Processor Recipe
                event.remove({ id: 'megacells:inscriber/accumulation_processor' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'ae2:printed_silicon'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_accumulation_processor'
                    },
                    sequence: [
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: 'forge_frontier:incomplete_accumulation_processor'
                            },
                            {
                            item: 'megacells:printed_accumulation_processor'
                            }
                        ],
                        results: [
                            {
                            item: 'forge_frontier:incomplete_accumulation_processor'
                            }
                        ]
                        },
                        {
                        type: 'create:deploying',
                        ingredients: [
                            {
                            item: 'forge_frontier:incomplete_accumulation_processor'
                            },
                            {
                            item: 'minecraft:redstone'
                            }
                        ],
                        results: [
                            {
                            item: 'forge_frontier:incomplete_accumulation_processor'
                            }
                        ]
                        },
                        {
                        type: 'create:pressing',
                        ingredients: [
                            {
                            item: 'forge_frontier:incomplete_accumulation_processor'
                            }
                        ],
                        results: [
                            {
                            item: 'forge_frontier:incomplete_accumulation_processor'
                            }
                        ]
                        }
                    ],
                    results: [
                        {
                        item: 'megacells:accumulation_processor'
                        }
                    ],
                    loops: 1        

                }).id('forge_frontier:sequenced_assembly/accumulation_processor')

            // Printed Accumulation Processor Recipe
                event.remove({ id: 'megacells:inscriber/accumulation_processor_print' })
                event.remove({ id: 'expatternprovider:cutter/accumulation'})
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'megacells:sky_steel_ingot'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_printed_accumulation_processor'
                    },
                    sequence: [
                        {
                            keepHeldItem: true,
                            type: 'create:deploying',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_printed_accumulation_processor' },
                                { item: 'megacells:accumulation_processor_press'}
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_printed_accumulation_processor' }
                            ]
                        },
                        {
                            type: 'create:pressing',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_printed_accumulation_processor' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_printed_accumulation_processor' }
                            ]
                        }
                    ],
                    results: [
                        { item: 'megacells:printed_accumulation_processor' }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/printed_accumulation_processor');

            // Accumulation Processor Press Recipe
                event.remove({ id: 'megacells:inscriber/accumulation_processor_press' })
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                        item: 'ae2:singularity'
                    },
                    transitionalItem: {
                        item: 'forge_frontier:incomplete_accumulation_processor_press'
                    },
                    sequence: [
                        {
                            "keepHeldItem": true,
                            type: 'create:deploying',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_accumulation_processor_press' },
                                { item: 'ae2:engineering_processor_press' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_accumulation_processor_press' }
                            ]
                        },
                        {
                            type: 'create:deploying',
                            "keepHeldItem": true,
                            ingredients: [
                                { item: 'forge_frontier:incomplete_accumulation_processor_press' },
                                { item: 'ae2:logic_processor_press' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_accumulation_processor_press' }
                            ]
                        },
                        {
                            type: 'create:pressing',
                            ingredients: [
                                { item: 'forge_frontier:incomplete_accumulation_processor_press' }
                            ],
                            results: [
                                { item: 'forge_frontier:incomplete_accumulation_processor_press' }
                            ]
                        }
                    ],
                    results: [
                        { item: 'megacells:accumulation_processor_press' }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/accumulation_processor_press');

            // Accumulation Processor Press Dupe Recipe
                event.remove({ id: 'megacells:inscriber/accumulation_processor_press_extra' })
                event.custom({
                    type: "create:sequenced_assembly",
                    ingredient: {
                    item: "minecraft:iron_block"
                    },
                    transitionalItem: {
                    item: "forge_frontier:incomplete_accumulation_processor_press"
                    },
                    sequence: [
                    {
                        keepHeldItem: true,
                        type: "create:deploying",
                        ingredients: [
                        {
                            item: "forge_frontier:incomplete_accumulation_processor_press"
                        },
                        {
                            item: 'megacells:accumulation_processor_press'
                        }
                        ],
                        results: [
                        {
                            item: "forge_frontier:incomplete_accumulation_processor_press"
                        }
                        ]
                    },
                    {
                        type: "create:pressing",
                        ingredients: [
                        {
                            item: "forge_frontier:incomplete_accumulation_processor_press"
                        }
                        ],
                        results: [
                        {
                            item: "forge_frontier:incomplete_accumulation_processor_press"
                        }
                        ]
                    }
                    ],
                    results: [
                    {
                        item: 'megacells:accumulation_processor_press'
                    }
                    ],
                    loops: 1
                }).id('forge_frontier:sequenced_assembly/accumulation_processor_press_dupe')
    }
)