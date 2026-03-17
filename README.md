# Job Listings with Filtering 🚀

A Next.js + Zustand project built for the Frontend Mentor challenge.

## ✅ Features
- Job listings with filtering by tags
- Zustand global state management
- Filters persist after page refresh (localStorage)
- Dark / Light mode toggle
- Job detail page with dynamic routing (`/jobs/:id`)
- Fully responsive (mobile + desktop)
- SSR with Next.js API routes

---

## 🛠️ How to Run Locally

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Run the development server
```bash
npm run dev
```

### Step 3 — Open in browser
```
http://localhost:3000
```

---

## 🚀 Deploy on Vercel

### Option 1 — Via GitHub (Recommended)
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Select your GitHub repo
5. Click **Deploy** — done! ✅

### Option 2 — Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
job-listings/
├── app/
│   ├── api/
│   │   └── jobs/
│   │       └── route.js         ← API endpoint for job data
│   ├── components/
│   │   ├── Header.js            ← Teal header with pattern
│   │   ├── FilterBar.js         ← Active filters + clear button
│   │   ├── JobCard.js           ← Individual job card
│   │   ├── JobsList.js          ← Filtered jobs list
│   │   ├── TagButton.js         ← Tag button for detail page
│   │   └── DarkModeToggle.js    ← Dark/light mode toggle
│   ├── jobs/
│   │   └── [id]/
│   │       └── page.js          ← Job detail page
│   ├── globals.css              ← All styles
│   ├── layout.js                ← Root layout
│   └── page.js                  ← Home page (SSR)
├── store/
│   └── filterStore.js           ← Zustand store (filters + dark mode)
├── next.config.js
└── package.json
```

---

## 🧠 Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 14** | Framework, routing, SSR, API routes |
| **Zustand** | Global state (filters + dark mode) |
| **Zustand persist** | Save filters to localStorage |
| **CSS** | Styling (no Tailwind, pure CSS) |
| **Vercel** | Deployment |
