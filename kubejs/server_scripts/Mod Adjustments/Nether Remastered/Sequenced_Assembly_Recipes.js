ServerEvents.recipes(event => {

    // Shard Recipes
    const shardPieces = [
        {
            output: "forge_frontier:stabilized_shard_1",
            incomplete: "forge_frontier:incomplete_stabilized_shard_1",
            input: "nether_remastered:seal_piece_1",
            id: "1"
        },
        {
            output: "forge_frontier:stabilized_shard_2",
            incomplete: "forge_frontier:incomplete_stabilized_shard_2",
            input: "nether_remastered:seal_piece_2",
            id: "2"
        },
        {
            output: "forge_frontier:stabilized_shard_3",
            incomplete: "forge_frontier:incomplete_stabilized_shard_3",
            input: "nether_remastered:seal_piece_3",
            id: "3"
        },
        {
            output: "forge_frontier:stabilized_shard_4",
            incomplete: "forge_frontier:incomplete_stabilized_shard_4",
            input: "nether_remastered:seal_piece_4",
            id: "4"
        }
    ]

    shardPieces.forEach(shard => {
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: { item: shard.input },
            transitionalItem: { item: shard.incomplete },
            loops: 1,
            results: [{ item: shard.output }],
            sequence: [
                {
                    type: "create:cutting",
                    ingredients: [
                        { item: shard.input }
                    ],
                    results: [{ item: shard.incomplete }]
                },
                {
                    type: "create:pressing",
                    ingredients: [
                        { item: shard.incomplete }
                    ],
                    results: [{ item: shard.output }]
                }
            ]
        }).id(`forge_frontier:sequenced_assembly/stabilized_shard_${shard.id}`)
    })

    // Seal Frame Recipe
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "create:andesite_alloy" },
        transitionalItem: { item: "forge_frontier:incomplete_seal_frame" },
        loops: 1,
        results: [{ item: "forge_frontier:seal_frame" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:andesite_alloy" },
                    { item: "createaddition:electrum_ingot" }
                ],
                results: [{ item: "forge_frontier:incomplete_seal_frame" }]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "forge_frontier:incomplete_seal_frame" }
                ],
                results: [{ item: "forge_frontier:incomplete_seal_frame" }]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "forge_frontier:incomplete_seal_frame" }
                ],
                results: [{ item: "forge_frontier:seal_frame" }]
            }
        ]
    }).id("forge_frontier:sequenced_assembly/seal_frame")

    // Nether Seal Recipe
    event.remove({ id: 'nether_remastered:sotu_recipe' })
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "forge_frontier:seal_frame" },
        transitionalItem: { item: "forge_frontier:incomplete_nether_seal" },
        loops: 1,
        results: [{ item: "nether_remastered:seal_of_the_underworld_item" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:seal_frame" },
                    { item: "forge_frontier:dimensional_shard" }
                ],
                results: [{ item: "forge_frontier:incomplete_nether_seal" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:incomplete_nether_seal" },
                    { item: "forge_frontier:nether_compound" }
                ],
                results: [{ item: "forge_frontier:incomplete_nether_seal" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:incomplete_nether_seal" },
                    { item: "forge_frontier:seal_core" }
                ],
                results: [{ item: "forge_frontier:incomplete_nether_seal" }]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "forge_frontier:incomplete_nether_seal" }
                ],
                results: [{ item: "nether_remastered:seal_of_the_underworld_item" }]
            }
        ]
    }).id("forge_frontier:sequenced_assembly/seal_of_the_underworld")

})