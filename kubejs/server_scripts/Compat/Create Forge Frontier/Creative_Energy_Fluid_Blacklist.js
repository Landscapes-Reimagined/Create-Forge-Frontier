const BANNED_ITEMS = [
  "forge_frontier:creative_energy_fluid_bucket",
  "create:creative_blaze_cake",
  "create:creative_motor",
  "create:creative_fluid_tank",
  "create_connected:creative_fluid_vessel",
  "create:creative_crate",
  "createaddition:creative_energy",
  "create_sa:creative_filling_tank",
  "ad_astra_giselle_addon:creative_oxygen_can",
  "sophisticatedbackpacks:survival_infinity_upgrade",
  "sophisticatedstorage:survival_infinity_upgrade",
  "ad_astra_rocketed:tier_7_rocket",
  "forge_frontier:forge_rocket_nose_cone",
  "forge_frontier:forge_rocket_casing",
  "forge_frontier:forge_rocket_door",
  "forge_frontier:forge_rocket_core",
  "forge_frontier:adaptive_reinforcement_matrix",
  "forge_frontier:arcane_calibration_matrix",
  "forge_frontier:culinary_life_support_matrix",
  "forge_frontier:forge_rocket_tank",
  "forge_frontier:forge_rocket_fin",
  "forge_frontier:forge_rocket_engine",
  "forge_frontier:forge_alloy"
];

const BLOCKED_CONTAINERS = [
  "create:creative_crate"
];

function isBannedItem(id) {
  return BANNED_ITEMS.includes(id);
}

function isBlockedContainer(blockId) {
  return (
    BLOCKED_CONTAINERS.includes(blockId) 
  );
}

function cleanContainer(player) {
  const menu = player.containerMenu;
  if (!menu || !menu.slots) return null;

  let itemToReturn = null;

  for (let i = 0; i < menu.slots.size(); i++) {
    const slot = menu.getSlot(i);
    const stack = slot.item;

    if (!stack || stack.empty) continue;
    if (!isBannedItem(stack.id)) continue;

    if (itemToReturn === null) {
      itemToReturn = stack.id;
    }

    slot.set(Item.empty);
  }

  return itemToReturn;
}

BlockEvents.rightClicked(event => {
  const player = event.player;
  const block = event.block;
  const held = event.item;

  if (!held || held.empty) return;
  if (!isBannedItem(held.id)) return;
  if (!isBlockedContainer(block.id)) return;

  event.cancel();

  player.tell(Text.red("Creative/endgame items are disabled for this container."));
});

PlayerEvents.tick(event => {
  const player = event.player;

  if (player.level.isClientSide()) return;
  if (player.persistentData.ff_blockingCreativeItems) return;

  const lookedAt = player.rayTrace(6);
  if (!lookedAt || !lookedAt.block) return;
  if (!isBlockedContainer(lookedAt.block.id)) return;

  const itemToReturn = cleanContainer(player);

  if (itemToReturn !== null) {
    player.persistentData.ff_blockingCreativeItems = true;

    // Return only ONE item total
    player.give(Item.of(itemToReturn, 1));

    player.tell(Text.red("Creative/endgame items are not allowed in this container."));

    event.server.scheduleInTicks(20, callback => {
      player.persistentData.ff_blockingCreativeItems = false;
    });
  }
});