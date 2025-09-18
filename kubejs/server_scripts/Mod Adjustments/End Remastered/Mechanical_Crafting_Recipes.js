ServerEvents.recipes(event => 
    {
        // Black Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                    'DAD',
                    'BUB',
                    'GCG'
                ],
                key: {
                    D: Ingredient.of('minecraft:diamond'),
                    A: Ingredient.of('forge_frontier:blackbeards_musket'),
                    B: Ingredient.of('forge_frontier:cursed_cannon_ball'),
                    U: Ingredient.of('endrem:undead_soul'),
                    G: Ingredient.of('minecraft:gunpowder'),
                    C: Ingredient.of('forge_frontier:blackbeards_cutlass')
                },
                result: Ingredient.of('endrem:black_eye'),
                acceptMirrored: false
                }).id('forge_frontier:mechanical_crafting/black_eye');
  
        // Cold Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                    'PCP',
                    'WUW',
                    'PEP'
                ],
                key: {
                    P: Ingredient.of('ad_astra:permafrost'),
                    C: Ingredient.of('cataclysm:black_steel_block'),
                    W: Ingredient.of('cataclysm:cursium_ingot'),
                    U: Ingredient.of('endrem:undead_soul'),
                    E: Ingredient.of('cataclysm:cursed_eye')
                },
                result: Ingredient.of('endrem:cold_eye'),
                acceptMirrored: false
                }).id('forge_frontier:mechanical_crafting/cold_eye');
  
        // Corrupted Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'GDG',
                'EUE',
                'GDG'
                ],
                key: {
                G: Ingredient.of('createcompression:compressed_gold_2x'),
                D: Ingredient.of('minecraft:diamond_block'),
                E: Ingredient.of('minecraft:emerald_block'),
                U: Ingredient.of('endrem:undead_soul')
                },
                result: Ingredient.of('endrem:corrupted_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/corrupted_eye');
  
        // Lost Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'ACA',
                'FUH',
                'AEA'
                ],
                key: {
                A: Ingredient.of('minecraft:ancient_debris'),
                C: Ingredient.of('forge_frontier:deep_forge_chisel'),
                F: Ingredient.of('cataclysm:infernal_forge'),
                U: Ingredient.of('endrem:undead_soul'),
                H: Ingredient.of('cataclysm:monstrous_horn'),
                E: Ingredient.of('cataclysm:monstrous_eye')
                },
                result: Ingredient.of('endrem:lost_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/lost_eye');
  
        // Nether Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'BSB',
                'IUI',
                'BFB'
                ],
                key: {
                B: Ingredient.of('minecraft:red_nether_bricks'),
                S: Ingredient.of('forge_frontier:hades_bident'),
                I: Ingredient.of('forge_frontier:ancient_obol'),
                F: Ingredient.of('forge_frontier:cerberus_fang'),
                U: Ingredient.of('endrem:undead_soul'),
                },
                result: Ingredient.of('endrem:nether_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/nether_eye');
  
        // Old Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'SsS',
                'DUR',
                'SES'
                ],
                key: {
                S: Ingredient.of('minecraft:sandstone'),
                s: Ingredient.of('cataclysm:remnant_skull'),
                D: Ingredient.of('forge_frontier:ancient_winged_sun'),
                R: Ingredient.of('forge_frontier:ra_scepter'),    
                E: Ingredient.of('cataclysm:desert_eye'),
                U: Ingredient.of('endrem:undead_soul')
                },
                result: Ingredient.of('endrem:old_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/old_eye');
  
        // Rogue Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'MBM',
                'mUm',
                'MBM'
                ],
                key: {
                M: Ingredient.of('create_compressed:mechanism_block'),
                B: Ingredient.of('create:brass_block'),
                m: Ingredient.of('create_dd:mithril_ingot'),
                U: Ingredient.of('endrem:undead_soul'),
                },
                result: Ingredient.of('endrem:rogue_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/rogue_eye');    
    
        // Cursed Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'BCB',
                'AUT',
                'BNB'
                ],
                key: {
                B: Ingredient.of('minecraft:gilded_blackstone'),
                C: Ingredient.of('forge_frontier:golden_tusks_crown'),
                A: Ingredient.of('forge_frontier:brute_warlord_axe'),
                U: Ingredient.of('endrem:undead_soul'),
                T: Ingredient.of('forge_frontier:crimson_pact_totem'),
                N: Ingredient.of('minecraft:netherite_ingot'),
                },
                result: Ingredient.of('endrem:cursed_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/cursed_eye');       
  
        // Evil Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'EHE',
                'VFv',
                'EUE'
                ],
                key: {
                E: Ingredient.of('minecraft:emerald_block'),
                H: Ingredient.of('artifacts:villager_hat'),
                V: Ingredient.of('betterarcheology:vase_green'),
                F: Ingredient.of('betterarcheology:villager_fossil_head'),
                v: Ingredient.of('betterarcheology:vase'),
                U: Ingredient.of('endrem:undead_soul'),
                },
                result: Ingredient.of('endrem:evil_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/evil_eye');      
  
        // Guardian Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'SES',
                'GUG',
                'SES'
                ],
                key: {
                S: Ingredient.of('minecraft:sponge'),
                E: Ingredient.of('oceansdelight:cabbage_wrapped_elder_guardian'),
                G: Ingredient.of('oceansdelight:guardian_soup'),
                U: Ingredient.of('endrem:undead_soul'),
                },
                result: Ingredient.of('endrem:guardian_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/guardian_eye');     
    
        // Wither Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'NUN',
                'WWW',
                'SSS',
                ' S '
                ],
                key: {
                N: Ingredient.of('cagedmobs:star_infused_netherite_nugget'),
                U: Ingredient.of('endrem:undead_soul'),
                W: Ingredient.of('minecraft:wither_skeleton_skull'),
                S: Ingredient.of('minecraft:soul_sand'),
                },
                result: Ingredient.of('endrem:wither_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/wither_eye');  

        // Warden Eye Recipe
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'CHE',
                'SUS',
                'hTc'
                ],
                key: {
                C: Ingredient.of('deeperdarker:warden_carapace'),
                H: Ingredient.of('deeperdarker:heart_of_the_deep'),
                E: Ingredient.of('silentsdelight:warden_ear'),
                S: Ingredient.of('minecraft:echo_shard'),
                h: Ingredient.of('silentsdelight:warden_heart'),
                T: Ingredient.of('apotheosis:warden_tendril'),
                c: Ingredient.of('minecraft:sculk_catalyst'),
                U: Ingredient.of('endrem:undead_soul'),
                },
                result: Ingredient.of('endrem:undead_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/undead_eye');
  
        // Aetheric Eye Recipe
            event.remove({ id: 'endrem:exotic_eye'})
            event.custom({
                type: 'create:mechanical_crafting',
                pattern: [
                'ESE',
                'LUL',
                'LCL'
                ],
                key: {
                E: Ingredient.of('cataclysm:essence_of_the_storm'),
                S: Ingredient.of('cataclysm:storm_eye'),
                L: Ingredient.of('cataclysm:lacrima'),
                U: Ingredient.of('endrem:undead_soul'),
                C: Ingredient.of('cataclysm:chitin_claw'),
                },
                result: Ingredient.of('endrem:exotic_eye'),
                acceptMirrored: false
            }).id('forge_frontier:mechanical_crafting/exotic_eye');         
    }
)