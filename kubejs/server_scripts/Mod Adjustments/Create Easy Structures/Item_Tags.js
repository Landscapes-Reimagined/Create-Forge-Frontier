ServerEvents.tags('item', event => 
    {
        event.add('forge_frontier:repair_track', [
            'minecraft:iron_nugget',
            'create:zinc_nugget'
        ])
    }
)