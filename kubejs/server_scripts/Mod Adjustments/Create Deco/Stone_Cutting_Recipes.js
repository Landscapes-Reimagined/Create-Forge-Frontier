ServerEvents.recipes(event => 
    {
        // New Sheet Metal Recipes
            // Andesite
                event.remove({ id: 'createdeco:andesite_sheet_metal'})
                event.custom({
                type: "minecraft:stonecutting",
                count: 4,
                ingredient: {
                    item: "create_dd:andesite_sheet"
                },
                result: "createdeco:andesite_sheet_metal"
            }).id('forge_frontier:stonecutting/andesite_sheet_metal')

            // Zinc
                event.remove({ id: 'createdeco:zinc_sheet_metal'})            
                event.custom({
                type: "minecraft:stonecutting",
                count: 4,
                ingredient: {
                    item: "create_dd:zinc_sheet"
                },
                result: "createdeco:zinc_sheet_metal"
            }).id('forge_frontier:stonecutting/zinc_sheet_metal')            

            // Industrial Iron
                event.remove({ id: 'createdeco:industrial_iron_sheet_metal'})
                event.custom({
                type: "minecraft:stonecutting",
                count: 4,
                ingredient: {
                    item: "createdeco:industrial_iron_sheet"
                },
                result: "createdeco:industrial_iron_sheet_metal"
            }).id('forge_frontier:stonecutting/industrial_iron_sheet_metal')
    }
)