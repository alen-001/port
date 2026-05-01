# Design Language: 25-26 life update - Katherine Le

> Extracted from `https://picnic.katherine-le.com/` on May 1, 2026
> 96 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#efab56` | rgb(239, 171, 86) | hsl(33, 83%, 64%) | 2 |
| Secondary | `#453011` | rgb(69, 48, 17) | hsl(36, 60%, 17%) | 146 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 28 |
| `#f9f6f4` | hsl(24, 29%, 97%) | 16 |

### Text Colors

Text color palette: `#000000`, `#453011`, `#f9f6f4`, `#efab56`

### Gradients

```css
background-image: repeating-linear-gradient(to right, rgb(249, 246, 244), rgb(249, 246, 244) 52px, rgb(247, 242, 240) 52px, rgb(247, 242, 240) 104px);
```

```css
background-image: repeating-linear-gradient(to right, rgb(249, 246, 244), rgb(249, 246, 244) 60px, rgb(247, 242, 240) 60px, rgb(247, 242, 240) 120px);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#453011` | text, border | 146 |
| `#000000` | text, border | 28 |
| `#f9f6f4` | text, border | 16 |
| `#efab56` | text, border | 2 |

## Typography

### Font Families

- **Geist** — used for body (81 elements)
- **Times** — used for body (12 elements)
- **Arial** — used for body (2 elements)
- **ENDisplay** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 21.28px | 1.33rem | 350 | 25.536px | -0.266px | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, link |
| 13.3333px | 0.8333rem | 450 | normal | normal | button, img |
| 11.904px | 0.744rem | 650 | 11.904px | -0.71424px | button, img, span, a |

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`450` (74x), `400` (12x), `650` (9x), `350` (1x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-6 | 6px | 0.375rem |
| spacing-24 | 24px | 1.5rem |
| spacing-51 | 51px | 3.1875rem |
| spacing-64 | 64px | 4rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| lg | 12px | 1 |
| full | 9999px | 4 |

## Box Shadows

**xl** — blur: 28px
```css
box-shadow: rgba(32, 19, 8, 0.28) 0px 12px 28px 0px, rgba(234, 187, 93, 0.18) 0px 0px 18px 0px;
```

**xl** — blur: 60px
```css
box-shadow: rgba(23, 15, 7, 0.24) 0px 24px 60px 0px;
```

## CSS Custom Properties

### Colors

```css
--bg: #f9f6f4;
```

### Spacing

```css
--space-s3: .25rem;
--space-s2: .5rem;
--space-s1: .75rem;
--space-0: 1rem;
--space-1: 1.5rem;
--space-2: 2rem;
--space-3: 4rem;
--space-4: 8rem;
--space-5: 10rem;
--header-block-size: 3rem;
```

### Typography

```css
--font-s2: clamp(.52rem, .08vi + .5rem, .56rem);
--font-s1: clamp(.65rem, .18vi + .6rem, .75rem);
--font-0: clamp(.81rem, .34vi + .73rem, 1rem);
--font-1: clamp(1.02rem, .58vi + .87rem, 1.33rem);
--font-2: clamp(1.27rem, .92vi + 1.04rem, 1.78rem);
--font-3: clamp(1.59rem, 1.42vi + 1.23rem, 2.37rem);
--font-4: clamp(1.98rem, 2.13vi + 1.45rem, 3.16rem);
--font-5: clamp(2.48rem, 3.14vi + 1.69rem, 4.21rem);
--font-6: clamp(3.1rem, 4.57vi + 1.96rem, 5.61rem);
--text: #453011;
```

### Other

```css
--ff-h: "ENDisplay", "Times New Roman", "Times", serif;
--ff-p: "Geist", Helvetica, Arial, sans-serif;
--lh-s2: .8;
--lh-s1: 1.2;
--lh: 1.6;
--fg: #0c0c0c;
--gray-50: gray;
--gold: #efab56;
--scene-clickable-cursor: url("data:image/png;base64,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");
--scene-default-cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAABOsAAATrAdgqWw0AAATASURBVEhLrZVNiJZVGIav55z55v1GM2YhghGWmxSDmE1u2oxEKC0iIwlXSj+6qcEoWlVqbYOyQpAWjUW4SDCosRQntXFRESQt1FrY6IQkpn7zzffz/p3naXHe+VVMpRuezfm573Oe+37PK2MjI/15zR0ScYMAmI2bycbH168/zf8Al9fcIdoTg+Vv75Gf2oVeO/egOY6PHju8deHiu4ETcYPh/JeU539BL58jP7EbO3+4X8x/Onr0yPsLN9wpHIA2WxBmB4sznxPO7UVCZ8fo0W+Pj42M9M/Zc0dwCwfw4BY5yj/HyE7uhO61waLmfx09cmRg4dLbwXwBD26JxzLDOoY1JsiOvYZePXvXvkQBm0OeG9ZSUCAYpF3yH9/BLt6dL1FAwC3yWGHolGIKFsBUoO4QD8XP+yl++hCK9h354gCk7tASdLI6ucZbSR3Eg00Zlirl7z+QfvMm1r562744AEsNmwzzyRcJeNBmJCeAZWBXL5J/9zp65fZ8iTHNrOp5FJA+BybYJJADKrFlFue006Fz8C3Cb1//py/RAxUIsaTXA4I1FSvA1GIFcHXBStBmvFF2cph0dM8tfakEqkoceMGaASuqFFW3cjWwAnTKMJVYQSjPniI7/DbWurkvswKJR7xgrYDlccwMQJCaQwsILcNKoIztFC+4RCj/ukh7/2uES2du8CWmqNeBE7RjaG6YgSkIgtQFyw2dskhchYAeQRJBM0O7YN0u7S92Uf76zTxf4g2cYG2dSQshfhuSgHWNsqnVd1F9G05wNYeloO1KNEThfOwz0tGPEWHH0a8P7Yox7QY0UywYGuIBXSJYAWVDYwA0ljhwNYdmRmhH86fFJREwIf/5JGHiDKa6MwoUzJIY+LrDCgiNKv/TBC62UzNDO1W0rQpB4kAdoaVoWY3PM9miqT5xaGlxYWZYlTDnI7llhnYjeWwZuF4HCNoJWAnJ2g34FWtIW1ONGQFTwyUOU9CWYUV1QgVxAj0eyyB0ZttCAF9zIIJpQu+jG7h3x1761r9AOnmNvN18deY1db0eUUHblRfV6cVJTFluhE71VlksnzjoEfx9D7FkaC/1J7aS45m8dOFE2riybtO2oeHZmBqEdhl7nsdIOj+HPNXY1Ao+cVATLFOKiQsAdCevNdLGlXUbt2xb98yLQyeYeeyCodPkZlhpuF5BEodlSsjmkAv4vnhy7Qa0MCztoJcv0Ltocf808TRii+YQWGn4mqsMVbSo4sAccidoGqIP06gvJhQlB/btm/ceRQGqFGGIMHP1m5LLfPKelatZvPkN/LIHyJrXxzdv396Y3bTgnywuvjuWKe7+VfQ9uaWauJG8Z+Vqljy/m3u2vIs8+DDNvycaluYb5/IB9Cg0eh4Z7C8vnUMAt3wVyWPP4VesAaA8+xN6+Y8Zcr9iNX3rNuNXrKHMOkz9PTFedDv7C0s+2Lz95XmnB5DRY4e3ivlPdeofyNq4pQ9QZh2616+OL166vCGaDWTfD2Ol0rv2Kfyy2fm829m9advQ8ELSuRCAkQP7n5Yk2YnaQNGdOp130z2btg0Nj42M9He1ON5T7xsAyFpNsub18SJL/5N4GrJw4GY4+MlHT2M2gMjpZ1965auF87fCv/+TFtBRM83+AAAAAElFTkSuQmCC");
--scene-grabbing-cursor: url("data:image/png;base64,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");
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 700px | max-width |

## Transitions & Animations

**Durations:** `0.24s`, `3s`, `0.2s`, `0.15s`, `0.25s`, `0.3s`

### Common Transitions

```css
transition: all;
transition: opacity 0.24s 3s, visibility 0.24s 3s;
transition: color 0.2s, background-color 0.2s, border-color 0.15s, opacity 0.2s;
transition: filter 0.2s;
transition: opacity 0.25s, transform 0.25s;
transition: opacity 0.24s, visibility 0.24s;
transition: transform 0.3s;
```

### Keyframe Animations

**scene-loading-meter**
```css
@keyframes scene-loading-meter {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (4 instances)

```css
.button {
  background-color: color(srgb 0.976471 0.964706 0.956863 / 0.15);
  color: rgb(249, 246, 244);
  font-size: 11.904px;
  font-weight: 650;
  padding-top: 24px;
  padding-right: 24.8px;
  border-radius: 9999px;
}
```

### Links (3 instances)

```css
.link {
  color: rgb(249, 246, 244);
  font-size: 11.904px;
  font-weight: 650;
}
```

### Modals (21 instances)

```css
.modal {
  background-color: color(srgb 0.976471 0.964706 0.956863 / 0.15);
  border-radius: 0px;
  box-shadow: rgba(23, 15, 7, 0.24) 0px 24px 60px 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: min(100% - 16px, 1440px);
}
```

### Badges (1 instances)

```css
.badge {
  background-color: color(srgb 0.976471 0.964706 0.956863 / 0.15);
  color: rgb(249, 246, 244);
  font-size: 11.904px;
  font-weight: 650;
  padding-top: 24px;
  padding-right: 24.8px;
  border-radius: 9999px;
}
```

### Tooltips (2 instances)

```css
.tooltip {
  color: rgb(69, 48, 17);
  font-size: 11.904px;
  border-radius: 0px;
  padding-top: 12px;
  padding-right: 16px;
  box-shadow: rgba(32, 19, 8, 0.28) 0px 12px 28px 0px, rgba(234, 187, 93, 0.18) 0px 0px 18px 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: color(srgb 0.976471 0.964706 0.956863 / 0.15);
  color: rgb(249, 246, 244);
  padding: 12px 12px 12px 12px;
  border-radius: 9999px;
  border: 1px solid rgb(249, 246, 244);
  font-size: 11.904px;
  font-weight: 650;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: color(srgb 0.976471 0.964706 0.956863 / 0.15);
  color: rgb(249, 246, 244);
  padding: 24px 24.8px 24px 24.8px;
  border-radius: 9999px;
  border: 1px solid rgb(249, 246, 244);
  font-size: 11.904px;
  font-weight: 650;
```

## Layout System

**5 grid containers** and **18 flex containers** detected.

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 2x |
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 1177.62px;
grid-template-columns: 1216px;
gap: 51.2px;
grid-template-columns: 54px 906.359px 207.641px;
gap: normal 24px;
grid-template-columns: none;
grid-template-columns: none;
gap: 8px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 5x |
| row/nowrap | 12x |
| row/wrap | 1x |

**Gap values:** `12px`, `16px`, `51.2px`, `6.4px`, `8px`, `normal 24px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 85/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 50/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 91% of CSS is unused — consider purging
- 239 duplicate CSS declarations

## Gradients

**2 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| repeating-linear | to right | 4 | bold |
| repeating-linear | to right | 4 | bold |

```css
background: repeating-linear-gradient(to right, rgb(249, 246, 244), rgb(249, 246, 244) 52px, rgb(247, 242, 240) 52px, rgb(247, 242, 240) 104px);
background: repeating-linear-gradient(to right, rgb(249, 246, 244), rgb(249, 246, 244) 60px, rgb(247, 242, 240) 60px, rgb(247, 242, 240) 120px);
```

## Z-Index Map

**5 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 10000,10000 | div |
| sticky | 99,99 | div.s.c.e.n.e.-.l.o.a.d.i.n.g |
| base | 1,3 | p.s.c.e.n.e.-.l.o.a.d.i.n.g._._.e.y.e.b.r.o.w, span.s.c.e.n.e.-.l.o.a.d.i.n.g._._.m.e.t.e.r, p.s.c.e.n.e.-.l.o.a.d.i.n.g._._.s.t.a.t.u.s |

**Issues:**
- [object Object]

## SVG Icons

**3 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| md | 3 |

**Icon colors:** `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| ENDisplay | self-hosted | 400 | normal, italic |
| Geist | self-hosted | 400, normal | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 2 | objectFit: contain, borderRadius: 0px, shape: square |
| general | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (2x), 3.65:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `xxl` | `3s` | 3000 |

## Component Anatomy

### button — 3 instances

**Slots:** label, icon

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **toggle** (1)
- **linkedin** (1)
- **instagram** (1)

### Button Copy Patterns

- "toggle site audio" (1×)
- "linkedin" (1×)
- "instagram" (1×)

## Page Intent

**Type:** `landing` (confidence 0.45)

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.353 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 2 |

## Imagery Style

**Label:** `mixed` (confidence 0.6)
**Counts:** total 3, svg 3, icon 3, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Geist` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
