ServerEvents.recipes(event => {

    // Ore Blasting Recipes
        // Crushed Lead Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_lead_pile'
            },
            result: 'createnuclear:lead_block'
        }).id('forge_frontier:blasting/crushed_lead_pile')        

        // Crushed Bismuth Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_bismuth_pile'
            },
            result: 'enlightened_end:bismuth_block'
        }).id('forge_frontier:blasting/crushed_bismuth_pile')

        // Crushed Calorite Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_calorite_pile'
            },
            result: 'ad_astra:calorite_block'
        }).id('forge_frontier:blasting/crushed_calorite_pile')

        // Crushed Desh Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_desh_pile'
            },
            result: 'ad_astra:desh_block'
        }).id('forge_frontier:blasting/crushed_desh_pile')

        // Crushed Irradium Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_irradium_pile'
            },
            result: 'enlightened_end:irradium_block'
        }).id('forge_frontier:blasting/crushed_irradium_pile')

        // Crushed Malachite Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_malachite_pile'
            },
            result: 'enlightened_end:malachite_block'
        }).id('forge_frontier:blasting/crushed_malachite_pile')

        // Crushed Ostrum Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_ostrum_pile'
            },
            result: 'ad_astra:ostrum_block'
        }).id('forge_frontier:blasting/crushed_ostrum_pile')

        // Crushed Tin Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_tin_pile'
            },
            result: 'create_dd:tin_block'
        }).id('forge_frontier:blasting/crushed_tin_pile')

        // Crushed Uranium Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_uranium_pile'
            },
            result: 'alexscaves:block_of_uranium'
        }).id('forge_frontier:blasting/crushed_uranium_pile')

        // Crushed Uranium Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create:crushed_raw_uranium'
            },
            result: 'alexscaves:uranium'
        }).id('forge_frontier:blasting/crushed_raw_uranium')

        // Crushed Iron Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_iron_pile'
            },
            result: 'minecraft:iron_block'
        }).id('forge_frontier:blasting/crushed_iron_pile')

        // Crushed Gold Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_gold_pile'
            },
            result: 'minecraft:gold_block'
        }).id('forge_frontier:blasting/crushed_gold_pile')

        // Crushed Copper Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_copper_pile'
            },
            result: 'minecraft:copper_block'
        }).id('forge_frontier:blasting/crushed_copper_pile')

        // Crushed Zinc Pile
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_zinc_pile'
            },
            result: 'create:zinc_block'
        }).id('forge_frontier:blasting/crushed_zinc_pile')

})