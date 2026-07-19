ServerEvents.recipes(event =>
    {
        // Create Immersive Aircrafts Mechanical Crafting Recipes

            // Airship
            event.remove({ id: "immersive_aircraft:airship" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "SSSSS",
                    " ~ ~ ",
                    " H_EP",
                    " HHH "
                ],
                key: {
                    "H": Ingredient.of("immersive_aircraft:hull").toJson(),
                    "E": Ingredient.of("immersive_aircraft:engine").toJson(),
                    "P": Ingredient.of("create:propeller").toJson(),
                    "S": Ingredient.of("immersive_aircraft:sail").toJson(),
                    "~": Ingredient.of("minecraft:string").toJson(),
                    "_": Ingredient.of("#create:seats").toJson()
                },
                result: Ingredient.of("immersive_aircraft:airship").toJson(),
                acceptMirrored: true
            }).id("forge_frontier:mechanical_crafting/airship")

            // Bamboo Hopper
            event.remove({ id: "immersive_aircraft:bamboo_hopper" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    " C SC ",
                    "SCcCBI",
                    " CPE_I",
                    "SCcCBI",
                    " C SC "
                ],
                key: {
                    "C": Ingredient.of("create:copper_casing").toJson(),
                    "c": Ingredient.of("minecraft:copper_ingot").toJson(),
                    "E": Ingredient.of("immersive_aircraft:engine").toJson(),
                    "B": Ingredient.of("immersive_aircraft:biplane").toJson(),
                    "P": Ingredient.of("immersive_aircraft:propeller").toJson(),
                    "S": Ingredient.of("immersive_aircraft:sail").toJson(),
                    "I": Ingredient.of("create:industrial_iron_window").toJson(),
                    "_": Ingredient.of("#create:seats").toJson()
                },
                result: Ingredient.of("immersive_aircraft:bamboo_hopper").toJson(),
                acceptMirrored: true
            }).id("forge_frontier:mechanical_crafting/bamboo_hopper")

            // Biplane
            event.remove({ id: "immersive_aircraft:biplane" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    "   S ",
                    "S  S ",
                    "HH_EP",
                    "S  S ",
                    "   S "
                ],
                key: {
                    "H": Ingredient.of("immersive_aircraft:hull").toJson(),
                    "E": Ingredient.of("immersive_aircraft:engine").toJson(),
                    "P": Ingredient.of("immersive_aircraft:propeller").toJson(),
                    "S": Ingredient.of("immersive_aircraft:sail").toJson(),
                    "_": Ingredient.of("#create:seats").toJson()
                },
                result: Ingredient.of("immersive_aircraft:biplane").toJson(),
                acceptMirrored: true
            }).id("forge_frontier:mechanical_crafting/biplane")

            // Warship
            event.remove({ id: "immersive_aircraft:warship" })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    " SSSSSS",
                    "SSIIIEP",
                    " ~~ ~~ ",
                    "i_CGHEP",
                    "cHHHH  "
                ],
                key: {
                    "H": Ingredient.of("immersive_aircraft:hull_reinforcement").toJson(),
                    "I": Ingredient.of("create:industrial_iron_block").toJson(),
                    "i": Ingredient.of("create:industrial_iron_window").toJson(),
                    "C": Ingredient.of("immersive_aircraft:cargo_airship").toJson(),
                    "c": Ingredient.of("immersive_aircraft:heavy_crossbow").toJson(),
                    "G": Ingredient.of("immersive_aircraft:industrial_gears").toJson(),
                    "E": Ingredient.of("immersive_aircraft:engine").toJson(),
                    "P": Ingredient.of("immersive_aircraft:propeller").toJson(),
                    "S": Ingredient.of("immersive_aircraft:sail").toJson(),
                    "~": Ingredient.of("minecraft:string").toJson(),
                    "_": Ingredient.of("#create:seats").toJson()
                },
                result: Ingredient.of("immersive_aircraft:warship").toJson(),
                acceptMirrored: true
            }).id("forge_frontier:mechanical_crafting/warship")
    }
)
