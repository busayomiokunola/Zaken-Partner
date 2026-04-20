# Zaken Partner Ltd — Official Website

> **Live Site:** [https://www.zakenpartner.org](https://www.zakenpartner.org)

A modern, responsive landing page for **Zaken Partner Ltd** — a strategic business partnership firm that builds, structures, and grows businesses while founders retain full ownership.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI component library |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **Vite** | Build tool & dev server |
| **Vercel** | Deployment & hosting |

---

## ✨ Features

- Fully responsive design across mobile, tablet, and desktop
- Smooth client-side routing with React Router
- Animated UI components with Framer Motion
- Optimized production build with Vite
- Auto-deployment on every push to `main`

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/busayomiokunola/Zaken-Partner.git
cd Zaken-Partner
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:8080`

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
Zaken-Partner/
├── public/             # Static assets (favicon, images)
├── src/
│   ├── assets/         # Images, logos, icons
│   ├── components/     # Reusable UI components
│   │   └── ui/         # Base UI components
│   ├── pages/          # Route-level page components
│   ├── styles/         # Global styles
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # Application entry point
│   └── vite-env.d.ts   # Vite type declarations
├── index.html          # Root HTML file
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── vercel.json         # Vercel routing configuration
└── package.json        # Dependencies and scripts
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with a custom domain.

🔗 **[https://www.zakenpartner.org](https://www.zakenpartner.org)**

### Deploy your own fork

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite with these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**

Every push to `main` triggers an automatic redeployment.

> **Note:** A `vercel.json` rewrite rule is included to support client-side routing:
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
> }
> ```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is proprietary and owned by **Zaken Partner Ltd**. All rights reserved.

---

## 📬 Contact

Visit us at [https://www.zakenpartner.org](https://www.zakenpartner.org) for enquiries.
