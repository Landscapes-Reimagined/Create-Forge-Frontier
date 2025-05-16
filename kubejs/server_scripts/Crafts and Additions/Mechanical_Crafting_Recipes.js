// Crafts and Additions Forge Frontier Custom Mechanical Crafting Recipes
ServerEvents.recipes(event => {

    // Define Mechanical Crafting Recipes as an Array of Objects
    let mechanicalCraftingRecipes = [
        {
            id: "electric_motor",
            pattern: [
                "  A  ",
                " GWG ",
                "GWRWG",
                " GCG "
            ],
            key: {
                "A": { item: "create:andesite_alloy" },
                "C": { item: "createaddition:capacitor" },
                "G": { item: "create_new_age:overcharged_golden_sheet" },
                "R": { tag: "forge:rods/iron" },
                "W": { item: "create_new_age:copper_wire" }
            },
            result: "createaddition:electric_motor"
        },
        {
            id: "alternator",
            pattern: [
                "  A  ",
                " IWI ",
                "IWRWI",
                " ICI "
            ],
            key: {
                "A": { item: "create:andesite_alloy" },
                "C": { item: "createaddition:capacitor" },
                "I": { item: "create_new_age:overcharged_iron_sheet" },
                "R": { tag: "forge:rods/iron" },
                "W": { item: "create_new_age:copper_wire" }
            },
            result: "createaddition:alternator"
        },
        {
            id: "tesla_coil",
            pattern: [
                "WWW",
                " A ",
                "CRC",
                "SES"
            ],
            key: {
                "A": { item: "create:andesite_alloy" },
                "C": { item: "createaddition:capacitor" },
                "S": { item: "create_new_age:overcharged_golden_sheet" },
                "R": { item: "create_new_age:energiser_t3" },
                "W": { item: "create_new_age:copper_wire" },
                "E": { item: "create:electron_tube" }
            },
            result: "createaddition:tesla_coil"
        }
    ];

    // Loop Through Mechanical Crafting Recipes
    for (let recipe of mechanicalCraftingRecipes) {
        event.remove({ id: `createaddition:mechanical_crafting/${recipe.id}` });

        event.custom({
            type: "create:mechanical_crafting",
            pattern: recipe.pattern,
            key: recipe.key,
            result: { item: recipe.result }
        }).id(`forge_frontier:mechanical_crafting/${recipe.id}`);
    }

});
