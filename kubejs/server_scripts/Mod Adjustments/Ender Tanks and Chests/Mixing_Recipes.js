ServerEvents.recipes(event => {
    // Create Mixing: Ender Bucket
    event.remove({ id: 'endertanks:bucket'})
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "minecraft:bucket" },
            { fluid: "create_enchantment_industry:experience", amount: 250 },
            { tag: "forge:ender_pearls" }
        ],
        results: [
            { item: "endertanks:ender_bucket" }
        ],
        heatRequirement: "heated"
    }).id("forge_frontier:mixing/ender_bucket");

    // Create Mixing: Ender Pouch
    event.remove({ id: 'enderchests:ender_pouch'})    
    event.custom({
        type: "create:mixing",
        ingredients: [
            { tag: "forge:leather" },
            { tag: "forge:ender_pearls" },
            { fluid: "create_enchantment_industry:experience", amount: 250 }
        ],
        results: [
            { item: "enderchests:ender_pouch" }
        ],
        heatRequirement: "heated"
    }).id("forge_frontier:mixing/ender_pouch");
});
