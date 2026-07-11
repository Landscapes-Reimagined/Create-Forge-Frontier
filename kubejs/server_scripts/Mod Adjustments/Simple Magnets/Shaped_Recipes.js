ServerEvents.recipes(event=>
    {
        // Basic Magnet
            event.remove({ id: 'simplemagnets:basicmagnet' })
            event.shaped(Item.of( 'simplemagnets:basicmagnet', 1), 
                [
                    'L R',
                    'AMA',
                    'AAA'
                ], 
                {
                    L: 'create_dd:lapis_alloy',
                    R: 'create:polished_rose_quartz',
                    A: 'create_dd:andesite_sheet',
                    M: 'create_sa:copper_magnet'
                }
            ).id( 'forge_frontier:shaped/basic_magnet' )

        // Advanced Magnet
            event.remove({ id: 'simplemagnets:advancedmagnet' })
            event.shaped(Item.of( 'simplemagnets:advancedmagnet', 1), 
                [
                    'L R',
                    'GMG',
                    'GGG'
                ], 
                {
                    L: 'create_dd:lapis_alloy',
                    R: 'create:polished_rose_quartz',                    
                    G: 'create:golden_sheet',
                    M: 'simplemagnets:basicmagnet'
                }
            ).id( 'forge_frontier:shaped/advanced_magnet' )        
    }
)