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
        'lead',
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
        //'mithril',
        //'bronze',
        //'industrial_iron',
        'void_steel',
        'ethium',
        'netherite-iron',
        'netherite-gold',
        'netherite-emerald',
        'netherite-diamond',
        'star_infused_netherite',
        // New Compressed Create Blocks
        'cogwheel_block',
        'large_cogwheel_block',
        'belt_block',
        'shaft_bundle',
        'mechanism_block',
        'rose_quartz_crystal_block',
        'rose_quartz_polished_block',
        'copper_sheet_block',
        'iron_sheet_block',
        'golden_sheet_block',
        'brass_sheet_block',
        'sturdy_sheet_block',
        'pulp_block',
        'wheat_flour_pile',
        'dough_block',
        'cinder_flour_pile',
        'powdered_obsidian_pile',
    ];
    
    materials.forEach(material => {
        for (let i = 2; i <= 9; i++) {
            createCompressedBlockShapelessRecipe(event, material, i);
        }
    });

    // Cogwheel Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_cogwheel_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:cogwheel_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_cogwheel_block_block_1x')

    // Large Cogwheel Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_large_cogwheel_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:large_cogwheel_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_large_cogwheel_block_block_1x')

    // Belt Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_belt_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:belt_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_belt_block_block_1x')

    // Shaft Bundle
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_shaft_bundle_1x'
            }
        ],
        result: {
            item: 'create_compressed:shaft_bundle',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_shaft_bundle_block_1x')

    // Mechanism Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_mechanism_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:mechanism_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_mechanism_block_block_1x')

    // Rose Quartz Crystal Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_rose_quartz_crystal_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:rose_quartz_crystal_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_rose_quartz_crystal_block_block_1x')

    // Rose Quartz Polished Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_rose_quartz_polished_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:rose_quartz_polished_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_rose_quartz_polished_block_block_1x')

    // Copper Sheet Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_copper_sheet_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:copper_sheet_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_copper_sheet_block_block_1x')

    // Iron Sheet Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_iron_sheet_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:iron_sheet_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_iron_sheet_block_block_1x')

    // Golden Sheet Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_golden_sheet_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:gold_sheet_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_golden_sheet_block_block_1x')

    // Brass Sheet Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_brass_sheet_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:brass_sheet_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_brass_sheet_block_block_1x')

    // Sturdy Sheet Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_sturdy_sheet_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:sturdy_sheet_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_sturdy_sheet_block_block_1x')

    // Pulp Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_pulp_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:pulp_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_pulp_block_block_1x')

    // Wheat Flour Pile
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_wheat_flour_pile_1x'
            }
        ],
        result: {
            item: 'create_compressed:wheat_flour_pile',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_wheat_flour_pile_block_1x')

    // Dough Block
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_dough_block_1x'
            }
        ],
        result: {
            item: 'create_compressed:dough_block',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_dough_block_block_1x')

    // Cinder Flour Pile
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_cinder_flour_pile_1x'
            }
        ],
        result: {
            item: 'create_compressed:cinder_flour_pile',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_cinder_flour_pile_block_1x')

    // Powdered Obsidian Pile
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_powdered_obsidian_pile_1x'
            }
        ],
        result: {
            item: 'create_compressed:powdered_obsidian_pile',
            count: 9
        }
    }).id('forge_frontier:shapeless/compressed_powdered_obsidian_pile_block_1x')    

    // Lead
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'forge_frontier:compressed_lead_1x'
            }
        ],
        result: {
            item: 'createnuclear:lead_block',
            count: 9
        }
    }).id( 'forge_frontier:shapeless/compressed_lead_block_1x' )
 
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

    /*
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
        // Industrial Iron Compressed 1x to Industrial Iron Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_industrial_iron_1x'
                }
            ],
            result: {
                item: 'create_dd:industrial_iron_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_industrial_iron_block_1x' )
    */     

    // Void Steel
        // Void Steel Compressed 1x to Void Steel Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_void_steel_1x'
                }
            ],
            result: {
                item: 'createutilities:void_steel_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_void_steel_block_1x' )      

    // Ethium
        // Ethium Compressed 1x to Ethium Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_ethium_1x'
                }
            ],
            result: {
                item: 'create_ethium:ethium_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_ethium_block_1x' )        

    // Netherite-Iron
        // Netherite Iron Compressed 1x to Netherite Iron Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_netherite-iron_1x'
                }
            ],
            result: {
                item: 'advancednetherite:netherite_iron_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_netherite-iron_block_1x' )       

    // Netherite-Gold
        // Netherite Gold Compressed 1x to Netherite Gold Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_netherite-gold_1x'
                }
            ],
            result: {
                item: 'advancednetherite:netherite_gold_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_netherite-gold_block_1x' )      

    // Netherite-Emerald
        // Netherite Emerald Compressed 1x to Netherite Emerald Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_netherite-emerald_1x'
                }
            ],
            result: {
                item: 'advancednetherite:netherite_emerald_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_netherite-emerald_block_1x' )    

    // Netherite-Diamond
        // Netherite Diamond Compressed 1x to Netherite Diamond Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_netherite-diamond_1x'
                }
            ],
            result: {
                item: 'advancednetherite:netherite_diamond_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_netherite-diamond_block_1x' )      

    // Star Infused Netherite Block
        // Star Infused Netherite Compressed 1x to Star Infused Netherite Block Recipe
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'forge_frontier:compressed_star_infused_netherite_1x'
                }
            ],
            result: {
                item: 'cagedmobs:star_infused_netherite_block',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/compressed_star_infused_netherite_block_1x' )         
    
})