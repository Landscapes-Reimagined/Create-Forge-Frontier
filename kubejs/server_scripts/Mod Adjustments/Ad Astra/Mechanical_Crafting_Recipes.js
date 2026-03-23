ServerEvents.recipes(event => 
    {
        // Rocket Recipes

            // Tier 1 Rocket
            event.remove({ id: "ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   N   ",
                    "  SSS  ",
                    "  SFS  ",
                    "  SOS  ",
                    "  SPS  ",
                    "  SFS  ",
                    " SSSSS ",
                    "SStttSS",
                    "f fEf f"
                ],
                key: {
                    N: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
                    S: Ingredient.of("forge_frontier:steel_rocket_casing").toJson(),
                    F: Ingredient.of("forge_frontier:vacuum_structural_frame").toJson(),
                    O: Ingredient.of("forge_frontier:oxygen_module").toJson(),
                    P: Ingredient.of("create:precision_mechanism").toJson(),
                    t: Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
                    E: Ingredient.of("forge_frontier:rocket_engine").toJson(),
                    f: Ingredient.of("ad_astra:rocket_fin").toJson()
                },
                result: Ingredient.of("ad_astra:tier_1_rocket").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/tier_1_rocket")

            // Tier 2 Rocket
            event.remove({ id: "ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   N   ",
                    "  DDD  ",
                    "  DCD  ",
                    "  DOD  ",
                    "  DRD  ",
                    "  DCD  ",
                    " DDDDD ",
                    "DDtttDD",
                    "f fEf f"
                ],
                key: {
                    N: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
                    D: Ingredient.of("forge_frontier:desh_rocket_casing").toJson(),
                    C: Ingredient.of("forge_frontier:combustion_chamber").toJson(),
                    O: Ingredient.of("forge_frontier:oxidizer_catalyst").toJson(),
                    R: Ingredient.of("ad_astra:tier_1_rocket").toJson(),
                    t: Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
                    E: Ingredient.of("forge_frontier:rocket_engine").toJson(),
                    f: Ingredient.of("ad_astra:rocket_fin").toJson()
                },
                result: Ingredient.of("ad_astra:tier_2_rocket").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/tier_2_rocket")

            // Tier 3 Rocket
            event.remove({ id: "ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   N   ",
                    "  OOO  ",
                    "  OHO  ",
                    "  OSO  ",
                    "  ORO  ",
                    "  OHO  ",
                    " OOOO  ",
                    "OOtttOO",
                    "f fEf f"
                ],
                key: {
                    N: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
                    O: Ingredient.of("forge_frontier:ostrum_rocket_casing").toJson(),
                    H: Ingredient.of("forge_frontier:thermal_shield_matrix").toJson(),
                    S: Ingredient.of("forge_frontier:solar_regulation_array").toJson(),
                    R: Ingredient.of("ad_astra:tier_2_rocket").toJson(),
                    t: Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
                    E: Ingredient.of("forge_frontier:rocket_engine").toJson(),
                    f: Ingredient.of("ad_astra:rocket_fin").toJson()
                },
                result: Ingredient.of("ad_astra:tier_3_rocket").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/tier_3_rocket")

            // Tier 4 Rocket
            event.remove({ id: "ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   N   ",
                    "  CCC  ",
                    "  CXC  ",
                    "  CHC  ",
                    "  CRC  ",
                    "  CSC  ",
                    " CCCCC ",
                    "CCtttCC",
                    "f fEf f"
                ],
                key: {
                    N: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
                    C: Ingredient.of("forge_frontier:calorite_rocket_casing").toJson(),
                    X: Ingredient.of("forge_frontier:deep_space_stabilizer_core").toJson(),
                    H: Ingredient.of("forge_frontier:thermal_shield_matrix").toJson(),
                    R: Ingredient.of("ad_astra:tier_3_rocket").toJson(),
                    S: Ingredient.of("forge_frontier:solar_regulation_array").toJson(),
                    t: Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
                    E: Ingredient.of("forge_frontier:rocket_engine").toJson(),
                    f: Ingredient.of("ad_astra:rocket_fin").toJson()
                },
                result: Ingredient.of("ad_astra:tier_4_rocket").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/tier_4_rocket")

            // Tier 5 Rocket
            event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_5_rocket_from_nasa_workbench" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   N   ",
                    "  MMM  ",
                    "  MXM  ",
                    "  MHM  ",
                    "  MRM  ",
                    "  MSM  ",
                    " MMMMM ",
                    "MMtttMM",
                    "f fEf f"
                ],
                key: {
                    N: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
                    M: Ingredient.of("forge_frontier:enderite_rocket_casing").toJson(),
                    X: Ingredient.of("forge_frontier:dimensional_stability_core").toJson(),
                    H: Ingredient.of("forge_frontier:thermal_shield_matrix").toJson(),
                    R: Ingredient.of("ad_astra:tier_4_rocket").toJson(),
                    S: Ingredient.of("forge_frontier:solar_regulation_array").toJson(),
                    t: Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
                    E: Ingredient.of("forge_frontier:rocket_engine").toJson(),
                    f: Ingredient.of("ad_astra:rocket_fin").toJson()
                },
                result: Ingredient.of("ad_astra_rocketed:tier_5_rocket").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/tier_5_rocket")

            // Tier 6 Rocket
            event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_6_rocket_from_nasa_workbench" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   N   ",
                    "  PPP  ",
                    "  PXP  ",
                    "  PHP  ",
                    "  PRP  ",
                    "  PSP  ",
                    " PPPPP ",
                    "PPtttPP",
                    "f fEf f"
                ],
                key: {
                    N: Ingredient.of("ad_astra:rocket_nose_cone").toJson(),
                    P: Ingredient.of("forge_frontier:primal_magma_rocket_casing").toJson(),
                    X: Ingredient.of("forge_frontier:deep_space_stabilizer_core").toJson(),
                    H: Ingredient.of("forge_frontier:thermal_shield_matrix").toJson(),
                    R: Ingredient.of("ad_astra_rocketed:tier_5_rocket").toJson(),
                    S: Ingredient.of("forge_frontier:solar_regulation_array").toJson(),
                    t: Ingredient.of("forge_frontier:rocket_fuel_tank").toJson(),
                    E: Ingredient.of("forge_frontier:rocket_engine").toJson(),
                    f: Ingredient.of("ad_astra:rocket_fin").toJson()
                },
                result: Ingredient.of("ad_astra_rocketed:tier_6_rocket").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/tier_6_rocket")

            // Tier 7 Rocket, aka Forge Rocket
                event.remove({ id: "ad_astra_rocketed:nasa_workbench/default/tier_7_rocket_from_nasa_workbench"})
                event.custom({
                    type: "create:mechanical_crafting",
                    pattern: [
                        "   N   ",
                        "  CCC  ",
                        "  CCC  ",
                        "  CDC  ",
                        "  CRC  ",
                        "  CcC  ",
                        " CCCCC ",
                        "CCTTTCC",
                        "F FEf f"
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