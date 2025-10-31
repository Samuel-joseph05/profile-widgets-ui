# Profile-widgets-ui

A responsive React implementation of a Figma design assignment featuring interactive profile widgets and an image gallery. Built with Tailwind CSS and deployed on Vercel.


---
## 🔗 Live Demo
[View Live Project](https://profile-widgets-ui.vercel.app/)


## Tech Stack
- **Framework:** [React.js](https://Reactjs.org/) 
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Version Control:** Git & GitHub

##  Features & Implementation Details
### Layout
- **Left Half:** Empty (intentionally, per instructions), but responsive on laptop screens.
- **Right Half:** Contains two widgets, aligned according to Figma padding and spacing.

### Widget 1 – About Me / Experiences / Recommended
- Contains **three tabs**: `About Me`, `Experiences`, and `Recommended`.
- Tabs are **fully interactive** — clicking switches displayed content.
- Transitions and spacing mirror Figma preview exactly.

### Widget 2 – Gallery
- Displays a grid of images.
- Includes **“Add Image”** button — users can upload new photos (client-side only).
- Uploaded images render immediately in the gallery.

### Responsiveness
- Fully responsive for **laptop screen widths (≥768px)**.
- Uses CSS Grid and Flexbox for layout consistency.
- Shadows, margins, and paddings match Figma values.

---

## Interactions & Effects
- All hover, active, and focus effects visible in the prototype are implemented.
- Exact shadow and transition timings are replicated from Figma.
- Tabs and gallery updates occur without page reloads.

 ### Installation
1. **Clone the repository**  
   ```bash
   git clone https://github.com/Samuel-joseph05/profile-widgets-ui
   cd profile-widgets-ui
### Install dependencies
 ```bash
npm install
# or
yarn install
```
### Start development server
 ```bash
npm run dev
# or
yarn dev
```

Then open your browser at http://localhost:5713   

### Deployment
    The app is deployed using Vercel.
    To redeploy your own version:
 ```bash
    npm run build
    vercel deploy
```

### Notes
 1.The project replicates the exact Figma design (paddings, shadows, spacing).

2.The left section is intentionally left empty for layout balance.

3.Image uploads are stored client-side (refreshing clears new images).

4.Tested on Chrome and Firefox at common laptop resolutions (1366×768, 1440×900, 1920×1080).