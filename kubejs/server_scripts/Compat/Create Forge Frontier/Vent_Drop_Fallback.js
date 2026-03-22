const ACTIVE_VENTS = [
  'create_resource_vents:active_asurine_vent',
  'create_resource_vents:active_veridium_vent',
  'create_resource_vents:active_crimsite_vent',
  'create_resource_vents:active_ochrum_vent',
  'create_resource_vents:active_scorchia_vent',
  'create_resource_vents:active_scoria_vent',
  'create_resource_vents:active_potassic_vent',
  'create_resource_vents:active_verdantine_vent',
  'create_resource_vents:active_ancient_debris_vent',
  'create_resource_vents:active_resonite_vent',
  'create_resource_vents:active_aubrum_vent',
  'create_resource_vents:active_stellaris_vent',
  'create_resource_vents:active_pyroclast_vent',
  'create_resource_vents:active_frostite_vent',
  'create_resource_vents:active_noxrock_vent',
  'create_resource_vents:active_gneiss_vent',
  'create_resource_vents:active_endritus_vent',
  'create_resource_vents:active_pearlyte_vent',
  'create_resource_vents:active_amberlite_vent',
  'create_resource_vents:active_guanite_vent',
  'create_resource_vents:active_neodymrium_vent',
  'create_resource_vents:active_azurnium_vent',
  'create_resource_vents:active_uraniumnite_vent',
  'create_resource_vents:active_sulphite_vent',
  'create_resource_vents:active_lost_debris_vent',
  'create_resource_vents:active_glacium_vent'
]

BlockEvents.broken(event => {
  const blockId = event.block.id
  if (!ACTIVE_VENTS.includes(blockId)) return

  const player = event.player
  if (!player || player.isCreative()) return

  const tool = player.mainHandItem
  if (tool.isEmpty()) return

  // ✅ Must be a pickaxe
  if (!tool.hasTag('minecraft:pickaxes')) return

  // ✅ Drop the block itself
  event.block.popItem(Item.of(blockId))
})