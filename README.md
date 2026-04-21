# 🔱 Trinetra Foundation Website

A modern, production-ready website for **Trinetra Foundation** — a Gandharividye training organisation offering offline and online classes for children aged 6–16.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          ← Design tokens, custom animations, global styles
│   ├── layout.tsx           ← Root layout with metadata + WhatsApp button
│   ├── not-found.tsx        ← Custom 404 page
│   ├── page.tsx             ← Homepage (/)
│   ├── about/
│   │   └── page.tsx         ← About Us page (/about)
│   ├── courses/
│   │   └── page.tsx         ← Courses & Programs (/courses)
│   ├── gallery/
│   │   └── page.tsx         ← Gallery (/gallery)
│   └── contact/
│       └── page.tsx         ← Contact & Enrolment form (/contact)
│
└── components/
    ├── Navbar.tsx            ← Sticky transparent→frosted navbar
    ├── Footer.tsx            ← Full footer with links, hours, contact
    ├── SectionHeader.tsx     ← Reusable section heading with tag + subtitle
    ├── BenefitCard.tsx       ← Icon + title + description card
    ├── CourseCard.tsx        ← Course card with pricing + enrol CTA
    ├── TestimonialCard.tsx   ← Star-rated parent testimonials
    └── WhatsAppButton.tsx    ← Floating WhatsApp CTA (bottom-right)
```

---

## 🎨 Design System

### Color Palette
| Token                    | Hex       | Usage                            |
|--------------------------|-----------|----------------------------------|
| `--color-saffron`        | `#E8762E` | Primary brand, CTAs, accents     |
| `--color-saffron-light`  | `#F5A455` | Hover states, light highlights   |
| `--color-gold`           | `#C9960C` | Stars, shimmer, decorative text  |
| `--color-gold-light`     | `#F0C84A` | Shimmer animation accent         |
| `--color-deep`           | `#1A0F0A` | Dark backgrounds, headings       |
| `--color-cream`          | `#FBF5E6` | Page background (light sections) |
| `--color-cream-dark`     | `#F0E6CC` | Alternate light section bg       |
| `--color-maroon`         | `#6B1A2A` | Decorative use only              |
| `--color-teal`           | `#1A6B6B` | Accent variation                 |

### Typography
| Variable          | Font         | Style           | Used For            |
|-------------------|--------------|-----------------|---------------------|
| `--font-display`  | Cinzel       | Serif, all-caps | Headings, logo, Om  |
| `--font-body`     | Crimson Pro  | Humanist serif  | Body paragraphs     |
| `--font-ui`       | Nunito Sans  | Rounded sans    | Buttons, labels, UI |

Apply via utility classes: `font-display`, `font-body`, `font-ui`

### Custom CSS Utilities
| Class               | Effect                                      |
|---------------------|---------------------------------------------|
| `.shimmer-text`     | Gold shimmer animation on text              |
| `.card-lift`        | Hover lift + saffron shadow                 |
| `.animate-float`    | Gentle up-down float loop                   |
| `.animate-spin-slow`| 20s slow rotation (mandala ornaments)       |
| `.animate-fade-up`  | Entrance animation (opacity + Y-translate)  |
| `.mandala-border`   | Gradient underline below headings           |
| `.lotus-bg`         | Subtle saffron/gold radial gradient overlay |
| `.pulse-ring`       | Pulsing ring border (logo badge)            |

---

## 📄 Pages

### `/` — Homepage
Sections in order:
1. **Hero** — Headline, subtext, feature pills, dual CTA, animated Om circle
2. **Stats bar** — 4 key numbers (saffron background)
3. **About Snippet** — What is Gandharividye + visual block
4. **Benefits** — 6 benefit cards (concentration, intuition, memory, etc.)
5. **Courses** — 3 course cards (offline, online, workshop)
6. **Journey Steps** — 4-step numbered process
7. **Testimonials** — 3 parent testimonials
8. **FAQ** — 5 `<details>` accordion items
9. **CTA Banner** — Final enrollment push

### `/about` — About Us
- Dark hero header
- Founder story + mission block
- Timeline milestones (2018–2025)
- Team cards (4 members)
- Values grid (6 values, dark section)

### `/courses` — Courses & Programs
- Dark header
- 3 detailed program cards with:
  - Full curriculum breakdown
  - What's included checklist
  - Enrol + consultation CTAs

### `/gallery` — Gallery
- Sticky filter tab bar
- 12-item placeholder grid (replace with real `<Image>` tags)
- Video placeholder section
- CTA banner

### `/contact` — Contact Us
- Dark header
- Contact info sidebar (address, phone, email, hours)
- Full enquiry/enrolment form (parent, child, age, program, message)
- Map placeholder with Google Maps link

### `/_not-found` — 404
- Spiritual 404 with Om symbol and homepage link

---

## 🔧 Key Components Guide

### `<SectionHeader>`
```tsx
<SectionHeader
  tag="Optional tag label"     // Shown as pill above title
  title="Section Title"
  subtitle="Optional subtitle paragraph"
  centered={true}              // Default true
  light={false}                // For dark backgrounds
/>
```

### `<BenefitCard>`
```tsx
<BenefitCard
  icon="🧠"
  title="Enhanced Concentration"
  description="Description text here..."
  delay={160}                  // Animation stagger delay in ms
/>
```

### `<CourseCard>`
```tsx
<CourseCard
  badge="Most Popular"
  title="Program Name"
  description="Brief description..."
  duration="4 Weeks"
  students="Max 20"
  rating="4.9"
  mode="Offline"               // "Online" | "Offline" | "Both"
  // price="₹3,999"
  href="/courses"
  featured={true}              // Highlights with saffron ring
/>
```

### `<TestimonialCard>`
```tsx
<TestimonialCard
  name="Parent Name"
  role="Mother of 9-year-old"
  quote="Their testimonial text..."
  stars={5}
  initials="PN"
/>
```

---

## 🌐 SEO

- Page-level `metadata` export on every route (title, description, keywords)
- Root layout sets global OpenGraph defaults
- Font preloading via `<link rel="preconnect">`
- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`)
- `alt` text ready for all images (replace placeholders with real images)

---

## 📱 Adding Real Content

### Replace placeholder images
1. Add real photos to `public/images/`
2. Import `Image` from `next/image`
3. Replace emoji/icon placeholders with:
```tsx
import Image from "next/image";
<Image src="/images/session-1.jpg" alt="Gandharividye session" fill className="object-cover" />
```

### Connect the Contact Form
Replace the `<form action="#">` in `/contact/page.tsx` with your preferred solution:
- **Formspree**: `action="https://formspree.io/f/YOUR_ID"`
- **EmailJS**: Add client-side handler
- **API Route**: Create `src/app/api/contact/route.ts`

### WhatsApp number
Update the phone number in `src/components/WhatsAppButton.tsx` and `src/components/Navbar.tsx`.

---

## 🛠 Tech Stack

| Technology     | Version | Purpose                   |
|----------------|---------|---------------------------|
| Next.js        | 16.x    | React framework, App Router|
| React          | 19.x    | UI library                 |
| Tailwind CSS   | 4.x     | Utility-first styling      |
| TypeScript     | 5.x     | Type safety                |
| lucide-react   | latest  | Icon library               |
| Google Fonts   | —       | Cinzel, Crimson Pro, Nunito|

---

## 🗺️ Recommended Next Steps

1. **Real images** — Replace all emoji placeholders with actual photography
2. **Form backend** — Connect contact form to email or CRM
3. **WhatsApp** — Update phone number throughout
4. **Google Analytics** — Add `@next/third-parties` GA4 integration
5. **Testimonials CMS** — Move to Sanity/Contentful for easy updates
6. **Batch schedule** — Add a dynamic upcoming batches section
7. **Video** — Embed YouTube demo videos in Gallery
8. **i18n** — Add Kannada/Hindi language support with `next-intl`

---

*Built with 🙏 for Trinetra Foundation*
