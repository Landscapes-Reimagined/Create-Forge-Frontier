ServerEvents.recipes(event => 
	{
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
	}
);