ServerEvents.tags('fluid', event => 
    {
        // Adds Oil Tag
            event.add("forge:crude_oil", "ad_astra:oil");
            event.add("forge:seed_oil", "createdieselgenerators:plant_oil")

        // Removes Water Tag
            event.remove("minecraft:water", "createaddition:bioethanol");

        // Removes Freezes in Space Tag
            event.remove("ad_astra:freezes_in_space", [
                "minecraft:water",
                "forge_frontier:cheese",
                "forge_frontier:pomegranate_milkshake",
                "forge_frontier:adzuki_milkshake"
            ]);
            
        // Removes Evaporates in Space Tag
            event.remove("ad_astra:evaporates_in_space", "minecraft:water")
    }
)