// Ad Astra Ore Recipe Tweaks
ServerEvents.recipes(event => {

// Crushing Recipes

    // Sky Stone Crushing Recipe
    event.custom({
        type: "create:crushing",
        ingredients: [
            { item: 'ad_astra:sky_stone' }
        ],
        processingTime: 400,
        results: [
            { item: 'ae2:sky_dust' }
        ]
    }).id('forge_frontier:crushing/sky_stone');

    // Calorite Ore
        // Deepslate Calorite Ore
        event.remove({ id: 'create:crushing/deepslate_calorite_ore'})
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:deepslate_calorite_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_calorite' },
                { item: 'forge_frontier:crushed_calorite', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
            ]
        }).id('forge_frontier:crushing/deepslate_calorite_ore');

        // Venus Calorite Ore
        event.remove({ id: 'create:crushing/venus_calorite_ore'})
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:venus_calorite_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_calorite'},
                { item: 'forge_frontier:crushed_calorite', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:venus_cobblestone', chance: 0.12 }
            ]
        }).id('forge_frontier:crushing/venus_calorite_ore');

    // Ostrum Ore
        // Mars Ostrum Ore
        event.remove({ id: 'create:crushing/mars_ostrum_ore'})
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:mars_ostrum_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_ostrum'},
                { item: 'forge_frontier:crushed_ostrum', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:mars_cobblestone', chance: 0.12 }
            ]
        }).id('forge_frontier:crushing/mars_ostrum_ore');

        // Deepslate Ostrum Ore
        event.remove({ id: 'create:crushing/deepslate_ostrum_ore'})
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:deepslate_ostrum_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_ostrum' },
                { item: 'forge_frontier:crushed_ostrum', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
            ]
        }).id('forge_frontier:crushing/deepslate_ostrum_ore');

    // Desh Ore
        // Moon Desh Ore
        event.remove({ id: 'create:crushing/moon_desh_ore'})
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:moon_desh_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_desh' },
                { item: 'forge_frontier:crushed_desh', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'ad_astra:moon_cobblestone', chance: 0.12 }
            ]
        }).id('forge_frontier:crushing/moon_desh_ore');

        // Deepslate Desh Ore
        event.remove({ id: 'create:crushing/deepslate_desh_ore'})
        event.custom({
            type: "create:crushing",
            ingredients: [
                { item: 'ad_astra:deepslate_desh_ore' }
            ],
            processingTime: 400,
            results: [
                { item: 'forge_frontier:crushed_desh' },
                { item: 'forge_frontier:crushed_desh', chance: 0.75 },
                { item: 'create:experience_nugget', chance: 0.75 },
                { item: 'minecraft:cobbled_deepslate', chance: 0.12 }
            ]
        }).id('forge_frontier:crushing/deepslate_desh_ore');

// Creates Blasting Recipes

    // Desh Ore
    event.custom({
        type: "minecraft:blasting",
        ingredient: [ // Changed 'ingredients' to 'ingredient'
                { item: 'forge_frontier:crushed_desh' }
        ],
        cookingTime: 100,
        experience: 0.1,
        result: { // Ensure 'result' is a single object, not an array
            item: 'ad_astra:desh_ingot'
        }
    }).id('forge_frontier:blasting/crushed_desh')

    // Ostrum Ore
    event.custom({
        type: "minecraft:blasting",
        ingredient: [ // Changed 'ingredients' to 'ingredient'
            { item: 'forge_frontier:crushed_ostrum' }
        ],
        cookingTime: 100,
        experience: 0.1,
        result: { // Ensure 'result' is a single object, not an array
            item: 'ad_astra:ostrum_ingot'
        }
    }).id('forge_frontier:blasting/crushed_ostrum')
            
    // Calorite Ore
    event.custom({
        type: "minecraft:blasting",
        ingredient: [ // Changed 'ingredients' to 'ingredient'
            { item: 'forge_frontier:crushed_calorite' }
        ],
        cookingTime: 100,
        experience: 0.1,
        result: { // Ensure 'result' is a single object, not an array
            item: 'ad_astra:calorite_ingot'
        }
    }).id('forge_frontier:blasting/crushed_calorite')

})