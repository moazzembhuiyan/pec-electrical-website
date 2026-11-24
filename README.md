<div align="center">

<img src=".github/banner.svg" width="100%" alt="PEC Electrical — Professional electrical services" />

<p><b>🌐 Business Website</b></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lottie-00DDB3?style=for-the-badge&logo=lottiefiles&logoColor=white" alt="Lottie" />
</p>

</div>

## 📖 Overview

A fast, animated business website for **PEC Electrical**, an electrical services company. Visitors can explore services, read blogs, view the project gallery and **book a service online**. Content is managed from the companion [admin dashboard](https://github.com/moazzembhuiyan/pec-electrical-dashboard).

## ✨ Key Features

- Animated home page with smooth scrolling (Lenis) and scroll progress
- Services list, service detail and featured service pages
- **Online service booking** with date picker
- Blog list & blog detail pages
- Project gallery with lightbox
- About, Contact, Privacy Policy and Terms pages
- Dynamic, SEO-friendly URLs
- Fully responsive design

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) · React 19 |
| **Language** | JavaScript |
| **Styling** | Tailwind CSS v4 · shadcn/ui (Radix) |
| **Animation** | Framer Motion · Lenis · Lottie · React CountUp |
| **UI** | Embla Carousel · Lightbox · React Day Picker · Sonner · SweetAlert2 |
| **Forms** | React Hook Form |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/moazzembhuiyan/pec-electrical-website.git
cd pec-electrical-website
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BASE_URL=
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | Backend API base URL |

### Run

```bash
npm run dev
# open http://localhost:3000
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```text
src/
├── app/            # home, about, services, book-service, blogs, gallery, contact...
├── components/     # UI components
├── context/ · Hooks/
└── lib/
public/             # Static assets
```

---

<div align="center">

### 👨‍💻 Developed by [Moazzem Hossen Bhuiyan](https://github.com/moazzembhuiyan)

<sub>Mobile App Developer (React Native) • Web Developer</sub>

<p>
  <a href="https://github.com/moazzembhuiyan"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/moazzem-hossen-bhuiyan-325432331/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:moazzembhuiyan394@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

<sub>⭐ If you like this project, consider giving it a star!</sub>

</div>
