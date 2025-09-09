ServerEvents.recipes(event => 
    {
        // Vanilla Milk Recipe
            event.remove({ id: 'create_dd:mixing/vanilla' })
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        item: 'neapolitan:dried_vanilla_pods',
                    },
                    {
                        item: 'neapolitan:dried_vanilla_pods',
                    },
                    {
                        fluidTag: 'forge:milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'create_dd:vanilla',
                        amount: 250
                    }
                ],
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/vanilla_milk');

        // Strawberry Milk Recipe
            event.remove({ id: 'create_dd:mixing/strawberry' })
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'minecraft:sugar',
                    },
                    {
                        item: 'neapolitan:strawberries'
                    },
                    {
                        item: 'neapolitan:strawberries'
                    },
                    {
                        fluidTag: 'forge:milk',
                        amount: 250
                    }
                ],
                results: [
                    {
                        fluid: 'create_dd:strawberry',
                        amount: 250
                    }
                ],
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/strawberry_milk');	
    }
)