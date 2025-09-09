ServerEvents.recipes(event => {

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