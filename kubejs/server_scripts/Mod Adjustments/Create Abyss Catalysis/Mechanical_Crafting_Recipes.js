ServerEvents.recipes(event => 
    {
        // Mechanical Spawner Recipe
            event.remove({ id: 'sculkcatalyticchamber:chamber'})
            event.custom({
                type: "create:mechanical_crafting",
                pattern: [
                    'SDS',
                    'TBT',
                    'sCs',
                    'HBI',
                    'SDS'
                ],
                key: {
                    S: Ingredient.of('minecraft:sculk').toJson(),
                    D: Ingredient.of('deeperdarker:sculk_stone').toJson(),
                    T: Ingredient.of('mob_grinding_utils:tank').toJson(),
                    B: Ingredient.of('create:basin').toJson(),
                    s: Ingredient.of('minecraft:sculk_sensor').toJson(),
                    C: Ingredient.of('create_dd:steel_casing').toJson(),
                    H: Ingredient.of('create:hose_pulley').toJson(),
                    I: Ingredient.of('create:industrial_iron_block').toJson()
                },
                result: Ingredient.of('sculkcatalyticchamber:chamber').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/chamber');
    }
)