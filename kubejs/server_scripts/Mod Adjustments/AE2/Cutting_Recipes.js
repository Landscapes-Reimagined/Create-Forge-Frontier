ServerEvents.recipes(event => 
    {
        // New Cable Anchor Recipe
        event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        tag: "ae2:metal_ingots"
                    }
                ],
                result: [
                    {
                        count: 4,
                        item: "ae2:cable_anchor"
                    }
                ],
                tool: {
                    tag: "forge:tools/knives"
                }
        }).id('forge_frontier:cutting/cable_anchor')
    }
)