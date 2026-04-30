// kubejs/server_scripts/creative_energy_fluid_blacklist.js

const BANNED_BUCKET = 'forge_frontier:creative_energy_fluid_bucket';

const BLOCKED_CONTAINERS = [
  'create:creative_crate'
];

function isSophisticatedStorage(blockId) {
  return blockId.startsWith('sophisticatedstorage:');
}

function isSophisticatedBackpack(blockId) {
  return blockId.startsWith('sophisticatedbackpacks:');
}

function isBlockedContainer(blockId) {
  return (
    BLOCKED_CONTAINERS.includes(blockId) ||
    isSophisticatedStorage(blockId) ||
    isSophisticatedBackpack(blockId)
  );
}

// Remove banned buckets from open container
function cleanContainer(player) {
  const menu = player.containerMenu;
  if (!menu || !menu.slots) return false;

  let removed = false;

  for (let i = 0; i < menu.slots.size(); i++) {
    const slot = menu.getSlot(i);
    const stack = slot.item;

    if (!stack || stack.empty) continue;
    if (stack.id !== BANNED_BUCKET) continue;

    slot.set(Item.empty);
    removed = true;
  }

  return removed;
}

// Prevent right-click usage (fluid insertion)
BlockEvents.rightClicked(event => {
  const player = event.player;
  const block = event.block;
  const held = event.item;

  if (!held || held.empty) return;
  if (held.id !== BANNED_BUCKET) return;

  if (!isBlockedContainer(block.id)) return;

  event.cancel();

  player.tell(Text.red('Creative Energy Fluid is disabled for this container.'));
});

// Cleanup logic (handles shift-click, pipes, backpacks, etc.)
PlayerEvents.tick(event => {
  const player = event.player;

  if (player.level.isClientSide()) return;

  // Prevent spam loop
  if (player.persistentData.ff_blockingBucket) return;

  const lookedAt = player.rayTrace(6);
  if (!lookedAt || !lookedAt.block) return;

  if (!isBlockedContainer(lookedAt.block.id)) return;

  const removed = cleanContainer(player);

  if (removed) {
    player.persistentData.ff_blockingBucket = true;

    // Give back ONLY ONE bucket
    player.give(Item.of(BANNED_BUCKET, 1));

    player.tell(Text.red('Creative Energy Fluid Buckets are not allowed here.'));

    event.server.scheduleInTicks(5, () => {
      player.persistentData.ff_blockingBucket = false;
    });
  }
});