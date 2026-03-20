BlockEvents.rightClicked(event => {
    const { block, level, hand } = event
    const item = event.item

    if (hand !== 'MAIN_HAND') return
    if (!item || item.isEmpty()) return
    if (level.isClientSide()) return

    const ventRecipes = [
        {
            vent: 'create_resource_vents:active_asurine_vent',
            input: 'createcompression:compressed_zinc_2x',
            output: Item.of('create_resource_vents:active_asurine_vent', 1),
            consumeInput: true
        }
    ]

    for (const recipe of ventRecipes) {
        if (block.id !== recipe.vent) continue
        if (item.id !== recipe.input) continue

        block.popItem(recipe.output)

        if (recipe.consumeInput) {
            item.shrink(1)
        }

        event.cancel()
        return
    }
})