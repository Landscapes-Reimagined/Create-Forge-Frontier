ServerEvents.recipes(event => 
    {
	  // Destroyed Track 1 Recipe
        event.custom({
            type: 'create:item_application',
            ingredients: [
            {
                item: 'create_easy_structures:destroyedtrack_1'
            },
            {
                tag: 'forge_frontier:repair_track'
            }
            ],
            results: [
            {
                item: 'create:track'
            }
            ]
        }).id('forge_frontier:item_application/track_1');

        // Destroyed Track 2 Recipe
        event.custom({
            type: 'create:item_application',
            ingredients: [
            {
                item: 'create_easy_structures:destroyedtrack_2'
            },
            {
                tag: 'forge_frontier:repair_track'
            }
            ],
            results: [
            {
                item: 'create:track'
            }
            ]
        }).id('forge_frontier:item_application/track_2');

        // Destroyed Track 3 Recipe
        event.custom({
            type: 'create:item_application',
            ingredients: [
            {
                item: 'create_easy_structures:destroyedtrack_3'
            },
            {
                tag: 'forge_frontier:repair_track'
            }
            ],
            results: [
            {
                item: 'create:track'
            }
            ]
        }).id('forge_frontier:item_application/track_3');
    }
)