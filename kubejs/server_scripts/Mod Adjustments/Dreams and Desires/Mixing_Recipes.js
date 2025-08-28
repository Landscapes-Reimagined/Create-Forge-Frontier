ServerEvents.recipes(event => 
    {
		// Create Chromatic Compound Recipe
            event.custom({
                type: 'create:mixing',
                ingredients: [
                    Ingredient.of('create:powdered_obsidian').toJson(),
                    Ingredient.of('create:powdered_obsidian').toJson(),
                    Ingredient.of('create:powdered_obsidian').toJson(),
                    Ingredient.of('create:powdered_obsidian').toJson(),
                    Ingredient.of('create:polished_rose_quartz').toJson(),
                    Ingredient.of('create_dd:polished_spectral_ruby').toJson()
                ],
                results: [
                    { item: 'create:chromatic_compound', count: 2 }
                ],
                heatRequirement: "superheated"
            }).id('forge_frontier:mixing/chromatic_compound');

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