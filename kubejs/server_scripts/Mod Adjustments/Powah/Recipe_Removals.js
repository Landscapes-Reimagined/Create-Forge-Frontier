ServerEvents.recipes(event => 
    {
        event.remove({ id: "powah:crafting/dielectric_rod"})
        event.remove({ id: "powah:crafting/dielectric_rod_h"})
        event.remove({ id: "powah:crafting/dielectric_paste"})
        event.remove({ id: "powah:crafting/dielectric_paste_2"})
    }
)