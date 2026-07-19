ServerEvents.recipes(event =>
    {
        // Create Immersive Aircrafts Shaped Recipes

            // Boiler
            event.remove({ id: "immersive_aircraft:boiler" })
            event.shaped(
                "immersive_aircraft:boiler",
                [
                    "S",
                    "N",
                    "I"
                ],
                {
                    I: "create:blaze_burner",
                    S: "create:steam_engine",
                    N: "create:fluid_tank"
                }
            ).id("forge_frontier:shaped/boiler")

            // Eco Engine
            event.remove({ id: "immersive_aircraft:eco_engine" })
            event.shaped(
                "immersive_aircraft:eco_engine",
                [
                    "IWI",
                    "CEC"
                ],
                {
                    C: "create:copper_sheet",
                    W: "minecraft:water_bucket",
                    I: "create:iron_sheet",
                    E: "immersive_aircraft:boiler"
                }
            ).id("forge_frontier:shaped/eco_engine")

            // Engine
            event.remove({ id: "immersive_aircraft:engine" })
            event.shaped(
                "immersive_aircraft:engine",
                [
                    "BPB",
                    "SES"
                ],
                {
                    P: "create:precision_mechanism",
                    E: "immersive_aircraft:boiler",
                    B: "create:brass_sheet",
                    S: "create:sturdy_sheet"
                }
            ).id("forge_frontier:shaped/engine")

            // Enhanced Propeller
            event.remove({ id: "immersive_aircraft:enhanced_propeller" })
            event.shaped(
                "immersive_aircraft:enhanced_propeller",
                [
                    " B ",
                    "BPB",
                    " B "
                ],
                {
                    B: "create:brass_sheet",
                    P: "create:propeller"
                }
            ).id("forge_frontier:shaped/enhanced_propeller")

            // Gyrodyne
            event.remove({ id: "immersive_aircraft:gyrodyne" })
            event.shaped(
                "immersive_aircraft:gyrodyne",
                [
                    " P ",
                    "SES",
                    "H_H"
                ],
                {
                    S: "immersive_aircraft:sail",
                    H: "immersive_aircraft:hull",
                    P: "immersive_aircraft:propeller",
                    E: "create:precision_mechanism",
                    _: "#create:seats"
                }
            ).id("forge_frontier:shaped/gyrodyne")

            // Gyroscope
            event.remove({ id: "immersive_aircraft:gyroscope" })
            event.shaped(
                "immersive_aircraft:gyroscope",
                [
                    "E",
                    "C"
                ],
                {
                    C: "minecraft:compass",
                    E: "create:electron_tube"
                }
            ).id("forge_frontier:shaped/gyroscope")

            // Hull
            event.remove({ id: "immersive_aircraft:hull" })
            event.shaped(
                "immersive_aircraft:hull",
                [
                    "LIL",
                    "LIL"
                ],
                {
                    L: "create:andesite_casing",
                    I: "minecraft:iron_ingot"
                }
            ).id("forge_frontier:shaped/hull")

            // Hull Reinforcement
            event.remove({ id: "immersive_aircraft:hull_reinforcement" })
            event.shaped(
                "immersive_aircraft:hull_reinforcement",
                [
                    "IHI"
                ],
                {
                    H: "immersive_aircraft:hull",
                    I: "create:iron_sheet"
                }
            ).id("forge_frontier:shaped/hull_reinforcement")

            // Improved Landing Gear
            event.remove({ id: "immersive_aircraft:improved_landing_gear" })
            event.shaped(
                "immersive_aircraft:improved_landing_gear",
                [
                    "SI",
                    "B "
                ],
                {
                    B: "create:belt_connector",
                    I: "minecraft:iron_ingot",
                    S: "create:iron_sheet"
                }
            ).id("forge_frontier:shaped/improved_landing_gear")

            // Industrial Gears
            event.remove({ id: "immersive_aircraft:industrial_gears" })
            event.shaped(
                "immersive_aircraft:industrial_gears",
                [
                    "ICI"
                ],
                {
                    C: "create:cogwheel",
                    I: "create:iron_sheet"
                }
            ).id("forge_frontier:shaped/industrial_gears")

            // Nether Engine
            event.remove({ id: "immersive_aircraft:nether_engine" })
            event.shaped(
                "immersive_aircraft:nether_engine",
                [
                    "ILI",
                    "SES"
                ],
                {
                    S: "create:sturdy_sheet",
                    L: "minecraft:lava_bucket",
                    I: "create:iron_sheet",
                    E: "immersive_aircraft:boiler"
                }
            ).id("forge_frontier:shaped/nether_engine")

            // Propeller
            event.remove({ id: "immersive_aircraft:propeller" })
            event.shaped(
                "immersive_aircraft:propeller",
                [
                    " I ",
                    "IPI",
                    " I "
                ],
                {
                    I: "create:iron_sheet",
                    P: "create:propeller"
                }
            ).id("forge_frontier:shaped/propeller")

            // Quadrocopter
            event.remove({ id: "immersive_aircraft:quadrocopter" })
            event.shaped(
                "immersive_aircraft:quadrocopter",
                [
                    "PAP",
                    " S ",
                    "PEP"
                ],
                {
                    E: "immersive_aircraft:boiler",
                    A: "immersive_aircraft:hull",
                    S: "minecraft:string",
                    P: "create:propeller"
                }
            ).id("forge_frontier:shaped/quadrocopter")

            // Sail
            event.remove({ id: "immersive_aircraft:sail" })
            event.shaped(
                "immersive_aircraft:sail",
                [
                    "SSS",
                    "SSS"
                ],
                {
                    S: "create:white_sail"
                }
            ).id("forge_frontier:shaped/sail")

            // Steel Boiler
            event.remove({ id: "immersive_aircraft:steel_boiler" })
            event.shaped(
                "immersive_aircraft:steel_boiler",
                [
                    "IFI"
                ],
                {
                    I: "create:iron_sheet",
                    F: "create:fluid_tank"
                }
            ).id("forge_frontier:shaped/steel_boiler")

            // Sturdy Pipes
            event.remove({ id: "immersive_aircraft:sturdy_pipes" })
            event.shaped(
                "immersive_aircraft:sturdy_pipes",
                [
                    "IPI"
                ],
                {
                    P: "create:fluid_pipe",
                    I: "create:iron_sheet"
                }
            ).id("forge_frontier:shaped/sturdy_pipes")
    }
)
