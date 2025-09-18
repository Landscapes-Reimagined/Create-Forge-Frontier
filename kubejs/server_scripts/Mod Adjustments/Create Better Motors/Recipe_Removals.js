ServerEvents.recipes(event => 
    {
        // Recipes not needed for this pack
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/andesite_alternator' })
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/copper_alternator' })
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/brass_alternator' })
            event.remove({ id: 'create_better_motors:items/mechanical_crafting/upgrades/andesite_alternator' })
            event.remove({ id: 'create_better_motors:items/mechanical_crafting/upgrades/copper_alternator' })
            event.remove({ id: 'create_better_motors:items/mechanical_crafting/upgrades/brass_alternator' })
    }
)