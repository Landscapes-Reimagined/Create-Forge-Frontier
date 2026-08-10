ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'advanced_ae',
                input: 'minecraft:redstone'
            },
            'minecraft:redstone',
            "create:electron_tube"
        )
    }
)