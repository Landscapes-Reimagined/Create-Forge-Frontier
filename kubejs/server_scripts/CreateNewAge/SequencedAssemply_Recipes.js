ServerEvents.recipes(event => {
// New New-Age Wire Recipes
  function addSequencedAssembly(idSuffix, ingredientItem, resultItem, deployItem) {
    event.custom({
      type: "create:sequenced_assembly",
      ingredient: { item: ingredientItem },
      transitionalItem: { item: ingredientItem },
      results: [
        { count: 4, item: resultItem }
      ],
      loops: 4,
      sequence: [
        {
          type: "create:cutting",
          ingredients: [{ item: ingredientItem }],
          results: [{ item: ingredientItem }]
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: ingredientItem },
            { item: deployItem }
          ],
          results: [{ item: ingredientItem }]
        }
      ]
    }).id(`forge_frontier:sequenced_assembly/${idSuffix}`);
  }

  // === Removes broken recipes ===
  [
    'create_new_age:cutting/copper_sheet',
    'create_new_age:cutting/overcharged_iron_sheet',
    'create_new_age:cutting/overcharged_golden_sheet',
    'create_new_age:diamond_wire'
  ].forEach(id => event.remove({ id: id }));

  // === Copper Wire Recipe ===
  addSequencedAssembly(
    'copper_wire',
    'createaddition:spool',
    'create_new_age:copper_wire',
    'create:copper_sheet'
  );

  // === Overcharged Iron Wire Recipe ===
  addSequencedAssembly(
    'overcharged_iron_wire',
    'create_new_age:copper_wire',
    'create_new_age:overcharged_iron_wire',
    'create_new_age:overcharged_iron_sheet'
  );

  // === Overcharged Golden Wire Recipe ===
  addSequencedAssembly(
    'overcharged_golden_wire',
    'create_new_age:overcharged_iron_wire',
    'create_new_age:overcharged_golden_wire',
    'create_new_age:overcharged_golden_sheet'
  );

  // === Overcharged Diamond Wire Recipe ===
  addSequencedAssembly(
    'overcharged_diamond_wire',
    'create_new_age:overcharged_golden_wire',
    'create_new_age:overcharged_diamond_wire',
    'create_new_age:overcharged_diamond'
  );

});
