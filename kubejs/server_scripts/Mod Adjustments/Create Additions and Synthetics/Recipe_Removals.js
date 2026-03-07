ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'create_additions_synthetics:log_haunting'})
        event.remove({ id: 'create_additions_synthetics:ma_andesite'})
        event.remove({ id: 'create_additions_synthetics:ma_refining'})
        event.remove({ id: 'create_additions_synthetics:ma_casing_log'})
        event.remove({ id: 'create_additions_synthetics:ma_casing_wood'})
        event.remove({ id: 'create_additions_synthetics:ma_alloy_iron'})
        event.remove({ id: 'create_additions_synthetics:ma_alloy_zinc'})
        event.remove({ id: 'create_additions_synthetics:c_qtblock'})
        event.remove({ id: 'create_additions_synthetics:c_qtquartz'})
        event.remove({ id: 'create_additions_synthetics:log_to_dust'})
    }
)