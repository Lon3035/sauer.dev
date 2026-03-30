# Sauer.dev - Personal Website

A modern, terminal-themed personal website built with **Next.js 15** and **TypeScript**. This project serves as a digital portfolio and a hub for personal tools and information.

Live Version: **[Sauer.dev](https://sauer.dev)**

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & PostCSS
- **Icons & Fonts:** Fontsource Cascadia Code
- **Deployment:** [Fly.io](https://fly.io/) via Docker

## 🛠️ Getting Started

### Prerequisites

Make sure you have **Node.js** (v20 or higher) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Lon3035/sauer.dev.git](https://github.com/Lon3035/sauer.dev.git)
   cd sauer.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

To create an optimized production build:
```bash
npm run build
npm start
```

## 🌐 Project Structure & Features

- **Terminal Interface:** A custom-built terminal UI with command-based navigation.
- **Dynamic Routing:** Includes dynamic routes for file downloads from my public bucket (e.g., `/download/[filename]`).
- **About Me:** Integrated system information layout inspired by Neofetch.
- **GPG Integration:** Publicly accessible GPG key information.
- **Fly.io Deployment:** Configured for seamless deployment using `fly.toml` and a custom `Dockerfile`.

## 📜 Credits

- **Neofetch** - Inspiration for the system information ASCII art.
