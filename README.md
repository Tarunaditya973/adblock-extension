# Ad Blocker (local Chrome extension)

A small Manifest V3 extension for personal use. For my own browser only.

## What it does

**Gogoanime** (`gogoanime.or.at`, `gogoanime.me.uk`, `megaplay.buzz`)
- `rules.json`: blocks network requests to `llvpn.com`, the click-hijack ad tag.
- `guard.js`: backup that disables `window.open` and cancels hidden external `_blank` links.
- `hide.css`: spot to hide leftover ad boxes.

**YouTube** (`www.youtube.com`)
- `yt.css`: hides ad slots (banners, feed ads, promos).
- `yt.js`: while a video ad plays, mutes it, jumps to the end and clicks Skip.
- Selectors change when YouTube updates its page; fix them in `yt.css` / `yt.js`.
- Using this goes against YouTube's Terms of Service; the risk is on your account.

## Install

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and pick this folder.
3. After editing a file, click the reload arrow on the extension card and reload the tab.
