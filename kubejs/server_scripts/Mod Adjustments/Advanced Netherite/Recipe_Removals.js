ServerEvents.recipes(event => 
    {
        // Removes Ingot Crafting Recipes
        event.remove({ id: 'advancednetherite:netherite_iron_ingot'})
        event.remove({ id: 'advancednetherite:netherite_gold_ingot'})
        event.remove({ id: 'advancednetherite:netherite_diamond_ingot'})
        event.remove({ id: 'advancednetherite:netherite_emerald_ingot'})
    }
)