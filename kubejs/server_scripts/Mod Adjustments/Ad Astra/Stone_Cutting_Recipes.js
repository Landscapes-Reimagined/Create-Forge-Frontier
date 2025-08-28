ServerEvents.recipes(event => 
    {
        // Plating Recipes
            // Iron
            event.remove({ id: 'ad_astra:iron_plating' })
            event.custom({
                type: "minecraft:stonecutting",
                count: 8,
                ingredient: {
                    item: "ad_astra:iron_plate"
                },
                result: "ad_astra:iron_plating"
            }).id('forge_frontier:stonecutting/astra_iron_plating')

            // Steel
            event.remove({ id: 'ad_astra:steel_plating' })
            event.custom({
                type: "minecraft:stonecutting",
                count: 8,
                ingredient: {
                    item: "ad_astra:steel_plate"
                },
                result: "ad_astra:steel_plating"
            }).id('forge_frontier:stonecutting/astra_steel_plating')

            // Desh
            event.remove({ id: 'ad_astra:desh_plating' })
            event.custom({
                type: "minecraft:stonecutting",
                count: 8,
                ingredient: {
                    item: "ad_astra:desh_plate"
                },
                result: "ad_astra:desh_plating"
            }).id('forge_frontier:stonecutting/astra_desh_plating')

            // Ostrum
            event.remove({ id: 'ad_astra:ostrum_plating' })
            event.custom({
                type: "minecraft:stonecutting",
                count: 8,
                ingredient: {
                    item: "ad_astra:ostrum_plate"
                },
                result: "ad_astra:ostrum_plating"
            }).id('forge_frontier:stonecutting/astra_ostrum_plating')

            // Calorite
            event.remove({ id: 'ad_astra:calorite_plating' })
            event.custom({
                type: "minecraft:stonecutting",
                count: 8,
                ingredient: {
                    item: "ad_astra:calorite_plate"
                },
                result: "ad_astra:calorite_plating"
            }).id('forge_frontier:stonecutting/astra_calorite_plating')
    }
)