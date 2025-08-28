ServerEvents.recipes(event => 
    {
        // Shadow Drill Recipe
            event.shaped(
                Item.of('create_dd:shadow_drill'),
                [
                    ' S ',
                    'SMS',
                    ' C '
                ],
                {
                    S: 'create_dd:shadow_steel',
                    M: 'create_dd:mithril_ingot',
                    C: 'create_dd:shadow_steel_casing'
                }
            ).id( 'forge_frontier:shaped/shadow_drill' )

        // Radiant Drill Recipe
            event.shaped(
                Item.of('create_dd:radiant_drill'),
                [
                    ' R ',
                    'RMR',
                    ' C '
                ],
                {
                    R: 'create_dd:refined_radiance',
                    M: 'create_dd:mithril_ingot',
                    C: 'create_dd:refined_radiance_casing'
                }
            ).id( 'forge_frontier:shaped/radiant_drill' )
    }
)