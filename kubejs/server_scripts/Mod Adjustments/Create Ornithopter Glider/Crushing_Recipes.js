ServerEvents.recipes(event => 
    {
        // Elytra Pieces Recipe
            event.remove({ id: 'create:crushing/elytra_crushing' })
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    { item: 'forge_frontier:leather_elytra' },
                ],
                processingTime: 400,
                results: [
                    { 
                        item: 'createornithopterglider:elytra_piece',  
                    },
                    { 
                        item: 'createornithopterglider:elytra_piece',
                        chance: 0.75  
                    },
                    {
                        item: 'minecraft:phantom_membrane',
                        chance: 0.25
                    }
                ]
            }).id('forge_frontier:crushing/elytra_piece');
    }
)