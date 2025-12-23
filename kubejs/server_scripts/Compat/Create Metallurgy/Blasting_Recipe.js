ServerEvents.recipes(event => {
    // Blasting Recipe: Coal -> Coke
    event.remove( {id: 'createmetallurgy:blasting/coke_from_coal'} )
    event.remove( {id: 'createmetallurgy:smelting/coke_from_coal'} )
    event.custom({
        type: "minecraft:blasting",
        ingredient: { item: "minecraft:coal" },
        result: { item: "createmetallurgy:coke", count: 1 },
        experience: 0.1,
        cookingtime: 100
    }).id("forge_frontier:blasting/coal_to_coke");

    // Blasting Recipe: Coal Block -> Coke Block
    event.custom({
        type: "minecraft:blasting",
        ingredient: { item: "minecraft:coal_block"},
        result: { item: "createmetallurgy:coke_block", count: 1},
        experience: 0.1,
        cookingtime: 900
    }).id("forge_frontier:blasting/coal_block_to_coke_block")
});
