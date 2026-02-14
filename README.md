# Squarespace Roadmap Block

A self-contained, visual roadmap block for Squarespace websites. Features a horizontal timeline overview with detailed milestone cards below, an overall progress bar, and clean responsive styling.

## How to Add to Squarespace

1. Open your Squarespace site editor
2. Navigate to the page where you want the roadmap
3. Click **Add Block** → **Code**
4. Copy the entire contents of `roadmap-block.html` and paste it into the Code Block
5. Toggle the **Display Source** option **OFF**
6. Save and publish

## How to Update Milestones

Open `roadmap-block.html` and find the `CONFIG` object inside the `<script>` tag. Edit the `milestones` array:

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
Edit `CONFIG.title` and `CONFIG.subtitle`

## Features

- Horizontal timeline with animated progress indicator
- Milestone cards in a responsive grid layout
- Click a timeline node to scroll to its card
- Overall progress bar with percentage
- Pulsing animation on in-progress milestones
- Fully responsive (mobile-friendly)
- No external dependencies — entirely self-contained
