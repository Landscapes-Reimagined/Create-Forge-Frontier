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
            { id: 'forge_frontier:incomplete_conveyor_boots', name: 'Incomplete Conveyor Boots' },
            { id: 'forge_frontier:incomplete_flux_dust', name: 'Incomplete Flux Dust' },
            { id: 'forge_frontier:incomplete_totem_body', name: 'Incomplete Totem Body' },
            { id: 'forge_frontier:incomplete_totem_body_casing', name: 'Incomplete Totem Body Casing' },
            { id: 'forge_frontier:incomplete_totem_head', name: 'Incomplete Totem Head' },
            { id: 'forge_frontier:incomplete_totem_head_casing', name: 'Incomplete Totem Head Casing' },
            { id: 'forge_frontier:totem_body', name: 'Totem Body' },
            { id: 'forge_frontier:totem_body_casing', name: 'Totem Body Casing' },
            { id: 'forge_frontier:totem_head', name: 'Totem Head' },
            { id: 'forge_frontier:totem_head_casing', name: 'Totem Head Casing' },

            // Pretty Pipes and Fluid Items
            { id: 'forge_frontier:incomplete_blank_module', name: 'Incomplete Blank Module' },
            { id: 'forge_frontier:incomplete_low_extraction_module', name: 'Incomplete Low Extraction Module' },
            { id: 'forge_frontier:incomplete_low_filter_module', name: 'Incomplete Low Filter Module' },
            { id: 'forge_frontier:incomplete_low_high_priority_module', name: 'Incomplete Low High Priority Module' },
            { id: 'forge_frontier:incomplete_medium_high_priority_module', name: 'Incomplete Medium High Priority Module' },
            { id: 'forge_frontier:incomplete_high_high_priority_module', name: 'Incomplete High High Priority Module' },
            { id: 'forge_frontier:incomplete_low_low_priority_module', name: 'Incomplete Low Low Priority Module' },
            { id: 'forge_frontier:incomplete_low_retrieval_module', name: 'Incomplete Low Retrieval Module' },
            { id: 'forge_frontier:incomplete_low_speed_module', name: 'Incomplete Low Speed Module' },
            { id: 'forge_frontier:incomplete_medium_extraction_module', name: 'Incomplete Medium Extraction Module' },
            { id: 'forge_frontier:incomplete_medium_filter_module', name: 'Incomplete Medium Filter Module' },
            { id: 'forge_frontier:incomplete_medium_low_priority_module', name: 'Incomplete Medium Low Priority Module' },
            { id: 'forge_frontier:incomplete_medium_retrieval_module', name: 'Incomplete Medium Retrieval Module' },
            { id: 'forge_frontier:incomplete_medium_speed_module', name: 'Incomplete Medium Speed Module' },
            { id: 'forge_frontier:incomplete_high_extraction_module', name: 'Incomplete High Extraction Module' },
            { id: 'forge_frontier:incomplete_high_filter_module', name: 'Incomplete High Filter Module' },
            { id: 'forge_frontier:incomplete_high_low_priority_module', name: 'Incomplete High Low Priority Module' },
            { id: 'forge_frontier:incomplete_high_retrieval_module', name: 'Incomplete High Retrieval Module' },
            { id: 'forge_frontier:incomplete_high_speed_module', name: 'Incomplete High Speed Module' },
            { id: 'forge_frontier:incomplete_damage_filter_modifier', name: 'Incomplete Damage Filter Modifier' },
            { id: 'forge_frontier:incomplete_filter_increase_modifier', name: 'Incomplete Filter Increase Modifier' },
            { id: 'forge_frontier:incomplete_mod_filter_modifier', name: 'Incomplete Mod Filter Modifier' },
            { id: 'forge_frontier:incomplete_nbt_filter_modifier', name: 'Incomplete NBT Filter Modifier' },
            { id: 'forge_frontier:incomplete_random_sorting_modifier', name: 'Incomplete Random Sorting Modifier' },
            { id: 'forge_frontier:incomplete_redstone_module', name: 'Incomplete Redstone Module' },
            { id: 'forge_frontier:incomplete_round_robin_sorting_modifier', name: 'Incomplete Round Robin Sorting Modifier' },
            { id: 'forge_frontier:incomplete_stack_size_module', name: 'Incomplete Stack Size Module' },
            { id: 'forge_frontier:incomplete_tag_filter_modifier', name: 'Incomplete Tag Filter Modifier' },
            { id: 'forge_frontier:incomplete_low_fluid_extraction_module', name: 'Incomplete Low Fluid Extraction Module' },
            { id: 'forge_frontier:incomplete_low_fluid_filter_module', name: 'Incomplete Low Fluid Filter Module' },
            { id: 'forge_frontier:incomplete_low_fluid_retrieval_module', name: 'Incomplete Low Fluid Retrieval Module' },
            { id: 'forge_frontier:incomplete_medium_fluid_extraction_module', name: 'Incomplete Medium Fluid Extraction Module' },
            { id: 'forge_frontier:incomplete_medium_fluid_filter_module', name: 'Incomplete Medium Fluid Filter Module' },
            { id: 'forge_frontier:incomplete_medium_fluid_retrieval_module', name: 'Incomplete Medium Fluid Retrieval Module' },
            { id: 'forge_frontier:incomplete_high_fluid_extraction_module', name: 'Incomplete High Fluid Extraction Module' },
            { id: 'forge_frontier:incomplete_high_fluid_filter_module', name: 'Incomplete High Fluid Filter Module' },
            { id: 'forge_frontier:incomplete_high_fluid_retrieval_module', name: 'Incomplete High Fluid Retrieval Module' },
        ];

        items.forEach(item => {
            event.create(item.id)
                .displayName(item.name)
                .maxStackSize(1)
                .texture(`forge_frontier:item/incomplete_items/${item.id.split(':')[1]}`);
        });

    }
);