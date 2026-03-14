ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'create_more_additions:totem2' })
        event.remove({ id: 'create_more_additions:totem1' })

        // Totem Body Recipe
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: "forge_frontier:totem_body_casing"
            },
            loops: 1,
            results: [
                {
                    item: "forge_frontier:totem_body"
                }
            ],
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_body_casing"
                        },
                        {
                            item: "minecraft:ghast_tear"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:incomplete_totem_body"
                        }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_body"
                        },
                        {
                            item: "create_more_additions:electrum_jewel"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:totem_body"
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: "forge_frontier:incomplete_totem_body"
            }
        }).id("forge_frontier:sequenced_assembly/totem_body")

        // Totem Body Casing Recipe
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: "create_more_additions:electrum_jewel"
            },
            loops: 1,
            results: [
                {
                    item: "forge_frontier:totem_body_casing"
                }
            ],
            sequence: [
                {
                    type: "create:cutting",
                    ingredients: [
                        {
                            item: "create_more_additions:electrum_jewel"
                        }
                    ],
                    processingTime: 50,
                    results: [
                        {
                            item: "forge_frontier:incomplete_totem_body_casing"
                        }
                    ]
                },
                {
                    type: "create:pressing",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_body_casing"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:totem_body_casing"
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: "forge_frontier:incomplete_totem_body_casing"
            }
        }).id("forge_frontier:sequenced_assembly/totem_body_casing")

        // Totem Head Recipe
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: "forge_frontier:totem_head_casing"
            },
            loops: 1,
            results: [
                {
                    item: "forge_frontier:totem_head"
                }
            ],
            sequence: [
                {
                    type: "create:filling",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_head"
                        },
                        {
                            amount: 250,
                            fluid: "create:potion",
                            nbt: "{Potion:\"minecraft:fire_resistance\"}"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:incomplete_totem_head"
                        }
                    ]
                },
                {
                    type: "create:filling",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_head"
                        },
                        {
                            amount: 250,
                            fluid: "create:potion",
                            nbt: "{Potion:\"minecraft:regeneration\"}"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:incomplete_totem_head"
                        }
                    ]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_head"
                        },
                        {
                            item: "create_more_additions:electrum_jewel"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:totem_head"
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: "forge_frontier:incomplete_totem_head"
            }
        }).id("forge_frontier:sequenced_assembly/totem_head")

        // Totem Head Casing Recipe
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: "createaddition:electrum_sheet"
            },
            loops: 1,
            results: [
                {
                    item: "forge_frontier:totem_head_casing"
                }
            ],
            sequence: [
                {
                    type: "create:cutting",
                    ingredients: [
                        {
                            item: "createaddition:electrum_sheet"
                        }
                    ],
                    processingTime: 50,
                    results: [
                        {
                            item: "forge_frontier:incomplete_totem_head_casing"
                        }
                    ]
                },
                {
                    type: "create:pressing",
                    ingredients: [
                        {
                            item: "forge_frontier:incomplete_totem_head_casing"
                        }
                    ],
                    results: [
                        {
                            item: "forge_frontier:incomplete_totem_head_casing"
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: "forge_frontier:incomplete_totem_head_casing"
            }
        }).id("forge_frontier:sequenced_assembly/totem_head_casing")

        // Totem of Undying Recipe
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: {
                item: "create_more_additions:incomplete_totem"
            },
            loops: 5,
            results: [
                {
                    item: "minecraft:totem_of_undying"
                }
            ],
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        {
                            item: "create_more_additions:incomplete_totem"
                        },
                        {
                            item: "create:experience_block"
                        }
                    ],
                    results: [
                        {
                            item: "create_more_additions:incomplete_totem"
                        }
                    ]
                }
            ],
            transitionalItem: {
                item: "forge_frontier:incomplete_totem_of_undying"
            }
        }).id("forge_frontier:sequenced_assembly/totem_of_undying")
    }
)