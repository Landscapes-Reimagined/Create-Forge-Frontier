ServerEvents.recipes(event => {
	// === Remove default Easy Villagers & Piglins recipes ===
	var removedIds = [
	  'easy_villagers:trader',
	  'easy_villagers:auto_trader',
	  'easy_villagers:farmer',
	  'easy_villagers:breeder',
	  'easy_villagers:converter',
	  'easy_villagers:iron_farm',
	  'easy_villagers:incubator',
	  'easy_piglins:barterer'
	];
	removedIds.forEach(function(id) {
	  event.remove({ id: id });
	});
  
	// === Helper function for compacting recipes ===
	function addCompactingRecipe(output, id, ingredients) {
	  event.custom({
		type: 'create:compacting',
		ingredients: ingredients,
		results: [{ item: output }]
	  }).id('forge_frontier:compacting/' + id);
	}
  
	// === Recipe Definitions ===
	addCompactingRecipe('easy_villagers:trader', 'trader', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:polished_rose_quartz' },
	  { item: 'create:andesite_alloy' },
	  { item: 'create:andesite_alloy' },
	  { item: 'create:andesite_alloy' }
	]);
  
	addCompactingRecipe('easy_villagers:auto_trader', 'auto_trader', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:polished_rose_quartz' },
	  { item: 'create:andesite_alloy' },
	  { item: 'create:brass_ingot' },
	  { item: 'create:andesite_alloy' }
	]);
  
	addCompactingRecipe('easy_villagers:farmer', 'farmer', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'minecraft:water_bucket' },
	  { item: 'create:andesite_alloy' },
	  { item: 'farmersdelight:rich_soil' },
	  { item: 'create:andesite_alloy' }
	]);
  
	addCompactingRecipe('easy_villagers:breeder', 'breeder', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { tag: 'minecraft:beds' },
	  { item: 'create:andesite_alloy' },
	  { item: 'create:andesite_casing' },
	  { item: 'create:andesite_alloy' }
	]);
  
	addCompactingRecipe('easy_villagers:converter', 'converter', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'minecraft:rotten_flesh' },
	  { item: 'create:andesite_alloy' },
	  { tag: 'create:stone_types/andesite' },
	  { item: 'create:andesite_alloy' }
	]);
  
	addCompactingRecipe('easy_villagers:incubator', 'incubator', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:andesite_alloy' },
	  { tag: 'minecraft:wool' },
	  { item: 'create:andesite_alloy' }
	]);
  
	addCompactingRecipe('easy_piglins:barterer', 'barterer', [
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:framed_glass_pane' },
	  { item: 'create:andesite_alloy' },
	  { item: 'minecraft:gold_block' },
	  { item: 'minecraft:nether_bricks' },
	  { item: 'create:andesite_alloy' }
	]);
  });
  