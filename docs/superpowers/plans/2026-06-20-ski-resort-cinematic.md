# Cinematic Ski Resort Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page cinematic ski resort website with GSAP intro and scroll animations.

**Architecture:** A lightweight Vite TypeScript app renders static page sections from `src/main.ts`, styles the visual system in `src/styles.css`, and centralizes GSAP setup in `src/animations.ts`. Tests assert the expected DOM hooks and reduced-motion behavior before implementation.

**Tech Stack:** Vite, TypeScript, GSAP, ScrollTrigger, Vitest, jsdom.

---

### Task 1: Project Scaffold And Tests

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.ts`
- Create: `src/animations.ts`
- Create: `src/styles.css`
- Create: `src/main.test.ts`
- Create: `vitest.config.ts`

- [ ] Write tests that assert the app renders hero, descent, resort, and booking sections with GSAP hook attributes.
- [ ] Run `npm test -- --run` and confirm it fails because the app code is missing.
- [ ] Add the Vite TypeScript scaffold and initial render function.
- [ ] Run `npm test -- --run` and confirm it passes.

### Task 2: Cinematic Visual Design

**Files:**
- Modify: `src/styles.css`
- Modify: `src/main.ts`
- Create: `src/assets/hero-ski-cinematic.png`

- [ ] Copy the generated hero image into `src/assets/hero-ski-cinematic.png`.
- [ ] Implement the hero, editorial story, pinned descent, resort cards, and booking band markup.
- [ ] Implement responsive CSS with stable dimensions, readable overlays, and no nested card surfaces.
- [ ] Run `npm test -- --run` and confirm structure remains intact.

### Task 3: GSAP Animation System

**Files:**
- Modify: `src/animations.ts`
- Modify: `src/main.ts`

- [ ] Register ScrollTrigger.
- [ ] Add intro timeline using transform and autoAlpha.
- [ ] Add ScrollTrigger section reveals and pinned descent scrub timeline.
- [ ] Add reduced-motion branch that leaves all content visible and avoids high-motion timelines.
- [ ] Run `npm test -- --run` and `npm run build`.

### Task 4: Runtime Verification

**Files:**
- No source changes expected unless verification finds issues.

- [ ] Start Vite dev server.
- [ ] Open local page and capture desktop and mobile screenshots.
- [ ] Verify hero image loads, text does not overlap, and the page is nonblank.
- [ ] Fix any visual or build issues found, then rerun tests and build.
