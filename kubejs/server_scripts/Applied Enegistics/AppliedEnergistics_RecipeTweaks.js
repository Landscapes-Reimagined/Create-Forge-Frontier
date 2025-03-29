ServerEvents.recipes(event => {

// Removed OP Item in Relation to Create
event.remove({ id: 'expatternprovider:cobblestone_cell'})
event.remove({ id: 'expattenprovider:ex_inscriber'})

// Remove In - World Transformation Liquid Recipes
event.remove({ id: 'ae2:transform/fluix_crystals'})
event.remove({ id: 'ae2:transform/fluix_crystal'})
event.remove({ id: 'ae2:transform/flawed_budding_quartz'})
event.remove({ id: 'ae2:transform/chipped_budding_quartz'})
event.remove({ id: 'ae2:transform/damaged_budding_quartz'})
event.remove({ id: 'ae2:transform/certus_quartz_crystals'})


// New Charger Recipe
event.remove({ id: 'ae2:network/blocks/crystal_processing_charger'})
event.shaped(
  Item.of('ae2:charger'),
  [
    'IOI',
    'S  ',
    'IOI'
  ],
  {
    I: 'create_new_age:overcharged_iron',
    S: 'ae2:printed_silicon',
    O: 'create_dd:overcharge_alloy'
  }
).id( 'forge_frontier:shaped/charger')


// New ME Import Bus Recipe
event.remove({ id: 'ae2:network/parts/import_bus'})
event.shaped(
  Item.of('ae2:import_bus'),
  [
    ' A ',
    'IPI',
    ' C '
  ],
  {
    A: 'ae2:annihilation_core',
    I: 'minecraft:iron_ingot',
    P: 'minecraft:sticky_piston',
    C: 'create:smart_chute'
  }
).id( 'forge_frontier:shaped/import_bus' )

// New ME Export Bus Recipe
event.remove({ id: 'ae2:network/parts/export_bus'})
event.shaped(
  Item.of('ae2:export_bus'),
  [
    'IFI',
    ' P ',
    ' C '
  ],
  {
    I: 'minecraft:iron_ingot',
    F: 'ae2:formation_core',
    P: 'minecraft:piston',
    C: 'create:smart_chute'
  }
).id( 'forge_frontier:shaped/export_bus' )

// New ME Terminal Recipe
event.remove({ id: 'ae2:network/parts/terminals'})
event.custom({
  type: 'create:mechanical_crafting',
  pattern: [
    'FLA',
    'PTP'
  ],
  key: {
    F: Ingredient.of('ae2:formation_core'),
    L: Ingredient.of('ae2:logic_processor'),
    A: Ingredient.of('ae2:annihilation_core'),
    P: Ingredient.of('#ae2:illuminated_panel'),
    T: Ingredient.of('create:stock_ticker')
  },
  result: Ingredient.of('ae2:terminal'),
  acceptMirrored: false
}).id('forge_frontier:mechancial_crafting/terminal');

// New ME Storage Terminal Recipe
event.remove({ id: 'ae2:network/parts/terminals_crafting'})
event.custom({
  type: 'create:mechanical_crafting',
  pattern: [
    'CCC',
    'PTP',
    'CCC'
  ],
  key: {
    C: Ingredient.of('create:mechanical_crafter'),
    P: Ingredient.of('ae2:calculation_processor'),
    T: Ingredient.of('ae2:terminal')
  },
  result: Ingredient.of('ae2:crafting_terminal'),
  acceptMirrored: false
}).id('forge_frontier:mechancial_crafting/crafting_terminal');
   
})