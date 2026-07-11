ServerEvents.recipes(event => {
  const ventRecipes = [
    {
      vent: 'create_resource_vents:active_asurine_vent',
      incomplete: 'forge_frontier:incomplete_active_asurine_vent',
      fluid: 'create_dd:cream',
      secondary: 'createcompression:compressed_zinc_2x'
    },
    {
      vent: 'create_resource_vents:active_veridium_vent',
      incomplete: 'forge_frontier:incomplete_active_veridium_vent',
      fluid: 'create_dd:caramel_milkshake',
      secondary: 'createcompression:compressed_copper_2x'
    },
    {
      vent: 'create_resource_vents:active_crimsite_vent',
      incomplete: 'forge_frontier:incomplete_active_crimsite_vent',
      fluid: 'create_dd:strawberry_milkshake',
      secondary: 'createcompression:compressed_iron_2x'
    },
    {
      vent: 'create_resource_vents:active_ochrum_vent',
      incomplete: 'forge_frontier:incomplete_active_ochrum_vent',
      fluid: 'create_dd:glowberry_milkshake',
      secondary: 'createcompression:compressed_gold_2x'
    },
    {
      vent: 'create_resource_vents:active_scorchia_vent',
      incomplete: 'forge_frontier:incomplete_active_scorchia_vent',
      fluid: 'create_dd:hot_chocolate',
      secondary: 'createcompression:compressed_coal_2x'
    },
    {
      vent: 'create_resource_vents:active_scoria_vent',
      incomplete: 'forge_frontier:incomplete_active_scoria_vent',
      fluid: 'create_dd:chocolate_milkshake',
      secondary: 'createcompression:compressed_lapis_2x'
    },
    {
      vent: 'create_resource_vents:active_potassic_vent',
      incomplete: 'forge_frontier:incomplete_active_potassic_vent',
      fluid: 'create_dd:vanilla_milkshake',
      secondary: 'forge_frontier:compressed_tin_2x'
    },
    {
      vent: 'create_resource_vents:active_verdantine_vent',
      incomplete: 'forge_frontier:incomplete_active_verdantine_vent',
      fluid: 'create_confectionery:white_chocolate',
      secondary: 'createcompression:compressed_emerald_2x'
    },
    {
      vent: 'create_resource_vents:active_ancient_debris_vent',
      incomplete: 'forge_frontier:incomplete_active_ancient_debris_vent',
      fluid: 'forge_frontier:neapolitan_milkshake',
      secondary: 'createcompression:compressed_netherite_1x'
    },
    {
      vent: 'create_resource_vents:active_resonite_vent',
      incomplete: 'forge_frontier:incomplete_active_resonite_vent',
      fluid: 'resonant_synthesis:resonarium',
      secondary: 'forge_frontier:compressed_echo_shard_2x'
    },
    {
      vent: 'create_resource_vents:active_aubrum_vent',
      incomplete: 'forge_frontier:incomplete_active_aubrum_vent',
      fluid: 'forge_frontier:cheese',
      secondary: 'forge_frontier:compressed_desh_2x'
    },
    {
      vent: 'create_resource_vents:active_stellaris_vent',
      incomplete: 'forge_frontier:incomplete_active_stellaris_vent',
      fluid: 'forge_frontier:pomegranate_milkshake',
      secondary: 'forge_frontier:compressed_ostrum_2x'
    },
    {
      vent: 'create_resource_vents:active_pyroclast_vent',
      incomplete: 'forge_frontier:incomplete_active_pyroclast_vent',
      fluid: 'forge_frontier:adzuki_milkshake',
      secondary: 'forge_frontier:compressed_calorite_2x'
    },
    {
      vent: 'create_resource_vents:active_frostite_vent',
      incomplete: 'forge_frontier:incomplete_active_frostite_vent',
      fluid: 'brewinandchewin:dread_nog',
      secondary: 'forge_frontier:compressed_etrium_2x'
    },
    {
      vent: 'create_resource_vents:active_noxrock_vent',
      incomplete: 'forge_frontier:incomplete_active_noxrock_vent',
      fluid: 'create_confectionery:ruby_chocolate',
      secondary: 'forge_frontier:compressed_luxite_2x'
    },
    {
      vent: 'create_resource_vents:active_gneiss_vent',
      incomplete: 'forge_frontier:incomplete_active_gneiss_vent',
      fluid: 'create_confectionery:ruby_chocolate',
      secondary: 'forge_frontier:compressed_tungsten_2x'
    },
    {
      vent: 'create_resource_vents:active_endritus_vent',
      incomplete: 'forge_frontier:incomplete_active_endritus_vent',
      fluid: 'create_confectionery:ruby_chocolate',
      secondary: 'forge_frontier:compressed_adamantite_2x'
    },
    {
      vent: 'create_resource_vents:active_pearlyte_vent',
      incomplete: 'forge_frontier:incomplete_active_pearlyte_vent',
      fluid: 'minecraft:water',
      secondary: 'forge_frontier:compressed_pearl_2x'
    },
    {
      vent: 'create_resource_vents:active_amberlite_vent',
      incomplete: 'forge_frontier:incomplete_active_amberlite_vent',
      fluid: 'create:honey',
      secondary: 'forge_frontier:compressed_amber_2x'
    },
    {
      vent: 'create_resource_vents:active_guanite_vent',
      incomplete: 'forge_frontier:incomplete_active_guanite_vent',
      fluid: 'sliceanddice:fertilizer',
      secondary: 'forge_frontier:compressed_guano_2x'
    },
    {
      vent: 'create_resource_vents:active_neodymrium_vent',
      incomplete: 'forge_frontier:incomplete_active_neodymrium_vent',
      fluid: 'createmetallurgy:molten_iron',
      secondary: 'forge_frontier:compressed_scarlet_neodymium_2x'
    },
    {
      vent: 'create_resource_vents:active_azurnium_vent',
      incomplete: 'forge_frontier:incomplete_active_azurnium_vent',
      fluid: 'createmetallurgy:molten_iron',
      secondary: 'forge_frontier:compressed_azure_neodymium_2x'
    },
    {
      vent: 'create_resource_vents:active_uraniumnite_vent',
      incomplete: 'forge_frontier:incomplete_active_uraniumnite_vent',
      fluid: 'alexscaves:acid',
      secondary: 'forge_frontier:compressed_uranium_2x'
    },
    {
      vent: 'create_resource_vents:active_sulphite_vent',
      incomplete: 'forge_frontier:incomplete_active_sulphite_vent',
      fluid: 'alexscaves:acid',
      secondary: 'forge_frontier:compressed_sulfur_2x'
    },
    {
      vent: 'create_resource_vents:active_lost_debris_vent',
      incomplete: 'forge_frontier:incomplete_active_lost_debris_vent',
      fluid: 'create_ethium:chorus_nectar_fluid',
      secondary: 'forge_frontier:compressed_ethium_1x'
    },
    {
      vent: 'create_resource_vents:active_glacium_vent',
      incomplete: 'forge_frontier:incomplete_active_glacium_vent',
      fluid: 'create_confectionery:black_chocolate',
      secondary: 'createcompression:compressed_diamond_2x'
    }
  ]

  ventRecipes.forEach(recipe => {
    const ventName = recipe.vent.split(':')[1]

    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: { item: recipe.vent },
      transitionalItem: { item: recipe.incomplete },
      loops: 2,
      results: [
        { item: recipe.vent, count: 2 }
      ],
      sequence: [
        {
          type: 'create:deploying',
          ingredients: [
            { item: recipe.incomplete },
            { item: recipe.secondary }
          ],
          results: [
            { item: recipe.incomplete }
          ]
        },
        {
          type: 'create:deploying',
          ingredients: [
            { item: recipe.incomplete },
            { item: 'forge_frontier:compressed_mechanism_block_2x' }
          ],
          results: [
            { item: recipe.incomplete }
          ]
        },
        {
          type: 'create:deploying',
          ingredients: [
            { item: recipe.incomplete },
            { item: 'createqol:shadow_radiance_block' }
          ],
          results: [
            { item: recipe.incomplete }
          ]
        },
        {
          type: 'create:filling',
          ingredients: [
            { item: recipe.incomplete },
            { fluid: recipe.fluid, amount: 1000 }
          ],
          results: [
            { item: recipe.incomplete }
          ]
        },
        {
          type: 'create:pressing',
          ingredients: [
            { item: recipe.incomplete }
          ],
          results: [
            { item: recipe.incomplete }
          ]
        }
      ]
    }).id(`forge_frontier:sequenced_assembly/vent_duplication/${ventName}`)
  })
})