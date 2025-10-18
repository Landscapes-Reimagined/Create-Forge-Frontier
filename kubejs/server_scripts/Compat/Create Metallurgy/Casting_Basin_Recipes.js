ServerEvents.recipes(function (event) {
    var INGOT_MB = 90;
    var BLOCK_MB = INGOT_MB * 9;

    // --- 🧱 Block Casting Section (Fluid → Block) ---
    var basinCasts = [
        { name: "bismuth", fluid: "forge_frontier:molten_bismuth", block: "minecraft:iron_block", result: "enlightened_end:bismuth_block" },
        { name: "calorite", fluid: "forge_frontier:molten_calorite", block: "minecraft:iron_block", result: "ad_astra:calorite_block" },
        { name: "desh", fluid: "forge_frontier:molten_desh", block: "minecraft:iron_block", result: "ad_astra:desh_block" },
        { name: "irradium", fluid: "forge_frontier:molten_irradium", block: "minecraft:iron_block", result: "enlightened_end:irradium_block" },
        { name: "malachite", fluid: "forge_frontier:molten_malachite", block: "minecraft:iron_block", result: "enlightened_end:malachite_block" },
        { name: "ostrum", fluid: "forge_frontier:molten_ostrum", block: "minecraft:iron_block", result: "ad_astra:ostrum_block" },
        { name: "etrium", fluid: "forge_frontier:molten_etrium", block: "minecraft:iron_block", result: "ad_astra:etrium_block" },
        { name: "emerald", fluid: "forge_frontier:molten_emerald", block: "minecraft:iron_block", result: "minecraft:emerald_block" },
        { name: "diamond", fluid: "forge_frontier:molten_diamond", block: "minecraft:iron_block", result: "minecraft:diamond_block" },
        { name: "echo", fluid: "forge_frontier:molten_echo_shard", block: "minecraft:iron_block", result: "forge_frontier:echo_shard_block" },
        { name: "amber", fluid: "forge_frontier:molten_amber", block: "minecraft:iron_block", result: "forge_frontier:compressed_amber_1x" },
        { name: "scarlet_neodymium", fluid: "forge_frontier:molten_scarlet_neodymium", block: "minecraft:iron_block", result: "alexscaves:block_of_scarlet_neodymium" },
        { name: "azure_neodymium", fluid: "forge_frontier:molten_azure_neodymium", block: "minecraft:iron_block", result: "alexscaves:block_of_azure_neodymium" },
        { name: "uranium", fluid: "forge_frontier:molten_uranium", block: "minecraft:iron_block", result: "alexscaves:block_of_uranium" },
        { name: "sulfur", fluid: "forge_frontier:molten_sulfur", block: "minecraft:iron_block", result: "alexscaves:sulfur" },
        { name: "guano", fluid: "forge_frontier:molten_guano", block: "minecraft:iron_block", result: "alexscaves:guano_block" },
        { name: "pearl", fluid: "forge_frontier:molten_pearl", block: "minecraft:iron_block", result: "alexscaves:block_of_pearl" },
        { name: "netherite_iron", fluid: "forge_frontier:molten_netherite_iron", block: "minecraft:iron_block", result: "advancednetherite:netherite_iron_block" },
        { name: "netherite_gold", fluid: "forge_frontier:molten_netherite_gold", block: "minecraft:iron_block", result: "advancednetherite:netherite_gold_block" },
        { name: "netherite_diamond", fluid: "forge_frontier:molten_netherite_diamond", block: "minecraft:iron_block", result: "advancednetherite:netherite_diamond_block" },
        { name: "netherite_emerald", fluid: "forge_frontier:molten_netherite_emerald", block: "minecraft:iron_block", result: "advancednetherite:netherite_emerald_block" },
        { name: "reggarfonite", fluid: "forge_frontier:molten_reggarfonite", block: "minecraft:iron_block", result: "create_better_motors:reggarfonite_block" },
        { name: "coal", fluid: "forge_frontier:molten_carbon", block: "minecraft:iron_block", result: "minecraft:coal_block" },
        { name: "bronze", fluid: "createmetallurgy:molten_bronze", block: "minecraft:iron_block", result: "create_dd:bronze_block" }
    ];

    // 🔄 Generate Block Casting Recipes
    basinCasts.forEach(function (cast) {
        if (cast.block && !Ingredient.of(cast.result).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_basin",
                ingredients: [
                    { item: cast.block },
                    { amount: BLOCK_MB, fluid: cast.fluid, nbt: {} }
                ],
                mold_consumed: true,
                processingTime: 320,
                result: { item: cast.result }
            }).id("forge_frontier:casting_basin/" + cast.name + "_block");
        }
    });

    // --- ⚙️ Casing Casting Section (Solid + Fluid → Casing) ---
    var casingCasts = [
        { name: "andesite_casing", fluid: "create_additions_synthetics:molten_andesite", casing: "create:andesite_casing", solid: { tag: "forge:stripped_logs" }, result: "create:andesite_casing", amount: INGOT_MB, time: 70 },
        { name: "bronze_casing", fluid: "createmetallurgy:molten_bronze", casing: "create_dd:bronze_casing", solid: { tag: "forge:stripped_logs" }, result: "create_dd:bronze_casing", amount: INGOT_MB, time: 70 },
        { name: "zinc_casing", fluid: "createmetallurgy:molten_zinc", casing: "create_dd:zinc_casing", solid: { tag: "forge:stripped_logs" }, result: "create_dd:zinc_casing", amount: INGOT_MB, time: 70 },
        { name: "tin_casing", fluid: "createmetallurgy:molten_tin", casing: "create_dd:tin_casing", solid: { tag: "forge:stripped_logs" }, result: "create_dd:tin_casing", amount: INGOT_MB, time: 70 },
        { name: "netherite_casing", fluid: "createmetallurgy:molten_netherite", casing: "create_dd:netherite_casing", solid: { tag: "forge_frontier:netherite_casing_application" }, result: "create_dd:netherite_casing", amount: INGOT_MB, time: 70 },
        { name: "steel_casing", fluid: "createmetallurgy:molten_steel", casing: "create_dd:steel_casing", solid: { tag: "forge:stone" }, result: "create_dd:steel_casing", amount: INGOT_MB, time: 70 },
        { name: "desh_rocket_casing", fluid: "forge_frontier:molten_desh", casing: "forge_frontier:desh_rocket_casing", solid: { item: "forge_frontier:steel_rocket_casing" }, result: "forge_frontier:desh_rocket_casing", amount: INGOT_MB, time: 70 },
        { name: "ostrum_rocket_casing", fluid: "forge_frontier:molten_ostrum", casing: "forge_frontier:ostrum_rocket_casing", solid: { item: "forge_frontier:desh_rocket_casing" }, result: "forge_frontier:ostrum_rocket_casing", amount: INGOT_MB, time: 70 },
        { name: "calorite_rocket_casing", fluid: "forge_frontier:molten_calorite", casing: "forge_frontier:calorite_rocket_casing", solid: { item: "forge_frontier:ostrum_rocket_casing" }, result: "forge_frontier:calorite_rocket_casing", amount: INGOT_MB, time: 70 },
        { name: "steel_rocket_casing", fluid: "createmetallurgy:molten_steel", casing: "forge_frontier:steel_rocket_casing", solid: { tag: "forge_frontier:netherite_casing_application" }, result: "forge_frontier:steel_rocket_casing", amount: INGOT_MB, time: 70 },  
        { name: "malachite_rocket_casing", fluid: "forge_frontier:molten_malachite", casing: "forge_frontier:malachite_rocket_casing", solid: { item: "forge_frontier:calorite_rocket_casing" }, result: "forge_frontier:malachite_rocket_casing", amount: INGOT_MB, time: 70 },      
    ];

    // 🔄 Generate Casing Casting Recipes
    casingCasts.forEach(function (cast) {
        if (!Ingredient.of(cast.result).stacks.empty) {
            let ingredients = [];

            // Only push if defined
            if (cast.casing) ingredients.push({ item: cast.casing });
            if (cast.solid) ingredients.push(cast.solid);
            if (cast.fluid) ingredients.push({ amount: cast.amount, fluid: cast.fluid, nbt: {} });

            event.custom({
                type: "createmetallurgy:casting_in_basin",
                ingredients: ingredients,
                mold_consumed: true,
                processingTime: cast.time,
                result: { item: cast.result }
            }).id("forge_frontier:casting_basin/" + cast.name);
        }
    });
});
