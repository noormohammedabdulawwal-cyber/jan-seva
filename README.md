# Jan Seva — Citizen Services Portal

React + Vite rebuild of the original single-file HTML prototype
(`jan_seva_citizen_portal_v6.html`). Same look, same data, same
behaviour — just split into a real component structure so it's easy
to keep extending with Claude Code.

## Run it (frontend)

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint       # oxlint
```

## Run it (backend + database)

The portal has a real Node + Express + MongoDB API in `server/`. Home
and Offices screens load services/offices/news from it (falling back to
bundled static data if it's not running, so the UI never white-screens),
and bookings are stored persistently.

```bash
cd server
cp .env.example .env        # optional; defaults work with zero install
npm install
npm run seed                # populates MongoDB once
npm run dev                 # API on http://localhost:4000
```

MongoDB: set `MONGODB_URI` in `server/.env` to a real Atlas/local URI.
Leave it unset and the server auto-boots an on-disk MongoDB
(`server/.data/db`, gitignored) with zero install. **Never commit real
credentials** — only `.env.example` is tracked; `.env` is gitignored.

In dev, the Vite proxy forwards `/api` → http://localhost:4000, so the
frontend needs no extra config. To run the SPA and API apart, set
`VITE_API_URL` in a frontend `.env`.

## Structure

```
src/
  data/
    translations.js      # T — en/hi/gu UI strings
    services.js          # SERVICES — ration card, birth cert, land record, pension + 6 more
    offices.js           # OFFICES — sample Ahmedabad-area office locations (id o1–o4)
    news.js              # NEWS — rotating "Gujarat service news" banner items
    icons.js             # ICONS + ICON_ALIAS — raw SVG path data
  api/
    client.js            # fetch layer: content (static fallback) + appointment CRUD (no fallback)
  hooks/
    useContent.js        # server-first, static-immediate fallback + status
    useNewsRotation.js   # 30s news cycle that pauses when the tab is hidden
  utils/
    docPreview.js        # generates the illustrative document-mockup images
    botReply.js          # keyword matching for the "Ask AI" tab (same as before —
                            not a real LLM, just canned replies from the service data)
    workingDays.js       # next 10 working days (skips weekends + Gujarat holidays), time slots
  components/
    Icon.jsx             # renders an icon from data/icons.js
    TopBar.jsx           # tricolor strip + govt bar + header + language switcher
    BottomNav.jsx        # Home / Ask AI / My Appointments / Offices tab bar
    NewsBanner.jsx       # dismissible rotating news strip, taps through to a service
  screens/
    HomeScreen.jsx            # search + filter panel + category chips + news banner + service list
    ServiceDetailScreen.jsx   # eligibility, personalize checklist, documents, steps
    ChatScreen.jsx            # Ask AI chat, incl. mic button (Web Speech API)
    OfficesScreen.jsx         # geolocation + Leaflet map + office list (from API)
    AppointmentsScreen.jsx    # book (office → date → slot → confirm) + My Appointments + cancel
  App.jsx              # owns all state, routes between screens
server/
  index.js             # Express app, CORS, /api routes, PORT 4000
  routes.js            # GET services/offices/news (+ :id), appointment CRUD
  models.js            # Service, Office, NewsItem, Appointment (mongoose)
  db.js                # MongoMemoryServer (on-disk) or MONGODB_URI
  seed.js              # idempotent upsert of static data into MongoDB
  .env.example         # PORT, CORS_ORIGIN, optional MONGODB_URI  (committed)
  .gitignore           # node_modules, .data, .env
```

## Feature notes

- **Search + filters**: a Filter button beside search opens a panel
  (fee / processing time / documents required) that combines with the
  category chips, with an active-filter count badge, Clear all, and
  sort (A-Z per active language or fewest documents).
- **Services**: 10 total — the 6 added (income, caste, domicile,
  scholarship, voter, driving) follow the exact same data shape. Fee and
  portal values are marked *illustrative*, not official.
- **News banner**: rotates every 30s, pauses while the tab is hidden,
  has manual prev/next and a dismiss button, and taps through to the
  related service (`src/data/news.js`).
- **Appointments**: from a service's detail screen, book an office,
  one of the next 10 working days, and a 30-min slot; a confirmation
  shows the reference number and the documents to bring. "My
  Appointments" tab lists them with Cancel. All via the API, keyed by a
  random `deviceId` in localStorage — no login.

## What changed vs. the original file

- All state (`state = {...}` in the old `<script>`) is now `useState`
  in `App.jsx`, passed down as props — no more manual `innerHTML`
  re-rendering.
- Icons (Tabler-style `<i class="ti ti-...">`) are now a proper
  `<Icon>` React component using the same inline SVG path data,
  instead of a `MutationObserver` that swapped them in after the fact.
- Leaflet is imported as an npm package (`leaflet` + its CSS) instead
  of a `<script>`/`<link>` tag from a CDN.
- Content (service data, translations, office list) originally copied
  verbatim into `src/data/`; services/offices/news now also come from
  the API when the backend is up.

## Adding your own document photos

Same idea as before: open `src/data/services.js`, find the document
object you want, and add a `photo` field:

```js
photo: "/images/aadhar-sample.jpg"   // a file you add under public/images/
// or
photo: "https://your-image-link.jpg"
```

If `photo` isn't set, an illustrative mockup is generated automatically
based on `previewType` (see `src/utils/docPreview.js`).

## Known gaps carried over from the prototype

- The "Ask AI" tab is keyword matching against the service data, not
  a real AI assistant.
- Voice input relies on the browser's Web Speech API (Chrome-based
  browsers only).
- Office locations in `src/data/offices.js` are placeholder/sample
  data, not a live directory.
- Service fee and processing-time figures are illustrative; verify
  against the official portal before using in production.
- Appointment slots are mocked (a deterministic subset is pre-booked),
  and the working-day list carries a small static Gujarat holiday set.