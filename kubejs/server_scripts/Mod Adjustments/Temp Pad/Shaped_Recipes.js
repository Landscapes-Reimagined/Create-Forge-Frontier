ServerEvents.recipes(event => 
    {
        // Temp Pad
            event.remove({ id: 'tempad:tempad'})
            event.shaped(
                Item.of("tempad:tempad"),
                [
                    'III',
                    'CGS',
                    'III'
                ],
                {
                    I: "ad_astra:calorite_ingot",
                    C: "create_new_age:copper_circuit",
                    G: "minecraft:tinted_glass",
                    S: "create_dd:stargaze_singularity"
                }
            ).id( 'forge_frontier:shaped/tempad' )
    }
)