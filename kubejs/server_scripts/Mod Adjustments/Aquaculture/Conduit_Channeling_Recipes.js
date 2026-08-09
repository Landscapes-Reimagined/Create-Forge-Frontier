ServerEvents.recipes(event => 
    {
        // Neptunium Nugget Recipe
            event.custom(
                {
                    type: 'create_aquatic_ambitions:channeling',
                    ingredients: [
                        {
                            item: "create_enchantment_industry:super_experience_nugget"
                        }
                    ],
                    results: [
                        {
                            item: 'aquaculture:neptunium_nugget'
                        }
                    ]
                }
            ).id('forge_frontier:channeling/neptunium_nugget')

    }
)