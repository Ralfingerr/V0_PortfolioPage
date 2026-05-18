# Implementation Plan: Miscellaneous Content Updates

This document outlines the step-by-step implementation plan for the requested content and structure updates across the footer, header, testimonials, and portfolio sections.

## 1. Footer Updates (`components/footer.tsx`)
- **Email Update:** Change the contact email address from `hello@ralfhillebrand.de` to `ralf@ralfhillebrand.de` in both the `mailto:` link and the display text.
- **Remove Telephone:** Completely remove the div containing the phone number information ("Telefon" section).
- **Address Update:** Change the address text from "Berlin, Deutschland" to "Zu den Neuen Wiesen 5, 35644 Hohenahr".
- **Remove Availability Badge:** Delete the "Available for Q4 Projects" pulsing indicator badge from the company info column.

## 2. Header Updates (`components/navigation.tsx` & `components/book-call-button.tsx`)
- **Remove Availability Badge:** Remove the "Available for Q4" pulsing badge from the desktop navigation bar.
- **Update Call-to-Action:** Modify the behavior of the "Let's work together" button in the header so that it opens a form. 
  - *Action:* We will update the `BookCallButton` logic to either smoothly scroll to the `#contact` section form or replace the Calendly link with the specific external form link if one is provided.

## 3. Testimonials Updates (`components/testimonials.tsx`)
Update the static `testimonials` array with the new client feedback:

- **Testimonial 1 (`id: 1`):**
  - **Quote:** "Working with Ralf was a great experience. He quickly got up to speed on a new and complex topic, delivered high-quality writing, and communicated clearly throughout the project. I especially appreciated his fast replies, thoughtful questions, and reliability in meeting deadlines. Last but not least, he was open to feedback and adapted quickly, which made collaboration effortless. I'll happily work with him again and certainly recommend him!"
  - **Author:** Sören
  - **Company/Role:** Go Vocal

- **Testimonial 2 (`id: 2`):**
  - **Quote:** "Ich habe mit Ralf für ein HR-Content-Projekt zusammengearbeitet und kann ihn uneingeschränkt empfehlen. Er lieferte immer zuverlässig qualitativen Content, der überzeugte und über die Vorgaben hinaus performte."
  - **Author:** Dorothea
  - **Company/Role:** Content Marketing Manager

## 4. Portfolio Section Updates (`components/bento-grid.tsx`)
- **Image Update - Black Friday Campaign (`id: "p6"`):** Replace the current image source with the `email_design` screenshot provided.
- **Image Update - Gmail Campaign Suite (`id: "p5"`):** Replace the current image source with the `screencapture-mail-google-mail-u-3-2026-05-11-12_00_54 (1)` screenshot provided.
- **Category Update - Buffalo Jerky (`id: "p3"`):** Change both the `type` and `category` fields from `"Emails & Ads"` to `"Websites & Content"`.

## 5. Certificates Restructuring
- **Remove from Portfolio (`components/bento-grid.tsx`):**
  - Remove `"Certificates"` from the `CATEGORIES` filter array.
  - Delete all certificate entries (`id: "c1"` through `"c5"`) from the `portfolioItems` array.
  - Strip out the modal logic (`selectedCertificate` state and its `AnimatePresence` modal rendering) from the `BentoGrid` component.
- **Create New Certificates Section:**
  - Create a new component (e.g., `components/certificates-overview.tsx`) designed to display the certificates.
  - The design will be minimal, aligning the certificate logos/images horizontally to take up very little vertical space.
  - Insert this new component into the main page layout (`app/page.tsx`), likely just below the Portfolio or Testimonials section.
