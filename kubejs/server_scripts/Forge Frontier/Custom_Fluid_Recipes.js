	ServerEvents.recipes(event => 
        {
            // Lime Juice Recipe
            event.custom({
                type: 'create:compacting',
                ingredients: [
                    {
                        item: 'collectorsreap:lime_slice',
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:lime_juice',
                        amount: 125
                    },
                ],
            }).id('forge_frontier:compacting/lime_juice')

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
                        fluid: 'create_dd:vanilla_milkshake',
                        amount: 250
                    },
                    {
                        fluid: 'create_dd:chocolate_milkshake',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'forge_frontier:neapolitan_milkshake',
                        amount: 250
                    }
                ],
            }).id('forge_frontier:mixing/neapolitan_milkshake'); 
    }
)