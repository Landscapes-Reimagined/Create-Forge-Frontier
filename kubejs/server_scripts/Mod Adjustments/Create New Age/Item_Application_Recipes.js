ServerEvents.recipes(event => {
    // New Age Forge Frontier Custom Item Application Magnet Recipes
    // Define Magnet Upgrade Paths as an Array of Objects
    let magnetUpgrades = [
        { result: "create_new_age:redstone_magnet", base: "create_new_age:magnetite_block", upgrade: "forge_frontier:overcharged_iron_block" },
        { result: "create_new_age:layered_magnet", base: "create_new_age:redstone_magnet", upgrade: "forge_frontier:overcharged_gold_block" },
        { result: "create_new_age:fluxuated_magnetite", base: "create_new_age:layered_magnet", upgrade: "forge_frontier:overcharged_diamond_block" },
        { result: "create_new_age:netherite_magnet", base: "create_new_age:fluxuated_magnetite", upgrade: "forge_frontier:overcharged_netherite_block" }
    ];

    // Loop Through Magnet Upgrade Paths
    for (let i = 0; i < magnetUpgrades.length; i++) {
        let upgrade = magnetUpgrades[i];

        // Remove Existing Recipes for the Item
        event.remove({ id: `create_new_age:shaped/${upgrade.result.split(":")[1]}` });

        // Create the New Item Application Recipe
        event.custom({
            type: "create:item_application",
            ingredients: [
                { item: upgrade.base },
                { item: upgrade.upgrade }
            ],
            results: [
                { item: upgrade.result }
            ]
        }).id(`forge_frontier:item_application/${upgrade.result.split(":")[1]}`);
    }
});