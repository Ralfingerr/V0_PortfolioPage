# Implementation Plan: Premium Expanding Project Cards

This plan outlines the steps to implement **Option A: The Expanding Card** for projects without external links (like Email and Ad campaigns). This uses `framer-motion` shared element transitions to create a seamless "zoom-in" effect.

## 1. Objectives
- Provide a rich, immersive view for projects that lack a live website.
- Maintain the premium "AI Automation" aesthetic using Glassmorphism.
- Ensure smooth, app-like transitions between the grid and expanded states.

## 2. Technical Strategy
- **Library:** `framer-motion` (already installed).
- **Core Feature:** `layoutId` for shared element transitions.
- **State Management:** Local state in `BentoGrid` to track the `expandedProject`.

## 3. Step-by-Step Implementation

### Step 1: Update BentoGrid State
- In `components/bento-grid.tsx`, introduce a state to track which project is currently expanded.
- Add a "Close" function to reset this state.

### Step 2: Implement Shared Layout IDs
- Assign unique `layoutId` props to the elements that should "travel" during the transition:
  - The Card background/container.
  - The Project Image.
  - The Project Title.
- Wrap the grid items in `framer-motion` components.

### Step 3: Create the Expanded Overlay
- Create a new component (or an internal one in `bento-grid.tsx`) called `ExpandedProjectView`.
- This component will be wrapped in `<AnimatePresence>` to handle entry/exit animations.
- It will feature:
  - A fixed, full-screen glassmorphic backdrop.
  - A centered, large-format card with detailed content.
  - A "Close" button in the top-right corner.

### Step 4: Content Structure for Expanded View
The expanded view should accommodate:
- **Hero Image:** A high-resolution version of the project thumbnail.
- **Project Overview:** A detailed description of the AI logic or campaign strategy.
- **Metric Cards:** 2-3 small glassmorphic boxes showing results (e.g., "35% Open Rate").
- **Image Gallery:** A scrollable or grid-based display of the actual email/ad assets.
- **Tech Stack:** A row of badges indicating tools used.

### Step 5: Interaction Polish
- Close the expanded view on `Esc` key press.
- Close on backdrop click.
- Prevent background scrolling when a card is expanded.

## 4. Design Guidelines
- **Backdrop:** `backdrop-blur-xl bg-black/40`
- **Transitions:** Use `spring` transitions (`stiffness: 300, damping: 30`) for a snappy yet smooth feel.
- **Typography:** Use the established "Outfit" or "Inter" fonts with high contrast for readability.

## 5. Verification Tasks
- [ ] Verify transition smoothness on high-refresh-rate displays.
- [ ] Test accessibility (focus management and keyboard close).
- [ ] Ensure responsiveness on mobile (expanded view should be full-width/height).
- [ ] Validate that external links still work for projects that *do* have websites.
