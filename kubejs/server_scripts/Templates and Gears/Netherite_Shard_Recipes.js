ServerEvents.recipes(event => 
{
    // Netherite Iron Upgrade
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "forge_frontier:netherite_shard" },
        loops: 1,
        results: [{ item: "forge_frontier:netherite_iron_upgrade" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:netherite_shard" },
                    { item: "forge_frontier:iron_shard" }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "forge_frontier:incomplete_netherite_upgrade" },
                    { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "forge_frontier:incomplete_netherite_upgrade" }],
                results: [{ item: "forge_frontier:netherite_iron_upgrade" }]
            }
        ],
        transitionalItem: { item: "forge_frontier:incomplete_netherite_upgrade" }
    }).id('forge_frontier:sequenced_assembly/netherite_iron_upgrade');

    // Netherite Gold Upgrade
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "forge_frontier:netherite_shard" },
        loops: 1,
        results: [{ item: "forge_frontier:netherite_gold_upgrade" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:netherite_shard" },
                    { item: "forge_frontier:gold_shard" }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "forge_frontier:incomplete_netherite_upgrade" },
                    { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "forge_frontier:incomplete_netherite_upgrade" }],
                results: [{ item: "forge_frontier:netherite_gold_upgrade" }]
            }
        ],
        transitionalItem: { item: "forge_frontier:incomplete_netherite_upgrade" }
    }).id('forge_frontier:sequenced_assembly/netherite_gold_upgrade');

    // Netherite Emerald Upgrade
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "forge_frontier:netherite_shard" },
        loops: 1,
        results: [{ item: "forge_frontier:netherite_emerald_upgrade" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:netherite_shard" },
                    { item: "forge_frontier:emerald_shard" }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "forge_frontier:incomplete_netherite_upgrade" },
                    { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "forge_frontier:incomplete_netherite_upgrade" }],
                results: [{ item: "forge_frontier:netherite_emerald_upgrade" }]
            }
        ],
        transitionalItem: { item: "forge_frontier:incomplete_netherite_upgrade" }
    }).id('forge_frontier:sequenced_assembly/netherite_emerald_upgrade');

    // Netherite Diamond Upgrade
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "forge_frontier:netherite_shard" },
        loops: 1,
        results: [{ item: "forge_frontier:netherite_diamond_upgrade" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:netherite_shard" },
                    { item: "create_templates_gears:diamond_sheet" }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "forge_frontier:incomplete_netherite_upgrade" },
                    { amount: 250, fluid: "create_enchantment_industry:experience", nbt: {} }
                ],
                results: [{ item: "forge_frontier:incomplete_netherite_upgrade" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "forge_frontier:incomplete_netherite_upgrade" }],
                results: [{ item: "forge_frontier:netherite_diamond_upgrade" }]
            }
        ],
        transitionalItem: { item: "forge_frontier:incomplete_netherite_upgrade" }
    }).id('forge_frontier:sequenced_assembly/netherite_diamond_upgrade');
});
