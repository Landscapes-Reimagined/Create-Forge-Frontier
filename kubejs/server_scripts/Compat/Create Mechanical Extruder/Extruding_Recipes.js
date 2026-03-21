ServerEvents.recipes(event => 
    {
        // Crimsite
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/crimsite_cobble' })
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:strawberry_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_crimsite_vent'
                },
                result: {
                item: 'create:crimsite'
                },
                
            }).id('forge_frontier:extruding/crimsite')

        // Scoria
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scoria_milkshake' })
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scoria' })
            event.remove({ id: 'create_mechanical_extruder:extruding/scoria'})

            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:chocolate_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_scoria_vent'
                },
                result: {
                item: 'create:scoria'
                },
                
            }).id('forge_frontier:extruding/scoria')

        // Scorchia
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/scorchia' })
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:hot_chocolate',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_scorchia_vent'
                },
                result: {
                item: 'create:scorchia'
                },
                
            }).id('forge_frontier:extruding/scorchia')

        // Potassic
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/potassic_cobble' })
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:vanilla_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_potassic_vent'
                },
                result: {
                item: 'create_dd:potassic'
                },
                
            }).id('forge_frontier:extruding/potassic')

        // Asurine
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/asurine_cobble' })
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:cream',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_asurine_vent'
                },
                result: {
                item: 'create:asurine'
                },
                
            }).id('forge_frontier:extruding/asurine')

        // Ochrum
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/ochrum_cobble' })
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:glowberry_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_ochrum_vent'
                },
                result: {
                item: 'create:ochrum'
                },
                
            }).id('forge_frontier:extruding/ochrum')

        // Veridium
            event.remove({ id: 'create_dd:acompat/create_mechanical_extruder/extruding/veridium_cobble' })
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:caramel_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_veridium_vent'
                },
                result: {
                item: 'create:veridium'
                },
                
            }).id('forge_frontier:extruding/veridium')

        // Crying Obsidian
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:chromatic_waste',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'minecraft:crying_obsidian'
                },
                result: {
                item: 'minecraft:crying_obsidian'
                },
                
            }).id('forge_frontier:extruding/crying_obsidian')

        // Obsidian
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_dd:chromatic_waste',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'minecraft:obsidian'
                },
                result: {
                item: 'minecraft:obsidian'
                },
                
            }).id('forge_frontier:extruding/obsidian')

        // Verdantine
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_confectionery:white_chocolate',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_verdantine_vent'
                },
                result: {
                item: 'forge_frontier:verdantine'
                },
                
            }).id('forge_frontier:extruding/verdantine')

        // Glacium
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_confectionery:black_chocolate',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_glacium_vent'
                },
                result: {
                item: 'forge_frontier:glacium'
                },
                
            }).id('forge_frontier:extruding/glacium')

        // Ancient Debris
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'forge_frontier:neapolitan_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_ancient_debris_vent'
                },
                result: {
                item: 'minecraft:ancient_debris'
                },
                
            }).id('forge_frontier:extruding/ancient_debris')

        // Resonite
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'resonant_synthesis:resonarium',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_resonite_vent'
                },
                result: {
                item: 'forge_frontier:resonite'
                },
                
            }).id('forge_frontier:extruding/resonite')
            
        // Aubrum
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'forge_frontier:cheese',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_aubrum_vent'
                },
                result: {
                item: 'forge_frontier:aubrum'
                },
                
            }).id('forge_frontier:extruding/aubrum')
            
        // Pyroclast
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'forge_frontier:adzuki_milkshake', 
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_pyroclast_vent'
                },
                result: {
                item: 'forge_frontier:pyroclast'
                },
                
            }).id('forge_frontier:extruding/pyroclast')
            
        // Frostite
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'brewinandchewin:dread_nog',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_frostite_vent'
                },
                result: {
                item: 'forge_frontier:frostite'
                },
                
            }).id('forge_frontier:extruding/frostite')

        // Stellaris
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'forge_frontier:pomegranate_milkshake',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_stellaris_vent'
                },
                result: {
                item: 'forge_frontier:stellaris'
                },
                
            }).id('forge_frontier:extruding/stellaris')
            
        // Guanite
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'sliceanddice:fertilizer',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_guanite_vent'
                },
                result: {
                item: 'forge_frontier:guanite'
                },
                
            }).id('forge_frontier:extruding/guanite')
            
        // Pearlyte
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_pearlyte_vent'
                },
                result: {
                item: 'forge_frontier:pearlyte'
                },
                
            }).id('forge_frontier:extruding/pearlyte')
            
        // Amberlite
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create:honey',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:water',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_amberlite_vent'
                },
                result: {
                item: 'forge_frontier:amberlite'
                },
                
            }).id('forge_frontier:extruding/amberlite')
            
        // Azurnium
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'createmetallurgy:molten_iron',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_azurnium_vent'
                },
                result: {
                item: 'forge_frontier:azurnium'
                },
                
            }).id('forge_frontier:extruding/azurnium')

        // Neodymrium
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'createmetallurgy:molten_iron',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_neodymrium_vent'
                },
                result: {
                item: 'forge_frontier:neodymrium'
                },
                
            }).id('forge_frontier:extruding/neodymrium')      

        // Uraniumnite
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'alexscaves:acid',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_uraniumnite_vent'
                },
                result: {
                item: 'forge_frontier:uraniumnite'
                },
                
            }).id('forge_frontier:extruding/uraniumnite')  

        // Sulphite
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'alexscaves:acid',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_sulphite_vent'
                },
                result: {
                item: 'forge_frontier:sulphite'
                },
                
            }).id('forge_frontier:extruding/sulphite')

        // Lost Debris
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: [
                {
                    fluid: 'create_ethium:chorus_nectar_fluid',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 1000
                }
                ],
                catalyst: {
                item: 'create_resource_vents:active_lost_debris_vent'
                },
                result: {
                item: 'create_ethium:lost_debris'
                },
                
            }).id('forge_frontier:extruding/lost_debris')
    }
)