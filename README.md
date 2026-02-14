# Squarespace Roadmap Block

A visual roadmap block for Squarespace websites. Features a horizontal timeline overview with detailed milestone cards below, an overall progress bar, and clean responsive styling.

## Project Structure

```
FFN/
├── docs/                  ← Served by GitHub Pages
│   ├── roadmap.css        ← Styles
│   └── roadmap.js         ← Config + rendering logic (edit this to update milestones)
├── loader.html            ← Tiny snippet to paste into Squarespace (one time)
├── roadmap-block.html     ← Self-contained version (for offline/manual use)
└── README.md
```

## Setup (One Time)

### 1. Enable GitHub Pages

1. Go to your repo **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Set branch to **main** and folder to **/docs**
4. Click **Save**

Your files will be served at `https://jt4862.github.io/FFN/`

### 2. Add the Loader to Squarespace

1. Open your Squarespace site editor
2. Navigate to the page where you want the roadmap
3. Click **Add Block** → **Code**
4. Paste the contents of `loader.html`:
   ```html
   <link rel="stylesheet" href="https://jt4862.github.io/FFN/roadmap.css">
   <div class="ffn-roadmap" id="ffn-roadmap"></div>
   <script src="https://jt4862.github.io/FFN/roadmap.js"></script>
   ```
5. Toggle **Display Source** OFF
6. Save and publish

That's it — you never need to touch Squarespace again.

## How to Update Milestones

Edit `docs/roadmap.js` and update the `FFN_ROADMAP_CONFIG` object at the top. Push to `main` and the changes go live automatically.

Each milestone looks like:

```javascript
{
  title: "Foundation",           // Milestone name
  date: "Q1 2025",              // Target or completion date
  status: "completed",          // "completed" | "in-progress" | "upcoming"
  description: "Short summary", // What this milestone covers
  items: [                      // Sub-items / deliverables (optional)
    "Task one",
    "Task two"
  ]
}
```

### Status Options

| Status        | Meaning                        | Visual                           |
|---------------|--------------------------------|----------------------------------|
| `completed`   | Milestone achieved             | Green accent, checkmarks         |
| `in-progress` | Currently being worked on      | Blue accent, pulsing dot         |
| `upcoming`    | Planned for the future         | Gray accent, hollow circles      |

### Common Updates

**Mark a milestone as completed:**
Change `status: "in-progress"` to `status: "completed"`

**Add a new milestone:**
Add a new object to the `milestones` array in the desired position

**Change the roadmap title or subtitle:**
Edit `FFN_ROADMAP_CONFIG.title` and `FFN_ROADMAP_CONFIG.subtitle`

## Features

- Horizontal timeline with animated progress indicator
- Milestone cards in a responsive grid layout
- Click a timeline node to scroll to its card
- Overall progress bar with percentage
- Pulsing animation on in-progress milestones
- Fully responsive (mobile-friendly)
- No external dependencies
- Auto-updates on push via GitHub Pages
