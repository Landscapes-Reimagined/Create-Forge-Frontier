ServerEvents.recipes(event => 
    {
        // Mechanical Generator Recipe
        event.remove({ id: 'createcobblestone:crafting/mechanical_generator' })
        event.shaped(Item.of('createcobblestone:mechanical_generator', 1), 
        [
            'DED',
            'WML',
            'DBD'
        ],
        {
            D: 'ad_astra:desh_ingot',
            E: 'create:electron_tube',
            B: 'create:brass_casing',
            W: 'minecraft:water_bucket',
            L: 'minecraft:lava_bucket',
            M: 'create:mechanical_drill'
        }).id('forge_frontier:shaped/mechanical_generator')
    }
)