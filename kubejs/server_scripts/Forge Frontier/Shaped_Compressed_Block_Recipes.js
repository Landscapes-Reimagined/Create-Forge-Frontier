ServerEvents.recipes(event => {
    // Creates Compressed 2x through 9x Blocks
    function createCompressedBlockRecipe(event, material, level) {
        event.shaped(
            Item.of(`forge_frontier:compressed_${material}_${level}x`),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: `forge_frontier:compressed_${material}_${level-1}x`
            }
        ).id(`forge_frontier:shaped/compressed_${material}_${level}x`);
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
        // 'mithril',
        // 'bronze',
        // 'industrial_iron',
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
            createCompressedBlockRecipe(event, material, i);
        }
    });
// Creates 1x Shaped Recipes
    // Cogwheel Block
    event.shaped(
        Item.of('forge_frontier:compressed_cogwheel_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:cogwheel_block'
        }
    ).id('forge_frontier:shaped/cogwheel_block_1x');

    // Large Cogwheel Block
    event.shaped(
        Item.of('forge_frontier:compressed_large_cogwheel_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:large_cogwheel_block'
        }
    ).id('forge_frontier:shaped/large_cogwheel_block_1x');

    // Belt Block
    event.shaped(
        Item.of('forge_frontier:compressed_belt_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:belt_block'
        }
    ).id('forge_frontier:shaped/belt_block_1x');

    // Shaft Bundle
    event.shaped(
        Item.of('forge_frontier:compressed_shaft_bundle_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:shaft_bundle'
        }
    ).id('forge_frontier:shaped/shaft_bundle_1x');

    // Mechanism Block
    event.shaped(
        Item.of('forge_frontier:compressed_mechanism_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:mechanism_block'
        }
    ).id('forge_frontier:shaped/mechanism_block_1x');

    // Rose Quartz Crystal Block
    event.shaped(
        Item.of('forge_frontier:compressed_rose_quartz_crystal_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:rose_quartz_crystal_block'
        }
    ).id('forge_frontier:shaped/rose_quartz_crystal_block_1x');

    // Rose Quartz Polished Block
    event.shaped(
        Item.of('forge_frontier:compressed_rose_quartz_polished_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:rose_quartz_polished_block'
        }
    ).id('forge_frontier:shaped/rose_quartz_polished_block_1x');

    // Copper Sheet Block
    event.shaped(
        Item.of('forge_frontier:compressed_copper_sheet_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:copper_sheet_block'
        }
    ).id('forge_frontier:shaped/copper_sheet_block_1x');

    // Iron Sheet Block
    event.shaped(
        Item.of('forge_frontier:compressed_iron_sheet_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:iron_sheet_block'
        }
    ).id('forge_frontier:shaped/iron_sheet_block_1x');

    // Golden Sheet Block
    event.shaped(
        Item.of('forge_frontier:compressed_golden_sheet_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:gold_sheet_block'
        }
    ).id('forge_frontier:shaped/golden_sheet_block_1x');

    // Brass Sheet Block
    event.shaped(
        Item.of('forge_frontier:compressed_brass_sheet_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:brass_sheet_block'
        }
    ).id('forge_frontier:shaped/brass_sheet_block_1x');

    // Sturdy Sheet Block
    event.shaped(
        Item.of('forge_frontier:compressed_sturdy_sheet_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:sturdy_sheet_block'
        }
    ).id('forge_frontier:shaped/sturdy_sheet_block_1x');

    // Pulp Block
    event.shaped(
        Item.of('forge_frontier:compressed_pulp_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:pulp_block'
        }
    ).id('forge_frontier:shaped/pulp_block_1x');

    // Wheat Flour Pile
    event.shaped(
        Item.of('forge_frontier:compressed_wheat_flour_pile_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:wheat_flour_pile'
        }
    ).id('forge_frontier:shaped/wheat_flour_pile_1x');

    // Dough Block
    event.shaped(
        Item.of('forge_frontier:compressed_dough_block_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:dough_block'
        }
    ).id('forge_frontier:shaped/dough_block_1x');

    // Cinder Flour Pile
    event.shaped(
        Item.of('forge_frontier:compressed_cinder_flour_pile_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:cinder_flour_pile'
        }
    ).id('forge_frontier:shaped/cinder_flour_pile_1x');

    // Powdered Obsidian Pile
    event.shaped(
        Item.of('forge_frontier:compressed_powdered_obsidian_pile_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A : 'create_compressed:powdered_obsidian_pile'
        }
    ).id('forge_frontier:shaped/powdered_obsidian_pile_1x');

    // Lead
    event.shaped(
        Item.of('forge_frontier:compressed_lead_1x'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'createnuclear:lead_block', 
        }
    ).id( 'forge_frontier:shaped/lead_block_1x' )

    // Malachite
        // Creates New Shaped Recipe for Malachite
        event.remove({ id: 'enlightened_end:malachite_block' })
        event.shaped(
            Item.of('enlightened_end:malachite_block'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:malachite', 
            }
        ).id( 'forge_frontier:shaped/malachite_block' )

        // Creates New Compressed Recipes for Malachite Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_malachite_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:malachite_block', 
            }
        ).id( 'forge_frontier:shaped/malachite_block_1x' )

    // Irradium
        // Creates New Shaped Recipe for Irradium
        event.remove({ id: 'enlightened_end:irradium_block'})
        event.shaped(
            Item.of('enlightened_end:irradium_block'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:irradium_bar', 
            }
        ).id( 'forge_frontier:shaped/irradium_block' )

        // Creates New Compressed Recipes for Irradium Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_irradium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:irradium_block', 
            }
        ).id( 'forge_frontier:shaped/irradium_block_1x' )

    // Bismuth
         // Creates New Compressed Recipes for Bismuth Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_bismuth_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'enlightened_end:bismuth_block', 
            }
        ).id( 'forge_frontier:shaped/bismuth_block_1x' )
   
    // Desh
         // Creates New Compressed Recipes for Desh Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_desh_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'ad_astra:desh_block', 
            }
        ).id( 'forge_frontier:shaped/desh_block_1x' )
     
    // Ostrum
         // Creates New Compressed Recipes for Ostrum Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_ostrum_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'ad_astra:ostrum_block', 
            }
        ).id( 'forge_frontier:shaped/ostrum_block_1x' )  

    // Calorite
         // Creates New Compressed Recipes for Calorite Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_calorite_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'ad_astra:calorite_block', 
            }
        ).id( 'forge_frontier:shaped/calorite_block_1x' )

    // Scarlet Neodymium
         // Creates New Compressed Recipes for Scarlet Neodymium Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_scarlet_neodymium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:block_of_scarlet_neodymium', 
            }
        ).id( 'forge_frontier:shaped/scarlet_neodymium_block_1x' )

    // Azure Neodymium
         // Creates New Compressed Recipes for Azure Neodymium Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_azure_neodymium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:block_of_azure_neodymium', 
            }
        ).id( 'forge_frontier:shaped/azure_neodymium_block_1x' )    

    // Uranium
         // Creates New Compressed Recipes for Uranium Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_uranium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:block_of_uranium', 
            }
        ).id( 'forge_frontier:shaped/uranium_block_1x' )   

    // Amber
         // Creates New Compressed Recipes for Amber Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_amber_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:amber', 
            }
        ).id( 'forge_frontier:shaped/amber_block_1x' )
       
    // Sulfur
         // Creates New Compressed Recipes for Sulfur Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_sulfur_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:sulfur', 
            }
        ).id( 'forge_frontier:shaped/sulfur_block_1x' )    

    // Pearls
         // Creates New Compressed Recipes for Pearl Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_pearl_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:block_of_pearl', 
            }
        ).id( 'forge_frontier:shaped/pearl_block_1x' )      

    // Guano
         // Creates New Compressed Recipes for Guano Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_guano_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'alexscaves:guano_block', 
            }
        ).id( 'forge_frontier:shaped/guano_block_1x' )      

    /*
        // Methril
         // Creates New Compressed Recipes for Mithril Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_mithril_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'create_dd:mithril_block', 
            }
        ).id( 'forge_frontier:shaped/mithril_block_1x' )       

    // Bronze
         // Creates New Compressed Recipes for Bronze Compressed Blocks 1x
         event.shaped(
            Item.of('forge_frontier:compressed_bronze_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'create_dd:bronze_block', 
            }
        ).id( 'forge_frontier:shaped/bronze_block_1x' )       

    // Industrial Iron
        // Creates New Compressed Recipes for Industrial Iron Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_industrial_iron_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'create_dd:industrial_iron_block', 
            }
        ).id( 'forge_frontier:shaped/industrial_iron_block_1x' )     
    */

    // Void Steel
        // Creates New Compressed Recipes for Void Steel Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_void_steel_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'createutilities:void_steel_block', 
            }
        ).id( 'forge_frontier:shaped/void_steel_block_1x' )     

    // Ethium
        // Creates New Compressed Recipes for Ethium Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_ethium_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'create_ethium:ethium_block', 
            }
        ).id( 'forge_frontier:shaped/ethium_block_1x' )     

    // Netherite-Iron
        // Creates New Compressed Recipes for Netherite Iron Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_netherite-iron_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'advancednetherite:netherite_iron_block', 
            }
        ).id( 'forge_frontier:shaped/netherite-iron_block_1x' )       

    // Netherite-Gold
        // Creates New Compressed Recipes for Netherite Gold Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_netherite-gold_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'advancednetherite:netherite_gold_block', 
            }
        ).id( 'forge_frontier:shaped/netherite-gold_block_1x' )       

    // Netherite-Emerald
        // Creates New Compressed Recipes for Netherite Emerald Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_netherite-emerald_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'advancednetherite:netherite_emerald_block', 
            }
        ).id( 'forge_frontier:shaped/netherite-emerald_block_1x' )        

    // Netherite-Diamond
        // Creates New Compressed Recipes for Netherite Diamond Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_netherite-diamond_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'advancednetherite:netherite_diamond_block', 
            }
        ).id( 'forge_frontier:shaped/netherite-diamond_block_1x' )      

    // Star Infused Netherite Block
        // Creates New Compressed Recipes for Star Infused Netherite Compressed Blocks 1x
        event.shaped(
            Item.of('forge_frontier:compressed_star_infused_netherite_1x'),
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'cagedmobs:star_infused_netherite_block', 
            }
        ).id( 'forge_frontier:shaped/star_infused_netherite_block_1x' )          
    
})