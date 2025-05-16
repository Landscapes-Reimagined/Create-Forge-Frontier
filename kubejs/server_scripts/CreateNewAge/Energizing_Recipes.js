ServerEvents.recipes(event => {
    // Energising Recipes
    const energisingRecipes = {
        overcharged_iron_block: { ingredients: [{ item: "minecraft:iron_block" }], energy_needed: 9000 },
        overcharged_gold_block: { ingredients: [{ item: "minecraft:gold_block" }], energy_needed: 18000 },
        overcharged_diamond_block: { ingredients: [{ item: "minecraft:diamond_block" }], energy_needed: 90000 },
        overcharged_netherite_block: { ingredients: [{ item: "minecraft:netherite_block" }], energy_needed: 450000 },
        overcharged_netherite_ingot: { ingredients: [{ item: "minecraft:netherite_ingot" }], energy_needed: 50000 }
    };

    Object.entries(energisingRecipes).forEach(([result, recipe]) => {
        event.custom({
            type: "create_new_age:energising",
            energy_needed: recipe.energy_needed,
            ingredients: recipe.ingredients,
            results: [{ item: `forge_frontier:${result}` }]
        }).id(`forge_frontier:energising/${result}`);
    });

    // Energising Compat Recipes
        const energisingCompatRecipes = {
            weathered_cut_copper: { ingredients: [{ item: "minecraft:weathered_cut_copper" }], energy_needed: 4000, result: "minecraft:exposed_cut_copper" },
            oxidized_copper_shingle_stairs: { ingredients: [{ item: "create:oxidized_copper_shingle_stairs" }], energy_needed: 4000, result: "create:weathered_copper_shingle_stairs" },
            exposed_copper_shingle_stairs: { ingredients: [{ item: "create:exposed_copper_shingle_stairs" }], energy_needed: 4000, result: "create:copper_shingle_stairs" },
            weathered_copper_shingle_slab: { ingredients: [{ item: "create:weathered_copper_shingle_slab" }], energy_needed: 4000, result: "create:exposed_copper_shingle_slab" },
            oxidized_cut_copper_slab: { ingredients: [{ item: "minecraft:oxidized_cut_copper_slab" }], energy_needed: 4000, result: "minecraft:weathered_cut_copper_slab" },
            oxidized_copper_shingles: { ingredients: [{ item: "create:oxidized_copper_shingles" }], energy_needed: 4000, result: "create:weathered_copper_shingles" },
            chromatic_compound: { ingredients: [{ item: "create_dd:chromatic_compound" }], energy_needed: 1000, result: "create_dd:overcharge_alloy" },
            oxidized_copper: { ingredients: [{ item: "minecraft:oxidized_copper" }], energy_needed: 4000, result: "minecraft:weathered_copper" },
            oxidized_cut_copper_stairs: { ingredients: [{ item: "minecraft:oxidized_cut_copper_stairs" }], energy_needed: 4000, result: "minecraft:weathered_cut_copper_stairs" },
            weathered_cut_copper_stairs: { ingredients: [{ item: "minecraft:weathered_cut_copper_stairs" }], energy_needed: 4000, result: "minecraft:exposed_cut_copper_stairs" },
            exposed_cut_copper: { ingredients: [{ item: "minecraft:exposed_cut_copper" }], energy_needed: 4000, result: "minecraft:cut_copper" },
            oxidized_cut_copper: { ingredients: [{ item: "minecraft:oxidized_cut_copper" }], energy_needed: 4000, result: "minecraft:weathered_cut_copper" },
            weathered_copper_shingle_stairs: { ingredients: [{ item: "create:weathered_copper_shingle_stairs" }], energy_needed: 4000, result: "create:exposed_copper_shingle_stairs" },
            enchanted_book_channeling: { ingredients: [{ item: "minecraft:book" }], energy_needed: 10000000, result: 'minecraft:enchanted_book', nbt: '{Enchantments:[{id:"channeling",lvl:1}]}' },
            exposed_cut_copper_stairs: { ingredients: [{ item: "minecraft:exposed_cut_copper_stairs" }], energy_needed: 4000, result: "minecraft:cut_copper_stairs" },
            weathered_copper_shingles: { ingredients: [{ item: "create:weathered_copper_shingles" }], energy_needed: 4000, result: "create:exposed_copper_shingles" },
            weathered_cut_copper_slab: { ingredients: [{ item: "minecraft:weathered_cut_copper_slab" }], energy_needed: 4000, result: "minecraft:exposed_cut_copper_slab" },
            oxidized_copper_shingle_slab: { ingredients: [{ item: "create:oxidized_copper_shingle_slab" }], energy_needed: 4000, result: "create:weathered_copper_shingle_slab" },
            exposed_copper: { ingredients: [{ item: "minecraft:exposed_copper" }], energy_needed: 4000, result: "minecraft:copper_block" },
            exposed_copper_shingle_slab: { ingredients: [{ item: "create:exposed_copper_shingle_slab" }], energy_needed: 4000, result: "create:copper_shingle_slab" },
            certus_quartz_crystal: { ingredients: [{ item: "ae2:certus_quartz_crystal" }], energy_needed: 3200, result: "ae2:charged_certus_quartz_crystal" },
            exposed_cut_copper_slab: { ingredients: [{ item: "minecraft:exposed_cut_copper_slab" }], energy_needed: 4000, result: "minecraft:cut_copper_slab" },
            weathered_copper: { ingredients: [{ item: "minecraft:weathered_copper" }], energy_needed: 4000, result: "minecraft:exposed_copper" },
            exposed_copper_shingles: { ingredients: [{ item: "create:exposed_copper_shingles" }], energy_needed: 4000, result: "create:copper_shingles" }
        };

        Object.entries(energisingCompatRecipes).forEach(([id, recipe]) => {
            let output = { item: recipe.result };
            if (recipe.nbt) {
                output.nbt = recipe.nbt;
            }

            event.custom({
                type: "create_new_age:energising",
                energy_needed: recipe.energy_needed,
                ingredients: recipe.ingredients,
                results: [output]
            }).id(`forge_frontier:energising/${id}`);
        });

        // Enchanted Golden Apple Recipe
        event.remove({ id: 'create_new_age:enchanted_golden_apple'})
        event.custom({
            type: "create:sequenced_assembly",

            ingredient: {
                item: "minecraft:apple"
            },

            transitionalItem: {
                item: "create_new_age:incomplete_enchanted_golden_apple"
            },

            sequence: [
                {
                type: "create:deploying",
                ingredients: [
                    {
                    item: "create_new_age:incomplete_enchanted_golden_apple"
                    },
                    {
                    item: "forge_frontier:overcharged_gold_block"
                    }
                ],
                results: [
                    {
                    item: "create_new_age:incomplete_enchanted_golden_apple"
                    }
                ]
                },

                {
                type: "create:deploying",
                ingredients: [
                    {
                    item: "create_new_age:incomplete_enchanted_golden_apple"
                    },
                    {
                    item: "forge_frontier:overcharged_gold_block"
                    }
                ],
                results: [
                    {
                    item: "create_new_age:incomplete_enchanted_golden_apple"
                    }
                ]
                },

                {
                type: "create_new_age:energising",
                energy_needed: 500000,
                ingredients: [
                    {
                    item: "create_new_age:incomplete_enchanted_golden_apple"
                    }
                ],
                results: [
                    {
                    item: "create_new_age:incomplete_enchanted_golden_apple"
                    }
                ]
                }
            ],
            results: [
                {
                item: "minecraft:enchanted_golden_apple"
                }
            ],
            loops: 4
        }).id('forge_frontier:energizing/enchanted_golden_apple')

});