ServerEvents.recipes(event => 
    {
        // Powah Rod
        event.custom({
            type:"createaddition:rolling",
            input: {
                item: "powah:dielectric_paste"
            },
            result: {
                item: "powah:dielectric_rod",
                count: 2
            }
        }).id("forge_frontier:rolling/dielectric_rod")

        // Steel Rod
        event.custom({
            type:"createaddition:rolling",
            input: {
                tag: "forge:ingots/steel"
            },
            result: {
                item: "ad_astra:steel_rod",
                count: 2
            }
        }).id("forge_frontier:rolling/steel_rod")

        // Etrium Rod
        event.custom({
            type:"createaddition:rolling",
            input: {
                item: "ad_astra:etrium_ingot"
            },
            result: {
                item: "ad_astra:etrium_rod",
                count: 2
            }
        }).id("forge_frontier:rolling/etrium_rod")

    }
)