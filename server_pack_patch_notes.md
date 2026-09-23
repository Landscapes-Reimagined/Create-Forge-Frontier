# **Forge Frontier v3.1.5 Server Pack**

## **Important Notice**

This server pack is intended for **Forge Frontier v3.1.5**.

**Existing v3.0.0 and later worlds are fully compatible with v3.1.5.** A new world is **not required** when updating from **v3.0.0 or any later release**.

#### **⚠️ Updating from before v3.0.0?**

If you're updating from **any version prior to v3.0.0**, you **must** create a new world due to the extensive progression, world generation, storage, recipe, and gameplay changes introduced in *The Final Frontier*.

Before updating, we strongly recommend reviewing:

- **[v3.0.0 Highlights](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.0.0_Highlights.md)**
- **[v3.0.0 Changelog](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.0.0_Changelog.md)**

These documents cover the major systems and progression changes introduced in Version **3.0.0** and will help ensure a smooth transition to the latest release.

---

## **Introduction**

Forge Frontier **v3.1.5** is a maintenance, performance, and stability update focused on refining the technical foundation of the modpack following continued testing of the Version **3.1.x** release cycle.

This release streamlines the modpack's optimization stack by removing several redundant, unused, or ineffective performance and utility mods while introducing new solutions better suited to the pack's current server environment. Numerous existing mods have also been updated to improve compatibility and long-term maintainability.

A major change in this release is the replacement of **Create Power Loader** with **Chunk Loaders**, providing more manageable chunk-loading behavior and the ability to automatically disable chunk loading when players are inactive.

Additional server-side adjustments include updated ServerCore distance settings, revised mob spawning configurations, new Create-based Chunk Loader recipes, and further KubeJS refinements.

No major progression or world generation changes are introduced in this release, allowing existing Version **3.0.0 and later** worlds to continue without requiring a reset.

---

## **What's Included**

- Complete server files for **Forge Frontier v3.1.5**
- Streamlined server optimization and performance stack
- New and updated performance-focused mods
- Replacement of Create Power Loader with Chunk Loaders
- New Create-based Chunk Loader crafting progression
- Updated ServerCore performance settings
- Revised mob spawning configurations
- KubeJS recipe and registry improvements
- Numerous mod and compatibility updates
- Full compatibility with existing **v3.0.0 and later worlds**
- No world reset required

---

## **Maintenance Highlights**

Version **3.1.5** continues refining server stability and long-session performance by simplifying the pack's optimization stack and removing components that provided little measurable benefit during testing.

- **Create Power Loader** has been removed and replaced with **Chunk Loaders**, providing more manageable chunk-loading behavior and automatic inactivity handling.
- **C2ME Forge** has been added to improve chunk generation and loading performance through multithreaded processing.
- Several redundant, unused, or ineffective performance and utility mods have been removed following continued testing.
- **All The Leaks** remains the primary tool for memory leak diagnostics, allowing redundant diagnostic utilities to be removed.
- **ServerCore** maximum distance settings have been reduced to further improve overall server performance.
- Natural spawning for **Murmurs**, **Cave Centipedes**, and **Glares** has been disabled.
- New Mechanical Crafting and Sequenced Assembly recipes integrate the replacement Chunk Loaders into the pack's Create-focused progression.
- Dirty Dust processing for **Calorite**, **Ostrum**, **Stellaris**, and **Uraniumnite** has been updated.
- Numerous mods and supporting libraries have been updated for improved compatibility, stability, and maintainability.

The major features and progression introduced throughout *The Final Frontier* remain unchanged.

For the major changes introduced in Version 3.1.0, see:

- **[v3.1.0 Highlights](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.1.0_Highlights.md)**
- **[v3.1.0 Changelog](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.1.0_Changelog.md)**
- **[v3.1.0 Mod Updates](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.1.0_Mod_Updates.md)**

For the complete details of Version 3.1.5, see:

- **[v3.1.5 Highlights](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.1.5_Highlights.md)**
- **[v3.1.5 Changelog](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.1.5_Changelog.md)**
- **[v3.1.5 Mod Updates](https://github.com/Landscapes-Reimagined/Create-Forge-Frontier/blob/main/changelogs/3.1.5_Mod_Updates.md)**

---

## **Server Improvements**

Version **3.1.5** continues the server optimization work of previous releases with a greater focus on simplifying the number of overlapping performance modifications and retaining only components that provide a meaningful benefit to the pack.

The replacement of Create Power Loader with Chunk Loaders provides greater control over persistent chunk loading, particularly during periods of player inactivity. Combined with the addition of C2ME Forge, adjusted ServerCore distance settings, updated mob spawning rules, and the removal of several unnecessary optimization mods, these changes are intended to reduce unnecessary server overhead and improve performance during extended uptime.

Server administrators updating an existing Version **3.0.0 or later** world can continue using their current world without a reset.

No major world generation or progression changes are included in this release.

---

## **Need Help?**

If you have questions about server installation, configuration, progression, or gameplay, join the official **Landscapes Reimagined Discord**:

[https://discord.gg/quenZthXgy](https://discord.gg/quenZthXgy)

---

> **Forge Frontier v3.1.5** continues refining *The Final Frontier* through a streamlined optimization stack, improved chunk-loading management, server performance tuning, and compatibility updates while preserving the progression and multiplayer experience established throughout Version **3.0.0 and later**.

---

## **Looking for Hassle-Free Hosting?**

Deploy your **Forge Frontier** server instantly with our official hosting partner, **BisectHosting**.

[![BisectHosting Code](https://raw.githubusercontent.com/Landscapes-Reimagined/Create-Forge-Frontier/refs/heads/main/curseforge_banners/CREATE_FORGE_FRONTIER_Promo.webp)](https://bisecthosting.com/M0nkeyPr0grammer?r=curseforge+changelog)