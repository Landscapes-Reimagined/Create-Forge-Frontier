ServerEvents.recipes(event => 
    {
        // Removes Reaction Chamber Recipes
            event.remove({ id: 'advanced_ae:logic_processor_chamber'})
            event.remove({ id: 'advanced_ae:quantum_infusion'})
            event.remove({ id: 'advanced_ae:certuscharger'})
            event.remove({ id: 'advanced_ae:shatteredsingularity'})
            event.remove({ id: 'advanced_ae:fluixcrystals'})
            event.remove({ id: 'advanced_ae:fluixcrystalfromdust'})
            event.remove({ id: 'advanced_ae:quantum_alloy_plate'})
            event.remove({ id: 'advanced_ae:energy_processor_chamber'})
            event.remove({ id: 'advanced_ae:chippedbudding'})
            event.remove({ id: 'advanced_ae:quantum_alloy'})
            event.remove({ id: 'advanced_ae:flawedbudding'})
            event.remove({ id: 'advanced_ae:calculation_processor_chamber'})
            event.remove({ id: 'advanced_ae:damagedbudding'})
            event.remove({ id: 'advanced_ae:quartzcrystal'})
            event.remove({ id: 'advanced_ae:redstonecrystal'})
            event.remove({ id: 'advanced_ae:singularity'})
            event.remove({ id: 'advanced_ae:chargedredstone'})
            event.remove({ id: 'advanced_ae:engineering_processor_chamber'})
            event.remove({ id: 'advanced_ae:quantum_processor_chamber'})

        // Removes Circut Slicer Recipe
            event.remove({ id: 'advanced_ae:quantum_processor_print_eae'})
    }
)