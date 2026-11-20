
The Grey Restaurant
A premium, responsive restaurant website inspired by The Grey in Savannah, Georgia. The project presents the restaurant’s story, menu, dining experiences, gallery, press coverage, market, contact information, and reservation experience.

Features
Responsive restaurant landing page
Route-based navigation for menu, story, gallery, press, and contact pages
Filterable restaurant menu
Reservation request form with confirmation feedback
Dining experience, market, and gallery sections
Image lightbox
Scroll-triggered reveal animations
Mobile navigation menu
Dark luxury-themed visual system
Custom 404 and server error pages
SEO-friendly page titles and metadata
Cloudflare deployment configuration
Tech Stack
React 19
TypeScript
TanStack Start
TanStack Router
TanStack Query
Vite
Tailwind CSS 4
Custom CSS
Radix UI
Framer Motion
Lucide React
React Hook Form
Zod
Cloudflare Vite Plugin
ESLint
Prettier
Lovable Vite configuration
Pages
Route	Description
/	Restaurant introduction, featured menu items, press, and reservation calls to action
/about	Restaurant history and founder profiles
/menu	Categorized food and beverage menu
/experience	Jazz nights, bar, private dining, and chef’s counter
/gallery	Restaurant, food, and atmosphere photo gallery
/press	Press coverage and restaurant reviews
/market	Pantry products and branded merchandise
/reservations	Reservation request form
/contact	Location, opening hours, phone, and email
Getting Started
Prerequisites
Node.js 18 or newer
npm or Bun
Installation
bash
git clone https://github.com/samson410/grey-restaurant.git
cd grey-restaurant
npm install
Development
bash
npm run dev
Open the local URL printed by Vite.

Build
bash
npm run build
Preview the production build
bash
npm run preview
``>

### Lint

```bash
npm run lint
Format
bash
npm run format
Project Structure
Text
src/
├── assets/        Images used throughout the website
├── components/    Reusable UI and layout components
├── hooks/         Custom React hooks
├── lib/           Shared data and server utilities
├── routes/        Application pages and route definitions
├── router.tsx     TanStack Router configuration
├── server.ts      Cloudflare and SSR server entry
├── start.ts       TanStack Start middleware
└── styles.css     Tailwind configuration and custom theme styles
Key Frontend Implementation
TanStack file-based routing keeps each page in src/routes
Shared navigation, footer, and scroll progress components wrap every page
The Reveal component uses the Intersection Observer API for scroll animations
The gallery uses React state to open and close full-size images
The reservation form demonstrates controlled UI feedback without a live booking integration
Custom CSS variables provide a consistent blue, cream, and charcoal visual theme
Tailwind CSS handles responsive layout and utility-based styling
Page-level metadata is configured with TanStack Router
Reservation and Commerce Note
The current reservation form validates and displays a client-side confirmation. It does not send bookings to a server or external reservation provider.

The market page is a frontend product showcase. The displayed products and “Add” interaction are not connected to an inventory or payment system.

Deployment
The repository includes configuration for Vite and Cloudflare:

vite.config.ts
wrangler.jsonc
vercel.json
After building the project, deploy the generated output using the deployment platform configured for the repository.



Repository
https://github.com/samson410/grey-restaurant
