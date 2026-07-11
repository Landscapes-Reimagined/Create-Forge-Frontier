ServerEvents.recipes(event => {

    const processors = [
        {
            output: "refinedstorage:raw_basic_processor",
            incomplete: "forge_frontier:incomplete_raw_basic_processor",
            main: "minecraft:iron_ingot",
            id: "basic"
        },
        {
            output: "refinedstorage:raw_improved_processor",
            incomplete: "forge_frontier:incomplete_raw_improved_processor",
            main: "minecraft:gold_ingot",
            id: "improved"
        },
        {
            output: "refinedstorage:raw_advanced_processor",
            incomplete: "forge_frontier:incomplete_raw_advanced_processor",
            main: "minecraft:diamond",
            id: "advanced"
        }
    ]

    processors.forEach(processor => {
        event.custom({
            type: "create:sequenced_assembly",
            ingredient: { item: "refinedstorage:processor_binding" },
            transitionalItem: { item: processor.incomplete },
            loops: 1,
            results: [{ item: processor.output }],
            sequence: [
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: "refinedstorage:processor_binding" },
                        { item: processor.main }
                    ],
                    results: [{ item: processor.incomplete }]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: processor.incomplete },
                        { item: "refinedstorage:silicon" }
                    ],
                    results: [{ item: processor.incomplete }]
                },
                {
                    type: "create:deploying",
                    ingredients: [
                        { item: processor.incomplete },
                        { item: "minecraft:redstone" }
                    ],
                    results: [{ item: processor.incomplete }]
                },
                {
                    type: "create:pressing",
                    ingredients: [{ item: processor.incomplete }],
                    results: [{ item: processor.output }]
                }
            ]
        }).id(`forge_frontier:sequenced_assembly/raw_${processor.id}_processor`)
    })

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "refinedstorage:processor_binding" },
        transitionalItem: { item: "forge_frontier:incomplete_raw_neural_processor" },
        loops: 1,
        results: [{ item: "extrastorage:raw_neural_processor" }],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "refinedstorage:processor_binding" },
                    { item: "refinedstorage:raw_improved_processor" }
                ],
                results: [{ item: "forge_frontier:incomplete_raw_neural_processor" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:incomplete_raw_neural_processor" },
                    { item: "refinedstorage:raw_advanced_processor" }
                ],
                results: [{ item: "forge_frontier:incomplete_raw_neural_processor" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "forge_frontier:incomplete_raw_neural_processor" },
                    { item: "minecraft:redstone" }
                ],
                results: [{ item: "forge_frontier:incomplete_raw_neural_processor" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "forge_frontier:incomplete_raw_neural_processor" }],
                results: [{ item: "extrastorage:raw_neural_processor" }]
            }
        ]
    }).id("forge_frontier:sequenced_assembly/raw_neural_processor")

})