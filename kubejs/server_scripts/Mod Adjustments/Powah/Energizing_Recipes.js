ServerEvents.recipes(event => {
    const blockRecipes = [
        {
            id: "raw_uraninite",
            ingredients: [{item: "forge_frontier:raw_uraninite_block"}],
            energy: 2000 * 9,
            result: {item: "powah:uraninite_block", count: 2}
        },
        {
            id: "energized_steel",
            ingredients: [{item: "ad_astra:steel_ingot"}],
            energy: 10000,
            result: {item: "powah:steel_energized", count: 1}
        },
        {
            id: "energized_steel_block",
            ingredients: [{ item: "ad_astra:steel_block" }],
            energy: 10000 * 9,
            result: { item: "powah:energized_steel_block", count: 1 }
        },
        {
            id: "blazing_crystal",
            ingredients: [{ item: "ad_astra:calorite_ingot" }],
            energy: 90000,
            result: { item: "powah:crystal_blazing", count: 1 }
        },
        {
            id: "blazing_crystal_block",
            ingredients: [{ item: "ad_astra:calorite_block" }],
            energy: 90000 * 9,
            result: { item: "powah:blazing_crystal_block", count: 1 }
        },
        {
            id: "niotic_crystal",
            ingredients: [{ item: "minecraft:echo_shard" }],
            energy: 300000,
            result: { item: "powah:crystal_niotic", count: 1 }
        },
        {
            id: "niotic_crystal_block",
            ingredients: [{ item: "forge_frontier:echo_shard_block" }],
            energy: 300000 * 9,
            result: { item: "powah:niotic_crystal_block", count: 1 }
        },
        {
            id: "spirited_crystal",
            ingredients: [{ item: "enlightened_end:malachite" }],
            energy: 1000000,
            result: { item: "powah:crystal_spirited", count: 1 }
        },
        {
            id: "spirited_crystal_block",
            ingredients: [{ item: "enlightened_end:malachite_block" }],
            energy: 1000000 * 9,
            result: { item: "powah:spirited_crystal_block", count: 1 }
        },
        {
            id: "nitro_crystal",
            ingredients: [{ item: "minecraft:nether_star"}, { item: "alexscaves:block_of_scarlet_neodymium"},{ item: "alexscaves:block_of_scarlet_neodymium"}, { item: "powah:blazing_crystal_block"}],
            energy: 20000000,
            result: { item: "powah:crystal_nitro", count: 16}
        },
        {
            id: "weathered_copper_shingle_stairs",
            ingredients: [{ item: "create:oxidized_copper_shingle_stairs"}],
            energy: 4000,
            result: { item: "create:weathered_copper_shingle_stairs", count: 1}
        },
        {
            id: "copper_shingle_stairs",
            ingredients: [{ item: "create:exposed_copper_shingle_stairs"}],
            energy: 4000,
            result: { item: "create:copper_shingle_stairs", count: 1}
        },
        {
            id: "weathered_cut_copper_slab",
            ingredients: [{ item: "minecraft:oxidized_cut_copper_slab"}],
            energy: 4000,
            result: { item: "minecraft:weathered_cut_copper_slab", count: 1}
        },
        {
            id: "overcharged_iron_sheet",
            ingredients: [{ tag: "forge:plates/iron"}],
            energy: 1000,
            result: { item: "create_new_age:overcharged_iron_sheet", count: 1}
        },
        {
            id: "overcharged_iron_block",
            ingredients: [{ item: "minecraft:iron_block"}],
            energy: 9000,
            result: { item: "forge_frontier:overcharged_iron_block", count: 1}
        },
        {
            id: "energized_galena",
            ingredients: [{ item: "alexscaves:galena"}],
            energy: 4000,
            result: { item: "alexscaves:energized_galena_neutral", count: 1}
        },
        {
            id: "exposed_cut_copper_stairs",
            ingredients: [{ item: "minecraft:weathered_cut_copper_stairs"}],
            energy: 4000,
            result: { item: "minecraft:exposed_cut_copper_stairs", count: 1}
        },
        {
            id: "weathered_cut_copper_stairs",
            ingredients: [{ item: "minecraft:oxidized_cut_copper_stairs"}],
            energy: 4000,
            result: { item: "minecraft:weathered_cut_copper_stairs", count: 1}
        },
        {
            id: "weathered_cut_copper",
            ingredients: [{ item: "minecraft:oxidized_cut_copper"}],
            energy: 4000,
            result: { item: "minecraft:weathered_cut_copper", count: 1}
        },
        {
            id: "magnetite",
            ingredients: [{ item: "createcompression:compressed_stone_2x"}],
            energy: 1000,
            result: { item: "create_new_age:magnetite_block", count: 1}
        },
        {
            id: "overcharged_golden_sheet",
            ingredients: [{ item: "create:golden_sheet"}],
            energy: 2000,
            result: { item: "create_new_age:overcharged_golden_sheet", count: 1}
        },
        {
            id: "overcharged_netherite_block",
            ingredients: [{ item: "minecraft:netherite_block"}],
            energy: 450000,
            result: { item: "forge_frontier:overcharged_netherite_block", count: 1}
        },
        {
            id: "overcharged_netherite_ingot",
            ingredients: [{ item: "minecraft:netherite_ingot"}],
            energy: 50000,
            result: { item: "forge_frontier:overcharged_netherite_ingot", count: 1}
        },
        {
            id: "channeling",
            ingredients: [{ item: "minecraft:book"}],
            energy: 10000000,
            result: { "item": "minecraft:enchanted_book", "count": 1, "nbt": { "StoredEnchantments":
                [
                    {
                        "id": "minecraft:channeling",
                        "lvl": 1
                    }
                ]
		    }}
        },
        {
            id: "cut_copper_stairs",
            ingredients: [{ item: "minecraft:exposed_cut_copper_stairs"}],
            energy: 4000,
            result: { item: "minecraft:cut_copper_stairs", count: 1}
        },
        {
            id: "exposed_copper_shingles",
            ingredients: [{ item: "create:weathered_copper_shingles"}],
            energy: 4000,
            result: { item: "create:exposed_copper_shingles", count: 1}
        },
        {
            id: "overcharged_diamond",
            ingredients: [{ item: "minecraft:diamond"}],
            energy: 10000,
            result: { item: "create_new_age:overcharged_diamond", count: 1}
        },
        {
            id: "exposed_cut_copper_slab",
            ingredients: [{ item: "minecraft:weathered_cut_copper_slab"}],
            energy: 4000,
            result: { item: "minecraft:exposed_cut_copper_slab", count: 1}
        },
        {
            id: "copper_shingle_slab",
            ingredients: [{ item: "create:exposed_copper_shingle_slab"}],
            energy: 4000,
            result: { item: "create:copper_shingle_slab", count: 1}
        },
        {
            id: "exposed_copper",
            ingredients: [{ item: "minecraft:weathered_copper"}],
            energy: 4000,
            result: { item: "minecraft:exposed_copper", count: 1}
        },
        {
            id: "exposed_cut_copper",
            ingredients: [{ item: "minecraft:weathered_cut_copper"}],
            energy: 4000,
            result: { item: "minecraft:exposed_cut_copper", count: 1}
        },
        {
            id: "experience_bottle",
            ingredients: [{ item: "minecraft:glass_bottle"}],
            energy: 50000,
            result: { item: "minecraft:experience_bottle", count: 1}
        },
        {
            id: "overcharged_gold_ingot",
            ingredients: [{ item: "minecraft:gold_ingot"}],
            energy: 2000,
            result: { item: "create_new_age:overcharged_gold", count: 1}
        },
        {
            id: "exposed_copper_shingle_slab",
            ingredients: [{ item: "create:weathered_copper_shingle_slab"}],
            energy: 4000,
            result: { item: "create:exposed_copper_shingle_slab", count: 1}
        },
        {
            id: "weathered_copper_shingles",
            ingredients: [{ item: "create:oxidized_copper_shingles"}],
            energy: 4000,
            result: { item: "create:weathered_copper_shingles", count: 1}
        },
        {
            id: "overcharge_alloy",
            ingredients: [{ item: "create_dd:chromatic_compound"}],
            energy: 1000,
            result: { item: "create_dd:overcharge_alloy", count: 1}
        },
        {
            id: "weathered_copper",
            ingredients: [{ item: "minecraft:oxidized_copper"}],
            energy: 4000,
            result: { item: "minecraft:weathered_copper", count: 1}
        },
        {
            id: "cut_copper",
            ingredients: [{ item: "minecraft:exposed_cut_copper"}],
            energy: 4000,
            result: { item: "minecraft:cut_copper", count: 1}
        },
        {
            id: "exposed_copper_shingle_stairs",
            ingredients: [{ item: "create:weathered_copper_shingle_stairs"}],
            energy: 4000,
            result: { item: "create:exposed_copper_shingle_stairs", count: 1}
        },
        {
            id: "weathered_copper_shingle_slab",
            ingredients: [{ item: "create:oxidized_copper_shingle_slab"}],
            energy: 4000,
            result: { item: "create:weathered_copper_shingle_slab", count: 1}
        },
        {
            id: "copper_block",
            ingredients: [{ item: "minecraft:exposed_copper"}],
            energy: 4000,
            result: { item: "minecraft:copper_block", count: 1}
        },
        {
            id: "charged_certus_quartz",
            ingredients: [{ item: "ae2:certus_quartz_crystal"}],
            energy: 10000,
            result: { item: "ae2:charged_certus_quartz_crystal", count: 1}
        },
        {
            id: "overcharged_diamond_block",
            ingredients: [{ item: "minecraft:diamond_block"}],
            energy: 90000,
            result: { item: "forge_frontier:overcharged_diamond_block", count: 1}
        },
        {
            id: "overcharged_gold_block",
            ingredients: [{ item: "minecraft:gold_block"}],
            energy: 18000,
            result: { item: "forge_frontier:overcharged_gold_block", count: 1}
        },
        {
            id: "overcharged_iron_ingot",
            ingredients: [{ item: "minecraft:iron_ingot"}],
            energy: 1000,
            result: { item: "create_new_age:overcharged_iron", count: 1}
        },
        {
            id: "copper_shingles",
            ingredients: [{ item: "create:exposed_copper_shingles"}],
            energy: 4000,
            result: { item: "create:copper_shingles", count: 1}
        },
        {
            id: "cut_copper_slab",
            ingredients: [{ item: "minecraft:exposed_cut_copper_slab"}],
            energy: 0,
            result: { item: "minecraft:cut_copper_slab", count: 1}
        }        
    ];

    blockRecipes.forEach(recipe => {
        event.custom({
            type: "powah:energizing",
            ingredients: recipe.ingredients,
            energy: recipe.energy,
            result: recipe.result
        }).id(`forge_frontier:energizing/${recipe.id}`);
    });
});
