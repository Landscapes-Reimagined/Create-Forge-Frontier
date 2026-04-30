ServerEvents.recipes(event =>
    {
        // Creates Creative Energy Fluid
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: "ad_astra_rocketed:tier_7_rocket",
                        count: 1
                    },
                    {
                        fluid: "forge_frontier:molten_netherite_diamond",
                        amount: 1000
                    },
                    {
                        fluid: "ad_astra:cryo_fuel",
                        amount: 1000
                    }
                ],
                results: [
                    {
                        fluid: "forge_frontier:creative_energy_fluid",
                        amount: 1000
                    }
                ],
                heatRequirement: "superheated"
            }).id("forge_frontier:mixing/creative_energy_fluid");

    // Creative Item Recipes
        const CREATIVE_FLUID = "forge_frontier:creative_energy_fluid";

        const CREATIVE_RECIPES = [
            {
                input: "create:blaze_cake",
                output: "create:creative_blaze_cake",
                id: "creative_blaze_cake"
            },
            {
                input: "createutilities:void_motor",
                output: "create:creative_motor",
                id: "creative_motor"
            },
            {
                input: "createutilities:void_tank",
                output: "create:creative_fluid_tank",
                id: "creative_fluid_tank"
            },
            {
                input: "create_bs:netherite_item_vault",
                output: "create:creative_crate",
                id: "creative_crate"
            },
            {
                input: "create_better_motors:nitro_motor",
                output: "createaddition:creative_energy",
                id: "creative_energy"
            },
            {
                input: "create_sa:large_fueling_tank",
                output: "create_sa:creative_filling_tank",
                id: "creative_filling_tank"
            },
            {
                input: "ad_astra_giselle_addon:netherite_oxygen_can",
                output: "ad_astra_giselle_addon:creative_oxygen_can",
                id: "creative_oxygen_can"
            }
        ];

        CREATIVE_RECIPES.forEach(recipe => {
            event.custom({
            type: "create:filling",
            ingredients: [
                {
                    fluid: CREATIVE_FLUID,
                    amount: 1000
                },
                {
                    item: recipe.input,
                    count: 1
                }
            ],
            results: [
                {
                    item: recipe.output,
                    count: 1
                }
            ]
            }).id(`forge_frontier:filling/${recipe.id}`);
        });

        // Creative Fluid Vessel Recipe
            event.custom({
                type: 'minecraft:crafting_shapeless',
                ingredients: [
                    {
                        item: "create:creative_fluid_tank"
                    }
                ],
                result: {
                    item: "create_connected:creative_fluid_vessel",
                    count: 1
                }
            }).id( 'forge_frontier:shapeless/creative_fluid_vessel' ) 
    }
)