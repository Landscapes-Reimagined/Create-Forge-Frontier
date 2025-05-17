// List of usernames that should receive the custom item
const rewardUsernames = [
    "M0nkeyPr0grammer", "MyPoopSmells", "the_ellagator", "Voidmaster01",
    "Tammlin7703", "shaneleelevin", "thegrugg", "DYLTHEKILLER",
    "Scooter1974", "raydee", "gamma_02", "ZhuHer", "CapezOnMyBack",
    "Nick_Dixon37", "Tookiyo", "Sabermech", "Dongington", "CodyMC_"
];

// Custom item to give to the players
const customItem = 'forge_frontier:closed_beta_coin';

// Tag to track if the player has received the reward
const rewardTag = 'receivedClosedBetaCoin';

// Trigger on player login (first join tracked with persistentData)
PlayerEvents.loggedIn(event => {
    const player = event.player;

    if (rewardUsernames.includes(player.username)) {
        if (!player.persistentData[rewardTag]) {
            // Give reward
            player.give(Item.of(customItem));

            // Mark as received
            player.persistentData[rewardTag] = true;

            // Notify the player
            player.tell([
                Text.of("🎉 Congratulations! 🎉\n").bold().color(0xFFD700),
                Text.of("You've been awarded an exclusive ").color(0xFFFFFF),
                Text.of("Closed Beta Coin").color(0xFFD700).bold(),
                Text.of(" for your invaluable support and dedication as a beta tester!\n"),
                Text.of("Thank you for helping us shape this adventure — your efforts mean the world to us! ").color(0xFFFFFF),
                Text.of("🪙💫\n").color(0xFFD700)
            ]);
        }
    }
});
