ItemEvents.tooltip(event => {

    event.add(
        'create_unbreakable:irromolding',
        Text.gold('Makes tools permanently Unbreakable.')
    )

    event.add(
        'create_unbreakable:irromolding',
        Text.darkGray('Incompatible with ')
            .append(Text.lightPurple('Unbreaking'))
            .append(Text.darkGray(' and '))
            .append(Text.aqua('Mending'))
            .append(Text.darkGray('.'))
    )

})