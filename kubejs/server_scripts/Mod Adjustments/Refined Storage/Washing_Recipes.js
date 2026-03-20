ServerEvents.recipes(event=>
    {
        event.remove({ id: "refinedstorage:silicon" })
        event.custom({
            type: "create:splashing",
            ingredients: [
                {
                    item: "forge_frontier:moon_gravel"
                }
            ],
            results:
            [
                {
                    item: "refinedstorage:silicon",
                    chance: 0.50
                },
                {
                    item: "ad_astra:cheese",
                    chance: 0.125
                }
            ]
        }).id('forge_frontier:washing/silicon')
    }
)