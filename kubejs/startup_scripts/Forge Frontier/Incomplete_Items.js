StartupEvents.registry('item', event => 
    {
        const items = [
            // Cataclysm Eyes
            { id: 'cataclysm:incomplete_abyss_eye', name: 'Incomplete Abyss Eye' },
            { id: 'cataclysm:incomplete_cursed_eye', name: 'Incomplete Cursed Eye' },
            { id: 'cataclysm:incomplete_desert_eye', name: 'Incomplete Desert Eye' },
            { id: 'cataclysm:incomplete_flame_eye', name: 'Incomplete Flame Eye' },
            { id: 'cataclysm:incomplete_mech_eye', name: 'Incomplete Mech Eye' },
            { id: 'cataclysm:incomplete_monstrous_eye', name: 'Incomplete Monstrous Eye' },
            { id: 'cataclysm:incomplete_storm_eye', name: 'Incomplete Storm Eye' },
            { id: 'cataclysm:incomplete_void_eye', name: 'Incomplete Void Eye' },

            // Random Items
            { id: 'forge_frontier:incomplete_conveyor_boots', name: 'Incomplete Conveyor Boots' }

        ];

        items.forEach(item => {
            event.create(item.id)
                .displayName(item.name)
                .maxStackSize(1)
                .texture(`forge_frontier:item/${item.id.split(':')[1]}`);
        });

    }
);