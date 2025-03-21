StartupEvents.registry('item', event => {

    // List of materials
    const materials = [
        'Bismuth',
        'Calorite',
        'Desh',
        'Irradium',
        'Malachite',
        'Ostrum',
        'Verdantine',
        'Glacium',
        'Debris',
        'Resonite',
        'Aubrum',
        'Pyroclast',
        'Frostite',
        'Stellaris',
        'Radiantite',
        'Shale',
        'Palerock',
        'Guanite',
        'Pearlyte',
        'Amberlite',
        'Azurnium',
        'Neodymrium',
        'Uraniumnite',
        'Sulphite'
    ];

    // Crushed Ores
    function createCrushedOres(event, material) {
        const id = `crushed_${material.toLowerCase()}`;
        event.create(`forge_frontier:${id}`)
            .displayName(`Crushed ${material}`)
            .texture(`forge_frontier:item/crushed_ore/${id}`);
    }

    materials.forEach(material => {
        createCrushedOres(event, material);
    });

});