// priority: 0

ServerEvents.recipes(event => {
	
	// Remove recipes here
	event.remove({ id: 'create_dd:copycat_block_from_ingots_zinc_stonecutting'})
	event.remove({ id: 'create_dd:copycat_slab_from_ingots_zinc_stonecutting'})
	event.remove({ id: 'chipped:benches/mechanist_workbench' }) // Removes Recipe, fixed below
	event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' }) // Removes Broken Recipe
	event.remove({ id: 'createfoundry:mixing/melting/ore/redstone_from_ore' })
	event.remove({ id: 'createfoundry:mixing/melting/ore/lapis_from_ore' })
	event.remove({ id: 'create:crushing/nether_wart_block' })
	event.remove({ id: 'explorerscompass:explorers_compass' })
	event.remove({ id: 'cagedmobs:crafting/hopping_mob_cage'})
	event.remove({ id: 'cagedmobs:crafting/mob_cage'})
	event.remove({ id: 'create_power_loader:crafting/empty_andesite_chunk_loader'})
	event.remove({ id: 'create_power_loader:crafting/empty_brass_chunk_loader'})
	event.remove({ id: 'create_dd:crafting/coal_piece_from_decompacting'})
	event.remove({ id: 'create_dd:crafting/coal_piece_compacting'})
	event.remove({ id: 'createteleporters:quantum_fluid_recipe'})
	event.remove({ id: 'createteleporters:tele_fluid_chorus'})
	event.remove({ id: 'createteleporters:telefluid_drain'})
	event.remove({ id: 'hyperbox:hyperbox'})
	event.remove({ id: 'create_oppenheimered/compacting/amber_from_honey'})
	event.remove({ id: 'create_dd:superheating/netherite_scrap'})
	event.remove({ id: 'create_additions_synthetics:tank_conversion' })

	// Rotten Flesh to Leather
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				item: 'minecraft:rotten_flesh'
			},
			{
				item: 'create_additions_synthetics:calcite_salt'
			}
		],
		result: {
			item: 'minecraft:leather',
			count: 1
		  }
	}).id( 'forge_frontier:shapeless/flesh_to_leather' )	

	// Forge Chest to Vanilla Chest Recipe
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				tag: 'forge:chests/wooden'
			}
		],
		result: {
			item: 'minecraft:chest',
			count: 1
		  }
	}).id( 'forge_frontier:shapeless/forge_vanilla_chest' )


	// Chipped Barrel to Vanilla Barrel Recipe
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				tag: 'chipped:barrel'
			}
		],
		result: {
			item: 'minecraft:barrel',
			count: 1
		  }
	}).id( 'forge_frontier:shapeless/chipped_vanilla_barrel' )


	// Sophisticated Spruce Barrel to Limited Barrel Recipes

		const createBarrelRecipe = (ingredients, resultItem, idSuffix) => {
			event.custom({
				type: 'minecraft:crafting_shapeless',
				ingredients: ingredients.map(ingredient =>
					ingredient.item
						? { item: ingredient.item, nbt: ingredient.nbt || undefined }
						: { tag: ingredient.tag }
				),
				result: {
					item: resultItem.item,
					count: 1,
					nbt: resultItem.nbt
				}
			}).id(`forge_frontier:shapeless/${idSuffix}`);
		};

	// Limited Barrel Recipes
		createBarrelRecipe([
			{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "spruce" } },
			{ tag: 'minecraft:wooden_slabs' }
		], 
		{ item: 'sophisticatedstorage:limited_barrel_1', nbt: { woodType: "spruce" } }, 
		'spruce_limited_barrel_1');

		createBarrelRecipe([
			{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "spruce" } },
			{ tag: 'minecraft:planks' }
		], 
		{ item: 'sophisticatedstorage:limited_barrel_2', nbt: { woodType: "spruce" } }, 
		'spruce_limited_barrel_2');

		createBarrelRecipe([
			{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "spruce" } },
			{ tag: 'minecraft:wooden_slabs' },
			{ tag: 'minecraft:wooden_slabs' }
		], 
		{ item: 'sophisticatedstorage:limited_barrel_3', nbt: { woodType: "spruce" } }, 
		'spruce_limited_barrel_3');

		createBarrelRecipe([
			{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "spruce" } },
			{ tag: 'minecraft:planks' },
			{ tag: 'minecraft:planks' }
		], 
		{ item: 'sophisticatedstorage:limited_barrel_4', nbt: { woodType: "spruce" } }, 
		'spruce_limited_barrel_4');

		
	// New Reinforced Hang Glider Recipe
	event.remove({ id: 'hangglider:reinforced_hang_glider'})
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				item: 'hangglider:hang_glider'
			},
			{
				item: 'minecraft:netherite_ingot'
			}
		],
		result: {
			item: 'hangglider:reinforced_hang_glider',
			count: 1
		  }
	}).id( 'forge_frontier:shapeless/reinforced_hang_glider' )
	

	// Rose Quartz Adjustments
	event.remove({ id: 'create:rose_quartz_block_from_rose_quartz_stonecutting'})
	
	// Rose Quartz to Block Recipe
	event.shaped(
		Item.of('create:rose_quartz_block'),
		[
			'RRR',
			'RRR',
			'RRR'
		],
		{
			R: 'create:rose_quartz'
		}
	).id( 'forge_frontier:shaped/rose_quartz' )

	// Rose Quartz Block to Non Block Shapeless
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				item: 'create:rose_quartz_block'
			}
		],
		result: {
			item: 'create:rose_quartz',
			count: 9
		  }
	}).id( 'forge_frontier:shapeless/rose_quartz' )

	// Basic Item Collector Recipe
	event.remove({ id: 'itemcollectors:basic_collector' })
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'minecraft:obsidian'
		  },
		  {
			tag: 'forge:ender_pearls'
		  }
		],
		results: [
		  {
			item: 'itemcollectors:basic_collector'
		  }
		]
	  }).id('forge_frontier:item_application/basic_collector');

	// Advanced Item Collector Recipe
	event.remove({ id: 'itemcollectors:advanced_collector' })
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'itemcollectors:basic_collector'
		  },
		  {
			item: 'minecraft:ender_eye'
		  }
		],
		results: [
		  {
			item: 'itemcollectors:advanced_collector'
		  }
		]
	  }).id('forge_frontier:item_application/advanced_collector');

	// Creates New Hyperbox Recipe
	event.custom({
		type: 'create:item_application',
		ingredients: [
		  {
			item: 'minecraft:crying_obsidian'
		  },
		  {
			item: 'create_dd:mithril_ingot'
		  }
		],
		results: [
		  {
			item: 'hyperbox:hyperbox'
		  }
		]
	  }).id('forge_frontier:item_application/hyperbox');


	// Strophar Mushroom to Quantum Fluid Mixing Recipe
	event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [
		  {
			item: 'ad_astra:strophar_mushroom'
		  },
		  {
			amount: 250,
			fluid: 'minecraft:water',
			nbt: {}
		  }
		],
		results: [
		  {
			amount: 1000,
			fluid: 'createteleporters:quantum_fluid'
		  }
		]
	  }).id( 'forge_frontier:mixing/quantum_fluid' )

	// Strophar Mushroom to Quantum Fluid Emptying Recipe
	event.custom({
		type: 'create:emptying',
		ingredients: [
		  {
			item: 'ad_astra:strophar_mushroom'
		  }
		],
		results: [
		  {
			amount: 100,
			fluid: 'createteleporters:quantum_fluid'
		  }
		]
	  }).id( 'forge_frontier:emptying/strophar_mushroom' )

	  // Quantum Fluid Bucket to Fluid Emptying Recipe
	  event.custom({
		type: 'create:emptying',
		ingredients: [
		  {
			item: 'createteleporters:quantum_fluid_bucket'
		  }
		],
		results: [
		  {
			item: 'minecraft:bucket'
		  },
		  {
			amount: 1000,
			fluid: 'createteleporters:quantum_fluid'
		  }
		]
	  }).id( 'forge_frontier:emptying/quantum_fluid_bucket' )

	// Iron Plating Crushing Recipe
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item: 'ad_astra:iron_plating' },
		],
		processingTime: 400,
		results: [
			{ 
				item: 'create:iron_sheet', 
				chance: 0.140625  
			}
		]
	}).id('forge_frontier:crushing/iron_plating');

	// Stackable Book to Shapeless Recipe
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				item: 'handcrafted:stackable_book'
			}
		],
		result: {
			item: 'minecraft:book',
			count: 4
		  }

	}).id( 'forge_frontier:shapeless/stackable_book' )

	// Bookstack to Shapeless Recipe
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				item: 'beautify:bookstack'
			}
		],
		result: {
			item: 'minecraft:book',
			count: 3
		  }

	}).id( 'forge_frontier:shapeless/bookstack' )

	// Nether Star Crushing Recipe
	event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:nether_star' },
        ],
        processingTime: 400,
        results: [
            { item: 'cagedmobs:nether_star_fragment', count: 4 }
        ],
    }).id('forge_frontier:crushing/netherstar');

	// Netherite Crushing Recipe
	event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:netherite_ingot' },
        ],
        processingTime: 400,
        results: [
            { item: 'minecraft:netherite_scrap', count: 4 },
			{ item: 'minecraft:netherite_scrap', chance: 0.10}
        ],
    }).id('forge_frontier:crushing/netherite');

	// Adjust Coal Recipe
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  },
		  {
			'tag': 'forge:nuggets/coal'
		  }
		],
		result: {
		  item: 'minecraft:coal',
		  count: 1
		}
	  }).id( 'forge_frontier:shapeless/nugget_coal' )

	// Adjust Coal Piece Recipe
	event.custom({
		type: 'minecraft:crafting_shapeless',
		ingredients: [
			{
				item: 'minecraft:coal'
			}
		],
		result: {
			item: 'create_dd:coal_piece',
			count: 9
		  }

	}).id( 'forge_frontier:shapeless/coal_piece_coal' )

	// Creates Empty Andesite Chunk Loader
	event.custom({
		type: 'create:mechanical_crafting',
		pattern: [
			'AAA',
			'ABA',
			'CDC'
		],
		key: {
			A: Ingredient.of('createcompression:compressed_glass_3x').toJson(),
			B: Ingredient.of('advancednetherite:netherite_diamond_block').toJson(),
			C: Ingredient.of('create:andesite_casing').toJson(),
			D: Ingredient.of('create_compressed:shaft_bundle').toJson()
		},
		result: Ingredient.of('create_power_loader:empty_andesite_chunk_loader').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechancial_crafting/empty_andesite_chunk_loader');

	// Creates Empty Brass Chunk Loader
	event.custom({
		type: 'create:mechanical_crafting',
		pattern: [
			'AAAAA',
			'A F A',
			'A B A',
			'CDDDC',
			'CCECC'
		],
		key: {
			A: Ingredient.of('createcompression:compressed_glass_1x').toJson(),
			B: Ingredient.of('create_power_loader:empty_andesite_chunk_loader').toJson(),
			C: Ingredient.of('create:brass_casing').toJson(),
			D: Ingredient.of('create_compressed:mechanism_block').toJson(),
			E: Ingredient.of('create_compressed:shaft_bundle').toJson(),
			F: Ingredient.of('advancednetherite:netherite_diamond_block').toJson()
		},
		result: Ingredient.of('create_power_loader:empty_brass_chunk_loader').toJson(),
		acceptMirrored: false
	}).id('forge_frontier:mechancial_crafting/empty_brass_chunk_loader');

		// Creates Brass Chunk Loader
		event.custom({
			type: 'create:mechanical_crafting',
			pattern: [
				'AAAAA',
				'A F A',
				'A B A',
				'CDDDC',
				'CCECC'
			],
			key: {
				A: Ingredient.of('createcompression:compressed_glass_1x').toJson(),
				B: Ingredient.of('create_power_loader:andesite_chunk_loader').toJson(),
				C: Ingredient.of('create:brass_casing').toJson(),
				D: Ingredient.of('create_compressed:mechanism_block').toJson(),
				E: Ingredient.of('create_compressed:shaft_bundle').toJson(),
				F: Ingredient.of('advancednetherite:netherite_diamond_block').toJson()
			},
			result: Ingredient.of('create_power_loader:brass_chunk_loader').toJson(),
			acceptMirrored: false
		}).id('forge_frontier:mechancial_crafting/brass_chunk_loader');

	// Creates Ash Recipe
	event.custom({
		type: 'minecraft:smoking',
		cookingtime: 100,
		ingredient: {
		  item: 'minecraft:charcoal'
		},
		result: 'supplementaries:ash'
	  }).id( 'forge_frontier:smoking/ash' )

	// Creates Modded Crafting Table Recipe
	event.shapeless(
		Item.of('minecraft:crafting_table'),
		[
			'#minecraft:planks',
			'#minecraft:planks',
			'#minecraft:planks',
			'#minecraft:planks'
		]
	).id( 'forge_frontier:shapeless/crafting_table' )

	// Create Magnetite Recipe
	event.custom({
		type: 'create_new_age:energising',
		energy_needed: 1000,
		ingredients: [
		  {
			item: 'createcompression:compressed_stone_2x'
		  }
		],
		results: [
		  {
			item: 'create_new_age:magnetite_block'
		  }
		]
	  }).id( 'forge_frontier:energising/magnetite_block' )

	// Creates Dragon Egg Recipe
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{
				item: 'minecraft:nether_star',
				amount: 1
			},
			{
				item: 'ends_delight:non_hatchable_dragon_egg',
				amount: 1
			},
			{
				fluid: 'create_central_kitchen:dragon_breath',
				amount: 1000
			}
		],
		results: [
			{
				item: 'minecraft:dragon_egg',
				amount: 1
			}
		],
		heatRequirement: 'superheated'
	}).id('forge_frontier:mixing/dragon_egg');

	// Creates New Mob Cage Recipe
	event.shaped(
		Item.of('cagedmobs:mob_cage'),
		[
			' A ',
			'B B',
			'CCC'
		],
		{
			A: 'minecraft:chain',
			B: 'createaddition:iron_rod',
			C: 'minecraft:iron_block'
		}
	).id( 'forge_frontier:shaped/mob_cage' )

	// Creates New Hopping Mob Cage Recipe
	event.shaped(
		Item.of('cagedmobs:hopping_mob_cage'),
		[
			'   ',
			'ABA',
			' C '
		],
		{
			A: 'minecraft:redstone',
			B: 'cagedmobs:mob_cage',
			C: 'create:chute'
		}
	).id( 'forge_frontier:shaped/hopping_mob_cage' )

	// Creates Structure Compass Recipe
	event.shaped(
		Item.of('explorerscompass:explorerscompass', 1),
		[
			'ACA',
			'CBC',
			'ACA'
		],
		{
			A: 'apotheosis:prismatic_web',
			B: 'naturescompass:naturescompass',
			C: 'createcompression:compressed_andesite_2x'
		}
	).id('forge_frontier:shaped/explorers_compass')

	// Any Dirt to Vanilla Dirt
	event.shapeless(
		Item.of('minecraft:dirt'),
		[
			'#minecraft:dirt'
		]
	).id( 'forge_frontier:shapeless/dirt' )

	// Diamond Grit Sandpaper
	event.shapeless(
		Item.of('createaddition:diamond_grit_sandpaper'),
		[
			'minecraft:paper',
			'createaddition:diamond_grit'
		]
	).id( 'forge_frontier:shapeless/diamond_grit_sandpaper' )

	// New Nether Wart Block Crushing Recipe
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item: 'minecraft:nether_wart_block' }
		],
		processingTime: 400,
		results: [
			{ item: 'minecraft:nether_wart', count: 2 },
			{ item: 'minecraft:nether_wart', chance: 0.10 }]
	}).id('forge_frontier:crushing/nether_wart_block');

	// Create Chromatic Compound
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:glowstone_dust').toJson(),
			Ingredient.of('create:powdered_obsidian').toJson(),
			Ingredient.of('create:polished_rose_quartz').toJson()
		],
		results: [
			Ingredient.of('create:chromatic_compound').toJson()
		],
		conditions: ['superheated']
	}).id('forge_frontier:mixing/chromatic_compound');

	// Fixes Chipped Tinkering Table Recipe
	event.shaped(
		Item.of('chipped:tinkering_table', 1),
		[
			'A  ',
			'BCC',
			'DED'
		],
		{
			A: 'minecraft:redstone_torch',
			B: 'minecraft:piston',
			C: '#minecraft:wooden_slabs',
			D: '#forge:stripped_logs',
			E: 'minecraft:tnt'
		}
	).id( 'forge_frontier:shaped/tinkering_table' )

	// Liquid to Bottle Recipe
	event.custom({
		type: 'create:filling',
		ingredients: [
			{
				fluid: 'create_central_kitchen:dragon_breath',
				amount: 100
			},
			{
				item: 'minecraft:glass_bottle',
				count: 1
			}
		],
		results: [
			{
				item: 'minecraft:dragon_breath',
				count: 1
			}
		]
	}).id('forge_frontier:filling/dragons_breath')

})

