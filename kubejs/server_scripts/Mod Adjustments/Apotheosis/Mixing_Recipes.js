ServerEvents.recipes(function (event) {
    // Hyper Experience value per currency item (in mB of hyper experience)
    var HYPER_PER_NUGGET = 3;                    // 3 mB hyper per nugget
    var HYPER_PER_BLOCK = HYPER_PER_NUGGET * 9;  // 27 mB hyper per block (9 nuggets)
    var HYPER_PER_BOTTLE = 10;                   // 10 mB hyper per bottle

    // Item IDs for the hyper experience currency
    var HYPER_BLOCK_ITEM = 'create_enchantment_industry:hyper_experience_block';
    var HYPER_NUGGET_ITEM = 'create_enchantment_industry:hyper_experience_nugget';
    var HYPER_BOTTLE_ITEM = 'create_enchantment_industry:hyper_experience_bottle';

    // base   = base/starting item
    // result = upgraded/output item
    // amount = total hyper experience cost in mB (NO HALVING)
    // count  = resulting item count
    // id     = recipe id suffix
    var recipes = [
        // Bottles
        { base: 'minecraft:honey_bottle', result: 'minecraft:experience_bottle', amount: 13.6, count: 2, id: 'low_experience_bottle' },
        { base: 'minecraft:honey_bottle', result: 'minecraft:experience_bottle', amount: 109.2, count: 9, id: 'mid_experience_bottle' },
        { base: 'minecraft:honey_bottle', result: 'minecraft:experience_bottle', amount:  217.2, count: 33, id: 'high_experience_bottle' },

        // Golden Carrot
        { base: 'minecraft:carrot', result: 'minecraft:golden_carrot', amount: 13.6, count: 2, id: 'golden_carrot' },

        // Apotheotic Additions / Apotheosis items
        { base: 'apotheosis:hellshelf', result: 'apotheosis:infused_hellshelf', amount:  68.7, count: 2, id: 'infused_hellshelf' },
        { base: 'apotheosis:scrap_tome', result: 'apotheosis:improved_scrap_tome', amount:  68.7, count: 5, id: 'improved_scrap_tome' },
        { base: 'apotheosis:seashelf', result: 'apotheosis:infused_seashelf', amount:  68.7, count: 2, id: 'infused_seashelf' },
        { base: 'apotheosis:improved_scrap_tome', result: 'apotheosis:extraction_tome', amount: 109.2, count: 5, id: 'extraction_tome' },
        { base: 'apotheosis:dormant_deepshelf', result: 'apotheosis:deepshelf', amount: 109.2, count: 2, id: 'deepshelf' },
        { base: 'minecraft:dragon_breath', result: 'apotheosis:infused_breath', amount: 163.2, count: 4, id: 'infused_breath' },
        { base: 'apotheosis:library', result: 'apotheosis:ender_library', amount:  217.2, count: 2, id: 'ender_library' }
    ];

    recipes.forEach(function (r) {
        // NO HALVING: use full amount
        var remaining = r.amount;

        // Break into blocks → nuggets → bottles
        var blocks = Math.floor(remaining / HYPER_PER_BLOCK);
        remaining -= blocks * HYPER_PER_BLOCK;

        var nuggets = Math.floor(remaining / HYPER_PER_NUGGET);
        remaining -= nuggets * HYPER_PER_NUGGET;

        // Whatever’s left becomes bottles (round up so the player never underpays)
        var bottles = Math.ceil(remaining / HYPER_PER_BOTTLE);

        var ingredients = [];

        // Hyper XP currency ingredients
        for (var i = 0; i < blocks; i++) ingredients.push({ item: HYPER_BLOCK_ITEM });
        for (var j = 0; j < nuggets; j++) ingredients.push({ item: HYPER_NUGGET_ITEM });
        for (var k = 0; k < bottles; k++) ingredients.push({ item: HYPER_BOTTLE_ITEM });

        // Base item + secondary base (the result item itself)
        ingredients.push({ item: r.base });
        ingredients.push({ item: r.result });

        event.custom({
            type: 'create:mixing',
            ingredients: ingredients,
            results: [
                { item: r.result, count: r.count }
            ],
            heatRequirement: 'superheated'
        }).id('forge_frontier:mixing/' + r.id);
    });

});
