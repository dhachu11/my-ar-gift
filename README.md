# AR Gift Creator — Official Product Landing Page

A premium, international SaaS-grade sales landing page for **AR Gift Creator** — the WebAR software that transforms printed photographs into interactive augmented reality video memories.

---

## 🌟 Overview & Isolation

This project is **100% independent** from the main AR Gift Creator application repository (`ar-gift-creator`):
- **Landing Page Path**: `C:\Users\dhara\OneDrive\Desktop\My_AR\ar-gift-landing-page`
- **Creator Studio Path**: `C:\Users\dhara\OneDrive\Desktop\My_AR\ar-gift-creator`
- **Zero Cross-Dependencies**: Built with its own Vite, Tailwind CSS, Lucide icons, and deployment pipeline.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism Theme
- **Typography**: Inter, Manrope, Space Grotesk
- **Icons**: Lucide React
- **Architecture**: 100% Client-Side Static Single-Page Application (SPA)

---

## 🚀 Development Server

To run the landing page locally:

```bash
cd "C:\Users\dhara\OneDrive\Desktop\My_AR\ar-gift-landing-page"
npm install
npm run dev
```

Local preview URL will open on:
`http://localhost:5174`

---

## 📦 Production Build

To build the static distribution for deployment:

```bash
npm run build
```

The production assets will be generated in `dist/`.

---

## ⚙️ Configuration & Customization

All copy, contact links, pricing details, and external URLs are centralized in:
[`src/config/siteConfig.js`](./src/config/siteConfig.js)

To update checkout links or WhatsApp numbers:
```javascript
export const siteConfig = {
  urls: {
    creatorStudio: 'https://argiftcreator.netlify.app',
    whatsappNumber: '+91 90801 69516',
    whatsappLink: 'https://wa.me/919080169516?text=...',
    supportEmail: 'support@argiftcreator.com',
  },
  // Pricing tiers, FAQs, etc.
};
```

---

## 🌐 Netlify Deployment

To deploy this landing page independently to Netlify:

1. In your Netlify dashboard, click **Add new site → Deploy manually** (drag and drop the `dist` folder), OR
2. Push this folder to a dedicated GitHub repository (`ar-gift-landing-page`) and connect it to a new Netlify site with:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

