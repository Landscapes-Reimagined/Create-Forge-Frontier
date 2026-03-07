ServerEvents.recipes(event => 
    {
        event.remove({ id: 'fluxnetworks:basicfluxstorage' })
        event.remove({ id: 'fluxnetworks:herculeanfluxstorage' })
        event.remove({ id: 'fluxnetworks:herculeanfluxstorage' })
    }
)