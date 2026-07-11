ItemEvents.modification(event => {
  // Armor Adjustments

    // Warden Helmet
    event.modify('deeperdarker:warden_helmet', item => {
      item.armorProtection = 3.5;
      item.armorToughness = 3.5;
    });

    // Ethium Helmet
    event.modify("create_ethium:ethium_armor_helmet", item => {
      item.armorProtection = 7;
      item.armorToughness = 7;
    });

    // Warden Chestplate
    event.modify('deeperdarker:warden_chestplate', item => {
      item.armorProtection = 8;
      item.armorToughness = 3.25;
    });

    // Ethium Chestplate
    event.modify("create_ethium:ethium_armor_chestplate", item => {
      item.armorProtection = 12;
      item.armorToughness = 7;
    });

    // Warden Leggings
    event.modify('deeperdarker:warden_leggings', item => {
      item.armorProtection = 6;
      item.armorToughness = 3.25;
    });

    // Ethium Leggings
    event.modify("create_ethium:ethium_armor_leggings", item => {
      item.armorProtection = 10;
      item.armorToughness = 7;
    });

    // Warden Boots
    event.modify('deeperdarker:warden_boots', item => {
      item.armorProtection = 3.5;
      item.armorToughness = 3.25;
    });

    // Ethium Boots
    event.modify("create_ethium:ethium_armor_boots", item => {
      item.armorProtection = 8;
      item.armorToughness = 7;
    });

  // Tool Adjustments

    // Warden Sword
    event.modify('deeperdarker:warden_sword', item => {
      item.attackSpeed = -2.4;
      item.attackDamage = 7;
    });

});
