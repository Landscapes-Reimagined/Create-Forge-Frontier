ServerEvents.recipes(event => 
    {
        // New Cage Lamp Recipes
            // Andesite
                // Yellow
                    event.remove({ id: 'createdeco:yellow_andesite_lamp'})
                    event.shaped(
                    Item.of('createdeco:yellow_andesite_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:andesite_alloy',
                        i: 'minecraft:torch',
                        s: '#forge:plates/andesite_alloy'
                    }
                    ).id( 'forge_frontier:shaped/yellow_andesite_alloy_lamp' )

                // Red
                    event.remove({ id: 'createdeco:red_andesite_lamp'})
                    event.shaped(
                    Item.of('createdeco:red_andesite_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:andesite_alloy',
                        i: 'minecraft:redstone_torch',
                        s: '#forge:plates/andesite_alloy'
                    }
                    ).id( 'forge_frontier:shaped/red_andesite_lamp' )

                // Green
                    event.remove({ id: 'createdeco:green_andesite_lamp'})
                    event.shaped(
                    Item.of('createdeco:green_andesite_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:andesite_alloy',
                        i: 'minecraft:glow_berries',
                        s: '#forge:plates/andesite_alloy'
                    }
                    ).id( 'forge_frontier:shaped/green_andesite_lamp' )

                // Blue
                    event.remove({ id: 'createdeco:blue_andesite_lamp'})
                    event.shaped(
                    Item.of('createdeco:blue_andesite_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:andesite_alloy',
                        i: 'minecraft:soul_torch',
                        s: '#forge:plates/andesite_alloy'
                    }
                    ).id( 'forge_frontier:shaped/blue_andesite_lamp' )

            // Zinc
                // Yellow
                    event.remove({ id: 'createdeco:yellow_zinc_lamp'})
                    event.shaped(
                    Item.of('createdeco:yellow_zinc_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:zinc_nugget',
                        i: 'minecraft:torch',
                        s: '#forge:plates/zinc'
                    }
                    ).id( 'forge_frontier:shaped/yellow_zinc_lamp' )

                // Red
                    event.remove({ id: 'createdeco:red_zinc_lamp'})
                    event.shaped(
                    Item.of('createdeco:red_zinc_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:zinc_nugget',
                        i: 'minecraft:redstone_torch',
                        s: '#forge:plates/zinc'
                    }
                    ).id( 'forge_frontier:shaped/red_zinc_lamp' )

                // Green
                    event.remove({ id: 'createdeco:green_zinc_lamp'})
                    event.shaped(
                    Item.of('createdeco:green_zinc_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:zinc_nugget',
                        i: 'minecraft:glow_berries',
                        s: '#forge:plates/zinc'
                    }
                    ).id( 'forge_frontier:shaped/green_zinc_lamp' )

                // Blue
                    event.remove({ id: 'createdeco:blue_zinc_lamp'})
                    event.shaped(
                    Item.of('createdeco:blue_zinc_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: 'create:zinc_nugget',
                        i: 'minecraft:soul_torch',
                        s: '#forge:plates/zinc'
                    }
                    ).id( 'forge_frontier:shaped/blue_zinc_lamp' )
            // Industrial Iron
                // Yellow
                    event.remove({ id: 'createdeco:yellow_industrial_iron_lamp'})
                    event.shaped(
                    Item.of('createdeco:yellow_industrial_iron_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: '#forge:nuggets/industrial_iron',
                        i: 'minecraft:torch',
                        s: '#forge:plates/industrial_iron'
                    }
                    ).id( 'forge_frontier:shaped/yellow_industrial_iron_lamp' )

                // Red
                    event.remove({ id: 'createdeco:red_industrial_iron_lamp'})
                    event.shaped(
                    Item.of('createdeco:red_industrial_iron_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: '#forge:nuggets/industrial_iron',
                        i: 'minecraft:redstone_torch',
                        s: '#forge:plates/industrial_iron'
                    }
                    ).id( 'forge_frontier:shaped/red_industrial_iron_lamp' )

                // Green
                    event.remove({ id: 'createdeco:green_industrial_iron_lamp'})
                    event.shaped(
                    Item.of('createdeco:green_industrial_iron_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: '#forge:nuggets/industrial_iron',
                        i: 'minecraft:glow_berries',
                        s: '#forge:plates/industrial_iron'
                    }
                    ).id( 'forge_frontier:shaped/green_industrial_iron_lamp' )

                // Blue
                    event.remove({ id: 'createdeco:blue_industrial_iron_lamp'})
                    event.shaped(
                    Item.of('createdeco:blue_industrial_iron_lamp'),
                    [
                        ' n ',
                        ' i ',
                        ' s '
                    ],
                    {
                        n: '#forge:nuggets/industrial_iron',
                        i: 'minecraft:soul_torch',
                        s: '#forge:plates/industrial_iron'
                    }
                    ).id( 'forge_frontier:shaped/blue_industrial_iron_lamp' )
    }
)