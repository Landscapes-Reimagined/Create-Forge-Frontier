ServerEvents.recipes(event => 
    {

        // Create Goggles Recipe Removals
        event.remove({ id: 'creategoggles:smithing_template_duplicate' })
        event.remove({ id: 'creategoggles:smithing_template_single' })

        // Vanilla Recipe Removals
        event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
        event.remove({ id: 'minecraft:sentry_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:vex_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:wild_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:coast_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:dune_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:wayfinder_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:raiser_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:shaper_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:host_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:ward_armor_trim_smithing_template'})
        event.remove({ id: 'minecraft:silence_armor_trim_smithing_template' })
        event.remove({ id: 'minecraft:tide_armor_trim_smithing_template'})
        event.remove({ id: 'minecraft:snout_armor_trim_smithing_template'})
        event.remove({ id: 'minecraft:rib_armor_trim_smithing_template'})
        event.remove({ id: 'minecraft:eye_armor_trim_smithing_template'})
        event.remove({ id: 'minecraft:spire_armor_trim_smithing_template'})

        // Quark Recipe Removal
        event.remove({ id: 'quark:tools/crafting/rune_duplication' })

        // Ethium Recipe Removals
        event.remove({ id: 'create_ethium:smithing_template_recipe_2' })
        event.remove({ id: 'create_ethium:smithing_template_recipe' })

        // AE2 Recipe Removal
        event.remove({ id: 'ae2:tools/fluix_upgrade_smithing_template' })

        // Cataclysm Recipe Removals
        event.remove({ id: 'cataclysm:ignitium_upgrade_smithing_template' })
        event.remove({ id: 'cataclysm:cursium_upgrade_smithing_template' })

        // Unusual End Recipe Removals
        event.remove({ id: 'unusualend:ancient_trim_duplication' })
        event.remove({ id: 'unusualend:pearlescent_upgrade_duplication' })

        // Deeper Darker Recipe Removal
        event.remove({ id: 'deeperdarker:warden_upgrade_smithing_template' })

        // Alex's Caves Recipe Removal
        event.remove({ id: 'alexscaves:polarity_armor_trim_smithing_template'})

        // Neapolitan Recipe Removal
        event.remove({ id: 'neapolitan:banana/primal_armor_trim_smithing_template'})

        // Trials Recipe Removals
        event.remove({ id: 'trials:bolt_trim_template' })
        event.remove({ id: 'trials:flow_trim_template'})

    }
)