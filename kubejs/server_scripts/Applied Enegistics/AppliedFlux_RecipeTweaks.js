ServerEvents.recipes(event => {

    // Removes Not Needed Recipes
    event.remove({ id: 'ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust' })
    event.remove({ id: 'appflux:transform/redstone_crystal'})

    // Inscriber Energy Press Duplication Create Energistics Compat Recipe
    event.remove({ id: 'appflux:inscriber/energy_press' })
    event.remove({ id: 'appflux:charger/energy_press'})
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
          item: "minecraft:iron_block"
        },
        transitionalItem: {
          item: "forge_frontier:incomplete_energy_processor_press"
        },
        sequence: [
          {
            keepHeldItem: true,
            type: "create:deploying",
            ingredients: [
              {
                item: "forge_frontier:incomplete_energy_processor_press"
              },
              {
                item: "appflux:energy_processor_press"
              }
            ],
            results: [
              {
                item: "forge_frontier:incomplete_energy_processor_press"
              }
            ]
          },
          {
            type: "create:pressing",
            ingredients: [
              {
                item: "forge_frontier:incomplete_energy_processor_press"
              }
            ],
            results: [
              {
                item: "forge_frontier:incomplete_energy_processor_press"
              }
            ]
          }
        ],
        results: [
          {
            item: "appflux:energy_processor_press"
          }
        ],
        loops: 1
      }).id('forge_frontier:sequenced_assembly/energy_processor_press')

    // Energy Processor Create Energistics Compat Recipe
    event.remove({ id:'appflux:inscriber/energy' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'ae2:printed_silicon'
        },
        transitionalItem: {
            item: 'forge_frontier:incomplete_energy_processor'
        },
        sequence: [
            {
            type: 'create:deploying',
            ingredients: [
                {
                item: 'forge_frontier:incomplete_energy_processor'
                },
                {
                item: 'appflux:printed_energy_processor'
                }
            ],
            results: [
                {
                item: 'forge_frontier:incomplete_energy_processor'
                }
            ]
            },
            {
            type: 'create:deploying',
            ingredients: [
                {
                item: 'forge_frontier:incomplete_energy_processor'
                },
                {
                item: 'minecraft:redstone'
                }
            ],
            results: [
                {
                item: 'forge_frontier:incomplete_energy_processor'
                }
            ]
            },
            {
            type: 'create:pressing',
            ingredients: [
                {
                item: 'forge_frontier:incomplete_energy_processor'
                }
            ],
            results: [
                {
                item: 'forge_frontier:incomplete_energy_processor'
                }
            ]
            }
        ],
        results: [
            {
            item: 'appflux:energy_processor'
            }
        ],
        loops: 1        

    }).id('forge_frontier:sequenced_assembly/energy_processor')

    // Printed Energy Circuit Create Energistics Compat Recipe
    event.remove({ id:'appflux:inscriber/energy_print' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'appflux:charged_redstone'
        },
        transitionalItem: {
            item: 'forge_frontier:incomplete_printed_energy_processor'
        },
        sequence: [
            {
                "keepHeldItem": true,
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_printed_energy_processor' },
                    { item: 'appflux:energy_processor_press'}
                ],
                results: [
                    { item: 'forge_frontier:incomplete_printed_energy_processor' }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    { item: 'forge_frontier:incomplete_printed_energy_processor' }
                ],
                results: [
                    { item: 'forge_frontier:incomplete_printed_energy_processor' }
                ]
            }
        ],
        results: [
            { item: 'appflux:printed_energy_processor' }
        ],
        loops: 1
    }).id('forge_frontier:sequenced_assembly/printed_energy_processor');

    // Redstone Crystal Recipe
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'minecraft:redstone_block',
          },
          {
            item: 'ae2:fluix_dust'
          },
          {
            item: 'ae2:sky_dust'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'appflux:redstone_crystal',
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/redstone_crystal')      
    
    
})