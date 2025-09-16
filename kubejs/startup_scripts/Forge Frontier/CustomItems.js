
StartupEvents.registry('block', event => {

    // Blaze Block
    event.create('forge_frontier:blaze_block')
        .displayName('Blaze Rod Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/blaze_block')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);

    // Overcharged Blocks
    event.create('forge_frontier:overcharged_iron_block')
        .displayName('Overcharged Iron Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_iron_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     
    
    event.create('forge_frontier:overcharged_gold_block')
        .displayName('Overcharged Gold Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_gold_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

    event.create('forge_frontier:overcharged_diamond_block')
        .displayName('Overcharged Diamond Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_diamond_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
    
    event.create('forge_frontier:overcharged_netherite_block')
        .displayName('Overcharged Netherite Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_netherite_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
    
    // Trophy Block
    event.create('forge_frontier:trophy_block')
        .displayName("Create - Forge Frontier Trophy")
        .soundType('metal')
        .mapColor('Stone')
        .hardness(2.0)
        .model('forge_frontier:block/trophy_block')
        .requiresTool(true)
        .resistance(1200)
        .waterlogged()
        .renderType('solid')
        .box(4, 0, 4, 12, 14, 12) // Updated bounding box
        .tagItem('tooltiprareness:epic_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);

   
});

// New Items
StartupEvents.registry('item', event => {
    // Leather Elytra
            event.create('forge_frontier:leather_elytra')
            .displayName('Leather Elytra')
            .maxStackSize(1)
            .tooltip("Built for crafting brilliance—not the skies. Too fragile to fly, but perfect for invention!")
            .texture("forge_frontier:item/leather_elytra")

    // Custom Coin
        event.create('forge_frontier:closed_beta_coin')
            .displayName('Closed Beta Coin')
            .maxStackSize(64)
            .texture("forge_frontier:item/coin_texture");   
    // Overcharged Items
        event.create('forge_frontier:overcharged_netherite_ingot')
            .displayName('Overcharged Netherite Ingot')
            .texture('forge_frontier:item/overcharged_netherite_ingot');

    // Incomplete Items
        // Quantum
            event.create('forge_frontier:incomplete_quantum_processor')
                .displayName('Incomplete Quantum Processor')
                .texture('forge_frontier:item/incomplete_quantum_processor')

        // Printed Quantum 
            event.create('forge_frontier:incomplete_printed_quantum_processor')
                .displayName('Incomplete Printed Quantum Processor')
                .texture('forge_frontier:item/incomplete_printed_quantum_processor')

        // Inscriber Quantum Processor
            event.create('forge_frontier:incomplete_quantum_processor_press')
                .displayName('Incomplete Quantum Processor Press')
                .texture('forge_frontier:item/incomplete_quantum_processor_press')        

        // Energy
            event.create('forge_frontier:incomplete_energy_processor')
                .displayName('Incomplete Energy Processor')
                .texture('forge_frontier:item/incomplete_energy_processor')

        // Printed Energy
            event.create('forge_frontier:incomplete_printed_energy_processor')
                .displayName('Incomplete Printed Energy Processor')
                .texture('forge_frontier:item/incomplete_printed_energy_processor')

        // Inscriber Energy Processor
            event.create('forge_frontier:incomplete_energy_processor_press')
                .displayName('Incomplete Energy Processor Press')
                .texture('forge_frontier:item/incomplete_energy_processor_press')

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

