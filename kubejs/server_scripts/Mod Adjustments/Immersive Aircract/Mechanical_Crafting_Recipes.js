ServerEvents.recipes(event => 
    {
        // Biplane Recipe
            event.remove({ id: 'immersive_aircraft:biplane' })
            event.custom({
                type: 'create:mechanical_crafting',
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
                type: 'create:mechanical_crafting',
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

        // Cargo Airship Recipe
            event.remove({ id: 'immersive_aircraft:cargo_airship' })
             event.custom({
                type: 'create:mechanical_crafting',
                accept_mirrored: true,
                pattern: [
                    ' SSS ',
                    'ESSSE',
                    ' T T ',
                    'CCACC',
                    ' BBB '
                ],
                key: {
                    S: Ingredient.of('create:white_sail').toJson(),
                    C: Ingredient.of('minecraft:chest').toJson(),
                    A: Ingredient.of('immersive_aircraft:airship').toJson(),
                    B: Ingredient.of('create:brass_casing').toJson(),
                    T: Ingredient.of('minecraft:string').toJson(),
                    E: Ingredient.of('immersive_aircraft:engine').toJson()
                },
                result: Ingredient.of('immersive_aircraft:cargo_airship').toJson()
             }).id('forge_frontier:mechanical_crafting/cargo_airship')

        // Warship Recipe
             event.remove({ id: 'immersive_aircraft:warship'})
             event.custom({
                type: 'create:mechanical_crafting',
                accept_mirrored: true,
                pattern: [
                    ' SSS ',
                    'QESEQ',
                    ' T T ',
                    'QRARQ',
                    ' RRR '
                ],
                key: {
                    S: Ingredient.of('create:white_sail').toJson(),
                    A: Ingredient.of('immersive_aircraft:cargo_airship').toJson(),
                    R: Ingredient.of('create:railway_casing').toJson(),
                    T: Ingredient.of('minecraft:string').toJson(),
                    E: Ingredient.of('immersive_aircraft:engine').toJson(),
                    Q: Ingredient.of('create:sturdy_sheet').toJson(),
                },
                result: Ingredient.of('immersive_aircraft:warship').toJson()
             }).id('forge_frontier:mechanical_crafting/warpship')

        // Bamboo Hopper
             event.remove({ id: 'immersive_aircraft:bamboo_hopper' })
             event.custom({
                type: 'create:mechanical_crafting',
                accept_mirrored: true,
                pattern: [
                    ' S   S ',
                    ' S   SP',
                    'SSIIIS ',
                    ' S  CCC',
                    ' S Esss',
                    ' S  CCC',
                    'SSIIIS ',
                    ' S   SP',
                    ' S   S '
                ],
                key: {
                    S: Ingredient.of('immersive_aircraft:sail').toJson(),
                    I: Ingredient.of('immersive_aircraft:hull_reinforcement').toJson(),
                    P: Ingredient.of('immersive_aircraft:propeller').toJson(),
                    C: Ingredient.of('create:copper_sheet').toJson(),
                    s: Ingredient.of('#create:seats').toJson(),
                    E: Ingredient.of('immersive_aircraft:engine').toJson()
                },
                result: Ingredient.of('immersive_aircraft:bamboo_hopper').toJson()
             }).id('forge_frontier:mechanical_crafting/bamboo_hopper')
    }
)