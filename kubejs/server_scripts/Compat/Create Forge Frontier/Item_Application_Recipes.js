ServerEvents.recipes(event => 
    {
        // Rocket Casing Recipes
            const casingRecipes = [
                {
                    id: 'steel_rocket_casing',
                    ingredients: [
                        { tag: 'forge_frontier:netherite_casing_application' },
                        { tag: 'ad_astra:steel_ingots' }
                    ]
                },
                {
                    id: 'desh_rocket_casing',
                    ingredients: [
                        { item: 'forge_frontier:steel_rocket_casing' },
                        { item: 'ad_astra:desh_ingot' }
                    ]
                },
                {
                    id: 'ostrum_rocket_casing',
                    ingredients: [
                        { item: 'forge_frontier:desh_rocket_casing' },
                        { item: 'ad_astra:ostrum_ingot' }
                    ]
                },
                {
                    id: 'calorite_rocket_casing',
                    ingredients: [
                        { item: 'forge_frontier:ostrum_rocket_casing' },
                        { item: 'ad_astra:calorite_ingot' }
                    ]
                },
                {
                    id: 'malachite_rocket_casing',
                    ingredients: [
                        { item: 'forge_frontier:calorite_rocket_casing' },
                        { item: 'enlightened_end:malachite' }
                    ]
                },
                {
                    id: 'primal_magma_rocket_casing',
                    ingredients: [
                        { item: 'forge_frontier:malachite_rocket_casing' },
                        { item: 'alexscaves:primal_magma' }
                    ]
                },
                {
                    id: 'forge_rocket_casing',
                    ingredients: [
                        { item: 'forge_frontier:primal_magma_rocket_casing' },
                        { item: 'forge_frontier:forge_alloy' }
                    ]
                }
            ];

            casingRecipes.forEach(recipe => {
                event.custom({
                    type: 'create:item_application',
                    ingredients: recipe.ingredients,
                    results: [{ item: `forge_frontier:${recipe.id}` }]
                }).id(`forge_frontier:item_application/${recipe.id}`);
            });
    }
)