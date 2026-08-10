ServerEvents.recipes(event => 
    {
        // Removes Reaction Chamber Recipes

        // Quantum Armor Removals
            event.remove({ id: "advanced_ae:quantum_helmet" })
            event.remove({ id: "advanced_ae:quantum_chest" })
            event.remove({ id: "advanced_ae:quantum_leggings" })
            event.remove({ id: "advanced_ae:quantum_boots" })
            event.remove({ id: "advanced_ae:quantum_base_card" })

        // Removes Circut Slicer Recipe
            event.remove({ id: 'advanced_ae:quantum_processor_print_eae'})
    }
)