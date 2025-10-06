ServerEvents.recipes(event => 
	{
		event.remove({ id: 'create_dd:copycat_block_from_ingots_zinc_stonecutting'})
		event.remove({ id: 'create_dd:copycat_slab_from_ingots_zinc_stonecutting'})
		event.remove({ id: 'create_oppenheimered/compacting/amber_from_honey'})
		event.remove({ id: 'create_dd:superheating/netherite_scrap'})
		event.remove({ id: 'create_additions_synthetics:tank_conversion' })
		event.remove({ id: 'createqol:mixing/chromatic_compound'})
		event.remove({ id: 'alexscavesdelight:block/organic_compost'})
	}
)