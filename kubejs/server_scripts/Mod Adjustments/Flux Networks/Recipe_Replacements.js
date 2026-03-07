ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'fluxnetworks',
                input: 'minecraft:redstone_block'
            },
            'minecraft:redstone_block',
            'create:electron_tube'
        )

        event.replaceInput(
            {
                mod: 'fluxnetworks',
                input: 'minecraft:obsidian'
            },
            'minecraft:obsidian',
            'create:sturdy_sheet'
        )
    }
)