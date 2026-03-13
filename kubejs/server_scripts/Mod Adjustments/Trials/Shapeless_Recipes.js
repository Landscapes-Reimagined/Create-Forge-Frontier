ServerEvents.recipes(event => 
    {
        // Remove all Trials recipes if the mod is loaded
        if (!Platform.isLoaded('trials')) return;

        const trialsToCopperAge = {
            'trials:chiseled_copper': 'minecraft:chiseled_copper',
            'trials:chiseled_copper_exposed': 'minecraft:exposed_chiseled_copper',
            'trials:chiseled_copper_weathered': 'minecraft:weathered_chiseled_copper',
            'trials:chiseled_copper_oxidized': 'minecraft:oxidized_chiseled_copper',
            'trials:waxed_chiseled_copper': 'minecraft:waxed_chiseled_copper',
            'trials:waxed_chiseled_copper_exposed': 'minecraft:waxed_exposed_chiseled_copper',
            'trials:waxed_chiseled_copper_weathered': 'minecraft:waxed_weathered_chiseled_copper',
            'trials:waxed_chiseled_copper_oxidized': 'minecraft:waxed_oxidized_chiseled_copper',

            'trials:copper_grate': 'minecraft:copper_grate',
            'trials:copper_grate_exposed': 'minecraft:exposed_copper_grate',
            'trials:copper_grate_weathered': 'minecraft:weathered_copper_grate',
            'trials:copper_grate_oxidized': 'minecraft:oxidized_copper_grate',
            'trials:waxed_copper_grate': 'minecraft:waxed_copper_grate',
            'trials:waxed_copper_grate_exposed': 'minecraft:waxed_exposed_copper_grate',
            'trials:waxed_copper_grate_weathered': 'minecraft:waxed_weathered_copper_grate',
            'trials:waxed_copper_grate_oxidized': 'minecraft:waxed_oxidized_copper_grate',

            'trials:copper_trapdoor': 'minecraft:copper_trapdoor',
            'trials:copper_trapdoor_exposed': 'minecraft:exposed_copper_trapdoor',
            'trials:copper_trapdoor_weathered': 'minecraft:weathered_copper_trapdoor',
            'trials:copper_trapdoor_oxidized': 'minecraft:oxidized_copper_trapdoor',
            'trials:waxed_copper_trapdoor': 'minecraft:waxed_copper_trapdoor',
            'trials:waxed_copper_trapdoor_exposed': 'minecraft:waxed_exposed_copper_trapdoor',
            'trials:waxed_copper_trapdoor_weathered': 'minecraft:waxed_weathered_copper_trapdoor',
            'trials:waxed_copper_trapdoor_oxidized': 'minecraft:waxed_oxidized_copper_trapdoor',

            'trials:copper_door': 'minecraft:copper_door',
            'trials:copper_door_exposed': 'minecraft:exposed_copper_door',
            'trials:copper_door_weathered': 'minecraft:weathered_copper_door',
            'trials:copper_door_oxidized': 'minecraft:oxidized_copper_door',
            'trials:waxed_copper_door': 'minecraft:waxed_copper_door',
            'trials:waxed_copper_door_exposed': 'minecraft:waxed_exposed_copper_door',
            'trials:waxed_copper_door_weathered': 'minecraft:waxed_weathered_copper_door',
            'trials:waxed_copper_door_oxidized': 'minecraft:waxed_oxidized_copper_door',

            'trials:copper_bulb': 'minecraft:copper_bulb',
            'trials:copper_bulb_exposed': 'minecraft:exposed_copper_bulb',
            'trials:copper_bulb_weathered': 'minecraft:weathered_copper_bulb',
            'trials:copper_bulb_oxidized': 'minecraft:oxidized_copper_bulb',
            'trials:waxed_copper_bulb': 'minecraft:waxed_copper_bulb',
            'trials:waxed_copper_bulb_exposed': 'minecraft:waxed_exposed_copper_bulb',
            'trials:waxed_copper_bulb_weathered': 'minecraft:waxed_weathered_copper_bulb',
            'trials:waxed_copper_bulb_oxidized': 'minecraft:waxed_oxidized_copper_bulb'
        };

        // Remove all crafting recipes for the Trials items
        Object.keys(trialsToCopperAge).forEach(trialsItem => 
            {
                event.remove({ output: trialsItem });
            });

        // Add shapeless conversion recipes from Trials -> Copper Age Backport versions
        Object.entries(trialsToCopperAge).forEach(([trialsItem, copperAgeItem]) => 
            {
                event.shapeless(Item.of(copperAgeItem), [trialsItem])
                    .id(`forge_frontier:trials_conversion/${trialsItem.replace(':', '_')}`);
            });
    }
);