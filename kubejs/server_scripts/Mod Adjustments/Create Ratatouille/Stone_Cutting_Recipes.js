ServerEvents.recipes(event => 
    {
            event.remove({ id: "create:compacting/chocolate_mold" })
            event.custom({
                type: "minecraft:stonecutting",
                count: 1,
                ingredient: {
                    item: "create:iron_sheet"
                },
                result: "ratatouille:chocolate_mold"
            }).id('forge_frontier:stonecutting/chocolate_mold')

            event.remove({ id: "create:compacting/popsicle_mold" })
            event.custom({
                type: "minecraft:stonecutting",
                count: 1,
                ingredient: {
                    item: "create:iron_sheet"
                },
                result: "ratatouille:popsicle_mold"
            }).id('forge_frontier:stonecutting/popsicle_mold')

            event.remove({ id: "create:compacting/cake_mold" })
            event.custom({
                type: "minecraft:stonecutting",
                count: 1,
                ingredient: {
                    item: "create:iron_sheet"
                },
                result: "ratatouille:cake_mold"
            }).id('forge_frontier:stonecutting/cake_mold')            
    }
)