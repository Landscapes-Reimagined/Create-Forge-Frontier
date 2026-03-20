ServerEvents.recipes(event=>
    {
        event.remove({ id: 'refinedstorage:raw_basic_processor' })
        event.remove({ id: 'refinedstorage:raw_improved_processor' })
        event.remove({ id: 'refinedstorage:raw_advanced_processor' })
        event.remove({ id: 'extrastorage:raw_neural_processor' })
    }
)