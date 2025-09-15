ServerEvents.recipes(event => 
    {
        // Washing Recipe Removals
        event.remove({ id: 'create:splashing/crushed_raw_gold'})
        event.remove({ id: 'create:splashing/crushed_raw_copper'})
        event.remove({ id: 'create:splashing/crushed_raw_iron'})
        event.remove({ id: 'create:splashing/crushed_raw_zinc'})
        event.remove({ id: 'create_compressed:splashing/crushed_raw_copper_pile'})
        event.remove({ id: 'create_compressed:splashing/crushed_raw_gold_pile'})
        event.remove({ id: 'create_compressed:splashing/crushed_raw_iron_pile'})
        event.remove({ id: 'create_compressed:splashing/crushed_raw_zinc_pile'})
        event.remove({ id: 'create_better_motors:items/washing/reggarfonite_nugget_from_ore'})
    }
)