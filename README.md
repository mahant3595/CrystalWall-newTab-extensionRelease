# Crystal Wall

A calm new-tab dashboard: your own wallpaper, a big clock, search, quick links, a focus timer, the weather and a small music player — with themes that stay out of the way.

Version 1.3.0 · Chrome / Edge (Manifest V3)

## Install

This folder is the extension itself, so the browser can load it directly. There is no installer and no store listing.

1. Open `chrome://extensions` (or `edge://extensions`).
2. Turn on **Developer mode** — the switch in the top-right corner.
3. Click **Load unpacked** and select this folder (the one containing `manifest.json`).
4. Open a new tab.

Keep the folder where it is: the browser reads it every time a tab opens, so moving or deleting it disables the extension. Chrome 137 and later refuses to install extensions from the command line, so those four clicks are the only route.

## Updating

Replace the files in this folder with the newer version, then press the reload arrow on the Crystal Wall card in `chrome://extensions`. Your settings, shortcuts and music live in the browser's own extension storage, not in these files, so they survive the swap.

If you are moving to a different profile, a new browser, or a fresh extension ID, export a backup first (Settings → Backup → **Export everything**) and import it there afterwards.

## What's in it

- **Clock and greeting** — the greeting, headline and sub-line are all editable text.
- **Quotes** — Settings → Quotes edits the greeting, headline and sub-line, and keeps a list of your own quotes: add a line and an author, and each new tab shows one of them at random instead of the headline.
- **Search** — Google suggestions while you type; `Esc` leaves the box.
- **Quick links** — add, rename, reorder and recolour the sites you use most.
- **Wallpapers** — pick a bundled one, or use your own image or video.
- **Themes** — several built-in palettes, plus a custom theme with a colour picker for background, text and accent. The theme editor's widget colour also tints every widget with a glass surface, the notes pad included, and each of those widgets can take a colour of its own from its dropdown in Settings → Widgets. The editor previews as you drag and the **Apply** button at the top right of the editor commits the changes (activating the theme if you were customizing one you were not using); its widget transparency and blur fade and blur the glass without touching the lettering.
- **Widgets** — clock, weather, focus timer, quotes and music can be dragged and resized; right-click one for its menu. The quick access bar is yours as well: open its triangle in Settings → Widgets to set **how many links show**, drag **Tile size** anywhere from 72 to 160 pixels (the squares grow and shrink in both directions together), and edit the sites themselves — rename a preset, paste any address, remove the ones you never use, or add your own with **Add a website**. Each tile shows the site's real icon, fetched from the site itself and falling back to the preset symbol or the site's initial when the site has none. Icons are kept in a local cache, so a new tab paints the bar instantly and still shows them when you are offline. If you want a different picture, click the small image beside a site's name and choose one from your computer; **Clear icon** puts the site's own icon back. If a site changes its icon and the bar keeps showing the old one, press **Clear icon cache** at the foot of the list to forget the downloads and fetch them again; pictures you chose yourself are left alone. Under each site the list says where its icon came from and how long ago it was fetched, with a **Refresh** button that re-fetches just that one. Drag the hand at the start of a row to put your sites in the order you want, or focus that hand and use the arrow keys; the bar follows immediately.
- **Focus timer** — work and break sessions with a ring that fills as time passes.
- **Weather** — current conditions for a location you choose.
- **Music** — add your own audio files, then play, loop and set the volume.
- **Notes** — a small pad for a thought or a to-do list. Like every widget it can be moved, resized, faded or hidden, and you choose whether it stays in Zen view. It stays off until you switch it on in Settings → Widgets.
- **Keyboard shortcuts** — `Ctrl/Cmd+K` opens the command palette and `/` focuses search, `Alt+Z` toggles Zen view, and the arrow keys move between quick links once one has focus. Settings → Shortcuts shows the full list, and lets you record a combination of your own for twenty actions: search, Zen view, settings, opening any settings panel, showing or hiding the clock, weather card, quick links, timer or notes pad, the focus timer, ambient sound, and the °C/°F and 12h/24h switches. The action list is grouped and keyboard-friendly, and any saved shortcut can be edited in place — re-record its keys or pick a different action, then press Save. Combinations Chrome already uses, such as Ctrl+T or Ctrl+W, are refused with a warning.
- **Zen view** — hides everything except the clock, wallpaper and the widgets you choose to keep. The eye button brings it back, and so does `Esc`.
- **Backup** — Settings → Backup saves every setting, shortcut, theme, wallpaper, photo and music track into one file, so you can move your new tab to another profile or get it back after reinstalling. Import it from the same panel; it replaces what is there now and reloads the page. The Backup panel also shows when you last exported, and reminds you if it has been over a month. To move everything to another Chrome profile without any account, use **Folder sync**: choose a folder and press **Sync push** to write your settings there, then choose the same folder in the other profile and press **Sync pull** to take them. Both buttons merge rather than copy: a setting you changed here and a different setting changed in the other profile both survive, so neither profile wipes the other's work. If you both change the same setting, the more recent change wins. Tick **Auto sync** in both profiles and you can stop pressing anything: while a new tab is open, changes merge with the folder in both directions within a few seconds. The two buttons stay for the times you want to settle a tie in one direction on purpose.  The file is named after what it holds (for example `crystal-wall-backup-2026-11-14_13-settings_3-wallpapers_1-track.json`), so several backups stay easy to tell apart. Untick **Include wallpapers, photos and music** if you only want the settings — your images and audio stay out of the file, and the imported tab falls back to the bundled wallpaper and music. If you delete a wallpaper, photo widget, music track or theme by mistake, or import a backup and change your mind, the Backup panel offers **Undo last change** for one step, naming what it would restore; it also covers a manual **Sync push** or **Sync pull** merge that replaced local settings. Undo reloads the page, and each new change replaces the step before it, so it is always just the last one.

## Permissions, and why

- **New tab override** — the dashboard replaces the new-tab page.
- **Access to http/https pages** — a wallpaper or video can come from any address you paste in.
- **`suggestqueries.google.com`** — search suggestions while you type.
- **`api.open-meteo.com`** — the weather widget (no API key needed).
- **Clipboard and active tab** — used only when you copy or paste a link in the app.

## Privacy

Everything you configure — shortcuts, wallpaper, theme, widget layout, focus timer, music files — is stored locally by your browser. There is no account, no server of ours, and no analytics. The only network requests are the ones the features need: Google's suggestion endpoint, Open-Meteo for weather, and whatever address serves a wallpaper or video you chose.

## License

Crystal Wall is proprietary software: © 2026 Crystal Wall, all rights reserved. You may install
and use this copy unmodified for as long as you like. You may not modify it, copy it into another
project, redistribute it or sell it. The full terms are in the `LICENSE` file in this folder.

The JavaScript in this folder is a compiled build, minified and obfuscated rather than readable
source. It is a copy of the extension for personal use, not the project source.
