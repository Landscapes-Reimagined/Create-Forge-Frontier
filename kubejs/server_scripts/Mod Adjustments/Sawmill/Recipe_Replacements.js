ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'sawmill',
                input: 'minecraft:iron_ingot'
            },
            'minecraft:iron_ingot',
            'create:iron_sheet'
        )
    }
)