ServerEvents.tags("item", event => {
    // Removes All Tag from Woopie Cushion
    event.remove("artifacts:slot/all", "artifacts:whoopee_cushion")

    // Adds Charm Tag to Woopie Cushion
    event.add("curios:charm", "artifacts:whoopee_cushion")

    // Freeze Resistance Tag
    event.add("ad_astra:freeze_resistant_armor",[
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ])

    // Heat Resistant Armor Tag
    event.add("ad_astra:heat_resistant_armor",[
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
    ])

    // Hazmat Protection Tag
    event.add("create_new_age:nuclear/hazmat_suit",
        "#ad_astra:freeze_resistant_armor"
    )

    // Freeze Immune Equipment
    event.add("minecraft:freeze_immune_wearables",
        "#ad_astra:freeze_resistant_armor"
    )

    // Netherite Casing Tag
    event.add("forge_frontier:netherite_casing_application",[
        "regions_unexplored:stripped_brimwood_log",
        "regions_unexplored:stripped_brimwood_wood",
        "regions_unexplored:stripped_cobalt_log",
        "regions_unexplored:stripped_cobalt_wood"
    ])


    // MCTB Revertable Workbench
    event.add("mctb:revertable_workbench","minecraft:crafting_table")

    // Excavated Variants Stone Types Tag
    event.add("excavated_variants:stone_stones",[
        "forge_frontier:amberlite", "forge_frontier:aubrum", "forge_frontier:azurnium", "forge_frontier:frostite",
        "forge_frontier:glacium", "forge_frontier:guanite", "forge_frontier:neodymrium", "forge_frontier:pearlyte",
        "forge_frontier:pyroclast", "forge_frontier:radiantite", "forge_frontier:stellaris",
        "forge_frontier:sulphite", "forge_frontier:verdantine", "forge_frontier:uraniumnite",
        "enlightened_end:palerock", "create_dd:potassic", "deeperdarker:sculk_grime",
        "enlightened_end:void_shale"
    ])
    
    // Create Additions Plant Tag
    event.add("createaddition:plants",[
        "quark:chorus_weeds",
        "quark:chorus_twist",
        "quark:glow_lichen_growth"
    ])

    // Held Over Head Tags
    event.add("ad_astra:held_over_head",[
        "ad_astra_rocketed:tier_5_rocket",
        "ad_astra_rocketed:tier_6_rocket",
        "ad_astra_rocketed:tier_7_rocket",
        "ad_astra_giselle_addon:lander_icon"
    ])

    // AE Terminal Tags
    event.add("ae2:terminals", [
        "ae2:wireless_crafting_terminal",
        "ae2wtlib:wireless_pattern_encoding_terminal",
        "ae2wtlib:wireless_pattern_access_terminal",
        "ae2wtlib:wireless_universal_terminal",
        "expatternprovider:wireless_ex_pat"
    ])

    // Filling Tank Tags
    event.add("create_sa:filling_tanks",[
        "create_sa:small_filling_tank",
        "create_sa:medium_filling_tank",
        "create_sa:large_filling_tank"
    ])

    // Fueling Tank Tags
    event.add("create_sa:fueling_tanks",[
        "create_sa:small_fueling_tank",
        "create_sa:medium_fueling_tank",
        "create_sa:large_fueling_tank"
    ])

    // Oxygen Cans
    event.add("ad_astra_gisselle_addon:oxygen_cans",[
        "ad_astra_giselle_addon:oxygen_can",
        "ad_astra_giselle_addon:netherite_oxygen_can"
    ])

    // Remove Flamingo Belt from Curios Slot
    event.remove("curios:belt", [
        "artifacts:helium_flamingo",
        "artifacts:obsidian_skull",
        "artifacts:antidote_vessel",
        "artifacts:crystal_heart",
    ])
    
    // Remove Flamingo Belt from Artifact Belt Slot
    event.remove("artifacts:slot/belt", [
        "artifacts:helium_flamingo",
        "artifacts:obsidian_skull",
        "artifacts:antidote_vessel",
        "artifacts:crystal_heart"
    ])

    // Adds New Charm Tag
    event.add("curios:charm",[
        "artifacts:obsidian_skull",
        "artifacts:antidote_vessel",
        "artifacts:crystal_heart"
    ])

    // Removed Goggle Head Tag
    event.remove("curios:head",
        "create:goggles")

    // Create Goggles Curios Tag
    event.add("curios:goggles",
        "create:goggles")

    // New Elytra Curios Tag
    event.add("curios:elytras",
        "#elytraslot:elytra")

    // New Curious Back Slot tag
    event.add("curios:back", [
        "create:copper_backtank",
        "create:nether_backtank",
        "createqol:shadow_radiance_chestplate",
        "creategoggles:chainmail_backtank",
        "creategoggles:diamond_backtank",
        "creategoggles:golden_backtank",
        "creategoggles:iron_backtank",
        "creategoggles:leather_backtank"
    ])

    // New Curious Terminals Tags
    event.add("curios:terminals", "#ae2:terminals")

    // New Curios Oxgyen Cans Tags
    event.add("curios:oxygen_cans", "#ad_astra_gisselle_addon:oxygen_cans")

    // New Curios Tank Tags
    event.add("curios:tanks",[
        "#create_sa:filling_tanks",
        "#create_sa:fueling_tanks",
        "create_sa:creative_filling_tank"
    ])
    
    // New Ring Tag
    event.add("curios:flight_ring", "balancedflight:ascended_flight_ring")

    // Remove Flight Ring from Charm Slot
    event.remove("curios:charm", "balancedflight:ascended_flight_ring")

    // Remove Old Curios Curio Tags
    event.remove("curios:curio", [
        "ae2:wireless_crafting_terminal",
        "ae2wtlib:wireless_pattern_encoding_terminal",
        "ae2wtlib:wireless_pattern_access_terminal",
        "ae2wtlib:wireless_universal_terminal",
        "expatternprovider:wireless_ex_pat",
        "ad_astra_giselle_addon:oxygen_can",
        "ad_astra_giselle_addon:netherite_oxygen_can",
    ])

    // Remove Old Curios Back Tags
    event.remove("curios:back", [
        "minecraft:elytra",
        "alexsmobs:tarantula_hawk_elytra",
        "deeperdarker:soul_elytra"
    ])

    // Removes Netherite Jetpack from Back and Head Curios
    event.remove("curios:back", "create_sa:netherite_jetpack_chestplate")
    event.remove("curios:head", "create_sa:netherite_jetpack_chestplate")
    
    // Adds Jetpacks to custom jetpack slot
    event.add("curios:jetpacks", "#create_sa:jetpack")

    // Create Stone Types
    const createStones = [
        "forge_frontier:amberlite", "forge_frontier:aubrum", "forge_frontier:azurnium", "forge_frontier:frostite",
        "forge_frontier:glacium", "forge_frontier:guanite", "forge_frontier:neodymrium", "forge_frontier:pearlyte",
        "forge_frontier:pyroclast", "forge_frontier:radiantite", "forge_frontier:stellaris",
        "forge_frontier:sulphite", "forge_frontier:verdantine", "forge_frontier:uraniumnite",
        "enlightened_end:palerock", "create_dd:potassic", "deeperdarker:sculk_grime",
        "enlightened_end:void_shale", "minecraft:ancient_debris"
    ];
    createStones.forEach(stone => {
        const stoneName = stone.split(":")[1]; // Extract the name part after the colon
        event.add(`create:stone_types/${stoneName}`, stone);
    });

    // Crafting Tables
    const craftingTables = [
        "alpha_crafting_table", "baobab_crafting_table", "blackwood_crafting_table", "blue_bioshroom_crafting_table",
        "brimwood_crafting_table", "cobalt_crafting_table", "cypress_crafting_table", "ru_dead_crafting_table",
        "eucalyptus_crafting_table", "green_bioshroom_crafting_table", "joshua_crafting_table", "kapok_crafting_table",
        "larch_crafting_table", "magnolia_crafting_table", "maple_crafting_table", "mauve_crafting_table",
        "ru_palm_crafting_table", "pine_crafting_table", "pink_bioshroom_crafting_table", "ru_redwood_crafting_table",
        "ru_willow_crafting_table", "yellow_bioshroom_crafting_table", "socotra_crafting_table"
    ];
    craftingTables.forEach(table => event.add("mctb:revertable_workbench", `mctb:${table}`));

    // Small Cactus
    event.add("forge:small_cacti",[
        "creeperoverhaul:tiny_cactus","regions_unexplored:barrel_cactus"
    ]);

    // Cassette Tape
    event.add("iammusicplayer:cassette_tape",[
        "iammusicplayer:cassette_tape","iammusicplayer:cassette_tape_glass"
    ]);

    // Cerulean Stalk Block
    event.add("enlightened_end:cerulean_stalk_blocks",[
        "enlightened_end:cerulean_log","enlightened_end:stripped_cerulean_log"
    ]);

    // Magnolia Logs
    event.add("regions_unexplored:magnolia_logs",[
        "regions_unexplored:magnolia_log","regions_unexplored:stripped_magnolia_log","regions_unexplored:magnolia_wood","regions_unexplored:stripped_magnolia_wood"
    ]);

    // Lead Ore
    event.add("forge:ores/lead", "createnuclear:lead_ore")

    // Ad Astra Ores
    event.add("forge:ores/ice_shard", [
        "ad_astra:moon_ice_shard_ore", "ad_astra:deepslate_ice_shard_ore", "ad_astra:mars_ice_shard_ore", "ad_astra:glacio_ice_shard_ore"
    ]);
    event.add("forge:ores/cheese", "ad_astra:moon_cheese_ore");
    event.add("forge:ores/desh", ["ad_astra:moon_desh_ore", "ad_astra:deepslate_desh_ore"]);
    event.add("forge:ores/ostrum", ["ad_astra:mars_ostrum_ore", "ad_astra:deepslate_ostrum_ore"]);
    event.add("forge:ores/calorite", ["ad_astra:venus_calorite_ore", "ad_astra:deepslate_calorite_ore"]);

    // Alex Caves Ores
    event.add("forge:ores/redstone", "alexscaves:guanostone_redstone_ore");
    event.add("forge:ores/coal", "alexscaves:coprolith_coal_ore");
    event.add("forge:ores/uranium", "alexscaves:radrock_uranium_ore");

    // Enlightened End Ores
    event.add("forge:ores/bismuth", "enlightened_end:bismuth_ore");
    event.add("forge:ores/irradium", "enlightened_end:irradium_ore");
    event.add("forge:ores/malachite", "enlightened_end:malachite_ore");

    // Forge Templates/Smithing
    event.add("forge:templates/smithing", [
        "minecraft:netherite_upgrade_smithing_template", "forge_frontier:netherite_iron_upgrade",
        "forge_frontier:netherite_gold_upgrade", "forge_frontier:netherite_emerald_upgrade",
        "forge_frontier:netherite_diamond_upgrade", "cataclysm:ignitium_upgrade_smithing_template",
        "enlightened_end:adamantite_smithing_template", "endreborn:mysterious_upgrade_template", 
        "endreborn:curious_upgrade_template", "deeperdarker:warden_upgrade_smithing_template", 
        "create_additions_synthetics:gilded_upgrade", "create_ethium:ethium_smithing_template", 
        "ae2:fluix_upgrade_smithing_template", "cataclysm:cursium_upgrade_smithing_template",
        "unusualend:pearlescent_upgrade_smithing_template"
    ]);

    // Forge Energized Items
    event.add("forge:energized/items", [
        "create_new_age:overcharged_iron", "create_new_age:overcharged_golden_sheet", "create_new_age:overcharged_diamond",
        "create_new_age:overcharged_gold", "create_new_age:overcharged_iron_sheet", "forge_frontier:overcharged_netherite_ingot"
    ]);

    // Create Crushed Raw Materials
    const crushedMaterials = [
        "crushed_desh", "crushed_ostrum", "crushed_calorite", "crushed_bismuth", "crushed_irradium", "crushed_malachite",
        "crushed_redstone", "crushed_verdantine", "crushed_glacium", "crushed_debris", "crushed_grime", "crushed_aubrum",
        "crushed_pyroclast", "crushed_frostite", "crushed_stellaris", "crushed_radiantite", "crushed_shale",
        "crushed_palerock", "crushed_guanite", "crushed_pearlyte", "crushed_amberlite", "crushed_azurnium", "crushed_neodymrium",
        "crushed_uraniumnite", "crushed_sulphite"
    ];
    crushedMaterials.forEach(material => event.add("create:crushed_raw_materials", `forge_frontier:${material}`));

    // Forge Frontier End Remastered Eye Pieces
    const eyePieces = [
        "pirate_arrow", "pirate_crossbow", "cannon_ball", "soul_flame_staff", "infernal_ingot", "ras_solar_sword",
        "sun_disc", "piglin_kings_crown", "piglin_war_axe", "piglin_totem", "infernal_chisel", "hellhounds_fang"
    ];
    eyePieces.forEach(piece => event.add("forge_frontier:end_remastered_eye_pieces", `forge_frontier:${piece}`));

    // Forge Frontier Molds
    const molds = [
        "upgrade_mold", "axe_mold", "boots_mold", "block_mold", "chestplate_mold", "coal_mold", "gem_mold",
        "head_mold", "helmet_mold", "hoe_mold", "ingot_mold", "leggings_mold", "pickaxe_mold", "shovel_mold",
        "skull_mold", "sword_mold", "mold_template"
    ];
    molds.forEach(mold => event.add("forge_frontier:mold_templates", `forge_frontier:${mold}`));

    // Connector Tag
    event.add("forge_frontier:connector", [
        "create_new_age:electrical_connector", "createaddition:connector", "createaddition:large_connector", "tfgm:cable_connector"
    ]);

    // Create Casing
    event.add("create:casing", [
        "forge_frontier:forge_rocket_casing",
        "forge_frontier:steel_rocket_casing",
        "forge_frontier:desh_rocket_casing",
        "forge_frontier:ostrum_rocket_casing",
        "forge_frontier:calorite_rocket_casing",
        "forge_frontier:primal_magma_rocket_casing",
        "forge_frontier:malachite_rocket_casing",
    ]);

    // Knife Tags
    const knifeItems = event.get("forge:tools/knives").getObjectIds();

    const additionalKnifeTags = [
      "farmersdelight:tools/knives",
      "farmersdelight:straw_harvesters",
      "nethersdelight:tools/hunting_tools",
      "sliceanddice:allowed_tools",
      "ends_delight:dragon_loot_tools"
    ];
  
    additionalKnifeTags.forEach(tag => {
      event.add(tag, knifeItems);
    });

    event.add("forge:ingots",[
        "create_ethium:ethium_ingot",
        "createcasing:chorium_ingot",
        "createdeco:industrial_iron_ingot",
        "forge_frontier:overcharged_netherite_ingot",
        "alexscaves:scarlet_neodymium_ingot",
        "alexscaves:azure_neodymium_ingot",
        "endreborn:tungsten_ingot",
        "endreborn:endorium_ingot",
        "createutilities:void_steel_ingot",
        "enlightened_end:adamantite_ingot",
        "enlightened_end:bismuth_ingot",
        "cataclysm:cursium_ingot",
        "cataclysm:ignitium_ingot",
        "cataclysm:black_steel_ingot",
        "cataclysm:ancient_metal_ingot",
        "cataclysm:witherite_ingot",
        "ad_astra:etrium_ingot",
        "advancednetherite:netherite_diamond_ingot",
        "advancednetherite:netherite_emerald_ingot",
        "advancednetherite:netherite_gold_ingot",
        "advancednetherite:netherite_iron_ingot",
        "create_new_age:overcharged_gold",
        "create_new_age:overcharged_iron"
    ]);

    event.add("forge:gems", "create_new_age:overcharged_diamond");

    event.add("forge:storage_blocks", "#advancednetherite:netherite_blocks")

});