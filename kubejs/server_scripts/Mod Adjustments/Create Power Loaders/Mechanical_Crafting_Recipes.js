ServerEvents.recipes(event => 
    {
        // Empty Andesite Chunk Loader Recipe
            event.remove({ id: 'create_power_loader:crafting/empty_andesite_chunk_loader'})
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                    'RRR',
                    'RQR',
                    'CCC'
                ],
                key: {
                    R: Ingredient.of('create_new_age:reactor_glass').toJson(),
                    Q: Ingredient.of('createteleporters:quantum_mechanism').toJson(),
                    C: Ingredient.of('create_dd:netherite_casing').toJson()
                },
                result: Ingredient.of('create_power_loader:empty_andesite_chunk_loader').toJson(),
                acceptMirrored: false
            }).id('forge_frontier:mechancial_crafting/empty_andesite_chunk_loader');
    }
)