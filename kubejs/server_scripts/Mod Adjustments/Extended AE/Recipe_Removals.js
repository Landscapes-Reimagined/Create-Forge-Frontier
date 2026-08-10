ServerEvents.recipes(event => 
    {
        // Removes Circuit Slicer Recipes
            event.remove({ id: 'expatternprovider:circuit_cutter'})
            event.remove({ id: 'expatternprovider:cutter/logic'})
            event.remove({ id: 'expatternprovider:cutter/silicon'})
            event.remove({ id: 'expatternprovider:cutter/calculation'})
            event.remove({ id: 'expatternprovider:cutter/engineering'})
            event.remove({ id: 'expatternprovider:ex_charger' })
    }
)