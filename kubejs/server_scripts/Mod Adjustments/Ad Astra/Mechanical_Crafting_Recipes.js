ServerEvents.recipes(event => 
    {
        // Jetsuit Recipe
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

        // Etrionic Blast Furnace Recipe
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

        // Coal Generator Recipe
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

        // Compressor Recipe
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
            
        // Fuel Refinery Recipe
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

        // Water Pump Recipe
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

        // Oxygen Sensor
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

        // Oxygen Loader Recipe
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

        // Energizer Recipe
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

        // Rocket Sensor Recipe
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

        // Fuel Loader Recipe
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

        // Gravity Normalizer Recipe
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

        // Solar Panel Recipe
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

        // Oxygen Distributor Recipe
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

        // Cryo Freezer Recipe
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

        // Tier 1 Rover Recipe
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

        // Launch Pad Recipe
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
    }
)