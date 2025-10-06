ServerEvents.recipes(event => 
    {
        // Sanding Catalyst Recipe Removals
            event.remove({ id: 'create_connected:item_application/sanding_castlyst_from_empty_using_deployer' })
            event.remove({ id: 'create_connected:item_application/sanding_catalyst_from_empty'})
            event.remove({ id: 'create_dd:compacting/steel_ingot'})
    }
)