ServerEvents.recipes(function (event) {
    var INGOT_MB = 90;

    var alloyingRecipes = [
        {
            id: "netherite_iron",
            ingredients: [
                { amount: 4 * INGOT_MB, fluid: "createmetallurgy:molten_iron" },
                { amount: 1 * INGOT_MB, fluid: "createmetallurgy:molten_netherite" }
            ],
            result: { fluid: "forge_frontier:molten_netherite_iron", amount: INGOT_MB }
        },
        {
            id: "netherite_gold",
            ingredients: [
                { amount: 4 * INGOT_MB, fluid: "createmetallurgy:molten_gold" },
                { amount: 1 * INGOT_MB, fluid: "forge_frontier:molten_netherite_iron" }
            ],
            result: { fluid: "forge_frontier:molten_netherite_gold", amount: INGOT_MB }
        },
        {
            id: "netherite_emerald",
            ingredients: [
                { amount: 4 * INGOT_MB, fluid: "forge_frontier:molten_emerald" },
                { amount: 1 * INGOT_MB, fluid: "forge_frontier:molten_netherite_gold" }
            ],
            result: { fluid: "forge_frontier:molten_netherite_emerald", amount: INGOT_MB }
        },
        {
            id: "netherite_diamond",
            ingredients: [
                { amount: 4 * INGOT_MB, fluid: "forge_frontier:molten_diamond" },
                { amount: 1 * INGOT_MB, fluid: "forge_frontier:molten_netherite_emerald" }
            ],
            result: { fluid: "forge_frontier:molten_netherite_diamond", amount: INGOT_MB }
        }
    ];

    // --- Remove old Netherite base recipe ---
    event.remove({ id: "createmetallurgy:alloying/netherite" });

    // --- Add updated Netherite base recipe ---
    event.custom({
        type: "createmetallurgy:alloying",
        heatRequirement: "heated",
        ingredients: [
            { amount: 180, fluid: "forge_frontier:molten_debris", nbt: {} },
            { amount: 120, fluid: "createmetallurgy:molten_gold", nbt: {} }
        ],
        processingTime: 120,
        results: [
            { amount: INGOT_MB, fluid: "createmetallurgy:molten_netherite" }
        ]
    }).id("forge_frontier:alloying/netherite");

    // --- Add progression chain recipes ---
    alloyingRecipes.forEach(function (r) {
        var ingrJson = r.ingredients.map(function (ing) {
            return { amount: ing.amount, fluid: ing.fluid, nbt: {} };
        });

        event.custom({
            type: "createmetallurgy:alloying",
            heatRequirement: "heated",
            ingredients: ingrJson,
            processingTime: 120,
            results: [ r.result ]
        }).id("forge_frontier:alloying/" + r.id);
    });
});
