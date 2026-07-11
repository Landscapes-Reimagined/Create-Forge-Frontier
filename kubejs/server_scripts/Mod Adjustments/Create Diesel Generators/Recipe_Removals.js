ServerEvents.recipes(event => 
    {
        event.remove({ id: 'createdieselgenerators:crafting/wire_cutters' })
        event.remove({ id: 'createdieselgenerators:crafting/hammer' })  
        event.remove({ id: 'createdieselgenerators:compacting/plant_oil' })
        event.remove({ id: 'createdieselgenerators:cutting/bowl_mold' })
        event.remove({ id: 'createdieselgenerators:cutting/lines_mold' })
        event.remove({ id: 'createdieselgenerators:cutting/chain_mold' })
        event.remove({ id: 'createdieselgenerators:cutting/bar_mold' })
    }
)