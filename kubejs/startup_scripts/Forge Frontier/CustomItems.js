
StartupEvents.registry('block', event => {

    // Overcharged Blocks
    event.create('forge_frontier:overcharged_iron_block')
        .displayName('Overcharged Iron Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_iron_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     
    
    event.create('forge_frontier:overcharged_gold_block')
        .displayName('Overcharged Gold Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_gold_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);     

    event.create('forge_frontier:overcharged_diamond_block')
        .displayName('Overcharged Diamond Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_diamond_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
    
    event.create('forge_frontier:overcharged_netherite_block')
        .displayName('Overcharged Netherite Block')
        .soundType('metal') 
        .mapColor('Stone') 
        .hardness(2.0)
        .model('forge_frontier:block/overcharged_netherite_block')
        .requiresTool(true)
        .renderType('solid')
        .tagItem('forge:energized/blocks')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
    
    // Trophy Block
    event.create('forge_frontier:trophy_block')
        .displayName("Create - Forge Frontier Trophy")
        .soundType('metal')
        .mapColor('Stone')
        .hardness(2.0)
        .model('forge_frontier:block/trophy_block')
        .requiresTool(true)
        .resistance(1200)
        .waterlogged()
        .renderType('solid')
        .box(1, 0, 1, 15, 14, 15)
        .tagItem('tooltiprareness:epic_item')
        .tagBlock("mineable/pickaxe")
        .fullBlock(true);
   
});

// New Items
StartupEvents.registry('item', event => {

    // Custom Coin
        event.create('forge_frontier:closed_beta_coin')
            .displayName('Closed Beta Coin')
            .maxStackSize(64)
            .texture("forge_frontier:item/coin_texture"); 

    // Custom Eye - Items
        event.create('forge_frontier:blackbeards_musket')
            .displayName("Blackbeard's Musket")
            .tooltip("A legendary firearm once wielded by Blackbeard himself, this musket echoes with the roar of the high seas. Forged for fear, not finesse, it was less a tool of war and more a symbol of terror—its presence alone worth a king's ransom.")
            .parentModel('forge_frontier:item/blackbeards_musket')
            .texture('forge_frontier:item/blackbeards_musket')
            .maxStackSize(1)
            .rarity('rare'); 

        event.create('forge_frontier:blackbeards_cutlass', 'sword')
            .displayName("Blackbeard's Cutlass")
            .tooltip("A fearsome blade said to have sailed with Blackbeard across countless raids, Blackbeard's Cutlass is as much legend as steel. Its edge has tasted gold and blood alike, a weapon forged not just for battle—but for command. Those who face it rarely live to tell the tale.")
            .parentModel('forge_frontier:item/blackbeards_cutlass')
            .texture('forge_frontier:item/blackbeards_cutlass')
            .attackDamageBonus(2)
            .speed(2)
            .tier('netherite')
            .maxStackSize(1)
            .rarity('rare'); 

        event.create('forge_frontier:cursed_cannon_ball')
            .displayName('Cursed Cannonball')
            .tooltip("A heavy iron sphere once fired from the cannons of Blackbeard’s flagship, this Cursed Cannonball carries more than brute force—it bears the weight of dread. Said to leave behind echoes of thunder and ghostly flames, it's a relic of naval devastation and pirate-inflicted fear.")
            .parentModel('forge_frontier:item/cursed_cannon_ball')
            .texture('forge_frontier:item/cursed_cannon_ball')
            .maxStackSize(2)
            .rarity('rare');

        event.create('forge_frontier:soul_flame_staff')
            .tooltip('An ancient staff imbued with soul fire, once guiding the lost through the fiery depths of the Nether.')
            .displayName('Soul Flame Staff')
            .texture('forge_frontier:item/soul_flame_staff');

        event.create('forge_frontier:infernal_ingot')
            .tooltip('Forged in the heart of a blazing inferno, this ingot once crafted legendary weapons. Now, it holds the secrets of the ancients.')
            .displayName('Infernal Ingot')
            .texture('forge_frontier:item/infernal_ingot');

        event.create('forge_frontier:ras_solar_sword')
            .tooltip('Forged by Ra himself, this radiant sword was wielded by the Pharaohs in battles long forgotten. It shines with the light of the sun.')
            .displayName("Ra's Solar Sword")
            .texture('forge_frontier:item/ras_solar_sword');

        event.create('forge_frontier:sun_disc')
            .tooltip('Harnessing the power of the sun, this disc was once a divine artifact of Ra, the sun god. It radiates with untold energy.')
            .displayName('Sun Disc')
            .texture('forge_frontier:item/sun_disc');

        event.create('forge_frontier:piglin_kings_crown')
            .tooltip('This regal crown was worn by the ancient Piglin King, a symbol of his dominion over the Nether, now worn by the new King of the Nether the Wildfire. It glimmers with lost power.')
            .displayName("Piglin King's Crown")
            .texture('forge_frontier:item/piglin_kings_crown');

        event.create('forge_frontier:piglin_war_axe')
            .tooltip('Once swung in the great war between Piglins and Villagers, this war axe bears the scars of countless battles.')
            .displayName("Piglin War Axe")
            .texture('forge_frontier:item/piglin_war_axe');

        event.create('forge_frontier:piglin_totem')
            .tooltip('A sacred totem of the Piglins, believed to ward off the curse of zombification. It holds the essence of Piglin ancestors.')
            .displayName("Piglin Totem")
            .texture('forge_frontier:item/piglin_totem');

        event.create('forge_frontier:infernal_chisel')
            .tooltip('Once wielded by the ancient blacksmiths of Martian colonies, this infernal chisel was instrumental in crafting formidable weapons and tools.')
            .displayName("Infernal Chisel")
            .texture('forge_frontier:item/infernal_chisel');
        
        event.create('forge_frontier:hellhounds_fang')
            .tooltip("This fang, lost by Hades' hellhounds in their pursuit of lost souls, was later repurposed by the ancient Nether  dwellers as a precise cutting tool.")
            .displayName("Hellhound's Fang")
            .texture('forge_frontier:item/hellhounds_fang');
         

    // Overcharged Items
        event.create('forge_frontier:overcharged_netherite_ingot')
            .displayName('Overcharged Netherite Ingot')
            .texture('forge_frontier:item/overcharged_netherite_ingot');

    // New Molds
        event.create('forge_frontier:upgrade_mold')
            .displayName('Upgrade Template Mold')
            .texture('forge_frontier:item/molds/upgrade_mold');
            
        event.create('forge_frontier:axe_mold')
            .displayName('Axe Mold')
            .texture('forge_frontier:item/molds/axe_mold');

        event.create('forge_frontier:boots_mold')
            .displayName('Boots Mold')
            .texture('forge_frontier:item/molds/boots_mold');

        event.create('forge_frontier:block_mold')
            .displayName('Block Mold')
            .texture('forge_frontier:item/molds/block_mold');

        event.create('forge_frontier:chestplate_mold')
            .displayName('Chestplate Mold')
            .texture('forge_frontier:item/molds/chestplate_mold');

        event.create('forge_frontier:coal_mold')
            .displayName('Coal Mold')
            .texture('forge_frontier:item/molds/coal_mold');

        event.create('forge_frontier:gem_mold')
            .displayName('Gem Mold')
            .texture('forge_frontier:item/molds/gem_mold');

        event.create('forge_frontier:head_mold')
            .displayName('Head Mold')
            .texture('forge_frontier:item/molds/head_mold');

        event.create('forge_frontier:helmet_mold')
            .displayName('Helmet Mold')
            .texture('forge_frontier:item/molds/helmet_mold');

        event.create('forge_frontier:hoe_mold')
            .displayName('Hoe Mold')
            .texture('forge_frontier:item/molds/hoe_mold');

        event.create('forge_frontier:ingot_mold')
            .displayName('Ingot Mold')
            .texture('forge_frontier:item/molds/ingot_mold');

        event.create('forge_frontier:leggings_mold')
            .displayName('Leggings Mold')
            .texture('forge_frontier:item/molds/leggings_mold');

        event.create('forge_frontier:mold_template')
            .displayName('Mold Template')
            .texture('forge_frontier:item/molds/mold_template');

        event.create('forge_frontier:pickaxe_mold')
            .displayName('Pickaxe Mold')
            .texture('forge_frontier:item/molds/pickaxe_mold');

        event.create('forge_frontier:shovel_mold')
            .displayName('Shovel Mold')
            .texture('forge_frontier:item/molds/shovel_mold');

        event.create('forge_frontier:skull_mold')
            .displayName('Skull Mold')
            .texture('forge_frontier:item/molds/skull_mold');

        event.create('forge_frontier:sword_mold')
            .displayName('Sword Mold')
            .texture('forge_frontier:item/molds/sword_mold');

    // Netherite Automation Parts
        event.create('forge_frontier:netherite_specks')
            .displayName('Netherite Specks')
            .texture('forge_frontier:item/netherite_specks');

        event.create('forge_frontier:incomplete_netherite_dust')
            .displayName('Incomplete Netherite Dust')
            .texture('tfmg:item/coal_coke_dust');
        
        event.create('forge_frontier:netherite_dust')
            .displayName('Netherite Dust')
            .texture('forge_frontier:item/netherite_dust')

    // Custom Engines
        event.create("forge_frontier:tier_5_engine")
            .displayName("Tier 5 Engine")
            .texture('forge_frontier:item/rocket_additions/tier_5_engine');

        event.create("forge_frontier:tier_6_engine")
            .displayName("Tier 6 Engine")
            .texture('forge_frontier:item/rocket_additions/tier_6_engine');    

    // Custom Tanks
        event.create("forge_frontier:tier_5_tank")
            .displayName("Tier 5 Tank")
            .texture('forge_frontier:item/rocket_additions/tier_5_tank');

        event.create("forge_frontier:tier_6_tank")
            .displayName("Tier 6 Tank")
            .texture('forge_frontier:item/rocket_additions/tier_6_tank');   

    // Logo
        event.create('forge_frontier:modpack_logo')
            .displayName('Forge Frontier Logo')
            .texture('forge_frontier:item/forgefrontier')

    // Upgrades
        event.create('forge_frontier:netherite_iron_upgrade')
            .displayName('Netherite Iron Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_iron_upgrade_smithing_template')

        event.create('forge_frontier:netherite_gold_upgrade')
            .displayName('Netherite Gold Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_gold_upgrade_smithing_template')

        event.create('forge_frontier:netherite_emerald_upgrade')
            .displayName('Netherite Emerald Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_emerald_upgrade_smithing_template')

        event.create('forge_frontier:netherite_diamond_upgrade')
            .displayName('Netherite Diamond Smithing Template')
            .texture('forge_frontier:item/upgrades/netherite_diamond_upgrade_smithing_template')
});

