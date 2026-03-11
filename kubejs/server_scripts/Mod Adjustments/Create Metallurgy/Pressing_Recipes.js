ServerEvents.recipes(event =>
    {
        // Tungsten Sheet Pressing Recipe
        event.custom(
            {
                type: "create:pressing",
                ingredients: [
                    {
                        tag: "forge:plates/tungsten"
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
                        tag: "forge:plates/obdurium"
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