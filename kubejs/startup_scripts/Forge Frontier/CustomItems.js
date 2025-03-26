
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

        event.create('forge_frontier:hades_bident', 'sword')
            .displayName("Hade's Bident")
            .tooltip("A weapon of judgment forged in the deepest fires of the underworld. Hades' Bident strikes not with flame, but with dominion—piercing both flesh and soul. Legends claim the ground splits beneath its blow, as if the dead reach up to drag the living below.")
            .parentModel('forge_frontier/hades_bident')
            .texture('forge_frontier:item/hades_bident')
            .tier('netherite')
            .maxStackSize(1)
            .speed(3)
            .rarity('rare');

        event.create('forge_frontier:ancient_obol')
            .displayName('Ancient Obol')
            .tooltip("A single coin bearing the weight of eternity. Said to be the fare for crossing into the afterlife, the Ancient Obol is a relic from the age of myth—imbued with silent whispers and the promise of passage no mortal should seek.")
            .parentModel('forge_frontier/ancient_obol')
            .texture('forge_frontier:item/ancient_obol')
            .maxStackSize(1)
            .rarity('rare');
        
        event.create('forge_frontier:cerberus_fang')
            .displayName("Cerberus's Fang")
            .tooltip("Torn from the maw of the beast that guards the gates of the underworld, Cerberus’s Fang pulses with infernal energy. It burns with more than fire—it carries the bite of eternal vigilance and the fury of a guardian that never sleeps.")
            .parentModel('forge_frontier:item/cerberus_fang')
            .texture('forge_frontier:item/cerberus_fang')
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:ra_scepter', 'hoe')
            .displayName("Ra's Scepter")
            .tooltip('A relic bathed in sunlight and divine judgment, Ra’s Scepter channels the burning gaze of the sun god himself. In battle, it gleams like dawn over desert sands—blinding, searing, and absolute.')
            .parentModel('forge_frontier:item/ra_scepter')
            .texture('forge_frontier:item/ra_scepter')
            .tier('netherite')
            .maxStackSize(1)
            .glow(true)
            .rarity('rare');

        event.create('forge_frontier:ancient_winged_sun')
            .displayName('Ancient Winged Sun')
            .tooltip('An emblem of forgotten power, the Ancient Winged Sun once adorned the crowns of sun-kissed kings. Said to harness the balance of day and night, it grants strength not through force, but through harmony and command over the heavens.')
            .parentModel('forge_frontier:item/ancient_winged_sun')
            .texture('forge_frontier:item/ancient_winged_sun')
            .glow(true)
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:golden_tusks_crown')
            .displayName("Crown of the Golden Tusks")
            .tooltip('Once worn by the Piglin King, this crown is an emblem of brutal dominion and boundless greed. The Crown of the Golden Tusks radiates pride, power, and the echoing roar of a kingdom built on conquest and fire.')
            .parentModel("forge_frontier:item/golden_tusks_crown_custom")
            .texture('forge_frontier:item/golden_tusks_crown')
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:brute_warlord_axe', 'axe')
            .displayName("Axe of the Brute Warlord")
            .tooltip("Forged in war and baptized in blood, the Axe of the Brute Warlord is not a weapon of elegance—it is a declaration of strength. Each swing is a story, each scar on its blade a reminder of battles won and mercy denied.")
            .parentModel("forge_frontier:item/brute_warlord_axe")
            .texture('forge_frontier:item/brute_warlord_axe')
            .tier('netherite')
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:crimson_pact_totem')
            .displayName("Piglin Totem")
            .tooltip(" A dark relic bound in oath and blood, the Totem of the Crimson Pact thrums with ancient Piglin magic. Said to grant strength in exchange for loyalty, it is not carried—it is borne, with a price that echoes beyond death.")
            .parentModel('forge_frontier:item/crimson_pact_totem')
            .texture('forge_frontier:item/crimson_pact_totem')
            .glow(true)
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:infernal_chisel')
            .tooltip('Once wielded by the ancient blacksmiths of Martian colonies, this infernal chisel was instrumental in crafting formidable weapons and tools.')
            .displayName("Infernal Chisel")
            .texture('forge_frontier:item/infernal_chisel');
        
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

