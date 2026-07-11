ServerEvents.recipes(event => {
    // Oxidizer Catalyst - stage 2
    event.custom({
        type: "create:compacting",
        ingredients: [
            Ingredient.of("forge_frontier:incomplete_oxidizer_catalyst").toJson()
        ],
        results: [
            Item.of("forge_frontier:oxidizer_catalyst").toJson()
        ],
        heatRequirement: "superheated"
    }).id("forge_frontier:compacting/oxidizer_catalyst")
})