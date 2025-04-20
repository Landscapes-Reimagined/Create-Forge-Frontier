// Angel Ring Recipe Tweaks
ServerEvents.recipes(event => 
    {

        // Diamond Ring
        event.remove({ id: 'angelring:diamond_ring'})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                ' DDD ',
                'DD DD',
                'D H D',
                'DD DD',
                ' DDD '
            ],
            key: {
                D: Ingredient.of('minecraft:diamond_block').toJson(),
                H: Ingredient.of('quark:diamond_heart').toJson()
            },
            result: Ingredient.of('angelring:diamond_ring').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/diamond_ring'); 

        // Angel Ring
        event.remove({ id: 'angelring:angel_ring'})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                ' GNG ',
                'GG GG',
                'E D E',
                'GG GG',
                ' GFG '
            ],
            key: {
                G: Ingredient.of('minecraft:gold_block').toJson(),
                N: Ingredient.of('minecraft:nether_star').toJson(),
                E: Ingredient.of('createcompression:compressed_experience_2x').toJson(),
                D: Ingredient.of('angelring:diamond_ring').toJson(),
                F: Ingredient.of('supplementaries:feather_block').toJson()
            },
            result: Ingredient.of('angelring:angel_ring').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/angel_ring');         

        // Energetic Angel Ring
        event.remove({ id: 'angelring:energetic_angel_ring'})
        event.custom({
            type: "create:mechanical_crafting",
            pattern: [
                ' RNR ',
                'RR RR',
                'R A R',
                'RR RR',
                ' RRR '
            ],
            key: {
                R: Ingredient.of('create_compressed:rose_quartz_polished_block').toJson(),
                N: Ingredient.of('forge_frontier:overcharged_netherite_block').toJson(),
                A: Ingredient.of('angelring:angel_ring').toJson()
            },
            result: Ingredient.of('angelring:energetic_angel_ring').toJson(),
            acceptMirrored: false
        }).id('forge_frontier:mechanical_crafting/energetic_angel_ring');         


    }
)