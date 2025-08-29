ServerEvents.recipes(event => 
    {
        // New Smoking Recipe for Smoked Logs
        event.remove({ id: 'create_dd:mixing/smoked_log'})
        event.custom({
            type: "minecraft:smoking",
            cookingtime : 100,
            experience : 0.1,
            ingredient : {
              tag: "minecraft:logs_that_burn"
            },
            result: "create_dd:smoked_log"
        }).id( 'forge_frontier:smoking/smoked_logs')

        // Creates Ash Recipe
        event.custom({
            type: 'minecraft:smoking',
            cookingtime: 100,
            ingredient: {
            item: 'minecraft:charcoal'
            },
            result: 'supplementaries:ash'
        }).id( 'forge_frontier:smoking/ash' )
        
    }
)