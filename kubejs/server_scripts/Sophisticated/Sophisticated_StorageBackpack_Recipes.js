ServerEvents.recipes(event => 
    {
        // Sophisticated Backpacks Upgrade Base (Shaped)
        event.remove({ id: "sophisticatedbackpacks:upgrade_base" });
        event.shaped(
            Item.of("sophisticatedbackpacks:upgrade_base"), 
            [
                "LFL",
            ], 
            {
                L: "minecraft:leather",
                F: "create:filter"
            }
        ).id("forge_frontier:shaped/backpack_upgrade_base");

        // Sophisticated Storage Upgrade Base (Shaped)
        event.remove({ id: "sophisticatedstorage:upgrade_base" });
        event.shaped(
            Item.of("sophisticatedstorage:upgrade_base"), 
            [
                "PFP",
            ],
            {
                P: "#minecraft:planks",
                F: "create:filter"
            }
        ).id("forge_frontier:shaped/storage_upgrade_base");


        // Storage Controller Create Recipe
        event.remove({ id: "sophisticatedstorage:controller"})
        event.shaped(
            Item.of("sophisticatedstorage:controller"),
            [
                "SBS",
                "PVP",
                "SCS"
            ],
            {
                S: "#forge:stone",
                B: "create:brass_ingot",
                P: "#minecraft:planks",
                V: "create:item_vault",
                C: "create:linked_controller"
            }
        ).id( "forge_frontier:shaped/storage_controller" )

        // Storage Link Create Recipe
        event.remove({ id: "sophisticatedstorage:storage_link"})
        event.remove({ id: "sophisticatedstorage:storage_link_from_controller"})
        event.shaped(
            Item.of("sophisticatedstorage:storage_link"),
            [
                "EP",
                "LS"
            ],
            {
                E: "#forge:ender_pearls",
                P: "#minecraft:planks",
                L: "create:redstone_link",
                S: "#forge:stone"
            } 
        ).id( "forge_frontier:shaped/storage_link")

        // Storage I/O Create Recipe
        event.remove({ id: "sophisticatedstorage:storage_io"})
        event.custom({
            type: "minecraft:crafting_shapeless",
            ingredients: [
                {
                    item: "sophisticatedstorage:storage_input"
                }
            ],
            result: {
                item: "sophisticatedstorage:storage_io"
              }
        }).id( "forge_frontier:shapeless/storage_io" )

        // Storage Input Create Recipe
        event.remove({ id: "sophisticatedstorage:storage_input"})
        event.remove({ id: "minecraft:storage_input_from_io"})
        event.shaped(
            Item.of("sophisticatedstorage:storage_input"),
            [
                "SCS",
                "PVP",
                "SLS"
            ],
            {
                S: "#forge:stone",
                P: "#minecraft:planks",
                L: "create:redstone_link",
                V: "create:item_vault",
                C: "create:smart_chute"
            }
        ).id( "forge_frontier:shaped/storage_input")

        // Storage Output Create Recipe
        event.remove({ id: "sophisticatedstorage:storage_output"})
        event.remove({ id: "minecraft:storage_output_from_input"})
        event.shaped(
            Item.of("sophisticatedstorage:storage_output"),
            [
                "SLS",
                "PVP",
                "SCS"
            ],
            {
                S: "#forge:stone",
                P: "#minecraft:planks",
                L: "create:redstone_link",
                V: "create:item_vault",
                C: "create:smart_chute"
            }
        ).id( "forge_frontier:shaped/storage_output")

        
    }
)