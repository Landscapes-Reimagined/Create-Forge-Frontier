ServerEvents.recipes(event => 
    {
            // Sturdy Whisk Recipe 
            event.remove({ id: "createmetallurgy:crafting/content/sturdy_whisk"})
            event.shaped(
                Item.of("createmetallurgy:sturdy_whisk"),
                [
                    ' A ',
                    'SAS',
                    'TST'
                ],
                {
                    A: "create:andesite_alloy", 
                    S: "create:sturdy_sheet",
                    T: "#forge:plates/tungsten"
                }
            ).id( 'forge_frontier:shaped/sturdy_whisk' )
    }
)