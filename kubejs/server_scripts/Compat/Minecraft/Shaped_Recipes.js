ServerEvents.recipes(event => 
    {   
        // Forces Vanilla Enderchest Recipe
            event.remove({ id: 'minecraft:ender_chest'})
            event.shaped(
            Item.of('minecraft:ender_chest'),
            [
                'OOO',
                'OEO',
                'OOO'
            ],
            {
                O : "#forge:obsidian",
                E: "minecraft:ender_eye"
            }
            ).id('forge_frontier:shaped/ender_chest');

    }
)