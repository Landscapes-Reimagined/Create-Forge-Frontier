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

            // Quantum Processors
            { id: 'forge_frontier:incomplete_quantum_processor', name: 'Incomplete Quantum Processor' },
            { id: 'forge_frontier:incomplete_printed_quantum_processor', name: 'Incomplete Printed Quantum Processor' },
            { id: 'forge_frontier:incomplete_quantum_processor_press', name: 'Incomplete Quantum Processor Press' },

            // Energy Processors
            { id: 'forge_frontier:incomplete_energy_processor', name: 'Incomplete Energy Processor' },
            { id: 'forge_frontier:incomplete_printed_energy_processor', name: 'Incomplete Printed Energy Processor' },
            { id: 'forge_frontier:incomplete_energy_processor_press', name: 'Incomplete Energy Processor Press' },

            // Accumulation Processors
            { id: 'forge_frontier:incomplete_accumulation_processor', name: 'Incomplete Accumulation Processor' },
            { id: 'forge_frontier:incomplete_printed_accumulation_processor', name: 'Incomplete Printed Accumulation Processor' },
            { id: 'forge_frontier:incomplete_accumulation_processor_press', name: 'Incomplete Accumulation Processor Press' },

        ];

        items.forEach(item => {
            event.create(item.id)
                .displayName(item.name)
                .maxStackSize(1)
                .texture(`forge_frontier:item/${item.id.split(':')[1]}`);
        });

    }
);