ServerEvents.recipes(event => 
    {
        // Chunk Loader Recipes
            // Basic Chunk Loader - 3x3
            // Shadow Steel Upgrade

            event.remove({ output: 'chunkloaders:basic_chunk_loader' })
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                    item: 'chunkloaders:single_chunk_loader'
                },
                loops: 3,
                results: [
                    {
                        chance: 100,
                        item: 'chunkloaders:basic_chunk_loader'
                    }
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            },
                            {
                                item: 'create:shaft'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            },
                            {
                                item: 'create_dd:shadow_steel'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            },
                            {
                                item: 'create_dd:shadow_steel_casing'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_basic_chunk_loader'
                            }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'forge_frontier:incomplete_basic_chunk_loader'
                }
            }).id('forge_frontier:sequenced_assembly/basic_chunk_loader')


            // Advanced Chunk Loader - 5x5
            // Refined Radiance Upgrade

            event.remove({ output: 'chunkloaders:advanced_chunk_loader' })
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                    item: 'chunkloaders:basic_chunk_loader'
                },
                loops: 5,
                results: [
                    {
                        chance: 100,
                        item: 'chunkloaders:advanced_chunk_loader'
                    }
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            },
                            {
                                item: 'create:shaft'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            }
                        ]
                    },                    
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            },
                            {
                                item: 'create_dd:refined_radiance'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            },
                            {
                                item: 'create_dd:refined_radiance_casing'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_advanced_chunk_loader'
                            }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'forge_frontier:incomplete_advanced_chunk_loader'
                }
            }).id('forge_frontier:sequenced_assembly/advanced_chunk_loader')


            // Ultimate Chunk Loader - 7x7
            // Shadow Radiance Upgrade

            event.remove({ output: 'chunkloaders:ultimate_chunk_loader' })
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                    item: 'chunkloaders:advanced_chunk_loader'
                },
                loops: 7,
                results: [
                    {
                        chance: 100,
                        item: 'chunkloaders:ultimate_chunk_loader'
                    }
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            },
                            {
                                item: 'create:shaft'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            }
                        ]
                    },                    
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            },
                            {
                                item: 'createqol:shadow_radiance'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            },
                            {
                                item: 'createqol:shadow_radiance_casing'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            }
                        ],
                        results: [
                            {
                                item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                            }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'forge_frontier:incomplete_ultimate_chunk_loader'
                }
            }).id('forge_frontier:sequenced_assembly/ultimate_chunk_loader')
    }
)