PlayerEvents.loggedIn((event) => 
    {
        const player = event.player;
        const welcomeTag = 'receivedWelcomeMessage'; // Adds a Player Tag to make sure message shows once

        // Checks for Received Welcome Message Tag
        if (!player.persistentData[welcomeTag]) {
            
            // Sends a welcome message with fancy formatting
            player.tell([
                Text.of("🌄 Welcome to ").bold().color(0x00FF00), 
                Text.of("Create - Forge Frontier, Pioneer!").bold().color(0xFFD700),
                Text.of("\nEmbark on an epic journey and explore the wonders of diverse landscapes.").color(0xFFFFFF),
                Text.of("\nMay your adventures be thrilling, and may your ").color(0xFFFFFF),
                Text.of("Create factories ").bold().color(0x00BFFF),
                Text.of("be extraordinary!").color(0xFFFFFF),
                Text.of("\n- Lead Developer, ").color(0xFFFFFF),
                Text.of("M0nkeyPr0grammer\n").bold().color(0xFF0000)
            ]);

            // Marks that the player has received the welcome message
            player.persistentData[welcomeTag] = true;
        }
    }
)