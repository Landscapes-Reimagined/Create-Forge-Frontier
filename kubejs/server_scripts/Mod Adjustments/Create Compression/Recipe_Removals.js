ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'createcompression:block/cc/shadow_steel_block/compress' })
        event.remove({ id: 'createcompression:block/cc/shadow_steel_block/decompress' })
        event.remove({ id: 'createcompression:block/cc/refined_radiance_block/compress' })
        event.remove({ id: 'createcompression:block/cc/refined_radiance_block/decompress' })
    }
)