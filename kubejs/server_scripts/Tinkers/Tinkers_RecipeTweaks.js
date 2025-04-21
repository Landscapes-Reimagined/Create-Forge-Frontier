ServerEvents.recipes(event => 
    {
        // Shaped Debris Recipe
        event.shaped(
            Item.of('minecraft:netherite_scrap'),
            [
                'NNN',
                'NNN',
                'NN '
            ],
            {
                N: 'tconstruct:debris_nugget'
            }
        ).id( 'forge_frontier:shaped/netherite_scrap' )

        // Shapeless Debris Scrap Recipes
        event.custom({
            type:'minecraft:crafting_shapeless',
            ingredients: [
                {
                    item: 'minecraft:netherite_scrap'
                }
            ],
            result: {
                item: 'tconstruct:debris_nugget',
                count: 9
            }
        }).id( 'forge_frontier:shapeless/debris_nugget')

        // New Grout Recipe
        event.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })
        event.remove({ id: 'tconstruct:smeltery/seared/grout'})
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_additions_synthetics:brass_crystal'
                },
                {
                    item: 'minecraft:clay'
                },
                {
                    item: 'minecraft:sand'
                },
                {
                    item: 'minecraft:sand'
                },
                {
                    item: 'minecraft:sand'
                },
                {
                    item: 'minecraft:sand'
                },
                {
                    item: 'minecraft:gravel'
                },
                {
                    item: 'minecraft:gravel'
                },
                {
                    item: 'minecraft:gravel'
                },
                {
                    item: 'minecraft:gravel'
                }
            ],
            results: [
                {
                    item: 'tconstruct:grout',
                    count: 8
                }
            ],
            heatRequirement: "heated"
        }).id('forge_frontier:mixing/grout');

        // New Nether Grout Recipe
        event.remove({ id: 'tconstruct:smeltery/scorched/nether_grout_multiple' })
        event.remove({ id: 'tconstruct:smeltery/scorched/nether_grout'})
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_additions_synthetics:brass_crystal'
                },
                {
                    item: 'minecraft:magma_block'
                },
                {
                    item: 'minecraft:soul_sand'
                },
                {
                    item: 'minecraft:soul_sand'
                },
                {
                    item: 'minecraft:soul_sand'
                },
                {
                    item: 'minecraft:soul_sand'
                },
                {
                    item: 'minecraft:gravel'
                },
                {
                    item: 'minecraft:gravel'
                },
                {
                    item: 'minecraft:gravel'
                },
                {
                    item: 'minecraft:gravel'
                }
            ],
            results: [
                {
                    item: 'tconstruct:nether_grout',
                    count: 8
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/nether_grout');

    }
)