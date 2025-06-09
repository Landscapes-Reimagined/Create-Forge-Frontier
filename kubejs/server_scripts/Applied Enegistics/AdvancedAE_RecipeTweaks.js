ServerEvents.recipes(event => {

    // Removes Reaction Chamber Recipes
    event.remove({ id: 'advanced_ae:logic_processor_chamber'})
    event.remove({ id: 'advanced_ae:quantum_infusion'})
    event.remove({ id: 'advanced_ae:certuscharger'})
    event.remove({ id: 'advanced_ae:shatteredsingularity'})
    event.remove({ id: 'advanced_ae:fluixcrystals'})
    event.remove({ id: 'advanced_ae:fluixcrystalfromdust'})
    event.remove({ id: 'advanced_ae:quantum_alloy_plate'})
    event.remove({ id: 'advanced_ae:energy_processor_chamber'})
    event.remove({ id: 'advanced_ae:chippedbudding'})
    event.remove({ id: 'advanced_ae:quantum_alloy'})
    event.remove({ id: 'advanced_ae:flawedbudding'})
    event.remove({ id: 'advanced_ae:calculation_processor_chamber'})
    event.remove({ id: 'advanced_ae:damagedbudding'})
    event.remove({ id: 'advanced_ae:quartzcrystal'})
    event.remove({ id: 'advanced_ae:redstonecrystal'})
    event.remove({ id: 'advanced_ae:singularity'})
    event.remove({ id: 'advanced_ae:chargedredstone'})
    event.remove({ id: 'advanced_ae:engineering_processor_chamber'})
    event.remove({ id: 'advanced_ae:quantum_processor_chamber'})

    // Removes Circut Slicer Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_print_eae'})

    // Quantum Armor Recipe Adjustments
        // Quantum Helmet
        event.remove({ id: 'advanced_ae:quantum_helmet' })
    	event.shaped(
		Item.of('advanced_ae:quantum_helmet'),
		[
			'QAQ',
			'QNQ',
			'PCP'
		],
		{
			Q: 'advanced_ae:quantum_processor',
            A: 'ae2:wireless_access_point',
            N: 'advancednetherite:netherite_diamond_helmet',
            P: 'advanced_ae:quantum_alloy_plate',
            C: 'advanced_ae:quantum_storage_component'
		}
	    ).id( 'forge_frontier:shaped/quantum_helmet' )

        // Quantum Chestplate
        event.remove({ id: 'advanced_ae:quantum_chest' })
    	event.shaped(
		Item.of('advanced_ae:quantum_chestplate'),
		[
			'QAQ',
			'QNQ',
			'PCP'
		],
		{
			Q: 'advanced_ae:quantum_processor',
            A: 'ae2:wireless_access_point',
            N: 'advancednetherite:netherite_diamond_chestplate',
            P: 'advanced_ae:quantum_alloy_plate',
            C: 'advanced_ae:quantum_storage_component'
		}
	    ).id( 'forge_frontier:shaped/quantum_chestplate' )

        // Quantum Leggings
        event.remove({ id: 'advanced_ae:quantum_leggings' })
    	event.shaped(
		Item.of('advanced_ae:quantum_leggings'),
		[
			'QAQ',
			'QNQ',
			'PCP'
		],
		{
			Q: 'advanced_ae:quantum_processor',
            A: 'ae2:wireless_access_point',
            N: 'advancednetherite:netherite_diamond_leggings',
            P: 'advanced_ae:quantum_alloy_plate',
            C: 'advanced_ae:quantum_storage_component'
		}
	    ).id( 'forge_frontier:shaped/quantum_leggings' )
    
        // Quantum Boots
        event.remove({ id: 'advanced_ae:quantum_boots' })
    	event.shaped(
		Item.of('advanced_ae:quantum_boots'),
		[
			'QAQ',
			'QNQ',
			'PCP'
		],
		{
			Q: 'advanced_ae:quantum_processor',
            A: 'ae2:wireless_access_point',
            N: 'advancednetherite:netherite_diamond_boots',
            P: 'advanced_ae:quantum_alloy_plate',
            C: 'advanced_ae:quantum_storage_component'
		}
	    ).id( 'forge_frontier:shaped/quantum_boots' )  

    // Quantum Dust Recipe
    event.remove({ id: 'advanced_ae:quantum_infused_dust'})
    event.custom({
		type: "create:crushing",
		ingredients: [
			{ item: 'advanced_ae:shattered_singularity' }
		],
		processingTime: 200,
		results: [
			{ item: 'advanced_ae:quantum_infused_dust', count: 1 }
		]
	}).id('forge_frontier:crushing/quantum_infused_dust');

    // New Quantum Processor Recipe
    event.remove({ id: 'advanced_ae:quantum_processor' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'ae2:printed_silicon'
        },
        transitionalItem: {
            item: 'forge_frontier:incomplete_quantum_processor'
        },
        sequence: [
            {
            type: 'create:deploying',
            ingredients: [
                {
                item: 'forge_frontier:incomplete_quantum_processor'
                },
                {
                item: 'advanced_ae:printed_quantum_processor'
                }
            ],
            results: [
                {
                item: 'forge_frontier:incomplete_quantum_processor'
                }
            ]
            },
            {
            type: 'create:deploying',
            ingredients: [
                {
                item: 'forge_frontier:incomplete_quantum_processor'
                },
                {
                item: 'minecraft:redstone'
                }
            ],
            results: [
                {
                item: 'forge_frontier:incomplete_quantum_processor'
                }
            ]
            },
            {
            type: 'create:pressing',
            ingredients: [
                {
                item: 'forge_frontier:incomplete_quantum_processor'
                }
            ],
            results: [
                {
                item: 'forge_frontier:incomplete_quantum_processor'
                }
            ]
            }
        ],
        results: [
            {
            item: 'advanced_ae:quantum_processor'
            }
        ],
        loops: 1        

    }).id('forge_frontier:sequenced_assembly/quantum_processor')

    // New Printed Quantum Circuit Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_print' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'advanced_ae:quantum_alloy'
        },
        transitionalItem: {
            item: 'forge_frontier:incomplete_printed_quantum_processor'
        },
        sequence: [
            {
                keepHeldItem: true,
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_printed_quantum_processor' },
                    { item: 'advanced_ae:quantum_processor_press'}
                ],
                results: [
                    { item: 'forge_frontier:incomplete_printed_quantum_processor' }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    { item: 'forge_frontier:incomplete_printed_quantum_processor' }
                ],
                results: [
                    { item: 'forge_frontier:incomplete_printed_quantum_processor' }
                ]
            }
        ],
        results: [
            { item: 'advanced_ae:printed_quantum_processor' }
        ],
        loops: 1
    }).id('forge_frontier:sequenced_assembly/printed_quantum_processor');

    // New Inscriber Quantum Press Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_press' })
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'advanced_ae:quantum_infused_dust'
        },
        transitionalItem: {
            item: 'forge_frontier:incomplete_quantum_processor_press'
        },
        sequence: [
            {
                "keepHeldItem": true,
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_quantum_processor_press' },
                    { item: 'ae2:engineering_processor_press' }
                ],
                results: [
                    { item: 'forge_frontier:incomplete_quantum_processor_press' }
                ]
            },
            {
                type: 'create:deploying',
                "keepHeldItem": true,
                ingredients: [
                    { item: 'forge_frontier:incomplete_quantum_processor_press' },
                    { item: 'ae2:logic_processor_press' }
                ],
                results: [
                    { item: 'forge_frontier:incomplete_quantum_processor_press' }
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    { item: 'forge_frontier:incomplete_quantum_processor_press' }
                ],
                results: [
                    { item: 'forge_frontier:incomplete_quantum_processor_press' }
                ]
            }
        ],
        results: [
            { item: 'advanced_ae:quantum_processor_press' }
        ],
        loops: 1
    }).id('forge_frontier:sequenced_assembly/quantum_processor_press');

    // New Inscriber Quantum Press Dupe Recipe
    event.remove({ id: 'advanced_ae:quantum_processor_press_from_iron' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
          item: "minecraft:iron_block"
        },
        transitionalItem: {
          item: "forge_frontier:incomplete_quantum_processor_press"
        },
        sequence: [
          {
            keepHeldItem: true,
            type: "create:deploying",
            ingredients: [
              {
                item: "forge_frontier:incomplete_quantum_processor_press"
              },
              {
                item: 'advanced_ae:quantum_processor_press'
              }
            ],
            results: [
              {
                item: "forge_frontier:incomplete_quantum_processor_press"
              }
            ]
          },
          {
            type: "create:pressing",
            ingredients: [
              {
                item: "forge_frontier:incomplete_quantum_processor_press"
              }
            ],
            results: [
              {
                item: "forge_frontier:incomplete_quantum_processor_press"
              }
            ]
          }
        ],
        results: [
          {
            item: 'advanced_ae:quantum_processor_press'
          }
        ],
        loops: 1
      }).id('forge_frontier:sequenced_assembly/quantum_processor_press_dupe')

})