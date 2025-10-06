ServerEvents.recipes(event => 
    {
        // Copper Shard
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: "minecraft:cut_copper"
                },
                {
                    amount: 500,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            results: [
                {
                    item: "forge_frontier:copper_shard"
                }
            ]
        }).id('forge_frontier:compacting/copper_shard')

        // Breeze Shard
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: "trials:breeze_rod"
                },
                {
                    amount: 500,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            results: [
                {
                    item: "forge_frontier:breeze_shard"
                }
            ]
        }).id('forge_frontier:compacting/breeze_shard')

        // Iron Shard
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: "minecraft:iron_ingot"
                },
                {
                    amount: 500,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            results: [
                {
                    item: "forge_frontier:iron_shard"
                }
            ]
        }).id('forge_frontier:compacting/iron_shard')

        // Gold Shard
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: "minecraft:gold_ingot"
                },
                {
                    amount: 500,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            results: [
                {
                    item: "forge_frontier:gold_shard"
                }
            ]
        }).id('forge_frontier:compacting/gold_shard')

        // Emerald Shard
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: "minecraft:emerald"
                },
                {
                    amount: 500,
                    fluid: "minecraft:lava",
                    nbt: {}
                }
            ],
            results: [
                {
                    item: "forge_frontier:emerald_shard"
                }
            ]
        }).id('forge_frontier:compacting/emerald_shard')

        // Netherite Shard
        event.custom({
            type: "create:compacting",
            ingredients: [
                {
                    item: "minecraft:netherite_block"
                },
                {
                    item: "minecraft:netherite_upgrade_smithing_template",
                },
                {
                    item: "minecraft:netherite_upgrade_smithing_template",
                }
            ],
            results: [
                {
                    item: "forge_frontier:netherite_shard",
                    count: 2
                },
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:compacting/netherite_shard')

    }
)