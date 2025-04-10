CapeJS.addCapes(event => 
    {
            const capes = 
            {
            dev_team: 
              [
                '3230493c-a1c6-4005-885c-033dbc72681b', // M0nkeyPr0grammer - Modpack Director
                'ed5bb7ba-665c-404d-8c72-c908589b188a', // Gamma02 - Feature Engineer
                'e78cfec5-d8dc-468f-a70f-294a95c09c4e', // CtrlAltDyleted - Quest Artitect
              ],
          
              music_artist: 
              [
                'ef660a02-c2e0-4093-9bfe-1a9ef2dc6404', // Dorkjuno
              ],
          
              diamond_supporter: 
              [
                'df87df3e-0d93-4a76-aae7-e4994023600d', // Voidmaster01
              ],
          
              /*completionist: 
              [
                '',  // Will be implemented over time
              ] */
            };
            for (const [cape, players] in capes) {
                for (const player of players) 
                {
                    event.register(player, cape);
                }
            }

    }
);