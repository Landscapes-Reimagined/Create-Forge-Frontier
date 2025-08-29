ServerEvents.recipes(event => 
    {
        // Rotary Cannon Recipe
            event.remove({ id: 'immersive_aircraft:rotary_cannon'})
            event.shaped(
                Item.of('immersive_aircraft:rotary_cannon', 1),
                [
                    ' A ',
                    ' B ',
                    ' C '
                ],
                {
                    A:'create:smart_fluid_pipe',
                    B:'immersive_aircraft:industrial_gears',
                    C:'minecraft:copper_ingot'
                }
            ).id('forge_frontier:shaped/rotary_cannon')

        // Eco Engine Recipe
            event.remove({ id: 'immersive_aircraft:eco_engine' })
            event.shaped(
                Item.of('immersive_aircraft:eco_engine', 1),
                [
                    'CBC',
                    'ADA'
                ],
                {
                    A:'create:copper_sheet',
                    B:'minecraft:water_bucket',
                    C:'create:iron_sheet',
                    D:'immersive_aircraft:boiler',
                }
            ).id('forge_frontier:shaped/eco_engine')

        // Engine Recipe
            event.remove({ id: 'immersive_aircraft:engine' })
            event.shaped(
                Item.of('immersive_aircraft:engine', 1),
                [
                    'CAC',
                    'DBD'
                ],
                {
                    A: 'create:precision_mechanism',
                    B: 'immersive_aircraft:boiler',
                    C: 'create:brass_sheet',
                    D: 'create:sturdy_sheet',
                }
            ).id('forge_frontier:shaped/engine')

        // Enhanced Proppeller Recipe
            event.remove({ id: 'immersive_aircraft:enhanced_propeller' })
            event.shaped(
                Item.of('immersive_aircraft:enhanced_propeller', 1),
                [
                    ' A ',
                    'ABA',
                    ' A '
                ],
                {
                    A: 'create:brass_sheet',
                    B: 'create:propeller',
                }
            ).id('forge_frontier:shaped/enhanced_propeller')

        // Gyrodyne Recipe
            event.remove({ id: 'immersive_aircraft:gyrodyne' })
            event.shaped(
                Item.of('immersive_aircraft:gyrodyne', 1),
                [
                    ' C ',
                    'ADA',
                    'BEB'
                ],
                {
                    A: 'immersive_aircraft:sail',
                    B: 'immersive_aircraft:hull',
                    C: 'immersive_aircraft:propeller',
                    D: 'create:precision_mechanism',
                    E: '#create:seats',
                }
            ).id('forge_frontier:shaped/gyrodyne')

        // Gyroscope Recipe
            event.remove({ id: 'immersive_aircraft:gyroscope' })
            event.shaped(
                Item.of('immersive_aircraft:gyroscope', 1),
                [
                    'A',
                    'B'
                ],
                {
                    A: 'minecraft:compass',
                    B: 'create:electron_tube',
                }
            ).id('forge_frontier:shaped/gyroscope')

        // Hull Recipe
            event.remove({ id: 'immersive_aircraft:hull' })
            event.shaped(
                Item.of('immersive_aircraft:hull', 1),
                [
                    'ABA',
                    'ABA'
                ],
                {
                    A: 'create:andesite_casing',
                    B: 'minecraft:iron_ingot',
                }
            ).id('forge_frontier:shaped/hull')

        // Hull Reinforcement Recipe
            event.remove({ id: 'immersive_aircraft:hull_reinforcement' })
            event.shaped(
                Item.of('immersive_aircraft:hull_reinforcement', 1),
                [
                    'BAB'
                ],
                {
                    A: 'immersive_aircraft:hull',
                    B: 'create:iron_sheet',
                }
            ).id('forge_frontier:shaped/hull_reinforcement')

        // Improved Landing Gear Recipe
            event.remove({ id: 'immersive_aircraft:improved_landing_gear' })
            event.shaped(
                Item.of('immersive_aircraft:improved_landing_gear', 1),
                [
                    'CB',
                    'A '
                ],
                {
                    A: 'create:belt_connector',
                    B: 'minecraft:iron_ingot',
                    C: 'create:iron_sheet',
                }
            ).id('forge_frontier:shaped/improved_landing_gear')

        // Industrial Gears Recipe
            event.remove({ id: 'immersive_aircraft:industrial_gears' })
            event.shaped(
                Item.of('immersive_aircraft:industrial_gears', 1),
                [
                    'BAB'
                ],
                {
                    A: 'create:cogwheel',
                    B: 'create:iron_sheet',
                }
            ).id('forge_frontier:shaped/industrial_gears')

        // Nether Engine Recipe
            event.remove({ id: 'immersive_aircraft:nether_engine' })
            event.shaped(
                Item.of('immersive_aircraft:nether_engine', 1),
                [
                    'CBC',
                    'ADA'
                ],
                {
                    A: 'create:sturdy_sheet',
                    B: 'minecraft:lava_bucket',
                    C: 'create:iron_sheet',
                    D: 'immersive_aircraft:boiler',
                }
            ).id('forge_frontier:shaped/nether_engine')

        // Propeller Recipe
            event.remove({ id: 'immersive_aircraft:propeller' })
            event.shaped(
                Item.of('immersive_aircraft:propeller', 1),
                [
                    ' A ',
                    'ABA',
                    ' A '
                ],
                {
                    A: 'create:iron_sheet',
                    B: 'create:propeller',
                }
            ).id('forge_frontier:shaped/propeller')

        // Quadrocopter Recipe
            event.remove({ id: 'immersive_aircraft:quadrocopter' })
            event.shaped(
                Item.of('immersive_aircraft:quadrocopter', 1),
                [
                    'DBD',
                    ' C ',
                    'DAD'
                ],
                {
                    A: 'immersive_aircraft:boiler',
                    B: 'create:andesite_casing',
                    C: 'minecraft:string',
                    D: 'create:propeller',
                }
            ).id('forge_frontier:shaped/quadrocopter')

        // Boiler Recipe
            event.remove({ id: 'immersive_aircraft:boiler' })
            event.shaped(
                Item.of('immersive_aircraft:boiler', 1),
                [
                    'B',
                    'C',
                    'A'
                ],
                {
                    A: 'create:blaze_burner',
                    B: 'create:steam_engine',
                    C: 'create:fluid_tank',
                }
            ).id('forge_frontier:shaped/boiler')

        // Sturdy Pipes Recipe
            event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
            event.shaped(
                Item.of('immersive_aircraft:sturdy_pipes', 1),
                [
                    'BAB'
                ],
                {
                    A: 'create:fluid_pipe',
                    B: 'create:iron_sheet',
                }
            ).id('forge_frontier:shaped/sturdy_pipes')

        // Steel Boiler Recipe
            event.remove({ id: 'immersive_aircraft:steel_boiler' })
            event.shaped(
                Item.of('immersive_aircraft:steel_boiler', 1),
                [
                    'ABA'
                ],
                {
                    A: 'create:iron_sheet',
                    B: 'create:fluid_tank',
                }
            ).id('forge_frontier:shaped/steel_boiler')

        // Sail Recipe
            event.remove({ id: 'immersive_aircraft:sail' })
            event.shaped(
                Item.of('immersive_aircraft:sail', 1),
                [
                    'AAA',
                    'AAA'
                ],
                {
                    A: 'create:white_sail',
                }
            ).id('forge_frontier:shaped/sail')
    }
)