ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: "create_more_additions:electrum/electrum_mixing_crushed" })
        event.remove({ id: "create_more_additions:electrum/electrum_mixing_ingot" })
    }
)