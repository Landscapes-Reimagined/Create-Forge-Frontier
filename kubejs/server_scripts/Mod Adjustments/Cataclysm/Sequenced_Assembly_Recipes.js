ServerEvents.recipes(event => 
    {
        // Eye of Storm Recipe
            event.remove({ id: 'cataclysm:storm_eye'})
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:storm_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:conduit"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:sea_lantern"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "minecraft:water",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        }
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_storm')

        // Eye of Flame Recipe
            event.remove({ id: 'cataclysm:flame_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:flame_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "create:blaze_cake"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "ad_astra:ostrum_block"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "minecraft:lava",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_flame')

        // Eye of Void Recipe
            event.remove({ id: 'cataclysm:void_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:void_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:dragon_head"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:purpur_block"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "enlightened_end:ooze_fluid",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_void')

        // Eye of Monstrous Recipe
            event.remove({ id: 'cataclysm:monstrous_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:monstrous_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "create:sturdy_sheet"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "ad_astra:desh_block"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "minecraft:lava",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_monstrous')

        // Eye of Abyss
            event.remove({ id: 'cataclysm:abyss_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:abyss_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "create:shadow_steel"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:sea_lantern"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "create_dd:chromatic_waste", 
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_abyss')
            
        // Eye of Desert Recipe
            event.remove({ id: 'cataclysm:desert_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:desert_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:skeleton_skull"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:chiseled_sandstone"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "createmetallurgy:molten_brass",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_desert')

        // Eye of Curse Recipe
            event.remove({ id: 'cataclysm:cursed_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:cursed_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:dead_bush"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:blue_ice"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    fluid: "create:potion",
                                    nbt: {
                                    Potion: "minecraft:slow_falling"
                                    },
                                    amount: 1000
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_curse')

        // Eye of Mech
            event.remove({ id: 'cataclysm:mech_eye' })
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:ender_eye"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "cataclysm:mech_eye"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    item: "minecraft:redstone"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    tag: "ad_astra:steel_blocks"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                },
                                {
                                    amount: 1000,
                                    fluid: "minecraft:lava",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:ender_eye"
                            }
                        ]
                        },
                        {
                            type: "create:pressing",
                            ingredients: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:ender_eye"
                                }
                            ]
                        },
                    ],
                    transitionalItem: {
                        item: "minecraft:ender_eye"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/eye_of_mech')

    }
)