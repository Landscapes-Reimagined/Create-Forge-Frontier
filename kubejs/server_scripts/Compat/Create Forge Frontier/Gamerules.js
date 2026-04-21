ServerEvents.loaded(event => {
    const server = event.server;

    server.runCommandSilent('gamerule artifacts.eternalSteak.enabled false');
    server.runCommandSilent('gamerule artifacts.everlastingBeef.enabled false');
});