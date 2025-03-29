ServerEvents.recipes(event => {
event.remove({ id: 'create_mechanical_extruder:crafting/mechanical_extruder'})

// Creates Sequenced Assembly Recipe for Mechanical Extruder
    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: {
        item: 'create_dd:stargaze_singularity_casing'
      },
      loops: 1,
      results: [
        {
          chance: 100,
          item: 'create_mechanical_extruder:mechanical_extruder'
        }
      ],
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'create_dd:stargaze_singularity_casing'
            },
            {
              item: 'create:deployer'
            }
          ],
          results: [
            {
              item: 'create_dd:stargaze_singularity_casing'
            }
          ]
        },
        {
          type: 'create:deploying',
          ingredients: [
            {
              item: 'create_dd:stargaze_singularity_casing'
            },
            {
              item: 'create_dd:bronze_drill'
            }
          ],
          results: [
            {
              item: 'create_dd:stargaze_singularity_casing'
            }
          ]
        },
        {
            type: 'create:deploying',
            ingredients: [
              {
                item: 'create_dd:stargaze_singularity_casing'
              },
              {
                item: 'minecraft:glass'
              }
            ],
            results: [
              {
                item: 'create_dd:stargaze_singularity_casing'
              }
            ]
          }
      ],
      transitionalItem: {
        item: 'create_dd:stargaze_singularity_casing'
      }
    }).id('forge_frontier:sequenced_assembly/mechanical_extruder');

    // Extruding Recipes

      // Sky Stone
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'ae2:sky_stone_block'
        },
        result: {
          item: 'ae2:sky_stone_block'
        }
      }).id('forge_frontier:extruding/sky_stone')

      // Gabbro
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/gabbro' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:strawberry',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create_dd:gabbro'
        },
        result: {
          item: 'create_dd:gabbro'
        }
      }).id('forge_frontier:extruding/gabbro')

      // Crimsite
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/crimsite_cobble' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:strawberry_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_crimsite'
        },
        result: {
          item: 'create:crimsite'
        },
        
      }).id('forge_frontier:extruding/crimsite')

      // Deepslate
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/deepslate' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:vanilla',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:deepslate'
        },
        result: {
          item: 'minecraft:deepslate'
        }
      }).id('forge_frontier:extruding/deepslate')

      // Dripstone Block
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/dripstone' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:glowberry',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:dripstone_block'
        },
        result: {
          item: 'minecraft:dripstone_block'
        }
      }).id('forge_frontier:extruding/dripstone')

      // Calcite
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/calcite' })

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:condense_milk',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:calcite'
        },
        result: {
          item: 'minecraft:calcite'
        },
        requiredBonks: 2
      }).id('forge_frontier:extruding/calcite')

      // Scoria
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scoria_milkshake' })
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scoria' })
      event.remove({ id: 'create_mechanical_extruder:extruding/scoria'})

      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:chocolate_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_scoria'
        },
        result: {
          item: 'create:scoria'
        },
        
      }).id('forge_frontier:extruding/scoria')

      // Scorchia
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scorchia' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:hot_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_scorchia'
        },
        result: {
          item: 'create:scorchia'
        },
        
      }).id('forge_frontier:extruding/scorchia')

      // Cobblestone
      event.remove({ id: 'create_mechanical_extruder:extruding/cobblestone' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:cobblestone'
        },
        result: {
          item: 'minecraft:cobblestone'
        }
      }).id('forge_frontier:extruding/cobblestone')

      // Potassic
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/potassic_cobble' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:vanilla_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_potassic'
        },
        result: {
          item: 'create_dd:potassic'
        },
        
      }).id('forge_frontier:extruding/potassic')

      // Asurine
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/asurine_cobble' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:cream',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_asurine'
        },
        result: {
          item: 'create:asurine'
        },
        
      }).id('forge_frontier:extruding/asurine')

      // Ochrum
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/ochrum_cobble' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:glowberry_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_ochrum'
        },
        result: {
          item: 'create:ochrum'
        },
        
      }).id('forge_frontier:extruding/ochrum')

      // Blackstone
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/blackstone' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:caramel',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:blackstone'
        },
        result: {
          item: 'minecraft:blackstone'
        }
      }).id('forge_frontier:extruding/blackstone')

      // Veridium
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/veridium_cobble' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:caramel_milkshake',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_veridium'
        },
        result: {
          item: 'create:veridium'
        },
        
      }).id('forge_frontier:extruding/veridium')

      // Limestone
      event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/limestone' })
      event.remove({ id: 'create_mechanical_extruder:extruding/limestone' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create:honey',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create:limestone'
        },
        result: {
          item: 'create:limestone'
        }
      }).id('forge_frontier:extruding/limestone')

      // Stone
      event.remove({ id: 'create_mechanical_extruder:extruding/stone' })
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:stone'
        },
        result: {
          item: 'minecraft:stone'
        }
      }).id('forge_frontier:extruding/stone')

      // Aethersite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:shimmer',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'create_dd:aethersite'
        },
        result: {
          item: 'create_dd:aethersite'
        }
      }).id('forge_frontier:extruding/aethersite')

      // Crying Obsidian
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:chromatic_waste',
            amount: 1000
          },
          {
            fluid: 'minecraft:lava',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:crying_obsidian'
        },
        result: {
          item: 'minecraft:crying_obsidian'
        },
        
      }).id('forge_frontier:extruding/crying_obsidian')

      // Obsidian
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_dd:chromatic_waste',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'minecraft:obsidian'
        },
        result: {
          item: 'minecraft:obsidian'
        },
        
      }).id('forge_frontier:extruding/obsidian')

      // Verdantine
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_confectionery:white_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_verdantine'
        },
        result: {
          item: 'forge_frontier:verdantine'
        },
        
      }).id('forge_frontier:extruding/verdantine')

      // Glacium
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_confectionery:black_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_glacium'
        },
        result: {
          item: 'forge_frontier:glacium'
        },
        
      }).id('forge_frontier:extruding/glacium')

      // Ancient Debris
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'createaddition:bioethanol',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_ancient_debris'
        },
        result: {
          item: 'minecraft:ancient_debris'
        },
        
      }).id('forge_frontier:extruding/ancient_debris')

      // Sculk Grime
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'ad_astra:cryo_fuel',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_resonite'
        },
        result: {
          item: 'forge_frontier:resonite'
        },
        
      }).id('forge_frontier:extruding/resonite')
      
      // Aubrum
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'createdieselgenerators:plant_oil',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_aubrum'
        },
        result: {
          item: 'forge_frontier:aubrum'
        },
        
      }).id('forge_frontier:extruding/aubrum')
      
      // Pyroclast
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'createdieselgenerators:biodiesel',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_pyroclast'
        },
        result: {
          item: 'forge_frontier:pyroclast'
        },
        
      }).id('forge_frontier:extruding/pyroclast')
      
      // Frostite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_frostite'
        },
        result: {
          item: 'forge_frontier:frostite'
        },
        
      }).id('forge_frontier:extruding/frostite')

      // Stellaris
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'createdieselgenerators:ethanol',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_stellaris'
        },
        result: {
          item: 'forge_frontier:stellaris'
        },
        
      }).id('forge_frontier:extruding/stellaris')
      
      // Radiantite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_confectionery:ruby_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_radiantite'
        },
        result: {
          item: 'forge_frontier:radiantite'
        },
        
      }).id('forge_frontier:extruding/radiantite')
      
      // Void Shale
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_confectionery:ruby_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_void_shale'
        },
        result: {
          item: 'enlightened_end:void_shale'
        },
        
      }).id('forge_frontier:extruding/void_shale')
      
      // Palerock
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create_confectionery:ruby_chocolate',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_palerock'
        },
        result: {
          item: 'enlightened_end:palerock'
        },
        
      }).id('forge_frontier:extruding/palerock')
      
      // Guanite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'sliceanddice:fertilizer',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_guanite'
        },
        result: {
          item: 'forge_frontier:guanite'
        },
        
      }).id('forge_frontier:extruding/guanite')
      
      // Pearlyte
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'minecraft:water',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_pearlyte'
        },
        result: {
          item: 'forge_frontier:pearlyte'
        },
        
      }).id('forge_frontier:extruding/pearlyte')
      
      // Amberlite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'create:honey',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_amberlite'
        },
        result: {
          item: 'forge_frontier:amberlite'
        },
        
      }).id('forge_frontier:extruding/amberlite')
      
      // Azurnium
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'forge_frontier:molten_iron',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_azurnium'
        },
        result: {
          item: 'forge_frontier:azurnium'
        },
        
      }).id('forge_frontier:extruding/azurnium')

      // Neodymrium
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'forge_frontier:molten_iron',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_neodymrium'
        },
        result: {
          item: 'forge_frontier:neodymrium'
        },
        
      }).id('forge_frontier:extruding/neodymrium')      

      // Uraniumnite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'alexscaves:acid',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_uraniumnite'
        },
        result: {
          item: 'forge_frontier:uraniumnite'
        },
        
      }).id('forge_frontier:extruding/uraniumnite')  

      // Sulphite
      event.custom({
        type: 'create_mechanical_extruder:extruding',
        ingredients: [
          {
            fluid: 'alexscaves:acid',
            amount: 1000
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        catalyst: {
          item: 'molten_vents:active_molten_sulphite'
        },
        result: {
          item: 'forge_frontier:sulphite'
        },
        
      }).id('forge_frontier:extruding/sulphite')  

  })