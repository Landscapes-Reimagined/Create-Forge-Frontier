ServerEvents.recipes(event => 
    {
        event.remove({ id: 'createdieselgenerators:crafting/wire_cutters' })
        event.remove({ id: 'createdieselgenerators:crafting/hammer' })         
        event.remove({ id: 'createdieselgenerators:cutting/bar_mold' }) 
        event.remove({ id: 'createdieselgenerators:compacting/plant_oil' })
    }
)