ServerEvents.recipes(event => {
    // Create Mechanical Crafting: Ender Tank
    event.remove({ id: 'endertanks:tank'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "OPO",
            "TBT",
            "OFO"
        ],
        key: {
            "O": { item: "minecraft:obsidian" },
            "P": { tag: "forge:ender_pearls" },
            "F": { item: "create:fluid_tank" },
            "B": { item: "endertanks:ender_bucket" },
            "T": { tag: "forge:plates/brass" }
        },
        result: {
            item: "endertanks:ender_tank"
        },
        acceptMirrored: true
    }).id("forge_frontier:mechanical_crafting/ender_tank");

    // Create Mechanical Crafting: Ender Chest (with Ender Pouch)
    event.remove({ id: 'enderchests:ender_chest'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "OPO",
            "BEB",
            "OVO"
        ],
        key: {
            "O": { item: "minecraft:obsidian" },
            "P": { tag: "forge:ender_pearls" },
            "E": { item: "enderchests:ender_bag" },
            "B": { tag: "forge:plates/brass" },
            "V": { item: "create:item_vault"}
        },
        result: {
            item: "enderchests:ender_chest"
        },
        acceptMirrored: true
    }).id("forge_frontier:mechanical_crafting/ender_chest");
});
