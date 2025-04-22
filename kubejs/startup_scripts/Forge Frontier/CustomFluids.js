StartupEvents.registry('fluid', event => {

    // List of molten fluids with their properties
    const moltenFluids = [
        { name: 'aluminum', color: 0xffffff },
        { name: 'carbon', color: 0x2d2d2d },
        { name: 'redstone', color: 0xac2727 },
        { name: 'lapis', color: 0x1c52a6 },
        { name: 'bone_marrow', color: 0xc7c3a5 },
        { name: 'netherite_iron', color: 0xa6a6a6 },
        { name: 'netherite_gold', color: 0xf9ee3e },
        { name: 'netherite_emerald', color: 0x007a18 },
        { name: 'netherite_diamond', color: 0x327b81 },
        { name: 'tin', color: 0xe7e8ed },
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
        { name: 'echo_shard', color: 0x03404f }
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

});
