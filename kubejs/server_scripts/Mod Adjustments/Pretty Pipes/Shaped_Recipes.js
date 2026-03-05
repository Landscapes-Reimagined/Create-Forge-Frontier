ServerEvents.recipes(event => 
    {
        // Pretty Pipes
            // Pretty Pipes: Blank Module
            event.remove({ id: 'prettypipes:blank_module'})
            event.shaped(Item.of('prettypipes:blank_module', 1), [
                'QRQ',
                'SPS',
                'QRQ'
            ], {
                R: 'create:andesite_alloy',
                P: 'prettypipes:pipe',
                S: 'minecraft:andesite_slab',
                Q: 'minecraft:quartz'
            }).id('forge_frontier:shaped/blank_module')

            // Pretty Pipes: Damage Filter Modifier
            event.remove({id:'prettypipes:damage_filter_modifier'})
            event.shaped(Item.of('prettypipes:damage_filter_modifier', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'create_sa:zinc_pickaxe',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/damage_filter_modifier')

            // Pretty Pipes: Filter Increase Modifier
            event.remove({id:'prettypipes:filter_increase_modifier'})
            event.shaped(Item.of('prettypipes:filter_increase_modifier', 1), [
                ' B ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                B: 'minecraft:iron_bars',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/filter_increase_modifier')

            // Pretty Pipes: High Extraction Module
            event.remove({ id: 'prettypipes:high_extraction_module'})
            event.shaped(Item.of('prettypipes:high_extraction_module', 1), [
                'GDG',
                'GMG',
                'GGG'
            ], {
                D: 'minecraft:diamond',
                G: 'create:golden_sheet',
                M: 'prettypipes:medium_extraction_module'
            }).id('forge_frontier:shaped/high_extraction_module')

            // Pretty Pipes: High Filter Module
            event.remove({id:'prettypipes:high_filter_module'})
            event.shaped(Item.of('prettypipes:high_filter_module', 1), [
                'GBG',
                'BMB',
                'GBG'
            ], {
                G: 'create:golden_sheet',
                M: 'prettypipes:medium_filter_module',
                B: 'minecraft:iron_bars'
            }).id('forge_frontier:shaped/high_filter_module')

            // Pretty Pipes: High Low Priority Module
            event.remove({id:'prettypipes:high_low_priority_module'})
            event.shaped(Item.of('prettypipes:high_low_priority_module', 1), [
                'CCC',
                'CMC',
                'CCC'
            ], {
                C: 'minecraft:andesite',
                M: 'prettypipes:medium_low_priority_module'
            }).id('forge_frontier:shaped/high_low_priority_module')

            // Pretty Pipes: High Retrieval Module
            event.remove({id:'prettypipes:high_retrieval_module'})
            event.shaped(Item.of('prettypipes:high_retrieval_module', 1), [
                'RDR',
                'GMG',
                'RGR'
            ], {
                G: 'create:golden_sheet',
                M: 'prettypipes:medium_retrieval_module',
                D: 'minecraft:diamond',
                R: 'create:andesite_alloy_block'
            }).id('forge_frontier:shaped/high_retrieval_module')

            // Pretty Pipes: High Speed Module
            event.remove({id:'prettypipes:high_speed_module'})
            event.shaped(Item.of('prettypipes:high_speed_module', 1), [
                'GBG',
                'BMB',
                'GBG'
            ], {
                G: 'create:golden_sheet',
                M: 'prettypipes:medium_speed_module',
                B: 'minecraft:sugar'
            }).id('forge_frontier:shaped/high_speed_module')

            // Pretty Pipes: Item Terminal
            event.remove({id:'prettypipes:item_terminal'})
            event.shaped(Item.of('prettypipes:item_terminal', 1), [
                'DPI',
                'RCE',
                'IPD'
            ], {
                E: 'prettypipes:high_extraction_module',
                R: 'prettypipes:high_retrieval_module',
                P: '#forge:ender_pearls',
                I: 'create_dd:overburden_casing',
                C: '#forge:chests',
                D: 'minecraft:diamond'
            }).id('forge_frontier:shaped/item_terminal')

                // Pretty Pipes: Low Retrieval Module
            event.remove({id:'prettypipes:low_retrieval_module'})
            event.shaped(Item.of('prettypipes:low_retrieval_module', 1), [
                ' P ',
                'ABA',
                ' P '
            ], {
                P: 'minecraft:piston',
                A: 'create:andesite_alloy_block',
                B: 'prettypipes:blank_module',
                P: '#forge:ender_pearls'
            }).id('forge_frontier:shaped/low_retrieval_module')

            // Pretty Pipes: Low Extraction Module
            event.remove({ id: "prettypipes:low_extraction_module"})
            event.shaped(Item.of('prettypipes:low_extraction_module', 1), [
                ' P ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                P: 'minecraft:piston',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/low_extraction_module')

            // Pretty Pipes: Low Filter Module
            event.remove({ id: "prettypipes:low_filter_module"})
            event.shaped(Item.of('prettypipes:low_filter_module', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'create:chute',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/low_filter_module')

            // Pretty Pipes: Low High Priority Module
            event.remove({id:'prettypipes:low_high_priority_module'})
            event.shaped(Item.of('prettypipes:low_high_priority_module', 1), [
                ' C ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                C: 'minecraft:paper',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/low_high_priority_module')

            // Pretty Pipes: Low Low Priority Module
            event.remove({id:'prettypipes:low_low_priority_module'})
            event.shaped(Item.of('prettypipes:low_low_priority_module', 1), [
                ' C ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                C: 'create:andesite',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/low_low_priority_module')

            // Pretty Pipes: Low Speed Module
            event.remove({id:'prettypipes:low_speed_module'})
            event.shaped(Item.of('prettypipes:low_speed_module', 1), [
                ' S ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                S: 'minecraft:sugar',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/low_speed_module')

            // Pretty Pipes: Medium Extraction Module
            event.remove({ id: "prettypipes:medium_extraction_module" })
            event.shaped(Item.of('prettypipes:medium_extraction_module', 1), [
                ' I ',
                'IMI',
                ' I '
            ], {
                I: 'create:iron_sheet',
                M: 'prettypipes:low_extraction_module'
            }).id('forge_frontier:shaped/medium_extraction_module')

            // Pretty Pipes: Medium Filter Module
            event.remove({id:'prettypipes:medium_filter_module'})
            event.shaped(Item.of('prettypipes:medium_filter_module', 1), [
                ' B ',
                'IMI',
                ' B '
            ], {
                I: 'create:iron_sheet',
                M: 'prettypipes:low_filter_module',
                B: 'minecraft:iron_bars'
            }).id('forge_frontier:shaped/medium_filter_module')

            // Pretty Pipes: Medium Low Priority Module
            event.remove({id:'prettypipes:medium_low_priority_module'})
            event.shaped(Item.of('prettypipes:medium_low_priority_module', 1), [
                ' C ',
                'CMC',
                ' C '
            ], {
                C: 'create:andesite',
                M: 'prettypipes:low_low_priority_module'
            }).id('forge_frontier:shaped/medium_low_priority_module')

            // Pretty Pipes: Medium Retrieval Module
            event.remove({id:'prettypipes:medium_retrieval_module'})
            event.shaped(Item.of('prettypipes:medium_retrieval_module', 1), [
                'RRR',
                'IMI',
                ' I '
            ], {
                I: 'create:golden_sheet',
                M: 'prettypipes:low_retrieval_module',
                R: 'create:andesite_alloy_block'
            }).id('forge_frontier:shaped/medium_retrieval_module')

            // Pretty Pipes: Medium Speed Module
            event.remove({id:'prettypipes:medium_speed_module'})
            event.shaped(Item.of('prettypipes:medium_speed_module', 1), [
                'ISI',
                'SMS',
                'ISI'
            ], {
                S: 'minecraft:sugar',
                M: 'prettypipes:low_speed_module',
                I: 'create:iron_sheet'
            }).id('forge_frontier:shaped/medium_speed_module')

            // Pretty Pipes: Mod Filter Modifier
            event.remove({id:'prettypipes:mod_filter_modifier'})
            event.shaped(Item.of('prettypipes:mod_filter_modifier', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'minecraft:anvil',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/mod_filter_modifier')

            // Pretty Pipes: Nbt Filter Modifier
            event.remove({id:'prettypipes:nbt_filter_modifier'})
            event.shaped(Item.of('prettypipes:nbt_filter_modifier', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'minecraft:book',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/nbt_filter_modifier')

            // Pretty Pipes: Pressurizer
            event.remove({id:'prettypipes:pressurizer'})
            event.shaped(Item.of('prettypipes:pressurizer', 1), [
                'TST',
                'SRS',
                'TST'
            ], {
                S: 'prettypipes:high_speed_module',
                R: 'create:andesite_alloy_block',
                T: 'create:iron_sheet'
            }).id('forge_frontier:shaped/pressurizer')

            // Pretty Pipes: Random Sorting Modifier
            event.remove({id:'prettypipes:random_sorting_modifier'})
            event.shaped(Item.of('prettypipes:random_sorting_modifier', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'minecraft:dispenser',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/random_sorting_modifier')

            // Pretty Pipes: Redstone Module
            event.remove({id:'prettypipes:redstone_module'})
            event.shaped(Item.of('prettypipes:redstone_module', 1), [
                ' S ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                S: 'minecraft:redstone_torch',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/redstone_module')

            // Pretty Pipes: Round Robin Sorting Modifier
            event.remove({id:'prettypipes:round_robin_sorting_modifier'})
            event.shaped(Item.of('prettypipes:round_robin_sorting_modifier', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'minecraft:arrow',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/round_robin_sorting_modifier')

            // Pretty Pipes: Stack Size Module
            event.remove({id:'prettypipes:stack_size_module'})
            event.shaped(Item.of('prettypipes:stack_size_module', 1), [
                ' D ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                D: 'minecraft:dropper',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/stack_size_module')

            // Pretty Pipes: Tag Filter Modifier
            event.remove({id:'prettypipes:tag_filter_modifier'})
            event.shaped(Item.of('prettypipes:tag_filter_modifier', 1), [
                ' H ',
                'RMR',
                ' R '
            ], {
                R: 'create:andesite_alloy',
                H: 'minecraft:iron_ore',
                M: 'prettypipes:blank_module'
            }).id('forge_frontier:shaped/tag_filter_modifier')

            // Pretty Pipes: Wrench
            event.remove({id:'prettypipes:wrench'})
            event.shaped(Item.of('prettypipes:wrench', 1), [
                ' P ',
                ' C ',
            ], {
                P: 'prettypipes:pipe',
                C: 'create:wrench'
            }).id('forge_frontier:shaped/wrench')

        // Pretty Pipes Fluids
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

    }
)