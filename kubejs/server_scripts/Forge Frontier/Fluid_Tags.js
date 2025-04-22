ServerEvents.tags("fluid", event => {

    // Fluids
    event.add("forge:crude_oil", "ad_astra:oil");
    event.remove("minecraft:water", "createaddition:bioethanol");
    event.remove("ad_astra:freezes_in_space", "minecraft:water");
    event.remove("ad_astra:evaporates_in_space", "minecraft:water")
    event.add("forge:seed_oil", "createdieselgenerators:plant_oil")
});