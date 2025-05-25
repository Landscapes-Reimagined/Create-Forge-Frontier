// Custom Crushed Ore Piles Shaped and Shapeless Recipes
ServerEvents.recipes(event => {

    const ores = [
        { pile: 'crushed_bismuth_pile', raw: 'forge_frontier:crushed_bismuth' },
        { pile: 'crushed_calorite_pile', raw: 'forge_frontier:crushed_calorite' },
        { pile: 'crushed_desh_pile', raw: 'forge_frontier:crushed_desh' },
        { pile: 'crushed_irradium_pile', raw: 'forge_frontier:crushed_irradium' },
        { pile: 'crushed_malachite_pile', raw: 'forge_frontier:crushed_malachite' },
        { pile: 'crushed_ostrum_pile', raw: 'forge_frontier:crushed_ostrum' },
		{ pile: 'crushed_verdantine_pile', raw: 'forge_frontier:crushed_verdantine'},
		{ pile: 'crushed_glacium_pile', raw: 'forge_frontier:crushed_glacium'},
		{ pile: 'crushed_debris_pile', raw: 'forge_frontier:crushed_debris'},
		{ pile: 'crushed_resonite_pile', raw: 'forge_frontier:crushed_resonite'},
		{ pile: 'crushed_aubrum_pile', raw: 'forge_frontier:crushed_aubrum'},
		{ pile: 'crushed_pyroclast_pile', raw: 'forge_frontier:crushed_pyroclast'},
		{ pile: 'crushed_frostite_pile', raw: 'forge_frontier:crushed_frostite'},
		{ pile: 'crushed_stellaris_pile', raw: 'forge_frontier:crushed_stellaris'},
		{ pile: 'crushed_radiantite_pile', raw: 'forge_frontier:crushed_radiantite'},
		{ pile: 'crushed_shale_pile', raw: 'forge_frontier:crushed_shale'},
		{ pile: 'crushed_palerock_pile', raw: 'forge_frontier:crushed_palerock'},
		{ pile: 'crushed_guanite_pile', raw: 'forge_frontier:crushed_guanite'},
		{ pile: 'crushed_pearlyte_pile', raw: 'forge_frontier:crushed_pearlyte'},
		{ pile: 'crushed_amberlite_pile', raw: 'forge_frontier:crushed_amberlite'},
		{ pile: 'crushed_azurnium_pile', raw: 'forge_frontier:crushed_azurnium'},
		{ pile: 'crushed_neodymrium_pile', raw: 'forge_frontier:crushed_neodymrium'},
		{ pile: 'crushed_uraniumnite_pile', raw: 'forge_frontier:crushed_uraniumnite'},
		{ pile: 'crushed_sulphite_pile', raw: 'forge_frontier:crushed_sulphite'},
    ];

    // Helper function for shapeless recipes
    const createShapelessRecipe = (pile, raw) => {
        event.custom({
            type: "minecraft:crafting_shapeless",
            ingredients: [{ item: `forge_frontier:${pile}` }],
            result: { item: raw, count: 9 }
        }).id(`forge_frontier:shapeless/${pile}`);
    };

    // Helper function for shaped recipes
    const createShapedRecipe = (pile, raw) => {
        event.shaped(
            Item.of(`forge_frontier:${pile}`),
            ['AAA', 'AAA', 'AAA'],
            { A: raw }
        ).id(`forge_frontier:shaped/${pile}`);
    };

    // Create recipes for all ores
    ores.forEach(ore => {
        createShapelessRecipe(ore.pile, ore.raw);
        createShapedRecipe(ore.pile, ore.raw);
    });

});
