# Jan Seva — Citizen Services Portal

React + Vite rebuild of the original single-file HTML prototype
(`jan_seva_citizen_portal_v6.html`). Same look, same data, same
behaviour — just split into a real component structure so it's easy
to keep extending with Claude Code.

## Run it

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

## Structure

```
src/
  data/
    translations.js   # T — en/hi/gu UI strings
    services.js        # SERVICES — ration card, birth cert, land record, pension
    offices.js          # OFFICES — sample Ahmedabad-area office locations
    icons.js             # ICONS + ICON_ALIAS — raw SVG path data
  utils/
    docPreview.js       # generates the illustrative document-mockup images
    botReply.js          # keyword matching for the "Ask AI" tab (same as before —
                            not a real LLM, just canned replies from the service data)
  components/
    Icon.jsx             # renders an icon from data/icons.js
    TopBar.jsx            # tricolor strip + govt bar + header + language switcher
    BottomNav.jsx          # Home / Ask AI / Offices tab bar
  screens/
    HomeScreen.jsx         # search, category filter, service list
    ServiceDetailScreen.jsx # eligibility, personalize checklist, documents, steps
    ChatScreen.jsx           # Ask AI chat, incl. mic button (Web Speech API)
    OfficesScreen.jsx         # geolocation + Leaflet map + office list
  App.jsx                    # owns all state, routes between screens
```

## What changed vs. the original file

- All state (`state = {...}` in the old `<script>`) is now `useState`
  in `App.jsx`, passed down as props — no more manual `innerHTML`
  re-rendering.
- Icons (Tabler-style `<i class="ti ti-...">`) are now a proper
  `<Icon>` React component using the same inline SVG path data,
  instead of a `MutationObserver` that swapped them in after the fact.
- Leaflet is imported as an npm package (`leaflet` + its CSS) instead
  of a `<script>`/`<link>` tag from a CDN.
- Content (service data, translations, office list) is unchanged —
  copied verbatim into `src/data/`.

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
