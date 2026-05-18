ServerEvents.recipes(event => {

    // New Ethium Recipe
    event.remove({ id: "create_ethium:ethiumrecipe"})
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "create_ethium:polished_stellarite"
        },
        {
          fluid: "create_ethium:echo_compound_fluid",  
          amount: 125 
        },
        {
          fluid: "create_ethium:chorus_nectar_fluid",
          amount: 125
        },
        {
          item: "minecraft:netherite_ingot"
        },
        {
          item: "create:brass_ingot"
        },
        {
          item: "amendments:dragon_charge"
        }
      ],
      results: [
        {
          item: "create_ethium:ethium_ingot",
        }
      ],
      heatRequirement: "superheated"
    }).id('forge_frontier:mixing/ethium_ingot');
    
    // New Amethyst Mix Mixing Recipe
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: "minecraft:amethyst_shard"
        },
        {
          fluid: "create:potion",  
          nbt: {
            Bottle: "REGULAR",
            Potion: "minecraft:thick"
          },
          amount: 250 
        }
      ],
      results: [
        {
          fluid: "forge_frontier:molten_amethyst_mix",
          amount: 250
        }
      ],
      heatRequirement: "heated"
    }).id('forge_frontier:mixing/amethyst_mix');
    
    // New Echo Compound Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            fluid: "forge_frontier:molten_amethyst_mix",
            amount: 250
          },
          {
            item: "create_ethium:echo_dust"
          },
        ],
        results: [
          {
            amount: 250,
            fluid: "create_ethium:echo_compound_fluid",
          }
        ],  
        heatRequirement: "heated"
      }).id('forge_frontier:mixing/echo_compound')
      
})