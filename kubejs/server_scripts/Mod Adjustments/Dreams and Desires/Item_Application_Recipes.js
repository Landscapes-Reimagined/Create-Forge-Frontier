ServerEvents.recipes(event => 
    {
        // Netherite Casing Recipe
            event.remove({ id: 'create_dd:item_application/netherite_casing'})
            event.remove({ id: 'create_dd:item_application/netherite_casing_using_deployer'})
            event.custom({
                type: 'create:item_application',
                ingredients: [
                {
                    tag: 'forge_frontier:netherite_casing_application'
                },
                {
                    item: 'minecraft:netherite_ingot'
                }
                ],
                results: [
                {
                    item: 'create_dd:netherite_casing'
                }
                ]
            }).id('forge_frontier:item_application/netherite_casing');
    }
)