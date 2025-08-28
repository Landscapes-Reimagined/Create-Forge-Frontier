ServerEvents.recipes(event => {
    const alloys = [
      {
        result: "forge_frontier:molten_netherite_iron",
        amount: 180,
        temperature: 605,
        inputs: [
          { fluid: "tconstruct:molten_netherite", amount: 90 },
          { fluid: "tconstruct:molten_iron", amount: 360 }
        ]
      },
      {
        result: "forge_frontier:molten_netherite_gold",
        amount: 180,
        temperature: 605,
        inputs: [
          { fluid: "forge_frontier:molten_netherite_iron", amount: 90 },
          { fluid: "tconstruct:molten_gold", amount: 360 }
        ]
      },
      {
        result: "forge_frontier:molten_netherite_emerald",
        amount: 180,
        temperature: 605,
        inputs: [
          { fluid: "forge_frontier:molten_netherite_gold", amount: 90 },
          { fluid: "tconstruct:molten_emerald", amount: 360 }
        ]
      },
      {
        result: "forge_frontier:molten_netherite_diamond",
        amount: 180,
        temperature: 605,
        inputs: [
          { fluid: "forge_frontier:molten_netherite_emerald", amount: 90 },
          { fluid: "tconstruct:molten_diamond", amount: 360 }
        ]
      }
    ];
  
    alloys.forEach((recipe, index) => {
      event.custom({
        type: "tconstruct:alloy",
        inputs: recipe.inputs,
        result: {
          fluid: recipe.result,
          amount: recipe.amount
        },
        temperature: recipe.temperature
      }).id(`forge_frontier:alloy/${recipe.result.split(":")[1]}`);
    });
  });
  