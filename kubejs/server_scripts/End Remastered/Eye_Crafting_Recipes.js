ServerEvents.recipes(event => {

  // Undead Soul, which is the Centerpiece of all recipes below
      // Creates Undead Soul Recipe
      event.remove({ id: 'endrem:undead_eye'})
      event.custom({
          type: "create:mixing",
          ingredients: [
            {
              fluid: "create_enchantment_industry:hyper_experience",
              amount: 50
            },
            {
              item: "minecraft:phantom_membrane"
            },
            {
              item: "minecraft:bone"
            },
            {
              item: "minecraft:rotten_flesh"
            },
            {
              item: "minecraft:ghast_tear"
            },
            {
              item: "wstweaks:fragment"
            },
            {
              item: "minecraft:cobweb"
            },
            {
              item: "quark:soul_bead"
            }
          ],
          results: [
            {
              item: "endrem:undead_soul",
              count: 1
            }
          ],  
          heatRequirement: "superheated"
        }).id('forge_frontier:mixing/undead_soul')
   
  // New End Remastered Eye Crafting Recipes
  
      // Black Eye: Seven Seas Loot Combination
      event.custom({
          type: 'create:mechanical_crafting',
          pattern: [
            'DAD',
            'BUB',
            'GCG'
          ],
          key: {
            D: Ingredient.of('minecraft:diamond'),
            A: Ingredient.of('forge_frontier:blackbeards_musket'),
            B: Ingredient.of('forge_frontier:cursed_cannon_ball'),
            U: Ingredient.of('endrem:undead_soul'),
            G: Ingredient.of('minecraft:gunpowder'),
            C: Ingredient.of('forge_frontier:blackbeards_cutlass')
          },
          result: Ingredient.of('endrem:black_eye'),
          acceptMirrored: false
        }).id('forge_frontier:mechancial_crafting/black_eye');
  
      // Cold Eye: Glacio Loot Combination
      event.custom({
          type: 'create:mechanical_crafting',
          pattern: [
            'PCP',
            'WUW',
            'PEP'
          ],
          key: {
            P: Ingredient.of('ad_astra:permafrost'),
            C: Ingredient.of('ae2:quartz_cluster'),
            W: Ingredient.of('cataclysm:cursium_ingot'),
            U: Ingredient.of('endrem:undead_soul'),
            E: Ingredient.of('cataclysm:cursed_eye')
          },
          result: Ingredient.of('endrem:cold_eye'),
          acceptMirrored: false
        }).id('forge_frontier:mechancial_crafting/cold_eye');
  
      // Corrupted Eye: Diamond, Emerald, and Gold Automation Craft
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'GDG',
          'EUE',
          'GDG'
        ],
        key: {
          G: Ingredient.of('createcompression:compressed_gold_2x'),
          D: Ingredient.of('createcompression:compressed_diamond_2x'),
          E: Ingredient.of('createcompression:compressed_emerald_2x'),
          U: Ingredient.of('endrem:undead_soul')
        },
        result: Ingredient.of('endrem:corrupted_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/corrupted_eye');
  
      // Lost Eye: Cataclysm Soul Blacksmith Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'ACA',
          'FUH',
          'AEA'
        ],
        key: {
          A: Ingredient.of('minecraft:ancient_debris'),
          C: Ingredient.of('forge_frontier:deep_forge_chisel'),
          F: Ingredient.of('cataclysm:infernal_forge'),
          U: Ingredient.of('endrem:undead_soul'),
          H: Ingredient.of('cataclysm:monstrous_horn'),
          E: Ingredient.of('cataclysm:monstrous_eye')
        },
        result: Ingredient.of('endrem:lost_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/lost_eye');
  
      // Nether Eye: Nether Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'BSB',
          'IUI',
          'BFB'
        ],
        key: {
          B: Ingredient.of('minecraft:red_nether_bricks'),
          S: Ingredient.of('forge_frontier:hades_bident'),
          I: Ingredient.of('forge_frontier:ancient_obol'),
          F: Ingredient.of('forge_frontier:cerberus_fang'),
          U: Ingredient.of('endrem:undead_soul'),
        },
        result: Ingredient.of('endrem:nether_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/nether_eye');
  
      // Old Eye: Desert Pyramid/ Cataclysm Pyramid Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'SsS',
          'DUR',
          'SES'
        ],
        key: {
          S: Ingredient.of('minecraft:sandstone'),
          s: Ingredient.of('cataclysm:remnant_skull'),
          D: Ingredient.of('forge_frontier:ancient_winged_sun'),
          R: Ingredient.of('forge_frontier:ra_scepter'),    
          E: Ingredient.of('cataclysm:desert_eye'),
          U: Ingredient.of('endrem:undead_soul')
        },
        result: Ingredient.of('endrem:old_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/old_eye');
  
      // Rogue Eye: Create Progression Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'MBM',
          'mUm',
          'MBM'
        ],
        key: {
          M: Ingredient.of('create_compressed:mechanism_block'),
          B: Ingredient.of('createcompression:compressed_brass_2x'),
          m: Ingredient.of('create_dd:mithril_block'),
          U: Ingredient.of('endrem:undead_soul'),
        },
        result: Ingredient.of('endrem:rogue_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/rogue_eye');    
  
      // Cursed Eye: Bastion Loot/ Nether Castle Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'BCB',
          'AUT',
          'BNB'
        ],
        key: {
          B: Ingredient.of('minecraft:gilded_blackstone'),
          C: Ingredient.of('forge_frontier:golden_tusks_crown'),
          A: Ingredient.of('forge_frontier:brute_warlord_axe'),
          U: Ingredient.of('endrem:undead_soul'),
          T: Ingredient.of('forge_frontier:crimson_pact_totem'),
          N: Ingredient.of('minecraft:netherite_ingot'),
        },
        result: Ingredient.of('endrem:cursed_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/cursed_eye');       
  
      // Evil Eye: Villager Trade Related Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'EHE',
          'VFv',
          'EUE'
        ],
        key: {
          E: Ingredient.of('createcompression:compressed_emerald_2x'),
          H: Ingredient.of('artifacts:villager_hat'),
          V: Ingredient.of('betterarcheology:vase_green'),
          F: Ingredient.of('betterarcheology:villager_fossil_head'),
          v: Ingredient.of('betterarcheology:vase'),
          U: Ingredient.of('endrem:undead_soul'),
        },
        result: Ingredient.of('endrem:evil_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/evil_eye');      
  
      // Guardian Eye: Elder and Guardian Mob Drop Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'SES',
          'GUG',
          'SES'
        ],
        key: {
          S: Ingredient.of('minecraft:sponge'),
          E: Ingredient.of('oceansdelight:cabbage_wrapped_elder_guardian'),
          G: Ingredient.of('oceansdelight:guardian_soup'),
          U: Ingredient.of('endrem:undead_soul'),
        },
        result: Ingredient.of('endrem:guardian_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/guardian_eye');     
  
      // Magical Eye: Nether and Soul Infused Totem Craft Related, via Apotheosis
      event.custom({
        type: "apotheosis:enchanting",
        input: {
          item: "minecraft:totem_of_undying"
        },
        requirements: {
          eterna: 40,
          quanta: 80,
          arcana: 80,
          rectifaction: 40
        },
        "max_requirements": {
          eterna: -1,
          quanta: 100,
          arcana: 85,
          rectifaction: 60
        },
        result: {
          item: "endrem:magical_eye",
          count: 1
        }
      }).id('forge_frontier:enchanting/magical_eye')    
  
      // Wither Eye: Nether Star Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'NUN',
          'WWW',
          'SSS',
          ' S '
        ],
        key: {
          N: Ingredient.of('cagedmobs:star_infused_netherite_nugget'),
          U: Ingredient.of('endrem:undead_soul'),
          W: Ingredient.of('minecraft:wither_skeleton_skull'),
          S: Ingredient.of('createcompression:compressed_soul_sand_3x'),
        },
        result: Ingredient.of('endrem:wither_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/wither_eye');  
  
      // Witch Eye: Potion Related Craft
      event.remove({ id: 'endrem:witch_eye'})
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            fluid: "create:potion",
            nbt: {
              Potion: "alexsmobs:long_lava_vision"
            },
            amount: 1000
          },
          {
            item: "create_dd:blaze_gold_block"
          },
          {
            fluid: "create:potion",
            nbt: {
              Potion: "alexsmobs:strong_soulsteal"
            },
            amount: 1000
          },
          {
            item: "endrem:undead_soul"
          }
        ],
        results: [
          {
            item: "endrem:witch_eye",
            count: 1
          }
        ],  
        heatRequirement: "superheated"
      }).id('forge_frontier:mixing/witch_eye')
  
      // Warden Eye: Warden/Deeper Darker Loot Combination
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'CHE',
          'SUS',
          'hTc'
        ],
        key: {
          C: Ingredient.of('deeperdarker:warden_carapace'),
          H: Ingredient.of('deeperdarker:heart_of_the_deep'),
          E: Ingredient.of('silentsdelight:warden_ear'),
          S: Ingredient.of('minecraft:echo_shard'),
          h: Ingredient.of('silentsdelight:warden_heart'),
          T: Ingredient.of('apotheosis:warden_tendril'),
          c: Ingredient.of('minecraft:sculk_catalyst'),
          U: Ingredient.of('endrem:undead_soul'),
        },
        result: Ingredient.of('endrem:undead_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/undead_eye'); 
  
      // Aetheric Eye: Ocean Boss Structure Loot Combination
      event.remove({ id: 'endrem:exotic_eye'})
      event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
          'AEA',
          'SUS',
          'AeA'
        ],
        key: {
          A: Ingredient.of('cataclysm:abyssal_sacrifice'),
          E: Ingredient.of('cataclysm:abyss_eye'),
          S: Ingredient.of('minecraft:sea_lantern'),
          U: Ingredient.of('endrem:undead_soul'),
          e: Ingredient.of('cataclysm:abyssal_egg'),
        },
        result: Ingredient.of('endrem:exotic_eye'),
        acceptMirrored: false
      }).id('forge_frontier:mechancial_crafting/exotic_eye');     
  
      // Cryptic Eye: Mix of Nether and Soul Infused Items, via Apotheosis
      event.custom({
        type: "apotheosis:enchanting",
        input: {
          item: "minecraft:ender_eye"
        },
        requirements: {
          eterna: 40,
          quanta: 90,
          arcana: 75,
          rectifaction: 30
        },
        "max_requirements": {
          eterna: -1,
          quanta: 100,
          arcana: 80,
          rectifaction: 50
        },
        result: {
          item: "endrem:cryptic_eye",
          count: 1
        }
      }).id('forge_frontier:enchanting/cryptic_eye')
  
  })