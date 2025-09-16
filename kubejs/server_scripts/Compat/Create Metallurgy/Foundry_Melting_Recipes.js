ServerEvents.recipes(event => {
    // Map of materials to their molten fluid outputs
    const materials = [
        { name: 'bismuth', fluid: 'forge_frontier:molten_bismuth' },
        { name: 'calorite', fluid: 'forge_frontier:molten_calorite' },
        { name: 'desh', fluid: 'forge_frontier:molten_desh' },
        { name: 'irradium', fluid: 'forge_frontier:molten_irradium' },
        { name: 'malachite', fluid: 'forge_frontier:molten_malachite' },
        { name: 'ostrum', fluid: 'forge_frontier:molten_ostrum' },
        { name: 'verdantine', fluid: 'forge_frontier:molten_emerald' },
        { name: 'glacium', fluid: 'forge_frontier:molten_diamond' },
        { name: 'debris', fluid: 'forge_frontier:molten_debris' },
        { name: 'resonite', fluid: 'forge_frontier:molten_echo_shard' },
        { name: 'aubrum', fluid: 'forge_frontier:molten_desh' },
        { name: 'pyroclast', fluid: 'forge_frontier:molten_calorite' },
        { name: 'frostite', fluid: 'forge_frontier:molten_etrium' },
        { name: 'stellaris', fluid: 'forge_frontier:molten_ostrum' },
        { name: 'radiantite', fluid: 'forge_frontier:molten_irradium' },
        { name: 'shale', fluid: 'forge_frontier:molten_malachite' },
        { name: 'palerock', fluid: 'forge_frontier:molten_bismuth' },
        { name: 'guanite', fluid: 'forge_frontier:molten_guano' },
        { name: 'pearlyte', fluid: 'forge_frontier:molten_pearl' },
        { name: 'amberlite', fluid: 'forge_frontier:molten_amber' },
        { name: 'azurnium', fluid: 'forge_frontier:molten_azure_neodymium' },
        { name: 'neodymrium', fluid: 'forge_frontier:molten_scarlet_neodymium' },
        { name: 'uraniumnite', fluid: 'forge_frontier:molten_uranium' },
        { name: 'sulphite', fluid: 'forge_frontier:molten_sulfur' },
        { name: 'reggarfonite', fluid: 'forge_frontier:molten_reggarfonite'},
        { name: 'tin', fluid: 'createmetallurgy:molten_tin'}
    ];

    materials.forEach(material => {
        const inputDust = `forge_frontier:${material.name}_dust`;
        const inputDirty = `forge_frontier:dirty_${material.name}_dust`;
        const inputIngot = `#forge:ingots/${material.name}`;
        const inputNugget = `#forge:nuggets/${material.name}`;
        const inputRod = `#forge:rods/${material.name}`;
        const inputSheet = `#forge:plates/${material.name}`;
        const inputWire = `#forge:wires/${material.name}`;

    // Dust to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputDust }],
            processingTime: 20,
            results: [
                {
                    fluid: material.fluid,
                    amount: 180
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_dust_to_molten`);
    
    // Dirty Dust to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputDirty }],
            processingTime: 30,
            results: [
                {
                    fluid: material.fluid,
                    amount: 90
                },
                {
                    fluid: 'createmetallurgy:molten_slag',
                    amount: 30
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_dirty_dust_to_molten`);

    // Ingot to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputIngot }],
            processingTime: 40,
            results: [
                {
                    fluid: material.fluid,
                    amount: 90
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_ingot_to_molten`);

    // Nugget to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputNugget }],
            processingTime: 4,
            results: [
                {
                    fluid: material.fluid,
                    amount: 20
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_nugget_to_molten`);

    // Rod to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputRod }],
            processingTime: 20,
            results: [
                {
                    fluid: material.fluid,
                    amount: 45
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_rod_to_molten`);

    // Sheet to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputSheet }],
            processingTime: 40,
            results: [
                {
                    fluid: material.fluid,
                    amount: 90
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_sheet_to_molten`);

    // Wire to Molten
        event.custom({
            type: "createmetallurgy:melting",
            heatRequirement: "heated",
            ingredients: [{ item: inputWire }],
            processingTime: 20,
            results: [
                {
                    fluid: material.fluid,
                    amount: 45
                }
            ]
        }).id(`forge_frontier:melting/${material.name}_wire_to_molten`);
    });
});
