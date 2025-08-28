ServerEvents.recipes(event => 
    {
        // Removes Not Needed Recipes
            event.remove({ id: 'ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust' })
            event.remove({ id: 'appflux:transform/redstone_crystal'})
    }
)