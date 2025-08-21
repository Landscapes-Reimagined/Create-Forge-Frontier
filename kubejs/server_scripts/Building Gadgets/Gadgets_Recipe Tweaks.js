ServerEvents.recipes(event => 
    {
        // Recipe Removals
        event.remove({ id: 'buildinggadgets2:gadget_building' })
        event.remove({ id: 'buildinggadgets2:gadget_exchanging' })
        event.remove({ id: 'buildinggadgets2:gadget_copy_paste' })
        event.remove({ id: 'buildinggadgets2:gadget_cut_paste' })
        event.remove({ id: 'buildinggadgets2:gadget_destruction' })

        // Common Materials
        const I = 'create_new_age:overcharged_iron_sheet'; 
        const R = 'ae2:fluix_crystal';

        // Helper for Gadget Recipes 
        function gadget(out, pattern, proc, sidePart, id) {
            const key = { I: I, R: R, P: proc };
            if (pattern.join('').includes('L')) key.L = sidePart;

            event.shaped(
                Item.of(out),
                pattern,
                key
            ).id(`forge_frontier:shaped/gadgets/${id}`);
        }

        // Building Gadget
            gadget(
                'buildinggadgets2:gadget_building',
                ['IRI', 'RPR', 'ILI'],
                'ae2:engineering_processor',
                'ae2:fluix_pearl',
                'building'
            );

        // Exchanging Gadget
            gadget(
                'buildinggadgets2:gadget_exchanging',
                ['IRI', 'PLP', 'ILI'],
                'ae2:logic_processor',
                'ae2:charged_certus_quartz_crystal',
                'exchanging'
            );

        // Copy Paste Gadget
            gadget(
                'buildinggadgets2:gadget_copy_paste',
                ['IRI', 'PLP', 'ILI'],
                'ae2:calculation_processor',
                'ae2:quartz_glass',
                'copy_paste'
            );

        // Cut Paste Gadget
            gadget(
                'buildinggadgets2:gadget_cut_paste',
                ['IRI', 'RPR', 'ILI'],
                'ae2:calculation_processor',
                'ae2:quartz_glass',
                'cut_paste'
            );

        // Destruction Gadget 
            event.shaped(
                Item.of('buildinggadgets2:gadget_destruction'),
                [
                    'IRI',
                    'RCR',
                    'IPI'
                ],
                {
                    I: I,
                    R: R,
                    P: 'ae2:calculation_processor',
                    C: 'ae2:annihilation_core'
                }
            ).id('forge_frontier:shaped/gadgets/destruction');
    }
);
