ServerEvents.recipes(event => 
    {
        // Polished Items Seething Recipes
            const seethingRecipes = [
                {
                    name: "polished_stellarite",
                    input: "create_ethium:stellarite_chunk",
                    output: "create_ethium:polished_stellarite"
                },
                {
                    name: "polished_rose_quartz",
                    input: "create:rose_quartz",
                    output: "create:polished_rose_quartz",
                    remove: true
                },
                {
                    name: "polished_spectral_ruby",
                    input: "create_dd:spectral_ruby",
                    output: "create_dd:polished_spectral_ruby",
                    remove: true
                }
            ];

            seethingRecipes.forEach(recipe => {
                if (recipe.remove) {
                    event.remove({ id: `create_dd:superheating/${recipe.name}` });
                }
                
                event.custom({
                    type: "create_dd:superheating",
                    ingredients: [{ item: recipe.input }],
                    results: [
                        { item: recipe.output },
                        { chance: 0.25, item: recipe.output }
                    ]
                }).id(`forge_frontier:seething/${recipe.name}`);
            });
     
    }
)
