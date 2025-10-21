ServerEvents.recipes(function (event) {
    var INGOT_MB = 90;
    var NUGGET_MB = 10;
    var ROD_MB = 45;
    var PLATE_MB = 90;
    var WIRE_MB = 45;

    var tableCasts = [
        // Vanilla + base metals
        { name: "iron", fluid: "createmetallurgy:molten_iron", wireTag: "forge:wires/iron" },
        { name: "gold", fluid: "createmetallurgy:molten_gold", wireTag: "forge:wires/gold" },
        { name: "copper", fluid: "createmetallurgy:molten_copper", wireTag: "forge:wires/copper" },
        { name: "debris", fluid: "forge_frontier:molten_debris", ingot: "minecraft:netherite_scrap"},
        { name: "coal", fluid: "forge_frontier:molten_carbon", ingot: "minecraft:coal"},
        { name: "netherite", fluid: "createmetallurgy:molten_netherite", nugget: "createdeco:netherite_nugget", plate: "createdeco:netherite_sheet"},

        // Forge Frontier + special ores
        { name: "bismuth", fluid: "forge_frontier:molten_bismuth", ingot: "enlightened_end:bismuth_ingot", nugget: "enlightened_end:bismuth_nugget", plate: "forge_frontier:bismuth_sheet", rodTag: "forge:rods/bismuth", wireTag: "forge:wires/bismuth" },
        { name: "desh", fluid: "forge_frontier:molten_desh", ingot: "ad_astra:desh_ingot", nugget: "ad_astra:desh_nugget", plate: "ad_astra:desh_plate", rodTag: "forge:rods/desh", wireTag: "forge:wires/desh" },
        { name: "calorite", fluid: "forge_frontier:molten_calorite", ingot: "ad_astra:calorite_ingot", nugget: "ad_astra:calorite_nugget", plate: "ad_astra:calorite_plate", rodTag: "forge:rods/calorite", wireTag: "forge:wires/calorite" },
        { name: "irradium", fluid: "forge_frontier:molten_irradium", ingot: "enlightened_end:irradium_bar", nugget: "forge_frontier:irradium_nugget", plate: "forge_frontier:irradium_sheet", rodTag: "forge:rods/irradium", wireTag: "forge:wires/irradium" },
        { name: "malachite", fluid: "forge_frontier:molten_malachite", ingot: "enlightened_end:malachite", nugget: "forge_frontier:malachite_nugget", plate: "forge_frontier:malachite_sheet", rodTag: "forge:rods/malachite", wireTag: "forge:wires/malachite" },
        { name: "etrium", fluid: "forge_frontier:molten_etrium", ingot: "ad_astra:etrium_ingot", nugget: "ad_astra:etrium_nugget", plate: "ad_astra:etrium_plate", rod: "ad_astra:etrium_rod", wireTag: "forge:wires/etrium" },
        { name: "emerald", fluid: "forge_frontier:molten_emerald", ingot: "minecraft:emerald", nugget: "forge_frontier:emerald_nugget", plate: "forge_frontier:emerald_sheet", rodTag: "forge:rods/emerald", wireTag: "forge:wires/emerald" },
        { name: "diamond", fluid: "forge_frontier:molten_diamond", ingot: "minecraft:diamond", nugget: "forge_frontier:diamond_nugget", plate: "forge_frontier:diamond_sheet", rodTag: "forge:rods/diamond", wireTag: "forge:wires/diamond" },
        { name: "echo", fluid: "forge_frontier:molten_echo_shard", ingot: "minecraft:echo_shard", nugget: "forge_frontier:echo_nugget", plate: "forge_frontier:echo_sheet", rodTag: "forge:rods/echo", wireTag: "forge:wires/echo" },

        // 🔥 Newly added
        { name: "sulfur", fluid: "forge_frontier:molten_sulfur", ingot: "alexscaves:sulfur_dust", nugget: "forge_frontier:sulfur_nugget", plate: "forge_frontier:sulfur_sheet", rodTag: "forge:rods/sulfur", wireTag: "forge:wires/sulfur" },
        { name: "amber", fluid: "forge_frontier:molten_amber", ingot: "alexscaves:amber", nugget: "forge_frontier:amber_nugget", plate: "forge_frontier:amber_sheet", rodTag: "forge:rods/amber", wireTag: "forge:wires/amber" },
        { name: "pearl", fluid: "forge_frontier:molten_pearl", ingot: "alexscaves:pearl", nugget: "alexscaves:pearl_nugget", plate: "forge_frontier:pearl_sheet", rodTag: "forge:rods/pearl", wireTag: "forge:wires/pearl" },
        { name: "azure_neodymium", fluid: "forge_frontier:molten_azure_neodymium", ingot: "alexscaves:azure_neodymium_ingot", nugget: "forge_frontier:azure_neodymium_nugget", plate: "forge_frontier:azure_neodymium_sheet", rodTag: "forge:rods/azure_neodymium", wireTag: "forge:wires/azure_neodymium" },
        { name: "scarlet_neodymium", fluid: "forge_frontier:molten_scarlet_neodymium", ingot: "alexscaves:scarlet_neodymium_ingot", nugget: "forge_frontier:scarlet_neodymium_nugget", plate: "forge_frontier:scarlet_neodymium_sheet", rodTag: "forge:rods/scarlet_neodymium", wireTag: "forge:wires/scarlet_neodymium" },
        { name: "guano", fluid: "forge_frontier:molten_guano", ingot: "alexscaves:guano", nugget: "forge_frontier:guano_nugget", plate: "forge_frontier:guano_sheet", rodTag: "forge:rods/guano", wireTag: "forge:wires/guano" },
        { name: "uranium", fluid: "forge_frontier:molten_uranium", ingot: "alexscaves:uranium", nugget: "forge_frontier:uranium_nugget", plate: "forge_frontier:uranium_sheet", rodTag: "forge:rods/uranium", wireTag: "forge:wires/uranium" },
        { name: "reggarfonite", fluid: "forge_frontier:molten_reggarfonite", ingot: "create_better_motors:reggarfonite_gem", nugget: "create_better_motors:reggarfonite_nugget", plate: "create_better_motors:reggarfonite_sheet", rodTag: "forge:rods/reggarfonite", wireTag: "forge:wires/reggarfonite" },
        { name: "ostrum", fluid: "forge_frontier:molten_ostrum", ingot: "ad_astra:ostrum_ingot", nugget: "ad_astra:ostrum_nugget", plate: "ad_astra:ostrum_plate", rodTag: "forge:rods/ostrum", wireTag: "forge:wires/ostrum" },
        { name: "dielectric_paste", fluid: "forge_frontier:molten_dielectric_paste", ingot: "powah:dielectric_paste", rod: "powah:dielectric_rod"},
        { name: "bronze", fluid: "createmetallurgy:molten_bronze", ingot: "create_dd:bronze_ingot", nugget: "create_dd:bronze_nugget", plate: "create_dd:bronze_sheet"},
        { name: "tungsten", fluid: "createmetallurgy:molten_tungsten", wire: "createmetallurgy:tungsten_wire"},
        { name: "electrum", fluid: "createmetallurgy:molten_electrum", wireTag: "forge:wires/electrum"},

        // Advanced Netherite tiers
        { name: "netherite_iron", fluid: "forge_frontier:molten_netherite_iron", ingot: "advancednetherite:netherite_iron_ingot", nugget: "advancednetherite:netherite_iron_nugget", plate: "forge_frontier:netherite_iron_sheet", rodTag: "forge:rods/netherite_iron", wireTag: "forge:wires/netherite_iron" },
        { name: "netherite_gold", fluid: "forge_frontier:molten_netherite_gold", ingot: "advancednetherite:netherite_gold_ingot", nugget: "advancednetherite:netherite_gold_nugget", plate: "forge_frontier:netherite_gold_sheet", rodTag: "forge:rods/netherite_gold", wireTag: "forge:wires/netherite_gold" },
        { name: "netherite_emerald", fluid: "forge_frontier:molten_netherite_emerald", ingot: "advancednetherite:netherite_emerald_ingot", nugget: "advancednetherite:netherite_emerald_nugget", plate: "forge_frontier:netherite_emerald_sheet", rodTag: "forge:rods/netherite_emerald", wireTag: "forge:wires/netherite_emerald" },
        { name: "netherite_diamond", fluid: "forge_frontier:molten_netherite_diamond", ingot: "advancednetherite:netherite_diamond_ingot", nugget: "advancednetherite:netherite_diamond_nugget", plate: "forge_frontier:netherite_diamond_sheet", rodTag: "forge:rods/netherite_diamond", wireTag: "forge:wires/netherite_diamond" }
    ];

    // 🔄 Loop through and create casting recipes if result exists
    tableCasts.forEach(function (cast) {
        // Ingot
        if (!Ingredient.of(cast.ingot).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_ingot_mold" },
                    { amount: INGOT_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 60,
                result: { item: cast.ingot }
            }).id("forge_frontier:casting_table/" + cast.name + "_ingot");
        }

        // Nugget
        if (!Ingredient.of(cast.nugget).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_nugget_mold" },
                    { amount: NUGGET_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 10,
                result: { item: cast.nugget }
            }).id("forge_frontier:casting_table/" + cast.name + "_nugget");
        }

        // Plate
        if (!Ingredient.of(cast.plate).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_plate_mold" },
                    { amount: PLATE_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 60,
                result: { item: cast.plate }
            }).id("forge_frontier:casting_table/" + cast.name + "_plate");
        }

        // Rod
        if (cast.rodTag && !Ingredient.of("#" + cast.rodTag).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_rod_mold" },
                    { amount: ROD_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 30,
                result: { tag: cast.rodTag }
            }).id("forge_frontier:casting_table/" + cast.name + "_rod");
        } else if (cast.rod && !Ingredient.of(cast.rod).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_rod_mold" },
                    { amount: ROD_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 30,
                result: { item: cast.rod }
            }).id("forge_frontier:casting_table/" + cast.name + "_rod");
        }

        // Wire — tag or explicit item
        if (cast.wireTag && !Ingredient.of("#" + cast.wireTag).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_wire_mold" },
                    { amount: WIRE_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 30,
                result: { tag: cast.wireTag }
            }).id("forge_frontier:casting_table/" + cast.name + "_wire");
        } else if (cast.wire && !Ingredient.of(cast.wire).stacks.empty) {
            event.custom({
                type: "createmetallurgy:casting_in_table",
                ingredients: [
                    { item: "createmetallurgy:graphite_wire_mold" },
                    { amount: WIRE_MB, fluid: cast.fluid, nbt: {} }
                ],
                processingTime: 30,
                result: { item: cast.wire }
            }).id("forge_frontier:casting_table/" + cast.name + "_wire");
        }
    });
});