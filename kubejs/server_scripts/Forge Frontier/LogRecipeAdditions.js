 // Log Recipe Additions
ServerEvents.recipes(event => {

// Log to Sophisticated Chest Recipes
const chestTypes = [
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "oak" } }, 'minecraft:oak_log'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "dark_oak" } }, 'minecraft:dark_oak_log'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "birch" } }, 'minecraft:birch_log'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "spruce" } }, 'minecraft:spruce_log'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "jungle" } }, 'minecraft:jungle_log'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "crimson" } }, 'minecraft:crimson_stem'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "mangrove" } }, 'minecraft:mangrove_log'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "warped" } }, 'minecraft:warped_stem'],
    [{ item: 'sophisticatedstorage:chest', nbt: { woodType: "acacia" } }, 'minecraft:acacia_log'],
];

chestTypes.forEach(chestType => {
    event.shaped(
        {
            item: chestType[0].item || chestType[0], // Handle both plain items and items with NBT
            count: 4,
            nbt: chestType[0].nbt || undefined
        },
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: chestType[1],
            B: 'minecraft:redstone_torch'
        }
    );
});

// Log to Sophisticated Barrel Recipes
const barrelTypes = [
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "oak" } }, 'minecraft:oak_log'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "dark_oak" } }, 'minecraft:dark_oak_log'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "birch" } }, 'minecraft:birch_log'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "spruce" } }, 'minecraft:spruce_log'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "jungle" } }, 'minecraft:jungle_log'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "crimson" } }, 'minecraft:crimson_stem'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "mangrove" } }, 'minecraft:mangrove_log'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "warped" } }, 'minecraft:warped_stem'],
    [{ item: 'sophisticatedstorage:barrel', nbt: { woodType: "acacia" } }, 'minecraft:acacia_log'],
];

barrelTypes.forEach(barrelType => {
    const output = typeof barrelType[0] === 'string'
        ? { item: barrelType[0], count: 4 } // Plain item without NBT
        : { item: barrelType[0].item, count: 4, nbt: barrelType[0].nbt }; // Item with NBT

    event.shaped(
        output,
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: barrelType[1],
            B: '#minecraft:wooden_slabs',
            C: 'minecraft:redstone_torch'
        }
    );
});


	event.shaped(
		Item.of('minecraft:barrel', 4),
		[
			'ABA',
			'A A',
			'ABA'
		],
		{
			A: '#minecraft:logs',
			B: '#minecraft:wooden_slabs'
		}
	);

	// Alternate Trapdoor Recipes
	var trapdoor_types = [
		['minecraft:oak_trapdoor', 'minecraft:oak_log'],
		['minecraft:acacia_trapdoor', 'minecraft:acacia_log'],
		['minecraft:birch_trapdoor', 'minecraft:birch_log'],
		['minecraft:spruce_trapdoor', 'minecraft:spruce_log'],
		['minecraft:dark_oak_trapdoor', 'minecraft:dark_oak_log'],
		['minecraft:jungle_trapdoor', 'minecraft:jungle_log'],
		['minecraft:mangrove_trapdoor', 'minecraft:mangrove_log'],
		['minecraft:warped_trapdoor', 'minecraft:warped_stem'],
		['minecraft:crimson_trapdoor', 'minecraft:crimson_stem'],
		['deeperdarker:echo_trapdoor', 'deeperdarker:echo_log'],
		['minecraft:bamboo_trapdoor', 'minecraft:bamboo_block'],
		['minecraft:cherry_trapdoor', 'minecraft:cherry_log'],
		['regions_unexplored:blackwood_trapdoor', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_trapdoor', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_trapdoor', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_trapdoor', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_trapdoor', 'regions_unexplored:dead_log'],
		['regions_unexplored:eucalyptus_trapdoor', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_trapdoor', 'regions_unexplored:green_bioshroom_stem'],
		['regions_unexplored:joshua_trapdoor', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_trapdoor', 'regions_unexplored:kapok_log'],
		['regions_unexplored:larch_trapdoor', 'regions_unexplored:larch_log'],
		['regions_unexplored:magnolia_trapdoor', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_trapdoor', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_trapdoor', 'regions_unexplored:mauve_log'],
		['regions_unexplored:palm_trapdoor', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_trapdoor', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_trapdoor', 'regions_unexplored:pink_bioshroom_stem'],
		['regions_unexplored:redwood_trapdoor', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_trapdoor', 'betterarcheology:rotten_log'],
		['regions_unexplored:socotra_trapdoor', 'regions_unexplored:socotra_log'],
		['regions_unexplored:willow_trapdoor', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_trapdoor', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_trapdoor', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_trapdoor', 'regions_unexplored:cypress_log'],
		['regions_unexplored:dead_trapdoor','regions_unexplored:ashen_log'],
		['minecraft:bamboo_trapdoor','regions_unexplored:bamboo_log'],
		['minecraft:birch_trapdoor','regions_unexplored:silver_birch_log'],
		['minecraft:oak_trapdoor','regions_unexplored:small_oak_log'],
		['regions_unexplored:brimwood_trapdoor','regions_unexplored:brimwood_log_magma'],
		['alexscaves:pewen_trapdoor','alexscaves:pewen_log'],
		['alexscaves:thornwood_trapdoor','alexscaves:thornwood_log']
	]

	trapdoor_types.forEach(trapdoor_type => {
		event.shaped(
			Item.of(trapdoor_type[0], 8),
			[
				'AAA',
				'AAA'
			],
			{
				A: trapdoor_type[1]
			}
		)
	});

	// Alternate Slab Recipes
	var slab_types = [
		['minecraft:oak_slab', 'minecraft:oak_log'],
		['minecraft:acacia_slab', 'minecraft:acacia_log'],
		['minecraft:birch_slab', 'minecraft:birch_log'],
		['minecraft:spruce_slab', 'minecraft:spruce_log'],
		['minecraft:dark_oak_slab', 'minecraft:dark_oak_log'],
		['minecraft:jungle_slab', 'minecraft:jungle_log'],
		['minecraft:mangrove_slab', 'minecraft:mangrove_log'],
		['minecraft:warped_slab', 'minecraft:warped_stem'],
		['minecraft:crimson_slab', 'minecraft:crimson_stem'],
		['deeperdarker:echo_slab', 'deeperdarker:echo_log'],
		['minecraft:bamboo_slab', 'minecraft:bamboo_block'],
		['minecraft:cherry_slab', 'minecraft:cherry_log'],
		['regions_unexplored:blackwood_slab', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_slab', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_slab', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_slab', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_slab', 'regions_unexplored:dead_log'],
		['regions_unexplored:eucalyptus_slab', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_slab', 'regions_unexplored:green_bioshroom_stem'],
		['regions_unexplored:joshua_slab', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_slab', 'regions_unexplored:kapok_log'],
		['regions_unexplored:larch_slab', 'regions_unexplored:larch_log'],
		['regions_unexplored:magnolia_slab', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_slab', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_slab', 'regions_unexplored:mauve_log'],
		['regions_unexplored:palm_slab', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_slab', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_slab', 'regions_unexplored:pink_bioshroom_stem'],
		['regions_unexplored:redwood_slab', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_slab', 'betterarcheology:rotten_log'],
		['regions_unexplored:socotra_slab', 'regions_unexplored:socotra_log'],
		['regions_unexplored:willow_slab', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_slab', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_slab', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_slab', 'regions_unexplored:cypress_log'],
		['regions_unexplored:alpha_slab', 'regions_unexplored:alpha_log'],
		['regions_unexplored:dead_slab','regions_unexplored:ashen_log'],
		['minecraft:bamboo_slab','regions_unexplored:bamboo_log'],
		['minecraft:birch_slab','regions_unexplored:silver_birch_log'],
		['minecraft:oak_slab','regions_unexplored:small_oak_log'],
		['regions_unexplored:brimwood_slab','regions_unexplored:brimwood_log_magma'],
		['alexscaves:pewen_slab','alexscaves:pewen_log'],
		['alexscaves:thornwood_slab','alexscaves:thornwood_log']
	]

	slab_types.forEach(slab_type => {
		event.shaped(
			Item.of(slab_type[0], 24),
			[
				'AAA'
			],
			{
				A: slab_type[1]
			}
		)
	});

	// Alternate Door Recipes
	var door_types = [
		['minecraft:oak_door', 'minecraft:oak_log'],
		['minecraft:acacia_door', 'minecraft:acacia_log'],
		['minecraft:birch_door', 'minecraft:birch_log'],
		['minecraft:spruce_door', 'minecraft:spruce_log'],
		['minecraft:dark_oak_door', 'minecraft:dark_oak_log'],
		['minecraft:jungle_door', 'minecraft:jungle_log'],
		['minecraft:mangrove_door', 'minecraft:mangrove_log'],
		['minecraft:warped_door', 'minecraft:warped_stem'],
		['minecraft:crimson_door', 'minecraft:crimson_stem'],
		['deeperdarker:echo_door', 'deeperdarker:echo_log'],
		['minecraft:bamboo_door', 'minecraft:bamboo_block'],
		['minecraft:cherry_door', 'minecraft:cherry_log'],
		['regions_unexplored:blackwood_door', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_door', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_door', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_door', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_door', 'regions_unexplored:dead_log'],
		['regions_unexplored:eucalyptus_door', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_door', 'regions_unexplored:green_bioshroom_stem'],
		['regions_unexplored:joshua_door', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_door', 'regions_unexplored:kapok_log'],
		['regions_unexplored:larch_door', 'regions_unexplored:larch_log'],
		['regions_unexplored:magnolia_door', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_door', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_door', 'regions_unexplored:mauve_log'],
		['regions_unexplored:palm_door', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_door', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_door', 'regions_unexplored:pink_bioshroom_stem'],
		['regions_unexplored:redwood_door', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_door', 'betterarcheology:rotten_log'],
		['regions_unexplored:socotra_door', 'regions_unexplored:socotra_log'],
		['regions_unexplored:willow_door', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_door', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_door', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_door', 'regions_unexplored:cypress_log'],
		['regions_unexplored:dead_door','regions_unexplored:ashen_log'],
		['minecraft:bamboo_door','regions_unexplored:bamboo_log'],
		['minecraft:birch_door','regions_unexplored:silver_birch_log'],
		['minecraft:oak_door','regions_unexplored:small_oak_log'],
		['regions_unexplored:brimwood_door','regions_unexplored:brimwood_log_magma'],
		['alexscaves:pewen_door','alexscaves:pewen_log'],
		['alexscaves:thornwood_door','alexscaves:thornwood_log']
	]

	door_types.forEach(door_type => {
		event.shaped(
			Item.of(door_type[0], 12),
			[
				'AA ',
				'AA ',
				'AA '
			],
			{
				A: door_type[1]
			}
		)
	});

	// Alternate Stair Recipes
	var stairs_types = [
		['minecraft:oak_stairs', 'minecraft:oak_log'],
		['minecraft:acacia_stairs', 'minecraft:acacia_log'],
		['minecraft:birch_stairs', 'minecraft:birch_log'],
		['minecraft:spruce_stairs', 'minecraft:spruce_log'],
		['minecraft:dark_oak_stairs', 'minecraft:dark_oak_log'],
		['minecraft:jungle_stairs', 'minecraft:jungle_log'],
		['minecraft:mangrove_stairs', 'minecraft:mangrove_log'],
		['minecraft:warped_stairs', 'minecraft:warped_stem'],
		['minecraft:crimson_stairs', 'minecraft:crimson_stem'],
		['deeperdarker:echo_stairs', 'deeperdarker:echo_log'],
		['minecraft:bamboo_stairs', 'minecraft:bamboo_block'],
		['minecraft:cherry_stairs', 'minecraft:cherry_log'],
		['regions_unexplored:blackwood_stairs', 'regions_unexplored:blackwood_log'],
		['regions_unexplored:blue_bioshroom_stairs', 'regions_unexplored:blue_bioshroom_stem'],
		['regions_unexplored:brimwood_stairs', 'regions_unexplored:brimwood_log'],
		['regions_unexplored:cobalt_stairs', 'regions_unexplored:cobalt_log'],
		['regions_unexplored:dead_stairs', 'regions_unexplored:dead_log'],
		['regions_unexplored:eucalyptus_stairs', 'regions_unexplored:eucalyptus_log'],
		['regions_unexplored:green_bioshroom_stairs', 'regions_unexplored:green_bioshroom_stem'],
		['regions_unexplored:joshua_stairs', 'regions_unexplored:joshua_log'],
		['regions_unexplored:kapok_stairs', 'regions_unexplored:kapok_log'],
		['regions_unexplored:larch_stairs', 'regions_unexplored:larch_log'],
		['regions_unexplored:magnolia_stairs', 'regions_unexplored:magnolia_log'],
		['regions_unexplored:maple_stairs', 'regions_unexplored:maple_log'],
		['regions_unexplored:mauve_stairs', 'regions_unexplored:mauve_log'],
		['regions_unexplored:palm_stairs', 'regions_unexplored:palm_log'],
		['regions_unexplored:pine_stairs', 'regions_unexplored:pine_log'],
		['regions_unexplored:pink_bioshroom_stairs', 'regions_unexplored:pink_bioshroom_stem'],
		['regions_unexplored:redwood_stairs', 'regions_unexplored:redwood_log'],
		['betterarcheology:rotten_stairs', 'betterarcheology:rotten_log'],
		['regions_unexplored:socotra_stairs', 'regions_unexplored:socotra_log'],
		['regions_unexplored:willow_stairs', 'regions_unexplored:willow_log'],
		['regions_unexplored:yellow_bioshroom_stairs', 'regions_unexplored:yellow_bioshroom_stem'],
		['regions_unexplored:baobab_stairs', 'regions_unexplored:baobab_log'],
		['regions_unexplored:cypress_stairs', 'regions_unexplored:cypress_log'],
		['regions_unexplored:alpha_stairs', 'regions_unexplored:alpha_log'],
		['regions_unexplored:dead_stairs','regions_unexplored:ashen_log'],
		['minecraft:bamboo_stairs','regions_unexplored:bamboo_log'],
		['minecraft:birch_stairs','regions_unexplored:silver_birch_log'],
		['minecraft:oak_stairs','regions_unexplored:small_oak_log'],
		['regions_unexplored:brimwood_stairs','regions_unexplored:brimwood_log_magma'],
		['alexscaves:pewen_stairs','alexscaves:pewen_log'],
		['alexscaves:thornwood_stairs','alexscaves:thornwood_log']
	]

	stairs_types.forEach(stairs_type => {
		event.shaped(
			Item.of(stairs_type[0], 16),
			[
				'A  ',
				'AA ',
				'AAA'
			],
			{
				A: stairs_type[1]
			}
		)
	});
	
});
