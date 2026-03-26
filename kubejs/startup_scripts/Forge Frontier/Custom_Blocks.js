StartupEvents.registry('block', event => {
    // Incomplete Compact Machines
    // Tiny
    event.create('forge_frontier:incomplete_machine_tiny')
        .displayName('Incomplete Tiny Machine')
        .soundType('metal')
        .mapColor('METAL')
        .hardness(2.0)
        .model('forge_frontier:block/incomplete_machine_tiny')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)

    // Small
    event.create('forge_frontier:incomplete_machine_small')
        .displayName('Incomplete Small Machine')
        .soundType('metal')
        .mapColor('METAL')
        .hardness(2.0)
        .model('forge_frontier:block/incomplete_machine_small')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)

    // Normal
    event.create('forge_frontier:incomplete_machine_normal')
        .displayName('Incomplete Normal Machine')
        .soundType('metal')
        .mapColor('METAL')
        .hardness(2.0)
        .model('forge_frontier:block/incomplete_machine_normal')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)

    // Large
    event.create('forge_frontier:incomplete_machine_large')
        .displayName('Incomplete Large Machine')
        .soundType('metal')
        .mapColor('METAL')
        .hardness(2.0)
        .model('forge_frontier:block/incomplete_machine_large')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)

    // Giant
    event.create('forge_frontier:incomplete_machine_giant')
        .displayName('Incomplete Giant Machine')
        .soundType('metal')
        .mapColor('METAL')
        .hardness(2.0)
        .model('forge_frontier:block/incomplete_machine_giant')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)

    // Maximum
    event.create('forge_frontier:incomplete_machine_maximum')
        .displayName('Incomplete Maximum Machine')
        .soundType('metal')
        .mapColor('METAL')
        .hardness(2.0)
        .model('forge_frontier:block/incomplete_machine_maximum')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true)

    // Moon Gravel
    event.create('forge_frontier:moon_gravel')
        .displayName('Moon Gravel')
        .soundType('gravel') 
        .mapColor('STONE') 
        .hardness(2.0)
        .model('forge_frontier:block/moon_gravel')
        .requiresTool(true)
        .renderType('solid')
        .tagBlock("mineable/shovel")
        .fullBlock(true);

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

    // Incomplete Active Vents
    const incompleteVents = [
        'asurine',
        'veridium',
        'crimsite',
        'ochrum',
        'scorchia',
        'scoria',
        'potassic',
        'verdantine',
        'ancient_debris',
        'resonite',
        'aubrum',
        'stellaris',
        'pyroclast',
        'frostite',
        'noxrock',
        'gneiss',
        'endritus',
        'pearlyte',
        'amberlite',
        'guanite',
        'neodymrium',
        'azurnium',
        'uraniumnite',
        'sulphite',
        'lost_debris',
        'glacium'
    ]

    incompleteVents.forEach(name => {
        const id = `forge_frontier:incomplete_active_${name}_vent`

        event.create(id)
            .displayName(`Incomplete Active ${name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Vent`)
            .soundType('stone')
            .mapColor('STONE')
            .hardness(2.0)
            .model(`forge_frontier:block/incomplete_active_${name}_vent`)
            .requiresTool(true)
            .renderType('solid')
            .tagBlock('mineable/pickaxe')
            .fullBlock(true)
    })

    // Incomplete Rocket Casings
    const incompleteRocketCasings = [
        'steel_rocket_casing',
        'desh_rocket_casing',
        'ostrum_rocket_casing',
        'calorite_rocket_casing',
        'enderite_rocket_casing',
        'primal_magma_rocket_casing'
    ]

    incompleteRocketCasings.forEach(name => {
        const id = `forge_frontier:incomplete_${name}`

        event.create(id)
            .displayName(`Incomplete ${name
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}`)
            .soundType('metal')
            .mapColor('METAL')
            .hardness(2.0)
            .model(`forge_frontier:block/rocket_casing/incomplete_${name}`)
            .requiresTool(true)
            .renderType('solid')
            .tagBlock('mineable/pickaxe')
            .fullBlock(true)
    })

});