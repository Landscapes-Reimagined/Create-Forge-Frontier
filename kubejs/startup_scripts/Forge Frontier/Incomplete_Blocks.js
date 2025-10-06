StartupEvents.registry('block', event => 
    {
        // Incomplete Dreadful Dirt
            event.create('mob_grinding_utils:incomplete_dreadful_dirt')
                .displayName('Incomplete Dreadful Dirt')
                .soundType('metal') 
                .mapColor('Stone') 
                .hardness(2.0)
                .model('forge_frontier:block/incomplete_dreadful_dirt')
                .requiresTool(true)
                .renderType('solid')
                .tagBlock("mineable/shovel")
                .fullBlock(true);
            
        // Incomplete Delightful Dirt
            event.create('mob_grinding_utils:incomplete_delightful_dirt')
                .displayName('Incomplete Delightful Dirt')
                .soundType('metal') 
                .mapColor('Stone') 
                .hardness(2.0)
                .model('forge_frontier:block/incomplete_delightful_dirt')
                .requiresTool(true)
                .renderType('solid')
                .tagBlock("mineable/shovel")
                .fullBlock(true);     
    }
)