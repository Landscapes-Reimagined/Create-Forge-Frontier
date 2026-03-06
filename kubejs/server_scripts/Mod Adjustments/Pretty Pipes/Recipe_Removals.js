ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'prettypipes:crafting_terminal' })
        event.remove({ id: 'prettypipes:high_crafting_module' })
        event.remove({ id: 'prettypipes:low_crafting_module' })
        event.remove({ id: 'prettypipes:medium_crafting_module' })
        event.remove({ id: 'prettypipes:item_terminal' })
        event.remove({ id: 'prettypipes:high_high_priority_module' })
        event.remove({ id: 'prettypipes:medium_high_priority_module' })
        event.remove({ id: 'prettypipes:pipe_frame' })
    }
)