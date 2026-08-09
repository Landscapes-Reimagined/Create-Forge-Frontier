ServerEvents.recipes(event => 
    {   
        // Forces Vanilla Enderchest Recipe
            event.remove({ id: 'minecraft:ender_chest'})
            event.shaped(
            Item.of('minecraft:ender_chest'),
            [
                'OOO',
                'OEO',
                'OOO'
            ],
            {
                O : "#forge:obsidian",
                E: "minecraft:ender_eye"
            }
            ).id('forge_frontier:shaped/ender_chest');

        // Compat Bookshelf Recipe
            event.shaped(
                Item.of('minecraft:bookshelf'),
                [
                    'PPP',
                    'BBB',
                    'PPP'
                ],
                {
                    P: "#minecraft:planks",
                    B: "minecraft:book"
                }
            ).id('forge_frontier:shaped/bookshelf')

        // Compat Beehive Recipe
            event.shaped(
                Item.of("minecraft:beehive"),
                [
                    'PPP',
                    'HHH',
                    'PPP'
                ],
                {
                    P: "#minecraft:planks",
                    H: "minecraft:honeycomb"
                }
            ).id('forge_frontier:shaped/beehive')
    }
)