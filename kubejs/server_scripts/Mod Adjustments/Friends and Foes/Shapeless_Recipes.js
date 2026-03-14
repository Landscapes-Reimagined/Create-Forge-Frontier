ServerEvents.recipes(event => 
    {
        // Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/copper_button' )

        // Exposed Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:exposed_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:exposed_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/exposed_copper_button' ) 

        // Weathered Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:weathered_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:weathered_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/weathered_copper_button' )

        // Oxidized Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:oxidized_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:oxidized_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/oxidized_copper_button' )

        // Waxed Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:waxed_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:waxed_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/waxed_copper_button' )

        // Waxed Exposed Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:waxed_exposed_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:waxed_exposed_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/waxed_exposed_copper_button' ) 

        // Waxed Weathered Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:waxed_weathered_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:waxed_weathered_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/waxed_weathered_copper_button' )

        // Waxed Oxidized Copper Button Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "friendsandfoes:waxed_oxidized_copper_button"
                    }
                ],
                result: {
                    item: "copperagebackport:waxed_oxidized_copper_button",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/waxed_oxidized_copper_button' )

        }
)