ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'expatternprovider',
                input: 'minecraft:redstone'
            },
            'minecraft:redstone',
            'create:electron_tube'
        )
    }
)