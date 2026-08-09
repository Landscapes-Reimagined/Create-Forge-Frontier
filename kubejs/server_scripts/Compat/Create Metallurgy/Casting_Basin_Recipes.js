ServerEvents.recipes(function (event) {
    var INGOT_MB = 90;
    var BLOCK_MB_DEFAULT = INGOT_MB * 9; // 810 mB for normal metal blocks

    // --- Block Casting Section (Fluid → Block only) ---
    var basinCasts = [
        { name: "calorite", fluid: "forge_frontier:molten_calorite", result: "ad_astra:calorite_block" },
        { name: "desh", fluid: "forge_frontier:molten_desh", result: "ad_astra:desh_block" },
        { name: "ostrum", fluid: "forge_frontier:molten_ostrum", result: "ad_astra:ostrum_block" },
        { name: "etrium", fluid: "forge_frontier:molten_etrium", result: "ad_astra:etrium_block" },
        { name: "emerald", fluid: "forge_frontier:molten_emerald", result: "minecraft:emerald_block" },
        { name: "diamond", fluid: "forge_frontier:molten_diamond", result: "minecraft:diamond_block" },
        { name: "echo", fluid: "forge_frontier:molten_echo_shard", result: "forge_frontier:echo_shard_block" },
        { name: "amber", fluid: "forge_frontier:molten_amber", result: "forge_frontier:compressed_amber_1x" },
        { name: "scarlet_neodymium", fluid: "forge_frontier:molten_scarlet_neodymium", result: "alexscaves:block_of_scarlet_neodymium" },
        { name: "azure_neodymium", fluid: "forge_frontier:molten_azure_neodymium", result: "alexscaves:block_of_azure_neodymium" },
        { name: "uranium", fluid: "forge_frontier:molten_uranium", result: "alexscaves:block_of_uranium" },
        { name: "sulfur", fluid: "forge_frontier:molten_sulfur", result: "alexscaves:sulfur" },
        { name: "guano", fluid: "forge_frontier:molten_guano", result: "alexscaves:guano_block" },
        { name: "pearl", fluid: "forge_frontier:molten_pearl", result: "alexscaves:block_of_pearl" },
        { name: "netherite_iron", fluid: "forge_frontier:molten_netherite_iron", result: "advancednetherite:netherite_iron_block" },
        { name: "netherite_gold", fluid: "forge_frontier:molten_netherite_gold", result: "advancednetherite:netherite_gold_block" },
        { name: "netherite_diamond", fluid: "forge_frontier:molten_netherite_diamond", result: "advancednetherite:netherite_diamond_block" },
        { name: "netherite_emerald", fluid: "forge_frontier:molten_netherite_emerald", result: "advancednetherite:netherite_emerald_block" },
        { name: "reggarfonite", fluid: "forge_frontier:molten_reggarfonite", result: "create_better_motors:reggarfonite_block" },
        { name: "coal", fluid: "forge_frontier:molten_carbon", result: "minecraft:coal_block" },
        { name: "bronze", fluid: "createmetallurgy:molten_bronze", result: "create_dd:bronze_block" },
        { name: "void_steel", fluid: "createmetallurgy:molten_void_steel", result: "createutilities:void_steel_block" },
        { name: "luxite", fluid: "forge_frontier:molten_luxite", result: "endelurgy:luxite_block"},
        { name: "adamantite", fluid: "forge_frontier:molten_adamantite", result: "endelurgy:adamantite_block"},

        // Hyper Experience – special amount (27 mB instead of 810)
        { name: "experience", fluid: "create_enchantment_industry:experience", result: "create:experience_block", amount: 27 }
    ];

    basinCasts.forEach(function (cast) {
        if (!Ingredient.of(cast.result).stacks.empty) {
            // Use per-entry override amount if present, otherwise default block amount
            var fluidAmount = cast.amount ? cast.amount : BLOCK_MB_DEFAULT;

            event.custom({
                type: "createmetallurgy:casting_in_basin",
                ingredients: [
                    { amount: fluidAmount, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 320,
                result: { item: cast.result }
            }).id("forge_frontier:casting_basin/" + cast.name + "_block");
        }
    });

    // --- Casing Casting Section (Solid + Fluid → Casing) ---
    var casingCasts = [
        { name: "andesite_casing", fluid: "create_additions_synthetics:molten_andesite", solid: { tag: "forge:stripped_logs" }, result: "create:andesite_casing", amount: INGOT_MB, time: 70 },
        { name: "bronze_casing", fluid: "createmetallurgy:molten_bronze", solid: { tag: "forge:stripped_logs" }, result: "create_dd:bronze_casing", amount: INGOT_MB, time: 70 },
        { name: "zinc_casing", fluid: "createmetallurgy:molten_zinc", solid: { tag: "forge:stripped_logs" }, result: "create_dd:zinc_casing", amount: INGOT_MB, time: 70 },
        { name: "tin_casing", fluid: "createmetallurgy:molten_tin", solid: { tag: "forge:stripped_logs" }, result: "create_dd:tin_casing", amount: INGOT_MB, time: 70 },
        { name: "netherite_casing", fluid: "createmetallurgy:molten_netherite", solid: { tag: "forge_frontier:netherite_casing_application" }, result: "create_dd:netherite_casing", amount: INGOT_MB, time: 70 },
        { name: "steel_casing", fluid: "createmetallurgy:molten_steel", solid: { tag: "forge:stone" }, result: "create_dd:steel_casing", amount: INGOT_MB, time: 70 },
        { name: "gilded_blackstone", fluid: "createmetallurgy:molten_gold", solid: { item: "minecraft:blackstone"}, result: "minecraft:gilded_blackstone", amount: INGOT_MB, time: 70 },
        { name: "void_casing", fluid: "createmetallurgy:molten_void_steel", solid: { item: "minecraft:obsidian"}, result: "createutilities:void_casing", amount: INGOT_MB, time: 70 }
    ];

    casingCasts.forEach(function (cast) {
        if (!Ingredient.of(cast.result).stacks.empty) {
            var ingredients = [];

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
