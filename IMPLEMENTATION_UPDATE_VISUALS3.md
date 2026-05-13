# Implementation Plan: Fix Readability & Animated Hero (IMPLEMENTATION_UPDATE_VISUALS3)

This phase addresses the readability issues caused by global transitions and background blurs, removes the ROI calculator, and introduces a more architectural animated background for the hero section.

## 1. Emergency Readability Fix
- **Goal**: Restore crystal-clear text rendering.
- **Actions**:
    - [ ] **Remove Global Transition**: Delete `* { duration-300 }` from `globals.css`.
    - [ ] **Atmosphere Cleanup**: Remove `backdrop-blur` from `components/atmosphere.tsx`.
    - [ ] **Layer Check**: Ensure the noise overlay and atmosphere are strictly behind all text layers (`z-0`).

## 2. Removal of ROI Calculator
- **Goal**: Simplify the page structure.
- **Actions**:
    - [ ] **Unmount Component**: Remove `<ROICalculator />` from `app/page.tsx`.
    - [ ] **Delete Files**: Remove `components/roi-calculator.tsx`.

## 3. High-End Animated Hero Background
- **Goal**: Add a "Wow" factor that signals technical expertise in AI/Automation.
- **Actions**:
    - [ ] **Particle Grid**: Implement a subtle, moving grid or "connecting nodes" animation for the Hero section background.
    - [ ] **Interactive Depth**: Make the background react slightly to the mouse without using a custom cursor.

---

## 🛠 Progress Checklist

### Phase 1: Readability & Cleanup (DONE)
- [x] **[TASK-01]** Fix CSS rendering issues/blur in `globals.css`.
- [x] **[TASK-02]** Remove ROI Calculator from Home Page.
- [x] **[TASK-03]** Optimize `Atmosphere.tsx` rendering layers.

### Phase 2: Animated Hero (DONE)
- [x] **[TASK-04]** Create and implement the `HeaderBackground` particles/node animation.
- [x] **[TASK-05]** Integrate new background into `Hero.tsx`.

### Phase 3: Final Audit
- [ ] **[TASK-06]** Cross-browser check for text sharpness.
