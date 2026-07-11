ServerEvents.recipes(event => 
    {
        // Dimensional Shard Recipe
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: "forge_frontier:stabilized_shard_1"
                    },
                    {
                        item: "forge_frontier:stabilized_shard_2"
                    },
                    {
                        item: "forge_frontier:stabilized_shard_3"
                    },
                    {
                        item: "forge_frontier:stabilized_shard_4"
                    },
                    {
                        fluid: "minecraft:lava",
                        amount: 1000 
                    }
                ],
                results: [
                    {
                        item: "forge_frontier:dimensional_shard",
                    }
                ],
                }).id('forge_frontier:mixing/dimensional_shard');

        // Nether Compound
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: "nether_remastered:bottled_nether_essence"
                    },
                    {
                        item: "nether_remastered:bottled_nether_essence"
                    },
                    {
                        item: "nether_remastered:bottled_nether_essence"
                    },
                    {
                        item: "nether_remastered:bottled_nether_essence"
                    },
                    {
                        item: "nether_remastered:bottled_nether_essence"
                    },
                    {
                        item: "nether_remastered:bottled_nether_essence"
                    },
                    {
                        item: "create_dd:chromatic_compound"
                    }
                ],
                results: [
                    {
                        item: "forge_frontier:nether_compound",
                    }
                ],
                }).id('forge_frontier:mixing/nether_compound');        

    }
)