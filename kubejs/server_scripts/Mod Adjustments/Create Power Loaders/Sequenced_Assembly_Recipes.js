ServerEvents.recipes(event => 
    {
        // Empty Brass Chunk Loader Recipe
            event.remove({ id: 'create_power_loader:crafting/empty_brass_chunk_loader'})
                event.custom({
                    type: 'create:sequenced_assembly',
                    ingredient: {
                    item: 'create_power_loader:empty_andesite_chunk_loader'
                    },
                    loops: 5,
                    results: [
                    {
                        chance: 100,
                        item: 'create_power_loader:empty_brass_chunk_loader'
                    }
                    ],
                    sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        },
                        {
                            item: 'create_dd:blaze_gold'
                        }
                        ],
                        results: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        },
                        {
                            item: 'ad_astra:calorite_ingot'
                        }
                        ],
                        results: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        },
                        {
                            item: 'create_dd:mithril_ingot'
                        }
                        ],
                        results: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        }
                        ],
                        results: [
                        {
                            item: 'create_power_loader:empty_andesite_chunk_loader'
                        }
                        ]
                    }
                    ],
                    transitionalItem: {
                    item: 'create_power_loader:empty_andesite_chunk_loader'
                    }
                }).id('forge_frontier:sequenced_assembly/empty_brass_chunk_loader');

        // Brass Chunk Loader Recipe
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                item: 'create_power_loader:andesite_chunk_loader'
                },
                loops: 5,
                results: [
                {
                    chance: 100,
                    item: 'create_power_loader:brass_chunk_loader'
                }
                ],
                sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    },
                    {
                        item: 'create_dd:blaze_gold'
                    }
                    ],
                    results: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    }
                    ]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    },
                    {
                        item: 'ad_astra:calorite_ingot'
                    }
                    ],
                    results: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    }
                    ]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    },
                    {
                        item: 'create_dd:mithril_ingot'
                    }
                    ],
                    results: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    }
                    ]
                },
                {
                    type: 'create:pressing',
                    ingredients: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    }
                    ],
                    results: [
                    {
                        item: 'create_power_loader:andesite_chunk_loader'
                    }
                    ]
                }
                ],
                transitionalItem: {
                item: 'create_power_loader:andesite_chunk_loader'
                }
            }).id('forge_frontier:sequenced_assembly/brass_chunk_loader');
    }
)