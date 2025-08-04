StartupEvents.registry('item', event => 
    {
        // Incomplete Templates
            // Incomplete Netherite Upgrade
                event.create('forge_frontier:incomplete_netherite_upgrade')
                    .displayName('Incomplete Netherite Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_netherite_upgrade")

            // Incomplete mysterious Upgrade
                event.create('forge_frontier:incomplete_mysterious_upgrade')
                    .displayName('Incomplete mysterious Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_mysterious_upgrade")
            
            // Incomplete curious Upgrade
                event.create('forge_frontier:incomplete_curious_upgrade')
                    .displayName('Incomplete curious Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_curious_upgrade")

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

            // Incomplete Pearlescent Upgrade
                event.create('forge_frontier:incomplete_pearlescent_upgrade')
                    .displayName('Incomplete Pearlescent Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_pearlescent_upgrade")            

            // Incomplete Ethium Upgrade
                event.create('forge_frontier:incomplete_ethium_upgrade')
                    .displayName('Incomplete Ethium Upgrade')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_ethium_upgrade")            

            // Incomplete Polarity Armor Trim
                event.create('forge_frontier:incomplete_polarity_armor_trim')
                    .displayName('Incomplete Polarity Armor Trim')
                    .maxStackSize(64)
                    .texture("forge_frontier:item/incomplete_polarity_armor_trim")            

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