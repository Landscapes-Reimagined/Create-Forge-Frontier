ServerEvents.recipes(event => 
    {
	  // Creates New Hyperbox Recipe
        event.remove({ id: 'hyperbox:hyperbox'})
        event.custom({
            type: 'create:item_application',
            ingredients: [
            {
                item: 'minecraft:crying_obsidian'
            },
            {
                item: 'create_dd:mithril_ingot'
            }
            ],
            results: [
            {
                item: 'hyperbox:hyperbox'
            }
            ]
        }).id('forge_frontier:item_application/hyperbox');
    }
)