ServerEvents.recipes(event => 
    {
        // Starter Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/starter_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("create:andesite_alloy_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_basic_tiny"),
                M: Ingredient.of("createaddition:electric_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:starter_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/starter_motor")

        // Basic Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/basic_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("minecraft:iron_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_basic_large"),
                M: Ingredient.of("create_better_motors:starter_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:basic_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/basic_motor")

        // Hardened Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/hardened_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("ad_astra:steel_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_hardened"),
                M: Ingredient.of("create_better_motors:basic_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:hardened_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/hardened_motor")

        // Blazing Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/blazing_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("ad_astra:calorite_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_blazing"),
                M: Ingredient.of("create_better_motors:hardened_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:blazing_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/blazing_motor")
        
        // Niotic Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/niotic_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("forge_frontier:echo_shard_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_niotic"),
                M: Ingredient.of("create_better_motors:blazing_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:niotic_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/niotic_motor")
        
        // Spirited Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/spirited_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("enlightened_end:malachite_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_spirited"),
                M: Ingredient.of("create_better_motors:niotic_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:spirited_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/spirited_motor")
        
        // Nitro Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/nitro_motor' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UCMCU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("alexscaves:block_of_scarlet_neodymium"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_nitro"),
                M: Ingredient.of("create_better_motors:spirited_motor"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:nitro_motor"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/nitro_motor")
        
        // Starter Motor Upgrade Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/starter_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("create:andesite_alloy_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_basic_tiny"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:starter_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/starter_tier_upgrade")

        // Basic Motor Upgrade Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/basic_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("minecraft:iron_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_basic_large"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:basic_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/basic_tier_upgrade")

        // Hardened Upgrade Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/hardened_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("ad_astra:steel_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_hardened"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:hardened_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/hardened_tier_upgrade")

        // Blazing Upgrade Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/blazing_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("ad_astra:calorite_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_blazing"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:blazing_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/blazing_tier_upgrade")
        
        // Niotic Upgrade Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/niotic_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("forge_frontier:echo_shard_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_niotic"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:niotic_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/niotic_tier_upgrade")
        
        // Spirited Upgrade Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/spirited_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("enlightened_end:malachite_block"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_spirited"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:spirited_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/spirited_tier_upgrade")
        
        // Nitro Upgrade Motor Recipe
            event.remove({ id: 'create_better_motors:blocks/mechanical_crafting/upgrades/nitro_tier_upgrade' })
            event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                "  B  ",
                " UCU ",
                "UC CU",
                " UTU "
            ],
            key: {
                B: Ingredient.of("alexscaves:block_of_scarlet_neodymium"),
                U: Ingredient.of("powah:uraninite"),
                C: Ingredient.of("powah:capacitor_nitro"),
                T: Ingredient.of("create_better_motors:lava_tube")
            },
            result: Ingredient.of("create_better_motors:nitro_tier_upgrade"),
            acceptMirrored: false
            }).id("forge_frontier:mechanical_crafting/nitro_tier_upgrade")          
    }
)