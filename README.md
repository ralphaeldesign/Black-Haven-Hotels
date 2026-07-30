# Black Haven Hotel & Suites — 5-Star Luxury Application

A 5-star luxury hotel web application crafted for **Black Haven Hotel & Suites**, Mayfair, London. Built with React, Vite, Tailwind CSS, Motion (Framer Motion), and React Router. Designed to offer a seamless luxury experience inspired by properties such as Ritz-Carlton, Four Seasons, Marriott, and Hilton.

---

## Key Features

- **Opulent Design & Aesthetic**: Deep obsidian black (#0A0A0A), metallic gold (#D4AF37), and warm marble palette paired with Poppins and Cormorant Garamond display typography.
- **Glassmorphism Navigation**: Sticky blur navbar with top concierge strip, mobile drawer menu, active link indicators, and gold CTA.
- **Cinematic Hero**: Autoplay luxury hotel video background with floating scroll indicator and quick availability booking widget.
- **Complete Page Suite**:
  - **Home**: Hero, booking bar, heritage introduction, featured suites, luxury apartments, 12-grid hotel amenities, fine dining spotlight, infinity rooftop pool & spa, animated counters, testimonials, FAQ accordion, contact form, and Google Maps location.
  - **Rooms & Suites**: Category filtering (Penthouse, Presidential, Executive, Suite, Deluxe), live search, room cards, and detailed suite modals.
  - **Luxury Apartments**: 1, 2, and 3-bedroom long-stay penthouse residences with Gaggenau kitchens and Rolls-Royce chauffeur privileges.
  - **Restaurant & Fine Dining**: 3-Michelin-starred L'Étoile Noir, The Gold Vault Bar, Aura Rooftop Lounge, Veranda High Tea, and table reservation engine.
  - **Spa & Wellness**: Aura Thermal Spa rituals, hydrotherapy, Technogym 24/7 fitness club, and spa appointment scheduling.
  - **Gallery**: Category-filtered high-resolution photo gallery with Lightbox viewer.
  - **Events & Weddings**: Grand Obsidian Ballroom, Mayfair Boardroom, Sky Terrace Garden, and event planning proposal form.
  - **About Us**: Heritage story, Forbes 5-Star certification, and 3-Michelin-star achievements.
  - **Contact**: VIP concierge messaging, department direct lines, and interactive Google Maps embed.
  - **Book Now**: Step-by-step room booking engine, add-ons selection (Chauffeur, Dom Pérignon, Butler, Spa Pass), and printable reservation receipt modal.
  - **404 Page**: Custom dark luxury page.

---

## Tech Stack & Dependencies

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- **React Router DOM v7**
- **Motion (Framer Motion)**
- **Lucide React Icons**

---

## Local Development & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Outputs optimized static assets to the `dist/` directory.

---

## Deployment Instructions

### Deploy to Vercel
1. Push code repository to GitHub/GitLab.
2. Import project in Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy!

### Deploy to GitHub Pages
1. Ensure `vite.config.ts` has `base: './'` or your repo path.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` directory to your gh-pages branch or GitHub Actions static page builder.

---

## License

Apache-2.0
