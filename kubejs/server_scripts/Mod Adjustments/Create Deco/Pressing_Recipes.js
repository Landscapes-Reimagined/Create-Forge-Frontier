ServerEvents.recipes(event => 
    {
        // Industrial Coin Recipes
            event.remove({ id: 'createdeco:pressing/coins/industrial_iron_coin'})
            event.custom({
                type: 'create:pressing',
                ingredients: [
                    {
                        item: "create_dd:industrial_iron_nugget"
                    }
                ],
                results: [ 
                    {
                        item: "createdeco:industrial_iron_coin"
                    }
                ]
            }).id( 'forge_frontier:pressing/industrial_iron_coin')
    }
)