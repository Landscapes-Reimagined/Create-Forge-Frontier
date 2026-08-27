ServerEvents.recipes(event => 
    {
        // Sanding Catalyst Recipe Removals
            event.remove({ id: 'create_dd:compacting/steel_ingot'})
            event.remove({ id: 'create_dd:crushing/cobble_asurine'})
            event.remove({ id: 'create_dd:crushing/cobble_crimsite'})
            event.remove({ id: 'create_dd:crushing/cobble_ochrum'})
            event.remove({ id: 'create_dd:crushing/cobble_potassic'})
            event.remove({ id: 'create_dd:crushing/cobble_veridium'})
    }
)