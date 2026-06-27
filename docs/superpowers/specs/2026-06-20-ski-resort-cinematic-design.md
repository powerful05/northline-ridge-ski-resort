# Cinematic Ski Resort Website Design

## Goal

Build a single-page ski resort website with an arctic film-trailer mood. The site should feel like a premium snow destination campaign, while still functioning as a real resort homepage with trail, lodging, lift pass, and booking information.

## Direction

Use the "polar cinema trailer" direction: dark cold opening, huge mountain atmosphere, wind and snow particles, diagonal ski lines, and scroll-driven reveals. The visual priority is cinematic immersion, not a generic travel landing page.

## Stack

- Vite
- TypeScript
- GSAP core timelines
- GSAP ScrollTrigger
- Vitest for structure-level tests
- Static generated hero image stored in the project

## Page Structure

1. Hero: full-viewport cinematic mountain still, fixed navigation, headline, stats, booking call to action, snow overlay, and GSAP intro timeline.
2. Mountain story: editorial section describing the resort with staggered copy and terrain stats.
3. Pinned descent: scroll-scrubbed cinematic sequence where panels move across the viewport like a ski descent storyboard.
4. Resort cards: trails, chalets, lifts, guides, and night runs.
5. Booking band: clear date/pass/lodging CTA with practical information.

## Animation Requirements

- Register `ScrollTrigger` once before using it.
- Use a GSAP intro timeline for hero title, nav, stats, and CTA.
- Use ScrollTrigger for section reveals and a pinned descent sequence.
- Use transform and opacity animation (`x`, `y`, `scale`, `autoAlpha`) rather than layout-heavy properties.
- Respect `prefers-reduced-motion`: keep content visible and skip high-motion timelines when requested.

## Visual Requirements

- Use real bitmap hero imagery, not only CSS gradients.
- Avoid generic purple gradients, beige-heavy luxury palettes, and stock-looking card layouts.
- Keep the palette cold and cinematic: glacier blue, black pine shadows, white snow, and a small signal-orange accent.
- Keep text legible over the hero image on desktop and mobile.

## Verification

- Unit tests confirm required semantic sections and animation hooks exist.
- Build command must pass.
- Local browser screenshot must show a nonblank cinematic page with the hero asset loaded.
