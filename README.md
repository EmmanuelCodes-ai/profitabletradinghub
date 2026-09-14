# 🚀 Profitable Trading Hub (PTHub)

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<p align="center">
  <strong>The Last Trading Mentorship You'll Ever Need.</strong><br>
  Stop jumping from strategy to strategy and master a proven, structured framework for consistent trading profitability.
</p>

</div>

---

## 📖 Overview

**Profitable Trading Hub (PTHub)** is a high-performance, modern web platform designed for forex and prop firm traders seeking structured education, institutional market models, and mentorship. 

Built with React 19, Vite, TypeScript, and Tailwind CSS, the platform delivers an ultra-sleek, responsive dark-mode interface with interactive treasury management, client enrollment flows, video masterclasses, and verified community results.

---

## ✨ Key Features

- 🎯 **Institutional Forex Mentorship**: Comprehensive learning tracks covering risk management, market psychology, and high-probability price delivery.
- 💼 **Interactive Treasury & Balance Portal**: Multi-currency account balance previews (USD, EUR, GBP, BTC, ETH, USDT) with instant top-up, simulated transfers, and transaction ledger histories.
- 📋 **Multi-Step Client Enrollment**: Guided onboarding questionnaire and checkout workflow (`BecomeClientModal`) supporting TRC20/USDT, crypto networks, and direct verification.
- 🎥 **Integrated Video Masterclasses**: Custom video previews, trading setups breakdown, and curriculum modules.
- 🌟 **Verified Testimonials & Proof**: Showcasing real funded trader certificates, prop firm payouts, and trader case studies.
- 📱 **Fully Responsive & Polished Design**: Crafted with custom glassmorphism, fluid micro-animations, and modern typography (Plus Jakarta Sans, Syne, Outfit, Instrument Serif).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tooling** | [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Motion](https://motion.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### 1. Clone the Repository
```bash
git clone https://github.com/EmmanuelCodes-ai/profitabletradinghub.git
cd profitabletradinghub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add any required API keys (such as `GEMINI_API_KEY` or `APP_URL`).

### 4. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

---

## 🧪 Available Scripts

- **`npm run dev`** — Starts the local development server with HMR.
- **`npm run build`** — Compiles TypeScript and builds production assets to `dist/`.
- **`npm run lint`** — Runs `tsc --noEmit` to validate all TypeScript types.
- **`npm run preview`** — Previews the production build locally.

---

## 🌐 Deploying to Vercel

This repository is fully configured for zero-configuration Vercel deployment with [`vercel.json`](vercel.json).

### Method A: Deploy via GitHub (Recommended)
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update README and deployment configuration"
   git push origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import the `EmmanuelCodes-ai/profitabletradinghub` repository.
4. Framework preset **Vite** will be detected automatically. Click **Deploy**.

### Method B: Deploy via Vercel CLI
```bash
# Login to your Vercel account
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

---

## 📂 Project Structure

```text
profitabletradinghub/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, banners, and media
│   ├── components/          # Reusable UI sections & modals
│   │   ├── AboutUsPage.tsx
│   │   ├── BalanceDetailsModal.tsx
│   │   ├── BecomeClientModal.tsx
│   │   ├── ContactUsPage.tsx
│   │   ├── CoursePurposeSection.tsx
│   │   ├── CourseVideoPlayer.tsx
│   │   ├── EnrollmentSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── LearningSolutionsSection.tsx
│   │   ├── NavModals.tsx
│   │   ├── PotreeHero.tsx
│   │   ├── RegisterModal.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TopUpModal.tsx
│   │   └── TransferModal.tsx
│   ├── App.tsx              # Main application root & state
│   ├── data.ts              # Currencies & transaction datasets
│   ├── types.ts             # TypeScript interfaces & types
│   ├── vite-env.d.ts        # Vite client environment declarations
│   └── main.tsx             # DOM mounting entry point
├── index.html               # Main HTML entry & SEO meta tags
├── vercel.json              # Vercel SPA routing & build configuration
├── vite.config.ts           # Vite + Tailwind + React configuration
├── tsconfig.json            # TypeScript compiler configuration
└── package.json             # Project dependencies and npm scripts
```

---

## 📄 License

This project is private and proprietary to **Profitable Trading Hub**. All rights reserved.
