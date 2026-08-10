ServerEvents.recipes(event => {   

    // Certus Quartz Crystals
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                item: 'ae2:certus_quartz_dust'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water'
            }
        ],

        results: [
            {
                item: 'ae2:certus_quartz_crystal',
                count: 2
            }
        ]

    }).id('forge_frontier:mixing/certus_quartz_crystals');
   
    // Chipped Budding Quartz
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                item: 'ae2:damaged_budding_quartz'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water'
            }
        ],

        results: [
            {
                item: 'ae2:chipped_budding_quartz'
            }
        ]

    }).id('forge_frontier:mixing/chipped_budding_quartz');
    
    // Damaged Budding Quartz
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                item: 'ae2:quartz_block'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water'
            }
        ],

        results: [
            {
                item: 'ae2:damaged_budding_quartz'
            }
        ]

    }).id('forge_frontier:mixing/damaged_budding_quartz');
   
    // Flawed Budding Quartz
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                item: 'ae2:chipped_budding_quartz'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water'
            }
        ],

        results: [
            {
                item: 'ae2:flawed_budding_quartz'
            }
        ]

    }).id('forge_frontier:mixing/flawed_budding_quartz');
   
    // Fluix Crystal from Fluix Dust
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                item: 'ae2:fluix_dust'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water'
            }
        ],

        results: [
            {
                item: 'ae2:fluix_crystal'
            }
        ]

    }).id('forge_frontier:mixing/fluix_crystal');
  
    // Fluix Crystals
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                item: 'minecraft:redstone'
            },
            {
                item: 'minecraft:quartz'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water'
            }
        ],

        results: [
            {
                item: 'ae2:fluix_crystal',
                count: 2
            }
        ]

    }).id('forge_frontier:mixing/fluix_crystals');
   
    // Sky Steel Ingots
    event.custom({
        type: 'create:mixing',

        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal'
            },
            {
                tag: 'forge:ingots/iron'
            },
            {
                item: 'ae2:sky_stone_block'
            },
            {
                amount: 1000,
                fluid: 'minecraft:lava'
            }
        ],

        results: [
            {
                item: 'megacells:sky_steel_ingot',
                count: 2
            }
        ]

    }).id('forge_frontier:mixing/sky_steel_ingot');

});