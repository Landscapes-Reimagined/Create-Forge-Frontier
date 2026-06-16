ServerEvents.recipes(event => {
    // Adaptive Reinforcement Matrix
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "ABCDE",
            "FGHIJ",
            "KLMNO"
        ],
        key: {
            A: Ingredient.of("create:cardboard_chestplate").toJson(),
            B: Ingredient.of("createqol:shadow_radiance_chestplate").toJson(),
            C: Ingredient.of("create_ethium:ethium_armor_chestplate").toJson(),
            D: Ingredient.of("alexscaves:gingerbread_chestplate").toJson(),
            E: Ingredient.of("alexscaves:hazmat_chestplate").toJson(),
            F: Ingredient.of("aquaculture:neptunium_chestplate").toJson(),
            G: Ingredient.of("cataclysm:bone_reptile_chestplate").toJson(),
            H: Ingredient.of("cataclysm:ignitium_elytra_chestplate").toJson(),
            I: Ingredient.of("cataclysm:cursium_chestplate").toJson(),
            J: Ingredient.of("experienceobelisk:cognitive_chestplate").toJson(),
            K: Ingredient.of("endelurgy:enderite_chestplate").toJson(),
            L: Ingredient.of("unusualend:warped_chestplate").toJson(),
            M: Ingredient.of("ad_astra_tools:calorite_chestplate").toJson(),
            N: Ingredient.of("create_sa:brass_chestplate").toJson(),
            O: Ingredient.of("deeperdarker:resonarium_chestplate").toJson()
        },
        result: Item.of("forge_frontier:adaptive_reinforcement_matrix").toJson(),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/adaptive_reinforcement_matrix")

    // Forge Rocket Fin
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  S  ",
            " TRT ",
            "TEWET",
            "PWWWP",
            "P   P"
        ],
        key: {
            S: Ingredient.of("forge_frontier:solar_regulation_array").toJson(),
            T: Ingredient.of("alexscaves:tectonic_shard").toJson(),
            R: Ingredient.of("ad_astra:rocket_fin").toJson(),
            E: Ingredient.of("cataclysm:essence_of_the_storm").toJson(),
            W: Ingredient.of("cataclysm:witherite_ingot").toJson(),
            P: Ingredient.of("forge_frontier:primal_magma_rocket_casing").toJson()
        },
        result: Item.of("forge_frontier:forge_rocket_fin").toJson(),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/forge_rocket_fin")

    // Forge Rocket Nose Cone
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  C  ",
            " IDV ",
            "EEREE"
        ],
        key: {
            C: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
            I: Ingredient.of("cataclysm:ignitium_ingot").toJson(),
            D: Ingredient.of("forge_frontier:deep_space_stabilizer_core").toJson(),
            V: Ingredient.of("cataclysm:abyssal_egg").toJson(),
            E: Ingredient.of("forge_frontier:primal_magma_rocket_casing").toJson(),
            R: Ingredient.of("forge_frontier:dimensional_stability_core").toJson()
        },
        result: Item.of("forge_frontier:forge_rocket_nose_cone").toJson(),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/forge_rocket_nose_cone")

    // Forge Alloy
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "XAMI",
                    "BDOC",
                    "SNUa",
                    "sPGm",
                    "iVnE"
                ],
                key: {
                    X: Ingredient.of("createcompression:compressed_experience_4x"),
                    A: Ingredient.of("forge_frontier:compressed_etrium_4x"),
                    M: Ingredient.of("forge_frontier:compressed_adamantite_4x"),
                    I: Ingredient.of("forge_frontier:compressed_luxite_4x"),
                    B: Ingredient.of("forge_frontier:compressed_tungsten_4x"),
                    D: Ingredient.of("forge_frontier:compressed_desh_4x"),
                    O: Ingredient.of("forge_frontier:compressed_ostrum_4x"),
                    C: Ingredient.of("forge_frontier:compressed_calorite_4x"),
                    S: Ingredient.of("forge_frontier:compressed_scarlet_neodymium_4x"),
                    N: Ingredient.of("forge_frontier:compressed_azure_neodymium_4x"),
                    U: Ingredient.of("forge_frontier:compressed_uranium_4x"),
                    a: Ingredient.of("forge_frontier:compressed_amber_5x"),
                    s: Ingredient.of("forge_frontier:compressed_sulfur_4x"),
                    P: Ingredient.of("forge_frontier:compressed_pearl_4x"),
                    G: Ingredient.of("forge_frontier:compressed_guano_4x"),
                    m: Ingredient.of("forge_frontier:compressed_mithril_2x"),
                    i: Ingredient.of("forge_frontier:compressed_industrial_iron_4x"),
                    V: Ingredient.of("createcompression:compressed_coal_5x"),
                    n: Ingredient.of("forge_frontier:compressed_netherite-diamond_3x"),
                    E: Ingredient.of("forge_frontier:compressed_ethium_4x"),
                },
                result: Ingredient.of("forge_frontier:forge_alloy"),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/forge_alloy");
})