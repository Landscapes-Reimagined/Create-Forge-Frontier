ServerEvents.recipes(event => 
	{
		// Netherite Jetpack Recipe
            event.remove({ id: 'create_sa:netherite_jetpack_recipe'})
            event.custom({
                type: "minecraft:smithing_transform",
                template: {
                item: "create_ethium:ethium_smithing_template"
                },
                base: {
                item: "create_sa:brass_jetpack_chestplate"
                },
                addition: {
                item: "create_ethium:ethium_ingot"
                },
                result: {
                item: "create_sa:netherite_jetpack_chestplate"
                }
            }).id('forge_frontier:smithing_tranform/netherite_jetpack')    
    }
)