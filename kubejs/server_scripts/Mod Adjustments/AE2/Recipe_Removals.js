ServerEvents.recipes(event => 
    {
        event.remove({ id: "expatternprovider:cobblestone_cell"})
        event.remove({ id: "expattenprovider:ex_inscriber"})
    }
)