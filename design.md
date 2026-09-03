---
name: Minimalist Finance
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  navy-deep: '#0F172A'
  slate-gray: '#64748B'
  emerald-accent: '#10B981'
  error-red: '#EF4444'
  surface-ice: '#F1F5F9'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  numeric-data:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is centered on the "Secure Bank" ethos: a synthesis of traditional institutional trust and modern technological precision. The brand personality is authoritative yet accessible, evoking a sense of calm reliability through "Minimalist Finance."

The visual style leverages **Minimalism** with a focus on high-contrast clarity. By utilizing expansive whitespace, the interface reduces cognitive load during complex financial tasks. The aesthetic avoids unnecessary ornamentation, relying instead on structural alignment and premium typography to convey security and sophistication. The emotional response should be one of "effortless control"—where the user feels their data is protected and their financial journey is streamlined.

## Colors

The palette is anchored by **Navy Deep** (`#0F172A`), providing a foundation of stability and institutional strength. **Slate Gray** is used for secondary information and utilitarian UI elements, maintaining a professional distance from the primary actions.

**Emerald Accent** (`#10B981`) is reserved strictly for positive financial indicators (growth, success, completed transactions) and primary call-to-action buttons. This specific use of color creates a "green means go" mental model that reinforces user confidence. The background utilizes a crisp **Neutral** (`#F8FAFC`) to ensure maximum legibility and a sense of "digital air."

## Typography

This design system employs a dual-font strategy to balance heritage with functionality. 

**Noto Serif** is used for all high-level headings and editorial moments. It provides a "banker’s classic" feel that grounds the digital experience in established trust. 

**Inter** is the functional workhorse, utilized for all body copy, data tables, and input forms. Its high x-height and neutral character ensure that financial figures are unmistakable and easy to parse at a glance. For financial data, always use `numeric-data` styles to ensure tabular alignment and clarity.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a premium, structured feel, while transitioning to a fluid model on mobile devices. 

- **Desktop (1440px+):** 12-column grid with a 1280px max-width container. Large 64px side margins create an intentional "frame" for the content.
- **Tablet (768px - 1024px):** 8-column grid with 32px margins.
- **Mobile (<768px):** 4-column grid with 20px margins.

Spacing follows a strict 8px base unit. Vertical rhythm is prioritized, with generous padding between sections (80px - 120px) to reinforce the minimalist aesthetic.

## Elevation & Depth

To maintain the "Minimalist Finance" aesthetic, elevation is primarily achieved through **Tonal Layers** rather than heavy drop shadows.

- **Surface Levels:** The base is `Neutral-50`. Secondary containers use a subtle shift to `Surface-Ice`.
- **Ghost Borders:** For form fields and card boundaries, use a 1px "Ghost Border" using `Slate-Gray` at 10% opacity. 
- **Active Elevation:** Only use shadows for temporary floating elements (Modals, Dropdowns). These shadows should be extremely diffused: 30px blur, 4% opacity, using the `Navy-Deep` hue to keep the shadow feeling integrated and clean.

## Shapes

The shape language is **Soft** (0.25rem). This subtle rounding moves away from the aggressive sharpness of traditional fintech while avoiding the "toy-like" feel of consumer apps. 

- **Small elements (Checkboxes, Tags):** 4px (0.25rem).
- **Medium elements (Buttons, Inputs):** 8px (0.5rem).
- **Large elements (Cards, Modals):** 12px (0.75rem).

This consistent, restrained radius conveys a sense of modern precision and technological "polish."

## Components

- **Buttons:** Primary buttons use a solid **Emerald Accent** fill with white text for maximum "action" visibility. Secondary buttons use a **Navy Deep** outline with 1px thickness.
- **Inputs:** Maintain a white background with a 1px ghost border. On focus, the border transitions to a 2px **Navy Deep** stroke to signal security and active engagement.
- **Cards:** Cards should not have shadows. Use a 1px ghost border or a subtle background fill change (`Surface-Ice`) to define boundaries.
- **Chips:** For status (e.g., "Pending," "Cleared"), use low-saturation backgrounds with high-saturation text of the same hue (e.g., light emerald background with dark emerald text).
- **Data Tables:** Remove all vertical lines. Use only horizontal hair-lines (10% opacity slate) to separate entries. Ensure "Inter" is used for all numerical values to maintain readability.
- **Security Badges:** A dedicated component using a small shield icon in **Navy Deep** should accompany all sensitive data points to subconsciously reinforce the "Secure Bank" promise.