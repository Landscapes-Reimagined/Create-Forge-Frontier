ServerEvents.recipes(event => 
	{
		// Shaped Recipes
			// Charger Tier I
			event.remove({ id: 'chargers:charger_t1' })

			// Charger Tier II
			event.remove({ id: 'chargers:charger_t2' }) 

			// Charger Tier III
			event.remove({ id: 'chargers:charger_t3' }) 

			// Charger Tier IV
			event.remove({ id: 'chargers:charger_t4' }) 

			// Wireless Charger
			event.remove({ id: 'chargers:wireless_charger' })  
	}
)