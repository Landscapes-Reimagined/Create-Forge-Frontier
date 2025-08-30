ServerEvents.tags('worldgen/structure', event => 
    {
        // Gives Hopo Structures Ruined Portal Tag
            event.add('minecraft:ruined_portal', 'hopo:portal');
            event.add('minecraft:ruined_portal', 'hopo:portal_deepslate');
            event.add('minecraft:ruined_portal', 'hopo:portal_dripstone');
            event.add('minecraft:ruined_portal', 'hopo:portal_lush');
    }
)