// Mob Grinding Utils Block Recipe Tweaks
ServerEvents.recipes(event => 
    {

        // Recipe Removals
        event.remove({ id: 'mob_grinding_utils:recipe_entity_spawner' })

        // Mob Fan
        event.remove({ id: 'mob_grinding_utils:recipe_fan'})
        event.shaped(
            Item.of('mob_grinding_utils:fan'),
            [
                'STS',
                'SFS',
                'SCS'
            ],
            {
                T: 'create:transmitter',
                F: 'create:encased_fan',
                S: '#forge:ingots/steel',
                C: 'create:chromatic_compound'
            }
        ).id( 'forge_frontier:shaped/mob_fan' )

        // Mob Masher
        event.remove({ id: 'mob_grinding_utils:recipe_saw'})
        event.shaped(
            Item.of('mob_grinding_utils:saw'),
            [
                'BIB',
                'ICI',
                'SSS'
            ],
            {
                B: 'create_sa:brass_sword',
                I: 'mob_grinding_utils:spikes',
                C: 'create:chromatic_compound',
                S: '#forge:ingots/steel'
            }
        ).id( 'forge_frontier:shaped/mob_masher' )

        // Iron Spikes
        event.remove({ id: 'mob_grinding_utils:recipe_spikes'})
        event.shaped(
            Item.of('mob_grinding_utils:spikes'),
            [
                ' B ',
                'BCB'
            ],
            {
                B: 'create_sa:brass_sword',
                C: 'create:brass_casing'
            }
        ).id( 'forge_frontier:shaped/mob_spikes' )        

        // Absorption Hopper
        event.remove({ id: 'mob_grinding_utils:recipe_absorbtion_hopper'})
        event.shaped(
            Item.of('mob_grinding_utils:absorption_hopper'),
            [
                ' S ',
                ' C ',
                ' B '
            ],
            {
                S: 'create:brass_sheet',
                C: 'itemcollectors:basic_collector',
                B: 'create:smart_chute'
            }
        ).id( 'forge_frontier:shaped/absorption_hopper' )            

        
        // Singularity Tank
        event.remove( { id: 'mob_grinding_utils:recipe_tank'})
        event.shaped(
            Item.of('mob_grinding_utils:tank'),
            [
                'SGS',
                'GTG',
                'SGS'
            ],
            {
                S: '#forge:ingots/steel',
                G: 'create:framed_glass',
                T: 'create:fluid_tank'
            }
        ).id( 'forge_frontier:shaped/singularity_tank' )        

        // XP Tank
        event.remove( {id: 'mob_grinding_utils:recipe_tank_sink'} )
        event.shaped(
            Item.of('mob_grinding_utils:tank_sink'),
            [
                ' D ',
                'XCX',
                ' T '
            ],
            {
                D: 'create:item_drain',
                X: 'create:experience_block',
                C: 'create:smart_chute',
                T: 'mob_grinding_utils:tank'
            }
        ).id( 'forge_frontier:shaped/xp_tank' )        

        // Jumbo Tank
        event.remove({ id: 'mob_grinding_utils:recipe_jumbotank'})
        event.shaped(
            Item.of('mob_grinding_utils:jumbo_tank'),
            [
                'STS',
                'T T',
                'STS'
            ],
            {
                S: '#forge:ingots/steel',
                T: 'mob_grinding_utils:tank'
            }
        ).id( 'forge_frontier:shaped/jumbo_tank' )        

        // Entity Conveyer
        event.remove({ id: 'mob_grinding_utils:recipe_entity_conveyor'})
        event.shaped(
            Item.of('mob_grinding_utils:entity_conveyor', 6),
            [
                'SSS',
                'BBB'
            ],
            {
                S: '#forge:ingots/steel',
                B: 'create:belt_connector'
            },
        ).id( 'forge_frontier:shaped/entity_conveyor' )        
        
        // XP Solidifier
        event.remove({ id: 'mob_grinding_utils:recipe_solidifier'})
        event.shaped(
            Item.of('mob_grinding_utils:xpsolidifier'),
            [
                ' P ',
                'ECE',
                ' T '
            ],
            {
                P: 'create:mechanical_press',
                E: 'mob_grinding_utils:entity_conveyor',
                C: 'create:smart_chute',
                T: 'mob_grinding_utils:tank'
            }
        ).id( 'forge_frontier:shaped/xp_solidifier' )
        
        // Tinted Glass
        event.remove({ id: 'mob_grinding_utils:recipe_tintedglass'})
        event.shaped(
            Item.of('mob_grinding_utils:tinted_glass', 4),
            [
                'SGS',
                'GSG',
                'SGS'
            ],
            {
                S: '#forge:ingots/steel',
                G: 'minecraft:tinted_glass'
            }
        ).id( 'forge_frontier:shaped/mob_tinted_glass' )        
             
    }
)