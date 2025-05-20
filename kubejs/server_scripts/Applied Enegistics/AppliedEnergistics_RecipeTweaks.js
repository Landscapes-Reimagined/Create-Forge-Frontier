ServerEvents.recipes(event => {

// Removed OP Item in Relation to Create
event.remove({ id: "expatternprovider:cobblestone_cell"})
event.remove({ id: "expattenprovider:ex_inscriber"})

// Remove In - World Transformation Liquid Recipes
event.remove({ id: "ae2:transform/fluix_crystals"})
event.remove({ id: "ae2:transform/fluix_crystal"})
event.remove({ id: "ae2:transform/flawed_budding_quartz"})
event.remove({ id: "ae2:transform/chipped_budding_quartz"})
event.remove({ id: "ae2:transform/damaged_budding_quartz"})
event.remove({ id: "ae2:transform/certus_quartz_crystals"})

// New Charger Recipe
event.remove({ id: "ae2:network/blocks/crystal_processing_charger"})
event.shaped(
  Item.of("ae2:charger"),
  [
    "IBI",
    "S  ",
    "IBI"
  ],
  {
    I: "create_new_age:overcharged_iron",
    S: "ae2:printed_silicon",
    B: "create_additions_synthetics:dense_brass_sheet"
  }
).id( "forge_frontier:shaped/charger")


// New ME Import Bus Recipe
event.remove({ id: "ae2:network/parts/import_bus"})
event.shaped(
  Item.of("ae2:import_bus"),
  [
    " C ",
    " P ",
    "IAI"
  ],
  {
    A: "ae2:annihilation_core",
    I: "minecraft:iron_ingot",
    P: "minecraft:sticky_piston",
    C: "create:smart_chute"
  }
).id( "forge_frontier:shaped/import_bus" )

// New ME Export Bus Recipe
event.remove({ id: "ae2:network/parts/export_bus"})
event.shaped(
  Item.of("ae2:export_bus"),
  [
    "IFI",
    " P ",
    " C "
  ],
  {
    I: "minecraft:iron_ingot",
    F: "ae2:formation_core",
    P: "minecraft:piston",
    C: "create:smart_chute"
  }
).id( "forge_frontier:shaped/export_bus" )

// New ME Terminal Recipe
event.remove({ id: "ae2:network/parts/terminals"})
event.custom({
  type: "create:mechanical_crafting",
  pattern: [
    "FLA",
    "DTD"
  ],
  key: {
    F: Ingredient.of("ae2:formation_core"),
    L: Ingredient.of("ae2:logic_processor"),
    A: Ingredient.of("ae2:annihilation_core"),
    D: Ingredient.of("create:display_board"),
    T: Ingredient.of("create:stock_ticker")
  },
  result: Ingredient.of("ae2:terminal"),
  acceptMirrored: false
}).id("forge_frontier:mechancial_crafting/terminal");

// New ME Storage Terminal Recipe
event.remove({ id: "ae2:network/parts/terminals_crafting"})
event.custom({
  type: "create:mechanical_crafting",
  pattern: [
    "BcB",
    "PTP",
    "BCB"
  ],
  key: {
    B: Ingredient.of("create_additions_synthetics:dense_brass_sheet"),
    c: Ingredient.of("create:crafting_blueprint"),
    P: Ingredient.of("ae2:calculation_processor"),
    T: Ingredient.of("ae2:terminal"),
    C: Ingredient.of("create:mechanical_crafter")
  },
  result: Ingredient.of("ae2:crafting_terminal"),
  acceptMirrored: false
}).id("forge_frontier:mechancial_crafting/crafting_terminal");

// In World Transformation to Create Mixing Recipes
      
  // Fluix Crystals
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'ae2:charged_certus_quartz_crystal',
          },
          {
            item: 'minecraft:redstone'
          },
          {
            item: 'minecraft:quartz'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'ae2:fluix_crystal',
            count: 2
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/fluix_crystals')
      
      // Fluix Crystal
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'ae2:charged_certus_quartz_crystal',
          },
          {
            item: 'ae2:fluix_dust'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'ae2:fluix_crystal',
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/fluix_crystal')
      
      // Flawed Budding Quartz
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'ae2:charged_certus_quartz_crystal',
          },
          {
            item: 'ae2:chipped_budding_quartz'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'ae2:flawed_budding_quartz',
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/flawed_budding_quartz')
      
      // Certus Quartz Crystals
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'ae2:charged_certus_quartz_crystal',
          },
          {
            item: 'ae2:certus_quartz_dust'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'ae2:certus_quartz_crystal',
            count: 2
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/certus_quartz_crystals')

      // Chipped Budding Quartz
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'ae2:charged_certus_quartz_crystal',
          },
          {
            item: 'ae2:damaged_budding_quartz'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'ae2:chipped_budding_quartz',
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/chipped_budding_quartz')
      
      // Damaged Budding Quartz
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: 'ae2:charged_certus_quartz_crystal',
          },
          {
            item: 'ae2:quartz_block'
          },
          {
            fluid: 'minecraft:water',
            amount: 1000
          }
        ],
        results: [
          {
            item: 'ae2:damaged_budding_quartz',
          }
        ],
        processingTime: 100, 
      }).id('forge_frontier:mixing/damaged_budding_quartz')      

})