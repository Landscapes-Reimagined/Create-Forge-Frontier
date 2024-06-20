ServerEvents.recipes(event => {

    // Casualness Delight
    event.remove({ id: 'casualness_delight:cooking/beef_noodles' })
    event.remove({ id: 'casualness_delight:cooking/bobo_chicken' })
    event.remove({ id: 'casualness_delight:cooking/fish_and_chips' })
    event.remove({ id: 'casualness_delight:cooking/raw_cheese_wheel' })

    // Beef Noodles Recipe Fix
    event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            item: "minecraft:beef"
          },
          {
            item: "minecraft:beef"
          },
          {
            tag: "forge:pasta"
          },
          {
            tag: "forge:vegetables/carrot"
          },
          {
            tag: "forge:crops/cabbage"
          },
          {
            tag: "forge:vegetables/onion"
          }
        ],
        result: {
          item: "casualness_delight:beef_noodles"
        },
        container: {
          item: "minecraft:bowl"
        },
        cookingtime: 200,
        experience: 10
      }).id('forge_frontier:beef_noodles')

      // Bobo Chicken Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        ingredients: [
          {
            item: "casualness_delight:raw_cabbage_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_cabbage_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_potato_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_potato_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_chicken_bobo_chicken"
          },
          {
            item: "casualness_delight:raw_chicken_bobo_chicken"
          }
        ],
        result: {
          item: "casualness_delight:bobo_chicken"
        },
        container: {
          item: "farmersdelight:tomato_sauce"
        },
        cookingtime: 200,
        experience: 10
      }).id('forge_frontier:bobo_chicken')

      // Fish and Chips Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "meals",
        ingredients: [
          {
            item: "farmersdelight:cod_slice"
          },
          {
            tag: "forge:vegetables/potato"
          },
          {
            tag: "forge:vegetables/potato"
          },
          {
            tag: "forge:dough"
          }
        ],
        result: {
          item: "casualness_delight:fish_and_chips"
        },
        container: {
          item: "minecraft:bowl"
        },
        cookingtime: 200,
        experience: 10
      }).id('forge_frontier:fish_and_chips')

      // Raw Cheese Wheel Recipe Fix
      event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "misc",
        ingredients: [
          {
            tag: "forge:milk"
          },
          {
            tag: "forge:milk"
          },
          {
            tag: "forge:milk"
          },
          {
            tag: "forge:mushrooms"
          },
          {
            tag: "forge:mushrooms"
          },
          {
            tag: "forge:mushrooms"
          }
        ],
        result: {
          item: "casualness_delight:raw_cheese_wheel"
        },
        cookingtime: 400,
        experience: 10
      }).id('forge_frontier:raw_cheese_wheel')
            
})
