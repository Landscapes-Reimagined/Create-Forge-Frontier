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
          item: "create_ethium:amethyst_mix",
          count: 1
        }
      ],
      heatRequirement: "heated"
    }).id('forge_frontier:mixing/amethyst_mix');
    
    // New Echo Compound Mixing Recipe
    event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: "create_ethium:amethyst_mix",
          },
          {
            item: "create_ethium:echo_dust"
          },
        ],
        results: [
          {
            count: 1,
            item: "create_ethium:echo_compound",
          }
        ],  
        heatRequirement: "heated"
      }).id('forge_frontier:mixing/echo_compound')   

})