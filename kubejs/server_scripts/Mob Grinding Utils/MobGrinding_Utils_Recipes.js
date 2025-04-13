// Mob Grinding Utils Recipe Tweaks
ServerEvents.recipes(event => 
    {

        // Recipe Removals
        event.remove({ id: 'mob_grinding_utils:gm_chicken_feed' })
        event.remove({ id: 'mob_grinding_utils:recipe_nutritious_feed' })
        event.remove({ id: 'mob_grinding_utils:recipe_cursed_feed' })
        event.remove({ id: 'mob_grinding_utils:recipe_mob_swab' })
        event.remove({ id: 'mob_grinding_utils:recipe_entity_spawner' })

    }
)