ServerEvents.recipes(event => {
    // Create Deploying: Ender Bag
    event.remove({ id: 'enderchests:ender_bag'})
    event.custom({
        type: "create:deploying",
        ingredients: [
            { item: "enderchests:ender_pouch" },
            { tag: "forge:plates/brass" }
        ],
        results: [
            { item: "enderchests:ender_bag" }
        ]
    }).id("forge_frontier:deploying/ender_bag");
});
