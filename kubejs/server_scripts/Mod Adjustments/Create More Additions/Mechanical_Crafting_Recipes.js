ServerEvents.recipes(event => 
    {
        // Incomplete Totem Recipe
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "EHE",
                " B "
            ],
            key: {
                E: { item: "minecraft:emerald" },
                H: { item: "forge_frontier:totem_head" },
                B: { item: "forge_frontier:totem_body" }
            },
            result: {
                item: "create_more_additions:incomplete_totem",
                count: 1
            },
            acceptMirrored: true
        }).id("forge_frontier:mechanical_crafting/inactive_totem")
    }
)