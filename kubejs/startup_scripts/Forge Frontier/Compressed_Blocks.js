// Function to create a compressed block
function createCompressedBlock(event, material, level) {
    const id = `compressed_${material.toLowerCase()}_${level}x`;
    event.create(`forge_frontier:${id}`)
        .displayName(`Compressed ${material.replace(/_/g, ' ')} ${level}x`)
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
    'Ethium',
    'Netherite-Iron',
    'Netherite-Gold',
    'Netherite-Emerald',
    'Netherite-Diamond',
    'Star_Infused_Netherite',

    // New Compressed Create Blocks
    'Cogwheel_Block',
    'Large_Cogwheel_Block',
    'Belt_Block',
    'Shaft_Bundle',
    'Mechanism_Block',
    'Rose_Quartz_Crystal_Block',
    'Rose_Quartz_Polished_Block',
    'Copper_Sheet_Block',
    'Iron_Sheet_Block',
    'Golden_Sheet_Block',
    'Brass_Sheet_Block',
    'Sturdy_Sheet_Block',
    'Pulp_Block',
    'Wheat_Flour_Pile',
    'Dough_Block',
    'Cinder_Flour_Pile',
    'Powdered_Obsidian_Pile',
];

// Register blocks
StartupEvents.registry('block', event => {
    materials.forEach(material => {
        for (let i = 1; i <= 9; i++) {
            createCompressedBlock(event, material, i);
        }
    });
});
