StartupEvents.registry('item', event => {

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
        'Reggarfonite',
        'Tin',
        'Noxrock',
        'Endritus',
        'Gneiss',
        'Silver'
    ];

    function createDirtyDust(event, material) {
        const id = `dirty_${material.toLowerCase()}_dust`;
        event.create(`forge_frontier:${id}`)
            .displayName(`Dirty ${material} Dust`)
            .texture(`forge_frontier:item/dirty_dust/${id}`);
    }

    function createCleanDust(event, material) {
        const id = `${material.toLowerCase()}_dust`;
        event.create(`forge_frontier:${id}`)
            .displayName(`${material} Dust`)
            .texture(`forge_frontier:item/dust/${id}`);
    }

    materials.forEach(material => {
        createDirtyDust(event, material);
        createCleanDust(event, material);
    });

});
