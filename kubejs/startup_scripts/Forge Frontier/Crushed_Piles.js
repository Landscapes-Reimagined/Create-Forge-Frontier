StartupEvents.registry('block', event => {

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

// Crushed Piles
function createCrushedPiles(event, material) {
    const id = `crushed_${material.toLowerCase()}_pile`;
    event.create(`forge_frontier:${id}`)
        .displayName(`Crushed ${material} Pile`)
        .soundType('metal')
        .mapColor('Stone')
        .hardness(2.0)
        .model(`forge_frontier:block/crushed_piles/${id}`)
        .requiresTool(true)
        .renderType('solid')
        .tagItem('create:crushed_raw_materials/piles')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true);
}

    materials.forEach(material => {
        createCrushedPiles(event, material);
    });

});