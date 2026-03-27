ServerEvents.recipes(event => {
    const incomplete = id => Item.of(`forge_frontier:incomplete_${id}`).toJson()
    const casing = id => Item.of(`forge_frontier:${id}`).toJson()

    // Steel
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("create:industrial_iron_block").toJson(),
        transitionalItem: incomplete("steel_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("steel_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("steel_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("steel_rocket_casing"), Ingredient.of("ad_astra:steel_ingot").toJson()], results: [incomplete("steel_rocket_casing")] },
            { type: "create:filling", ingredients: [incomplete("steel_rocket_casing"), Fluid.of("minecraft:lava", 250).toJson()], results: [incomplete("steel_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("steel_rocket_casing")], results: [incomplete("steel_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("steel_rocket_casing")], results: [incomplete("steel_rocket_casing")] }
        ],
        results: [casing("steel_rocket_casing")],
        loops: 3
    })

    // Desh
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:steel_rocket_casing").toJson(),
        transitionalItem: incomplete("desh_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("desh_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("desh_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("desh_rocket_casing"), Ingredient.of("ad_astra:desh_ingot").toJson()], results: [incomplete("desh_rocket_casing")] },
            { type: "create:filling", ingredients: [incomplete("desh_rocket_casing"), Fluid.of("forge_frontier:cheese", 250).toJson()], results: [incomplete("desh_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("desh_rocket_casing")], results: [incomplete("desh_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("desh_rocket_casing")], results: [incomplete("desh_rocket_casing")] }
        ],
        results: [casing("desh_rocket_casing")],
        loops: 3
    })

    // Ostrum
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:desh_rocket_casing").toJson(),
        transitionalItem: incomplete("ostrum_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("ostrum_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("ostrum_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("ostrum_rocket_casing"), Ingredient.of("ad_astra:ostrum_ingot").toJson()], results: [incomplete("ostrum_rocket_casing")] },
            { type: "create:filling", ingredients: [incomplete("ostrum_rocket_casing"), Fluid.of("forge_frontier:pomegranate_milkshake", 250).toJson()], results: [incomplete("ostrum_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("ostrum_rocket_casing")], results: [incomplete("ostrum_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("ostrum_rocket_casing")], results: [incomplete("ostrum_rocket_casing")] }
        ],
        results: [casing("ostrum_rocket_casing")],
        loops: 3
    })

    // Calorite
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:ostrum_rocket_casing").toJson(),
        transitionalItem: incomplete("calorite_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("calorite_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("calorite_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("calorite_rocket_casing"), Ingredient.of("ad_astra:calorite_ingot").toJson()], results: [incomplete("calorite_rocket_casing")] },
            { type: "create:filling", ingredients: [incomplete("calorite_rocket_casing"), Fluid.of("forge_frontier:adzuki_milkshake", 250).toJson()], results: [incomplete("calorite_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("calorite_rocket_casing")], results: [incomplete("calorite_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("calorite_rocket_casing")], results: [incomplete("calorite_rocket_casing")] }
        ],
        results: [casing("calorite_rocket_casing")],
        loops: 3
    })

    // Enderite
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:calorite_rocket_casing").toJson(),
        transitionalItem: incomplete("enderite_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("enderite_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("enderite_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("enderite_rocket_casing"), Ingredient.of("endelurgy:enderite_ingot").toJson()], results: [incomplete("enderite_rocket_casing")] },
            { type: "create:filling", ingredients: [incomplete("enderite_rocket_casing"), Fluid.of("create_confectionery:ruby_chocolate", 250).toJson()], results: [incomplete("enderite_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("enderite_rocket_casing")], results: [incomplete("enderite_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("enderite_rocket_casing")], results: [incomplete("enderite_rocket_casing")] }
        ],
        results: [casing("enderite_rocket_casing")],
        loops: 3
    })

    // Primal Magma
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:enderite_rocket_casing").toJson(),
        transitionalItem: incomplete("primal_magma_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("primal_magma_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("primal_magma_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("primal_magma_rocket_casing"), Ingredient.of("alexscaves:primal_magma").toJson()], results: [incomplete("primal_magma_rocket_casing")] },
            { type: "create:filling", ingredients: [incomplete("primal_magma_rocket_casing"), Fluid.of("sliceanddice:fertilizer", 250).toJson()], results: [incomplete("primal_magma_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("primal_magma_rocket_casing")], results: [incomplete("primal_magma_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("primal_magma_rocket_casing")], results: [incomplete("primal_magma_rocket_casing")] }
        ],
        results: [casing("primal_magma_rocket_casing")],
        loops: 3
    })

    // Forge Rocket Casing
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: Ingredient.of("forge_frontier:primal_magma_rocket_casing").toJson(),
        transitionalItem: incomplete("forge_rocket_casing"),
        sequence: [
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_casing"), Ingredient.of("create:sturdy_sheet").toJson()], results: [incomplete("forge_rocket_casing")] },
            { type: "create:deploying", ingredients: [incomplete("forge_rocket_casing"), Ingredient.of("forge_frontier:forge_alloy").toJson()], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] },
            { type: "create:pressing", ingredients: [incomplete("forge_rocket_casing")], results: [incomplete("forge_rocket_casing")] }
        ],
        results: [casing("forge_rocket_casing")],
        loops: 1
    })
})