ServerEvents.recipes(event => 
    {
        // Rubber Log Sap Recipe
            event.remove({ id: 'create_dd:emptying/sap_from_rubber_log' });
            event.custom({
                type: 'create:emptying',
                ingredients: [{ item: "create_dd:stripped_rubber_log", count: 1 }],
                results: [
                    { item: "create_dd:stripped_rubber_log", chance: 0.5 },
                    { item: "create_dd:crystallized_sap", chance: 0.10 },
                    { fluid: "create_dd:sap", amount: 200 }
                ]
            }).id('forge_frontier:item_draining/sap_from_rubber_log');

        // Rubber Wood Sap Recipe
            event.remove({ id: 'create_dd:emptying/sap_from_rubber_wood' });
            event.custom({
                type: 'create:emptying',
                ingredients: [{ item: "create_dd:stripped_rubber_wood", count: 1 }],
                results: [
                    { item: "create_dd:stripped_rubber_wood", chance: 0.5 },
                    { item: "create_dd:crystallized_sap", chance: 0.10 },
                    { fluid: "create_dd:sap", amount: 200 }
                ]
            }).id('forge_frontier:item_draining/sap_from_rubber_wood');
    }
)