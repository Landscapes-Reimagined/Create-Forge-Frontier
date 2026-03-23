ServerEvents.tags('worldgen/biome', event => 
    {
        // Additions
            // Luminous Nether
                event.add('forge_frontier:luminous_nether', [
                    'luminous_nether:ash_forest',
                    'luminous_nether:fungal_plains'
                ])
                
            // Regions Unexplored Nether
                event.add('forge_frontier:regions_unexplored_nether', [
                    'regions_unexplored:mycotoxic_undergrowth',
                    'regions_unexplored:blackstone_basin',
                    'regions_unexplored:infernal_holt',
                    'regions_unexplored:glistering_meadow',
                    'regions_unexplored:redstone_abyss'
                ])

            // Ad Astra Ore Vein Biome Linkage
                event.add('forge_frontier:moon_ore_veins', 'ad_astra:lunar_wastelands');
                event.add('forge_frontier:venus_ore_veins', 'ad_astra:venus_wastelands');
                event.add('forge_frontier:glacio_ore_veins', 'ad_astra:glacio_snowy_barrens');

            // Alex's Caves Vein to Biome Linkage
                event.add('forge_frontier:toxic_vein', 'alexscaves:toxic_caves');
                event.add('forge_frontier:abyssal_vein', 'alexscaves:abyssal_chasm');
                event.add('forge_frontier:magnetic_vein', 'alexscaves:magnetic_caves');
                event.add('forge_frontier:primordial_vein', 'alexscaves:primordial_caves');
                event.add('forge_frontier:forlorn_vein', 'alexscaves:forlorn_hollows')

            // Adds New Structure Gen
                event.add('cataclysm:has_structure/burning_arena_biomes', 'ad_astra:mercury_deltas');
                event.add('cataclysm:has_structure/soul_black_smith_biomes', 'ad_astra:martian_polar_caps');
                event.add('cataclysm:has_structure/cursed_pyramid_biomes', 'ad_astra:venus_wastelands');
                event.add('cataclysm:has_structure/ancient_factory_biomes', 'ad_astra:lunar_wastelands');
                event.add('incendium:structure/has_pipeline', 'ad_astra:lunar_wastelands');
                event.add('incendium:structure/has_sanctum', 'ad_astra:glacio_snowy_barrens');
                event.add('incendium:structure/has_reactor', 'ad_astra:venus_wastelands');
                event.add('cataclysm:has_structure/frosted_prison_biomes', 'ad_astra:glacio_ice_peaks')
                
        // Removals
            event.remove('cataclysm:has_structure/burning_arena_biomes', 'minecraft:nether_wastes');

            event.remove('cataclysm:has_structure/soul_black_smith_biomes', [
                'minecraft:crimson_forest',
                'minecraft:nether_wastes',
                'minecraft:soul_sand_valley',
                'minecraft:warped_forest'
            ]);

            event.remove('cataclysm:has_structure/cursed_pyramid_biomes', 'minecraft:desert');

            event.remove('cataclysm:has_structure/ancient_factory_biomes', '#forge:is_underground');

            event.remove('incendium:structure/has_pipeline', [
                'incendium:infernal_dunes',
                'minecraft:basalt_deltas',
                'incendium:toxic_heap'
            ]);

            event.remove('incendium:structure/has_sanctum', 'incendium:quartz_flats');

            event.remove('incendium:structure/has_reactor', [
                'incendium:volcanic_deltas',
                'minecraft:basalt_deltas',
                'incendium:toxic_heap'
            ]);
            
            event.remove('cataclysm:has_structure/frosted_prison_biomes', 'minecraft:snowy_plains')

    }
)