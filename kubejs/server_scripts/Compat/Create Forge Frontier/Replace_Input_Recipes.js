ServerEvents.recipes(event =>
    {
        const mods = [
            'createdeco',
            'create_dd'
        ];

        const types = [
            { name: 'sheet', tag: '#forge:plates/industrial_iron' },
            { name: 'nugget', tag: '#forge:nuggets/industrial_iron' },
            { name: 'ingot', tag: '#forge:ingots/industrial_iron' }
        ];

        mods.forEach(mod =>
            {
                types.forEach(type =>
                    {
                        const itemId = `${mod}:industrial_iron_${type.name}`;

                        event.replaceInput(
                            { input: itemId },
                            itemId,
                            type.tag
                        );
                    }
                );
            }
        );
    }
);