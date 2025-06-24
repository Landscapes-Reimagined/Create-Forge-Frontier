StartupEvents.registry('fluid', event => {

    // List of molten fluids with their properties
    const moltenFluids = [
        { name: 'carbon', color: 0x2d2d2d },
        { name: 'redstone', color: 0xac2727 },
        { name: 'lapis', color: 0x1c52a6 },
        { name: 'bone_marrow', color: 0xc7c3a5 },
        { name: 'netherite_iron', color: 0xa6a6a6 },
        { name: 'netherite_gold', color: 0xf9ee3e },
        { name: 'netherite_emerald', color: 0x007a18 },
        { name: 'netherite_diamond', color: 0x327b81 },
        { name: 'ice_shard', color: 0x8890b8 },
        { name: 'uranium', color: 0x00fc00 },
        { name: 'bismuth', color: 0x555341 },
        { name: 'irradium', color: 0x21532b },
        { name: 'malachite', color: 0x3c776d },
        { name: 'guano', color: 0x45271f },
        { name: 'scarlet_neodymium', color: 0xb91919 },
        { name: 'azure_neodymium', color: 0x005fec },
        { name: 'pearl', color: 0xf2bbd6 },
        { name: 'amber', color: 0xc67513 },
        { name: 'sulfur', color: 0xfcf689 },
        { name: 'echo_shard', color: 0x03404f },
        { name: 'etrium', color: 0xbafcf6 }
    ];

    // Function to create molten fluids
    function createMoltenFluid(event, name, color) {
        event.create(`forge_frontier:molten_${name}`)
            .color(color)
            .displayName(`Molten ${formatName(name)}`)
            .bucketColor(color)
            .thickTexture(color)
            .viscosity(6000)
            .temperature(1300)
            .bucketItem;
    }

    // Helper function to format names
    function formatName(str) {
        return str.split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Create all molten fluids
    moltenFluids.forEach(fluid => createMoltenFluid(event, fluid.name, fluid.color));

    event.create('forge_frontier:cheese')
        .displayName('Cheese')
        .color(0xfac424) 
        .bucketColor(0xfac424)
        .thinTexture(0xfac424) 
        .viscosity(1000) 
        .temperature(300) 
        .bucketItem;

    event.create('forge_frontier:lime_juice')
        .displayName('Lime Juice')
        .color(0xd6f687)
        .bucketColor(0xd6f687)
        .thinTexture(0xd6f687) 
        .viscosity(1000) 
        .temperature(300) 
        .bucketItem;

    event.create('forge_frontier:pomegranate_milk')
        .displayName('Pomegranate Milk')
        .color(0xbb5958) 
        .bucketColor(0xbb5958)
        .thinTexture(0xbb5958) 
        .viscosity(1000) 
        .temperature(300) 
        .bucketItem;

    event.create('forge_frontier:adzuki_milk')
        .displayName('Adzuki Milk')
        .color(0xe59282)        
        .bucketColor(0xe59282)
        .thinTexture(0xe59282)  
        .viscosity(1000)        
        .temperature(300)       
        .bucketItem;

// === Shared Settings ===
    const milkshakeViscosity = 1200;
    const milkshakeDensity = 1100;
    const milkshakeTemp = 290;

    // === Neapolitan Milkshake ===
    event.create('forge_frontier:neapolitan_milkshake')
        .displayName('Neapolitan Milkshake')
        .color(0xf2b8a0) // Light pink/vanilla/strawberry tone
        .bucketColor(0xf2b8a0)
        .stillTexture('forge_frontier:block/fluid/neapolitan_milkshake_still')
        .flowingTexture('forge_frontier:block/fluid/neapolitan_milkshake_flow')
        .thickTexture(0xf2b8a0)
        .viscosity(milkshakeViscosity)
        .density(milkshakeDensity)
        .temperature(milkshakeTemp);

    // === Pomegranate Milkshake ===
    event.create('forge_frontier:pomegranate_milkshake')
        .displayName('Pomegranate Milkshake')
        .color(0xbb5958)
        .bucketColor(0xbb5958)
        .stillTexture('create_central_kitchen:block/fluid/pomegranate_milkshake_still')
        .flowingTexture('create_central_kitchen:block/fluid/pomegranate_milkshake_flow')
        .thickTexture(0xbb5958)
        .viscosity(milkshakeViscosity)
        .density(milkshakeDensity)
        .temperature(milkshakeTemp);

    // === Adzuki Milkshake ===
    event.create('forge_frontier:adzuki_milkshake')
        .displayName('Adzuki Milkshake')
        .color(0xe59282)
        .bucketColor(0xe59282)
        .stillTexture('create_central_kitchen:block/fluid/adzuki_milkshake_still')
        .flowingTexture('create_central_kitchen:block/fluid/adzuki_milkshake_flow')
        .thickTexture(0xe59282)
        .viscosity(milkshakeViscosity)
        .density(milkshakeDensity)
        .temperature(milkshakeTemp);

});
