ServerEvents.recipes(event => {
    const incomplete = id => Item.of(`forge_frontier:incomplete_${id}`).toJson()
    const item = id => Item.of(`forge_frontier:${id}`).toJson()

    // Forge Rocket Engine
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:rocket_engine").toJson(),
        transitionalItem: incomplete("forge_rocket_engine"),
        sequence: [
            {
                type: "create:filling",
                ingredients: [
                    incomplete("forge_rocket_engine"),
                    Fluid.of("createaddition:bioethanol", 1000).toJson()
                ],
                results: [incomplete("forge_rocket_engine")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("forge_rocket_engine"),
                    Fluid.of("createdieselgenerators:diesel", 1000).toJson()
                ],
                results: [incomplete("forge_rocket_engine")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("forge_rocket_engine"),
                    Fluid.of("ad_astra:cryo_fuel", 1000).toJson()
                ],
                results: [incomplete("forge_rocket_engine")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("forge_rocket_engine"),
                    Fluid.of("alexscaves:acid", 1000).toJson()
                ],
                results: [incomplete("forge_rocket_engine")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("forge_rocket_engine")],
                results: [incomplete("forge_rocket_engine")]
            }
        ],
        results: [item("forge_rocket_engine")],
        loops: 10
    }).id("forge_frontier:sequenced_assembly/forge_rocket_engine")

    // Culinary Life Support Matrix
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("farmersdelight:chocolate_pie").toJson(),
        transitionalItem: incomplete("culinary_life_support_matrix"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("delightful:baklava").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("oceansdelight:squid_rings").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            }, 
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("nethersdelight:stuffed_hoglin").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("silentsdelight:heartburger").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("ends_delight:grilled_shulker_block").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("alexscavesdelight:pure_darkness_pie").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Ingredient.of("alexscavesdelight:extra_sugar_rush_block").toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("culinary_life_support_matrix"),
                    Fluid.of("alexscaves:purple_soda", 1000).toJson()
                ],
                results: [incomplete("culinary_life_support_matrix")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("culinary_life_support_matrix")],
                results: [incomplete("culinary_life_support_matrix")]
            }
        ],
        results: [item("culinary_life_support_matrix")],
        loops: 8
    }).id("forge_frontier:sequenced_assembly/culinary_life_support_matrix")

    // Arcane Calibration Matrix
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("minecraft:enchanting_table").toJson(),
        transitionalItem: incomplete("arcane_calibration_matrix"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:ender_library").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:pearl_endshelf").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:draconic_endshelf").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:sightshelf_t2").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:rectifier_t3").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:filtering_shelf").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:treasure_shelf").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("apotheosis:extraction_tome").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("create_enchantment_industry:disenchanter").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("experienceobelisk:molecular_metamorpher").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("experienceobelisk:bibliophage").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("experienceobelisk:nightmare_bottle").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Ingredient.of("experienceobelisk:daydream_bottle").toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("arcane_calibration_matrix"),
                    Fluid.of("create_enchantment_industry:hyper_experience", 1000).toJson()
                ],
                results: [incomplete("arcane_calibration_matrix")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("arcane_calibration_matrix")],
                results: [incomplete("arcane_calibration_matrix")]
            }
        ],
        results: [item("arcane_calibration_matrix")],
        loops: 4
    }).id("forge_frontier:sequenced_assembly/arcane_calibration_matrix")

    // Forge Rocket Core
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:magmatic_reinforcement_core").toJson(),
        transitionalItem: incomplete("forge_rocket_core"),
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create:precision_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("createfisheryindustry:pneumatic_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create_dd:integrated_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create_dd:calculation_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create_dd:inductive_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create_dd:infernal_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create_dd:sealed_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("create_things_and_misc:vibration_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:deploying",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Ingredient.of("resonant_synthesis:deeper_mechanism").toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:filling",
                ingredients: [
                    incomplete("forge_rocket_core"),
                    Fluid.of("create_dd:shimmer", 1000).toJson()
                ],
                results: [incomplete("forge_rocket_core")]
            },
            {
                type: "create:pressing",
                ingredients: [incomplete("forge_rocket_core")],
                results: [incomplete("forge_rocket_core")]
            }
        ],
        results: [item("forge_rocket_core")],
        loops: 10
    }).id("forge_frontier:sequenced_assembly/forge_rocket_core")

    // Forge Rocket Door
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("unusualend:teleportation_anchor").toJson(),
        transitionalItem: incomplete("forge_rocket_door"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("minecraft:stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("minecraft:netherrack").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("deeperdarker:sculk_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("minecraft:end_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("ad_astra:moon_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("ad_astra:mars_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("ad_astra:mercury_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("ad_astra:venus_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("ad_astra:glacio_stone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("alexscaves:muck").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("alexscaves:guanostone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("alexscaves:limestone").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("alexscaves:cake_layer").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("alexscaves:galena").toJson()], results: [incomplete("forge_rocket_door")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_door"), Ingredient.of("alexscaves:radrock").toJson()], results: [incomplete("forge_rocket_door")] },
            {
                type: "create:pressing",
                ingredients: [incomplete("forge_rocket_door")],
                results: [incomplete("forge_rocket_door")]
            }
        ],
        results: [item("forge_rocket_door")],
        loops: 32
    }).id("forge_frontier:sequenced_assembly/forge_rocket_door")

})