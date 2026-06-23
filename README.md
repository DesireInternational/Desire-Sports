# 📺 Desire Sports — Free Live Sports IPTV

A clean, fast sports TV app that loads channels from public M3U playlists.

## 🚀 GitHub Pages Deploy (3 Steps)

1. **Create a new GitHub repository** (e.g. `desire-sports`)
2. **Upload all files** keeping the folder structure:
   ```
   index.html
   css/style.css
   js/app.js
   README.md
   ```
3. **Enable GitHub Pages:**
   - Go to repo → Settings → Pages
   - Source: **Deploy from a branch** → `main` → `/ (root)`
   - Save → Your app is live at: `https://YOUR_USERNAME.github.io/desire-sports`

## 📺 How It Works

- Loads sports channels from 16 public M3U/M3U8 sources
- Filters only sports channels automatically
- Plays HLS streams directly in browser using HLS.js
- If a stream can't play in browser → shows VLC / MX Player links with the stream URL

## ▶️ Playing Channels That Don't Work in Browser

Some channels are geo-restricted or DRM-protected. To watch them:

| App | How |
|-----|-----|
| **VLC** (PC/Mac) | Click "Open in VLC" button |
| **VLC Mobile** | Click "Open in VLC" on phone |
| **MX Player** (Android) | Click "MX Player" button |
| **IPTV Smarters** | Copy URL → paste in app |
| **TiviMate** | Copy URL → paste in app |
| **Kodi** | Add as IPTV source |

## 🛠️ Customize

To add more M3U sources, edit `js/app.js` and add to the `SOURCES` array:
```js
{ url: 'https://your-m3u-link.m3u8', label: 'My Source', region: 'global' },
```

## 📌 Notes

- All streams are from public, freely available IPTV playlists
- Channel availability varies by region and time
- No server required — pure static HTML/CSS/JS
