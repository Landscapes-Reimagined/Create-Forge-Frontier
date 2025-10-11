ServerEvents.recipes(event => 
    {
        event.remove({ id: "powah:crafting/dielectric_rod"})
        event.remove({ id: "powah:crafting/dielectric_rod_h"})
        event.remove({ id: "powah:crafting/dielectric_paste"})
        event.remove({ id: "powah:crafting/dielectric_paste_2"})
        event.remove({ id: "powah:energizing/energized_steel"})
        event.remove({ id: "powah:energizing/blazing_crystal"})
        event.remove({ id: "powah:energizing/blazing_crystal_2"})
        event.remove({ id: "powah:energizing/niotic_crystal"})
        event.remove({ id: "powah:energizing/spirited_crystal"})
        event.remove({ id: "powah:energizing/nitro_crystal"})
    }
)