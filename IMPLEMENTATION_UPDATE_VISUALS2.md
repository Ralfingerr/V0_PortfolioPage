# Implementation Plan: Advanced Visuals & Lead Magnets (IMPLEMENTATION_UPDATE_VISUALS2)

This document outlines the Phase 2 strategy for elevating the portfolio from "premium" to "world-class" through depth, interaction, and data-driven engagement.

## 1. Visual Depth & Atmosphere
- **Goal**: Create a multi-layered, organic feel.
- **Actions**:
    - [ ] **Background Glows**: Add 2-3 large, low-opacity radial gradients (`primary` and `secondary` colors) with slow `framer-motion` drift animations.
    - [ ] **Noise Overlay**: Implement a global CSS pseudo-element with a subtle grain texture (2-3% opacity) to add tactile depth.

## 2. Refined Typography & Entry Animations
- **Goal**: Improve readability and add "premium" scroll-entry effects.
- **Actions**:
    - [ ] **Typography Audit**: Refine `letter-spacing` (tighten H1/H2) and `line-height` across all body segments.
    - [ ] **Staggered Text Reveal**: Update section headers to use staggered character/word fade-in animations on scroll.

## 3. Micro-Interactions
- **Goal**: Make the interface feel "alive" and reactive.
- **Actions**:
    - [ ] **Magnetic CTAs**: Implement a "magnetic" effect on `BookCallButton` where the button moves slightly towards the cursor within a 50px radius.
    - [ ] **Standard Cursor**: Remove the `CustomCursor` component and revert to the system pointer for a cleaner, native feel.

## 4. Interactive Lead Magnets & Authority
- **Goal**: Convert passive visitors into active leads.
- **Actions**:
    - [ ] **ROI Calculator**: Create a "Revenue Architect" module with sliders for "Current Revenue" and "Projected Growth" to show potential outcome.
    - [ ] **Project Side-Panel (Slide-over)**: Instead of external links ONLY, allow users to click projects to see a "deep dive" side-panel with metrics and strategy dots.

## 5. Trust & Availability Signals
- **Goal**: Create urgency and establish current demand.
- **Actions**:
    - [ ] **Availability Indicator**: Add a "Live Status" badge in the Navigation and Footer (e.g., "Available for Q4 Projects").
    - [ ] **Shimmer Skeletons**: Implement "shimmering" loading states for the Portfolio grid to maintain layout stability.

---

## 🛠 Progress Checklist

### Phase 1: Atmosphere & Clean-up
- [ ] **[TASK-01]** Remove `CustomCursor` and restore standard pointer.
- [ ] **[TASK-02]** Add background "blobs" and global noise texture.

### Phase 2: High-End Typography
- [ ] **[TASK-03]** Refine kerning/leading and implement staggered text reveal animations.

### Phase 3: Interactive Lead Magnets
- [ ] **[TASK-04]** Build the "Revenue Lift" ROI Calculator module.
- [ ] **[TASK-05]** Implement the side-panel "deep dive" for portfolio items.

### Phase 4: Reactive Micro-Interactions
- [ ] **[TASK-06]** Add magnetic effect to primary `BookCallButton` components.

### Phase 5: Final Polish
- [ ] **[TASK-07]** Add live availability indicator to Nav/Footer.
- [ ] **[TASK-08]** Final performance audit & layout shift (CLS) check.
