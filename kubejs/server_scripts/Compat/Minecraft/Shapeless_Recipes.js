ServerEvents.recipes(event => 
    {
        // Any Pearl to Vanilla Pearl
            event.shapeless(
                Item.of('minecraft:ender_pearl'),
                [
                    '#forge:ender_pearls'
                ]
            ).id('forge_frontier:shapeless/ender_pearl')
            
        // Any Dirt to Vanilla Dirt
            event.shapeless(
                Item.of('minecraft:dirt'),
                [
                    '#minecraft:dirt'
                ]
            ).id( 'forge_frontier:shapeless/dirt' )
            
        // Creates Modded Crafting Table Recipe
            event.shapeless(
                Item.of('minecraft:crafting_table'),
                [
                    '#minecraft:planks',
                    '#minecraft:planks',
                    '#minecraft:planks',
                    '#minecraft:planks'
                ]
            ).id( 'forge_frontier:shapeless/crafting_table' )
            
        // Forge Chest to Vanilla Chest Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        tag: 'forge:chests/wooden'
                    }
                ],
                result: {
                    item: 'minecraft:chest',
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/forge_vanilla_chest' )


        // Chipped Barrel to Vanilla Barrel Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        tag: 'chipped:barrel'
                    }
                ],
                result: {
                    item: 'minecraft:barrel',
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/chipped_vanilla_barrel' )

        // Stackable Book to Shapeless Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'handcrafted:stackable_book'
                    }
                ],
                result: {
                    item: 'minecraft:book',
                    count: 4
                }

            }).id( 'forge_frontier:shapeless/stackable_book' )

    	// Bookstack to Shapeless Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: 'beautify:bookstack'
                    }
                ],
                result: {
                    item: 'minecraft:book',
                    count: 3
                }

            }).id( 'forge_frontier:shapeless/bookstack' )
    }
)