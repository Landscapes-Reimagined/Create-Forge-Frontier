ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'itemfilters:always_false' })
        event.remove({ id: 'itemfilters:always_true' })
        event.remove({ id: 'itemfilters:and' }) 
        event.remove({ id: 'itemfilters:block' }) 
        event.remove({ id: 'itemfilters:custom' }) 
        event.remove({ id: 'itemfilters:damage' }) 
        event.remove({ id: 'itemfilters:id_regex' }) 
        event.remove({ id: 'itemfilters:max_count' }) 
        event.remove({ id: 'itemfilters:mod' }) 
        event.remove({ id: 'itemfilters:not' }) 
        event.remove({ id: 'itemfilters:or' }) 
        event.remove({ id: 'itemfilters:strong_nbt' }) 
        event.remove({ id: 'itemfilters:tag' }) 
        event.remove({ id: 'itemfilters:weak_nbt' }) 
        event.remove({ id: 'itemfilters:xor' }) 
    }
)