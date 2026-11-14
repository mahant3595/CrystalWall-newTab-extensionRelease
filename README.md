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

## What's in it

- **Clock and greeting** — the greeting, headline and sub-line are all editable text.
- **Search** — Google suggestions while you type; `Esc` leaves the box.
- **Quick links** — add, rename, reorder and recolour the sites you use most.
- **Wallpapers** — pick a bundled one, or use your own image or video.
- **Themes** — several built-in palettes, plus a custom theme with a colour picker for background, text and accent.
- **Widgets** — clock, weather, focus timer, quotes and music can be dragged and resized; right-click one for its menu.
- **Focus timer** — work and break sessions with a ring that fills as time passes.
- **Weather** — current conditions for a location you choose.
- **Music** — add your own audio files, then play, loop and set the volume.
- **Zen view** — hides everything except the clock, wallpaper and the widgets you choose to keep. The eye button brings it back, and so does `Esc`.

## Permissions, and why

- **New tab override** — the dashboard replaces the new-tab page.
- **Access to http/https pages** — a wallpaper or video can come from any address you paste in.
- **`suggestqueries.google.com`** — search suggestions while you type.
- **`api.open-meteo.com`** — the weather widget (no API key needed).
- **Clipboard and active tab** — used only when you copy or paste a link in the app.

## Privacy

Everything you configure — shortcuts, wallpaper, theme, widget layout, focus timer, music files — is stored locally by your browser. There is no account, no server of ours, and no analytics. The only network requests are the ones the features need: Google's suggestion endpoint, Open-Meteo for weather, and whatever address serves a wallpaper or video you chose.

## License

Apache License 2.0 — see the `LICENSE` file in this folder.

The JavaScript in this folder is a compiled build, minified and obfuscated rather than readable source. It is a copy of the extension for personal use, not the project source.
