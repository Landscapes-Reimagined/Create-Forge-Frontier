StartupEvents.registry('block', event => {

    // Ore Blocks
        const ores = [
            { id: 'amberlite', name: 'Amberlite' },
            { id: 'aubrum', name: 'Aubrum' },
            { id: 'azurnium', name: 'Azurnium' },
            { id: 'frostite', name: 'Frostite' },
            { id: 'glacium', name: 'Glacium' },
            { id: 'guanite', name: 'Guanite' },
            { id: 'neodymrium', name: 'Neodymrium' },
            { id: 'pearlyte', name: 'Pearlyte' },
            { id: 'pyroclast', name: 'Pyroclast' },
            { id: 'radiantite', name: 'Radiantite' },
            { id: 'stellaris', name: 'Stellaris' },
            { id: 'sulphite', name: 'Sulphite' },
            { id: 'verdantine', name: 'Verdantine' },
            { id: 'uraniumnite', name: 'Uraniumnite'},
            { id: 'resonite', name: 'Resonite'}
        ];
    
        ores.forEach(ore => {
            event.create(`forge_frontier:${ore.id}`)
                .displayName(ore.name)
                .soundType('stone')
                .mapColor('stone')
                .hardness(2.0)
                .model(`forge_frontier:block/ore_stones/${ore.id}`)
                .requiresTool(true)
                .renderType('solid')
                .tagItem('forge_frontier:resource_stones')
                .tagBlock("mineable/pickaxe")
                .fullBlock(true);
        });
    
});
