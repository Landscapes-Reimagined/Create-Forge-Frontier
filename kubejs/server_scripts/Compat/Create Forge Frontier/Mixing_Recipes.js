ServerEvents.recipes(event => 
    {
        // Chorus Fruit Pie Filling
            event.remove ({ id: 'createfood:create/mixing/chorus_fruit_pie_filling_fluid_from_mixing_heated'})
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'createfood:butter',
                    }, 
                    {
                        tag: 'forge:sugar'
                    },
                    {
                        tag: 'forge:sugar'
                    },
                    {
                        item: 'createfood:chorus_fruit_slice'
                    },
                    {
                        item: 'createfood:chorus_fruit_slice'
                    },
                    {
                        item: 'createfood:chorus_fruit_slice'
                    }
                ],
                results: [
                    {
                        fluid: 'createfood:chorus_fruit_pie_filling',
                        amount: 1000
                    }
                ], heatRequirement: "heated"
            }).id('forge_frontier:mixing/chorus_fruit_pie_filling');

        // Egg Grog
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluidTag: 'forge:milk',
                        amount: 1000
                    }, 
                    {
                        tag: 'forge:eggs'
                    },
                    {
                        tag: 'forge:crops/cabbage'
                    },
                    {
                        item: 'minecraft:sugar'
                    }
                ],
                results: [
                    {
                        fluid: 'brewinandchewin:egg_grog',
                        amount: 1000
                    }
                ],
            }).id('forge_frontier:mixing/egg_grog');

        // Dread Nog
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'brewinandchewin:egg_grog',
                        amount: 1000
                    }, 
                    {
                        item: 'minecraft:nether_wart'
                    },
                    {
                        item: 'minecraft:turtle_egg'
                    },
                    {
                        item: 'minecraft:fermented_spider_eye'
                    }
                ],
                results: [
                    {
                        fluid: 'brewinandchewin:dread_nog',
                        amount: 1000
                    },
                ], 
            }).id('forge_frontier:mixing/dread_nog');

        // Cheese Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'forge_frontier:lime_juice',
                        amount: 250
                    },
                    {
                        fluidTag: 'forge:milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:cheese',
                        amount: 250
                    }
                ],
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/cheese');

        // Adzuki Milk Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        item: 'neapolitan:roasted_adzuki_beans',
                    },
                    {
                        item: 'neapolitan:roasted_adzuki_beans',
                    },
                    {
                        fluidTag: 'forge:milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:adzuki_milk',
                        amount: 250
                    }
                ],
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/adzuki_milk');

        // Adzuki Milkshake Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        fluid: 'create_dd:cream',
                        amount: 250
                    },
                    {
                        fluid: 'forge_frontier:adzuki_milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:adzuki_milkshake',
                        amount: 250
                    }
                ],
            }).id('forge_frontier:mixing/adzuki_milkshake');
            
        // Pomegranate Milk Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        item: 'collectorsreap:pomegranate_slice',
                    },
                    {
                        item: 'collectorsreap:pomegranate_slice',
                    },
                    {
                        fluidTag: 'forge:milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:pomegranate_milk',
                        amount: 250
                    }
                ],
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/pomegranate_milk');
            
        // Pomegranate Milkshake Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        fluid: 'create_dd:cream',
                        amount: 250
                    },
                    {
                        fluid: 'forge_frontier:pomegranate_milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:pomegranate_milkshake',
                        amount: 250
                    }
                ],
            }).id('forge_frontier:mixing/pomegranate_milkshake'); 
            
        // Neapolitan Milkshake Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'create_dd:strawberry_milkshake',
                        amount: 250
                    },
                    {
                        item: 'neapolitan:dried_vanilla_pods',
                    },
                    {
                        item: 'neapolitan:dried_vanilla_pods',
                    },
                    {
                        fluid: 'create_dd:chocolate_milkshake',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:neapolitan_milkshake',
                        amount: 750
                    }
                ],
            }).id('forge_frontier:mixing/neapolitan_milkshake'); 
    }
)