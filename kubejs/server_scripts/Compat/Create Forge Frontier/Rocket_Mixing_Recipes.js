ServerEvents.recipes(event => {
    // Oxygen Module
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            Fluid.of("ad_astra:oxygen", 1000).toJson(),
            Ingredient.of("ad_astra:oxygen_loader").toJson()
        ],
        results: [
            Item.of("forge_frontier:oxygen_module").toJson()
        ]
    }).id("forge_frontier:mixing/oxygen_module")

    // Oxidizer Catalyst - stage 1
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            Ingredient.of("forge_frontier:aubrum_dust").toJson(),
            Ingredient.of("forge_frontier:aubrum_dust").toJson(),
            Ingredient.of("forge_frontier:aubrum_dust").toJson(),
            Ingredient.of("forge_frontier:aubrum_dust").toJson(),
            Ingredient.of("minecraft:redstone").toJson(),
            Ingredient.of("minecraft:redstone").toJson(),
            Ingredient.of("minecraft:redstone").toJson(),
            Ingredient.of("minecraft:redstone").toJson(),
            Ingredient.of("ad_astra:ice_shard").toJson(),
            Ingredient.of("ad_astra:ice_shard").toJson(),
            Ingredient.of("ad_astra:ice_shard").toJson(),
            Ingredient.of("ad_astra:ice_shard").toJson(),
            Ingredient.of("ad_astra:ice_shard").toJson(),
            Fluid.of("minecraft:lava", 250).toJson()
        ],
        results: [
            Item.of("forge_frontier:incomplete_oxidizer_catalyst").toJson()
        ]
    }).id("forge_frontier:mixing/incomplete_oxidizer_catalyst")

    // Magmatic Reinforcement Core - stage 1
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            Ingredient.of("alexscaves:tectonic_shard").toJson(),
            Ingredient.of("alexscaves:pure_darkness").toJson(),
            Ingredient.of("forge_frontier:thermal_shield_matrix").toJson(),
            Ingredient.of("alexscaves:immortal_embryo").toJson(),
            Ingredient.of("forge_frontier:dimensional_stability_core").toJson()
        ],
        results: [
            Item.of("forge_frontier:unfinished_magmatic_reinforcement_core").toJson()
        ]
    }).id("forge_frontier:mixing/unfinished_magmatic_reinforcement_core")
})