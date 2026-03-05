ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'gag:hearthstone' })
        event.remove({ id: 'gag:fishing_dynamite' })
        event.remove({ id: 'gag:mining_dynamite' })
        event.remove({ id: 'gag:sacred_balm' })
        event.remove({ id: 'gag:sacred_balm_from_salve' })
        event.remove({ id: 'gag:sacred_salt' })
        event.remove({ id: 'gag:sacred_salve' })
    }
)