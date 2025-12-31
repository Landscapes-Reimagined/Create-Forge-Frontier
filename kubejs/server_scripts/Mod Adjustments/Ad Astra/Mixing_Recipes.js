ServerEvents.recipes(event => 
    {
        // Oxygen Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:gas_tank',
                    },
                    {
                        fluid: 'minecraft:water',
                        amount: 1000
                    }
                ],
                results: [
                    {
                         item: 'ad_astra:gas_tank'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        amount: 1000
                    }
                ],
                processingTime: 100, 
                heatRequirement: "superheated"
            }).id('forge_frontier:mixing/oxygen') 

        // Cryo Fuel Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'ad_astra:ice_shard',
                    },
                    {
                        item: 'ad_astra:ice_shard',
                    },
                    {
                        item: 'ad_astra:ice_shard',
                    },
                    {
                        item: 'ad_astra:ice_shard',
                    },
                    {
                        fluid: 'ad_astra:fuel',
                        amount: 1000
                    }
                ],
                results: [
                    {
                        fluid: 'ad_astra:cryo_fuel',
                        amount: 1000
                    }
                ],
                processingTime: 100, 
                heatRequirement: "superheated"
            }).id('forge_frontier:mixing/cryo_fuel')                 

        // Oil to Fuel Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'ad_astra:oil',
                        amount: 1000
                    }
                ],
                results: [
                    {
                        fluid: 'ad_astra:fuel',
                        amount: 1000
                    }
                ],
                processingTime: 100, 
                heatRequirement: "heated"
            }).id('forge_frontier:mixing/oil_fuel')                 

        // Oil Mixing Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        fluid: 'forge_frontier:molten_carbon',
                        amount: 100
                    },
                    {
                        fluid: 'createaddition:bioethanol',
                        amount: 100
                    }
                ],
                results: [
                    {
                        fluid: 'ad_astra:oil',
                        amount: 100
                    }
                ],
                heatRequirement: "superheated"
            }).id('forge_frontier:mixing/oil');
    }
)