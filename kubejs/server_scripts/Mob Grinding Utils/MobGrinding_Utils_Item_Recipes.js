// Mob Grinding Utils Item Upgrade Recipe Tweaks
ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'mob_grinding_utils:gm_chicken_feed' })
        event.remove({ id: 'mob_grinding_utils:recipe_nutritious_feed' })
        event.remove({ id: 'mob_grinding_utils:recipe_cursed_feed' })
        event.remove({ id: 'mob_grinding_utils:recipe_mob_swab' })
        event.remove({ id: 'mob_grinding_utils:recipe_spawner_upgrade_height' })
        event.remove({ id: 'mob_grinding_utils:recipe_spawner_upgrade_width' })

        // Fan Height Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_height' })
        event.shaped(
            Item.of('mob_grinding_utils:fan_upgrade_height'),
            [
                'RPR',
                ' P ',
                'RPR'
            ],
            {
                R: 'create:polished_rose_quartz',
                P: 'create:propeller',
            }
        ).id( 'forge_frontier:shaped/fan_upgrade_height' )

        // Fan Width Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_width' })
        event.shaped(
            Item.of('mob_grinding_utils:fan_upgrade_width'),
            [
                'R R',
                'PPP',
                'R R'
            ],
            {
                R: 'create:polished_rose_quartz',
                P: 'create:propeller',
            }
        ).id( 'forge_frontier:shaped/fan_upgrade_width' )

        // Fan Distance Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_speed' })
        event.shaped(
            Item.of('mob_grinding_utils:fan_upgrade_speed'),
            [
                'PRP',
                'RRR',
                'PRP'
            ],
            {
                R: 'create:polished_rose_quartz',
                P: 'create:propeller',
            }
        ).id( 'forge_frontier:shaped/fan_upgrade_speed' )

        // Fire Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_fire' })
        event.shaped(
            Item.of('mob_grinding_utils:saw_upgrade_fire'),
            [
                'BFB',
                'FRF',
                'BFB'
            ],
            {
                B: 'create:brass_nugget',
                F: 'minecraft:fire_charge',
                R: 'create:polished_rose_quartz'
            }
        ).id( 'forge_frontier:shaped/saw_upgrade_fire' )        

        // Smite Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_smite' })
        event.shaped(
            Item.of('mob_grinding_utils:saw_upgrade_smite'),
            [
                'BSB',
                'SRS',
                'BSB'
            ],
            {
                B: 'create:brass_nugget',
                S: 'minecraft:rotten_flesh',
                R: 'create:polished_rose_quartz'
            }
        ).id( 'forge_frontier:shaped/saw_upgrade_smite' )          

        // Arthropods Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_arthropod' })
        event.shaped(
            Item.of('mob_grinding_utils:saw_upgrade_arthropod'),
            [
                'BAB',
                'ARA',
                'BAB'
            ],
            {
                B: 'create:brass_nugget',
                A: 'minecraft:fermented_spider_eye',
                R: 'create:polished_rose_quartz'
            }
        ).id( 'forge_frontier:shaped/saw_upgrade_arthropod' ) 

        // Beheading Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_beheading' })
        event.shaped(
            Item.of('mob_grinding_utils:saw_upgrade_beheading'),
            [
                'BHB',
                'HRH',
                'BHB'
            ],
            {
                B: 'create:brass_nugget',
                H: '#forge:heads',
                R: 'create:polished_rose_quartz'
            }
        ).id( 'forge_frontier:shaped/saw_upgrade_beheading' ) 

        // Looting Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' })
        event.shaped(
            Item.of('mob_grinding_utils:saw_upgrade_looting'),
            [
                'BLB',
                'LRL',
                'BLB'
            ],
            {
                B: 'create:brass_nugget',
                L: 'create:andesite_alloy', // Placeholder for Lapis Alloy
                R: 'create:polished_rose_quartz'
            }
        ).id( 'forge_frontier:shaped/saw_upgrade_looting' )         

        // Sharpness Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness' })
        event.shaped(
            Item.of('mob_grinding_utils:saw_upgrade_sharpness'),
            [
                'BSB',
                'SRS',
                'BSB'
            ],
            {
                B: 'create:brass_nugget',
                S: 'create_sa:experience_sword',
                R: 'create:polished_rose_quartz'
            }
        ).id( 'forge_frontier:shaped/saw_upgrade_sharpness' ) 

        // Radius Upgrade
        event.remove({ id: 'mob_grinding_utils:recipe_absorbtion_upgrade' })
        event.shaped(
            Item.of('mob_grinding_utils:absorption_upgrade'),
            [
                ' P ',
                'PRP',
                'OCO'
            ],
            {
                P: '#forge:ender_pearls',
                R: 'create:polished_rose_quartz',
                O: '#forge:obsidian',
                C: 'create:smart_chute'
            }
        ).id( 'forge_frontier:shaped/absorption_upgrade' )         

    }
)