# N7 Banking Landing Page

A sleek, responsive, and pixel-focused landing page for a modern banking platform. Built using Next.js, React, and Tailwind CSS, this project features a dark aesthetic, optimized typography, smooth layout components, and fluid animations.

## Features

* Next.js 15+ architecture with App Router support.
* Fully responsive design tailored for mobile, tablet, and desktop viewports.
* Modern dark theme with a customized neon-cyan and blue visual identity.
* Reusable Tailwind UI components including specialized primary/secondary buttons and standard layouts.
* Custom CSS animations for a smooth user experience (including an infinite marquee tracker and subtle floating elements).
* Clean section-based architecture for modular development and easy scaling.

## Project Structure

The project follows a standard Next.js directory layout:

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Core global styles, theme variables, and Tailwind utilities
│   │   ├── layout.tsx       # Root layout definition (metadata, HTML, and Body shells)
│   │   └── page.tsx         # Primary Home entry point compiling landing page sections
│   └── components/
│       └── sections/        # Section-specific components (Hero, CoreBanking, Efficiency, etc.)
├── public/                  # Static assets (images, icons, vectors)
└── package.json             # Project dependencies and custom scripts

```

## Section Components

The landing page is systematically built using the following modular sections:

* Header & Hero
* Solutions Showcase
* Core Banking Features
* Efficiency & Performance Metrics
* Blue Banners (Standard & Light variations)
* Infinite Marquee Tracker
* Mobile Banking Showcase
* Articles & Industry News
* Case Studies
* CTA Footer

## Getting Started

### Prerequisites

Make sure you have Node.js (v18.x or higher recommended) and npm/pnpm/yarn installed.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SG17THEProgrammer/N7_Website_Codelinear.git
cd n7-banking

```


2. Install the necessary dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install

```



### Running the Project

Start the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```

Open http://localhost:3000 in your browser to view the application.

### Production Deployment

To build the application for optimal production deployment:

```bash
npm run build
npm run start

```

## Technologies Used

* Next.js (App Router)
* React
* Tailwind CSS
* PostCSS
