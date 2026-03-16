# Advent Calendar 2020

An interactive 3D advent calendar built with React and Three.js. Each of the 25 doors can be opened to reveal a daily music recommendation, and progress is saved between visits using browser cookies.

![advent calendar demo](./images/advent_calendar_recording.gif)

## Features

- 3D cardboard calendar rendered with Three.js and WebGL
- 25 openable doors, each hiding a music video on the A-side and a bonus recommendation on the B-side
- Doors are date-locked — trying to open a future door shows a countdown
- Confetti explosion and cheer sound when a door is opened
- Falling snow particle effect
- Door state persisted across sessions via browser cookies
- Settings panel to reset all doors or unlock them ahead of schedule

## Tech Stack

| Concern | Library |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 5 |
| 3D rendering | Three.js 0.170 |
| Camera controls | Three.js OrbitControls |
| Tweening / animation | @tweenjs/tween.js 21 |
| Geometry computation | Delaunator |
| UI components | React Bootstrap 2 / Bootstrap 5 |
| Testing | Vitest + Testing Library |

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
```

```bash
npm run build      # production build
npm run preview    # preview the production build locally
```

```bash
npm test           # run tests in watch mode
npm run test:run   # run tests once (CI)
```

## Project Structure

```
src/
├── App.js                        # Root component — cookie state, modal coordination
├── components/
│   ├── Calendar3D.js             # Three.js scene, camera, doors, input handling
│   ├── MeshCreation.js           # Geometry builders for every calendar part
│   ├── SnowEffect.js             # 5 000-particle falling snow effect
│   ├── explosionConfetti.js      # Confetti burst on door open
│   ├── ContentModal.js           # A-side / B-side content modal
│   ├── BadDoorModal.js           # "Not yet!" modal for future doors
│   ├── SettingsModal.js          # Reset / unlock / welcome modal
│   ├── titleContents.js          # Title panel content for each door (day number)
│   ├── sideAContents.js          # A-side content (Christmas music videos)
│   └── sideBContents.js          # B-side content (bonus music recommendations)
└── assets/
    ├── images/
    │   ├── advent_background.png      # Calendar front face texture
    │   ├── advent_background_rear.png # Calendar inside face texture
    │   ├── cardboard_back.jpg         # Back panel texture
    │   ├── advent_side_*.png          # Four side panel textures
    │   ├── numbers/1.png … 25.png     # Door number images
    │   └── tokens/day1.png … day25.png# Token images revealed inside each door
    └── sounds/
        ├── 0000389.mp3   # Door creak sound
        ├── cheering.mp3  # Celebration cheer
        └── test*.mp3     # Additional door interaction sounds
```

## Component Overview

### `Calendar3D.js`

The core of the app. Creates and manages the Three.js scene inside a `useEffect`, including:
- A `WebGLRenderer` targeting a `<canvas>` element
- `PerspectiveCamera` with `OrbitControls` (drag to orbit, scroll to zoom, arrow keys to pan)
- The full 3D calendar geometry loaded from `MeshCreation.js`
- Raycasting for door click detection
- `TWEEN.js` animations for door-open and door-close sequences
- Confetti and audio triggered on door open
- A `forwardRef` / `useImperativeHandle` API so `App.js` can call `pauseAnimation()` and `playAnimation()` imperatively

### `MeshCreation.js`

Pure geometry and material builders. Exports one function per calendar part:

| Export | What it creates |
|---|---|
| `createAdventFrontPanel` | The main front face with the background texture |
| `createDoor` | A single hinged door (number + token inside) |
| `createDoorOutline` | The highlight ring around each door |
| `createSidePanelLeft/Right/Top/Bottom` | The four side faces |
| `createBackPanel` | The rear cardboard face |
| `createInsideToken` | The token sprite visible when a door is open |

Contains compatibility shims (`LegacyGeometry`, `Face3`, `legacyToBuffer`) that translate the original Three.js r122 geometry API to the `BufferGeometry` API required by r133+.

### `SnowEffect.js`

Creates a `THREE.Points` object with 5 000 snowflake sprites. Each frame, `updateSnowEffectParticles()` shifts every particle downward and applies a sinusoidal horizontal drift. Particles wrap around when they fall below the scene floor.

### `explosionConfetti.js`

A `THREE.Object3D` subclass. On construction it spawns 150 flat plane meshes in red, gold, and green, each with a random velocity and spin. `update()` advances physics each frame; particles that fall below the kill-plane are disposed and removed.

### Modals

All three modals (`ContentModal`, `BadDoorModal`, `SettingsModal`) are functional components wrapped in `forwardRef` with a `useImperativeHandle` handle so `Calendar3D` can open them imperatively without prop drilling.

## Cookie Storage

Opened-door state is stored in a single cookie named `advent2020_open_doors` as a JSON array of 25 booleans (index 0 = door 1). The cookie expires after 30 days.

## Notes

- `THREE.ColorManagement.enabled` is set to `false` and `renderer.outputColorSpace` is set to `THREE.LinearSRGBColorSpace` to preserve the original r122 colour palette. Three.js r152+ changed both defaults, which caused textures to appear washed out.
- All `.js` files are treated as JSX by a custom Vite plugin, matching the original Create React App behaviour.
