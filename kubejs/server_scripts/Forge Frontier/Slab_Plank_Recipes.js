ServerEvents.recipes(event => {
// Array of wood types and their respective mod ID for planks
const woodTypes = [
    { type: 'oak', mod: 'minecraft' },
    { type: 'spruce', mod: 'minecraft' },
    { type: 'birch', mod: 'minecraft' },
    { type: 'jungle', mod: 'minecraft' },
    { type: 'acacia', mod: 'minecraft' },
    { type: 'dark_oak', mod: 'minecraft' },
    { type: 'crimson', mod: 'minecraft' },
    { type: 'warped', mod: 'minecraft' },
    { type: 'mangrove', mod: 'minecraft'},
    { type: 'cherry', mod: 'minecraft'},
    { type: 'bamboo', mod: 'minecraft'},
    { type: 'pream', mod: 'phantasm'},
    { type: 'aeronos', mod: 'ad_astra'},
    { type: 'strophar', mod: 'ad_astra'},
    { type: 'glacian', mod: 'ad_astra'},
    // { type: 'rose', mod: 'create_dd'},
    // { type: 'smoked', mod: 'create_dd'},
    // { type: 'spirit', mod: 'create_dd'},
    // { type: 'rubber', mod: 'create_dd'},
    { type: 'chorus', mod: 'cataclysm'},
    { type: 'indigo', mod: 'enlightened_end'},
    { type: 'cerulean', mod: 'enlightened_end'},
    { type: 'rotten', mod: 'betterarcheology'},
    { type: 'echo', mod: 'deeperdarker'},
    { type: 'bloom', mod: 'deeperdarker'},
    { type: 'pewen', mod: 'alexscaves'},
    { type: 'thornwood', mod: 'alexscaves'},
    { type: 'alpha', mod: 'regions_unexplored'},
    { type: 'baobab', mod: 'regions_unexplored'},
    { type: 'blackwood', mod: 'regions_unexplored'},
    { type: 'blue_bioshroom', mod: 'regions_unexplored'},
    { type: 'brimwood', mod: 'regions_unexplored'},
    { type: 'cobalt', mod: 'regions_unexplored'},
    { type: 'cypress', mod: 'regions_unexplored'},
    { type: 'dead', mod: 'regions_unexplored'},
    { type: 'eucalyptus', mod: 'regions_unexplored'},
    { type: 'green_bioshroom', mod: 'regions_unexplored'},
    { type: 'joshua', mod: 'regions_unexplored'},
    { type: 'kapok', mod: 'regions_unexplored'},
    { type: 'larch', mod: 'regions_unexplored'},
    { type: 'magnolia', mod: 'regions_unexplored'},
    { type: 'maple', mod: 'regions_unexplored'},
    { type: 'mauve', mod: 'regions_unexplored'},
    { type: 'palm', mod: 'regions_unexplored'},
    { type: 'pine', mod: 'regions_unexplored'},
    { type: 'pink_bioshroom', mod: 'regions_unexplored'},
    { type: 'redwood', mod: 'regions_unexplored'},
    { type: 'socotra', mod: 'regions_unexplored'},
    { type: 'willow', mod: 'regions_unexplored'},
    { type: 'yellow_bioshroom', mod: 'regions_unexplored'},
    { type: 'red_painted', mod: 'regions_unexplored'},
    { type: 'orange_painted', mod: 'regions_unexplored'},
    { type: 'yellow_painted', mod: 'regions_unexplored'},
    { type: 'lime_painted', mod: 'regions_unexplored'},
    { type: 'green_painted', mod: 'regions_unexplored'},
    { type: 'cyan_painted', mod: 'regions_unexplored'},
    { type: 'light_blue_painted', mod: 'regions_unexplored'},
    { type: 'blue_painted', mod: 'regions_unexplored'},
    { type: 'purple_painted', mod: 'regions_unexplored'},
    { type: 'magenta_painted', mod: 'regions_unexplored'},
    { type: 'pink_painted', mod: 'regions_unexplored'},
    { type: 'brown_painted', mod: 'regions_unexplored'},
    { type: 'white_painted', mod: 'regions_unexplored'},
    { type: 'light_gray_painted', mod: 'regions_unexplored'},
    { type: 'gray_painted', mod: 'regions_unexplored'},
    { type: 'black_painted', mod: 'regions_unexplored'}
  ];
  
   // Looping through each wood type
   woodTypes.forEach(wood => {

    // Defining the plank item for each wood type based on its mod
    let plankItem = `${wood.mod}:${wood.type}_planks`;

    // Creating a shapeless recipe for 2 slabs (using the wooden slab type) to 1 plank
    event.shapeless(Item.of(plankItem), [
      `${wood.mod}:${wood.type}_slab`,
      `${wood.mod}:${wood.type}_slab`
    ]).id(`forge_frontier:${wood.type}_slabs_to_plank`);

  });

  // Ashen
  event.custom({
    type: 'minecraft:crafting_shapeless',
    ingredients: [
        {
            item: 'quark:ancient_planks_slab'
        },
        {
            item: 'quark:ancient_planks_slab'
        },
    ],
    result: {
        item: 'quark:ancient_planks'
      }
    }).id( 'forge_frontier:shapeless/ashen_slabs_to_plank' )

  // Azalea
  event.custom({
    type: 'minecraft:crafting_shapeless',
    ingredients: [
        {
            item: 'quark:azalea_planks_slab'
        },
        {
            item: 'quark:azalea_planks_slab'
        }
    ],
    result: {
        item: 'quark:azalea_planks'
      }
    }).id( 'forge_frontier:shapeless/azalea_slabs_to_plank' )

    // Trumpet
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'quark:blossom_planks_slab'
            },
            {
                item: 'quark:blossom_planks_slab'
            }
        ],
        result: {
            item: 'quark:blossom_planks'
        }
        }).id( 'forge_frontier:shapeless/trumpet_slabs_to_plank' )

    // Chip Wood
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'createdieselgenerators:chip_wood_slab'
            },
            {
                item: 'createdieselgenerators:chip_wood_slab'
            }
        ],
        result: {
            item: 'createdieselgenerators:chip_wood_block'
        }
        }).id( 'forge_frontier:shapeless/chip_wood_slabs_to_plank' )
  
})