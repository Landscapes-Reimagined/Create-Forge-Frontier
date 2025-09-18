ServerEvents.recipes(event => 
    {
        // Creates Structure Compass Recipe
            event.remove({ id: 'explorerscompass:explorers_compass' })
            event.shaped(
                Item.of('explorerscompass:explorerscompass', 1),
                [
                    'ACA',
                    'CBC',
                    'ACA'
                ],
                {
                    A: 'apotheosis:prismatic_web',
                    B: 'naturescompass:naturescompass',
                    C: 'createcompression:compressed_andesite_2x'
                }
            ).id('forge_frontier:shaped/explorers_compass')
    }
)