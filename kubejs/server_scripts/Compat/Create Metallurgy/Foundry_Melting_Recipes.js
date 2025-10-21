ServerEvents.recipes(function (event) {
    var materials = [
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

    // Hardcoded items that aren’t in forge tags
    var specialItems = {
        nuggets: {
            etrium: { item: "ad_astra:etrium_nugget", fluid: "forge_frontier:molten_etrium" },
            bismuth: { item: "enlightened_end:bismuth_nugget", fluid: "forge_frontier:molten_bismuth" }
        },
        ingots: {
            etrium: { item: "ad_astra:etrium_ingot", fluid: "forge_frontier:molten_etrium" },
            scarlet_neodymium: { item: "alexscaves:scarlet_neodymium_ingot", fluid: "forge_frontier:molten_scarlet_neodymium" },
            bismuth: { item: "enlightened_end:bismuth_ingot", fluid: "forge_frontier:molten_bismuth" },
            malachite: { item: "enlightened_end:malachite", fluid: "forge_frontier:molten_malachite" },
            irradium: { item: "enlightened_end:irradium_bar", fluid: "forge_frontier:molten_irradium" },
            diamond: { item: "minecraft:diamond", fluid: "forge_frontier:molten_diamond" },
            emerald: { item: "minecraft:emerald", fluid: "forge_frontier:molten_emerald" },
            echo: { item: "minecraft:echo_shard", fluid: "forge_frontier:molten_echo_shard" },
            coal: { item: "minecraft:coal", fluid: "forge_frontier:molten_carbon" },
            andesite: { item: "minecraft:andesite", fluid: "create_additions_synthetics:molten_andesite"}
        },
        rods: {
            etrium: { item: "ad_astra:etrium_rod", fluid: "forge_frontier:molten_etrium" }
        },
        plates: {
            etrium: { item: "ad_astra:etrium_plate", fluid: "forge_frontier:molten_etrium" }
        }
    };

    function meltingRecipe(id, ingredient, amount, fluid, time, extra) {
        if (!time) time = 20;
        if (!extra) extra = [];

        var ingr = Ingredient.of(ingredient);
        if (ingr.stacks.empty) return; // Skip if ingredient doesn’t exist

        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [ingr.toJson()],
            processingTime: time,
            results: ([{ fluid: fluid, amount: amount }].concat(extra))
        }).id(id);
    }

    // Normal materials pass
    materials.forEach(function (material) {
        var items = {
            dust: "forge_frontier:" + material.name + "_dust",
            dirty_dust: "forge_frontier:dirty_" + material.name + "_dust",
            ingot: "#forge:ingots/" + material.name,
            nugget: "#forge:nuggets/" + material.name,
            rod: "#forge:rods/" + material.name,
            sheet: "#forge:plates/" + material.name,
            wire: "#forge:wires/" + material.name,
            raw: "#forge:raw_materials/" + material.name,
            stone: "#create:stone_types/" + material.name
        };

        meltingRecipe("forge_frontier:melting/" + material.name + "_dust_to_molten", items.dust, 180, material.fluid);
        meltingRecipe("forge_frontier:melting/" + material.name + "_dirty_dust_to_molten", items.dirty_dust, 90, material.fluid, 30, [
            { fluid: "createmetallurgy:molten_slag", amount: 30 }
        ]);
        meltingRecipe("forge_frontier:melting/" + material.name + "_ingot_to_molten", items.ingot, 90, material.fluid, 40);
        meltingRecipe("forge_frontier:melting/" + material.name + "_nugget_to_molten", items.nugget, 20, material.fluid, 4);
        meltingRecipe("forge_frontier:melting/" + material.name + "_rod_to_molten", items.rod, 45, material.fluid);
        meltingRecipe("forge_frontier:melting/" + material.name + "_sheet_to_molten", items.sheet, 90, material.fluid, 40);
        meltingRecipe("forge_frontier:melting/" + material.name + "_wire_to_molten", items.wire, 45, material.fluid);
        meltingRecipe("forge_frontier:melting/" + material.name + "_raw_to_molten", items.raw, 90, material.fluid, 40, [
            { fluid: "createmetallurgy:molten_slag", amount: 45 }
        ]);
        meltingRecipe("forge_frontier:melting/" + material.name + "_stone_to_molten", items.stone, 90, material.fluid, 40, [
            { fluid: "createmetallurgy:molten_slag", amount: 45 }
        ]);
    });

    // Extra pass for specialItems not covered in materials
    Object.keys(specialItems).forEach(function (category) {
        Object.keys(specialItems[category]).forEach(function (key) {
            var data = specialItems[category][key];
            var idBase = "forge_frontier:melting/" + key + "_" + category;

            if (category === "nuggets") {
                meltingRecipe(idBase, data.item, 20, data.fluid, 4);
            }
            if (category === "ingots") {
                meltingRecipe(idBase, data.item, 90, data.fluid, 40);
            }
            if (category === "rods") {
                meltingRecipe(idBase, data.item, 45, data.fluid);
            }
            if (category === "plates") {
                meltingRecipe(idBase, data.item, 90, data.fluid, 40);
            }
        });
    });
});
