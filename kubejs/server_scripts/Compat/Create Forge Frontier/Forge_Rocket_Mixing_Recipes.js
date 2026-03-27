ServerEvents.recipes(event => {
    // Forge Rocket Tank
    event.custom({
        type: "create:mixing",
        heatRequirement: "superheated",
        ingredients: [
            Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
            Ingredient.of("extrastorage:storagepart_1024k").toJson(),
            Ingredient.of("extrastorage:storagepart_65536k_fluid").toJson(),
            Ingredient.of("sophisticatedstorage:stack_upgrade_omega_tier").toJson(),
            Ingredient.of("create_bs:netherite_item_vault").toJson(),
            Ingredient.of("deeperdarker:sculk_transmitter").toJson()
        ],
        results: [
            Item.of("forge_frontier:forge_rocket_tank").toJson()
        ]
    }).id("forge_frontier:mixing/forge_rocket_tank")
})