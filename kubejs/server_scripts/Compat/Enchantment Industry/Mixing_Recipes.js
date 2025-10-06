ServerEvents.recipes(event => 
    {
        // Cognitium to Liquid Experience
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_enchantment_industry:experience_rotor'
                },
                {
                    fluid: 'experienceobelisk:cognitium',
                    amount: 200
                }
            ],
            results: [
                {
                    fluid: 'create_enchantment_industry:experience',
                    amount: 10
                },
                {
                    item: 'create_enchantment_industry:experience_rotor'
                }
            ],
        }).id('forge_frontier:mixing/cognitium_experience_liquid');
    }
)