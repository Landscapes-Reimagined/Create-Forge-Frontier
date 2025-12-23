ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove ({ id: 'create_new_age:shaped/basic_motor'})
        event.remove ({ id: 'create_new_age:shaped/advanced_motor'})
        event.remove ({ id: 'create_new_age:mechanical_crafting/reinforced_motor'})
        event.remove ({ id: 'create_new_age:shaped/basic_motor_extension'})
        event.remove ({ id: 'create_new_age:mechanical_crafting/advanced_motor_extension'})

        // Shaped Recipes for Overcharged Blocks
        const overchargedBlocks = {
            overcharged_iron_block: "create_new_age:overcharged_iron",
            overcharged_gold_block: "create_new_age:overcharged_gold",
            overcharged_diamond_block: "create_new_age:overcharged_diamond",
            overcharged_netherite_block: "forge_frontier:overcharged_netherite_ingot"
        };

        Object.entries(overchargedBlocks).forEach(([block, material]) => {
            event.shaped(Item.of(`forge_frontier:${block}`), ["AAA", "AAA", "AAA"], { A: material })
                .id(`forge_frontier:shaped/${block}`);
        });

        // Shapeless Recipes for Overcharged Materials
        Object.entries(overchargedBlocks).forEach(([block, material]) => {
            event.custom({
                type: "minecraft:crafting_shapeless",
                ingredients: [{ item: `forge_frontier:${block}` }],
                result: { item: material, count: 9 }
            }).id(`forge_frontier:shapeless/${block}`);
        });
        
        // Basic Solar Heating Plate Recipe
        event.remove ({ id: 'create_new_age:shaped/basic_solar_heating_plate'})
            event.shaped(
            Item.of('create_new_age:basic_solar_heating_plate'),
            [
                'GGG',
                'ISI',
                'III'
            ],
            {
                G: '#forge:glass',
                I: 'create_new_age:overcharged_iron',
                S: 'create_new_age:stirling_engine'
            }
        ).id( 'forge_frontier:shaped/basic_solar_heating_plate' )
        
        // Advanced Solar Heating Plate Recipe
        event.remove ({ id: 'create_new_age:shaped/advanced_solar_heating_plate'})
            event.shaped(
            Item.of('create_new_age:advanced_solar_heating_plate'),
            [
                'GGG',
                'DSD',
                'DDD'
            ],
            {
                G: '#forge:glass',
                D: 'create_new_age:overcharged_diamond',
                S: 'create_new_age:basic_solar_heating_plate'
            }
        ).id( 'forge_frontier:shaped/advanced_solar_heating_plate' )   
    }
);