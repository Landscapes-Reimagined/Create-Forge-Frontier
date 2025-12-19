ServerEvents.recipes(event => 
    {
        // Energising Recipes
            const energisingRecipes = {
                overcharged_iron_block: { ingredients: [{ item: "minecraft:iron_block" }], energyNeeded: 9000 },
                overcharged_gold_block: { ingredients: [{ item: "minecraft:gold_block" }], energyNeeded: 18000 },
                overcharged_diamond_block: { ingredients: [{ item: "minecraft:diamond_block" }], energyNeeded: 90000 },
                overcharged_netherite_block: { ingredients: [{ item: "minecraft:netherite_block" }], energyNeeded: 450000 },
                overcharged_netherite_ingot: { ingredients: [{ item: "minecraft:netherite_ingot" }], energyNeeded: 50000 }
            };

            Object.entries(energisingRecipes).forEach(([result, recipe]) => {
                event.custom({
                    type: "create_new_age:energising",
                    energyNeeded: recipe.energyNeeded,
                    ingredients: recipe.ingredients,
                    results: [{ item: `forge_frontier:${result}` }]
                }).id(`forge_frontier:energising/${result}`);
            });

        // Energising Compat Recipes
            const energisingCompatRecipes = {
                weathered_cut_copper: { ingredients: [{ item: "minecraft:weathered_cut_copper" }], energyNeeded: 4000, result: "minecraft:exposed_cut_copper" },
                oxidized_copper_shingle_stairs: { ingredients: [{ item: "create:oxidized_copper_shingle_stairs" }], energyNeeded: 4000, result: "create:weathered_copper_shingle_stairs" },
                exposed_copper_shingle_stairs: { ingredients: [{ item: "create:exposed_copper_shingle_stairs" }], energyNeeded: 4000, result: "create:copper_shingle_stairs" },
                weathered_copper_shingle_slab: { ingredients: [{ item: "create:weathered_copper_shingle_slab" }], energyNeeded: 4000, result: "create:exposed_copper_shingle_slab" },
                oxidized_cut_copper_slab: { ingredients: [{ item: "minecraft:oxidized_cut_copper_slab" }], energyNeeded: 4000, result: "minecraft:weathered_cut_copper_slab" },
                oxidized_copper_shingles: { ingredients: [{ item: "create:oxidized_copper_shingles" }], energyNeeded: 4000, result: "create:weathered_copper_shingles" },
                chromatic_compound: { ingredients: [{ item: "create_dd:chromatic_compound" }], energyNeeded: 1000, result: "create_dd:overcharge_alloy" },
                oxidized_copper: { ingredients: [{ item: "minecraft:oxidized_copper" }], energyNeeded: 4000, result: "minecraft:weathered_copper" },
                oxidized_cut_copper_stairs: { ingredients: [{ item: "minecraft:oxidized_cut_copper_stairs" }], energyNeeded: 4000, result: "minecraft:weathered_cut_copper_stairs" },
                weathered_cut_copper_stairs: { ingredients: [{ item: "minecraft:weathered_cut_copper_stairs" }], energyNeeded: 4000, result: "minecraft:exposed_cut_copper_stairs" },
                exposed_cut_copper: { ingredients: [{ item: "minecraft:exposed_cut_copper" }], energyNeeded: 4000, result: "minecraft:cut_copper" },
                oxidized_cut_copper: { ingredients: [{ item: "minecraft:oxidized_cut_copper" }], energyNeeded: 4000, result: "minecraft:weathered_cut_copper" },
                weathered_copper_shingle_stairs: { ingredients: [{ item: "create:weathered_copper_shingle_stairs" }], energyNeeded: 4000, result: "create:exposed_copper_shingle_stairs" },
                enchanted_book_channeling: { ingredients: [{ item: "minecraft:book" }], energyNeeded: 10000000, result: 'minecraft:enchanted_book', nbt: '{Enchantments:[{id:"channeling",lvl:1}]}' },
                exposed_cut_copper_stairs: { ingredients: [{ item: "minecraft:exposed_cut_copper_stairs" }], energyNeeded: 4000, result: "minecraft:cut_copper_stairs" },
                weathered_copper_shingles: { ingredients: [{ item: "create:weathered_copper_shingles" }], energyNeeded: 4000, result: "create:exposed_copper_shingles" },
                weathered_cut_copper_slab: { ingredients: [{ item: "minecraft:weathered_cut_copper_slab" }], energyNeeded: 4000, result: "minecraft:exposed_cut_copper_slab" },
                oxidized_copper_shingle_slab: { ingredients: [{ item: "create:oxidized_copper_shingle_slab" }], energyNeeded: 4000, result: "create:weathered_copper_shingle_slab" },
                exposed_copper: { ingredients: [{ item: "minecraft:exposed_copper" }], energyNeeded: 4000, result: "minecraft:copper_block" },
                exposed_copper_shingle_slab: { ingredients: [{ item: "create:exposed_copper_shingle_slab" }], energyNeeded: 4000, result: "create:copper_shingle_slab" },
                certus_quartz_crystal: { ingredients: [{ item: "ae2:certus_quartz_crystal" }], energyNeeded: 3200, result: "ae2:charged_certus_quartz_crystal" },
                exposed_cut_copper_slab: { ingredients: [{ item: "minecraft:exposed_cut_copper_slab" }], energyNeeded: 4000, result: "minecraft:cut_copper_slab" },
                weathered_copper: { ingredients: [{ item: "minecraft:weathered_copper" }], energyNeeded: 4000, result: "minecraft:exposed_copper" },
                exposed_copper_shingles: { ingredients: [{ item: "create:exposed_copper_shingles" }], energyNeeded: 4000, result: "create:copper_shingles" }
            };

            Object.entries(energisingCompatRecipes).forEach(([id, recipe]) => {
                let output = { item: recipe.result };
                if (recipe.nbt) {
                    output.nbt = recipe.nbt;
                }

                event.custom({
                    type: "create_new_age:energising",
                    energyNeeded: recipe.energyNeeded,
                    ingredients: recipe.ingredients,
                    results: [output]
                }).id(`forge_frontier:energising/${id}`);
            });

            // Enchanted Golden Apple Recipe
                event.remove({ id: 'create_new_age:sequenced_assembly/enchanted_golden_apple'})
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
                        energyNeeded: 500000,
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

            // Magnetite Recipe
                event.custom({
                    type: 'create_new_age:energising',
                    energyNeeded: 1000,
                    ingredients: [
                    {
                        item: 'createcompression:compressed_stone_2x'
                    }
                    ],
                    results: [
                    {
                        item: 'create_new_age:magnetite_block'
                    }
                    ]
                }).id( 'forge_frontier:energising/magnetite_block' )
    }
);