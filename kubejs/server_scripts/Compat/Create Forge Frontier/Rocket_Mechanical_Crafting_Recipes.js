ServerEvents.recipes(event => {
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "SSS",
            " T ",
            " C ",
            "SSS"
        ],
        key: {
            S: Ingredient.of("#forge:plates/steel").toJson(),
            C: Ingredient.of("create_dd:steel_casing").toJson(),
            T: Ingredient.of("createqol:brass_trash_can").toJson()
        },
        result: Item.of("forge_frontier:vacuum_structural_frame").toJson(),
        acceptMirrored: false
    }).id("forge_frontier:mechanical_crafting/vacuum_structural_frame")
})