ServerEvents.recipes(event => 
    {
        // Removes Shaped Recipes since it has stone cutting recipes
            event.remove({ id: 'createdeco:andesite_bars_overlay'})
            event.remove({ id: 'createdeco:andesite_mesh_fence'})
            event.remove({ id: 'createdeco:andesite_catwalk_forge'})
            event.remove({ id: 'createdeco:andesite_catwalk_railing_forge'})
            event.remove({ id: 'createdeco:andesite_support_wedge'})
            event.remove({ id: 'createdeco:andesite_hull'})

            event.remove({ id: 'createdeco:zinc_bars_overlay'})
            event.remove({ id: 'createdeco:zinc_mesh_fence'})
            event.remove({ id: 'createdeco:zinc_catwalk_forge'})
            event.remove({ id: 'createdeco:zinc_catwalk_railing_forge'})
            event.remove({ id: 'createdeco:zinc_support_wedge'})
            event.remove({ id: 'createdeco:zinc_hull'})

            event.remove({ id: 'createdeco:industrial_iron_bars_overlay'})
            event.remove({ id: 'createdeco:industrial_iron_mesh_fence'})
            event.remove({ id: 'createdeco:industrial_iron_catwalk_forge'})
            event.remove({ id: 'createdeco:industrial_iron_catwalk_railing_forge'})
            event.remove({ id: 'createdeco:industrial_iron_support_wedge'})
            event.remove({ id: 'createdeco:industrial_iron_hull'})
    }
)