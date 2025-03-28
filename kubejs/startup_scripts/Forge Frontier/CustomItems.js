
StartupEvents.registry('block', event => {

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

    // New Molds
        event.create('forge_frontier:upgrade_mold')
            .displayName('Upgrade Template Mold')
            .texture('forge_frontier:item/molds/upgrade_mold');
            
        event.create('forge_frontier:axe_mold')
            .displayName('Axe Mold')
            .texture('forge_frontier:item/molds/axe_mold');

        event.create('forge_frontier:boots_mold')
            .displayName('Boots Mold')
            .texture('forge_frontier:item/molds/boots_mold');

        event.create('forge_frontier:block_mold')
            .displayName('Block Mold')
            .texture('forge_frontier:item/molds/block_mold');

        event.create('forge_frontier:chestplate_mold')
            .displayName('Chestplate Mold')
            .texture('forge_frontier:item/molds/chestplate_mold');

        event.create('forge_frontier:coal_mold')
            .displayName('Coal Mold')
            .texture('forge_frontier:item/molds/coal_mold');

        event.create('forge_frontier:gem_mold')
            .displayName('Gem Mold')
            .texture('forge_frontier:item/molds/gem_mold');

        event.create('forge_frontier:head_mold')
            .displayName('Head Mold')
            .texture('forge_frontier:item/molds/head_mold');

        event.create('forge_frontier:helmet_mold')
            .displayName('Helmet Mold')
            .texture('forge_frontier:item/molds/helmet_mold');

        event.create('forge_frontier:hoe_mold')
            .displayName('Hoe Mold')
            .texture('forge_frontier:item/molds/hoe_mold');

        event.create('forge_frontier:ingot_mold')
            .displayName('Ingot Mold')
            .texture('forge_frontier:item/molds/ingot_mold');

        event.create('forge_frontier:leggings_mold')
            .displayName('Leggings Mold')
            .texture('forge_frontier:item/molds/leggings_mold');

        event.create('forge_frontier:mold_template')
            .displayName('Mold Template')
            .texture('forge_frontier:item/molds/mold_template');

        event.create('forge_frontier:pickaxe_mold')
            .displayName('Pickaxe Mold')
            .texture('forge_frontier:item/molds/pickaxe_mold');

        event.create('forge_frontier:shovel_mold')
            .displayName('Shovel Mold')
            .texture('forge_frontier:item/molds/shovel_mold');

        event.create('forge_frontier:skull_mold')
            .displayName('Skull Mold')
            .texture('forge_frontier:item/molds/skull_mold');

        event.create('forge_frontier:sword_mold')
            .displayName('Sword Mold')
            .texture('forge_frontier:item/molds/sword_mold');

    // Netherite Automation Parts
        event.create('forge_frontier:netherite_specks')
            .displayName('Netherite Specks')
            .texture('forge_frontier:item/netherite_specks');

        event.create('forge_frontier:incomplete_netherite_dust')
            .displayName('Incomplete Netherite Dust')
            .texture('tfmg:item/coal_coke_dust');
        
        event.create('forge_frontier:netherite_dust')
            .displayName('Netherite Dust')
            .texture('forge_frontier:item/netherite_dust')

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

    // Upgrades
        event.create('forge_frontier:netherite_iron_upgrade')
            .displayName('Netherite Iron Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_iron_upgrade_smithing_template')

        event.create('forge_frontier:netherite_gold_upgrade')
            .displayName('Netherite Gold Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_gold_upgrade_smithing_template')

        event.create('forge_frontier:netherite_emerald_upgrade')
            .displayName('Netherite Emerald Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_emerald_upgrade_smithing_template')

        event.create('forge_frontier:netherite_diamond_upgrade')
            .displayName('Netherite Diamond Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_diamond_upgrade_smithing_template')
});

