ServerEvents.recipes(event=>
    {
        // Tumbaga Alloy Recipe
        event.shaped(
            Item.of("totemfactory:tumbaga_alloy"),
            [
                'TTT',
                'TTT',
                'TTT'
            ],
            {
                T: "totemfactory:tumbaga_nugget"
            }
        ).id('forge_frontier:shaped/tumbaga')
    }
)