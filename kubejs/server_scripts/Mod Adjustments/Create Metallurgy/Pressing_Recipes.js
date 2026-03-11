ServerEvents.recipes(event =>
    {
        // Tungsten Sheet Pressing Recipe
        event.custom(
            {
                type: "create:pressing",
                ingredients: [
                    {
                        tag: "forge:ingots/tungsten"
                    }
                ],
                results: [
                    {
                        item: "createmetallurgy:tungsten_sheet"
                    }
                ]
            }
        ).id('forge_frontier:pressing/tungsten_sheet')

        // Obdurium Sheet Pressing Recipe
        event.custom(
            {
                type: "create:pressing",
                ingredients: [
                    {
                        tag: "forge:ingots/obdurium"
                    }
                ],
                results: [
                    {
                        item: "createmetallurgy:obdurium_sheet"
                    }
                ]
            }
        ).id('forge_frontier:pressing/obdurium_sheet')
    }
)