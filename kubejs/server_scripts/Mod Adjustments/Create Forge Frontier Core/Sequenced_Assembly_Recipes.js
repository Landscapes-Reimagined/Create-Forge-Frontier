ServerEvents.recipes(event => 
    {
        // Conveyor Boots Recipe
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: {
                    item: 'create:copper_diving_boots'
                },
                loops: 3,
                results: [
                    {
                        chance: 100,
                        item: 'forgefrontiercore:conveyor_boots'
                    }
                ],
                sequence: [
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' },
                            { item: 'create:belt_connector' }
                        ],
                        results: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ]
                    },
                    {
                        type: 'create:deploying',
                        ingredients: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' },
                            { item: 'create:iron_sheet' }
                        ],
                        results: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ]
                    },
                    {
                        type: 'create:pressing',
                        ingredients: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ],
                        results: [
                            { item: 'forge_frontier:incomplete_conveyor_boots' }
                        ]
                    }
                ],
                transitionalItem: {
                    item: 'forge_frontier:incomplete_conveyor_boots'
                }
            }).id('forge_frontier:sequenced_assembly/conveyor_boots');
    }
);  