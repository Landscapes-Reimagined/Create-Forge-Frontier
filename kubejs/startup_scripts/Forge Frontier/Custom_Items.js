StartupEvents.registry('item', event => {
    // Hyper Experience Nugget
        event.create('create_enchantment_industry:hyper_experience_nugget')
            .displayName('Hyper Experience Nugget')
            .maxStackSize(64)
            .texture("forge_frontier:item/hyper_experience_nugget")
    
    // Leather Elytra
        event.create('forge_frontier:leather_elytra')
            .displayName('Leather Elytra')
            .maxStackSize(1)
            .tooltip("Built for crafting brilliance—not the skies. Too fragile to fly, but perfect for invention!")
            .texture("forge_frontier:item/leather_elytra")
    
    // Wire Mold
        event.create('createmetallurgy:graphite_wire_mold')
            .displayName('Graphite Wire Mold')
            .maxStackSize(1)
            .texture("forge_frontier:item/graphite_wire_mold")

    // Custom Coin
        event.create('forge_frontier:closed_beta_coin')
            .displayName('Closed Beta Coin')
            .maxStackSize(64)
            .texture("forge_frontier:item/coin_texture");   
    // Overcharged Items
        event.create('forge_frontier:overcharged_netherite_ingot')
            .displayName('Overcharged Netherite Ingot')
            .texture('forge_frontier:item/overcharged_netherite_ingot');

    // Custom Engines
        event.create("forge_frontier:tier_5_engine")
            .displayName("Tier 5 Engine")
            .texture('forge_frontier:item/rocket_additions/tier_5_engine');

        event.create("forge_frontier:tier_6_engine")
            .displayName("Tier 6 Engine")
            .texture('forge_frontier:item/rocket_additions/tier_6_engine');    

    // Custom Tanks
        event.create("forge_frontier:tier_5_tank")
            .displayName("Tier 5 Tank")
            .texture('forge_frontier:item/rocket_additions/tier_5_tank');

        event.create("forge_frontier:tier_6_tank")
            .displayName("Tier 6 Tank")
            .texture('forge_frontier:item/rocket_additions/tier_6_tank');   

    // Logo
        event.create('forge_frontier:modpack_logo')
            .displayName('Forge Frontier Logo')
            .texture('forge_frontier:item/forgefrontier')

});

