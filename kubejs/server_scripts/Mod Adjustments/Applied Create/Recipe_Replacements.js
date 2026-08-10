ServerEvents.recipes(event => 
    {
        event.replaceInput(
            {
                mod: 'appliedcreate',
                input: "create:cinder_flour"
            },
            "create:cinder_flour",
            'create:electron_tube'
        )
    }
)