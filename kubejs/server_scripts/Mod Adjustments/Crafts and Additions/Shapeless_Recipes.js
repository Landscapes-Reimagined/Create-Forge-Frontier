ServerEvents.recipes(event => 
    {
        // Diamond Grit Sandpaper
            event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' })
            event.shapeless(
                Item.of('createaddition:diamond_grit_sandpaper'),
                [
                    'minecraft:paper',
                    'createaddition:diamond_grit'
                ]
            ).id( 'forge_frontier:shapeless/diamond_grit_sandpaper' )
    }
)