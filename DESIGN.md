---
name: Nikhil Kakarla
description: Life portfolio of an engineer, entrepreneur, athlete, and videographer — everything earned, nothing decorative.
colors:
  midnight-carbon: "oklch(3% 0.006 240)"
  polar-chalk: "oklch(97% 0.004 240)"
  graphite-shell: "#1c1c1e"
  lifted-graphite: "#2c2c2e"
  raised-graphite: "#3a3a3c"
  warm-filament: "oklch(72% 0.14 55)"
  ember-shadow: "oklch(12% 0.02 55)"
typography:
  display:
    fontFamily: "'Times New Roman', Times, serif"
    fontSize: "clamp(2.5rem, 5.5vw, 5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.03em"
rounded:
  pill: "100px"
  lg: "24px"
  md: "20px"
  sm: "12px"
spacing:
  page-x: "40px"
  page-y-top: "120px"
  card: "32px"
  gap: "16px"
components:
  nav-pill:
    backgroundColor: "{colors.graphite-shell}"
    textColor: "{colors.polar-chalk}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
  nav-pill-active:
    backgroundColor: "{colors.warm-filament}"
    textColor: "{colors.ember-shadow}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
  btn-ghost:
    backgroundColor: "{colors.graphite-shell}"
    textColor: "{colors.polar-chalk}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  btn-ghost-hover:
    backgroundColor: "{colors.lifted-graphite}"
    textColor: "{colors.polar-chalk}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  btn-primary:
    backgroundColor: "{colors.polar-chalk}"
    textColor: "{colors.midnight-carbon}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  card:
    backgroundColor: "{colors.graphite-shell}"
    textColor: "{colors.polar-chalk}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
---

# Design System: Nikhil Kakarla

## 1. Overview

**Creative North Star: "The Collected Works"**

This is a life portfolio — not a resume, not a product pitch. The site exists as an artifact: a record of what has been built, played, made, and done. Every surface earns its presence. The breadth of the subject — engineer, entrepreneur, squash athlete, videographer — is a feature, not a liability. The site holds that multiplicity without flattening it.

The aesthetic is dark, cinematic, and unhurried. The near-black background is chosen for the same reason a cinema turns off the lights: so the content owns the room. The amber accent is used sparingly — a warm filament, not a floodlight. Inter carries the body text with quiet competence; Times New Roman appears once, on the home page, to mark the name with weight and permanence. The full-screen video hero on the index page sets the register for the entire site: immersive, personal, unhurried.

The site explicitly rejects startup landing-page energy (big CTAs, hero metrics, testimonials, "what I can do for you" framing), generic resume structure (LinkedIn-shaped timelines as the main event), and experimental portfolios (navigation as puzzle, motion as performance). Nothing exists to impress on its own. Everything exists to reveal.

**Key Characteristics:**
- Near-black cinematic background with tonal surface layering, no shadows
- Single warm amber accent used at no more than 10% of any surface
- Dual typeface: Times New Roman for the display name only, Inter everywhere else
- Full pill radius on all interactive elements — nav, buttons, chips
- Bento-grid project display with full-bleed background images
- Scroll-reveal and translateY hover as the motion vocabulary

## 2. Colors: The Filament Palette

A near-black field punctuated by a single warm amber signal. Everything else is tonal variation of the dark ground.

### Primary
- **Warm Filament** (`oklch(72% 0.14 55)`): The sole accent. Active nav pill, name highlight on the about page, timeline dots, read-more hover fill. Appears on less than 10% of any given surface. Its rarity is the point.

### Neutral
- **Midnight Carbon** (`oklch(3% 0.006 240)`): Page background. Not pure black — a faint cool tint at hue 240 keeps it from feeling dead. The cinema floor.
- **Polar Chalk** (`oklch(97% 0.004 240)`): Primary text and active UI. The same cool tint as the background. Headings, active states, links at full brightness.
- **Graphite Shell** (`#1c1c1e`): Primary surface — nav pills at rest, cards, buttons, popups. Two luminosity steps above the background.
- **Lifted Graphite** (`#2c2c2e`): Hover state for Graphite Shell surfaces. Subtle shift — hover should feel responsive, not dramatic.
- **Raised Graphite** (`#3a3a3c`): Secondary raised surface. Used for nested elements or additional tonal depth.
- **Ember Shadow** (`oklch(12% 0.02 55)`): Text on the Warm Filament accent. Very dark warm brown — readable and intentional.

### Named Rules
**The One Filament Rule.** Warm Filament appears on no more than 10% of any surface at any time. Use it for the single most important state signal on screen. When everything glows, nothing does.

**The No Raw Black Rule.** Never use `#000` or `#fff`. Every neutral is tinted toward hue 240. The background breathes; the text does not strain.

**The Opacity Text Scale.** Body text is `rgba(255,255,255,0.55)`. Secondary metadata is `rgba(255,255,255,0.4)`. Tertiary details are `rgba(255,255,255,0.35)`. Full Polar Chalk is reserved for headings, active elements, and interactive labels only.

## 3. Typography

**Display Font:** Times New Roman (Georgia, serif fallback)
**Body/UI Font:** Inter (-apple-system, BlinkMacSystemFont, sans-serif fallback)

**Character:** Times New Roman appears exactly once — the hero name on the index page. Serif weight marks a proper noun, a person, not a product. Inter carries everything else: modern, neutral, and highly legible at all sizes. The pairing is a deliberate contrast between identity and information — between who someone is and what they have done.

### Hierarchy
- **Display** (400 weight, `clamp(2.5rem, 5.5vw, 5rem)`, line-height 1): "NIKHIL KAKARLA" on the home hero. Nowhere else. Times New Roman.
- **Headline** (600 weight, `clamp(1.75rem, 3vw, 3rem)`, line-height 1.15, letter-spacing -0.02em): Page-level h1 headings. Tight tracking, high weight contrast against body.
- **Title** (600 weight, `2.5rem`, line-height 1.2, letter-spacing -0.02em): Section titles, page section headers.
- **Body** (400 weight, `0.9375rem` / 15px, line-height 1.7): All paragraph text. Color: `rgba(255,255,255,0.55)`. Max line length: 65–75ch.
- **Label** (500 weight, `0.8125rem` / 13px, uppercase, letter-spacing 0.03em): Form field labels, timestamps, metadata. Caps and tracking signal structure, not content.

### Named Rules
**The Serif Singularity Rule.** Times New Roman is used exactly once: the hero name on the index page. Any additional instance dilutes the moment. Inter handles everything else without exception.

**The Muted Body Rule.** Body text is never full brightness. `rgba(255,255,255,0.55)` for paragraphs; `rgba(255,255,255,0.4)` for secondary labels and metadata. Full white is reserved for headings and active states.

## 4. Elevation

This system is **flat by default with tonal layering**. There are no `box-shadow` values anywhere in the codebase. Depth is created entirely through background color steps: Midnight Carbon → Graphite Shell → Lifted Graphite → Raised Graphite.

Backdrop blur appears in exactly two places: the popup overlay scrim (`rgba(0,0,0,0.75)` + `backdrop-filter: blur(8px)`) and the home page nav glass variant. Both are purposeful. The blur signals "a layer above the world" and is not used decoratively on cards or containers.

Hover states signal liftability through motion (`translateY(-4px)` on bento tiles), not shadow.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. No `box-shadow` on cards, nav, buttons, or containers. When depth is needed, use a darker background step.

**The One Blur Rule.** Backdrop blur is reserved for modal overlays and the home nav glass variant. Using it on cards, sidebars, or inner surfaces collapses the elevation hierarchy.

## 5. Components

### Navigation
Floating fixed bar, transparent background, pill-shaped links. On the home page: glass blur variant (`rgba(28,28,30,0.7)` + `backdrop-filter: blur(8px)`) floats over the full-screen video. On all other pages: solid Graphite Shell, no blur. Active page uses Warm Filament fill.
- **Shape:** Full pill (`border-radius: 100px`)
- **Height:** `min-height: 44px` (touch target compliance)
- **Padding:** `0 20px`
- **Rest:** Graphite Shell bg, Polar Chalk text, weight 500, 14px
- **Hover:** Lifted Graphite bg, 0.3s ease transition
- **Active:** Warm Filament bg, Ember Shadow text
- **Focus:** `outline: 2px solid Warm Filament`, offset 2px

### Buttons
Two types in the system: Ghost (secondary actions) and Primary (terminal actions like form submit).
- **Ghost:** Pill, Graphite Shell bg, Polar Chalk text, 12px 28px padding. Hover: Lifted Graphite.
- **Primary / Submit:** Pill, Polar Chalk bg, Midnight Carbon text, 12px 32px padding. Hover: opacity 0.85. Inversion marks terminal action.
- **Accent / Read More:** Pill, `rgba(255,255,255,0.08)` bg, Warm Filament text. Hover fills with Warm Filament, text becomes Ember Shadow.

### Cards / Surfaces
Graphite Shell background, generous radius, real padding — consistent across timeline, popups, and forms.
- **Corner Style:** Large rounded (`24px` for popups and forms; `20px` for timeline cards and bento tiles)
- **Background:** Graphite Shell
- **Shadow:** None. Tonal contrast with Midnight Carbon background creates the separation.
- **Internal Padding:** 32px standard; 40px for popups

### Bento Grid (Signature Component)
A 6-column variable-span grid used for the technical portfolio. Tiles carry full-bleed background images, a dark scrim at rest, centered project titles, and a hover state that lifts and lightens the scrim while revealing a "Click to Learn More" pill from below.
- **Tile radius:** `20px`
- **Scrim at rest:** `rgba(0,0,0,0.55)`
- **Scrim on hover:** `rgba(0,0,0,0.35)`
- **Hover motion:** `translateY(-4px)`, 0.3s ease
- **Overlay pill:** `rgba(255,255,255,0.1)` bg, `100px` radius, 15px Inter 500
- **Wide tile (span-4):** 22px title text; standard tiles: 18px

### Form Inputs
Low-contrast stroke fields on a surface container — the form recedes behind its content.
- **Background:** `rgba(255,255,255,0.06)`
- **Border:** `1px solid rgba(255,255,255,0.08)` at rest; `rgba(255,255,255,0.25)` on focus
- **Radius:** `12px`
- **Text:** Polar Chalk, 15px, Inter
- **Labels:** Uppercase, 13px, `rgba(255,255,255,0.4)`, letter-spacing 0.5px

### Popup / Modal
Appears over a blurred scrim. The blur separates the focused layer from the receded world behind it.
- **Scrim:** `rgba(0,0,0,0.75)` + `backdrop-filter: blur(8px)`
- **Content card:** Graphite Shell bg, `border-radius: 24px`, `padding: 40px`, max-width 700–900px
- **Close button:** `rgba(255,255,255,0.4)` at rest, Polar Chalk on hover, 0.3s ease

## 6. Do's and Don'ts

### Do:
- **Do** use Warm Filament only for the most important state signal on any screen. Active nav, a name highlight, a single dot. One thing at a time.
- **Do** keep body text at `rgba(255,255,255,0.55)` or lower. Full Polar Chalk is for headings and active elements only.
- **Do** create depth through background color steps, never shadows.
- **Do** let background images and the video hero carry the visual weight. The UI frames them; it does not compete with them.
- **Do** use `border-radius: 100px` on all interactive pills. Anything with angles reads as a different design system entirely.
- **Do** respect `prefers-reduced-motion` — every typing animation, scroll-reveal, and translateY transition must have a no-motion fallback.
- **Do** use Times New Roman only for the display name. Inter handles every other typographic role.
- **Do** honor the breadth: engineer, entrepreneur, athlete, videographer are equally important. No page should feel like an afterthought.

### Don't:
- **Don't** add startup landing-page elements: hero metrics, big CTAs, testimonials, "hire me" framing, or conversion-focused copy. This is a life portfolio.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). A single solid color, always.
- **Don't** use glassmorphism decoratively. Blur on cards or inner surfaces collapses the elevation hierarchy.
- **Don't** create identical card grids. The bento grid's variable spans exist specifically to avoid that pattern.
- **Don't** make the site feel like a resume: timeline-as-main-event, bullet-point density, LinkedIn-shaped hierarchy.
- **Don't** add `box-shadow`. The system is flat by design. A shadow is a violation of the Flat-by-Default Rule.
- **Don't** use `#000` or `#fff`. Every neutral must be tinted toward hue 240.
- **Don't** design a surface that could belong to a different person. Generic developer portfolio aesthetics — neon on black, SaaS cream, identical card grids — all fail the test.
