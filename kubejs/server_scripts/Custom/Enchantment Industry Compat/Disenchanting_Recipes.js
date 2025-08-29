ServerEvents.recipes(event => 
    {
        // Crystallized Experience Disenchanting
            event.custom({
                type: "create_enchantment_industry:disenchanting",
                ingredients: [
                    {
                        item: "cagedmobs:crystallized_experience"
                    }
                ],
                results: [
                    {
                        fluid: "create_enchantment_industry:experience",
                        amount: 1.25
                    }
                ]
            }).id('forge_frontier:disenchanting/crystallized_experience');

        // Crystallized Experience Block Disenchanting
            event.custom({
                type: "create_enchantment_industry:disenchanting",
                ingredients: [
                    {
                        item: "cagedmobs:crystallized_experience_block"
                    }
                ],
                results: [
                    {
                        fluid: "create_enchantment_industry:experience",
                        amount: 11.25
                    }
                ]
            }).id('forge_frontier:disenchanting/crystallized_experience_block');
    }
)