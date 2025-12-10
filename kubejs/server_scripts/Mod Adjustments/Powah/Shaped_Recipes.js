ServerEvents.recipes(event => 
    {
        // New Ender Cell Recipes
            // Basic
                event.remove({ id: 'powah:crafting/ender_cell_basic' })
                event.shaped(
                    Item.of('powah:ender_cell_basic', 1),
                    [
                        'OIO',
                        'ICI',
                        'OIO'
                    ],
                    {
                        O: 'minecraft:obsidian',
                        I: 'minecraft:iron_ingot',
                        C: 'powah:ender_cell_starter'
                    }
                ).id( 'forge_frontier:shaped/ender_cell_basic' )

            // Hardened
                event.remove({ id: 'powah:crafting/ender_cell_hardened' })
                event.shaped(
                    Item.of('powah:ender_cell_hardened', 1),
                    [
                        'OIO',
                        'ICI',
                        'OIO'
                    ],
                    {
                        O: 'minecraft:obsidian',
                        I: 'powah:steel_energized',
                        C: 'powah:ender_cell_basic'
                    }
                ).id( 'forge_frontier:shaped/ender_cell_hardened' )

            // Blazing
                event.remove({ id: 'powah:crafting/ender_cell_blazing' })
                event.shaped(
                    Item.of('powah:ender_cell_blazing', 1),
                    [
                        'OIO',
                        'ICI',
                        'OIO'
                    ],
                    {
                        O: 'minecraft:obsidian',
                        I: 'powah:crystal_blazing',
                        C: 'powah:ender_cell_hardened'
                    }
                ).id( 'forge_frontier:shaped/ender_cell_blazing' )

            // Niotic
                event.remove({ id: 'powah:crafting/ender_cell_niotic' })
                event.shaped(
                    Item.of('powah:ender_cell_niotic', 1),
                    [
                        'OIO',
                        'ICI',
                        'OIO'
                    ],
                    {
                        O: 'minecraft:obsidian',
                        I: 'powah:crystal_niotic',
                        C: 'powah:ender_cell_blazing'
                    }
                ).id( 'forge_frontier:shaped/ender_cell_niotic' )

            // Spirited
                event.remove({ id: 'powah:crafting/ender_cell_spirited' })
                event.shaped(
                    Item.of('powah:ender_cell_spirited', 1),
                    [
                        'OIO',
                        'ICI',
                        'OIO'
                    ],
                    {
                        O: 'minecraft:obsidian',
                        I: 'powah:crystal_spirited',
                        C: 'powah:ender_cell_niotic'
                    }
                ).id( 'forge_frontier:shaped/ender_cell_spirited' )

            // Nitro
                event.remove({ id: 'powah:crafting/ender_cell_nitro' })
                event.shaped(
                    Item.of('powah:ender_cell_nitro', 1),
                    [
                        'OIO',
                        'ICI',
                        'OIO'
                    ],
                    {
                        O: 'minecraft:obsidian',
                        I: 'powah:crystal_nitro',
                        C: 'powah:ender_cell_spirited'
                    }
                ).id( 'forge_frontier:shaped/ender_cell_nitro' )            
    }
)