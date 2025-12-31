ServerEvents.recipes(event => {
    // Create Mechanical Crafting: Entangled Block
    event.remove({ id: 'entangled:block'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            "PRP",
            "RCR",
            "PRP"
        ],
        key: {
            "P": { tag: "forge:ender_pearls" },
            "R": { item: "create_dd:refined_radiance_casing" },
            "C": { item: "enderchests:ender_bag" }
        },
        result: {
            item: "entangled:block"
        },
        acceptMirrored: true
    }).id("forge_frontier:mechanical_crafting/entangled_block");

    // Create Mechanical Crafting: Entangled Binder
    event.remove({ id: 'entangled:item'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            " PR",
            " OP",
            "O  "
        ],
        key: {
            "O": { item: "minecraft:obsidian" },
            "P": { tag: "forge:ender_pearls" },
            "R": { item: "create_dd:refined_radiance" }
        },
        result: {
            item: "entangled:item"
        },
        acceptMirrored: true
    }).id("forge_frontier:mechanical_crafting/entangled_item");
});
