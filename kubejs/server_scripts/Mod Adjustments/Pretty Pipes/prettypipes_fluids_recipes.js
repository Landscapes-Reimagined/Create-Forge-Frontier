ServerEvents.recipes(event => {
    
    // Ppfluids: High Fluid Extraction Module
    event.remove({id:'ppfluids:high_fluid_extraction_module'})
    event.shaped(Item.of('ppfluids:high_fluid_extraction_module', 1), [
        'GDG',
        'GMG',
        'GGG'
    ], {
        D: 'minecraft:diamond',
        G: 'create:golden_sheet',
        M: 'ppfluids:medium_fluid_extraction_module'
    }).id('forge_frontier:shaped/high_fluid_extraction_module')

    // Ppfluids: High Fluid Filter Module
    event.remove({id:'ppfluids:high_fluid_filter_module'})
    event.shaped(Item.of('ppfluids:high_fluid_filter_module', 1), [
        'GBG',
        'BMB',
        'GBG'
    ], {
        G: 'create:golden_sheet',
        M: 'ppfluids:medium_fluid_filter_module',
        B: 'minecraft:iron_bars'
    }).id('forge_frontier:shaped/high_fluid_filter_module')

    // Ppfluids: High Fluid Retrieval Module
    event.remove({id:'ppfluids:high_fluid_retrieval_module'})
    event.shaped(Item.of('ppfluids:high_fluid_retrieval_module', 1), [
        'LDL',
        'GMG',
        'LGL'
    ], {
        G: 'create:golden_sheet',
        M: 'ppfluids:medium_fluid_retrieval_module',
        D: 'minecraft:diamond',
        L: 'create_compressed:copper_sheet_block'
    }).id('forge_frontier:shaped/high_fluid_retrieval_module')

    // Ppfluids: Low Fluid Extraction Module
    event.remove({id:'ppfluids:low_fluid_extraction_module'})
    event.shaped(Item.of('ppfluids:low_fluid_extraction_module', 1), [
        ' P ',
        'LML',
        ' L '
    ], {
        L: 'create:copper_sheet',
        P: 'minecraft:piston',
        M: 'prettypipes:blank_module'
    }).id('forge_frontier:shaped/low_fluid_extraction_module')

    // Ppfluids: Low Fluid Filter Module
    event.remove({id:'ppfluids:low_fluid_filter_module'})
    event.shaped(Item.of('ppfluids:low_fluid_filter_module', 1), [
        ' H ',
        'LML',
        ' L '
    ], {
        L: 'create:copper_sheet',
        H: 'create:chute',
        M: 'prettypipes:blank_module'
    }).id('forge_frontier:shaped/low_fluid_filter_module')

    // Ppfluids: Low Fluid Retrieval Module
    event.remove({id:'ppfluids:low_fluid_retrieval_module'})
    event.shaped(Item.of('ppfluids:low_fluid_retrieval_module', 1), [
        ' P ',
        'LML',
        ' E '
    ], {
        L: 'create_compressed:copper_sheet_block',
        P: 'minecraft:sticky_piston',
        M: 'prettypipes:blank_module',
        E: '#forge:ender_pearls'
    }).id('forge_frontier:shaped/low_fluid_retrieval_module')

    // Ppfluids: Medium Fluid Extraction Module
    event.remove({id:'ppfluids:medium_fluid_extraction_module'})
    event.shaped(Item.of('ppfluids:medium_fluid_extraction_module', 1), [
        ' I ',
        'IMI',
        ' I '
    ], {
        I: 'create:iron_sheet',
        M: 'ppfluids:low_fluid_extraction_module'
    }).id('forge_frontier:shaped/medium_fluid_extraction_module')

    // Ppfluids: Medium Fluid Filter Module
    event.remove({id:'ppfluids:medium_fluid_filter_module'})
    event.shaped(Item.of('ppfluids:medium_fluid_filter_module', 1), [
        ' B ',
        'IMI',
        ' B '
    ], {
        I: 'create:iron_sheet',
        M: 'ppfluids:low_fluid_filter_module',
        B: 'minecraft:iron_bars'
    }).id('forge_frontier:shaped/medium_fluid_filter_module')

    // Ppfluids: Medium Fluid Retrieval Module
    event.remove({id:'ppfluids:medium_fluid_retrieval_module'})
    event.shaped(Item.of('ppfluids:medium_fluid_retrieval_module', 1), [
        'LLL',
        'IMI',
        ' I '
    ], {
        I: 'create:golden_sheet',
        M: 'ppfluids:low_fluid_retrieval_module',
        L: 'create_compressed:copper_sheet_block'
    }).id('forge_frontier:shaped/medium_fluid_retrieval_module')

})
