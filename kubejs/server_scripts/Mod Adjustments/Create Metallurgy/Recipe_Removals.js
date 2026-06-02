ServerEvents.recipes(event => 
    {
        event.remove({ id: 'createmetallurgy:crafting/materials/tungsten_wire' })
        event.remove({ id: 'createmetallurgy:crushing/wolframite_ore' })
    }
)