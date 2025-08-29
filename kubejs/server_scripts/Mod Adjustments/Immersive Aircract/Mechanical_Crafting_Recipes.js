ServerEvents.recipes(event => 
    {
        // Biplane Recipe
            event.remove({ id: 'immersive_aircraft:biplane' })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    '   D ',
                    'D  D ',
                    'AAEBC',
                    'D  D ',
                    '   D '
                ],
                key: {
                    A: Ingredient.of('immersive_aircraft:hull').toJson(),
                    B: Ingredient.of('immersive_aircraft:engine').toJson(),
                    C: Ingredient.of('immersive_aircraft:propeller').toJson(),
                    D: Ingredient.of('immersive_aircraft:sail').toJson(),
                    E: Ingredient.of('#create:seats').toJson()
                },
                result: Ingredient.of('immersive_aircraft:biplane').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/biplane');

        // Airship Recipe
            event.remove({ id: 'immersive_aircraft:airship' })
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'DDDDD',
                    ' E E ',
                    ' AFBC',
                    ' AAA '
                ],
                key: {
                    A: Ingredient.of('immersive_aircraft:hull').toJson(),
                    B: Ingredient.of('immersive_aircraft:engine').toJson(),
                    C: Ingredient.of('create:propeller').toJson(),
                    D: Ingredient.of('immersive_aircraft:sail').toJson(),
                    E: Ingredient.of('minecraft:string').toJson(),
                    F: Ingredient.of('#create:seats').toJson()
                },
                result: Ingredient.of('immersive_aircraft:airship').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/airship');
    }
)