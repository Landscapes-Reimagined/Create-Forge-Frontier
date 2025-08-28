ServerEvents.recipes(event => {

    // Creates New Item Pipe Recipe
	event.remove({ id: 'pipez:item_pipe' })
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'create:chute'
		  },
		  {
			item: 'create_dd:overburden_casing'
		  }
		],
		results: [
		  {
			item: 'pipez:item_pipe'
		  }
		]
	  }).id('forge_frontier:item_application/item_pipe');

    // Creates New Fluid Pipe Recipe
	event.remove({ id: 'pipez:fluid_pipe' }) 
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'create:fluid_pipe'
		  },
		  {
			item: 'create_dd:hydraulic_casing'
		  }
		],
		results: [
		  {
			item: 'pipez:fluid_pipe'
		  }
		]
	  }).id('forge_frontier:item_application/fluid_pipe');

    // Creates New Energry Pipe Recipe
	event.remove({ id: 'pipez:energy_pipe' }) 
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			tag: 'forge_frontier:connector'
		  },
		  {
			item: 'create_dd:overcharged_casing'
		  }
		],
		results: [
		  {
			item: 'pipez:energy_pipe'
		  }
		]
	  }).id('forge_frontier:item_application/energy_pipe');

	// Creates Universal Pipe Recipe
	event.remove({ id: 'pipez:universal_pipe'})
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'create:content_observer'
		  },
		  {
			item: 'create_dd:blaze_gold_casing'
		  }
		],
		results: [
		  {
			item: 'pipez:universal_pipe'
		  }
		]
	  }).id('forge_frontier:item_application/universal_pipe');

	  // Creates Gas Pipe Recipe
	  event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'ad_astra:steel_cable'
		  },
		  {
			item: 'create_dd:steel_casing'
		  }
		],
		results: [
		  {
			item: 'pipez:gas_pipe'
		  }
		]
	  }).id('forge_frontier:item_application/gas_pipe');	  

})
