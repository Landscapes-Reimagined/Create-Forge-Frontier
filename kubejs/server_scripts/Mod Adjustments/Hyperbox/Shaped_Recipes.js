ServerEvents.recipes(event => 
    {
        // Hyperbox Recipe
            event.remove({ id: 'hyperbox:hyperbox'})
            event.shaped(
                Item.of('hyperbox:hyperbox'),
                [
                    'OCO',
                    'OVO',
                    'OOO'
                ],
                {
                    O: 'minecraft:crying_obsidian',
                    C: 'create_dd:chromatic_compound',
                    V: 'create_bs:netherite_item_vault'
                }
            ).id( 'forge_frontier:shaped/hyperbox' )
    }
)