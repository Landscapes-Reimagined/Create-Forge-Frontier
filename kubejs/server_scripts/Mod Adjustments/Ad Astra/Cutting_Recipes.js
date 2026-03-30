ServerEvents.recipes(event=>
    {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                { 
                    item: "ad_astra:moon_stone"
                }
            ],
            result: [
                {
                    item: "ad_astra:moon_cobblestone"
                }
            ],
            tool: {
                type: "farmersdelight:tool_action",
                action: "pickaxe_dig"
            }
        }).id('forge_frontier:farmers_delight_cutting/moon_stone')
    }
)