# Guitar Mates 🎸

A Progressive Web App (PWA) for saving and sharing your guitar chords with lyrics. Works completely offline!

## Features

- 🎵 **Create Songs** - Add your songs with lyrics and chord notations
- 🎸 **Chord Diagrams** - Automatic chord diagram display for guitar chords
- 💾 **Local Storage** - All your songs are saved locally in your browser
- 📱 **Progressive Web App** - Install on your device and use like a native app
- 🌐 **Offline Support** - Full offline functionality powered by Serwist
- 🎨 **Dark/Light Theme** - Automatic theme switching
- 📋 **Responsive Design** - Works on mobile, tablet, and desktop

## Offline Capabilities

This app is a **full-featured PWA** that works completely offline:

- ✅ **View all songs** - Access your entire song library offline
- ✅ **Create new songs** - Add songs even without internet connection
- ✅ **Edit songs** - Make changes to existing songs offline
- ✅ **Delete songs** - Remove songs from your library offline
- ✅ **View chord diagrams** - All chord visualizations work offline
- ✅ **Automatic sync** - Changes are stored locally and persist across sessions

### How it Works

1. **localStorage** - Songs are stored in your browser's localStorage
2. **Service Worker** - Serwist caches all app pages and assets
3. **Network-First Strategy** - Tries to fetch updates when online, falls back to cache when offline
4. **Precaching** - Essential pages (/, /create, /settings) are precached on install

### Caching Strategy

- **App Pages** (`/`, `/create`, `/settings`, `/song/:id`) - Network-first with 7-day cache fallback
- **Static Assets** (JS, CSS, fonts) - Cache-first with 30-day expiration
- **Images** - Cache-first with 30-day expiration
- **RSC Requests** - Stale-while-revalidate with 24-hour cache

## Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Install as PWA

1. Open the app in your browser
2. Look for the "Install" or "Add to Home Screen" option
3. Follow the prompts to install
4. Launch from your home screen or app drawer

## Chord Notation

Use square brackets to add chord notations:

```
[Verse 1]
[Am]This is where the [C]lyrics go
With [G]chords above the [F]words

[Chorus]
[C]Sing along with [G]me
[Am]Together we'll [F]be free
```

- **Chord notations** like `[Am]`, `[C]`, `[G]` will display chord diagrams
- **Section labels** like `[Verse 1]`, `[Chorus]` will appear as bold text

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Serwist** - Service worker and PWA functionality
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## License

MIT
