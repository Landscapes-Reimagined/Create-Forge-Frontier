ServerEvents.recipes(event => 
    {

        // Item Trash Can Recipe
        event.remove({ id: 'trashcans:item_trash_can' })
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'sss',
                'SPS',
                'SVS',
                'SSS'
            ],
            key: {
                s: Ingredient.of('#ad_astra:steel_plates').toJson(),
                S: Ingredient.of('#forge:ingots/steel').toJson(),
                P: Ingredient.of('create:packager').toJson(),
                V: Ingredient.of('create:item_vault').toJson()
            },
            result: Ingredient.of('trashcans:item_trash_can').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/item_trash_can');  

        // Fluid Trash Can Recipe
        event.remove({ id: 'trashcans:liquid_trash_can' })
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'sss',
                'SPS',
                'STS',
                'SSS'
            ],
            key: {
                s: Ingredient.of('#ad_astra:steel_plates').toJson(),
                S: Ingredient.of('#forge:ingots/steel').toJson(),
                P: Ingredient.of('create:packager').toJson(),
                T: Ingredient.of('create:fluid_tank').toJson()
            },
            result: Ingredient.of('trashcans:liquid_trash_can').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/liquid_trash_can');  

        // Energy Trash Can Recipe
        event.remove({ id: 'trashcans:energy_trash_can' })
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                'sss',
                'SPS',
                'SAS',
                'SSS'
            ],
            key: {
                s: Ingredient.of('#ad_astra:steel_plates').toJson(),
                S: Ingredient.of('#forge:ingots/steel').toJson(),
                P: Ingredient.of('create:packager').toJson(),
                A: Ingredient.of('createaddition:modular_accumulator').toJson()
            },
            result: Ingredient.of('trashcans:energy_trash_can').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/energy_trash_can');  

    }
)