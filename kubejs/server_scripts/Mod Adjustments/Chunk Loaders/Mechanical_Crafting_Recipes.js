ServerEvents.recipes(event => 
    {
        // Chunk Loader Recipes
            // Single Chunk Loader - 1x1

            event.remove({ output: 'chunkloaders:single_chunk_loader' })
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                    'CcC',
                    'cSc',
                    'CcC'
                ],
                key: {
                    S: Ingredient.of("create:shaft").toJson(),
                    c: Ingredient.of("create_dd:blaze_gold").toJson(),
                    C: Ingredient.of("create_dd:blaze_gold_casing").toJson()
                },
                result: Ingredient.of('chunkloaders:single_chunk_loader').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/single_chunk_loader')
    }
)