ServerEvents.recipes(event => {

// Smithing Template Crafting Recipes

    // Netherite Iron Upgrade
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'deeperdarker:warden_upgrade_smithing_template',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_netherite_iron',
                amount: 100
            }
        ],
        results: [
            {
                item: 'forge_frontier:netherite_iron_upgrade',
                amount: 1
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/netherite_iron_upgrade');

    // Netherite Gold Upgrade
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'forge_frontier:netherite_iron_upgrade',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_netherite_gold',
                amount: 100
            }
        ],
        results: [
            {
                item: 'forge_frontier:netherite_gold_upgrade',
                amount: 1
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/netherite_gold_upgrade');

    // Netherite Emerald Upgrade
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'forge_frontier:netherite_gold_upgrade',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_netherite_emerald',
                amount: 100
            }
        ],
        results: [
            {
                item: 'forge_frontier:netherite_emerald_upgrade',
                amount: 1
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/netherite_emerald_upgrade');

    // Netherite Diamond Upgrade
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: 'forge_frontier:netherite_emerald_upgrade',
                amount: 1
            },
            {
                fluid: 'forge_frontier:molten_netherite_diamond',
                amount: 100
            }
        ],
        results: [
            {
                item: 'forge_frontier:netherite_diamond_upgrade',
                amount: 1
            }
        ],
        heatRequirement: "superheated"
    }).id('forge_frontier:mixing/netherite_diamond_upgrade');

// New Smithing Recipes

    // Netherite Iron
        // Netherite Iron Sword
        event.remove('advancednetherite:netherite_iron_sword_smithing')
        event.smithing('advancednetherite:netherite_iron_sword',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_sword',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_sword');

        // Netherite Iron Shovel
        event.remove('advancednetherite:netherite_iron_shovel_smithing')
        event.smithing('advancednetherite:netherite_iron_shovel',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_shovel',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_shovel');

        // Netherite Iron Pickaxe
        event.remove('advancednetherite:netherite_iron_pickaxe_smithing')
        event.smithing('advancednetherite:netherite_iron_pickaxe',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_pickaxe',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_pickaxe');

        // Netherite Iron Hoe
        event.remove('advancednetherite:netherite_iron_hoe_smithing')
        event.smithing('advancednetherite:netherite_iron_hoe',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_hoe',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_hoe');

        // Netherite Iron Axe
        event.remove('advancednetherite:netherite_iron_axe_smithing')
        event.smithing('advancednetherite:netherite_iron_axe',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_axe',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_axe');

        // Netherite Iron Helmet
        event.remove('advancednetherite:netherite_iron_helmet_smithing')
        event.smithing('advancednetherite:netherite_iron_helmet',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_helmet',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_helmet');

        // Netherite Iron Chestplate
        event.remove('advancednetherite:netherite_iron_chestplate_smithing')
        event.smithing('advancednetherite:netherite_iron_chestplate',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_chestplate',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_chestplate');

        // Netherite Iron Leggings
        event.remove('advancednetherite:netherite_iron_leggings_smithing')
        event.smithing('advancednetherite:netherite_iron_leggings',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_leggings',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_leggings');

        // Netherite Iron Boots
        event.remove('advancednetherite:netherite_iron_boots_smithing')
        event.smithing('advancednetherite:netherite_iron_boots',
            'forge_frontier:netherite_iron_upgrade',
            'deeperdarker:warden_boots',
            'advancednetherite:netherite_iron_ingot'
        ).id('forge_frontier:smithing/netherite_iron_boots');

    // Netherite Gold
        // Netherite Gold Sword
        event.remove('advancednetherite:netherite_gold_sword_smithing')
        event.smithing('advancednetherite:netherite_gold_sword',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_sword',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_sword');

        // Netherite Gold Shovel
        event.remove('advancednetherite:netherite_gold_shovel_smithing')
        event.smithing('advancednetherite:netherite_gold_shovel',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_shovel',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_shovel');

        // Netherite Gold Pickaxe
        event.remove('advancednetherite:netherite_gold_pickaxe_smithing')
        event.smithing('advancednetherite:netherite_gold_pickaxe',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_pickaxe',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_pickaxe');

        // Netherite Gold Hoe
        event.remove('advancednetherite:netherite_gold_hoe_smithing')
        event.smithing('advancednetherite:netherite_gold_hoe',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_hoe',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_hoe');

        // Netherite Gold Axe
        event.remove('advancednetherite:netherite_gold_axe_smithing')
        event.smithing('advancednetherite:netherite_gold_axe',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_axe',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_axe');

        // Netherite Gold Helmet
        event.remove('advancednetherite:netherite_gold_helmet_smithing')
        event.smithing('advancednetherite:netherite_gold_helmet',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_helmet',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_helmet');

        // Netherite Gold Chestplate
        event.remove('advancednetherite:netherite_gold_chestplate_smithing')
        event.smithing('advancednetherite:netherite_gold_chestplate',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_chestplate',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_chestplate');

        // Netherite Gold Leggings
        event.remove('advancednetherite:netherite_gold_leggings_smithing')
        event.smithing('advancednetherite:netherite_gold_leggings',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_leggings',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_leggings');

        // Netherite Gold Boots
        event.remove('advancednetherite:netherite_gold_boots_smithing')
        event.smithing('advancednetherite:netherite_gold_boots',
            'forge_frontier:netherite_gold_upgrade',
            'advancednetherite:netherite_iron_boots',
            'advancednetherite:netherite_gold_ingot'
        ).id('forge_frontier:smithing/netherite_gold_boots');

    // Netherite Emerald
        // Netherite Emerald Sword
        event.remove('advancednetherite:netherite_emerald_sword_smithing')
        event.smithing('advancednetherite:netherite_emerald_sword',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_sword',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_sword');

        // Netherite Emerald Shovel
        event.remove('advancednetherite:netherite_emerald_shovel_smithing')
        event.smithing('advancednetherite:netherite_emerald_shovel',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_shovel',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_shovel');

        // Netherite Emerald Pickaxe
        event.remove('advancednetherite:netherite_emerald_pickaxe_smithing')
        event.smithing('advancednetherite:netherite_emerald_pickaxe',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_pickaxe',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_pickaxe');

        // Netherite Emerald Hoe
        event.remove('advancednetherite:netherite_emerald_hoe_smithing')
        event.smithing('advancednetherite:netherite_emerald_hoe',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_hoe',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_hoe');

        // Netherite Emerald Axe
        event.remove('advancednetherite:netherite_emerald_axe_smithing')
        event.smithing('advancednetherite:netherite_emerald_axe',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_axe',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_axe');

        // Netherite Emerald Helmet
        event.remove('advancednetherite:netherite_emerald_helmet_smithing')
        event.smithing('advancednetherite:netherite_emerald_helmet',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_helmet',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_helmet');

        // Netherite Emerald Chestplate
        event.remove('advancednetherite:netherite_emerald_chestplate_smithing')
        event.smithing('advancednetherite:netherite_emerald_chestplate',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_chestplate',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_chestplate');

        // Netherite Emerald Leggings
        event.remove('advancednetherite:netherite_emerald_leggings_smithing')
        event.smithing('advancednetherite:netherite_emerald_leggings',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_leggings',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_leggings');

        // Netherite Emerald Boots
        event.remove('advancednetherite:netherite_emerald_boots_smithing')
        event.smithing('advancednetherite:netherite_emerald_boots',
            'forge_frontier:netherite_emerald_upgrade',
            'advancednetherite:netherite_gold_boots',
            'advancednetherite:netherite_emerald_ingot'
        ).id('forge_frontier:smithing/netherite_emerald_boots');

    // Netherite Diamond
        // Netherite Diamond Sword
        event.remove('advancednetherite:netherite_diamond_sword_smithing')
        event.smithing('advancednetherite:netherite_diamond_sword',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_sword',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_sword');

        // Netherite Diamond Shovel
        event.remove('advancednetherite:netherite_diamond_shovel_smithing')
        event.smithing('advancednetherite:netherite_diamond_shovel',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_shovel',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_shovel');

        // Netherite Diamond Pickaxe
        event.remove('advancednetherite:netherite_diamond_pickaxe_smithing')
        event.smithing('advancednetherite:netherite_diamond_pickaxe',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_pickaxe',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_pickaxe');

        // Netherite Diamond Hoe
        event.remove('advancednetherite:netherite_diamond_hoe_smithing')
        event.smithing('advancednetherite:netherite_diamond_hoe',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_hoe',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_hoe');

        // Netherite Diamond Axe
        event.remove('advancednetherite:netherite_diamond_axe_smithing')
        event.smithing('advancednetherite:netherite_diamond_axe',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_axe',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_axe');

        // Netherite Diamond Helmet
        event.remove('advancednetherite:netherite_diamond_helmet_smithing')
        event.smithing('advancednetherite:netherite_diamond_helmet',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_helmet',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_helmet');

        // Netherite Diamond Chestplate
        event.remove('advancednetherite:netherite_diamond_chestplate_smithing')
        event.smithing('advancednetherite:netherite_diamond_chestplate',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_chestplate',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_chestplate');

        // Netherite Diamond Leggings
        event.remove('advancednetherite:netherite_diamond_leggings_smithing')
        event.smithing('advancednetherite:netherite_diamond_leggings',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_leggings',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_leggings');

        // Netherite Diamond Boots
        event.remove('advancednetherite:netherite_diamond_boots_smithing')
        event.smithing('advancednetherite:netherite_diamond_boots',
            'forge_frontier:netherite_diamond_upgrade',
            'advancednetherite:netherite_emerald_boots',
            'advancednetherite:netherite_diamond_ingot'
        ).id('forge_frontier:smithing/netherite_diamond_boots');

} )