ServerEvents.recipes(event => {
    // Ore Blasting Recipes
        // Crushed Irradium 
        event.custom({
            type: 'minecraft:blasting',
            cookingtime: 100,
            experience: 0.1,
            ingredient: 
                { item: 'forge_frontier:crushed_irradium' },
            result: 
                { item: 'enlightened_end:depleted_irradium_bar' }
        }).id('forge_frontier:blasting/irradium_ore'); 

        // Crushed Malachite
        event.custom({
            type: 'minecraft:blasting',
            cookingtime: 100,
            experience: 0.1,
            ingredient: 
                { item: 'forge_frontier:crushed_malachite' },
            result: 
                { item: 'enlightened_end:malachite' }
        }).id('forge_frontier:blasting/malachite_ore');

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

        // Crushed Bismith
        event.custom({
            type: 'minecraft:blasting',
            cookingtime: 100, 
            experience: 0.1, 
            ingredient: {
                item: 'forge_frontier:crushed_bismuth' 
            },
            result: {
                item: 'enlightened_end:bismuth_ingot' 
            }
        }).id('forge_frontier:blasting/bismuth_ore');        

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