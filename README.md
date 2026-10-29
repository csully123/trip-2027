# Trip 2027

A tiny shared site for three people to pick a Wed to Sun window between April 1 and July 31, 2027, then vote on trip ideas.

No build step. One `index.html`, a Firebase Realtime Database for the shared state, hosted on GitHub Pages.

## How it works

- **Dates tab**: every Sunday to Sunday week in the range is a card. Tap once = free, twice = maybe, three times = clear. Each person's icon shows up on the weeks they marked. Weeks where all three are free turn green and get listed at the top. Each card shows how many events fall in that week.
- **What's on tab**: every event abroad (Europe, Asia, Oceania) in the range, listed under the week it falls in, with a description, golf nearby, pluses and minuses, and how long the trip would need to be. Each person can Like an event; events liked by all three go green. Filters by region, type, weeks everyone is free, and liked-by-anyone. The data lives in `events.js`; edit or add entries there.
- **Trip ideas tab**: add a full trip option (title, week, where, details, link) and everyone votes "I'm in", "Fine either way" or "Pass".
- Likes are stored under the same `votes` path as trip-idea votes (keyed `ev-<event id>`), so no rules change was needed when they were added.
- The site switched from Wed to Sun windows to Sun to Sun on Oct 29, 2026. Marks made under the old windows are migrated automatically the first time anyone opens the site (a Wednesday key moves to the Sunday three days earlier).
- Identity is just a "Who are you?" picker remembered in the browser. No logins; it's three friends.
- Until `firebase-config.js` is filled in, the site runs in local preview mode (saves only in your own browser).

## One-time setup (about 10 minutes)

### 1. Firebase (the shared database)

1. Go to https://console.firebase.google.com and **Add project** (name it anything, e.g. `trip-2027`). Google Analytics can be off.
2. In the left nav: **Build > Realtime Database > Create Database**. Pick the US location, start in **locked mode**.
3. Open the **Rules** tab, replace everything with the contents of `database.rules.json`, change both `CHANGE-ME` values to the password you want (letters, numbers and hyphens only; no spaces or `. # $ [ ] /`), and **Publish**. The password lives only in these rules, never in the repo. The site asks for it once per device and then uses it as part of the database path, so a wrong password is rejected by Firebase itself.
4. Project settings (gear icon) > **Your apps** > click the web icon `</>` > register the app (no hosting needed) > copy the `firebaseConfig` object.
5. Paste it into `firebase-config.js` as `window.FIREBASE_CONFIG = { ... };`. Make sure it includes `databaseURL` (if it doesn't, copy the URL shown at the top of the Realtime Database page and add it as `databaseURL`).

That config is safe to commit; Firebase web configs are not secrets. The rules are what protect the data, and they only allow reads/writes under the `trip2027` path.

### 2. GitHub Pages (the hosting)

1. Create a new repo on GitHub (public, so Pages is free), e.g. `csully123/trip-2027`.
2. Push this folder to it.
3. Repo **Settings > Pages > Source: Deploy from a branch > main / (root)** > Save.
4. In a minute the site is live at `https://csully123.github.io/trip-2027/`. Send that link to TJ and Drew.

## Changing things

Everything configurable is at the top of the `<script>` in `index.html`:

- `TRIP.rangeStart` / `TRIP.rangeEnd`: the date range shown
- `TRIP.startDow` / `TRIP.nights`: 0 and 7 means Sun to Sun; 3 and 4 would be Wed to Sun (changing this orphans existing marks unless you add a migration)
- `events.js`: the event list. Fields: id, t (title), loc, country, region (EU/AS/OC), cat (sport/music/drink/festival/culture), start, end, status (confirmed/annual/tbc), desc, golf, plus[], minus[], len
- `PEOPLE`: names, emoji and colors
- `NOTES`: little labels on specific weekends (holidays, tournaments)

## Reset

To wipe everything and start over, delete the `trip2027` node in the Firebase console (Realtime Database > Data).

To change the password, edit it in the Rules tab and publish. Everyone will be asked for the new one next time they open the site.
