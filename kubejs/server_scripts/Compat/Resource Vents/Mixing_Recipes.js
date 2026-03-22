ServerEvents.recipes(event => {
  const ventRecipes = [
    {
      vent: 'create_resource_vents:active_asurine_vent',
      fluid: 'create_dd:cream',
      secondary: 'createcompression:compressed_zinc_3x'
    },
    {
      vent: 'create_resource_vents:active_veridium_vent',
      fluid: 'create_dd:caramel_milkshake',
      secondary: 'createcompression:compressed_copper_3x'
    },
    {
      vent: 'create_resource_vents:active_crimsite_vent',
      fluid: 'create_dd:strawberry_milkshake',
      secondary: 'createcompression:compressed_iron_3x'
    },
    {
      vent: 'create_resource_vents:active_ochrum_vent',
      fluid: 'create_dd:glowberry_milkshake',
      secondary: 'createcompression:compressed_gold_3x'
    },
    {
      vent: 'create_resource_vents:active_scorchia_vent',
      fluid: 'create_dd:hot_chocolate',
      secondary: 'createcompression:compressed_coal_3x'
    },
    {
      vent: 'create_resource_vents:active_scoria_vent',
      fluid: 'create_dd:chocolate_milkshake',
      secondary: 'createcompression:compressed_lapis_3x'
    },
    {
      vent: 'create_resource_vents:active_potassic_vent',
      fluid: 'create_dd:vanilla_milkshake',
      secondary: 'forge_frontier:compressed_tin_3x'
    },
    {
      vent: 'create_resource_vents:active_verdantine_vent',
      fluid: 'create_confectionery:white_chocolate',
      secondary: 'createcompression:compressed_emerald_3x'
    },
    {
      vent: 'create_resource_vents:active_ancient_debris_vent',
      fluid: 'forge_frontier:neapolitan_milkshake',
      secondary: 'createcompression:compressed_netherite_2x'
    },
    {
      vent: 'create_resource_vents:active_resonite_vent',
      fluid: 'resonant_synthesis:resonarium',
      secondary: 'forge_frontier:compressed_echo_shard_3x'
    },
    {
      vent: 'create_resource_vents:active_aubrum_vent',
      fluid: 'forge_frontier:cheese',
      secondary: 'forge_frontier:compressed_desh_3x'
    },
    {
      vent: 'create_resource_vents:active_stellaris_vent',
      fluid: 'forge_frontier:pomegranate_milkshake',
      secondary: 'forge_frontier:compressed_ostrum_3x'
    },
    {
      vent: 'create_resource_vents:active_pyroclast_vent',
      fluid: 'forge_frontier:adzuki_milkshake',
      secondary: 'forge_frontier:compressed_calorite_3x'
    },
    {
      vent: 'create_resource_vents:active_frostite_vent',
      fluid: 'brewinandchewin:dread_nog',
      secondary: 'forge_frontier:compressed_etrium_3x'
    },
    {
      vent: 'create_resource_vents:active_noxrock_vent',
      fluid: 'create_confectionery:ruby_chocolate',
      secondary: 'forge_frontier:compressed_luxite_3x'
    },
    {
      vent: 'create_resource_vents:active_gneiss_vent',
      fluid: 'create_confectionery:ruby_chocolate',
      secondary: 'forge_frontier:compressed_tungsten_3x'
    },
    {
      vent: 'create_resource_vents:active_endritus_vent',
      fluid: 'create_confectionery:ruby_chocolate',
      secondary: 'forge_frontier:compressed_adamantite_3x'
    },
    {
      vent: 'create_resource_vents:active_pearlyte_vent',
      fluid: 'minecraft:water',
      secondary: 'forge_frontier:compressed_pearl_3x'
    },
    {
      vent: 'create_resource_vents:active_amberlite_vent',
      fluid: 'create:honey',
      secondary: 'forge_frontier:compressed_amber_3x'
    },
    {
      vent: 'create_resource_vents:active_guanite_vent',
      fluid: 'sliceanddice:fertilizer',
      secondary: 'forge_frontier:compressed_guano_3x'
    },
    {
      vent: 'create_resource_vents:active_neodymrium_vent',
      fluid: 'createmetallurgy:molten_iron',
      secondary: 'forge_frontier:compressed_scarlet_neodymium_3x'
    },
    {
      vent: 'create_resource_vents:active_azurnium_vent',
      fluid: 'createmetallurgy:molten_iron',
      secondary: 'forge_frontier:compressed_azure_neodymium_3x'
    },
    {
      vent: 'create_resource_vents:active_uraniumnite_vent',
      fluid: 'alexscaves:acid',
      secondary: 'forge_frontier:compressed_uranium_3x'
    },
    {
      vent: 'create_resource_vents:active_sulphite_vent',
      fluid: 'alexscaves:acid',
      secondary: 'forge_frontier:compressed_sulfur_3x'
    },
    {
      vent: 'create_resource_vents:active_lost_debris_vent',
      fluid: 'create_ethium:chorus_nectar_fluid',
      secondary: 'forge_frontier:compressed_ethium_2x'
    },
    {
      vent: 'create_resource_vents:active_glacium_vent',
      fluid: 'create_confectionery:black_chocolate',
      secondary: 'createcompression:compressed_diamond_3x'
    }
  ]

  ventRecipes.forEach(recipe => {
    const ventName = recipe.vent.split(':')[1]

    event.custom({
      type: 'create:mixing',
      ingredients: [
        { item: recipe.vent },
        { item: recipe.secondary },
        { fluid: recipe.fluid, amount: 1000 }
      ],
      results: [
        { item: recipe.vent, count: 2 }
      ],
      processingTime: 200,
      heatRequirement: 'superheated'
    }).id(`forge_frontier:mixing/vent_duplication/${ventName}`)
  })
})