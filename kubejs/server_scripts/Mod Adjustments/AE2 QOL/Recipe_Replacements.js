ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'ae2qolrecipes',
                input: 'minecraft:redstone'
            },
            'minecraft:redstone',
            "create:electron_tube"
        )
    }
)