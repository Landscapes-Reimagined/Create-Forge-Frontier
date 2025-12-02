ServerEvents.recipes(event => 
    {
        // Hyper Experience Block
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'create_enchantment_industry:hyper_experience_block'
                }
                ],
                results: [
                {
                    amount: 27,
                    fluid: 'create_enchantment_industry:hyper_experience'
                }
                ]
            }).id( 'forge_frontier:emptying/hyper_experience_block' )

        // Hyper Experience Nugget
            event.custom({
                type: 'create:emptying',
                ingredients: [
                {
                    item: 'create_enchantment_industry:hyper_experience_nugget'
                }
                ],
                results: [
                {
                    amount: 3,
                    fluid: 'create_enchantment_industry:hyper_experience'
                }
                ]
            }).id( 'forge_frontier:emptying/hyper_experience_nugget' )
    }
)