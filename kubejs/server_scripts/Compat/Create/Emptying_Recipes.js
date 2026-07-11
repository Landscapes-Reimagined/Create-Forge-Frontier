ServerEvents.recipes(event => 
    {
        // Sap Recipes
        var wood_types = [
            // Minecraft Trees
                "minecraft:stripped_bamboo_block",
                "minecraft:stripped_birch_log",
                "minecraft:stripped_birch_wood",
                "minecraft:stripped_mangrove_log",
                "minecraft:stripped_mangrove_wood",
                "minecraft:stripped_cherry_log",
                "minecraft:stripped_cherry_wood",
                "minecraft:stripped_crimson_stem",
                "minecraft:stripped_crimson_hyphae",
                "minecraft:stripped_warped_stem",
                "minecraft:stripped_warped_hyphae",

            // Quark Trees
                "quark:stripped_azalea_log",
                "quark:stripped_azalea_wood",
                "quark:stripped_blossom_log",
                "quark:stripped_blossom_wood",

            // Dreams and Desires
                "create_dd:stripped_rose_log",
                "create_dd:stripped_rose_wood",
                "create_dd:stripped_smoked_log",
                "create_dd:stripped_smoked_wood",
                "create_dd:stripped_spirit_log",
                "create_dd:stripped_spirit_wood",

            // Deeper and Darker
                "deeperdarker:stripped_echo_log",
                "deeperdarker:stripped_echo_wood",

            // Alex Caves
                "alexscaves:stripped_pewen_log",
                "alexscaves:stripped_pewen_wood",
                "alexscaves:stripped_thornwood_log",
                "alexscaves:stripped_thornwood_wood",

            // Regions Unexplored
                "regions_unexplored:stripped_baobab_log",
                "regions_unexplored:stripped_baobab_wood",
                "regions_unexplored:stripped_blackwood_log",
                "regions_unexplored:stripped_blackwood_wood",
                "regions_unexplored:stripped_blue_bioshroom_stem",
                "regions_unexplored:stripped_blue_bioshroom_hyphae",
                "regions_unexplored:stripped_brimwood_log",
                "regions_unexplored:stripped_brimwood_wood",
                "regions_unexplored:stripped_cobalt_log",
                "regions_unexplored:stripped_cobalt_wood",
                "regions_unexplored:stripped_cypress_log",
                "regions_unexplored:stripped_cypress_wood",
                "regions_unexplored:stripped_dead_log",
                "regions_unexplored:stripped_dead_wood",
                "regions_unexplored:stripped_eucalyptus_log",
                "regions_unexplored:stripped_eucalyptus_wood",
                "regions_unexplored:stripped_green_bioshroom_stem",
                "regions_unexplored:stripped_green_bioshroom_hyphae",
                "regions_unexplored:stripped_joshua_log",
                "regions_unexplored:stripped_joshua_wood",
                "regions_unexplored:stripped_kapok_log",
                "regions_unexplored:stripped_kapok_wood",
                "regions_unexplored:stripped_larch_log",
                "regions_unexplored:stripped_larch_wood",
                "regions_unexplored:stripped_magnolia_log",
                "regions_unexplored:stripped_magnolia_wood",
                "regions_unexplored:stripped_maple_log",
                "regions_unexplored:stripped_maple_wood",
                "regions_unexplored:stripped_mauve_log",
                "regions_unexplored:stripped_mauve_wood",
                "regions_unexplored:stripped_palm_log",
                "regions_unexplored:stripped_palm_wood",
                "regions_unexplored:stripped_pine_log",
                "regions_unexplored:stripped_pine_wood",
                "regions_unexplored:stripped_pink_bioshroom_stem",
                "regions_unexplored:stripped_pink_bioshroom_hyphae",
                "regions_unexplored:stripped_redwood_log",
                "regions_unexplored:stripped_redwood_wood",
                "regions_unexplored:stripped_socotra_log",
                "regions_unexplored:stripped_socotra_wood",
                "regions_unexplored:stripped_willow_log",
                "regions_unexplored:stripped_willow_wood",
                "regions_unexplored:stripped_yellow_bioshroom_stem",
                "regions_unexplored:stripped_yellow_bioshroom_hyphae"
        ];

        wood_types.forEach(wood_type => {
            event.custom({
                type: 'create:emptying',
                ingredients: [{ item: wood_type, count: 1 }],
                results: [
                    { item: wood_type, chance: 0.4 },
                    { fluid: "create_dd:sap", amount: 20 }
                ]
            }).id(`forge_frontier:item_draining/sap_${wood_type.replace(":", "_")}`);
        });
    }
);