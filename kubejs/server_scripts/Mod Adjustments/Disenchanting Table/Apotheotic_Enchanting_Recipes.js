ServerEvents.recipes(event => 
    {
        // Disenchanting Table Recipe
            event.remove({ id: 'disenchanting_table:disenchanting_table'})
            event.custom({
                type: "apotheosis:enchanting",
                input: {
                item: "minecraft:enchanting_table"
                },
                requirements: {
                eterna: 30,
                quanta: 15,
                arcana: 20,
                rectifaction: 0
                },
                "max_requirements": {
                eterna: 30,
                quanta: -1,
                arcana: 25,
                rectifaction: -1
                },
                result: {
                item: "disenchanting_table:disenchanting_table",
                count: 1
                }
            }).id('forge_frontier:enchanting/disenchanting_table') 
    }
)