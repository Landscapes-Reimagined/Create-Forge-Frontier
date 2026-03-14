ServerEvents.recipes(event => 
    {
        event.remove({ id: 'buildinggadgets2:gadget_destruction' })
        event.remove({ id: 'buildinggadgets2:gadget_exchanging' })
        event.remove({ id: 'buildinggadgets2:gadget_building' })
        event.remove({ id: 'buildinggadgets2:gadget_copy_paste' })
        event.remove({ id: 'buildinggadgets2:gadget_cut_paste' })

        // Destruction Gadget
        event.shaped(Item.of('buildinggadgets2:gadget_destruction', 1), 
        [
            'AEA',
            'APA',
            'AGA'
        ], 
        {
            A: 'create:andesite_alloy',
            E: 'create:electron_tube',
            P: 'minecraft:ender_pearl',
            G: 'create:golden_sheet'
        }).id('forge_frontier:shaped/gadget_destruction')

        // Exchanging Gadget
        event.shaped(Item.of('buildinggadgets2:gadget_exchanging', 1), 
        [
            'SES',
            'SPS',
            'SGS'
        ], 
        {
            S: 'create:sturdy_sheet',
            E: 'create:electron_tube',
            P: 'create:precision_mechanism',
            G: 'create:golden_sheet'
        }).id('forge_frontier:shaped/gadget_exchanging')

        // Building Gadget
        event.shaped(Item.of('buildinggadgets2:gadget_building', 1), 
        [
            'AEA',
            'ASA',
            'AGA'
        ], 
        {
            A: 'create:andesite_alloy',
            E: 'create:electron_tube',
            S: 'create:schematic_and_quill',
            G: 'create:golden_sheet'
        }).id('forge_frontier:shaped/gadget_building')

        // Copy Paste Gadget
        event.shaped(Item.of('buildinggadgets2:gadget_copy_paste', 1), 
        [
            'AEA',
            'ACA',
            'AGA'
        ], 
        {
            A: 'create:andesite_alloy',
            E: 'create:electron_tube',
            C: 'create:clipboard',
            G: 'create:golden_sheet'
        }).id('forge_frontier:shaped/gadget_copy_paste')

        // Cut Paste Gadget
        event.shaped(Item.of('buildinggadgets2:gadget_cut_paste', 1), 
        [
            'AEA',
            'ADA',
            'AGA'
        ], 
        {
            A: 'create:andesite_alloy',
            E: 'create:electron_tube',
            D: 'minecraft:shears',
            G: 'create:golden_sheet'
        }).id('forge_frontier:shaped/gadget_cut_paste')
    }
)