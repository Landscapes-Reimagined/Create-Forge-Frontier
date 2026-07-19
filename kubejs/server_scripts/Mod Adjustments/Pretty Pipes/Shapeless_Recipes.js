ServerEvents.recipes(event => 
    {
        // Blank Fluid Module
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "prettypipes:blank_module"
                    },
                    {
                        item: 'create:copper_sheet'
                    }
                ],
                result: {
                    item: "ppfluids:blank_fluid_module",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/blank_fluid_module' )
    }
)
