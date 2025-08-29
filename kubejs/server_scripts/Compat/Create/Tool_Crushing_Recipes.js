ServerEvents.recipes(event => 
    {
        // Define tool materials and their crushing results
        const tools = {
            netherite: { scrap: 2, diamond: 1 },
            diamond: { diamond: 1 },
            iron: { iron: 1 },
            gold: { gold: 1 },
            stone: { cobblestone: 1 },
            wooden: { oak_planks: 1 },
            brass: { brass_ingot: 1 } 
        };

        // Define tool types
        const toolTypes = ["shovel", "pickaxe", "axe", "hoe", "sword"];

        // Define special tool processing times and bonus drops
        const specialTools = {
            netherite_pickaxe: { scrap: 3, diamond: 2 },
            netherite_axe: { scrap: 3, diamond: 2 },
            netherite_upgrade_smithing_template: { chance: 0.1 }
        };

        // Generate recipes for standard tools
        Object.entries(tools).forEach(([material, drops]) => {
            toolTypes.forEach(type => {
                let tool = material === "brass" 
                    ? `create_sa:brass_${type}`
                    : `minecraft:${material}_${type}`;
                let results = [];

                if (drops.scrap) results.push({ item: "minecraft:netherite_scrap", count: drops.scrap });
                if (drops.diamond) results.push({ item: "minecraft:diamond", count: drops.diamond });
                if (drops.iron) results.push({ item: "minecraft:iron_ingot", count: drops.iron });
                if (drops.gold) results.push({ item: "minecraft:gold_ingot", count: drops.gold });
                if (drops.cobblestone) results.push({ item: "minecraft:cobblestone", count: drops.cobblestone });
                if (drops.oak_planks) results.push({ item: "minecraft:oak_planks", count: drops.oak_planks });
                if (drops.brass_ingot) results.push({ item: "create:brass_ingot", count: drops.brass_ingot }); // Create SA brass tool crushing result

                if (specialTools[tool]) {
                    Object.entries(specialTools[tool]).forEach(([item, extra]) => {
                        results.push({ item: `minecraft:${item}`, count: extra.count || 1, chance: extra.chance || 1.0 });
                    });
                }

                event.custom({
                    type: "create:crushing",
                    ingredients: [Ingredient.of(tool).toJson()],
                    processingTime: 200,
                    results: results
                }).id(`forge_frontier:crushing/${material}_${type}`);
            });
        });

        // Advanced Netherite Tools (Corrected)
        const advancedNetheriteTiers = ["iron", "gold", "emerald", "diamond"];
        advancedNetheriteTiers.forEach((tier, index) => {
            // Use vanilla netherite for the first tier, otherwise use previous advanced tier
            const prevTier = index === 0 ? "netherite" : advancedNetheriteTiers[index - 1];

            toolTypes.forEach(type => {
                let tool = `advancednetherite:netherite_${tier}_${type}`;
                let prevTool = index === 0 
                    ? `minecraft:netherite_${type}` // First tier upgrades from vanilla netherite
                    : `advancednetherite:netherite_${prevTier}_${type}`; // Other tiers upgrade from previous advanced netherite

                event.custom({
                    type: "create:crushing",
                    ingredients: [Ingredient.of(tool).toJson()],
                    processingTime: 200,
                    results: [
                        { item: `advancednetherite:netherite_${tier}_ingot`, count: 1 },
                        { item: prevTool, count: 1 },
                        { item: `forge_frontier:netherite_${tier}_upgrade`, count: 1, chance: 0.1 }
                    ]
                }).id(`forge_frontier:crushing/netherite_${tier}_${type}`);
            });
        });
    }
);