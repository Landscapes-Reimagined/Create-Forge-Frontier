ServerEvents.recipes(function (event) {
    var meltingRecipes = [
        { name: 'bismuth', fluid: 'forge_frontier:molten_bismuth' },
        { name: 'calorite', fluid: 'forge_frontier:molten_calorite' },
        { name: 'desh', fluid: 'forge_frontier:molten_desh' },
        { name: 'irradium', fluid: 'forge_frontier:molten_irradium' },
        { name: 'malachite', fluid: 'forge_frontier:molten_malachite' },
        { name: 'ostrum', fluid: 'forge_frontier:molten_ostrum' },
        { name: 'verdantine', fluid: 'forge_frontier:molten_emerald' },
        { name: 'glacium', fluid: 'forge_frontier:molten_diamond' },
        { name: 'debris', fluid: 'forge_frontier:molten_debris' },
        { name: 'resonite', fluid: 'forge_frontier:molten_echo_shard' },
        { name: 'aubrum', fluid: 'forge_frontier:molten_desh' },
        { name: 'pyroclast', fluid: 'forge_frontier:molten_calorite' },
        { name: 'frostite', fluid: 'forge_frontier:molten_etrium' },
        { name: 'stellaris', fluid: 'forge_frontier:molten_ostrum' },
        { name: 'radiantite', fluid: 'forge_frontier:molten_irradium' },
        { name: 'shale', fluid: 'forge_frontier:molten_malachite' },
        { name: 'palerock', fluid: 'forge_frontier:molten_bismuth' },
        { name: 'guanite', fluid: 'forge_frontier:molten_guano' },
        { name: 'pearlyte', fluid: 'forge_frontier:molten_pearl' },
        { name: 'amberlite', fluid: 'forge_frontier:molten_amber' },
        { name: 'azurnium', fluid: 'forge_frontier:molten_azure_neodymium' },
        { name: 'neodymrium', fluid: 'forge_frontier:molten_scarlet_neodymium' },
        { name: 'uraniumnite', fluid: 'forge_frontier:molten_uranium' },
        { name: 'sulphite', fluid: 'forge_frontier:molten_sulfur' },
        { name: 'reggarfonite', fluid: 'forge_frontier:molten_reggarfonite' },
        { name: 'tin', fluid: 'createmetallurgy:molten_tin' },
        { name: 'coal', fluid: 'forge_frontier:molten_carbon'}
    ];

    // Hardcoded storage blocks not covered by forge tags
    var specialBlocks = {
        // Enlightened End
        bismuth: { item: "enlightened_end:bismuth_block", fluid: "forge_frontier:molten_bismuth" },
        irradium: { item: "enlightened_end:irradium_block", fluid: "forge_frontier:molten_irradium" },
        malachite: { item: "enlightened_end:malachite_block", fluid: "forge_frontier:molten_malachite" },

        // Vanilla
        diamond: { item: "minecraft:diamond_block", fluid: "forge_frontier:molten_diamond" },
        emerald: { item: "minecraft:emerald_block", fluid: "forge_frontier:molten_emerald" },

        // Ad Astra
        etrium: { item: "ad_astra:etrium_block", fluid: "forge_frontier:molten_etrium" },

        // Alex’s Caves
        guano: { item: "alexscaves:guano_block", fluid: "forge_frontier:molten_guano" },
        pearl: { item: "alexscaves:block_of_pearl", fluid: "forge_frontier:molten_pearl" },
        scarlet_neodymium: { item: "alexscaves:block_of_scarlet_neodymium", fluid: "forge_frontier:molten_scarlet_neodymium" },
        azure_neodymium: { item: "alexscaves:block_of_azure_neodymium", fluid: "forge_frontier:molten_azure_neodymium" },
        uranium: { item: "alexscaves:block_of_uranium", fluid: "forge_frontier:molten_uranium" },
        sulfur: { item: "alexscaves:sulfur", fluid: "forge_frontier:molten_sulfur" },

        // Forge Frontier
        amberlite: { item: "forge_frontier:compressed_amber_1x", fluid: "forge_frontier:molten_amber" }
    };


    function bulkMeltingRecipe(id, ingredient, fluid) {
        var ingr = Ingredient.of(ingredient);
        if (ingr.stacks.empty) return; // skip if it doesn’t exist

        event.custom({
            type: "createmetallurgy:bulk_melting",
            ingredients: [ingr.toJson()],
            maxHeatRequirement: 50,
            minHeatRequirement: 6,
            processingTime: 200,
            results: [
                {
                    fluid: fluid,
                    amount: 810 // 9 ingots worth
                }
            ]
        }).id(id);
    }

    // Pass 1: forge storage_blocks
    meltingRecipes.forEach(function (material) {
        var blockTag = "#forge:storage_blocks/" + material.name;
        bulkMeltingRecipe("forge_frontier:bulk_melting/" + material.name, blockTag, material.fluid);
    });

    // Pass 2: special explicit blocks
    Object.keys(specialBlocks).forEach(function (key) {
        var data = specialBlocks[key];
        bulkMeltingRecipe("forge_frontier:bulk_melting/" + key + "_block", data.item, data.fluid);
    });
});
