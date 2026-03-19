StartupEvents.registry('item', event => {
    const items = [
        // Incomplete Templates
        { id: 'forge_frontier:incomplete_netherite_upgrade', name: 'Incomplete Netherite Upgrade',texture: 'forge_frontier:item/incomplete_items/incomplete_netherite_upgrade' },
        { id: 'forge_frontier:incomplete_mysterious_upgrade', name: 'Incomplete Mysterious Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_mysterious_upgrade' },
        { id: 'forge_frontier:incomplete_curious_upgrade', name: 'Incomplete Curious Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_curious_upgrade' },
        { id: 'forge_frontier:incomplete_ancient_armor_trim', name: 'Incomplete Ancient Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_ancient_armor_trim' },
        { id: 'forge_frontier:incomplete_adamantite_template', name: 'Incomplete Adamantite Template', texture: 'forge_frontier:item/incomplete_items/incomplete_adamantite_template' },
        { id: 'forge_frontier:incomplete_pearlescent_upgrade', name: 'Incomplete Pearlescent Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_pearlescent_upgrade' },
        { id: 'forge_frontier:incomplete_ethium_upgrade', name: 'Incomplete Ethium Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_ethium_upgrade' },
        { id: 'forge_frontier:incomplete_polarity_armor_trim', name: 'Incomplete Polarity Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_polarity_armor_trim' },
        { id: 'forge_frontier:incomplete_goggle_armor_trim', name: 'Incomplete Goggle Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_goggle_armor_trim' },
        { id: 'forge_frontier:incomplete_runic_etching', name: 'Incomplete Runic Etching', texture: 'forge_frontier:item/incomplete_items/incomplete_runic_etching' },
        { id: 'forge_frontier:incomplete_primal_armor_trim', name: 'Incomplete Primal Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_primal_armor_trim' },
        { id: 'forge_frontier:incomplete_ignitium_upgrade', name: 'Incomplete Ignitium Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_ignitium_upgrade' },
        { id: 'forge_frontier:incomplete_cursium_upgrade', name: 'Incomplete Cursium Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_cursium_upgrade' },
        { id: 'forge_frontier:incomplete_warden_upgrade', name: 'Incomplete Warden Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_warden_upgrade' },
        { id: 'forge_frontier:incomplete_bolt_template', name: 'Incomplete Bolt Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_bolt_template' },
        { id: 'forge_frontier:incomplete_flow_template', name: 'Incomplete Flow Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_flow_template' },
        { id: 'forge_frontier:incomplete_cult_armor_trim', name: 'Incomplete Cult Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_cult_armor_trim' },
        { id: 'forge_frontier:incomplete_haunt_armor_trim', name: 'Incomplete Haunt Armor Trim', texture: 'forge_frontier:item/incomplete_items/incomplete_haunt_armor_trim' },
        { id: 'forge_frontier:incomplete_enderite_upgrade_smithing_template', name: 'Incomplete Enderite Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_enderite_upgrade_smithing_template' },
        { id: 'forge_frontier:incomplete_otherside_upgrade_smithing_template', name: 'Incomplete Otherside Upgrade', texture: 'forge_frontier:item/incomplete_items/incomplete_otherside_upgrade_smithing_template' },

        // Custom Shards
        { id: 'forge_frontier:copper_shard', name: 'Copper Shard', stack: 64, texture: 'forge_frontier:item/copper_shard' },
        { id: 'forge_frontier:breeze_shard', name: 'Breeze Shard', stack: 64, texture: 'forge_frontier:item/breeze_shard' },
        { id: 'forge_frontier:iron_shard', name: 'Iron Shard', stack: 64, texture: 'forge_frontier:item/iron_shard' },
        { id: 'forge_frontier:gold_shard', name: 'Gold Shard', stack: 64, texture: 'forge_frontier:item/gold_shard' },
        { id: 'forge_frontier:emerald_shard', name: 'Emerald Shard', stack: 64, texture: 'forge_frontier:item/emerald_shard' },
        { id: 'forge_frontier:netherite_shard', name: 'Netherite Shard', stack: 64, texture: 'forge_frontier:item/netherite_shard' },

        // Netherite Upgrades
        { id: 'forge_frontier:netherite_iron_upgrade', name: 'Netherite Iron Smithing Template', texture: 'forge_frontier:item/upgrades/netherite_iron_upgrade_smithing_template' },
        { id: 'forge_frontier:netherite_gold_upgrade', name: 'Netherite Gold Smithing Template', texture: 'forge_frontier:item/upgrades/netherite_gold_upgrade_smithing_template' },
        { id: 'forge_frontier:netherite_emerald_upgrade', name: 'Netherite Emerald Smithing Template', texture: 'forge_frontier:item/upgrades/netherite_emerald_upgrade_smithing_template' },
        { id: 'forge_frontier:netherite_diamond_upgrade', name: 'Netherite Diamond Smithing Template', texture: 'forge_frontier:item/upgrades/netherite_diamond_upgrade_smithing_template' }
    ];

    items.forEach(item => {
        let created = event.create(item.id)
            .displayName(item.name)
            .texture(item.texture);

        if (item.stack !== undefined) {
            created.maxStackSize(item.stack);
        }
    });
});