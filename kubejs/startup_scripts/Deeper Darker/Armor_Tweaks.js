ItemEvents.modification(event => {
  // Armor Adjustments

    // Warden Helmet
    event.modify('deeperdarker:warden_helmet', item => {
      item.armorProtection = 3.5;
      item.armorToughness = 3.5;
    });

    // Warden Chestplate
    event.modify('deeperdarker:warden_chestplate', item => {
      item.armorProtection = 8;
      item.armorToughness = 3.25;
    });

    // Warden Leggings
    event.modify('deeperdarker:warden_leggings', item => {
      item.armorProtection = 6;
      item.armorToughness = 3.25;
    });

    // Warden Boots
    event.modify('deeperdarker:warden_boots', item => {
      item.armorProtection = 3.5;
      item.armorToughness = 3.25;
    });

  // Tool Adjustments

    // Warden Sword
    event.modify('deeperdarker:warden_sword', item => {
      item.attackSpeed = -2.4;
      item.attackDamage = 7;
    });

});
