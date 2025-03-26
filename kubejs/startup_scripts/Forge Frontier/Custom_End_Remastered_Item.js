StartupEvents.registry('item', event => 
    {    
        event.create('forge_frontier:blackbeards_musket')
            .displayName("Blackbeard's Musket")
            .tooltip("A legendary firearm once wielded by Blackbeard himself, this musket echoes with the roar of the high seas. Forged for fear, not finesse, it was less a tool of war and more a symbol of terror—its presence alone worth a king's ransom.")
            .parentModel('forge_frontier:item/end_remastered_items/blackbeards_musket')
            .texture('forge_frontier:item/end_remastered_items/blackbeards_musket')
            .maxStackSize(1)
            .rarity('rare'); 

        event.create('forge_frontier:blackbeards_cutlass', 'sword')
            .displayName("Blackbeard's Cutlass")
            .tooltip("A fearsome blade said to have sailed with Blackbeard across countless raids, Blackbeard's Cutlass is as much legend as steel. Its edge has tasted gold and blood alike, a weapon forged not just for battle—but for command. Those who face it rarely live to tell the tale.")
            .parentModel('forge_frontier:item/end_remastered_items/blackbeards_cutlass')
            .texture('forge_frontier:item/end_remastered_items/blackbeards_cutlass')
            .attackDamageBonus(2)
            .speed(2)
            .tier('netherite')
            .maxStackSize(1)
            .rarity('rare'); 

        event.create('forge_frontier:cursed_cannon_ball')
            .displayName('Cursed Cannonball')
            .tooltip("A heavy iron sphere once fired from the cannons of Blackbeard’s flagship, this Cursed Cannonball carries more than brute force—it bears the weight of dread. Said to leave behind echoes of thunder and ghostly flames, it's a relic of naval devastation and pirate-inflicted fear.")
            .parentModel('forge_frontier:item/end_remastered_items/cursed_cannon_ball')
            .texture('forge_frontier:item/end_remastered_items/cursed_cannon_ball')
            .maxStackSize(2)
            .rarity('rare');

        event.create('forge_frontier:hades_bident', 'sword')
            .displayName("Hade's Bident")
            .tooltip("A weapon of judgment forged in the deepest fires of the underworld. Hades' Bident strikes not with flame, but with dominion—piercing both flesh and soul. Legends claim the ground splits beneath its blow, as if the dead reach up to drag the living below.")
            .parentModel('forge_frontier:item/end_remastered_items/hades_bident')
            .texture('forge_frontier:item/end_remastered_items/hades_bident')
            .tier('netherite')
            .maxStackSize(1)
            .speed(3)
            .rarity('rare');

        event.create('forge_frontier:ancient_obol')
            .displayName('Ancient Obol')
            .tooltip("A single coin bearing the weight of eternity. Said to be the fare for crossing into the afterlife, the Ancient Obol is a relic from the age of myth—imbued with silent whispers and the promise of passage no mortal should seek.")
            .parentModel('forge_frontier:item/end_remastered_items/ancient_obol')
            .texture('forge_frontier:item/end_remastered_items/ancient_obol')
            .maxStackSize(1)
            .rarity('rare');
        
        event.create('forge_frontier:cerberus_fang')
            .displayName("Cerberus's Fang")
            .tooltip("Torn from the maw of the beast that guards the gates of the underworld, Cerberus’s Fang pulses with infernal energy. It burns with more than fire—it carries the bite of eternal vigilance and the fury of a guardian that never sleeps.")
            .parentModel('forge_frontier:item/end_remastered_items/cerberus_fang')
            .texture('forge_frontier:item/end_remastered_items/cerberus_fang')
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:ra_scepter', 'hoe')
            .displayName("Ra's Scepter")
            .tooltip('A relic bathed in sunlight and divine judgment, Ra’s Scepter channels the burning gaze of the sun god himself. In battle, it gleams like dawn over desert sands—blinding, searing, and absolute.')
            .parentModel('forge_frontier:item/end_remastered_items/ra_scepter')
            .texture('forge_frontier:item/end_remastered_items/ra_scepter')
            .tier('netherite')
            .maxStackSize(1)
            .glow(true)
            .rarity('rare');

        event.create('forge_frontier:ancient_winged_sun')
            .displayName('Ancient Winged Sun')
            .tooltip('An emblem of forgotten power, the Ancient Winged Sun once adorned the crowns of sun-kissed kings. Said to harness the balance of day and night, it grants strength not through force, but through harmony and command over the heavens.')
            .parentModel('forge_frontier:item/end_remastered_items/ancient_winged_sun')
            .texture('forge_frontier:item/end_remastered_items/ancient_winged_sun')
            .glow(true)
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:golden_tusks_crown')
            .displayName("Crown of the Golden Tusks")
            .tooltip('Once worn by the Piglin King, this crown is an emblem of brutal dominion and boundless greed. The Crown of the Golden Tusks radiates pride, power, and the echoing roar of a kingdom built on conquest and fire.')
            .parentModel("forge_frontier:item/end_remastered_items/golden_tusks_crown")
            .texture('forge_frontier:item/end_remastered_items/golden_tusks_crown')
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:brute_warlord_axe', 'axe')
            .displayName("Axe of the Brute Warlord")
            .tooltip("Forged in war and baptized in blood, the Axe of the Brute Warlord is not a weapon of elegance—it is a declaration of strength. Each swing is a story, each scar on its blade a reminder of battles won and mercy denied.")
            .parentModel("forge_frontier:item/end_remastered_items/brute_warlord_axe")
            .texture('forge_frontier:item/end_remastered_items/brute_warlord_axe')
            .tier('netherite')
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:crimson_pact_totem')
            .displayName("Totem of the Crimson Pact")
            .tooltip(" A dark relic bound in oath and blood, the Totem of the Crimson Pact thrums with ancient Piglin magic. Said to grant strength in exchange for loyalty, it is not carried—it is borne, with a price that echoes beyond death.")
            .parentModel('forge_frontier:item/end_remastered_items/crimson_pact_totem')
            .texture('forge_frontier:item/end_remastered_items/crimson_pact_totem')
            .glow(true)
            .maxStackSize(1)
            .rarity('rare');

        event.create('forge_frontier:deep_forge_chisel')
            .displayName("Chisel of the Deep Forge")
            .tooltip("Crafted in silence beneath the world’s crust, the Chisel of the Deep Forge shapes not just stone—but the fate of those who wield it. Every strike hums with molten purpose, as if the earth itself lends its will to the artisan's hand.")
            .parentModel('forge_frontier:item/end_remastered_items/deep_forge_chisel')
            .texture('forge_frontier:item/end_remastered_items/deep_forge_chisel')
            .maxStackSize(1)
            .rarity('rare');
    }
)