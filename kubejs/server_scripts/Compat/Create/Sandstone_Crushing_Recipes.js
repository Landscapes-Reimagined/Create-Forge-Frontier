ServerEvents.recipes(event => 
    {
        // Chisled Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                { item: 'minecraft:chiseled_sandstone' }
            ],
            processingTime: 9,
            results: [
                {
                    item: 'minecraft:sand',
                    count: 3
                },
                {
                    item: 'minecraft:sand',
                    chance: 0.80
                },
            ]
            }).id('forge_frontier:crushing/chisled_sandstone');

        // Smooth Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                { item: 'minecraft:smooth_sandstone' }
                ],
            processingTime: 9,
            results: [
                {
                    item: 'minecraft:sand',
                    count: 3
                },
                {
                    item: 'minecraft:sand',
                    chance: 0.80
                },
            ] 
            }).id('forge_frontier:crushing/smooth_sandstone');   

        // Cut Sandstone
            event.custom({
                type: "create:crushing",
                ingredients: [
                { item: 'minecraft:cut_sandstone' }
                ],
            processingTime: 9,
            results: [
                {
                    item: 'minecraft:sand',
                    count: 3
                },
                {
                    item: 'minecraft:sand',
                    chance: 0.80
                },
            ]
            }).id('forge_frontier:crushing/cut_sandstone');
        
        // Sandstone Bricks
            event.custom({
                type: "create:crushing",
                ingredients: [
                { item: 'quark:sandstone_bricks' }
                ],
            processingTime: 9,
            results: [
                {
                    item: 'minecraft:sand',
                    count: 3
                },
                {
                    item: 'minecraft:sand',
                    chance: 0.70
                },
            ]
            }).id('forge_frontier:crushing/sandstone_bricks');

        // Chipped Sandstone Crushing
            event.custom({
                type: "create:crushing",
                ingredients: [
                { tag: 'chipped:sandstone' }
                ],
            processingTime: 9,
            results: [
                {
                    item: 'minecraft:sand',
                    count: 3
                },
                {
                    item: 'minecraft:sand',
                    chance: 0.80
                },
            ]
            }).id('forge_frontier:crushing/chipped_sandstone');

        // Red Sandstone
            // Red Chisled Sandstone
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                    { item: 'minecraft:chiseled_red_sandstone' }
                ],
                processingTime: 9, 
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80
                    },
                ]
                }).id('forge_frontier:crushing/red_chisled_sandstone');
        
            // Smooth Red Sandstone
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                    { item: 'minecraft:smooth_red_sandstone' }
                    ],
                processingTime: 9, 
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80
                    },
                ] 
                }).id('forge_frontier:crushing/smooth_red_sandstone');   
        
            // Cut Red Sandstone
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                    { item: 'minecraft:cut_red_sandstone' }
                    ],
                processingTime: 9, 
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80
                    },
                ]
                }).id('forge_frontier:crushing/cut_red_sandstone');
            
            // Red Sandstone Bricks
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                    { item: 'quark:red_sandstone_bricks' }
                    ],
                processingTime: 9, 
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.70
                    },
                ]
                }).id('forge_frontier:crushing/red_sandstone_bricks');
        
            // Chipped Red Sandstone
                event.custom({
                    type: "create:crushing",
                    ingredients: [
                    { tag: 'chipped:red_sandstone' }
                    ],
                processingTime: 9, 
                results: [
                    {
                        item: 'minecraft:red_sand',
                        count: 3
                    },
                    {
                        item: 'minecraft:red_sand',
                        chance: 0.80
                    },
                ]
                }).id('forge_frontier:crushing/chipped_red_sandstone');
    }
)