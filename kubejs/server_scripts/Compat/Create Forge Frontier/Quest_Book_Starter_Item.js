PlayerEvents.loggedIn((event) => 
    {
        const player = event.player;
        const bookTag = 'receivedFTBQuestsBook'; // Player tag to ensure book is only given once

        // Checks if the player has already received the FTB Quests book
        if (!player.persistentData[bookTag]) {

            // Gives the player the FTB Quests book
            player.give(Item.of('ftbquests:book'));

            // Marks that the player has received the book
            player.persistentData[bookTag] = true;
        }
    }
)
