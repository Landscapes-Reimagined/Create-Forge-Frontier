ServerEvents.recipes(event => {
  // Helper to remove and re-add smithing recipes
  function replaceSmithing(result, upgrade, base, addition, id) {
    event.remove(id)
    event.smithing(result, upgrade, base, addition).id(`forge_frontier:smithing/${id.split(':').pop()}`)
  }

  // Warden Gear to Netherite Iron
  const wardenTools = [
    ['sword', 'warden_sword'],
    ['shovel', 'warden_shovel'],
    ['pickaxe', 'warden_pickaxe'],
    ['hoe', 'warden_hoe'],
    ['axe', 'warden_axe'],
    ['helmet', 'warden_helmet'],
    ['chestplate', 'warden_chestplate'],
    ['leggings', 'warden_leggings'],
    ['boots', 'warden_boots']
  ]
  wardenTools.forEach(([type, warden]) => {
    replaceSmithing(
      `advancednetherite:netherite_iron_${type}`,
      'forge_frontier:netherite_iron_upgrade',
      `deeperdarker:${warden}`,
      'advancednetherite:netherite_iron_ingot',
      `advancednetherite:netherite_iron_${type}_smithing`
    )
  })

  // Netherite Iron to Gold
  wardenTools.forEach(([type]) => {
    replaceSmithing(
      `advancednetherite:netherite_gold_${type}`,
      'forge_frontier:netherite_gold_upgrade',
      `advancednetherite:netherite_iron_${type}`,
      'advancednetherite:netherite_gold_ingot',
      `advancednetherite:netherite_gold_${type}_smithing`
    )
  })

  // Netherite Gold to Emerald
  wardenTools.forEach(([type]) => {
    replaceSmithing(
      `advancednetherite:netherite_emerald_${type}`,
      'forge_frontier:netherite_emerald_upgrade',
      `advancednetherite:netherite_gold_${type}`,
      'advancednetherite:netherite_emerald_ingot',
      `advancednetherite:netherite_emerald_${type}_smithing`
    )
  })

  // Netherite Emerald to Diamond
  wardenTools.forEach(([type]) => {
    replaceSmithing(
      `advancednetherite:netherite_diamond_${type}`,
      'forge_frontier:netherite_diamond_upgrade',
      `advancednetherite:netherite_emerald_${type}`,
      'advancednetherite:netherite_diamond_ingot',
      `advancednetherite:netherite_diamond_${type}_smithing`
    )
  })
})
