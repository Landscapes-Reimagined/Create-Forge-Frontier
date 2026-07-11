ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'fluxnetworks',
                input: 'minecraft:redstone_block'
            },
            'minecraft:redstone_block',
            'createaddition:electrum_block'
        )

        event.replaceInput(
            {
                mod: 'fluxnetworks',
                input: 'minecraft:ender_eye'
            },
            'minecraft:ender_eye',
            'create_dd:overcharge_alloy'
        )

        event.replaceInput(
            {
                mod: 'fluxnetworks',
                input: 'minecraft:obsidian'
            },
            'minecraft:obsidian',
            'create:industrial_iron_block'
        )
    }
)