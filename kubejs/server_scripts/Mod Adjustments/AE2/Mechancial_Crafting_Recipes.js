ServerEvents.recipes(event => 
    {
        // Terminal Recipe
            event.remove({ id: "ae2:network/parts/terminals"})
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "FLA",
                "DTD"
            ],
            key: {
                F: Ingredient.of("ae2:formation_core"),
                L: Ingredient.of("ae2:logic_processor"),
                A: Ingredient.of("ae2:annihilation_core"),
                D: Ingredient.of("create:display_board"),
                T: Ingredient.of("create:stock_ticker")
            },
            result: Ingredient.of("ae2:terminal"),
            acceptMirrored: false
            }).id("forge_frontier:mechancial_crafting/terminal");

        // Storage Terminal Recipe
            event.remove({ id: "ae2:network/parts/terminals_crafting"})
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "BcB",
                "PTP",
                "BCB"
            ],
            key: {
                B: Ingredient.of("create_additions_synthetics:dense_brass_sheet"),
                c: Ingredient.of("create:crafting_blueprint"),
                P: Ingredient.of("ae2:calculation_processor"),
                T: Ingredient.of("ae2:terminal"),
                C: Ingredient.of("create:mechanical_crafter")
            },
            result: Ingredient.of("ae2:crafting_terminal"),
            acceptMirrored: false
            }).id("forge_frontier:mechancial_crafting/crafting_terminal");
    }
)