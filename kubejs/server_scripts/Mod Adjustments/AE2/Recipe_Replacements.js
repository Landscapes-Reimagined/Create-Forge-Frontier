ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'ae2',
                input: 'minecraft:redstone'
            },
            'minecraft:redstone',
            "create:electron_tube"
        )
    }
)