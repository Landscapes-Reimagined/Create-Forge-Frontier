ServerEvents.recipes(event => {

    function addRangedOutput(results, item, minCount, maxCount) {
        results.push({
            item: item,
            count: minCount
        });

        for (let i = minCount; i < maxCount; i++) {
            results.push({
                item: item,
                chance: 0.5
            });
        }
    }

    function createCrushingRecipe(id, ingredient, outputs) {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                ingredient
            ],
            processingTime: 150,
            results: outputs
        }).id('forge_frontier:crushing/apotheosis/' + id);
    }

    // Affix Item Salvaging
    const affixMaterials = [
        {
            rarity: 'common',
            material: 'apotheosis:common_material',
            min: 1,
            max: 4
        },
        {
            rarity: 'uncommon',
            material: 'apotheosis:uncommon_material',
            min: 1,
            max: 4
        },
        {
            rarity: 'rare',
            material: 'apotheosis:rare_material',
            min: 1,
            max: 4
        },
        {
            rarity: 'epic',
            material: 'apotheosis:epic_material',
            min: 1,
            max: 4
        },
        {
            rarity: 'mythic',
            material: 'apotheosis:mythic_material',
            min: 1,
            max: 4
        }
    ];

    affixMaterials.forEach(entry => {
        let affixResults = [];

        addRangedOutput(
            affixResults,
            entry.material,
            entry.min,
            entry.max
        );

        createCrushingRecipe(
            'affix/' + entry.rarity,
            {
                type: 'apotheosis:affix_item',
                rarity: 'apotheosis:' + entry.rarity
            },
            affixResults
        );
    });

    // Gem Salvaging

    const gemDustRecipes = [
        {
            rarity: 'common',
            min: 1,
            max: 2
        },
        {
            rarity: 'uncommon',
            min: 1,
            max: 3
        },
        {
            rarity: 'rare',
            min: 2,
            max: 4
        },
        {
            rarity: 'epic',
            min: 2,
            max: 5
        },
        {
            rarity: 'mythic',
            min: 3,
            max: 6
        },
        {
            rarity: 'ancient',
            min: 4,
            max: 10
        }
    ];

    gemDustRecipes.forEach(entry => {
        let gemResults = [];

        addRangedOutput(
            gemResults,
            'apotheosis:gem_dust',
            entry.min,
            entry.max
        );

        createCrushingRecipe(
            'gem/' + entry.rarity,
            {
                type: 'apotheosis:gem',
                rarity: 'apotheosis:' + entry.rarity
            },
            gemResults
        );
    });

});