ServerEvents.recipes(event => 
    {
        // Mechanical Extruder Recipe
            event.remove({ id: 'create_mechanical_extruder:crafting/mechanical_extruder'})
            event.custom({
            type: 'create:sequenced_assembly',
            ingredient: {
                item: 'createcobblestone:mechanical_generator'
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
                        item: 'createcobblestone:mechanical_generator'
                    },
                    {
                        item: 'create_dd:hydraulic_press'
                    }
                ],
                results: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    }
                ]
                },
                {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    },
                    {
                        item: 'create_dd:chromatic_compound'
                    }
                ],
                results: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    }
                ],
                },
                {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    },
                    {
                        item: 'create_dd:shadow_steel'
                    }
                ],
                results: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    }
                ],  
                },
                {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    },
                    {
                        item: 'create_dd:refined_radiance'
                    }
                ],
                results: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    }
                ],  
                },                
                {
                    type: 'create:deploying',
                    ingredients: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    },
                    {
                        item: 'minecraft:glass'
                    }
                    ],
                    results: [
                    {
                        item: 'createcobblestone:mechanical_generator'
                    }
                    ]
                }
            ],
            transitionalItem: {
                item: 'createcobblestone:mechanical_generator'
            }
            }).id('forge_frontier:sequenced_assembly/mechanical_extruder');
    }
)