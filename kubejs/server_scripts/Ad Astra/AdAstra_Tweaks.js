// Ad Astra Recipe Tweaks
ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})

    // New Jetsuit Recipe
    event.remove({ id: 'ad_astra:jet_suit'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'C C',
            'TST',
            'EJE'
        ],
        key: {
            C: Ingredient.of('#ad_astra:calorite_plates').toJson(),
            T: Ingredient.of('ad_astra:calorite_tank').toJson(),
            S: Ingredient.of('ad_astra:netherite_space_suit').toJson(),
            E: Ingredient.of('ad_astra:etrionic_capacitor').toJson(),
            J: Ingredient.of('create_sa:andesite_jetpack_chestplate').toJson()
        },
        result: Ingredient.of('ad_astra:jet_suit').toJson(),
        acceptMirrored: false
    }).id('forge_frontier:mechanical_crafting/jet_suit');    

    // Creates Brand New Recipes for Ad Astra Machines
        // Mechanical Crafting Recipes

            // Creates New Etrionic Blast Furnace Recipe
            event.remove({ id: 'ad_astra:etrionic_blast_furnace'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('#forge:plates/iron').toJson(),
                    B: Ingredient.of('minecraft:redstone').toJson(),
                    C: Ingredient.of('create:blaze_burner').toJson()
                },
                result: Ingredient.of('ad_astra:etrionic_blast_furnace').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/etrionic_blast_furnace');

            // Create New Coal Generator Recipe
            event.remove({ id: 'ad_astra:coal_generator'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'ACA',
                    'ABA'
                ],
                key: {
                    A: Ingredient.of('#forge:plates/iron').toJson(),
                    B: Ingredient.of('minecraft:iron_ingot').toJson(),
                    C: Ingredient.of('create:blaze_burner').toJson()
                },
                result: Ingredient.of('ad_astra:coal_generator').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/coal_generator');

            // Creates New Compressor Recipe
            event.remove({ id: 'ad_astra:compressor'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'A A',
                    'ABA'
                ],
                key: {
                    A: Ingredient.of('#forge:plates/iron').toJson(),
                    B: Ingredient.of('create:mechanical_press').toJson()
                },
                result: Ingredient.of('ad_astra:compressor').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/compressor');
            
            // Creates New Nasa Workbench Recipe
            event.remove({ id: 'ad_astra:nasa_workbench'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'CDC',
                    'EFE'
                ],
                key: {
                    A: Ingredient.of('minecraft:redstone_torch').toJson(),
                    B: Ingredient.of('create:analog_lever').toJson(),
                    C: Ingredient.of('#ad_astra:steel_plates').toJson(),
                    D: Ingredient.of('create:mechanical_crafter').toJson(),
                    E: Ingredient.of('minecraft:redstone_block').toJson(),
                    F: Ingredient.of('ad_astra:steel_block').toJson()
                },
                result: Ingredient.of('ad_astra:nasa_workbench').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/workbench');

            // Creates New Fuel Refinery Recipe
            event.remove({ id: 'ad_astra:fuel_refinery'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('#ad_astra:steel_plates').toJson(),
                    B: Ingredient.of('create:fluid_pipe').toJson(),
                    C: Ingredient.of('create_new_age:stirling_engine').toJson()
                },
                result: Ingredient.of('ad_astra:fuel_refinery').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/fuel_refinery');

            // Creates New Water Pump Recipe
            event.remove({ id: 'ad_astra:water_pump'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'A ',
                    'BA',
                    'C '
                ],
                key: {
                    A: Ingredient.of('create:mechanical_pump').toJson(),
                    B: Ingredient.of('ad_astra:desh_plate').toJson(),
                    C: Ingredient.of('create:spout').toJson()
                },
                result: Ingredient.of('ad_astra:water_pump').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/water_pump');

            // Creates New Oxygen Sensor
            event.remove({ id: 'ad_astra:oxygen_sensor'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'CDC',
                    'AEA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:ostrum_plate').toJson(),
                    B: Ingredient.of('ad_astra:fan').toJson(),
                    C: Ingredient.of('ad_astra:ostrum_ingot').toJson(),
                    D: Ingredient.of('create:content_observer').toJson(),
                    E: Ingredient.of('create:electron_tube').toJson()
                },
                result: Ingredient.of('ad_astra:oxygen_sensor').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/oxygen_sensor');

            // Creates New Oxygen Loader Recipe
            event.remove({ id: 'ad_astra:oxygen_loader'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'CDC',
                    'AEA'
                ],
                key: {
                    A: Ingredient.of('#ad_astra:steel_plates').toJson(),
                    B: Ingredient.of('ad_astra:fan').toJson(),
                    C: Ingredient.of('ad_astra:gas_tank').toJson(),
                    D: Ingredient.of('createaddition:connector').toJson(),
                    E: Ingredient.of('minecraft:redstone_block').toJson()
                },
                result: Ingredient.of('ad_astra:oxygen_loader').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/oxygen_loader');

            // Creates New Energizer Recipe
            event.remove({ id: 'ad_astra:energizer'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'ACA',
                    'DAD'
                ],
                key: {
                    A: Ingredient.of('ad_astra:ostrum_plate').toJson(),
                    B: Ingredient.of('minecraft:diamond_block').toJson(),
                    C: Ingredient.of('createaddition:tesla_coil').toJson(),
                    D: Ingredient.of('ad_astra:ostrum_block').toJson()
                },
                result: Ingredient.of('ad_astra:energizer').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/energizer');

            // Creates New Rocket Sensor Recipe
            event.remove({ id: 'ad_astra_giselle_addon:crafting/rocket_sensor'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                    B: Ingredient.of('#forge:plates/iron').toJson(),
                    C: Ingredient.of('create:content_observer').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:rocket_sensor').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/rocket_sensor');

            // Creates New Automation NASA Workbench Recipe
            event.remove({ id: 'ad_astra_giselle_addon:crafting/automation_nasa_workbench'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'CDC',
                    'ABA'
                ],
                key: {
                    A: Ingredient.of('#ad_astra:steel_plates').toJson(),
                    B: Ingredient.of('create:smart_chute').toJson(),
                    C: Ingredient.of('minecraft:redstone').toJson(),
                    D: Ingredient.of('ad_astra:nasa_workbench').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:automation_nasa_workbench').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/automation_nasa_workbench');

            // Creates New Fuel Loader Recipe
            event.remove({ id: 'ad_astra_giselle_addon:crafting/fuel_loader'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                    B: Ingredient.of('#forge:plates/iron').toJson(),
                    C: Ingredient.of('create:mechanical_pump').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:fuel_loader').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/fuel_loader');

            // Creates New Gravity Normalizer Recipe
            event.remove({ id: 'ad_astra_giselle_addon:crafting/gravity_normalizer'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'AAA'
                ],
                key: {
                    A: Ingredient.of('ad_astra:steel_ingot').toJson(),
                    B: Ingredient.of('#forge:plates/iron').toJson(),
                    C: Ingredient.of('ad_astra:space_boots').toJson()
                },
                result: Ingredient.of('ad_astra_giselle_addon:gravity_normalizer').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/gravity_normalizer');

            // Creates New Solar Panel Recipe
            event.remove({ id: 'ad_astra:solar_panel'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'AAA',
                    'BCB',
                    'CCC'
                ],
                key: {
                    A: Ingredient.of('#chipped:blue_stained_glass').toJson(),
                    B: Ingredient.of('#ad_astra:steel_plates').toJson(),
                    C: Ingredient.of('ad_astra:desh_plate').toJson()
                },
                result: Ingredient.of('ad_astra:solar_panel').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/solar_panel');

            // Creates New Oxygen Distributor Recipe
            event.remove({ id: 'ad_astra:oxygen_distributor'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'ACA',
                    'DED'
                ],
                key: {
                    A: Ingredient.of('ad_astra:fan').toJson(),
                    B: Ingredient.of('ad_astra:large_gas_tank').toJson(),
                    C: Ingredient.of('ad_astra:oxygen_loader').toJson(),
                    D: Ingredient.of('ad_astra:desh_plate').toJson(),
                    E: Ingredient.of('ad_astra:oxygen_gear').toJson(),
                },
                result: Ingredient.of('ad_astra:oxygen_distributor').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/oxygen_distributor');

            // Creates New Cryo Freezer Recipe
            event.remove({ id: 'ad_astra:cryo_freezer'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'BCB',
                    'DBD'
                ],
                key: {
                    A: Ingredient.of('ad_astra:ostrum_plate').toJson(),
                    B: Ingredient.of('ad_astra:ostrum_ingot').toJson(),
                    C: Ingredient.of('ad_astra:ostrum_tank').toJson(),
                    D: Ingredient.of('ad_astra:ostrum_block').toJson(),
                },
                result: Ingredient.of('ad_astra:cryo_freezer').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/cryo_freezer');

            // Creates New Tier 1 Rover Recipe
            event.remove({ id: 'ad_astra:tier_1_rover'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'A B',
                    'CAD',
                    'EFE'
                ],
                key: {
                    A: Ingredient.of('ad_astra:desh_block').toJson(),
                    B: Ingredient.of('#forge:rods/iron').toJson(),
                    C: Ingredient.of('ad_astra:steel_block').toJson(),
                    D: Ingredient.of('ad_astra:desh_engine').toJson(),
                    E: Ingredient.of('ad_astra:wheel').toJson(),
                    F: Ingredient.of('ad_astra:desh_plate').toJson()
                },
                result: Ingredient.of('ad_astra:tier_1_rover').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/tier_1_rover');

            // Creates New Launch Pad Recipe
            event.remove({ id: 'ad_astra:launch_pad'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'ABA',
                    'BAB',
                    'ABA'
                ],
                key: {
                    A: Ingredient.of('#ad_astra:steel_plates').toJson(),
                    B: Ingredient.of('#forge:plates/iron').toJson()
                },
                result: Ingredient.of('ad_astra:launch_pad').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/launch_pad');

            // Mixing Recipes

                // Cryo Fuel Mixing Recipe
                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        },
                        {
                            item: 'ad_astra:ice_shard',
                        }
                    ],
                    results: [
                        {
                            fluid: 'ad_astra:cryo_fuel',
                            amount: 1000
                        }
                    ],
                    processingTime: 100, 
                    heatRequirement: "superheated"
                }).id('forge_frontier:mixing/cryo_fuel')                 

                // Oil to Fuel Mixing Recipe
                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            fluid: 'ad_astra:oil',
                            amount: 1000
                        }
                    ],
                    results: [
                        {
                            fluid: 'ad_astra:fuel',
                            amount: 1000
                        }
                    ],
                    processingTime: 100, 
                    heatRequirement: "heated"
                }).id('forge_frontier:mixing/oil_fuel')                 

                // Creates Oil Mixing Recipe
                event.custom({
                    type: "create:mixing",
                    ingredients: [
                        {
                            fluid: 'forge_frontier:molten_carbon',
                            amount: 100
                        },
                        {
                            fluid: 'createaddition:bioethanol',
                            amount: 100
                        }
                    ],
                    results: [
                        {
                            fluid: 'ad_astra:oil',
                            amount: 100
                        }
                    ],
                    heatRequirement: "superheated"
                }).id('forge_frontier:mixing/oil');

            // Shaped Recipes

                // Changes Steel Engine Recipe to Use Blaze Burner
                event.remove({ id: "ad_astra:steel_engine"})
                event.shaped(
                    Item.of('ad_astra:steel_engine'),
                    [
                        'SSS',
                        'SBS',
                        ' F '
                    ],
                    {
                        S: '#ad_astra:steel_plates',
                        B: 'create:blaze_burner',
                        F: 'ad_astra:fan'
                        
                    }
                ).id( 'forge_frontier:shaped/steel_engine' )

        
        
})