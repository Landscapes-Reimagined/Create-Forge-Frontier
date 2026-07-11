StartupEvents.registry('fluid', event => {

    // List of molten fluids with their properties
    const moltenFluids = [
        { name: 'carbon', color: 0x2d2d2d },
        { name: 'netherite_iron', color: 0xa6a6a6 },
        { name: 'netherite_gold', color: 0xf9ee3e },
        { name: 'netherite_emerald', color: 0x007a18 },
        { name: 'netherite_diamond', color: 0x327b81 },
        { name: 'uranium', color: 0x00fc00 },
        { name: 'guano', color: 0x45271f },
        { name: 'scarlet_neodymium', color: 0xb91919 },
        { name: 'azure_neodymium', color: 0x005fec },
        { name: 'pearl', color: 0xf2bbd6 },
        { name: 'amber', color: 0xc67513 },
        { name: 'sulfur', color: 0xfcf689 },
        { name: 'echo_shard', color: 0x03404f },
        { name: 'etrium', color: 0xbafcf6 },
        { name: 'amethyst_mix', color: 0xb18cf0 },
        { name: 'calorite', color: 0x9c1f3e},
        { name: 'desh', color: 0x9c4438},
        { name: 'ostrum', color: 0xa66b72},
        { name: 'emerald', color: 0xa4fc73},
        { name: 'diamond', color: 0x67fcee},
        { name: 'reggarfonite', color: 0x288076},
        { name: 'debris', color: 0x5c332b},
        { name: 'luxite', color: 0xffff37},
        { name: 'adamantite', color: 0xdc3d4a},
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

    event.create('forge_frontier:creative_energy_fluid')
        .displayName('Creative Energy Fluid')
        .color(0xc34bbb)        
        .bucketColor(0xc34bbb)
        .thinTexture(0xc34bbb)  
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
