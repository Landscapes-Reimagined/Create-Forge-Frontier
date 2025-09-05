ServerEvents.recipes(event => 
    {
        // Leather Elytra Recipe
            event.shaped(
                Item.of('forge_frontier:leather_elytra'),
                [
                    'LLL',
                    'LLL',
                    'L L'
                ],
                {
                    L: 'minecraft:leather'
                }
            ).id( 'forge_frontier:shaped/leather_elytra' )
            
        // Custom Rocket Parts
            // Engines
                // Tier 5
                    event.shaped(
                        Item.of("forge_frontier:tier_5_engine"),
                        [
                            "MMM",
                            "BEB",
                            " G "
                        ],
                        {
                            M: "enlightened_end:malachite_block",
                            B: "enlightened_end:bismuth_ingot",
                            E: "ad_astra:calorite_engine",
                            G: "cataclysm:gauntlet_of_guard"
                            
                        }
                    ).id( "forge_frontier:shaped/tier_5_engine" )

                // Tier 6
                    event.shaped(
                        Item.of("forge_frontier:tier_6_engine"),
                        [
                            "MMM",
                            "DED",
                            " A "
                        ],
                        {
                            M: "alexscaves:primal_magma",
                            D: "alexscaves:pure_darkness",
                            E: "forge_frontier:tier_5_engine",
                            A: "cataclysm:abyssal_egg"
                        }
                    ).id( "forge_frontier:shaped/tier_6_engine" )

            // Tanks
                // Tier 5
                    event.shaped(
                        Item.of("forge_frontier:tier_5_tank"),
                        [
                            "MM ",
                            "MTB",
                            "MM "
                        ],
                        {
                            M: "enlightened_end:malachite_block",
                            B: "enlightened_end:bismuth_ingot",
                            T: "ad_astra:calorite_tank",
                            
                        }
                    ).id( "forge_frontier:shaped/tier_5_tank" )

                // Tier 6
                    event.shaped(
                        Item.of("forge_frontier:tier_6_tank"),
                        [
                            "MM ",
                            "MTC",
                            "MM "
                        ],
                        {
                            M: "alexscaves:primal_magma",
                            T: "forge_frontier:tier_5_tank",
                            C: "alexscaves:ominous_catalyst"
                        }
                    ).id( "forge_frontier:shaped/tier_6_tank" )
    }
)