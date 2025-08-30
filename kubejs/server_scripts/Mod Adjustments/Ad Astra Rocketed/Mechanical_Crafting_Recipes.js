ServerEvents.recipes(event => 
    {
        // Rocket Recipes
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

                // Tier 7 Rocket, aka Forge Rocket
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
    }
)