
ServerEvents.tags('block', event => {
    
    // Create Wrenchable
    event.add('create:wrench_pickup', [
        'create:schematicannon',
        'create:schematic_table',
        'iammusicplayer:music_manager',
        'iammusicplayer:cassette_deck',
        'iammusicplayer:boombox',
        'chargers:charger_t1',
        'chargers:charger_t2',
        'chargers:charger_t3',
        'chargers:charger_t4',
        'chargers:wireless_charger',
        'sophisticatedstorage:controller',
        'sophisticatedstorage:storage_link',
        'sophisticatedstorage:storage_io',
        'sophisticatedstorage:storage_input',
        'sophisticatedstorage:storage_output',
        'farmersdelight:cooking_pot',
        'farmersdelight:skillet',
        'farmersdelight:cutting_board',
        'aquaculture:tackle_box',
        'easy_villagers:incubator',
        'easy_villagers:converter',
        'easy_villagers:breeder',
        'easy_villagers:farmer',
        'easy_villagers:auto_trader',
        'easy_villagers:trader',
        'chipped:tinkering_table',
        'chipped:alchemy_bench',
        'chipped:mason_table',
        'chipped:loom_table',
        'chipped:carpenters_table',
        'chipped:glassblower',
        'chipped:botanist_workbench',
        'bobberdetector:bobber_detector',
        'hyperbox:hyperbox',
        'pipez:item_pipe',
        'pipez:fluid_pipe',
        'pipez:energy_pipe',
        'pipez:universal_pipe',
        'ad_astra:desh_fluid_pipe',
        'ad_astra:ostrum_fluid_pipe',
        'ad_astra:cable_duct',
        'ad_astra:fluid_pipe_duct',
        'ad_astra:coal_generator',
        'ad_astra:compressor',
        'ad_astra:etrionic_blast_furnace',
        'ad_astra:fuel_refinery',
        'ad_astra:oxygen_loader',
        'ad_astra:solar_panel',
        'ad_astra:water_pump',
        'ad_astra:oxygen_distributor',
        'ad_astra:gravity_normalizer',
        'ad_astra:energizer',
        'ad_astra:cryo_freezer',
        'ad_astra:oxygen_sensor',
        'ad_astra:launch_pad',
        'ad_astra:vent',
        'ad_astra:radio',
        'ad_astra_giselle_addon:gravity_normalizer',
        'ad_astra_giselle_addon:rocket_sensor',
        'ad_astra_giselle_addon:fuel_loader',
        'miners_delight:copper_pot',
        'farmersrespite:kettle',
        '#botanypots:all_botany_pots',
        '#chipped:lantern',
        '#chipped:soul_lantern',
        '#ad_astra:globes',
        '#ad_astra:sliding_doors',
        '#create:casing',
        'create_new_age:magnetite_block',
        'create_new_age:redstone_magnet',
        'create_new_age:layered_magnet',
        'create_new_age:fluxuated_magnetite',
        'create_new_age:netherite_magnet',
        'mob_grinding_utils:fan',
        'mob_grinding_utils:saw',
        'mob_grinding_utils:spikes',
        'mob_grinding_utils:absorption_hopper',
        'mob_grinding_utils:tank',
        'mob_grinding_utils:tank_sink',
        'mob_grinding_utils:jumbo_tank',
        'mob_grinding_utils:xp_tap',
        'mob_grinding_utils:entity_conveyor',
        'mob_grinding_utils:ender_inhibitor_on',
        'mob_grinding_utils:ender_inhibitor_off',
        'mob_grinding_utils:xpsolidifier',
        'trashcans:item_trash_can',
        'trashcans:liquid_trash_can',
        'trashcans:energy_trash_can',
        'trashcans:ultimate_trash_can',
        '#tconstruct:smeltery',
        '#tconstruct:foundry',
        'tconstruct:foundry_controller',
        'tconstruct:smeltery_controller',
        'easy_piglins:barterer'
    ]);

// Create Casing Tag
event.add("create:casing", [
    "forge_frontier:forge_rocket_casing",
    "forge_frontier:steel_rocket_casing",
    "forge_frontier:desh_rocket_casing",
    "forge_frontier:ostrum_rocket_casing",
    "forge_frontier:calorite_rocket_casing",
    "forge_frontier:primal_magma_rocket_casing",
    "forge_frontier:malachite_rocket_casing",
]);

// Adds Fan Processing Catalysts
event.add('create_dd:fan_processing_catalysts_freezing', 'create_connected:fan_freezing_catalyst')
event.add('create_dd:fan_processing_catalysts_superheating', 'create_connected:fan_seething_catalyst')



});