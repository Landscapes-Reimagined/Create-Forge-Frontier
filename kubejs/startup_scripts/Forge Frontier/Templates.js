StartupEvents.registry('item', event => 
    {

        // Incomplete Templates
            // Incomplete Netherite Upgrade
                event.create('forge_frontier:incomplete_netherite_upgrade')
                    .displayName('Incomplete Netherite Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_netherite_upgrade")

            // Incomplete Mysterios Upgrade
                event.create('forge_frontier:incomplete_mysterios_upgrade')
                    .displayName('Incomplete Mysterios Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_mysterios_upgrade")
            
            // Incomplete Curios Upgrade
                event.create('forge_frontier:incomplete_curios_upgrade')
                    .displayName('Incomplete Curios Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_curios_upgrade")

            // Incomplete Ancient Armor Trim
                event.create('forge_frontier:incomplete_ancient_armor_trim')
                    .displayName('Incomplete Ancient Armor Trim')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_ancient_armor_trim")

            // Incomplete Adamantite Template
                event.create('forge_frontier:incomplete_adamantite_template')
                    .displayName('Incomplete Adamantite Template')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_adamantite_template")

        // Custom Shards
            // Iron Shard
                    event.create('forge_frontier:iron_shard')
                    .displayName('Iron Shard')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/iron_shard")

            // Gold Shard
                event.create('forge_frontier:gold_shard')
                    .displayName('Gold Shard')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/gold_shard")    

            // Emerald Shard
                event.create('forge_frontier:emerald_shard')
                    .displayName('Emerald Shard')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/emerald_shard")

            // Netherite Shard
                event.create('forge_frontier:netherite_shard')
                    .displayName('Netherite Shard')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/netherite_shard")

        // Netherite Upgrades
            // Netherite Iron
                event.create('forge_frontier:netherite_iron_upgrade')
                    .displayName('Netherite Iron Smithing Template')
                    .texture('forge_frontier:item/upgrades/netherite_iron_upgrade_smithing_template')

            // Netherite Gold
                event.create('forge_frontier:netherite_gold_upgrade')
                    .displayName('Netherite Gold Smithing Template')
                    .texture('forge_frontier:item/upgrades/netherite_gold_upgrade_smithing_template')

            // Netherite Emerald
                event.create('forge_frontier:netherite_emerald_upgrade')
                    .displayName('Netherite Emerald Smithing Template')
                    .texture('forge_frontier:item/upgrades/netherite_emerald_upgrade_smithing_template')

            // Netherite Diamond    
                event.create('forge_frontier:netherite_diamond_upgrade')
                    .displayName('Netherite Diamond Smithing Template')
                    .texture('forge_frontier:item/upgrades/netherite_diamond_upgrade_smithing_template')

    }
)