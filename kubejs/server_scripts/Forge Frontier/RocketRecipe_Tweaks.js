// Ad Astra Rocket Recipe Tweaks
ServerEvents.recipes(event => {

    // Rocket Casing Recipes
    const casingRecipes = [
        {
            id: 'steel_rocket_casing',
            ingredients: [
                { tag: 'forge_frontier:netherite_casing_application' },
                { tag: 'ad_astra:steel_ingots' }
            ]
        },
        {
            id: 'desh_rocket_casing',
            ingredients: [
                { item: 'forge_frontier:steel_rocket_casing' },
                { item: 'ad_astra:desh_ingot' }
            ]
        },
        {
            id: 'ostrum_rocket_casing',
            ingredients: [
                { item: 'forge_frontier:desh_rocket_casing' },
                { item: 'ad_astra:ostrum_ingot' }
            ]
        },
        {
            id: 'calorite_rocket_casing',
            ingredients: [
                { item: 'forge_frontier:ostrum_rocket_casing' },
                { item: 'ad_astra:calorite_ingot' }
            ]
        },
        {
            id: 'malachite_rocket_casing',
            ingredients: [
                { item: 'forge_frontier:calorite_rocket_casing' },
                { item: 'enlightened_end:malachite' }
            ]
        },
        {
            id: 'primal_magma_rocket_casing',
            ingredients: [
                { item: 'forge_frontier:malachite_rocket_casing' },
                { item: 'alexscaves:primal_magma' }
            ]
        },
        {
            id: 'forge_rocket_casing',
            ingredients: [
                { item: 'forge_frontier:primal_magma_rocket_casing' },
                { item: 'forge_frontier:forge_alloy' }
            ]
        }
    ];

    casingRecipes.forEach(recipe => {
        event.custom({
            type: 'create:item_application',
            ingredients: recipe.ingredients,
            results: [{ item: `forge_frontier:${recipe.id}` }]
        }).id(`forge_frontier:item_application/${recipe.id}`);
    });

    // Tier 1 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " SSS ",
            " SSS ",
            " SDS ",
            " SBS ",
            " SPS ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            S: Ingredient.of("forge_frontier:steel_rocket_casing"),
            D: Ingredient.of("ad_astra:steel_door"),
            B: Ingredient.of("create:display_board"),
            P: Ingredient.of("create:precision_mechanism"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:steel_tank"),
            T: Ingredient.of("create_sa:large_fueling_tank"),
            E: Ingredient.of("ad_astra:steel_engine")
        },
        result: Ingredient.of("ad_astra:tier_1_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_1_rocket")

    // Tier 2 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " DDD ",
            " DDD ",
            " DdD ",
            " DRD ",
            " DDD ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            D: Ingredient.of("forge_frontier:desh_rocket_casing"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_1_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:desh_tank"),
            T: Ingredient.of("create_sa:large_fueling_tank"),
            E: Ingredient.of("ad_astra:desh_engine")
        },
        result: Ingredient.of("ad_astra:tier_2_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_2_rocket")

    // Tier 3 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " OOO ",
            " OOO ",
            " OdO ",
            " ORO ",
            " OOO ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            O: Ingredient.of("forge_frontier:ostrum_rocket_casing"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_2_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:ostrum_tank"),
            T: Ingredient.of("create_sa:large_fueling_tank"),
            E: Ingredient.of("ad_astra:ostrum_engine")
        },
        result: Ingredient.of("ad_astra:tier_3_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_3_rocket")

    // Tier 4 Rocket

    event.remove({ id: "ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " CCC ",
            " CCC ",
            " CdC ",
            " CRC ",
            " CCC ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            C: Ingredient.of("forge_frontier:calorite_rocket_casing"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_3_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("ad_astra:calorite_tank"),
            T: Ingredient.of("create_sa:large_fueling_tank"),
            E: Ingredient.of("ad_astra:calorite_engine")
        },
        result: Ingredient.of("ad_astra:tier_4_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_4_rocket")
    
    // Tier 5 Rocket

    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_5_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " MMM ",
            " MMM ",
            " MdM ",
            " MRM ",
            " MMM ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            M: Ingredient.of("forge_frontier:malachite_rocket_casing"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra:tier_4_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("forge_frontier:tier_5_tank"),
            T: Ingredient.of("create_sa:large_fueling_tank"),
            E: Ingredient.of("forge_frontier:tier_5_engine")
        },
        result: Ingredient.of("ad_astra_rocketed:tier_5_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_5_rocket")
    
    // Tier 6 Rocket

    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_6_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " MMM ",
            " MMM ",
            " MdM ",
            " MRM ",
            " MMM ",
            "FtTtF",
            "F E F"
        ],
        key: {
            N: Ingredient.of("ad_astra:rocket_nose_cone"),
            M: Ingredient.of("forge_frontier:primal_magma_rocket_casing"),
            d: Ingredient.of("ad_astra:steel_door"),
            R: Ingredient.of("ad_astra_rocketed:tier_5_rocket"),
            F: Ingredient.of("ad_astra:rocket_fin"),
            t: Ingredient.of("forge_frontier:tier_6_tank"),
            T: Ingredient.of("create_sa:large_fueling_tank"),
            E: Ingredient.of("forge_frontier:tier_6_engine"),
        },
        result: Ingredient.of("ad_astra_rocketed:tier_6_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/tier_6_rocket")

    // Forge Rocket, aka Tier 7 Rocket
    
    event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_7_rocket_from_nasa_workbench"})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "  N  ",
            " CCC ",
            " CCC ",
            " CDC ",
            " CRC ",
            " CCC ",
            "FTcTf",
            "F E f"
        ],
        key: {
            F: Ingredient.of("forge_frontier:forge_rocket_fin_left"),
            f: Ingredient.of("forge_frontier:forge_rocket_fin_right"),
            E: Ingredient.of("forge_frontier:forge_rocket_engine"),
            T: Ingredient.of("forge_frontier:forge_rocket_tank"),
            D: Ingredient.of("forge_frontier:forge_rocket_door"),
            N: Ingredient.of("forge_frontier:forge_rocket_nose_cone"),
            C: Ingredient.of("forge_frontier:forge_rocket_casing"),
            R: Ingredient.of('ad_astra_rocketed:tier_6_rocket'),
            c: Ingredient.of("forge_frontier:forge_rocket_core")
        },
        result: Ingredient.of("ad_astra_rocketed:tier_7_rocket"),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/forge_rocket")

    // New Rocket Parts
        // Engines
            // Tier 5
            event.shaped(
                Item.of("forge_frontier:tier_5_engine"),
                [
                    "MMM",
                    "BEB",
                    " I "
                ],
                {
                    M: "enlightened_end:malachite_block",
                    B: "enlightened_end:bismuth_ingot",
                    E: "ad_astra:calorite_engine",
                    I: "enlightened_end:irradium_bar"
                    
                }
            ).id( "forge_frontier:shaped/tier_5_engine" )

            // Tier 6
            event.shaped(
                Item.of("forge_frontier:tier_6_engine"),
                [
                    "MMM",
                    "eEe",
                    " D "
                ],
                {
                    M: "alexscaves:primal_magma",
                    e: "alexscaves:enigmatic_engine",
                    E: "forge_frontier:tier_5_engine",
                    D: "alexscaves:pure_darkness"
                }
            ).id( "forge_frontier:shaped/tier_6_engine" )
            
            // Forge Rocket Enging
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "BFG",
                    "jRE",
                    "SJT"
                ],
                key: {
                    B: Ingredient.of("immersive_aircraft:biplane"),
                    F: Ingredient.of("advanced_ae:flight_card"),
                    G: Ingredient.of("hangglider:reinforced_hang_glider"),
                    j: Ingredient.of("create_sa:netherite_jetpack_chestplate"),
                    R: Ingredient.of("angelring:energetic_angel_ring"),
                    E: Ingredient.of("minecraft:elytra"),
                    S: Ingredient.of("create:track_station"),
                    J: Ingredient.of("ad_astra:jet_suit"),
                    T: Ingredient.of("create:controls")
                },
                result: Ingredient.of("forge_frontier:forge_rocket_engine"),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/forge_rocket_engine")

        // Tanks
            // Tier 5
            event.shaped(
                Item.of("forge_frontier:tier_5_tank"),
                [
                    "MM ",
                    "MTB",
                    "MM "
                ],
                {
                    M: "enlightened_end:malachite_block",
                    B: "enlightened_end:bismuth_ingot",
                    T: "ad_astra:calorite_tank",
                    
                }
            ).id( "forge_frontier:shaped/tier_5_tank" )

            // Tier 6
            event.shaped(
                Item.of("forge_frontier:tier_6_tank"),
                [
                    "MM ",
                    "MTC",
                    "MM "
                ],
                {
                    M: "alexscaves:primal_magma",
                    T: "forge_frontier:tier_5_tank",
                    C: "alexscaves:ominous_catalyst"
                }
            ).id( "forge_frontier:shaped/tier_6_tank" )
            
        // Rocket Fin
            // Left Fin
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "WBRE",
                    "SsKD",
                    "bHCd",
                    "ATIr"
                ],
                key: {
                    W: Ingredient.of("silentsdelight:plated_warden_heart"),
                    B: Ingredient.of("miners_delight:improvised_barbecue_stick"),
                    R: Ingredient.of("aquaculturedelight:rollmops"),
                    E: Ingredient.of("oceansdelight:cabbage_wrapped_elder_guardian"),
                    S: Ingredient.of("delightful:smore"),
                    s: Ingredient.of("farmersdelight:shepherds_pie_block"),
                    K: Ingredient.of("alexsdelight:kangaroo_pasta"),
                    D: Ingredient.of("ends_delight:dragon_leg_with_sauce_block"),
                    b: Ingredient.of("casualness_delight:donkey_burger"),
                    H: Ingredient.of("nethersdelight:stuffed_hoglin"),
                    C: Ingredient.of("delightful:deluxe_cheeseburger"),
                    d: Ingredient.of("ends_delight:dragon_breath_and_chorus_soup"),
                    A: Ingredient.of("tconstruct:ender_cake"),
                    T: Ingredient.of("alexscavesdelight:toxic_hamburger"),
                    I: Ingredient.of("alexscavesdelight:heart_of_iron_humburger"),
                    r: Ingredient.of("ad_astra:rocket_fin"),
                },
                result: Ingredient.of("forge_frontier:forge_rocket_fin_left"),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/forge_rocket_fin_left")
            
            // Right Fin
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "LPDS",
                    "RFTt",
                    "HEeM",
                    "BNdr"
                ],
                key: {
                    L: Ingredient.of("apotheosis:ender_library"),
                    P: Ingredient.of("apotheosis:pearl_endshelf"),
                    D: Ingredient.of("apotheosis:draconic_endshelf"),
                    S: Ingredient.of("apotheosis:sightshelf_t2"),
                    R: Ingredient.of("apotheosis:rectifier_t3"),
                    F: Ingredient.of("apotheosis:filtering_shelf"),
                    T: Ingredient.of("apotheosis:treasure_shelf"),
                    t: Ingredient.of("apotheosis:extraction_tome"),
                    H: Ingredient.of("create_enchantment_industry:hyper_experience_bottle"),
                    E: Ingredient.of("minecraft:enchanting_table"),
                    e: Ingredient.of("create_enchantment_industry:disenchanter"),
                    M: Ingredient.of("experienceobelisk:molecular_metamorpher"),
                    B: Ingredient.of("experienceobelisk:bibliophage"),
                    N: Ingredient.of("experienceobelisk:nightmare_bottle"),
                    d: Ingredient.of("experienceobelisk:daydream_bottle"),
                    r: Ingredient.of("ad_astra:rocket_fin"),
                },
                result: Ingredient.of("forge_frontier:forge_rocket_fin_right"),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/forge_rocket_fin_right")

        // Nose Cone
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "CIbMn",
                "dVRBw",
                "HScWG",
                "PEADQ",
                "FNJsT"
            ],
            key: {
                C: Ingredient.of("cataclysm:cursium_helmet"),
                I: Ingredient.of("cataclysm:ignitium_helmet"),
                b: Ingredient.of("cataclysm:bone_reptile_helmet"),
                M: Ingredient.of("cataclysm:monstrous_helm"),
                n: Ingredient.of("aquaculture:neptunium_helmet"),
                d: Ingredient.of("advancednetherite:netherite_diamond_helmet"),
                V: Ingredient.of("cataclysm:void_forge"),
                R: Ingredient.of("cataclysm:soul_render"),
                B: Ingredient.of("cataclysm:gauntlet_of_bulwark"),
                w: Ingredient.of("deeperdarker:warden_helmet"),
                H: Ingredient.of("alexscaves:hood_of_darkness"),
                S: Ingredient.of("alexscaves:extinction_spear"),
                c: Ingredient.of("ad_astra:rocket_nose_cone"),
                W: Ingredient.of("deeperdarker:warden_sword"),
                G: Ingredient.of("alexscaves:gingerbread_helmet"),
                P: Ingredient.of("alexscaves:primordial_helmet"),
                E: Ingredient.of("create_ethium:ethium_sword"),
                A: Ingredient.of("enlightened_end:adamantite_sword"),
                D: Ingredient.of("advancednetherite:netherite_diamond_sword"),
                Q: Ingredient.of("createqol:shadow_radiance_helmet"),
                F: Ingredient.of("ae2:fluix_sword"),
                N: Ingredient.of("aquaculture:neptunium_sword"),
                J: Ingredient.of("ad_astra:jet_suit_helmet"),
                s: Ingredient.of("cataclysm:ancient_spear"),
                T: Ingredient.of("minecraft:trident")
            },
            result: Ingredient.of("forge_frontier:forge_rocket_nose_cone"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/forge_rocket_nose_cone");

        // Rocket Tank
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "FIfD",
                "SBbC",
                "VcvT"
            ],
            key: {
                F: Ingredient.of("ae2:fluid_storage_cell_256k"),
                I: Ingredient.of("ae2:item_storage_cell_256k"),
                f: Ingredient.of("appflux:fe_256k_cell"),
                D: Ingredient.of("ae2things:disk_drive_256k"),
                S: Ingredient.of("sophisticatedstorage:netherite_shulker_box"),
                B: Ingredient.of("sophisticatedstorage:netherite_barrel"),
                b: Ingredient.of("sophisticatedbackpacks:netherite_backpack"),
                C: Ingredient.of("create:stock_ticker"),
                V: Ingredient.of("createenderlink:ender_tank"),
                c: Ingredient.of("createenderlink:ender_vault"),
                v: Ingredient.of("create:item_vault"),
                T: Ingredient.of("mob_grinding_utils:jumbo_tank")
            },
            result: Ingredient.of("forge_frontier:forge_rocket_tank"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/forge_rocket_tank");    

        // Rocket Core
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "QSC",
                "Ici",
                "sPT",
                "VLU",
                "AHY"
            ],
            key: {
                Q: Ingredient.of("createteleporters:quantum_mechanism"),
                S: Ingredient.of("create_dd:stargaze_singularity"),
                C: Ingredient.of("create_dd:calculation_mechanism"),
                I: Ingredient.of("create_dd:inductive_mechanism"),
                c: Ingredient.of("create_additions_synthetics:creative_core"),
                i: Ingredient.of("create_dd:infernal_mechanism"),
                s: Ingredient.of("create_dd:sealed_mechanism"),
                P: Ingredient.of("create:precision_mechanism"),
                T: Ingredient.of("create_dd:integrated_mechanism"),
                V: Ingredient.of("create_things_and_misc:vibration_mechanism"),
                L: Ingredient.of("create_power_loader:brass_chunk_loader"),
                U: Ingredient.of("createnuclear:uranium_rod"),
                A: Ingredient.of("create_sa:steam_engine"),
                H: Ingredient.of("create_sa:heat_engine"),
                Y: Ingredient.of("create_sa:hydraulic_engine"),
            },
            result: Ingredient.of("forge_frontier:forge_rocket_core"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/forge_rocket_core");
        
        // Rocket Door
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "ONDE",
                "M  m",
                "CVGA",
                "g  L",
                "cQRP"
            ],
            key: {
                O: Ingredient.of("minecraft:stone"),
                N: Ingredient.of("minecraft:netherrack"),
                D: Ingredient.of("deeperdarker:sculk_stone"),
                E: Ingredient.of("minecraft:end_stone"),
                M: Ingredient.of("ad_astra:moon_stone"),
                m: Ingredient.of("ad_astra:mars_stone"),
                C: Ingredient.of("ad_astra:mercury_stone"),
                V: Ingredient.of("ad_astra:venus_stone"),
                G: Ingredient.of("ad_astra:glacio_stone"),
                A: Ingredient.of("alexscaves:muck"),
                g: Ingredient.of("alexscaves:guanostone"),
                L: Ingredient.of("alexscaves:limestone"),
                c: Ingredient.of("alexscaves:cake_layer"),
                Q: Ingredient.of("alexscaves:galena"),
                R: Ingredient.of("alexscaves:radrock"),
                P: Ingredient.of("createteleporters:custom_portal"),
            },
            result: Ingredient.of("forge_frontier:forge_rocket_door"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/forge_rocket_door");

        // Forge Alloy
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "LAMI",
                "BDOC",
                "SNUa",
                "sPGm",
                "iVnE"
            ],
            key: {
                L: Ingredient.of("forge_frontier:compressed_lead_4x"),
                A: Ingredient.of("forge_frontier:compressed_shaft_bundle_4x"),
                M: Ingredient.of("forge_frontier:compressed_malachite_4x"),
                I: Ingredient.of("forge_frontier:compressed_irradium_4x"),
                B: Ingredient.of("forge_frontier:compressed_bismuth_4x"),
                D: Ingredient.of("forge_frontier:compressed_desh_4x"),
                O: Ingredient.of("forge_frontier:compressed_ostrum_4x"),
                C: Ingredient.of("forge_frontier:compressed_calorite_4x"),
                S: Ingredient.of("forge_frontier:compressed_scarlet_neodymium_4x"),
                N: Ingredient.of("forge_frontier:compressed_azure_neodymium_4x"),
                U: Ingredient.of("forge_frontier:compressed_uranium_4x"),
                a: Ingredient.of("forge_frontier:compressed_amber_4x"),
                s: Ingredient.of("forge_frontier:compressed_sulfur_4x"),
                P: Ingredient.of("forge_frontier:compressed_pearl_4x"),
                G: Ingredient.of("forge_frontier:compressed_guano_4x"),
                m: Ingredient.of("forge_frontier:compressed_mithril_4x"),
                i: Ingredient.of("forge_frontier:compressed_industrial_iron_4x"),
                V: Ingredient.of("forge_frontier:compressed_mechanism_block_4x"),
                n: Ingredient.of("forge_frontier:compressed_netherite-diamond_4x"),
                E: Ingredient.of("forge_frontier:compressed_ethium_1x"),
            },
            result: Ingredient.of("forge_frontier:forge_alloy"),
            acceptMirrored: false
        }).id("forge_frontier:mechanical_crafting/forge_alloy");


})