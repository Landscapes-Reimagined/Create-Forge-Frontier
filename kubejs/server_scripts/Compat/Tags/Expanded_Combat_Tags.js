const addonMaterials = [
  // Base Expanded Combat
  'expanded_combat:stone',
  'expanded_combat:iron',
  'expanded_combat:gold',
  'expanded_combat:diamond',
  'expanded_combat:netherite',

  // Expanded Combat Addons
  'ec_aquaculture_plugin:neptunium',
  'ec_an_plugin:netherite-iron',
  'ec_an_plugin:netherite-diamond',
  'ec_an_plugin:netherite-emerald',
  'ec_an_plugin:netherite-gold',
  'ec_create_plugin:brass',
  'ec_lec_plugin:black_steel'
]

const weaponTypes = [
  'broad_sword',
  'great_hammer',
  'claymore',
  'cutlass',
  'battle_staff',
  'dancer_s_sword',
  'sickle',
  'flail',
  'mace',
  'dagger',
  'glaive',
  'katana',
  'spear',
  'bow'
]

ServerEvents.tags('item', event => {
  addonMaterials.forEach(entry => {
    const [namespace, material] = entry.split(':')

    weaponTypes.forEach(type => {
      const item = `${namespace}:${material}_${type}`

      if (Item.exists(item)) {
        event.add(`expanded_combat:${type}`, item)
      }
    })
  })
})