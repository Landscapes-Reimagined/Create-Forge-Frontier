const BLOCKED_OFFHAND_ITEMS = [
  'ad_astra:gas_tank',
  'ad_astra:large_gas_tank'
];

PlayerEvents.tick(event => {
  const player = event.player;
  const server = event.server;

  if (player.level.isClientSide()) return;

  const offhand = player.offHandItem;

  if (offhand.empty) return;
  if (!BLOCKED_OFFHAND_ITEMS.includes(offhand.id)) return;

  const replacement = offhand.copy();

  player.setOffHandItem(Item.empty);

  server.scheduleInTicks(1, callback => {
    player.give(replacement);
    player.tell(Text.red('Gas Tanks cannot be placed in the offhand due to a known duplication bug. The tank has been returned to your inventory.'));
  });
});