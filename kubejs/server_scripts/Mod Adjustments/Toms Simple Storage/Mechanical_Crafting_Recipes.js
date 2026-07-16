ServerEvents.recipes(event =>
    {
        // Tom's Simple Storage Mechanical Crafting Recipes

            // Crafting Terminal
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    " P ",
                    "SSS",
                    "SSS",
                    "SSS",
                    "AML"
                ],
                key: {
                    P: Ingredient.of("toms_storage:ts.storage_terminal").toJson(),
                    S: Ingredient.of("create:mechanical_crafter").toJson(),
                    L: Ingredient.of("create:linked_controller").toJson(),
                    M: Ingredient.of("create:precision_mechanism").toJson(),
                    A: Ingredient.of("create:sturdy_sheet").toJson()
                },
                result: Ingredient.of("toms_storage:ts.crafting_terminal").toJson(),
                acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/crafting_terminal")
    }
)
