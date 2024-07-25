ServerEvents.recipes(event => {
    // Creates Compressed Blocks to Lower Tier Compressed Blocks Shapeless Recipes
    function createCompressedBlockShapelessRecipe(event, material, level) {
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: `forge_frontier:compressed_${material}_${level}x`
                }
            ],
            result: {
                item: `forge_frontier:compressed_${material}_${level-1}x`,
                count: 9
            }
        }).id(`forge_frontier:shapeless/compressed_${material}_${level}x`);
    }
    
    const materials = [
        'malachite',
        'irradium',
        'bismuth',
        'desh',
        'ostrum',
        'calorite',
        'scarlet_neodymium',
        'azure_neodymium',
        'uranium',
        'amber',
        'sulfur',
        'pearl',
        'guano',
        'mithril',
        'bronze',
        // 'industrial_iron',
        // 'void_steel',
        // 'ethium',
        // 'netherite-iron',
        // 'netherite-gold',
        // 'netherite-emerald',
        // 'netherite-diamond',
        // 'star_infused_netherite'
    ];
    
    materials.forEach(material => {
        for (let i = 2; i <= 9; i++) {
            createCompressedBlockShapelessRecipe(event, material, i);
        }
    });
    
    // Malachite
        // Malachite Block to Malchite Shapeless Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'enlightened_end:malachite_block'
                }
            ],
            result: {
                item: 'enlightened_end:malachite',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/malachite_block' )

        // Malachite Compressed 1x to Malachite Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_malachite_1x'
                }
            ],
            result: {
                item: 'enlightened_end:malachite_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_malachite_block_1x' )
    
    // Irradium
     // Irradium Block to Irradium Shapeless Recipe
     event.remove({ id: 'enlightened_end:irradium_block_convert' })
     event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'enlightened_end:irradium_block'
            }
        ],
        result: {
            item: 'enlightened_end:irradium_bar',
            count: 9
        }
    }).id( 'forge_frontier:shapeless/irradium_block' )

    // Irradium Compressed 1x to Irradium Block Recipe
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_irradium_1x'
            }
        ],
        result: {
            item: 'enlightened_end:irradium_block',
            count: 9
        }
    }).id( 'forge_frontier:shapeless/compressed_irradium_block_1x' )

    // Bismuth
        // Bismuth Compressed 1x to Bismuth Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_bismuth_1x'
                }
            ],
            result: {
                item: 'enlightened_end:bismuth_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_bismuth_block_1x' )

    // Desh
        // Desh Compressed 1x to Desh Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_desh_1x'
                }
            ],
            result: {
                item: 'ad_astra:desh_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_desh_block_1x' )
 
    // Ostrum
        // Ostrum Compressed 1x to Ostrum Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_ostrum_1x'
                }
            ],
            result: {
                item: 'ad_astra:ostrum_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_ostrum_block_1x' )
       
    // Calorite
        // Calorite Compressed 1x to Calorite Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_calorite_1x'
                }
            ],
            result: {
                item: 'ad_astra:calorite_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_calorite_block_1x' )
          
    // Scarlet Neodymium
        // Scarlet Neodymium Compressed 1x to Scarlet Neodymium Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_scarlet_neodymium_1x'
                }
            ],
            result: {
                item: 'alexscaves:block_of_scarlet_neodymium',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_scarlet_neodymium_block_1x' )

    // Azure Neodymium
        // Azure Neodymium Compressed 1x to Azure Neodymium Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_azure_neodymium_1x'
                }
            ],
            result: {
                item: 'alexscaves:block_of_azure_neodymium',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_azure_neodymium_block_1x' )
    
    // Uranium
        // Uranium Compressed 1x to Uranium Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_uranium_1x'
                }
            ],
            result: {
                item: 'alexscaves:block_of_uranium',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_uranium_block_1x' )
    
    // Amber
        // Amber Compressed 1x to Amber Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_amber_1x'
                }
            ],
            result: {
                item: 'alexscaves:amber',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_amber_block_1x' )
   
    // Sulfur
        // Sulfur Compressed 1x to Sulfur Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_sulfur_1x'
                }
            ],
            result: {
                item: 'alexscaves:sulfur',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_sulfur_block_1x' )    

    // Pearls
        // Pearl Compressed 1x to Pearl Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_pearl_1x'
                }
            ],
            result: {
                item: 'alexscaves:block_of_pearl',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_pearl_block_1x' )     

    // Guano
        // Guano Compressed 1x to Guano Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_guano_1x'
                }
            ],
            result: {
                item: 'alexscaves:guano_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_guano_block_1x' )       

    // Methril
        // Mithril Compressed 1x to Mithril Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_mithril_1x'
                }
            ],
            result: {
                item: 'create_dd:mithril_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_mithril_block_1x' )     

    // Bronze
        // Bronze Compressed 1x to Bronze Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_bronze_1x'
                }
            ],
            result: {
                item: 'create_dd:bronze_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_bronze_block_1x' )       

    // Industrial Iron

    // Void Steel

    // Ethium

    // Netherite-Iron

    // Netherite-Gold

    // Netherite-Emerald

    // Netherite-Diamond

    // Star Infused Netherite Block    
    
})