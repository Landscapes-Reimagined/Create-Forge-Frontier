ServerEvents.recipes(function(event) {
    // Pretty Pipes
    event.remove({ id: 'prettypipes:blank_module' })
    event.remove({ id: 'prettypipes:damage_filter_modifier' })
    event.remove({ id: 'prettypipes:filter_increase_modifier' })
    event.remove({ id: 'prettypipes:high_extraction_module' })
    event.remove({ id: 'prettypipes:high_filter_module' })
    event.remove({ id: 'prettypipes:high_high_priority_module' })
    event.remove({ id: 'prettypipes:high_low_priority_module' })
    event.remove({ id: 'prettypipes:high_retrieval_module' })
    event.remove({ id: 'prettypipes:high_speed_module' })
    event.remove({ id: 'prettypipes:low_retrieval_module' })
    event.remove({ id: 'prettypipes:low_extraction_module' })
    event.remove({ id: 'prettypipes:low_filter_module' })
    event.remove({ id: 'prettypipes:low_high_priority_module' })
    event.remove({ id: 'prettypipes:low_low_priority_module' })
    event.remove({ id: 'prettypipes:low_speed_module' })
    event.remove({ id: 'prettypipes:medium_extraction_module' })
    event.remove({ id: 'prettypipes:medium_filter_module' })
    event.remove({ id: 'prettypipes:medium_high_priority_module' })
    event.remove({ id: 'prettypipes:medium_low_priority_module' })
    event.remove({ id: 'prettypipes:medium_retrieval_module' })
    event.remove({ id: 'prettypipes:medium_speed_module' })
    event.remove({ id: 'prettypipes:mod_filter_modifier' })
    event.remove({ id: 'prettypipes:nbt_filter_modifier' })
    event.remove({ id: 'prettypipes:pressurizer' })
    event.remove({ id: 'prettypipes:random_sorting_modifier' })
    event.remove({ id: 'prettypipes:redstone_module' })
    event.remove({ id: 'prettypipes:round_robin_sorting_modifier' })
    event.remove({ id: 'prettypipes:stack_size_module' })
    event.remove({ id: 'prettypipes:tag_filter_modifier' })
    event.remove({ id: 'prettypipes:wrench' })

    // Pretty Pipes Fluids
    event.remove({ id: 'ppfluids:high_fluid_extraction_module' })
    event.remove({ id: 'ppfluids:high_fluid_filter_module' })
    event.remove({ id: 'ppfluids:high_fluid_retrieval_module' })
    event.remove({ id: 'ppfluids:low_fluid_extraction_module' })
    event.remove({ id: 'ppfluids:low_fluid_filter_module' })
    event.remove({ id: 'ppfluids:low_fluid_retrieval_module' })
    event.remove({ id: 'ppfluids:medium_fluid_extraction_module' })
    event.remove({ id: 'ppfluids:medium_fluid_filter_module' })
    event.remove({ id: 'ppfluids:medium_fluid_retrieval_module' })

    function seq(output, input, transitional, steps, id, loops) {
        if (loops === undefined) loops = 1

        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: input },
            transitionalItem: { item: transitional },
            sequence: steps,
            results: [{ item: output }],
            loops: loops
        }).id(id)
    }

    // Blank Module
    seq(
        'prettypipes:blank_module',
        'create:andesite_alloy',
        'forge_frontier:incomplete_blank_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_blank_module' },
                    { item: 'prettypipes:pipe' }
                ],
                results: [{ item: 'forge_frontier:incomplete_blank_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_blank_module' },
                    { item: 'minecraft:quartz' }
                ],
                results: [{ item: 'forge_frontier:incomplete_blank_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_blank_module' }],
                results: [{ item: 'forge_frontier:incomplete_blank_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/blank_module'
    )

    // Low Tier Modules
    seq(
        'prettypipes:low_extraction_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_low_extraction_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_extraction_module' },
                    { item: 'minecraft:piston' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_extraction_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_extraction_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_extraction_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_extraction_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_extraction_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_extraction_module'
    )

    seq(
        'prettypipes:low_filter_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_low_filter_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_filter_module' },
                    { item: 'create:chute' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_filter_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_filter_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_filter_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_filter_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_filter_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_filter_module'
    )

    seq(
        'prettypipes:low_high_priority_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_low_high_priority_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_high_priority_module' },
                    { item: 'minecraft:paper' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_high_priority_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_high_priority_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_high_priority_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_high_priority_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_high_priority_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_high_priority_module'
    )

    seq(
        'prettypipes:low_low_priority_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_low_low_priority_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_low_priority_module' },
                    { item: 'minecraft:andesite' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_low_priority_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_low_priority_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_low_priority_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_low_priority_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_low_priority_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_low_priority_module'
    )

    seq(
        'prettypipes:low_retrieval_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_low_retrieval_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_retrieval_module' },
                    { tag: 'forge:ender_pearls' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_retrieval_module' },
                    { item: 'minecraft:sticky_piston' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_retrieval_module' },
                    { item: 'create:andesite_alloy_block' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_retrieval_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_retrieval_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_retrieval_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_retrieval_module'
    )

    seq(
        'prettypipes:low_speed_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_low_speed_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_speed_module' },
                    { item: 'minecraft:sugar' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_speed_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_speed_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_speed_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_speed_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_speed_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_speed_module'
    )

    // Medium Tier Modules
    seq(
        'prettypipes:medium_extraction_module',
        'prettypipes:low_extraction_module',
        'forge_frontier:incomplete_medium_extraction_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_extraction_module' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_extraction_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_extraction_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_extraction_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_extraction_module',
        2
    )

    seq(
        'prettypipes:medium_filter_module',
        'prettypipes:low_filter_module',
        'forge_frontier:incomplete_medium_filter_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_filter_module' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_filter_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_filter_module' },
                    { item: 'minecraft:iron_bars' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_filter_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_filter_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_filter_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_filter_module'
    )

    seq(
        'prettypipes:medium_high_priority_module',
        'prettypipes:low_high_priority_module',
        'forge_frontier:incomplete_medium_high_priority_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_high_priority_module' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_high_priority_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_high_priority_module' },
                    { item: 'minecraft:paper' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_high_priority_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_high_priority_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_high_priority_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_high_priority_module'
    )

    seq(
        'prettypipes:medium_low_priority_module',
        'prettypipes:low_low_priority_module',
        'forge_frontier:incomplete_medium_low_priority_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_low_priority_module' },
                    { item: 'minecraft:andesite' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_low_priority_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_low_priority_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_low_priority_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_low_priority_module',
        2
    )

    seq(
        'prettypipes:medium_retrieval_module',
        'prettypipes:low_retrieval_module',
        'forge_frontier:incomplete_medium_retrieval_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_retrieval_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_retrieval_module' },
                    { item: 'create:andesite_alloy_block' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_retrieval_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_retrieval_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_retrieval_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_retrieval_module'
    )

    seq(
        'prettypipes:medium_speed_module',
        'prettypipes:low_speed_module',
        'forge_frontier:incomplete_medium_speed_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_speed_module' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_speed_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_speed_module' },
                    { item: 'minecraft:sugar' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_speed_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_speed_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_speed_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_speed_module'
    )

    // High Tier Modules
    seq(
        'prettypipes:high_extraction_module',
        'prettypipes:medium_extraction_module',
        'forge_frontier:incomplete_high_extraction_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_extraction_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_extraction_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_extraction_module' },
                    { item: 'minecraft:diamond' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_extraction_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_extraction_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_extraction_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_extraction_module'
    )

    seq(
        'prettypipes:high_filter_module',
        'prettypipes:medium_filter_module',
        'forge_frontier:incomplete_high_filter_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_filter_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_filter_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_filter_module' },
                    { item: 'minecraft:iron_bars' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_filter_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_filter_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_filter_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_filter_module'
    )

    seq(
        'prettypipes:high_high_priority_module',
        'prettypipes:medium_high_priority_module',
        'forge_frontier:incomplete_high_high_priority_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_high_priority_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_high_priority_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_high_priority_module' },
                    { item: 'minecraft:paper' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_high_priority_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_high_priority_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_high_priority_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_high_priority_module'
    )

    seq(
        'prettypipes:high_low_priority_module',
        'prettypipes:medium_low_priority_module',
        'forge_frontier:incomplete_high_low_priority_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_low_priority_module' },
                    { item: 'minecraft:andesite' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_low_priority_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_low_priority_module' },
                    { item: 'minecraft:andesite' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_low_priority_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_low_priority_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_low_priority_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_low_priority_module'
    )

    seq(
        'prettypipes:high_retrieval_module',
        'prettypipes:medium_retrieval_module',
        'forge_frontier:incomplete_high_retrieval_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_retrieval_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_retrieval_module' },
                    { item: 'minecraft:diamond' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_retrieval_module' },
                    { item: 'create:andesite_alloy_block' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_retrieval_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_retrieval_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_retrieval_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_retrieval_module'
    )

    seq(
        'prettypipes:high_speed_module',
        'prettypipes:medium_speed_module',
        'forge_frontier:incomplete_high_speed_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_speed_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_speed_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_speed_module' },
                    { item: 'minecraft:sugar' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_speed_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_speed_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_speed_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_speed_module'
    )

    // Modifiers
    seq(
        'prettypipes:damage_filter_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_damage_filter_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_damage_filter_modifier' },
                    { item: 'create_sa:zinc_pickaxe' }
                ],
                results: [{ item: 'forge_frontier:incomplete_damage_filter_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_damage_filter_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_damage_filter_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_damage_filter_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_damage_filter_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/damage_filter_modifier'
    )

    seq(
        'prettypipes:filter_increase_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_filter_increase_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_filter_increase_modifier' },
                    { item: 'minecraft:iron_bars' }
                ],
                results: [{ item: 'forge_frontier:incomplete_filter_increase_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_filter_increase_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_filter_increase_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_filter_increase_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_filter_increase_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/filter_increase_modifier'
    )

    seq(
        'prettypipes:mod_filter_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_mod_filter_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_mod_filter_modifier' },
                    { item: 'minecraft:anvil' }
                ],
                results: [{ item: 'forge_frontier:incomplete_mod_filter_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_mod_filter_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_mod_filter_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_mod_filter_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_mod_filter_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/mod_filter_modifier'
    )

    seq(
        'prettypipes:nbt_filter_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_nbt_filter_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_nbt_filter_modifier' },
                    { item: 'minecraft:book' }
                ],
                results: [{ item: 'forge_frontier:incomplete_nbt_filter_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_nbt_filter_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_nbt_filter_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_nbt_filter_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_nbt_filter_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/nbt_filter_modifier'
    )

    seq(
        'prettypipes:random_sorting_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_random_sorting_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_random_sorting_modifier' },
                    { item: 'minecraft:dispenser' }
                ],
                results: [{ item: 'forge_frontier:incomplete_random_sorting_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_random_sorting_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_random_sorting_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_random_sorting_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_random_sorting_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/random_sorting_modifier'
    )

    seq(
        'prettypipes:redstone_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_redstone_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_redstone_module' },
                    { item: 'minecraft:redstone_torch' }
                ],
                results: [{ item: 'forge_frontier:incomplete_redstone_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_redstone_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_redstone_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_redstone_module' }],
                results: [{ item: 'forge_frontier:incomplete_redstone_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/redstone_module'
    )

    seq(
        'prettypipes:round_robin_sorting_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_round_robin_sorting_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_round_robin_sorting_modifier' },
                    { item: 'minecraft:arrow' }
                ],
                results: [{ item: 'forge_frontier:incomplete_round_robin_sorting_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_round_robin_sorting_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_round_robin_sorting_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_round_robin_sorting_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_round_robin_sorting_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/round_robin_sorting_modifier'
    )

    seq(
        'prettypipes:stack_size_module',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_stack_size_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_stack_size_module' },
                    { item: 'minecraft:dropper' }
                ],
                results: [{ item: 'forge_frontier:incomplete_stack_size_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_stack_size_module' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_stack_size_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_stack_size_module' }],
                results: [{ item: 'forge_frontier:incomplete_stack_size_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/stack_size_module'
    )

    seq(
        'prettypipes:tag_filter_modifier',
        'prettypipes:blank_module',
        'forge_frontier:incomplete_tag_filter_modifier',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_tag_filter_modifier' },
                    { item: 'minecraft:iron_ore' }
                ],
                results: [{ item: 'forge_frontier:incomplete_tag_filter_modifier' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_tag_filter_modifier' },
                    { item: 'create:andesite_alloy' }
                ],
                results: [{ item: 'forge_frontier:incomplete_tag_filter_modifier' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_tag_filter_modifier' }],
                results: [{ item: 'forge_frontier:incomplete_tag_filter_modifier' }]
            }
        ],
        'forge_frontier:sequenced_assembly/tag_filter_modifier'
    )

    // Utility Blocks / Tools
    seq(
        'prettypipes:pressurizer',
        'create:andesite_alloy_block',
        'prettypipes:pressurizer',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'prettypipes:pressurizer' },
                    { item: 'prettypipes:high_speed_module' }
                ],
                results: [{ item: 'prettypipes:pressurizer' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'prettypipes:pressurizer' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'prettypipes:pressurizer' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'prettypipes:pressurizer' }],
                results: [{ item: 'prettypipes:pressurizer' }]
            }
        ],
        'forge_frontier:sequenced_assembly/pressurizer',
        2
    )

    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'create:wrench' },
            { item: 'prettypipes:pipe' }
        ],
        results: [{ item: 'prettypipes:wrench' }]
    }).id('forge_frontier:deploying/wrench')

    // Pretty Pipes Fluids
    seq(
        'ppfluids:low_fluid_extraction_module',
        'ppfluids:blank_fluid_module',
        'forge_frontier:incomplete_low_fluid_extraction_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_extraction_module' },
                    { item: 'minecraft:piston' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_extraction_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_extraction_module' },
                    { item: 'create:copper_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_extraction_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_fluid_extraction_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_extraction_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_fluid_extraction_module'
    )

    seq(
        'ppfluids:low_fluid_filter_module',
        'ppfluids:blank_fluid_module',
        'forge_frontier:incomplete_low_fluid_filter_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_filter_module' },
                    { item: 'create:chute' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_filter_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_filter_module' },
                    { item: 'create:copper_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_filter_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_fluid_filter_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_filter_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_fluid_filter_module'
    )

    seq(
        'ppfluids:low_fluid_retrieval_module',
        'ppfluids:blank_fluid_module',
        'forge_frontier:incomplete_low_fluid_retrieval_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_retrieval_module' },
                    { item: 'minecraft:sticky_piston' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_retrieval_module' },
                    { tag: 'forge:ender_pearls' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_low_fluid_retrieval_module' },
                    { item: 'create_compressed:copper_sheet_block' }
                ],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_retrieval_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_low_fluid_retrieval_module' }],
                results: [{ item: 'forge_frontier:incomplete_low_fluid_retrieval_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/low_fluid_retrieval_module'
    )

    seq(
        'ppfluids:medium_fluid_extraction_module',
        'ppfluids:low_fluid_extraction_module',
        'forge_frontier:incomplete_medium_fluid_extraction_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_fluid_extraction_module' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_extraction_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_fluid_extraction_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_extraction_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_fluid_extraction_module',
        2
    )

    seq(
        'ppfluids:medium_fluid_filter_module',
        'ppfluids:low_fluid_filter_module',
        'forge_frontier:incomplete_medium_fluid_filter_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_fluid_filter_module' },
                    { item: 'create:iron_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_filter_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_fluid_filter_module' },
                    { item: 'minecraft:iron_bars' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_filter_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_fluid_filter_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_filter_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_fluid_filter_module'
    )

    seq(
        'ppfluids:medium_fluid_retrieval_module',
        'ppfluids:low_fluid_retrieval_module',
        'forge_frontier:incomplete_medium_fluid_retrieval_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_fluid_retrieval_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_medium_fluid_retrieval_module' },
                    { item: 'create_compressed:copper_sheet_block' }
                ],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_retrieval_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_medium_fluid_retrieval_module' }],
                results: [{ item: 'forge_frontier:incomplete_medium_fluid_retrieval_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/medium_fluid_retrieval_module'
    )

    seq(
        'ppfluids:high_fluid_extraction_module',
        'ppfluids:medium_fluid_extraction_module',
        'forge_frontier:incomplete_high_fluid_extraction_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_extraction_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_extraction_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_extraction_module' },
                    { item: 'minecraft:diamond' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_extraction_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_fluid_extraction_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_extraction_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_fluid_extraction_module'
    )

    seq(
        'ppfluids:high_fluid_filter_module',
        'ppfluids:medium_fluid_filter_module',
        'forge_frontier:incomplete_high_fluid_filter_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_filter_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_filter_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_filter_module' },
                    { item: 'minecraft:iron_bars' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_filter_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_fluid_filter_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_filter_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_fluid_filter_module'
    )

    seq(
        'ppfluids:high_fluid_retrieval_module',
        'ppfluids:medium_fluid_retrieval_module',
        'forge_frontier:incomplete_high_fluid_retrieval_module',
        [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_retrieval_module' },
                    { item: 'create:golden_sheet' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_retrieval_module' },
                    { item: 'minecraft:diamond' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_retrieval_module' }]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'forge_frontier:incomplete_high_fluid_retrieval_module' },
                    { item: 'create_compressed:copper_sheet_block' }
                ],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_retrieval_module' }]
            },
            {
                type: 'create:pressing',
                ingredients: [{ item: 'forge_frontier:incomplete_high_fluid_retrieval_module' }],
                results: [{ item: 'forge_frontier:incomplete_high_fluid_retrieval_module' }]
            }
        ],
        'forge_frontier:sequenced_assembly/high_fluid_retrieval_module'
    )
})