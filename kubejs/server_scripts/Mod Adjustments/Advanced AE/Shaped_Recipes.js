ServerEvents.recipes(event => 
    {
        // Quantum Armor Adjustments
            // Quantum Helmet Recipe
                event.remove({ id: 'advanced_ae:quantum_helmet' })
                event.shaped(
                Item.of('advanced_ae:quantum_helmet'),
                [
                    'QAQ',
                    'QNQ',
                    'PCP'
                ],
                {
                    Q: 'advanced_ae:quantum_processor',
                    A: 'ae2:wireless_access_point',
                    N: 'advancednetherite:netherite_diamond_helmet',
                    P: 'advanced_ae:quantum_alloy_plate',
                    C: 'advanced_ae:quantum_storage_component'
                }
                ).id( 'forge_frontier:shaped/quantum_helmet' )

            // Quantum Chestplate Recipe
                event.remove({ id: 'advanced_ae:quantum_chest' })
                event.shaped(
                Item.of('advanced_ae:quantum_chestplate'),
                [
                    'QAQ',
                    'QNQ',
                    'PCP'
                ],
                {
                    Q: 'advanced_ae:quantum_processor',
                    A: 'ae2:wireless_access_point',
                    N: 'advancednetherite:netherite_diamond_chestplate',
                    P: 'advanced_ae:quantum_alloy_plate',
                    C: 'advanced_ae:quantum_storage_component'
                }
                ).id( 'forge_frontier:shaped/quantum_chestplate' )

            // Quantum Leggings Recipe
                event.remove({ id: 'advanced_ae:quantum_leggings' })
                event.shaped(
                Item.of('advanced_ae:quantum_leggings'),
                [
                    'QAQ',
                    'QNQ',
                    'PCP'
                ],
                {
                    Q: 'advanced_ae:quantum_processor',
                    A: 'ae2:wireless_access_point',
                    N: 'advancednetherite:netherite_diamond_leggings',
                    P: 'advanced_ae:quantum_alloy_plate',
                    C: 'advanced_ae:quantum_storage_component'
                }
                ).id( 'forge_frontier:shaped/quantum_leggings' )
        
            // Quantum Boots Recipe
                event.remove({ id: 'advanced_ae:quantum_boots' })
                event.shaped(
                Item.of('advanced_ae:quantum_boots'),
                [
                    'QAQ',
                    'QNQ',
                    'PCP'
                ],
                {
                    Q: 'advanced_ae:quantum_processor',
                    A: 'ae2:wireless_access_point',
                    N: 'advancednetherite:netherite_diamond_boots',
                    P: 'advanced_ae:quantum_alloy_plate',
                    C: 'advanced_ae:quantum_storage_component'
                }
                ).id( 'forge_frontier:shaped/quantum_boots' )  
    }
)