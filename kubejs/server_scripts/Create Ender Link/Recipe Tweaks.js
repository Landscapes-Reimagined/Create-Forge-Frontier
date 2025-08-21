ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: "createenderlink:ender_tank" })
        event.remove({ id: "createenderlink:ender_vault" })
        event.remove({ id: "createenderlink:scope_filter" })
        event.remove({ id: "createenderlink:scope_filter_clear"})

        // Shapeless Conversion Recipes
            // Ender Tank to Item Transmitter
                event.custom({
                    type: 'minecraft:crafting_shapeless',
                    ingredients: [
                        {
                            item: 'createenderlink:ender_vault'
                        }
                    ],
                    result: 
                    {
                        item: 'createendertransmission:item_transmitter'
                    }
                }).id("forge_frontier:shapeless/vault_to_item_transmitter")

            // Ender Vault to Fluid Transmission
                event.custom({
                    type: 'minecraft:crafting_shapeless',
                    ingredients: [
                        {
                            item: 'createenderlink:ender_tank'
                        }
                    ],
                    result: 
                    {
                        item: 'createendertransmission:fluid_transmitter'
                    }
                }).id("forge_frontier:shapeless/tank_to_fluid_transmitter")

    }
)
