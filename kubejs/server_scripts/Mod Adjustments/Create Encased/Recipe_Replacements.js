ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'createcasing',
                input: 'create:refined_radiance_casing'
            },
            'create:refined_radiance_casing',
            'create_dd:refined_radiance_casing'
        )

        event.replaceInput(
            {
                mod: 'createcasing',
                input: 'create:shadow_steel_casing'
            },
            'create:shadow_steel_casing',
            'create_dd:shadow_steel_casing'
        )
    }
)