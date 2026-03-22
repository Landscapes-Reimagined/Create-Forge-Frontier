StartupEvents.registry('item', event => {
    const items = [
        {
            id: 'create_enchantment_industry:hyper_experience_nugget',
            name: 'Hyper Experience Nugget',
            stack: 64,
            texture: 'forge_frontier:item/hyper_experience_nugget',
            tooltip: 'This is used for crafting, not consumption'
        },
        {
            id: 'forge_frontier:leather_elytra',
            name: 'Leather Elytra',
            stack: 1,
            texture: 'forge_frontier:item/leather_elytra',
            tooltip: 'Built for crafting brilliance—not the skies. Too fragile to fly, but perfect for invention!'
        },
        {
            id: 'createmetallurgy:graphite_wire_mold',
            name: 'Graphite Wire Mold',
            stack: 1,
            texture: 'forge_frontier:item/graphite_wire_mold'
        },
        {
            id: 'forge_frontier:closed_beta_coin',
            name: 'Closed Beta Coin',
            stack: 64,
            texture: 'forge_frontier:item/coin_texture'
        },
        {
            id: 'forge_frontier:overcharged_netherite_ingot',
            name: 'Overcharged Netherite Ingot',
            stack: 64,
            texture: 'forge_frontier:item/overcharged_netherite_ingot'
        },
        {
            id: 'forge_frontier:tier_5_engine',
            name: 'Tier 5 Engine',
            stack: 64,
            texture: 'forge_frontier:item/rocket_additions/tier_5_engine'
        },
        {
            id: 'forge_frontier:tier_6_engine',
            name: 'Tier 6 Engine',
            stack: 64,
            texture: 'forge_frontier:item/rocket_additions/tier_6_engine'
        },
        {
            id: 'forge_frontier:tier_5_tank',
            name: 'Tier 5 Tank',
            stack: 64,
            texture: 'forge_frontier:item/rocket_additions/tier_5_tank'
        },
        {
            id: 'forge_frontier:tier_6_tank',
            name: 'Tier 6 Tank',
            stack: 64,
            texture: 'forge_frontier:item/rocket_additions/tier_6_tank'
        },
        {
            id: 'forge_frontier:modpack_logo',
            name: 'Forge Frontier Logo',
            stack: 64,
            texture: 'forge_frontier:item/forgefrontier'
        },
        {
            id: 'forge_frontier:stabilized_shard_1',
            name: 'Stabilized Shard 1',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/stabilized_shard_1'
        },
        {
            id: 'forge_frontier:stabilized_shard_2',
            name: 'Stabilized Shard 2',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/stabilized_shard_2'
        },
        {
            id: 'forge_frontier:stabilized_shard_3',
            name: 'Stabilized Shard 3',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/stabilized_shard_3'
        },
        {
            id: 'forge_frontier:stabilized_shard_4',
            name: 'Stabilized Shard 4',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/stabilized_shard_4'
        },
        {
            id: 'forge_frontier:dimensional_shard',
            name: 'Dimensional Shard',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/dimensional_shard'
        },
        {
            id: 'forge_frontier:nether_compound',
            name: 'Nether Compound',
            stack: 16,
            texture: 'forge_frontier:item/seal_parts/nether_compound'
        },
        {
            id: 'forge_frontier:seal_core',
            name: 'Seal Core',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/seal_core'
        },
        {
            id: 'forge_frontier:seal_frame',
            name: 'Seal Frame',
            stack: 64,
            texture: 'forge_frontier:item/seal_parts/seal_frame'
        }
    ]

    items.forEach(item => {
        const createdItem = event.create(item.id)
            .displayName(item.name)
            .maxStackSize(item.stack ?? 64)
            .texture(item.texture)

        if (item.tooltip) {
            createdItem.tooltip(item.tooltip)
        }
    })
})