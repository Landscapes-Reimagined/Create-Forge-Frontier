ServerEvents.recipes(function (event) 
    {
        // Hyper Experience value per currency item (in mB of hyper experience)
        var HYPER_PER_NUGGET = 3;                      // 3 mB hyper per nugget
        var HYPER_PER_BLOCK  = HYPER_PER_NUGGET * 9;   // 27 mB hyper per block (9 nuggets)
        var HYPER_PER_BOTTLE = 10;                     // 10 mB hyper per bottle

        // Item IDs for the hyper experience currency (adjust if your IDs differ)
        var HYPER_BLOCK_ITEM  = 'create_enchantment_industry:hyper_experience_block';
        var HYPER_NUGGET_ITEM = 'create_enchantment_industry:hyper_experience_nugget';
        var HYPER_BOTTLE_ITEM = 'create_enchantment_industry:hyper_experience_bottle';

        // base   = base/starting item (e.g. honey bottle, carrot, thornshelf, etc.)
        // result = upgraded/output item
        // amount = total hyper experience cost in mB (full cost; we halve it at runtime)
        // count  = resulting item count
        // id     = recipe id suffix
        var recipes = [
            // Bottles
            { base: 'minecraft:honey_bottle', result: 'minecraft:experience_bottle', amount: 55, count: 2, id: 'low_experience_bottle' },
            { base: 'minecraft:honey_bottle', result: 'minecraft:experience_bottle', amount: 867, count: 9, id: 'mid_experience_bottle' },
            { base: 'minecraft:honey_bottle', result: 'minecraft:experience_bottle', amount: 3097, count: 33, id: 'high_experience_bottle' },

            // Golden Carrot
            { base: 'minecraft:carrot', result: 'minecraft:golden_carrot', amount: 55, count: 2, id: 'golden_carrot' },

            // Apotheotic Additions / Apotheosis items
            { base: 'apotheotic_additions:thornshelf', result: 'apotheotic_additions:infused_thornshelf', amount: 205, count: 2, id: 'infused_thornshelf' },
            { base: 'apotheosis:inert_trident', result: 'minecraft:trident', amount: 292, count: 2, id: 'trident' },
            { base: 'apotheotic_additions:apotheotic_coin', result: 'apotheotic_additions:infused_coin', amount: 292, count: 2, id: 'infused_coin' },
            { base: 'apotheotic_additions:infused_coin', result: 'apotheotic_additions:ascended_coin', amount: 3097, count: 2, id: 'ascended_coin' },
            { base: 'apotheosis:hellshelf', result: 'apotheosis:infused_hellshelf', amount: 402, count: 2, id: 'infused_hellshelf' },
            { base: 'apotheosis:scrap_tome', result: 'apotheosis:improved_scrap_tome', amount: 402, count: 5, id: 'improved_scrap_tome' },
            { base: 'apotheosis:seashelf', result: 'apotheosis:infused_seashelf', amount: 402, count: 2, id: 'infused_seashelf' },
            { base: 'apotheosis:improved_scrap_tome', result: 'apotheosis:extraction_tome', amount: 867, count: 5, id: 'extraction_tome' },
            { base: 'apotheosis:dormant_deepshelf', result: 'apotheosis:deepshelf', amount: 867, count: 2, id: 'deepshelf' },
            { base: 'minecraft:dragon_breath', result: 'apotheosis:infused_breath', amount: 1802, count: 4, id: 'infused_breath' },
            { base: 'apotheosis:library', result: 'apotheosis:ender_library', amount: 3097, count: 2, id: 'ender_library' }
        ];

        recipes.forEach(function (r) {
            // Cut required hyper experience in half, rounding up so you never undercharge
            var remaining = Math.ceil(r.amount / 2);

            // Break into blocks → nuggets → bottles
            var blocks = Math.floor(remaining / HYPER_PER_BLOCK);
            remaining -= blocks * HYPER_PER_BLOCK;

            var nuggets = Math.floor(remaining / HYPER_PER_NUGGET);
            remaining -= nuggets * HYPER_PER_NUGGET;

            // Whatever’s left becomes bottles (round up so the player never underpays)
            var bottles = Math.ceil(remaining / HYPER_PER_BOTTLE);

            var ingredients = [];

            // Hyper XP currency ingredients
            for (var i = 0; i < blocks; i++) {
                ingredients.push({ item: HYPER_BLOCK_ITEM });
            }
            for (var j = 0; j < nuggets; j++) {
                ingredients.push({ item: HYPER_NUGGET_ITEM });
            }
            for (var k = 0; k < bottles; k++) {
                ingredients.push({ item: HYPER_BOTTLE_ITEM });
            }

            // Base item (e.g. honey bottle, carrot, shelf, etc.)
            ingredients.push({ item: r.base });

            // Secondary base ingredient: one copy of the result item itself
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

    }
);