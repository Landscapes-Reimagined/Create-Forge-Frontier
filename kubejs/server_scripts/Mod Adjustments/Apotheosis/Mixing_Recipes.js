ServerEvents.recipes(event => {

    const recipes = [
        // item, amount of hyper xp, output count, id
        { item: 'minecraft:experience_bottle', amount: 55,   count: 2,  id: 'low_experience_bottle' },   // 20 levels
        { item: 'minecraft:experience_bottle', amount: 867,  count: 9,  id: 'mid_experience_bottle' },   // 60 levels
        { item: 'minecraft:experience_bottle', amount: 3097, count: 33, id: 'high_experience_bottle' },  // 100 levels

        { item: 'minecraft:golden_carrot', amount: 55, count: 2, id: 'golden_carrot' },                  // 20 levels
        { item: 'apotheotic_additions:infused_thornshelf', amount: 205, count: 2, id: 'infused_thornshelf' }, // 35 levels
        { item: 'minecraft:trident', amount: 292, count: 2, id: 'trident' },                             // 40 levels
        { item: 'apotheotic_additions:infused_coin', amount: 292, count: 2, id: 'infused_coin' },        // 40 levels
        { item: 'apotheotic_additions:ascended_coin', amount: 3097, count: 2, id: 'ascended_coin' },     // 100 levels
        { item: 'apotheosis:infused_hellshelf', amount: 402, count: 2, id: 'infused_hellshelf' },        // 45 levels
        { item: 'apotheosis:improved_scrap_tome', amount: 402, count: 5, id: 'improved_scrap_tome' },    // 45 levels
        { item: 'apotheosis:infused_seashelf', amount: 402, count: 2, id: 'infused_seashelf' },          // 45 levels
        { item: 'apotheosis:extraction_tome', amount: 867, count: 5, id: 'extraction_tome' },            // 60 levels
        { item: 'apotheosis:deepshelf', amount: 867, count: 2, id: 'deepshelf' },                        // 60 levels
        { item: 'apotheosis:infused_breath', amount: 1802, count: 4, id: 'infused_breath' },             // 80 levels
        { item: 'apotheosis:ender_library', amount: 3097, count: 2, id: 'ender_library' }                // 100 levels
    ];

    recipes.forEach(r => {
        event.custom({
            type: "create:mixing",
            ingredients: [
                { fluid: 'create_enchantment_industry:hyper_experience', amount: r.amount },
                { item: r.item }
            ],
            results: [
                { item: r.item, count: r.count }
            ],
            heatRequirement: "superheated"
        }).id(`forge_frontier:mixing/${r.id}`);
    });

});
