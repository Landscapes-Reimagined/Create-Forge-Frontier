ServerEvents.recipes(event => 
    {
        // Paper Recipe
            event.remove({ id: 'create_additions_synthetics:dust_to_paper'})
            event.custom({
            type: 'create:compacting',
                ingredients: [
                    {
                        item: "createdieselgenerators:wood_chip",
                    },
                    {
                        item: "minecraft:bone_meal"
                    },
                    {
                        fluid: 'minecraft:water',
                        amount: 500
                    }
                ],
                results: [
                    {
                        item: "minecraft:paper",
                        count: 16
                    },
                ],
            }).id('forge_frontier:compacting/paper')
    }
)