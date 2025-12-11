StartupEvents.registry('block', event => {

    // Hyper Experience Block
    event.create('create_enchantment_industry:hyper_experience_block')
        .displayName('Hyper Experience Block')
        .soundType('amethyst') 
        .mapColor('DIAMOND') 
        .hardness(2.0)
        .model('forge_frontier:block/hyper_experience_block')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);

    // Dielectric Paste Block
    event.create('forge_frontier:dielectric_paste_block')
        .displayName('Dielectric Paste Block')
        .soundType('honey_block') 
        .mapColor('COLOR_GRAY') 
        .hardness(2.0)
        .model('forge_frontier:block/dielectric_paste_block')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);

    // Echo Shard Block
    event.create('forge_frontier:echo_shard_block')
        .displayName('Echo Shard Block')
        .soundType('amethyst') 
        .mapColor('WARPED_NYLIUM') 
        .hardness(2.0)
        .model('forge_frontier:block/echo_shard_block')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);

    // Blaze Block
    event.create('forge_frontier:blaze_block')
        .displayName('Blaze Rod Block')
        .soundType('netherrack') 
        .mapColor('COLOR_ORANGE') 
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
        .mapColor('METAL') 
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
        .mapColor('GOLD') 
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
        .mapColor('DIAMOND') 
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
        .mapColor('CRIMSON_HYPHAE') 
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