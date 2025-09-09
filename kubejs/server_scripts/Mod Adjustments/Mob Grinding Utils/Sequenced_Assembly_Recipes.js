ServerEvents.recipes(event => 
    {
	    // Dreadful Dirt Recipe
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:dirt"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "mob_grinding_utils:dreadful_dirt"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    item: "minecraft:rotten_flesh"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:dirt"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    item: "minecraft:bone"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:dirt"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    item: "minecraft:gunpowder"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:dirt"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    amount: 1000,
                                    fluid: "create_enchantment_industry:hyper_experience",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:dirt"
                            }
                        ]
                        },
                    ],
                    transitionalItem: {
                        item: "mob_grinding_utils:incomplete_dreadful_dirt"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/dreadful_dirt')

        // Dightful Dirt Recipe
            event.custom(
                {
                    type: "create:sequenced_assembly",
                    ingredient: {
                        item: "minecraft:dirt"
                    },
                    loops: 1,
                    results: [
                        {
                            item: "mob_grinding_utils:delightful_dirt"
                        }
                    ],
                    sequence: [
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    tag: "forge:eggs"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:dirt"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    item: "minecraft:feather"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:dirt"
                                }
                            ]
                        },
                        {
                            type: "create:deploying",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    item: "minecraft:leather"
                                }
                            ],
                            results: [
                                {
                                    item: "minecraft:dirt"
                                }
                            ]
                        },
                        {
                            type: "create:filling",
                            ingredients: [
                                {
                                    item: "minecraft:dirt"
                                },
                                {
                                    amount: 1000,
                                    fluid: "create_enchantment_industry:hyper_experience",
                                    nbt: {}
                                }
                        ],
                        results: [
                            {
                                item: "minecraft:dirt"
                            }
                        ]
                        },
                    ],
                    transitionalItem: {
                        item: "mob_grinding_utils:incomplete_delightful_dirt"
                    }
                }
            ).id('forge_frontier:sequenced_assembly/delightful_dirt')        

    }
)