ServerEvents.recipes(event => 
    {
        // Crushed Tin Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_tin_pile'
            },
            result: 'create_dd:tin_block'
        }).id('forge_frontier:smelting/crushed_tin_pile')
    
        // Crushed Calorite Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_calorite_pile'
            },
            result: 'ad_astra:calorite_block'
        }).id('forge_frontier:smelting/crushed_calorite_pile')

        // Crushed Desh Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_desh_pile'
            },
            result: 'ad_astra:desh_block'
        }).id('forge_frontier:smelting/crushed_desh_pile')

        // Crushed Ostrum Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'forge_frontier:crushed_ostrum_pile'
            },
            result: 'ad_astra:ostrum_block'
        }).id('forge_frontier:smelting/crushed_ostrum_pile')

        // Crushed Iron Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_iron_pile'
            },
            result: 'minecraft:iron_block'
        }).id('forge_frontier:smelting/crushed_iron_pile')

        // Crushed Gold Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_gold_pile'
            },
            result: 'minecraft:gold_block'
        }).id('forge_frontier:smelting/crushed_gold_pile')

        // Crushed Copper Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_copper_pile'
            },
            result: 'minecraft:copper_block'
        }).id('forge_frontier:smelting/crushed_copper_pile')

        // Crushed Zinc Pile Smelting Recipe
        event.custom({
            type: "minecraft:smelting",
            cookingtime: 200,
            experience: 0.1,
            ingredient: {
                item: 'create_compressed:crushed_zinc_pile'
            },
            result: 'create:zinc_block'
        }).id('forge_frontier:smelting/crushed_zinc_pile')
    }
)