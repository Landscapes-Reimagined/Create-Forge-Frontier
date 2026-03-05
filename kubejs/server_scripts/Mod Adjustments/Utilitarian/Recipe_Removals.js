ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'utilitarian:fluid_hopper' })
        event.remove({ id: 'utilitarian:redstone_clock' })
    }
)