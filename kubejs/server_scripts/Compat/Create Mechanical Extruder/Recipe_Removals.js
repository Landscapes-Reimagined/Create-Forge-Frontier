ServerEvents.recipes(event=>
    {
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/limestone' })
            event.remove({ id: 'create_mechanical_extruder:extruding/limestone' })
            event.remove({ id: 'create_mechanical_extruder:extruding/stone' })
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/blackstone' })
            event.remove({ id: 'create_mechanical_extruder:extruding/cobblestone' })
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/deepslate' })
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/dripstone' })
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/calcite' })
            event.remove({ id: 'create_mechanical_extruder:extruding/basalt' })
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/gabbro' })
            
    }
)