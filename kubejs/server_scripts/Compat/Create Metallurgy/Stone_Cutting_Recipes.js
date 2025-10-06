ServerEvents.recipes(event => 
    {
        // Graphite Wire Mold
            event.custom({
                type: "minecraft:stonecutting",
                count: 1,
                ingredient: {
                    item: "createmetallurgy:graphite_blank_mold"
                },
                result: "createmetallurgy:graphite_wire_mold"
            }).id('forge_frontier:stonecutting/graphite_wire_mold')

    }
)