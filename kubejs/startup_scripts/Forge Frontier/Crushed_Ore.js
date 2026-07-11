StartupEvents.registry('item', event => {

    // List of materials
    const materials = [
        'Calorite',
        'Desh',
        'Ostrum',
        'Verdantine',
        'Glacium',
        'Debris',
        'Resonite',
        'Aubrum',
        'Pyroclast',
        'Frostite',
        'Stellaris',
        'Guanite',
        'Pearlyte',
        'Amberlite',
        'Azurnium',
        'Neodymrium',
        'Uraniumnite',
        'Sulphite',
        'Noxrock',
        'Endritus',
        'Gneiss'
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