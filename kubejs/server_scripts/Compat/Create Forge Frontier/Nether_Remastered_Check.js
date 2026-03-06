// Warn players if they try to enter the Nether (standing in a Nether Portal)
// or if they try to light a portal (Flint & Steel on Obsidian) before they have
// the required advancement.

const REQUIRED_ADVANCEMENT = 'nether_remastered:seal_of_the_underworld'
const COOLDOWN_TICKS = 20 * 10 // 10 seconds

const warnNotReady = (player) => {
  // Cooldown (per-player)
  const t = player.persistentData.getInt('kjs_nether_warn_cd') || 0
  if (t > 0) return

  player.tell(
    Text.of('You are not quite worthy to enter the Nether. ')
      .gold()
      .append(Text.of('Check the ').yellow())
      .append(Text.of('Nether Remastered').red())
      .append(Text.of(' quests for preparation tips.').yellow())
  )

  player.persistentData.putInt('kjs_nether_warn_cd', COOLDOWN_TICKS)
}

// Advancement check
const hasRequiredAdvancement = (player) => {
  try {
    if (player.advancements && typeof player.advancements.isDone === 'function') {
      return player.advancements.isDone(REQUIRED_ADVANCEMENT)
    }
    if (typeof player.isAdvancementDone === 'function') {
      return player.isAdvancementDone(REQUIRED_ADVANCEMENT)
    }
  } catch (e) {}

  return true
}

// Cooldown tick-down
PlayerEvents.tick(event => {
  const player = event.player
  const cd = player.persistentData.getInt('kjs_nether_warn_cd') || 0
  if (cd > 0) player.persistentData.putInt('kjs_nether_warn_cd', cd - 1)
})

// Detect standing in a Nether Portal block
PlayerEvents.tick(event => {
  const player = event.player
  if (!player || player.isSpectator()) return
  if (hasRequiredAdvancement(player)) return

  // Check the block at the player’s feet (and one block above, for tall players/partial blocks)
  const pos = player.blockPosition()
  const b0 = player.level.getBlockState(pos).getBlock().id
  const b1 = player.level.getBlockState(pos.above()).getBlock().id

  if (b0 === 'minecraft:nether_portal' || b1 === 'minecraft:nether_portal') {
    warnNotReady(player)
  }
})

// Detect trying to light a portal (flint & steel on obsidian)
BlockEvents.rightClicked(event => {
  const player = event.player
  if (!player || player.isSpectator()) return
  if (hasRequiredAdvancement(player)) return

  // Only care about Flint & Steel
  const held = event.item
  if (!held || held.id !== 'minecraft:flint_and_steel') return

  // Only care about Obsidian (player is likely building a portal)
  const blockId = event.block.id
  if (blockId !== 'minecraft:obsidian') return

  warnNotReady(player)
})