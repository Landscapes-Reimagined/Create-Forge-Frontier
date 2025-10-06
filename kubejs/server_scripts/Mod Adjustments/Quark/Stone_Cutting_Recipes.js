ServerEvents.recipes(event => 
    {
        // Quark Iron Plating Recipe
            event.remove({ id: 'quark:building/crafting/iron_plate' })
            event.custom({
                type: "minecraft:stonecutting",
                count: 3,
                ingredient: {
                    item: "minecraft:iron_ingot"
                },
                result: "quark:iron_plate"
            }).id('forge_frontier:stonecutting/quark_iron_plating')
    }
)