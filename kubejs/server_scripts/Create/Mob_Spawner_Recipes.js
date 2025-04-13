// Create - Mob Spawners Recipe Tweaks
ServerEvents.recipes(event => 
    {
        	// Empty Soul Catcher Shaped Recipe
            event.remove({ id: 'create_mob_spawners:empty_soul_catcher'})
            event.shaped(
                Item.of('create_mob_spawners:empty_soul_catcher'),
                [
                    'BcB',
                    'C W',
                    'BcB'
                ],
                {
                    B: 'create:brass_sheet',
                    c: 'create:cardboard',
                    C: 'create:brass_casing',
                    W: 'create:cogwheel'
                }
            ).id( 'forge_frontier:shaped/empty_soul_catcher' )

            // Mechanical Spawner Mechanical Crafting Recipe
            event.remove({ id: 'create_mob_spawners:mechanical_crafting/mechanical_spawner'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'CBSBC',
                    'cIPIc',
                    'cIRIc',
                    'cIPIc',
                    'CBSBC'
                ],
                key: {
                    C: Ingredient.of('create:brass_casing').toJson(),
                    B: Ingredient.of('create:brass_sheet').toJson(),
                    S: Ingredient.of('create:shaft').toJson(),
                    c: Ingredient.of('minecraft:chain').toJson(),
                    I: Ingredient.of('createdeco:industrial_iron_ingot').toJson(),
                    P: Ingredient.of('create:precision_mechanism').toJson(),
                    R: Ingredient.of('create:refined_radiance').toJson()
                },
                result: Ingredient.of('create_mob_spawners:mechanical_spawner').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/mechanical_spawner');
    }
)