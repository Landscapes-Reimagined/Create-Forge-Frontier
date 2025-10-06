ServerEvents.recipes(event => 
    {
        // Magical Eye Recipe
            event.custom({
                type: "apotheosis:enchanting",
                input: {
                item: "minecraft:totem_of_undying"
                },
                requirements: {
                eterna: 20,
                quanta: 30,
                arcana: 10,
                rectifaction: 0
                },
                "max_requirements": {
                eterna: -1,
                quanta: -1,
                arcana: -1,
                rectifaction: 0
                },
                result: {
                item: "endrem:magical_eye",
                count: 1
                }
            }).id('forge_frontier:enchanting/magical_eye')
            
        // Cryptic Eye Recipe
            event.custom({
                type: "apotheosis:enchanting",
                input: {
                item: "minecraft:ender_eye"
                },requirements: {
                eterna: 20,
                quanta: 30,
                arcana: 10,
                rectifaction: 0
                },
                "max_requirements": {
                eterna: -1,
                quanta: -1,
                arcana: -1,
                rectifaction: 0
                },
                result: {
                item: "endrem:cryptic_eye",
                count: 1
                }
            }).id('forge_frontier:enchanting/cryptic_eye')
    }
)