ServerEvents.recipes(function (event) {
    var INGOT_MB = 90;
    var BLOCK_MB = INGOT_MB * 9;

    var basinCasts = [
        { name: "iron", fluid: "createmetallurgy:molten_iron", result: "minecraft:iron_block" },
        { name: "gold", fluid: "createmetallurgy:molten_gold", result: "minecraft:gold_block" },
        { name: "copper", fluid: "createmetallurgy:molten_copper", result: "minecraft:copper_block" },
        { name: "tin", fluid: "createmetallurgy:molten_tin", result: "create_dd:tin_block" },
        { name: "bismuth", fluid: "forge_frontier:molten_bismuth", result: "enlightened_end:bismuth_block" },
        { name: "calorite", fluid: "forge_frontier:molten_calorite", result: "ad_astra:calorite_block" },
        { name: "desh", fluid: "forge_frontier:molten_desh", result: "ad_astra:desh_block" },
        { name: "irradium", fluid: "forge_frontier:molten_irradium", result: "enlightened_end:irradium_block" },
        { name: "malachite", fluid: "forge_frontier:molten_malachite", result: "enlightened_end:malachite_block" },
        { name: "ostrum", fluid: "forge_frontier:molten_ostrum", result: "ad_astra:ostrum_block" },
        { name: "etrium", fluid: "forge_frontier:molten_etrium", result: "ad_astra:etrium_block" },
        { name: "emerald", fluid: "forge_frontier:molten_emerald", result: "minecraft:emerald_block" },
        { name: "diamond", fluid: "forge_frontier:molten_diamond", result: "minecraft:diamond_block" },
        { name: "echo", fluid: "forge_frontier:molten_echo_shard", result: "minecraft:echo_shard_block" },
        { name: "amber", fluid: "forge_frontier:molten_amber", result: "forge_frontier:compressed_amber_1x" },
        { name: "scarlet_neodymium", fluid: "forge_frontier:molten_scarlet_neodymium", result: "alexscaves:block_of_scarlet_neodymium" },
        { name: "azure_neodymium", fluid: "forge_frontier:molten_azure_neodymium", result: "alexscaves:block_of_azure_neodymium" },
        { name: "uranium", fluid: "forge_frontier:molten_uranium", result: "alexscaves:block_of_uranium" },
        { name: "sulfur", fluid: "forge_frontier:molten_sulfur", result: "alexscaves:sulfur" },
        { name: "guano", fluid: "forge_frontier:molten_guano", result: "alexscaves:guano_block" },
        { name: "pearl", fluid: "forge_frontier:molten_pearl", result: "alexscaves:block_of_pearl" },
        { name: "netherite_iron", fluid: "forge_frontier:molten_netherite_iron", result: "advancednetherite:netherite_iron_block"},
        { name: "netherite_gold", fluid: "forge_frontier:molten_netherite_gold", result: "advancednetherite:netherite_gold_block"},
        { name: "netherite_diamond", fluid: "forge_frontier:molten_netherite_diamond", result: "advancednetherite:netherite_diamond_block"},
        { name: "netherite_emerald", fluid: "forge_frontier:molten_netherite_emerald", result: "advancednetherite:netherite_emerald_block"},
        { name: "reggarfonite", fluid: "forge_frontier:molten_reggarfonite", result: "create_better_motors:reggarfonite_block"},
        { name: 'coal', fluid: 'forge_frontier:molten_carbon', result: "minecraft:coal_block"},
    ];

    basinCasts.forEach(function (cast) {
        if (Ingredient.of(cast.result).stacks.empty) return; // Skip if result item doesn't exist

        event.custom({
            type: "createmetallurgy:casting_in_basin",
            ingredients: [
                { amount: BLOCK_MB, fluid: cast.fluid, nbt: {} }
            ],
            processingTime: 320,
            result: { item: cast.result }
        }).id("forge_frontier:casting_basin/" + cast.name + "_block");
    });
});
