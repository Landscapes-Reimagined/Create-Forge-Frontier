ServerEvents.recipes(event => {

    // Dirt Washing Recipe
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'minecraft:dirt'
          }
        ],
        results: [
          {
            chance: 0.10,
            count: 3,
            item: 'minecraft:kelp'
          },
          {
            chance: 0.08,
            count: 2,
            item: 'minecraft:seagrass'
          },
          {
            chance: 0.02,
            count: 1,
            item: 'minecraft:tube_coral'
          },
          {
            chance: 0.02,
            count: 1,
            item: 'minecraft:brain_coral'
          },
          {
            chance: 0.02,
            count: 1,
            item: 'minecraft:bubble_coral'
          },
          {
            chance: 0.02,
            count: 1,
            item: 'minecraft:fire_coral'
          },
          {
            chance: 0.02,
            count: 1,
            item: 'minecraft:horn_coral'
          },
          {
            chance: 0.02,
            count: 2,
            item: 'minecraft:sea_pickle'
          }
        ]
      }).id('forge_frontier:washing/dirt')

    // Crushed Bismuth Pile
      event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_bismuth_pile'
          }
        ],
        results: [
          {
            count: 81,
            item: 'enlightened_end:bismuth_nugget'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'minecraft:prismarine_crystals'
          }
        ]
        }).id('forge_frontier:washing/bismuth_pile')

    // Crushed Bismuth
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'forge_frontier:crushed_bismuth'
              }
            ],
            results: [
              {
                count: 9,
                item: 'enlightened_end:bismuth_nugget'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'minecraft:prismarine_crystals'
              }
            ]
            }).id('forge_frontier:washing/bismuth')

    // Crushed Calorite Pile
      event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_calorite_pile'
          }
        ],
        results: [
          {
            count: 81,
            item: 'ad_astra:calorite_nugget'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'create:brass_nugget'
          }
        ]
        }).id('forge_frontier:washing/calorite_pile')

    // Crushed Calorite
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'forge_frontier:crushed_calorite'
              }
            ],
            results: [
              {
                count: 9,
                item: 'ad_astra:calorite_nugget'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'create:brass_nugget'
              }
            ]
            }).id('forge_frontier:washing/calorite')

    // Crushed Ostrum Pile
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_ostrum_pile'
          }
        ],
        results: [
          {
            count: 81,
            item: 'ad_astra:ostrum_nugget'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'create_dd:bronze_nugget'
          }
        ]
        }).id('forge_frontier:washing/ostrum_pile')

    // Crushed Ostrum
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'forge_frontier:crushed_ostrum'
              }
            ],
            results: [
              {
                count: 9,
                item: 'ad_astra:ostrum_nugget'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'create_dd:bronze_nugget'
              }
            ]
            }).id('forge_frontier:washing/ostrum')
            
    // Crushed Desh Pile
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_desh_pile'
          }
        ],
        results: [
          {
            count: 81,
            item: 'ad_astra:desh_nugget'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'create_dd:steel_nugget'
          }
        ]
        }).id('forge_frontier:washing/desh_pile')

    // Crushed Desh
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'forge_frontier:crushed_desh'
              }
            ],
            results: [
              {
                count: 9,
                item: 'ad_astra:desh_nugget'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'create_dd:steel_nugget'
              }
            ]
            }).id('forge_frontier:washing/desh')

    // Crushed Irradium Pile
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_irradium_pile'
          }
        ],
        results: [
          {
            count: 9,
            item: 'enlightened_end:depleted_irradium_bar'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'minecraft:gunpowder'
          }
        ]
        }).id('forge_frontier:washing/irradium_pile')

    // Crushed Irradium
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'forge_frontier:crushed_irradium'
              }
            ],
            results: [
              {
                count: 1,
                item: 'enlightened_end:depleted_irradium_bar'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'minecraft:gunpowder'
              }
            ]
            }).id('forge_frontier:washing/irradium')

    // Crushed Malachite Pile
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_malachite_pile'
          }
        ],
        results: [
          {
            count: 9,
            item: 'enlightened_end:malachite'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'minecraft:chorus_fruit'
          }
        ]
        }).id('forge_frontier:washing/malachite_pile')

    // Crushed Malachite
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'forge_frontier:crushed_malachite'
              }
            ],
            results: [
              {
                count: 1,
                item: 'enlightened_end:malachite'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'minecraft:chorus_fruit'
              }
            ]
            }).id('forge_frontier:washing/malachite')

    // Crushed Uranium Pile
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_uranium_pile'
          }
        ],
        results: [
          {
            count: 81,
            item: 'alexscaves:uranium_shard'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'minecraft:gunpowder'
          }
        ]
        }).id('forge_frontier:washing/uranium_pile')

    // Crushed Uranium
        event.custom({
            type: 'create:splashing',
            ingredients: [
              {
                item: 'create:crushed_raw_uranium'
              }
            ],
            results: [
              {
                count: 9,
                item: 'alexscaves:uranium_shard'
              },
              {
                chance: 0.50,
                count: 1,
                item: 'minecraft:gunpowder'
              }
            ]
            }).id('forge_frontier:washing/uranium')

    // Crushed Tin Pile
    event.custom({
        type: 'create:splashing',
        ingredients: [
          {
            item: 'forge_frontier:crushed_tin_pile'
          }
        ],
        results: [
          {
            count: 81,
            item: 'create_dd:tin_nugget'
          },
          {
            chance: 0.50,
            count: 9,
            item: 'minecraft:glowstone_dust'
          }
        ]
        }).id('forge_frontier:washing/tin_pile')

            
})