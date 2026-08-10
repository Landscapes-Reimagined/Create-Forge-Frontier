ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'ae2things',
                input: 'minecraft:redstone'
            },
            'minecraft:redstone',
            "create:electron_tube"
        )
    }
)