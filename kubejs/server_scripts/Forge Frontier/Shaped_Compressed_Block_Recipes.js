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
        'star_infused_netherite'
        ];
    
    materials.forEach(material => {
        for (let i = 2; i <= 9; i++) {
            createCompressedBlockRecipe(event, material, i);
        }
    });

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