ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'createqol:crafting/materials/chromatic_compound_block' })
        event.remove({ id: 'createqol:crafting/materials/shadow_steel_block' })
        event.remove({ id: 'createqol:crafting/materials/refined_radiance_block' })
        event.remove({ id: 'createqol:crafting/materials/chromatic_compound_from_block' })
        event.remove({ id: 'createqol:crafting/materials/shadow_steel_from_block' })
        event.remove({ id: 'createqol:crafting/materials/refined_radiance_from_block' })
        event.remove({ id: 'createqol:item_application/refined_radiance_casing_from_log' })
        event.remove({ id: 'createqol:item_application/refined_radiance_casing_from_wood' })
        event.remove({ id: 'createqol:item_application/shadow_steel_casing_from_log' })
        event.remove({ id: 'createqol:item_application/shadow_steel_casing_from_wood' })
    }
)