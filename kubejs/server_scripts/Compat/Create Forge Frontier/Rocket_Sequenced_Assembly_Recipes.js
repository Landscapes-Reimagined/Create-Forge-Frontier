ServerEvents.recipes(event => {
    const incomplete = id => Item.of(`forge_frontier:incomplete_${id}`).toJson()
    const item = id => Item.of(`forge_frontier:${id}`).toJson()

    // Rocket Fuel Tank
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("createutilities:void_tank").toJson(),
        transitionalItem: incomplete("rocket_fuel_tank"),
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    incomplete("rocket_fuel_tank"),
                    Fluid.of("ad_astra:fuel", 1000).toJson()
                ],
                results: [incomplete("rocket_fuel_tank")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("rocket_fuel_tank")],
                results: [incomplete("rocket_fuel_tank")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("rocket_fuel_tank")],
                results: [incomplete("rocket_fuel_tank")]
            }
        ],
        results: [item("rocket_fuel_tank")],
        loops: 1
    }).id("forge_frontier:sequenced_assembly/rocket_fuel_tank")

    // Rocket Engine
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("createdieselgenerators:engine_piston").toJson(),
        transitionalItem: incomplete("rocket_engine"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("rocket_engine"),
                    Ingredient.of("createdieselgenerators:engine_turbocharger").toJson()
                ],
                results: [incomplete("rocket_engine")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("rocket_engine"),
                    Ingredient.of("create:precision_mechanism").toJson()
                ],
                results: [incomplete("rocket_engine")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("rocket_engine"),
                    Ingredient.of("create_dd:infernal_mechanism").toJson()
                ],
                results: [incomplete("rocket_engine")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("rocket_engine"),
                    Ingredient.of("create_dd:sealed_mechanism").toJson()
                ],
                results: [incomplete("rocket_engine")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("rocket_engine"),
                    Ingredient.of("create:blaze_cake").toJson()
                ],
                results: [incomplete("rocket_engine")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("rocket_engine")],
                results: [incomplete("rocket_engine")]
            }
        ],
        results: [item("rocket_engine")],
        loops: 3
    }).id("forge_frontier:sequenced_assembly/rocket_engine")

    // Combustion Chamber
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("ad_astra:desh_plate").toJson(),
        transitionalItem: incomplete("combustion_chamber"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("combustion_chamber"),
                    Ingredient.of("create:blaze_burner").toJson()
                ],
                results: [incomplete("combustion_chamber")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("combustion_chamber"),
                    Ingredient.of("cataclysm:witherite_ingot").toJson()
                ],
                results: [incomplete("combustion_chamber")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("combustion_chamber"),
                    Ingredient.of("create:electron_tube").toJson()
                ],
                results: [incomplete("combustion_chamber")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("combustion_chamber")],
                results: [incomplete("combustion_chamber")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("combustion_chamber")],
                results: [incomplete("combustion_chamber")]
            }
        ],
        results: [item("combustion_chamber")],
        loops: 1
    }).id("forge_frontier:sequenced_assembly/combustion_chamber")

    // Thermal Shield Matrix
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("ad_astra:mars_sand").toJson(),
        transitionalItem: incomplete("thermal_shield_matrix"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("thermal_shield_matrix"),
                    Ingredient.of("ad_astra:ostrum_plate").toJson()
                ],
                results: [incomplete("thermal_shield_matrix")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("thermal_shield_matrix"),
                    Fluid.of("minecraft:lava", 250).toJson()
                ],
                results: [incomplete("thermal_shield_matrix")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("thermal_shield_matrix")],
                results: [incomplete("thermal_shield_matrix")]
            }
        ],
        results: [item("thermal_shield_matrix")],
        loops: 3
    }).id("forge_frontier:sequenced_assembly/thermal_shield_matrix")

    // Solar Regulation Array
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("#forge:plates/steel").toJson(),
        transitionalItem: incomplete("solar_regulation_array"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("solar_regulation_array"),
                    Ingredient.of("minecraft:glass_pane").toJson()
                ],
                results: [incomplete("solar_regulation_array")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("solar_regulation_array"),
                    Ingredient.of("create:electron_tube").toJson()
                ],
                results: [incomplete("solar_regulation_array")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("solar_regulation_array"),
                    Ingredient.of("cataclysm:lava_power_cell").toJson()
                ],
                results: [incomplete("solar_regulation_array")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("solar_regulation_array")],
                results: [incomplete("solar_regulation_array")]
            }
        ],
        results: [item("solar_regulation_array")],
        loops: 3
    }).id("forge_frontier:sequenced_assembly/solar_regulation_array")

    // Deep Space Stabilizer Core
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:thermal_shield_matrix").toJson(),
        transitionalItem: incomplete("deep_space_stabilizer_core"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("deep_space_stabilizer_core"),
                    Ingredient.of("forge_frontier:solar_regulation_array").toJson()
                ],
                results: [incomplete("deep_space_stabilizer_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("deep_space_stabilizer_core"),
                    Ingredient.of("cataclysm:ancient_metal_ingot").toJson()
                ],
                results: [incomplete("deep_space_stabilizer_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("deep_space_stabilizer_core"),
                    Ingredient.of("cataclysm:ignitium_ingot").toJson()
                ],
                results: [incomplete("deep_space_stabilizer_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("deep_space_stabilizer_core")],
                results: [incomplete("deep_space_stabilizer_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("deep_space_stabilizer_core")],
                results: [incomplete("deep_space_stabilizer_core")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("deep_space_stabilizer_core"),
                    Fluid.of("forge_frontier:molten_calorite", 250).toJson()
                ],
                results: [incomplete("deep_space_stabilizer_core")]
            }
        ],
        results: [item("deep_space_stabilizer_core")],
        loops: 1
    }).id("forge_frontier:sequenced_assembly/deep_space_stabilizer_core")

    // Dimensional Stability Core
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:deep_space_stabilizer_core").toJson(),
        transitionalItem: incomplete("dimensional_stability_core"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("dimensional_stability_core"),
                    Ingredient.of("createteleporters:quantum_mechanism").toJson()
                ],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("dimensional_stability_core"),
                    Ingredient.of("minecraft:end_crystal").toJson()
                ],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("dimensional_stability_core"),
                    Ingredient.of("unusualend:chorus_petal").toJson()
                ],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("dimensional_stability_core"),
                    Ingredient.of("cataclysm:cursium_ingot").toJson()
                ],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("dimensional_stability_core"),
                    Ingredient.of("cataclysm:void_core").toJson()
                ],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("dimensional_stability_core"),
                    Ingredient.of("amendments:dragon_charge").toJson()
                ],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("dimensional_stability_core")],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("dimensional_stability_core")],
                results: [incomplete("dimensional_stability_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("dimensional_stability_core")],
                results: [incomplete("dimensional_stability_core")]
            }
        ],
        results: [item("dimensional_stability_core")],
        loops: 1
    }).id("forge_frontier:sequenced_assembly/dimensional_stability_core")

    // Magmatic Reinforcement Core - stage 2
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:unfinished_magmatic_reinforcement_core").toJson(),
        transitionalItem: incomplete("magmatic_reinforcement_core"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    Ingredient.of("forge_frontier:unfinished_magmatic_reinforcement_core"),
                    Ingredient.of("forge_frontier:primal_magma_rocket_casing").toJson()
                ],
                results: [incomplete("magmatic_reinforcement_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("magmatic_reinforcement_core")],
                results: [incomplete("magmatic_reinforcement_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("magmatic_reinforcement_core")],
                results: [incomplete("magmatic_reinforcement_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("magmatic_reinforcement_core")],
                results: [incomplete("magmatic_reinforcement_core")]
            }
        ],
        results: [item("magmatic_reinforcement_core")],
        loops: 1
    }).id("forge_frontier:sequenced_assembly/magmatic_reinforcement_core")
})