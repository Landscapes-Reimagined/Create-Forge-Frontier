ServerEvents.recipes(event => 
    {
        // Remove Recipes
        event.remove({ id: 'forgefrontiercore:test_recipe'})
        event.remove({ id: 'create:mixing/compat/ae2/fluix_crystal'})

        // Forge Frontier - Energetic Mixing Recipes
            const energeticMixingRecipes = [
                {
                    id: "quantum_infusion",
                    energy: 20000,
                    ingredients: [
                        { item: "advanced_ae:quantum_infused_dust", count: 1 },
                        { fluid: "minecraft:water", amount: 1000 }
                    ],
                    results: [{ fluid: "advanced_ae:quantum_infusion_source", amount: 1000 }]
                },
                {
                    id: "logic_processor",
                    energy: 20000,
                    ingredients: [
                        { item: "ae2:printed_logic_processor", count: 4 },
                        { item: "ae2:printed_silicon", count: 4 },
                        { item: "minecraft:redstone", count: 4 },
                        { fluid: "minecraft:water", amount: 100 }
                    ],
                    results: [{ item: "ae2:logic_processor", count: 4 }]
                },
                {
                    id: "shattered_singularity",
                    energy: 200000,
                    ingredients: [
                        { item: "ae2:singularity", count: 1 },
                        { item: "ae2:ender_dust", count: 2 },
                        { item: "ae2:sky_dust", count: 2 },
                        { fluid: "minecraft:lava", amount: 100 }
                    ],
                    results: [{ item: "advanced_ae:shattered_singularity", count: 2 }]
                },
                {
                    id: "fluix_crystals",
                    energy: 200000,
                    remove: "forgefrontiercore:fluix_quartz",
                    ingredients: [
                        { item: "ae2:charged_certus_quartz_crystal", count: 16 },
                        { item: "minecraft:redstone", count: 16 },
                        { item: "minecraft:quartz", count: 16 },
                        { fluid: "minecraft:lava", amount: 500 }
                    ],
                    results: [{ item: "ae2:fluix_crystal", count: 64 }]
                },
                {
                    id: "fluix_crystals_from_dust",
                    energy: 100000,
                    remove: "forgefrontiercore:fluix_quartz_duplication",
                    ingredients: [
                        { item: "ae2:charged_certus_quartz_crystal", count: 32 },
                        { item: "ae2:fluix_dust", count: 32 },
                        { fluid: "minecraft:water", amount: 500 }
                    ],
                    results: [{ item: "ae2:fluix_crystal", count: 64 }]
                },
                {
                    id: "energy_processor",
                    energy: 20000,
                    ingredients: [
                        { item: "appflux:printed_energy_processor", count: 4 },
                        { item: "ae2:printed_silicon", count: 4 },
                        { item: "minecraft:redstone", count: 4 },
                        { fluid: "minecraft:water", amount: 100 }
                    ],
                    results: [{ item: "appflux:energy_processor", count: 4 }]
                },
                {
                    id: "chipped_budding_quartz",
                    energy: 200000,
                    ingredients: [
                        { item: "ae2:charged_certus_quartz_crystal", count: 8 },
                        { item: "ae2:damaged_budding_quartz", count: 8 },
                        { fluid: "minecraft:water", amount: 1000 }
                    ],
                    results: [{ item: "ae2:chipped_budding_quartz", count: 8 }]
                },
                {
                    id: "flawed_budding_quartz",
                    energy: 300000,
                    ingredients: [
                        { item: "ae2:charged_certus_quartz_crystal", count: 8 },
                        { item: "ae2:chipped_budding_quartz", count: 8 },
                        { fluid: "minecraft:water", amount: 1000 }
                    ],
                    results: [{ item: "ae2:flawed_budding_quartz", count: 8 }]
                },
                {
                    id: "quantum_alloy",
                    energy: 200000,
                    ingredients: [
                        { item: "minecraft:copper_ingot", count: 4 },
                        { item: "advanced_ae:shattered_singularity", count: 4 },
                        { item: "ae2:singularity", count: 4 },
                        { fluid: "advanced_ae:quantum_infusion_source", amount: 1000 }
                    ],
                    results: [{ item: "advanced_ae:quantum_alloy", count: 1 }]
                },
                {
                    id: "calculation_processor",
                    energy: 20000,
                    ingredients: [
                        { item: "ae2:printed_calculation_processor", count: 4 },
                        { item: "ae2:printed_silicon", count: 4 },
                        { item: "minecraft:redstone", count: 4 },
                        { fluid: "minecraft:water", amount: 100 }
                    ],
                    results: [{ item: "ae2:calculation_processor", count: 4 }]
                },
                {
                    id: "damaged_budding_quartz",
                    energy: 100000,
                    ingredients: [
                        { item: "ae2:charged_certus_quartz_crystal", count: 8 },
                        { item: "ae2:quartz_block", count: 8 },
                        { fluid: "minecraft:water", amount: 1000 }
                    ],
                    results: [{ item: "ae2:damaged_budding_quartz", count: 8 }]
                },
                {
                    id: "certus_quartz_crystal",
                    energy: 50000,
                    remove: "forgefrontiercore:certus_quartz_duplication",
                    ingredients: [
                        { item: "ae2:charged_certus_quartz_crystal", count: 16 },
                        { item: "ae2:certus_quartz_dust", count: 16 },
                        { fluid: "minecraft:water", amount: 500 }
                    ],
                    results: [{ item: "ae2:certus_quartz_crystal", count: 64 }]
                },
                {
                    id: "redstone_crystal",
                    energy: 20000,
                    ingredients: [
                        { item: "minecraft:redstone_block", count: 16 },
                        { item: "ae2:fluix_crystal", count: 16 },
                        { item: "minecraft:glowstone_dust", count: 16 },
                        { fluid: "minecraft:water", amount: 500 }
                    ],
                    results: [{ item: "appflux:redstone_crystal", count: 64 }]
                },
                {
                    id: "engineering_processor",
                    energy: 20000,
                    ingredients: [
                        { item: "ae2:printed_engineering_processor", count: 4 },
                        { item: "ae2:printed_silicon", count: 4 },
                        { item: "minecraft:redstone", count: 4 },
                        { fluid: "minecraft:water", amount: 100 }
                    ],
                    results: [{ item: "ae2:engineering_processor", count: 4 }]
                },
                {
                    id: "quantum_processor",
                    energy: 20000,
                    ingredients: [
                        { item: "advanced_ae:printed_quantum_processor", count: 4 },
                        { item: "ae2:printed_silicon", count: 4 },
                        { item: "minecraft:redstone", count: 4 },
                        { fluid: "minecraft:water", amount: 100 }
                    ],
                    results: [{ item: "advanced_ae:quantum_processor", count: 4 }]
                },
            ];

            energeticMixingRecipes.forEach(recipe => {
                if (recipe.remove) {
                    event.remove({ id: recipe.remove });
                }

                event.custom({
                    type: "forgefrontiercore:energetic_mixing",
                    heatRequirement: "heated",
                    requiredEnergy: recipe.energy,
                    requiredEnergyLevel: "crystallize",
                    ingredients: recipe.ingredients,
                    results: recipe.results
                }).id(`forge_frontier:energetic_mixing/${recipe.id}`);
            });

        // Energetic Mixing - Energetic Infusing Recipes
        const energeticInfusionRecipes = [
            {
                id: "charged_certus_quartz_crystal",
                remove: "forgefrontiercore:certus_quartz_charging",
                energy: 1300000,
                ingredients: [
                    { item: "ae2:certus_quartz_crystal", count: 64 },
                    { fluid: "minecraft:water", amount: 1000 }
                ],
                results: [{ item: "ae2:charged_certus_quartz_crystal", count: 64 }]
            },
            {
                id: "quantum_alloy_plate",
                energy: 1000000,
                ingredients: [
                    { item: "advanced_ae:quantum_alloy", count: 8 },
                    { item: "minecraft:netherite_ingot", count: 2 },
                    { item: "minecraft:nether_star", count: 1 },
                    { fluid: "advanced_ae:quantum_infusion_source", amount: 1000 }
                ],
                results: [{ item: "advanced_ae:quantum_alloy_plate", count: 1 }]
            },
            {
                id: "singularity",
                energy: 1000000,
                ingredients: [
                    { item: "ae2:matter_ball", count: 64 },
                    { fluid: "minecraft:lava", amount: 100 }
                ],
                results: [{ item: "ae2:singularity", count: 1 }]
            },
            {
                id: "charged_redstone",
                energy: 1300000,
                ingredients: [
                    { item: "appflux:redstone_crystal", count: 64 },
                    { fluid: "minecraft:water", amount: 1000 }
                ],
                results: [{ item: "appflux:charged_redstone", count: 64 }]
            }
        ];
    
        energeticInfusionRecipes.forEach(recipe => {
            if (recipe.remove) {
                event.remove({ id: recipe.remove });
            }
    
            event.custom({
                type: "forgefrontiercore:energetic_mixing",
                heatRequirement: "superheated",
                requiredEnergy: recipe.energy,
                requiredEnergyLevel: "infuse",
                ingredients: recipe.ingredients,
                results: recipe.results
            }).id(`forge_frontier:energetic_mixing/${recipe.id}`);
        });
    }
)