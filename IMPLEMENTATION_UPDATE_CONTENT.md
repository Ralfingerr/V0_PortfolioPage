# Implementation Plan: Content Updates (IMPLEMENTATION_UPDATE_CONTENT)

This document outlines the content changes and structural adjustments for the Ralf Hillebrand portfolio.

## 1. Navigation & Layout
- **Goal**: Simplify navigation and layout by removing redundant elements.
- **Actions**:
    - [ ] **Remove Section Indicator**: Locate and remove the `SectionIndicator` component from `app/page.tsx`.
    - [ ] **Remove Social Proof Section**: Remove the `<SocialProof />` component and its associated divider from `app/page.tsx`.

## 2. About Me Section (`components/about.tsx`)
- **Goal**: Update professional highlights to reflect current metrics.
- **Actions**:
    - [ ] **Update Brands/Clients**: Change "50+ Brands Helped" to "20+ clients supported".
    - [ ] **Update Experience**: Change "8 Years Experience" to "5+ years experience".

## 3. Portfolio Section (`components/bento-grid.tsx`)
- **Goal**: Refine categorization and manage content density.
- **Actions**:
    - [ ] **Rename Category**: Update `CATEGORIES` array to change "Websites" to "Websites & Content".
    - [ ] **Update Project Category**: Change the category of the "maleup" project from "Automation" to "Websites & Content".
    - [ ] **Add New Projects**:
        - [ ] Add new item for **Automation** category with provided screenshot.
        - [ ] Add new item for **Emails** category (Gmail screenshot: `screencapture-mail-google-mail-u-3-2026-05-11-12_00_54`).
        - [ ] Add new item for **Emails** category (`BlackFriday_EmailKampagne` screenshot).
    - [ ] **Implement "See More" Functionality**:
        - [ ] Introduce a state variable (e.g., `showAll`) to control item visibility.
        - [ ] When the "All" category is active, limit the initial display (e.g., to 6 items).
        - [ ] Add a "See More" button below the grid that appears only when "All" is selected and items are hidden.
        - [ ] Ensure smooth transition when expanding the list.

## 4. Asset Management
- **Goal**: Incorporate new project visuals.
- **Actions**:
    - [ ] Save newly provided screenshots to `public/images/portfolio/`.
    - [ ] Update `BentoGrid.tsx` data paths to point to these new assets.

---
