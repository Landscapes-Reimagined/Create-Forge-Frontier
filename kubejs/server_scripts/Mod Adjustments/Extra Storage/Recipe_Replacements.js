ServerEvents.recipes(event=>
    {
        event.replaceInput(
            {
                mod: 'extrastorage',
                input: "minecraft:redstone"
            },
            "minecraft:redstone",
            "create:electron_tube"
        )     
    }
)