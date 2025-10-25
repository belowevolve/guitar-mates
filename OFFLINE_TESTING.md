# Testing Offline Functionality

This guide will help you test the offline capabilities of Guitar Mates PWA.

## Prerequisites

1. Build the app in production mode:

```bash
pnpm build
pnpm start
```

2. The service worker is disabled in development mode, so you must test in production.

## Testing Steps

### 1. Initial Load (Online)

1. Open the app in your browser: `http://localhost:3000`
2. Open DevTools (F12) → Application tab → Service Workers
3. Verify the service worker is registered and activated
4. Check "Offline" checkbox in DevTools Network tab to simulate offline mode

### 2. Create Songs While Online

1. Go to "Create Song" page
2. Add a song with title and lyrics (e.g., with chords like `[Am]`, `[C]`)
3. Save the song
4. Create 2-3 more songs to test list view
5. View individual songs by clicking on them

### 3. Test Offline Mode

#### A. Simulate Offline in DevTools

1. Open DevTools → Network tab
2. Check "Offline" checkbox
3. Reload the page
4. The app should load from cache
5. You should see a yellow banner: "You're offline - Changes saved locally"

#### B. Test All Features Offline

With offline mode enabled:

- ✅ **Home Page** - Should display all your saved songs
- ✅ **View Song** - Click on any song to view it with chords
- ✅ **Create Song** - Navigate to /create and add a new song
- ✅ **Delete Song** - Delete a song from the list
- ✅ **Navigation** - All links should work
- ✅ **Chord Diagrams** - Should display correctly

#### C. Test Data Persistence

1. While offline, create a new song
2. Close the browser tab
3. Reopen the app (still offline)
4. Verify the new song appears in the list

#### D. Test Online Reconnection

1. Uncheck "Offline" in DevTools
2. The yellow banner should disappear
3. Refresh the page
4. All songs should still be present

### 4. Test PWA Installation

#### Desktop (Chrome/Edge)

1. Open the app
2. Look for the "Install" icon in the address bar
3. Click to install
4. Launch the installed app
5. Test offline by disconnecting Wi-Fi

#### Mobile (iOS Safari)

1. Open the app in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Name the app and tap "Add"
5. Open from home screen
6. Test offline by enabling Airplane Mode

#### Mobile (Android Chrome)

1. Open the app in Chrome
2. Tap the three dots menu
3. Tap "Install app" or "Add to Home Screen"
4. Follow prompts to install
5. Open from app drawer
6. Test offline by enabling Airplane Mode

### 5. Test Cache Management

In DevTools → Application → Cache Storage, you should see:

- `app-pages` - Contains /, /create, /settings, and dynamic /song/:id routes
- `pages-rsc` - React Server Component requests
- `pages-rsc-prefetch` - Prefetched pages
- `static-assets` - JS, CSS, fonts
- `static-images` - Images and icons
- `workbox-precache-*` - Precached resources

### 6. Test Edge Cases

- **Deep Links** - Open a direct link to a song while offline
- **Browser Restart** - Close and reopen browser, verify data persists
- **Multiple Tabs** - Open multiple tabs, verify sync across tabs
- **Long Offline Period** - Stay offline for extended time, verify app still works
- **Cache Expiration** - Wait past cache expiration (7 days for pages), verify fallback works

## Expected Behavior

### Online

- App fetches latest updates from network
- Service worker updates cache in background
- No offline indicator visible

### Offline

- App loads from cache instantly
- Yellow offline indicator appears
- All CRUD operations work
- Data persists in localStorage
- Chord diagrams render from cached assets

### Going Online After Being Offline

- Offline indicator disappears
- Service worker updates cache
- No data loss
- Seamless transition

## Troubleshooting

### Service Worker Not Registering

1. Check console for errors
2. Verify you're running production build
3. Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
4. Clear site data and reload

### Cache Not Working

1. Check Application → Service Workers → ensure active
2. Verify cache storage has entries
3. Check Network tab for "(from ServiceWorker)" labels
4. Try unregistering and re-registering service worker

### Data Not Persisting

1. Check localStorage in DevTools → Application → Local Storage
2. Verify "songs" key exists with data
3. Ensure browser isn't in incognito/private mode
4. Check if localStorage is enabled in browser settings

### Offline Indicator Not Showing

1. Verify network connection status in DevTools
2. Check console for errors in OfflineIndicator component
3. Ensure JavaScript is enabled

## Performance Metrics

Test with DevTools → Lighthouse:

- **Performance** - Should be 90+
- **PWA** - Should pass all PWA checks
- **Accessibility** - Should be 90+
- **Best Practices** - Should be 90+

## Browser Compatibility

Tested on:

- ✅ Chrome/Edge 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 8+)

## Notes

- localStorage has ~5-10MB limit per origin
- Service worker cache has ~50MB limit (varies by browser)
- Cached pages expire after 7 days without access
- Static assets cached for 30 days
- All strategies use "last-used" for expiration
