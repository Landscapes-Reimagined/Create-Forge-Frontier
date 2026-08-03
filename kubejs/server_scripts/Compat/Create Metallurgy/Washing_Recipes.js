ServerEvents.recipes(event => {
    // Define washing recipes
    var washingMaterials = [
        {
            name: 'tin',
            secondary: { chance: 0.5, item: 'minecraft:glowstone_dust'}
        },
        {
            name: 'calorite',
            secondary: { chance: 0.5, item: 'create:brass_nugget' }
        },
        {
            name: 'desh',
            secondary: { chance: 0.5, item: "ad_astra:steel_nugget" }
        },
        {
            name: 'ostrum',
            secondary: { chance: 0.5, item: 'create_dd:bronze_nugget' }
        },
        {
            name: 'verdantine',
            secondary: { chance: 0.5, item: "createaddition:electrum_nugget" }
        },
        {
            name: 'glacium',
            secondary: { chance: 0.5, item: 'minecraft:amethyst_shard' }
        },
        {
            name: 'debris',
            secondary: { chance: 0.5, item: 'create:cinder_flour' }
        },
        {
            name: 'resonite',
            secondary: { chance: 0.5, item: "resonant_synthesis:sculk_crystalline_flour" }
        },
        {
            name: 'aubrum',
            secondary: { chance: 0.5, item: 'create_dd:industrial_iron_nugget' }
        },
        {
            name: 'pyroclast',
            secondary: { chance: 0.5, item: 'create_dd:bronze_nugget' }
        },
        {
            name: 'frostite',
            secondary: { chance: 0.5, item: 'ad_astra:ice_shard' }
        },
        {
            name: 'stellaris',
            secondary: { chance: 0.5, item: "ad_astra:steel_nugget" }
        },
        {
            name: 'guanite',
            secondary: { chance: 0.25, item: 'minecraft:bone_meal' }
        },
        {
            name: 'pearlyte',
            secondary: { chance: 0.25, item: 'alexscaves:bioluminesscence' }
        },
        {
            name: 'amberlite',
            secondary: { chance: 0.25, item: 'alexscaves:pewen_sap' }
        },
        {
            name: 'azurnium',
            secondary: { chance: 0.25, item: 'alexscaves:raw_scarlet_neodymium' }
        },
        {
            name: 'neodymrium',
            secondary: { chance: 0.25, item: 'alexscaves:raw_azure_neodymium' }
        },
        {
            name: 'uraniumnite',
            secondary: { chance: 0.25, item: 'powah:uraninite_raw' }
        },
        {
            name: 'sulphite',
            secondary: { chance: 0.25, item: 'create_new_age:radioactive_thorium' }
        },
        {
            name: 'noxrock',
            secondary: { chance: 0.25, item: "minecraft:gunpowder"}
        },
        {
            name: 'endritus',
            secondary: { chance: 0.25, item: "create_dd:mithril_nugget"}
        },
        {
            name: 'gneiss',
            secondary: { chance: 0.25, item: "ad_astra:steel_nugget"}
        },
        {
            name: 'silver',
            secondary: { chance: 0.25, item: "minecraft:lapis_lazuli"}
        },
        {
            name: 'reggarfonite',
            secondary: { chance: 0.5, item: 'create_better_motors:lava_quartz' }
        }
    ];

    for (var i = 0; i < washingMaterials.length; i++) {
        var material = washingMaterials[i];
        var name = material.name;
        var secondary = material.secondary;
        var extra = material.extra;

        var results = [
            { item: "forge_frontier:" + name + "_dust" },
            secondary
        ];

        if (extra) {
            results.push(extra);
        }

        event.custom({
            type: "create:splashing",
            ingredients: [{ item: "forge_frontier:dirty_" + name + "_dust" }],
            results: results
        }).id("forge_frontier:washing/dirty_" + name + "_dust");
    }
});
