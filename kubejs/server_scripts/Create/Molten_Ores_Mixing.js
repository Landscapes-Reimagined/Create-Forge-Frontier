ServerEvents.recipes(event => {
    // Molten Aluminum
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_aluminum',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_aluminum',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_aluminum_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_aluminum_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_aluminum',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_aluminum_pile_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'tfmg:aluminum_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_aluminum',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/aluminum_ingot_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'tfmg:aluminum_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_aluminum',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/aluminum_block_molten');    

    // Molten Lead
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_lead',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lead',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_lead_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_lead_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lead',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_lead_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'tfmg:raw_lead',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lead',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_lead_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/lead',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lead',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lead_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'tfmg:lead_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lead',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lead_ingot_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'tfmg:lead_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lead',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lead_block_molten');    

    // Molten Copper
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_copper',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_copper_molten');

        // Block Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_copper_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_copper_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_copper_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_copper_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_copper',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_copper_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/copper',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:copper_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:copper_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_block_molten');

    // Molten Iron
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_iron',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_iron_molten');

        // Block Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_iron_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_iron_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_iron_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_iron_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_iron',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_iron_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/iron',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/iron_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:iron_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/iron_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:iron_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/iron_block_molten');

    // Molten Gold
        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_gold',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_gold_molten');

        // Block Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_gold_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_gold_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_gold_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_gold_pile_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:raw_gold',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_gold_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/gold',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/gold_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:gold_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/gold_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:gold_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/gold_block_molten');

    // Molten Carbon
        // Charcoal to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:charcoal',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/charcoal_molten');

        // Charcoal Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'quark:charcoal_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/charcoal_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/coal',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 300
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 30
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/coal_ore_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:coal_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/coal_block_molten');

        // Coal to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:coal',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/coal_molten');

    // Molten Diamond

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:diamond',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:diamond_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/diamond',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_ore_molten');

        // Grit to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'createaddition:diamond_grit',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/diamond_grit_molten');

    // Molten Zinc
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:zinc_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/zinc_ingot_molten');

        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_zinc',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_zinc_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:raw_zinc',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_zinc_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_compressed:crushed_zinc_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_zinc_pile_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/zinc',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 800
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 80
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/zinc_ore_molten');

        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:raw_zinc_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/block_raw_zinc_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:zinc_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/zinc_block_molten');

    // Molten Brass

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:brass_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/brass_ingot_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:brass_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/brass_block_molten');

        // Copper, Zinc Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_brass',
                    amount: 400
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_zinc_brass_molten');

    // Molten Emerald
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/emerald',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/emerald_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:emerald',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/emerald_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:emerald_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/emerald_block_molten');

    // Molten Redstone
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/redstone',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 120
                },
                {
                    item: 'minecraft:redstone',
                    count: 2
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/redstone_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:redstone',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/redstone_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:redstone_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_redstone',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/redstone_block_molten');

    // Molten Lapis

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/lapis',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lapis',
                    amount: 1000
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 200
                },
                {
                    item: 'minecraft:lapis_lazuli',
                    count: 10
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lapis_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:lapis_lazuli',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lapis',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lapis_molten');
 
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:lapis_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_lapis',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/lapis_block_molten');

    // Molten Ancient Debris

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/netherite_scrap',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ancient_debris',
                    amount: 150
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 10
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ancient_debris_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:netherite_scrap',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ancient_debris',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_scrap_molten');

    // Molten Netherite
        // Debris, Gold Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_ancient_debris',
                    amount: 300
                },
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 200
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/debris_gold_netherite_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:netherite_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:netherite_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_ingot_molten');

    // Molten Bronze
        // Copper, Tin, Zinc Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_copper',
                    amount: 300
                },
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_zinc',
                    amount: 100
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bronze',
                    amount: 400
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/copper_tin_zinc_bronze_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:bronze_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bronze',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bronze_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:bronze_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bronze',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bronze_ingot_molten');

    // Molten Tin
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/tin',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/tin_ore_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:tin_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/tin_block_molten');

        // Crushed Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_tin',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_tin_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:raw_tin',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_tin_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:tin_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/tin_ingot_molten');

        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create_dd:raw_tin_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_tin_block_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_tin_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_tin',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_tin_pile_molten');

    // Molten Quartz
        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:quartz_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_quartz',
                    amount: 800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/quartz_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/quartz',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_quartz',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/quartz_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'minecraft:quartz',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_quartz',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/quartz_molten');

    // Molten Ice Shard
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/ice_shard',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ice_shard',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ice_shard_ore_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:ice_shard',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ice_shard',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ice_shard_molten');

    // Molten Uranium
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'alexscaves:uranium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_uranium',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/uranium_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/uranium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_uranium',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/uranium_ore_molten')

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'alexscaves:block_of_uranium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_uranium',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/uranium_block_molten');

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'create:crushed_raw_uranium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_uranium',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_raw_uranium_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_uranium_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_uranium',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_uranium_pile_molten');

    // Molten Bismuth
        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:raw_bismuth_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_block_bismuth_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:bismuth_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bismuth_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/bismuth',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bismuth_ore_molten')

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_bismuth',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_bismuth_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:bismuth_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/bismuth_ingot_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:raw_bismuth',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_bismuth_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_bismuth_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_bismuth',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_bismuth_pile_molten');

    // Molten Irradium
        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:raw_irradium_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_block_irradium_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:irradium_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/irradium_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/irradium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/irradium_ore_molten')

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_irradium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_irradium_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:irradium_bar',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/irradium_bar_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:raw_irradium',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_irradium_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_irradium_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_irradium',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_irradium_pile_molten');

    // Molten Malachite

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:malachite_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/malachite_block_molten');

        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/malachite',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/malachite_ore_molten')

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_malachite',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_malachite_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'enlightened_end:malachite',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/malachite_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_malachite_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_malachite',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_malachite_pile_molten');

    // Molten Steel
        // Carbon, Iron, Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_carbon',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 200
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_steel',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/carbon_iron_steel_molten');

        // Ingots to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ingots/steel',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_steel',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/steel_ingots_molten');

        // Blocks to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'ad_astra:steel_blocks',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_steel',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/steel_blocks_molten');

    // Molten Netherite-Iron
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_iron_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_iron_ingot_molten');

        // Netherite, Iron Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_iron',
                    amount: 400
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_iron_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_iron_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_iron',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_iron_block_molten');

    // Molten Netherite-Gold
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_gold_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_gold_ingot_molten');

        // Netherite, Gold Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_gold',
                    amount: 400
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_gold_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_gold_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_gold',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_gold_block_molten');

    // Molten Netherite-Emerald
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_emerald_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_emerald_ingot_molten');

        // Netherite, Emerald Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_emerald',
                    amount: 400
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_emerald_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_emerald_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_emerald',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_emerald_block_molten');

    // Molten Netherite-Diamond
        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_diamond_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_diamond_ingot_molten');

        // Netherite, Diamond Mixing
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    fluid: 'forge_frontier:molten_netherite',
                    amount: 100
                },
                {
                    fluid: 'forge_frontier:molten_diamond',
                    amount: 400
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_diamond_molten');

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'advancednetherite:netherite_diamond_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_netherite_diamond',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/netherite_diamond_block_molten');

    // Molten Desh
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/desh',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/desh_ore_molten')

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:desh_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/desh_block_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_desh',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_desh_molten');

        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_desh_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_desh_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:desh_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/desh_ingot_molten');

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_desh',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_desh_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_desh_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_desh',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_desh_pile_molten');

    // Molten Calorite
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/calorite',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/calorite_ore_molten')

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:calorite_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/calorite_block_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_calorite',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_calorite_molten');

        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_calorite_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_calorite_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:calorite_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/calorite_ingot_molten');

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_calorite',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_calorite_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_calorite_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_calorite',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_calorite_pile_molten');

    // Molten Ostrum
        // Ore to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    tag: 'forge:ores/ostrum',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 600
                },
                {
                    fluid: 'minecraft:lava',
                    amount: 60
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ostrum_ore_molten')

        // Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:ostrum_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 900
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ostrum_block_molten');

        // Raw to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_ostrum',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_ostrum_molten');

        // Raw Block to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:raw_ostrum_block',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/raw_ostrum_block_molten');

        // Ingot to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'ad_astra:ostrum_ingot',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 100
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/ostrum_ingot_molten');

        // Crushed to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_ostrum',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 200
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_ostrum_molten');

        // Crushed Pile to Molten
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'forge_frontier:crushed_ostrum_pile',
                    amount: 1
                }
            ],
            results: [
                {
                    fluid: 'forge_frontier:molten_ostrum',
                    amount: 1800
                }
            ],
            heatRequirement: "superheated"
        }).id('forge_frontier:mixing/crushed_ostrum_pile_molten');

})