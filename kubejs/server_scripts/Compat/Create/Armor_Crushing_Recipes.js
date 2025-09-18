ServerEvents.recipes(event => 
    {
        // Define armor materials and their crushing results
            const armors = {
                netherite: { scrap: 2, diamond: 1 },
                diamond: { diamond: 2 },
                iron: { iron: 2 },
                gold: { gold: 2 },
                leather: { leather: 3 },
                chainmail: { iron_nugget: 3 },
                brass: { brass_ingot: 2 } // Added Create SA brass armor
            };

        // Define armor types
            const armorTypes = ["helmet", "chestplate", "leggings", "boots"];

        // Special handling for netherite armor (bonuses)
            const specialArmor = {
                netherite_helmet: { scrap: 3, diamond: 2 },
                netherite_chestplate: { scrap: 4, diamond: 3 },
                netherite_leggings: { scrap: 3, diamond: 3 },
                netherite_boots: { scrap: 2, diamond: 2 },
                netherite_upgrade_smithing_template: { chance: 0.1 }
            };

        // Generate recipes for standard armors
            Object.entries(armors).forEach(([material, drops]) => {
                armorTypes.forEach(type => {
                    let armor = material === "brass" 
                        ? `create_sa:brass_${type}` // Create SA brass armor
                        : `minecraft:${material}_${type}`;
                    let results = [];

                    if (drops.scrap) results.push({ item: "minecraft:netherite_scrap", count: drops.scrap });
                    if (drops.diamond) results.push({ item: "minecraft:diamond", count: drops.diamond });
                    if (drops.iron) results.push({ item: "minecraft:iron_ingot", count: drops.iron });
                    if (drops.gold) results.push({ item: "minecraft:gold_ingot", count: drops.gold });
                    if (drops.leather) results.push({ item: "minecraft:leather", count: drops.leather });
                    if (drops.iron_nugget) results.push({ item: "minecraft:iron_nugget", count: drops.iron_nugget });
                    if (drops.brass_ingot) results.push({ item: "create:brass_ingot", count: drops.brass_ingot }); // Create SA brass armor crushing

                    if (specialArmor[armor]) {
                        Object.entries(specialArmor[armor]).forEach(([item, extra]) => {
                            results.push({ item: `minecraft:${item}`, count: extra.count || 1, chance: extra.chance || 1.0 });
                        });
                    }

                    event.custom({
                        type: "create:crushing",
                        ingredients: [Ingredient.of(armor).toJson()],
                        processingTime: 200,
                        results: results
                    }).id(`forge_frontier:crushing/${material}_${type}`);
                });
            });

        // Advanced Netherite Armor (Corrected)
            const advancedNetheriteTiers = ["iron", "gold", "emerald", "diamond"];
            advancedNetheriteTiers.forEach((tier, index) => {
                // Use vanilla netherite armor for the first tier, otherwise use previous advanced tier
                    const prevTier = index === 0 ? "netherite" : advancedNetheriteTiers[index - 1];

                    armorTypes.forEach(type => {
                        let armor = `advancednetherite:netherite_${tier}_${type}`;
                        let prevArmor = index === 0 
                            ? `minecraft:netherite_${type}` // First tier upgrades from vanilla netherite armor
                            : `advancednetherite:netherite_${prevTier}_${type}`; // Higher tiers upgrade from previous advanced netherite

                        event.custom({
                            type: "create:crushing",
                            ingredients: [Ingredient.of(armor).toJson()],
                            processingTime: 200,
                            results: [
                                { item: `advancednetherite:netherite_${tier}_ingot`, count: 1 },
                                { item: prevArmor, count: 1 },
                                { item: `forge_frontier:netherite_${tier}_upgrade`, count: 1, chance: 0.1 }
                            ]
                        }).id(`forge_frontier:crushing/netherite_${tier}_${type}`);
                    });
        });
    }
);