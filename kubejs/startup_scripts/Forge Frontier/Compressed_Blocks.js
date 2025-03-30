// Function to create a compressed block
function createCompressedBlock(event, material, level) {
    const id = `compressed_${material.toLowerCase()}_${level}x`;
    event.create(`forge_frontier:${id}`)
        .displayName(`Compressed ${material} ${level}x`)
        .soundType('metal')
        .mapColor('stone')
        .hardness(2.0)
        .model(`forge_frontier:block/compressed_blocks/${id}`)
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:storage_blocks')
        .tagBlock('mineable/pickaxe')
        .fullBlock(true);
}

// List of materials
const materials = [
    'Lead',
    'Malachite',
    'Irradium',
    'Bismuth',
    'Desh',
    'Ostrum',
    'Calorite',
    'Scarlet_Neodymium',
    'Azure_Neodymium',
    'Uranium',
    'Amber',
    'Sulfur',
    'Pearl',
    'Guano',
    'Mithril',
    'Bronze',
    'Industrial_Iron',
    'Void_Steel',
    'Ethium',
    'Netherite-Iron',
    'Netherite-Gold',
    'Netherite-Emerald',
    'Netherite-Diamond',
    'Star_Infused_Netherite',
];

// Register blocks
StartupEvents.registry('block', event => {
    materials.forEach(material => {
        for (let i = 1; i <= 9; i++) {
            createCompressedBlock(event, material, i);
        }
    });
});
